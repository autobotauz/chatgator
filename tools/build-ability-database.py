#!/usr/bin/env python3
"""
build-ability-database.py — companion to build-ability-cooldowns.py, from the
same charplan export. Where that script answers "how long until this ability
is up again", this one answers "what KIND of ability is this" — specifically
whether it can deal direct/periodic damage, whether it can heal, and which
class(es) train it.

Why this exists: Chat Gator attributes an unnamed "You hit <target> for N
damage!"/heal-result line to whichever spell was most recently cast within a
short window (see parser.js's pendingCastName). That heuristic assumes the
most-recently-cast spell is a plausible source — true for the overwhelming
majority of casts, but false for a CC/debuff/buff spell that cannot deal
damage or heal at all (e.g. "Expel Sight", a pure Nearsight debuff with zero
damage component) sitting right before an unrelated damage/heal line from
something else entirely (another AE tick, a groupmate's heal, a pet). A
reported bug showed exactly this: Expel Sight credited with 504 damage and
3 hits it never actually dealt. This database lets parser.js refuse that
attribution whenever we positively know the pending ability can't do the
thing being attributed to it — "positively know" being the operative words:
when an ability isn't in this database at all, or we only have ambiguous/no
Type data for it, every lookup here defaults to *permissive* (don't block),
so a gap in this data can only ever fail to catch a bug, never invent one by
blocking a real attribution.

Classification is data-driven, not name-guessing:
  - isDamage: true if ANY occurrence of this ability name in the export has a
    literal "Damage" attribute (e.g. ["Damage", "29"]) OR a Type that's in
    DAMAGE_SAFETY_NET (a small list of real damage types observed to
    sometimes omit the "Damage" key — see the Bolt comment below). Checking
    for the attribute itself, rather than trying to recognize "damage" in a
    Type's English name, is what correctly keeps lookalikes like "Storm",
    "Offensive Proc", "Life Transfer" and "Damage To Power" OUT (none of
    them carry a Damage attribute despite damage-adjacent names) while
    keeping real nukes in regardless of how exotic their Type name is
    ("Magical Strike", "Nightshade Nuke", "Bomber", "Turret PBAoE", ...).
  - isHeal: true if any occurrence's Type is in HEAL_TYPES. Heals don't carry
    a "Damage"-shaped attribute at all (checked against this export: zero
    Heal/Heal Over Time entries have one), so there's no equivalent
    data-driven signal for them — this one small hand-curated list is it.
  - Realm abilities have no structured Type/attributes at all, just a free-
    text description ("Direct damage plus root spell...", "Removes all
    negative effects..."). They get a much lower-confidence regex heuristic
    (REALM_ABILITY_DAMAGE_RE/REALM_ABILITY_HEAL_RE below) applied only when
    nothing from the structured spec/style side already answered isDamage/
    isHeal for that name.
  - classes: every class with ANY occurrence of the name, anywhere (realm
    ability or spec skill) — this is deliberately permissive/inclusive (used
    for "does any class train this at all", not "is this exactly X's spell").

If the same name is classified differently in different classes' versions of
it (rare — Type itself very rarely differs for an identical name, unlike
cooldowns which do legitimately vary by rank/class), isDamage/isHeal are
OR'd across all of them: known-damage-on-any-class's-version is enough to
avoid blocking a real attribution, since we don't know which class's variant
the log's player actually has.

Pipeline (same source file as build-ability-cooldowns.py):
  charplan_<version>.json -> js/ability-database.js
                           -> ability_database.json (same data, for review)

Re-run whenever build-ability-cooldowns.py is re-run, from the same export.
"""
import json
import re
import sys
from collections import defaultdict

SRC = sys.argv[1] if len(sys.argv) > 1 else "charplan_1_0_62.json"

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

# Real damage types observed, in this export, to sometimes have no literal
# "Damage" attribute of their own (their damage lives on a sub-effect, or is
# expressed only in the free-text description) — a small safety net on top
# of the data-driven "has a Damage attribute" check, not a replacement for
# it. Every name below co-occurs with a genuine numeric Damage attribute on
# AT LEAST SOME of its occurrences in this export; Bolt is the one type with
# a handful of exceptions (immunity/sub-effect entries sharing the Bolt
# label without their own damage number).
DAMAGE_SAFETY_NET_TYPES = {"Bolt"}

HEAL_TYPES = {
    "Heal", "Heal Over Time", "Spread Heal", "Power Heal",
    "Savage Endurance Heal", "Omni Heal", "Style Heal", "Combat Heal",
}

