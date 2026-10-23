#!/usr/bin/env python3
"""
build-ability-cooldowns.py — regenerates the ability-cooldown data used by
Chat Gator's live cooldown tracker, from a Camelot Herald/Eden-style
"charplan" export (a big per-class JSON dump of every trained spell, style,
and realm ability).

Pipeline:
  charplan_<version>.json  (not checked into the repo — put your own copy
                             next to this script, or pass its path as argv[1])
    -> ability_cooldown.json                 (clean name -> {cooldown, icon})
    -> ability_cooldown_duplicates.json       (same name, conflicting values — reviewed by hand)
    -> ability_cooldown_ignored_dynamic.json  (realm abilities with per-level cooldown reduction — skipped, level unknown)
    -> js/ability-cooldowns.js                (the clean map, baked into JS + cooldown pre-converted to seconds)

Re-run this whenever a new charplan export is available (e.g. after a
game-balance patch) to refresh js/ability-cooldowns.js.

How an ability's cooldown is found:
  - Spells/styles: each "skill" object (and any subSkills, which can carry
    their own cooldown distinct from the parent) has an "attributes" list of
    [key, value] pairs; we look for the "Recast Delay" key.
  - Realm abilities: each has a "levels" list, one entry per trained rank,
    each optionally carrying its own "cooldown". If every rank shares the
    same cooldown value (e.g. Speed of Sound — only the effect scales with
    rank, not the reuse timer) we use that single value. If the cooldown
    itself changes per rank (e.g. Adrenaline Rush, Purge, Charge — these get
    *shorter* at higher ranks) we can't know which rank a given character
    has trained, so the ability is skipped entirely and listed in
    ability_cooldown_ignored_dynamic.json for visibility.

Duplicates: the same ability name can legitimately show different cooldown
or icon values when multiple classes train it with different stats (e.g.
"Stunning Shout" is a 10s stun for Minstrel but a 30s mesmerize for Skald —
same name, genuinely different ability). We can't disambiguate without
knowing which class a given character plays, so for now these are left out
of the clean map/js module entirely and only recorded in
ability_cooldown_duplicates.json for manual follow-up.
"""
import json
import re
import sys
from collections import defaultdict

SRC = sys.argv[1] if len(sys.argv) > 1 else "charplan_1_0_62.json"

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

entries = defaultdict(list)   # name -> [(cooldown_str, icon, source), ...]
ignored_dynamic = {}          # name -> sorted list of distinct cooldown strings seen


def clean_name(name):
    # A handful of charplan entries (e.g. the whole Bainshee aura line, all
    # 6 classes' "Mastery of Stealth") carry a trailing space in their own
    # "name" field. Using that raw string as a dict key means the lookup
    # silently never matches anything: the log prints the name WITHOUT the
    # stray space, every other charplan occurrence of the same ability
    # (almost always) doesn't have it either, and even the icon/cooldown
    # values on the mismatched entries look completely normal, so nothing
    # about this is visible without diffing keys byte-for-byte. Stripped
    # once, right here, so every lookup and every merge-by-name downstream
    # (duplicate reconciliation included) sees one consistent key.
    return name.strip() if isinstance(name, str) else name


def record(name, cooldown, icon, source):
    if name is None or cooldown is None:
        return
    entries[clean_name(name)].append((cooldown, icon, source))


def extract_recast_delay(attributes):
    for a in (attributes or []):
        if len(a) == 2 and a[0] == "Recast Delay":
            return a[1]
    return None


def walk_skill(sk, source):
    name = sk.get("name")
    icon = sk.get("icon")
    cooldown = extract_recast_delay(sk.get("attributes"))
    if cooldown is not None:
        record(name, cooldown, icon, source)
    for sub in (sk.get("subSkills") or []):
        walk_skill(sub, source + "/sub")


