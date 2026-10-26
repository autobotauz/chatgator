#!/usr/bin/env python3
"""
build-ability-icons.py — ability name -> real client icon id, plus the PNGs
for exactly those icons, so the UI can show the in-game icon next to a spell,
style or realm ability.

Why this can't just use charplan's own `icon` field directly: that field
means two different things depending on what kind of skill it's on.
  - skillType 2 (spells, incl. spell subSkills and CL spells): `icon` is the
    client SPELL EFFECT id — the key into the client's spells.csv — not an
    icon id at all. e.g. Animist "Spirit of Anger" has icon 11130, which is
    spells.csv row 11130, whose real icon is 2385. Effect ids run past
    15000; real icon ids stop at ~5350, so using the raw value just points
    at the wrong picture (or none at all).
  - everything else (realm abilities, styles skillType 3, abilities
    skillType 0): `icon` already IS the icon id.
Verified against charplan 1.0.62: every skillType-2 value with a nonzero icon
resolves through spells.csv (and the names agree for ~2/3 of them; the rest
are server spells reusing a client effect under a different name, which is
expected — the effect still decides the picture).

Icon ids are then turned into pictures by tools/extract-daoc-icons.py, which
reads the game install (gamedata.mpk -> icons.csv/spells.csv, icons/*.bmp
sheets) and writes one PNG per icon id plus spell_effects.json. Run that
first, then this:

  python tools/extract-daoc-icons.py "C:\\Program Files (x86)\\Electronic Arts\\Dark Age of Camelot" <icons_out>
  python tools/build-ability-icons.py charplan_1_0_62.json charplan_cl_1_0_62.json <icons_out>

Outputs:
  js/ability-icons.js      name -> icon id (what the UI imports)
  ability_icons.json       same data, for review
  ability_icons_conflicts.json  names whose occurrences disagree on the icon
                           (the most common / top-level one wins — same
                           picture problem as the cooldown duplicates, but
                           harmless here: worst case is a sibling's icon)
  img/icons/new/<id>.png, img/icons/classic/<id>.png  only the ids used

When a name has several candidate icons, top-level skills beat subSkills
(a subSkill named e.g. "Haste Debuff, 21%, 20 sec" is the proc a style
fires, not the style itself), then the most frequent icon wins, then the
lowest id (just so reruns are stable).
"""
import json
import os
import shutil
import sys
from collections import Counter, defaultdict

MAIN = sys.argv[1] if len(sys.argv) > 1 else "charplan_1_0_62.json"
CL = sys.argv[2] if len(sys.argv) > 2 else "charplan_cl_1_0_62.json"
ICONS_OUT = sys.argv[3] if len(sys.argv) > 3 else os.path.join("..", "..", "chatGator", "daoc-icons", "out")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

effects = json.load(open(os.path.join(ICONS_OUT, "spell_effects.json"), encoding="utf-8"))
icon_map = json.load(open(os.path.join(ICONS_OUT, "icon_map.json"), encoding="utf-8"))

# name -> Counter of (priority, icon_id); priority 0 = top-level, 1 = subSkill
cands = defaultdict(Counter)
unresolved = Counter()


def clean_name(name):
    # same rule as build-ability-cooldowns.py: some charplan names carry a
    # trailing space the log never prints
    return name.strip() if isinstance(name, str) else name


def resolve(raw, skill_type):
    if not raw:
        return None
    if skill_type == 2:
        e = effects.get(str(raw))
        icon = e["icon"] if e else None
    else:
        icon = raw
    if icon is None or str(icon) not in icon_map or icon == 0:
        return None
    return icon


def add(name, raw, skill_type, prio):
    name = clean_name(name)
    if not name:
        return
    icon = resolve(raw, skill_type)
    if icon is None:
        if raw:
            unresolved[(skill_type, raw)] += 1
        return
    cands[name][(prio, icon)] += 1


def walk_skill(sk, prio=0):
    add(sk.get("name"), sk.get("icon"), sk.get("skillType"), prio)
    for sub in (sk.get("subSkills") or []):
        walk_skill(sub, 1)


for c in json.load(open(MAIN, encoding="utf-8")):
    for ra in (c.get("realmAbilities") or []):
        add(ra.get("name"), ra.get("icon"), None, 0)  # RA icon is a real icon id
    for spec in (c.get("specs") or []):
        for sg in (spec.get("skillGroups") or []):
            for sk in (sg.get("skills") or []):
                walk_skill(sk)
        for sl in (spec.get("spellLines") or []):
            for sgroup in (sl.get("spellGroups") or []):
                for sk in (sgroup.get("skills") or []):
                    walk_skill(sk)

for line in json.load(open(CL, encoding="utf-8")):
    for entry in (line.get("skills") or []):
        if entry.get("item3"):
            walk_skill(entry["item3"])

result, conflicts = {}, {}
for name in sorted(cands):
    ranked = sorted(cands[name].items(), key=lambda kv: (kv[0][0], -kv[1], kv[0][1]))
    best_prio = ranked[0][0][0]
    top_level = [(icon, n) for (p, icon), n in ranked if p == best_prio]
    result[name] = top_level[0][0]
    if len({icon for icon, _ in top_level}) > 1:
        conflicts[name] = [{"icon": icon, "count": n} for icon, n in top_level]

with open("ability_icons.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False, sort_keys=True)
    f.write("\n")
with open("ability_icons_conflicts.json", "w", encoding="utf-8") as f:
    json.dump(conflicts, f, indent=2, ensure_ascii=False, sort_keys=True)
    f.write("\n")

js = [
    "// ability-icons.js — GENERATED FILE, do not hand-edit.",
    "// Produced by tools/build-ability-icons.py from the charplan exports plus",
    "// the client's own icon tables (see that script's docstring for why",
    "// charplan's spell `icon` values are spell-effect ids, not icon ids).",
    "// Flat map of ability name -> client icon id; the picture for an id is",
    "// img/icons/<skin>/<id>.png. Use iconFor()/iconImg() from js/icons.js",
    "// rather than reading this directly.",
    "export const ABILITY_ICONS = ",
    json.dumps(result, indent=0, ensure_ascii=False, sort_keys=True).replace("\n", "") + ";",
    "",
]
with open(os.path.join("js", "ability-icons.js"), "w", encoding="utf-8") as f:
    f.write("\n".join(js))

used = sorted(set(result.values()))
for skin in ("new", "classic"):
    dst = os.path.join("img", "icons", skin)
    os.makedirs(dst, exist_ok=True)
    keep = {f"{i}.png" for i in used}
    for fn in os.listdir(dst):
        if fn.endswith(".png") and fn not in keep:
            os.remove(os.path.join(dst, fn))
    for i in used:
        shutil.copyfile(os.path.join(ICONS_OUT, skin, f"{i}.png"), os.path.join(dst, f"{i}.png"))

print(f"{len(result)} ability names -> {len(used)} distinct icons; "
      f"{len(conflicts)} names with conflicting icons; "
      f"{sum(unresolved.values())} occurrences with an unresolvable icon value")
