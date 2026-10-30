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
There is no backend. Your `chat.log` is never uploaded anywhere. (The one opt-in exception is a Bask group session — see below — which shares names and numbers only, never log lines.) You can
verify this yourself: open your browser's network panel while using the
site and you'll see zero outgoing requests except, optionally, one to a
public Eden spell database used only to label spell names with their damage
type/class (and even that one fails silently and harmlessly if it's blocked
— see `js/skills.js`).

## Using it

1. Open the page (once published to GitHub Pages, or just double-click
   `index.html` on your own computer — it works offline too, except for the
   optional spell-label enrichment above and the sample session below, both
   of which need a real fetch and so need the page served over http(s)).
2. Drag your `chat.log` in, or click **Choose file(s)**. You can drop
   several files at once (e.g. a few sessions) and they'll be merged.
3. No file handy? Click **Try a sample log** to see it working first with a
   real exported session (more get added here over time as real log data
   comes in).
4. Use the dropdown at the top to look at **one encounter at a time** (the
   parser automatically splits the log into fights separated by ~45s of
   quiet) or **All combined** for session totals.
5. Click through the tabs: Overview, Punched, Healing, Pets, Defense, Realm
   Points, Spells & Styles, and Raw/Debug (which shows exactly which lines
   the parser didn't recognize, for transparency/troubleshooting).
6. Click **What's new** in the header any time to see a short changelog of
   recent fixes and features (see `js/changelog.js`).

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

## Bask — live group sessions

`bask/` (published at `…/chatgator/bask/`) lets up to 8 players share a live
group view. One person creates a 6-letter invite code, everyone else joins
with it, and each player picks their own `chat.log` (Chrome/Edge, same
live-watch mode as above). A group leader can also **just watch** without a
log, from any browser.

What's shared is deliberately small: each player's browser parses their own
log locally and sends only names and numbers — damage and healing in and out
(and who it went to or came from), resists, interrupts, pets, cooldown
last-use times, deathblows and deaths, plus 15-second time buckets for the
charts. Never chat, raw log lines, per-ability breakdowns or realm points.
Only lines written *after* a player joins are counted.

- `js/bask-summary.js` — events → the shared summary (pure, unit-testable:
  `node tools/test-bask-summary.mjs`).
- `js/bask-net.js` — plain `fetch` to Supabase's REST API; the only code in
  Chat Gator that talks to a server.
- `js/bask.js`, `css/bask.css`, `bask/index.html` — the page.
- `js/bask-config.js` — Supabase project URL + **public** (publishable) key.
- `supabase/bask.sql` — tables, row-level security, the 8-player cap and the
  hourly cleanup job. Safe to re-run in the Supabase SQL editor.

The bask's **leader** is the earliest-joined player still in it (normally
whoever created the code). The leader can **boot** a player — removes them and
their numbers, frees the spot, and they can join again — **ban** a name, which
also keeps it out, and **unban** from the banned-players list. Leadership only
moves when the leader leaves or goes quiet for 5 minutes; it then passes to
the next player in line, and someone who leaves and rejoins goes to the back
of the line. Each player's browser proves who it is with a per-join secret
(only its SHA-256 is stored). A booted player's page notices, stops sharing
and offers to rejoin.

Everything is ephemeral: a bask expires 48 hours after its code is created,
is hidden the moment it expires, and is deleted by an hourly `pg_cron` job.
**Download bask** saves a file that opens again later on the same page
without any database. `.github/workflows/bask-keepalive.yml` pings the
database every few days so the free Supabase project doesn't pause.

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

- Splits it into **encounters** (bursts of activity separated by a 45s
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

## Ability icons

Icons come from the game client itself, not charplan. Two things to know:

- charplan's `icon` on a **spell** (skillType 2) is a *spell effect id* — the
  key into the client's `spells.csv` — not an icon id (Animist "Spirit of
  Anger" is 11130, whose real icon is 2385). Realm abilities, styles and
  abilities already carry real icon ids.
- A real icon id is a row in the client's `icons.csv` (inside
  `gamedata.mpk`): a base picture from the `icons/*.bmp` sheets (320×320,
  10×10 grid of 32×32 tiles, file number = first picture on the sheet), plus
  an optional border and corner markers.

`js/ability-icons.js` (ability name → resolved icon id) and `img/icons/{new,classic}/<id>.png`
are generated. To rebuild after a game/Eden patch or a new charplan export:

```
python tools/extract-daoc-icons.py "C:\Program Files (x86)\Electronic Arts\Dark Age of Camelot" <icons_out>
python tools/build-ability-icons.py charplan_1_0_62.json charplan_cl_1_0_62.json <icons_out>
```

The first step needs Python + Pillow and a local game install; the second
only copies the icons actually used (~2,100 per skin). `js/icons.js` is the
only thing the UI imports.
