#!/usr/bin/env python3
"""
fix-ability-name-whitespace.py — one-time patch for the already-generated
ability_cooldown*.json / js/ability-cooldowns.js produced by an earlier run
of build-ability-cooldowns.py, before that script trimmed whitespace from
extracted names (see its own clean_name() for the full story: a handful of
charplan entries — the whole Bainshee aura line, "Mastery of Stealth" on
all 6 classes that train it, several Vampiir abilities — carry a trailing
space in their own "name" field, so they end up keyed as e.g.
"Resonating Aura " and silently never match anything the live cooldown
tracker looks up, with nothing about the entry itself looking wrong).

This script does NOT re-run the charplan export (we don't have the exact
source file the currently-checked-in ability_cooldown.json was built from,
only an older stand-in — re-running the fixed build script against that
older file would REGRESS real data, not just fix whitespace: it covers
measurably fewer abilities, 1240 vs. this file's 1304). Instead it trims
whitespace directly from the keys of the already-built, already-correct
JSON/JS, changing nothing else. Once the real charplan export is available
again, re-run build-ability-cooldowns.py (now whitespace-safe on its own)
against it instead and retire this script — this is a stand-in for that,
not a replacement.

Usage: python3 fix-ability-name-whitespace.py
"""
import json
import re

CLEAN_FILE = "ability_cooldown.json"
JS_FILE = "js/ability-cooldowns.js"
DUP_FILE = "ability_cooldown_duplicates.json"
IGNORED_FILE = "ability_cooldown_ignored_dynamic.json"


def trim_keys(d):
    out = {}
    collisions = []
    for k, v in d.items():
        tk = k.strip()
        if tk in out and out[tk] != v:
            collisions.append((k, tk))
        out[tk] = v
    return out, collisions


# ---- ability_cooldown.json -------------------------------------------------
with open(CLEAN_FILE, "r", encoding="utf-8") as f:
    clean = json.load(f)
fixed_clean, collisions = trim_keys(clean)
if collisions:
    print(f"WARNING: {len(collisions)} name collided with a differing value after trimming — left unresolved, inspect by hand:")
    for k, tk in collisions:
        print(f"  {k!r} -> {tk!r}")
removed = len(clean) - len(fixed_clean)
with open(CLEAN_FILE, "w", encoding="utf-8") as f:
    json.dump(fixed_clean, f, indent=2, sort_keys=True, ensure_ascii=False)
    f.write("\n")
print(f"{CLEAN_FILE}: {len(clean)} -> {len(fixed_clean)} names ({removed} whitespace-only duplicate key(s) merged away)")

# ---- ability_cooldown_duplicates.json / ability_cooldown_ignored_dynamic.json ----
for path in (DUP_FILE, IGNORED_FILE):
    try:
        with open(path, "r", encoding="utf-8") as f:
            d = json.load(f)
    except FileNotFoundError:
        continue
    fixed, _ = trim_keys(d)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(fixed, f, indent=2, sort_keys=True, ensure_ascii=False)
        f.write("\n")
    print(f"{path}: {len(d)} -> {len(fixed)} names")

# ---- js/ability-cooldowns.js ------------------------------------------------
# Same generated-file shape build-ability-cooldowns.py itself writes: regen
# the whole file from the now-trimmed `fixed_clean`, rather than regexing
# the existing .js text, so the two are guaranteed to stay in lock-step.
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
for name, v in fixed_clean.items():
    secs = cooldown_to_seconds(v["cooldown"])
    if secs is None:
        continue
    js_map[name] = {"cooldownSeconds": secs, "cooldown": v["cooldown"], "icon": v["icon"]}

js_lines = [
    "// ability-cooldowns.js — GENERATED FILE, do not hand-edit.",
    "// Produced by tools/build-ability-cooldowns.py from a charplan export, with",
    "// a one-time whitespace-key fix applied by tools/fix-ability-name-whitespace.py",
    "// (see that script's header) — the next real regeneration from a fresh",
    "// charplan export supersedes this patch.",
    "// Flat map of ability name -> { cooldownSeconds, cooldown (display string), icon }.",
    "// `icon` is the numeric icon id from the client's spell-icon atlas; there is no",
    "// id -> image mapping yet (future work), so the UI just shows the bare id for now.",
    "//",
    "// A handful of ability names are deliberately left out of this map:",
    "//   - names with a multi-rank cooldown (Adrenaline Rush, Charge, Concentration,",
    "//     Purge, Second Wind) — we don't know which rank a character has trained,",
    "//     see ability_cooldown_ignored_dynamic.json.",
    "//   - names that mean different things on different classes with conflicting",
    "//     cooldown/icon data (Disperse Strength, Major Deliverance, Stunning Shout)",
    "//     — see ability_cooldown_duplicates.json. Re-add once we can disambiguate",
    "//     by the character's class.",
    "export const ABILITY_COOLDOWNS = ",
    json.dumps(js_map, indent=2, sort_keys=True, ensure_ascii=False),
    ";",
    "",
]
with open(JS_FILE, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines))
print(f"{JS_FILE}: {len(js_map)} entries")