# Realm abilities carry no structured Type/attributes, only a free-text
# description — these patterns are a deliberately narrow, lower-confidence
# fallback used ONLY when a name has no structured spec/style data at all.
REALM_ABILITY_DAMAGE_RE = re.compile(r"\bDamage:\s*\d", re.I)
REALM_ABILITY_HEAL_RE = re.compile(r"\bheal(s|ing)?\b", re.I)


def attrs_dict(attributes):
    d = {}
    for a in (attributes or []):
        if len(a) == 2:
            d[a[0]] = a[1]
    return d


# name -> accumulated info while walking the export
by_name = defaultdict(lambda: {"types": set(), "has_damage_attr": False, "classes": set(), "has_spec_data": False})


def walk_skill(sk, class_name):
    name = sk.get("name")
    if name:
        a = attrs_dict(sk.get("attributes"))
        t = a.get("Type")
        info = by_name[name]
        info["classes"].add(class_name)
        info["has_spec_data"] = True
        if t:
            info["types"].add(t)
        if "Damage" in a:
            info["has_damage_attr"] = True
    for sub in (sk.get("subSkills") or []):
        walk_skill(sub, class_name)


for c in data:
    class_name = c.get("name")

    for ra in (c.get("realmAbilities") or []):
        ra_name = ra.get("name")
        if not ra_name:
            continue
        by_name[ra_name]["classes"].add(class_name)
        # Only recorded for the heuristic fallback below, kept separate from
        # the "has_spec_data" structured path.
        by_name[ra_name].setdefault("ra_descriptions", []).append(ra.get("description") or "")

    for spec in (c.get("specs") or []):
        for sg in (spec.get("skillGroups") or []):
            for sk in (sg.get("skills") or []):
                walk_skill(sk, class_name)
        for sl in (spec.get("spellLines") or []):
            for sgroup in (sl.get("spellGroups") or []):
                for sk in (sgroup.get("skills") or []):
                    walk_skill(sk, class_name)

# ---- reconcile into the final per-name verdict -----------------------------
result = {}
ambiguous_types = {}  # name -> sorted distinct types seen, for review only

for name, info in by_name.items():
    types = info["types"]
    is_damage = info["has_damage_attr"] or bool(types & DAMAGE_SAFETY_NET_TYPES)
    is_heal = bool(types & HEAL_TYPES)

    if not info["has_spec_data"]:
        # Realm-ability-only name: fall back to the free-text heuristic.
        descriptions = info.get("ra_descriptions") or []
        is_damage = any(REALM_ABILITY_DAMAGE_RE.search(d) for d in descriptions)
        is_heal = (not is_damage) and any(REALM_ABILITY_HEAL_RE.search(d) for d in descriptions)

    if len(types) > 1:
        ambiguous_types[name] = sorted(types)

    type_out = next(iter(types)) if len(types) == 1 else None
    result[name] = {
        "type": type_out,
        "isDamage": is_damage,
        "isHeal": is_heal,
        "classes": sorted(info["classes"]),
    }

with open("ability_database.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")

if ambiguous_types:
    with open("ability_database_ambiguous_types.json", "w", encoding="utf-8") as f:
        json.dump(dict(sorted(ambiguous_types.items())), f, indent=2, ensure_ascii=False)
        f.write("\n")

js_lines = []
js_lines.append("// ability-database.js — GENERATED FILE, do not hand-edit.")
js_lines.append("// Produced by tools/build-ability-database.py from a charplan export (same")
js_lines.append("// source as ability-cooldowns.js). Flat map of ability name ->")
js_lines.append("// { type, isDamage, isHeal, classes }.")
js_lines.append("//")
js_lines.append("// isDamage/isHeal answer \"can this ability positively be ruled OUT as the")
js_lines.append("// source of a damage/heal result line\" — see build-ability-database.py's")
js_lines.append("// module docstring for exactly how they're derived and why the default for")
js_lines.append("// anything not confidently known is permissive (don't block), never the")
js_lines.append("// reverse. `type` is the ability's raw charplan Type string (e.g.")
js_lines.append("// \"Direct Damage\", \"Heal\", \"Nearsight\", \"Stun\") when every class trains an")
js_lines.append("// identical version of it, else null. `classes` lists every class with any")
js_lines.append("// version of this name at all (realm ability or spec skill).")
js_lines.append("export const ABILITY_DATABASE = ")
js_lines.append(json.dumps(result, indent=2, sort_keys=True, ensure_ascii=False))
js_lines.append(";")
js_lines.append("")

with open("js/ability-database.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))

print(f"names written:          {len(result)}")
print(f"  isDamage=true:        {sum(1 for v in result.values() if v['isDamage'])}")
print(f"  isHeal=true:          {sum(1 for v in result.values() if v['isHeal'])}")
print(f"  ambiguous Type names: {len(ambiguous_types)} (see ability_database_ambiguous_types.json)")