for c in data:
    class_name = c.get("name")

    # ---- realm abilities (class-level) ----
    for ra in (c.get("realmAbilities") or []):
        name = clean_name(ra.get("name"))
        icon = ra.get("icon")
        levels = ra.get("levels") or []
        cds = {lvl.get("cooldown") for lvl in levels if lvl.get("cooldown") is not None}
        if not cds:
            continue  # no cooldown at all (e.g. a passive stat bonus)
        if len(cds) > 1:
            ignored_dynamic.setdefault(name, set()).update(cds)
            continue
        cooldown = next(iter(cds))
        record(name, cooldown, icon, f"realmAbility:{class_name}")

    # ---- trained spec skills & spells ----
    for spec in (c.get("specs") or []):
        spec_name = spec.get("name")
        for sg in (spec.get("skillGroups") or []):
            group_name = sg.get("name")
            for sk in (sg.get("skills") or []):
                walk_skill(sk, f"skillGroup:{class_name}/{spec_name}/{group_name}")
        for sl in (spec.get("spellLines") or []):
            for sgroup in (sl.get("spellGroups") or []):
                group_name = sgroup.get("name")
                for sk in (sgroup.get("skills") or []):
                    walk_skill(sk, f"spellGroup:{class_name}/{spec_name}/{group_name}")

# ---- reconcile: clean map vs. conflicting duplicates ----
clean = {}
duplicates = {}
for name, recs in entries.items():
    unique_pairs = {(cd, icon) for cd, icon, _src in recs}
    if len(unique_pairs) == 1:
        cd, icon = next(iter(unique_pairs))
        clean[name] = {"cooldown": cd, "icon": icon}
    else:
        duplicates[name] = [
            {"cooldown": cd, "icon": icon, "source": src} for cd, icon, src in recs
        ]

ignored_list = {name: sorted(cds) for name, cds in ignored_dynamic.items()}

with open("ability_cooldown.json", "w", encoding="utf-8") as f:
    json.dump(clean, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")

with open("ability_cooldown_duplicates.json", "w", encoding="utf-8") as f:
    json.dump(duplicates, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")

with open("ability_cooldown_ignored_dynamic.json", "w", encoding="utf-8") as f:
    json.dump(ignored_list, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")


# ---- cooldown string -> seconds, for the JS module ----
def cooldown_to_seconds(s):
    m = re.fullmatch(r"(\d+(?:\.\d+)?)s", s)
    if m:
        return float(m.group(1))
    m = re.fullmatch(r"(\d+):(\d+) min", s)
    if m:
        return int(m.group(1)) * 60 + int(m.group(2))
    m = re.fullmatch(r"(\d+):(\d+) h", s)
    if m:
        return int(m.group(1)) * 3600 + int(m.group(2)) * 60
    return None


js_map = {}
unparsed = []
for name, v in clean.items():
    secs = cooldown_to_seconds(v["cooldown"])
    if secs is None:
        unparsed.append((name, v["cooldown"]))
        continue
    js_map[name] = {"cooldownSeconds": secs, "cooldown": v["cooldown"], "icon": v["icon"]}

if unparsed:
    print(f"WARNING: {len(unparsed)} cooldown strings didn't match a known format and were left out of js/ability-cooldowns.js:")
    for name, cd in unparsed:
        print(f"  {name!r}: {cd!r}")

js_lines = []
js_lines.append("// ability-cooldowns.js — GENERATED FILE, do not hand-edit.")
js_lines.append("// Produced by tools/build-ability-cooldowns.py from a charplan export.")
js_lines.append("// Flat map of ability name -> { cooldownSeconds, cooldown (display string), icon }.")
js_lines.append("// `icon` is the numeric icon id from the client's spell-icon atlas; there is no")
js_lines.append("// id -> image mapping yet (future work), so the UI just shows the bare id for now.")
js_lines.append("//")
js_lines.append("// A handful of ability names are deliberately left out of this map:")
js_lines.append("//   - names with a multi-rank cooldown (Adrenaline Rush, Charge, Concentration,")
js_lines.append("//     Purge, Second Wind) — we don't know which rank a character has trained,")
js_lines.append("//     see ability_cooldown_ignored_dynamic.json.")
js_lines.append("//   - names that mean different things on different classes with conflicting")
js_lines.append("//     cooldown/icon data (Disperse Strength, Major Deliverance, Stunning Shout)")
js_lines.append("//     — see ability_cooldown_duplicates.json. Re-add once we can disambiguate")
js_lines.append("//     by the character's class.")
js_lines.append("export const ABILITY_COOLDOWNS = ")
js_lines.append(json.dumps(js_map, indent=2, sort_keys=True, ensure_ascii=False))
js_lines.append(";")
js_lines.append("")

with open("js/ability-cooldowns.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))

print(f"clean abilities written:        {len(clean)}")
print(f"duplicates flagged:             {len(duplicates)}")
print(f"ignored (multi-tier dynamic):   {len(ignored_list)}")
print(f"js/ability-cooldowns.js entries: {len(js_map)}")
