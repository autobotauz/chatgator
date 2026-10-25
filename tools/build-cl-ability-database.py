#!/usr/bin/env python3
"""
build-cl-ability-database.py — companion to build-ability-database.py and
build-ability-cooldowns.py, but for Champion Level (CL) abilities instead of
class spec/spells.

Why this is a SEPARATE database rather than more entries merged into
ABILITY_DATABASE/ABILITY_COOLDOWNS: a champion-level ability is unlocked by
reaching a CL threshold and training a CL *line* (Fighter/Rogue/Acolyte/...),
not by playing a particular class — any class can train any line once high
enough CL. The source export (eden-daoc.net's charplan_cl.json) reflects
this: it's a flat list of "lines", each with an `id` (the actual CL line —
several realm-specific `name`s share one `id` and one identical skill list,
e.g. id 1 covers Fighter/Guardian/Viking, the three realms' tank-archetype
label for the same line) and a flat `skills` array of {item1, item2, item3}
where item3 is the ability itself (plus any subSkills, same shape as a
regular charplan's spec skills). Crucially there is no per-class ownership
here at all, so:
  - We deliberately do NOT record a `classes` list the way
    build-ability-database.py does — every name in this database is
    trainable by literally any class, so a `classes` field would be
    meaningless at best and actively misleading at worst (ui.js's
    isAbilityGhost uses `classes` to flag cross-class "ghost" rows; CL
    abilities must never be ghosted on that basis — see js/ui.js).
  - We dedupe by `id` across every line/realm-name that repeats the exact
    same skill (confirmed 1:1 name<->id for this export — see the
    `duplicate_name_conflicts` check below, kept as a guard in case a future
    export ever stops being 1:1).

Classification (isDamage/isHeal/type) reuses the identical data-driven rule
from build-ability-database.py: isDamage from a literal "Damage" attribute,
isHeal from a small hand-curated HEAL_TYPES set, both OR'd permissively
wherever a name is somehow ambiguous. See that script's module docstring for
the full rationale — unchanged here on purpose, so the two databases agree
on what "isDamage"/"isHeal" mean.

Also unlike the class-side split across two files (ability-database.js for
type/isDamage/isHeal, ability-cooldowns.js for cooldown/icon), this is ONE
file: CL has no per-class duplicate-cooldown problem (every name maps to
exactly one id/skill here), so there's no need for the separate
duplicates/ignored-dynamic side files that exist on the class side.

Pipeline:
  charplan_cl_<version>.json -> cl_ability_database.json  (clean map, for review)
                              -> js/cl-ability-database.js (same data, baked into JS)

Re-run whenever a new champion-level charplan export is available.
"""
import json
import re
import sys
from collections import defaultdict

SRC = sys.argv[1] if len(sys.argv) > 1 else "charplan_cl_1_0_62.json"

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

# Same safety net + heal list as build-ability-database.py, kept identical on
# purpose (see module docstring) rather than re-derived from this export
# alone, which is far too small to independently validate it.
DAMAGE_SAFETY_NET_TYPES = {"Bolt"}
HEAL_TYPES = {
    "Heal", "Heal Over Time", "Spread Heal", "Power Heal",
    "Savage Endurance Heal", "Omni Heal", "Style Heal", "Combat Heal",
}


def attrs_dict(attributes):
    d = {}
    for a in (attributes or []):
        if len(a) == 2:
            d[a[0]] = a[1]
    return d


def clean_name(name):
    # Same stray-trailing-space defense as the two sibling build scripts —
    # see their identical comment for why this matters (a key that silently
    # never matches any real log line is worse than no entry at all).
    return name.strip() if isinstance(name, str) else name


def cooldown_to_seconds(s):
    if s is None:
        return None
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


# id -> first-seen skill dict (dedup across every line/realm-name repeat).
by_id = {}
# name -> set of ids, purely as a guard: if this export ever stops being a
# clean 1:1 name<->id mapping (unlike today), we want a loud, visible signal
# rather than silently overwriting one ability's data with another's.
ids_by_name = defaultdict(set)


