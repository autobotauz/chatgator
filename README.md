# 🐊 Chat Gator — static DAoC chat.log parser

A single static website (no server, no build step, no installs) that reads a
*Dark Age of Camelot* `chat.log` file and turns it into a damage/heal meter:
damage done, healing done, damage taken, realm points, spells/styles with
crit rates, block/parry/evade/resist rates, and pet damage — all broken down
per-encounter or totalled across the whole log.

It's the spiritual successor to [daoc-chat-gator](https://github.com/autobotauz/daoc-chat-gator)
(the Electron version) but with the one requirement that app couldn't meet:
**nobody has to install anything.** Open the page, drop in a log file, done.

## Why this is safe to use on a random log file

Everything — reading the file, parsing it, computing every stat, drawing
every chart — happens **inside your browser tab**, in plain JavaScript.
There is no backend. Your `chat.log` is never uploaded anywhere. You can
verify this yourself: open your browser's network panel while using the
site and you'll see zero outgoing requests except, optionally, one to a
public Eden spell database used only to label spell names with their damage
type/class (and even that one fails silently and harmlessly if it's blocked
— see `js/skills.js`).

## Using it

1. Open the page (once published to GitHub Pages, or just double-click
   `index.html` on your own computer — it works offline too, except for the
   optional spell-label enrichment above).
2. Drag your `chat.log` in, or click **Choose file(s)**. You can drop
   several files at once (e.g. a few sessions) and they'll be merged.
3. No file handy? Click **Try a sample log** to see it working first.
4. Use the dropdown at the top to look at **one encounter at a time** (the
   parser automatically splits the log into fights separated by ~20s of
   quiet) or **All combined** for session totals.
5. Click through the tabs: Overview, Damage, Healing, Pets, Defense, Realm
   Points, Spells & Styles, and Raw/Debug (which shows exactly which lines
   the parser didn't recognize, for transparency/troubleshooting).

### Live mode (Chrome/Edge)

Click **Watch a live log file…** and pick your actual `chat.log` while
you're playing. This uses the browser's File System Access API to re-read
only the newly-appended bytes every couple of seconds — there's still no
upload, the file handle and its contents never leave the tab. Safari and
Firefox don't support this API yet, so there the equivalent is just
re-dropping the file whenever you want a refresh.

### Character name

If your log contains a `/stats` command's output (type `/stats` in-game
before or during your session), Chat Gator picks your character name up
from the `Statistics for <name> this Session:` line automatically and also
shows the game's own official totals (RP, deathblows, deaths, etc.)
alongside the computed ones. If there's no `/stats` block, everything still
works — the stats are "you"-centric regardless (the game's own log always
says "You hit...", "You cast...", etc.) — there's just no name to display.

## Publishing it on GitHub Pages

1. Push this repo's contents to GitHub (this folder *is* the site root —
   `index.html` is at the top level).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a
   branch*, pick your branch (e.g. `main`) and the `/ (root)` folder.
4. Save. GitHub gives you a `https://<you>.github.io/<repo>/` URL a minute
   or two later.

No build step, no `package.json`, no CI — it's just static files.

## How the parsing works

`js/parser.js` runs a prioritized list of regular expressions line-by-line
over the raw log text (decoded as `windows-1252`, which is the encoding
real DAoC clients write — a straight UTF-8 decode mangles curly quotes and
accented names). It turns matched lines into typed events (`melee_weapon`,
`ability_crit`, `pet_self_heal`, `rp_bonus`, …) and quietly discards
cosmetic noise (zone text, buff-fade spam, third-party combat you're not
involved in, item-tooltip dumps). Anything it doesn't recognize is kept in
an `unmatched` list you can inspect on the **Raw/Debug** tab — nothing is
ever silently miscounted into the wrong bucket.

`js/aggregate.js` takes that event list and:

- Splits it into **encounters** (bursts of activity separated by a 20s
  gap of silence), the same way a live damage meter would show one fight
  at a time, since a single `chat.log` can span weeks of play.
- Rolls events up into totals, per-source breakdowns (by spell/style/
  weapon/pet/attacker/healer), hit/crit counts, and time-bucketed series
  for the charts.
- Attributes pet damage and pet self-heals to the pet by name (pets are
  auto-discovered from the log — no class list needed), and separately
  tags each named ability as something your own `You cast a ... spell!`
  line confirmed was a spell vs. everything else (styles, realm abilities,
  weapon procs) for the Spells & Styles tab.

`js/charts.js` draws everything (stat tiles, horizontal bar breakdowns, the
timeline area chart) as plain inline SVG/HTML — no charting library is
loaded, so there's nothing to fetch from a CDN and nothing to go stale.
Colors follow a validated, colorblind-safe palette.

## Extending it

The log format varies a bit between Eden, other freeshards, and live
servers. If you find lines that *should* count toward a stat but show up
on the Raw/Debug tab's "unrecognized lines" list, that's exactly the kind
of thing to add a new rule for in the `RULES` array near the top of
`js/parser.js` — each rule is just `[eventType, regex, mapFunction]`.

## Credits

Built for the DAoC community, following on from
[daoc-chat-gator](https://github.com/autobotauz/daoc-chat-gator).
Spell/realm-ability metadata, when reachable, comes from Eden's public
[charplan.json](https://eden-daoc.net/chrplan/charplan.json).
