#!/usr/bin/env python3
"""
add-ability-damage.py — adds `damage` (charplan delve) and `isBolt` to the
ALREADY-BUILT ability_database.json / js/ability-database.js, changing
nothing else in them.

Why a patch instead of re-running build-ability-database.py: the checked-in
database was built from a fuller charplan export than the one in this repo
and also carries `isPetSummon`, which that build script doesn't produce yet.
Re-running it would regress both (same situation, and same fix, as
fix-ability-name-whitespace.py). build-ability-database.py has the same
damage/isBolt logic, so a future full rebuild keeps these fields.

What the fields are for: parser.js uses them to work out which of several
recently cast damage spells a "You hit X for N damage!" line came from — a
bolt is still travelling when the lifetap cast after it lands, so "most
recent cast" gets it backwards. See parser.js's pickDamageSource().

  damage  — the charplan "Damage" attribute (base damage before stats, spec
            and variance). Only written when every version of the name
            agrees to within 10%; otherwise we can't know which one the
            player has.
  isBolt  — any version has Type "Bolt" (travels to the target).

Usage: python3 tools/add-ability-damage.py [charplan_<version>.json]
"""
import json
import sys
from collections import defaultdict

SRC = sys.argv[1] if len(sys.argv) > 1 else "charplan_1_0_62.json"
DB_JSON = "ability_database.json"
DB_JS = "js/ability-database.js"
MARKER = "export const ABILITY_DATABASE = "

with open(SRC, "r", encoding="utf-8") as f:
    charplan = json.load(f)

damages = defaultdict(list)
bolts = set()


def walk(sk):
    name = sk.get("name")
    name = name.strip() if isinstance(name, str) else None
    if name:
        a = {x[0]: x[1] for x in (sk.get("attributes") or []) if len(x) == 2}
        if a.get("Type") == "Bolt":
            bolts.add(name)
        try:
            damages[name].append(float(a["Damage"]))
        except (KeyError, TypeError, ValueError):
            pass
    for sub in sk.get("subSkills") or []:
        walk(sub)


for c in charplan:
    for spec in c.get("specs") or []:
        for sg in spec.get("skillGroups") or []:
            for sk in sg.get("skills") or []:
                walk(sk)
        for sl in spec.get("spellLines") or []:
            for g in sl.get("spellGroups") or []:
                for sk in g.get("skills") or []:
                    walk(sk)

with open(DB_JSON, "r", encoding="utf-8") as f:
    db = json.load(f)

added_dmg = added_bolt = 0
for name, entry in db.items():
    entry.pop("damage", None)
    entry.pop("isBolt", None)
    d = sorted(damages.get(name, []))
    if d and d[0] > 0 and d[-1] <= d[0] * 1.10:
        entry["damage"] = d[len(d) // 2]
        added_dmg += 1
    if name in bolts:
        entry["isBolt"] = True
        added_bolt += 1

body = json.dumps(db, indent=2, sort_keys=True, ensure_ascii=False)
with open(DB_JSON, "w", encoding="utf-8", newline="") as f:
    f.write(body + "\n")

with open(DB_JS, "r", encoding="utf-8", newline="") as f:
    js = f.read()
header = js[: js.index(MARKER)]
NOTE = "// `damage` (charplan delve) and `isBolt` added by tools/add-ability-damage.py.\n"
if NOTE not in header:
    header += NOTE
with open(DB_JS, "w", encoding="utf-8", newline="") as f:
    f.write(header + MARKER + "\n" + body + "\n;\n")

print(f"entries: {len(db)}  with damage: {added_dmg}  bolts: {added_bolt}")