def walk(sk):
    sid = sk.get("id")
    name = clean_name(sk.get("name"))
    if sid is not None and name:
        ids_by_name[name].add(sid)
        if sid not in by_id:
            by_id[sid] = sk
    for sub in (sk.get("subSkills") or []):
        walk(sub)


for line in data:
    for entry in line.get("skills", []):
        walk(entry["item3"])

duplicate_name_conflicts = {n: sorted(ids) for n, ids in ids_by_name.items() if len(ids) > 1}
if duplicate_name_conflicts:
    print("WARNING: the following names map to more than one skill id — "
          "picking the first-seen id's data for each, but this export is no "
          "longer the clean 1:1 name<->id mapping this script assumes:")
    for n, ids in duplicate_name_conflicts.items():
        print(f"  {n!r}: ids {ids}")

result = {}
for sid, sk in by_id.items():
    name = clean_name(sk.get("name"))
    a = attrs_dict(sk.get("attributes"))
    t = a.get("Type")

    is_damage = ("Damage" in a) or (t in DAMAGE_SAFETY_NET_TYPES)
    is_heal = t in HEAL_TYPES
    is_pet_summon = bool(t) and "summon" in t.lower()

    cooldown_str = a.get("Recast Delay")
    result[name] = {
        "id": sid,
        "skillType": "style" if sk.get("skillType") == 3 else "spell",
        "type": t,
        "isDamage": is_damage,
        "isHeal": is_heal,
        "isPetSummon": is_pet_summon,
        "cooldown": cooldown_str,
        "cooldownSeconds": cooldown_to_seconds(cooldown_str),
        "icon": sk.get("icon"),
        "powerCost": a.get("Power Cost"),
        "enduranceCost": a.get("Endurance"),
        "castTime": a.get("Cast Time"),
        "damageType": a.get("Damage Type"),
        "requirement": a.get("Requirement") or sk.get("requirement"),
    }

with open("cl_ability_database.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")

js_lines = []
js_lines.append("// cl-ability-database.js — GENERATED FILE, do not hand-edit.")
js_lines.append("// Produced by tools/build-cl-ability-database.py from eden-daoc.net's")
js_lines.append("// champion-level charplan export (charplan_cl.json). Flat map of CL ability")
js_lines.append("// name -> { id, skillType, type, isDamage, isHeal, isPetSummon, cooldown,")
js_lines.append("// cooldownSeconds, icon, powerCost, enduranceCost, castTime, damageType,")
js_lines.append("// requirement }.")
js_lines.append("//")
js_lines.append("// Deliberately a SEPARATE database from ABILITY_DATABASE/ABILITY_COOLDOWNS,")
js_lines.append("// not more entries merged into them: a champion-level ability is trainable")
js_lines.append("// by any class once CL is high enough, so there is no `classes` list here —")
js_lines.append("// see tools/build-cl-ability-database.py's module docstring for why that")
js_lines.append("// matters to ui.js's isAbilityGhost (a CL ability must never be flagged as a")
js_lines.append("// cross-class \"ghost\" row just because it doesn't appear in the inferred")
js_lines.append("// class's own ABILITY_DATABASE entry).")
js_lines.append("//")
js_lines.append("// isDamage/isHeal follow the identical data-driven rule as")
js_lines.append("// build-ability-database.py (a literal \"Damage\" attribute, or Type in a")
js_lines.append("// small hand-curated heal-types list) — permissive by construction, so a")
js_lines.append("// gap here can only ever fail to catch a bug, never invent one.")
js_lines.append("export const CL_ABILITY_DATABASE = ")
js_lines.append(json.dumps(result, indent=2, sort_keys=True, ensure_ascii=False))
js_lines.append(";")
js_lines.append("")

with open("js/cl-ability-database.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))

print(f"\nnames written:          {len(result)}")
print(f"  isDamage=true:        {sum(1 for v in result.values() if v['isDamage'])}")
print(f"  isHeal=true:          {sum(1 for v in result.values() if v['isHeal'])}")
print(f"  with cooldown:        {sum(1 for v in result.values() if v['cooldownSeconds'] is not None)}")
print(f"  styles:               {sum(1 for v in result.values() if v['skillType'] == 'style')}")
