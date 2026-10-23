import { parseLogText } from './parser.js';
import { buildStats, segmentEncounters, getBgBroadcasts } from './aggregate.js';
import { renderers } from './ui.js';
import { loadSkillIndex } from './skills.js';
import { isWatchSupported, LogWatcher } from './filewatch.js';
import { SAMPLE_LOGS } from './sample-data.js';
import { fmtClock } from './charts.js';
import { ABILITY_COOLDOWNS } from './ability-cooldowns.js';
import { startLiveBackground, stopLiveBackground } from './live-bg.js';

const el = (id) => document.getElementById(id);

const state = {
  rawEvents: [],       // merged events from all loaded files
  unmatched: [],
  encounters: [],       // from segmentEncounters(rawEvents)
  scope: 'all',          // 'all' or encounter id
  activeTab: 'overview',
  skillMap: {},
  watcher: null,
  // Live-clock sync point for the cooldown tracker: the log's own `clock`
  // is a synthetic elapsed-ms value anchored to the first timestamp in the
  // file (see parser.js), never a real calendar date — so to turn "time
  // since last cast" into a *ticking* countdown while watching a live log,
  // we remember a (clock, real Date.now()) pair and extrapolate forward
  // from it with the wall clock between polls, rather than re-deriving
  // "now" from whatever we most recently read — see advanceLiveSync() for
  // why re-deriving it every poll is wrong whenever a poll runs late (and
  // on a backgrounded tab, Chrome throttles timers hard, so it often does).
  // Reset to null on a static (non-watched) load, where the tracker just
  // shows a frozen snapshot as of the end of that file instead; and
  // unconditionally re-seeded fresh on any full reload (new file, or the
  // watched file being rotated/restarted) — only the pure-append path
  // (ingestAppend) advances it forward-only instead of re-seeding.
  liveSync: null,
  // Carried parser state (day-rollover clock, pending style/cast/heal
  // attribution — see parseLogText's `resume` param) from the most recent
  // parse of the single actively-watched file, so the next poll's new
  // lines can be parsed incrementally instead of re-parsing the whole
  // growing file every time. Only meaningful while watching; null for a
  // plain static/multi-file load.
  parseResumeState: null,
  // Date.now() of the last time we actually picked up new lines (initial
  // load, or a live poll that found the file had grown) — drives the
  // "Last updated" line under the cooldown tracker.
  lastUpdatedAt: null,
  // Date.now() of the last time we successfully asked the OS for the
  // watched file's current state, regardless of whether it had grown —
  // drives the separate "File checked" line, which exists specifically to
  // tell "our poll loop is stalled" apart from "the file just isn't
  // growing yet" (see LogWatcher's onPoll). Only meaningful while
  // watching; null for a static/one-time load, which never re-checks.
  lastPolledAt: null,
};

// ---------------------------------------------------------------------------
// Theme
// ---------------------------------------------------------------------------
(function initTheme() {
  const saved = localStorage.getItem('chatgator:theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  el('btnTheme').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('chatgator:theme', next); } catch { /* ignore */ }
  });
})();

// ---------------------------------------------------------------------------
// Live-watch refresh interval — how often LogWatcher re-reads the file while
// "Watch a live log file…" is active. Some abilities have cooldowns as
// short as 5s, so the old fixed 2s poll could still miss or badly lag a
// fast one; letting the user dial it down (as low as 1s) makes the
// cooldown tracker actually reliable for those. Each poll is still cheap
// when idle — LogWatcher only re-parses once the file's size has actually
// changed — so a short interval mostly costs a few extra stat() calls
// between real updates, not full re-parses.
// ---------------------------------------------------------------------------
const DEFAULT_WATCH_INTERVAL_MS = 2000;

(function initWatchInterval() {
  const sel = el('watchIntervalSelect');
  for (let s = 1; s <= 30; s++) {
    const opt = document.createElement('option');
    opt.value = String(s * 1000);
    opt.textContent = `${s}s`;
    sel.appendChild(opt);
  }
  let saved = DEFAULT_WATCH_INTERVAL_MS;
  try {
    const raw = +localStorage.getItem('chatgator:watchIntervalMs');
    if (raw >= 1000 && raw <= 30000) saved = raw;
  } catch { /* ignore */ }
  state.watchIntervalMs = saved;
  sel.value = String(saved);
  sel.addEventListener('change', () => {
    const ms = +sel.value;
    state.watchIntervalMs = ms;
    try { localStorage.setItem('chatgator:watchIntervalMs', String(ms)); } catch { /* ignore */ }
    // Already watching? Re-pace the running poll loop immediately instead
    // of waiting for whatever interval it was already mid-wait on.
    if (state.watcher) state.watcher.setPollMs(ms);
  });
})();

// ---------------------------------------------------------------------------
// File loading (drag/drop, picker, sample)
// ---------------------------------------------------------------------------
const dropzone = el('dropzone');
['dragenter', 'dragover'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault(); dropzone.classList.add('dragover');
}));
['dragleave', 'drop'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault(); dropzone.classList.remove('dragover');
}));
dropzone.addEventListener('drop', async (e) => {
  // Prefer a live-watchable handle when the browser supports it, so a
  // dropped .log file is on equal footing with one picked through the
  // button below — both end up watched live, not just read once. Only
  // Chromium implements getAsFileSystemHandle(); everywhere else (and for
  // a multi-file drop, which we don't try to merge anymore) this falls
  // through to a plain one-time read of the first file.
  const items = Array.from(e.dataTransfer.items || []);
  if (isWatchSupported() && items.length === 1 && items[0].kind === 'file' &&
      typeof items[0].getAsFileSystemHandle === 'function') {
    try {
      const handle = await items[0].getAsFileSystemHandle();
      if (handle && handle.kind === 'file') {
        await loadHandle(handle);
        return;
      }
    } catch { /* fall through to the plain read below */ }
  }
  const files = Array.from(e.dataTransfer.files || []).slice(0, 1);
  if (files.length) loadFiles(files);
});

el('btnPickFile').addEventListener('click', pickFileOrSession);

// The single entry point for "give me a log or session file": in a browser
// with the File System Access API (Chrome/Edge), this opens a picker that
// hands back a reusable handle, so we can keep polling it for new lines —
// a .log file picked this way is automatically watched live, no separate
// "watch" step needed. Elsewhere, it falls back to a plain <input
// type=file> (one-time read; re-drop/re-pick to refresh).
async function pickFileOrSession() {
  if (isWatchSupported()) {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{
          description: 'DAoC chat log or session snapshot',
          accept: { 'text/plain': ['.log', '.txt'], 'application/json': ['.json'] },
        }],
        excludeAcceptAllOption: false,
      });
      await loadHandle(handle);
    } catch (err) {
      if (err && err.name !== 'AbortError') console.warn('[chatgator] file picker failed', err);
    }
    return;
  }
  el('fileInput').click();
}

el('fileInput').addEventListener('change', (e) => {
  const files = Array.from(e.target.files || []);
  if (files.length) loadFiles(files);
  e.target.value = ''; // so picking the same file again still fires 'change'
});

el('btnSample').addEventListener('click', async () => {
  const key = el('sampleClassSelect').value;
  const sample = SAMPLE_LOGS[key];
  if (!sample) return;
  // Real exported sessions (see sample-data.js) are pre-parsed JSON
  // snapshots fetched on demand, not inlined log text — route them through
  // the same importer as a user-supplied "Download snapshot" file instead
  // of ingestTexts (which expects raw chat.log text to run through
  // parseLogText).
  if (sample.kind === 'snapshot') {
    try {
      const res = await fetch(sample.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data || data.tool !== 'Chat Gator' || !Array.isArray(data.events)) {
        throw new Error('unexpected snapshot shape');
      }
      ingestSnapshotEvents(data);
    } catch (err) {
      console.warn('[chatgator] failed to load sample snapshot', err);
      alert('Could not load the sample session. If you opened this page directly from a file instead of a web server, that\'s why — sample sessions need to be fetched, which browsers block under file://.');
    }
    return;
  }
  ingestTexts([{ name: `${key}.log`, text: sample.text }]);
});

el('btnLoadAnother').addEventListener('click', startNewSession);

function startNewSession() {
  stopWatching();
  el('appMain').hidden = true;
  el('dropzoneSection').hidden = false;
  el('btnLoadAnother').hidden = true;
  el('btnDownloadSnapshot').hidden = true;
  el('snapshotPill').hidden = true;
  el('bgTicker').hidden = true;
  el('cooldownTracker').hidden = true;
  el('lastUpdated').hidden = true;
  state.rawEvents = []; state.unmatched = []; state.encounters = []; state.scope = 'all'; state.isSnapshot = false;
  state.liveSync = null;
  state.parseResumeState = null;
  state.lastUpdatedAt = null;
}

el('btnStopWatch').addEventListener('click', stopWatching);
el('btnClearLog').addEventListener('click', clearWatchedLogFile);

el('btnDownloadSnapshot').addEventListener('click', downloadSnapshot);

// Resolves a FileSystemFileHandle (from the picker above, or from a drop
// resolved to a handle) to either a one-time snapshot import (.json) or a
// live-watched log (anything else) — the one place that decision is made,
// since the picker and the drop path both funnel through it.
async function loadHandle(handle) {
  const file = await handle.getFile();
  if (/\.json$/i.test(file.name)) {
    await loadSnapshotFile(file);
    return;
  }
  await beginWatch(handle);
}

async function loadFiles(files) {
  // A shared snapshot (exported via "Download snapshot") is a .json file —
  // route it to its own importer instead of trying to parse it as a chat.log.
  const jsonFile = files.find(f => /\.json$/i.test(f.name));
  if (jsonFile) {
    await loadSnapshotFile(jsonFile);
    return;
  }
  const texts = [];
  for (const file of files) {
    const buf = await file.arrayBuffer();
    const text = decodeLogBytes(buf);
    texts.push({ name: file.name, text });
  }
  ingestTexts(texts);
}

// ---------------------------------------------------------------------------
// Snapshot import — load a session someone else exported with "Download
// snapshot" and shared with you as a .json file. This is a static upload,
// not live: it replays their already-parsed events through the same
// stats/UI pipeline a freshly-parsed log would use, so you get full
// encounter switching and sortable tables, just no "watch live" (there's no
// real file behind it to tail).
// ---------------------------------------------------------------------------
async function loadSnapshotFile(file) {
  let data;
  try {
    data = JSON.parse(await file.text());
  } catch {
    alert('That file isn\'t valid JSON — expected a Chat Gator snapshot exported with "Download snapshot".');
    return;
  }
  if (!data || data.tool !== 'Chat Gator' || !Array.isArray(data.events)) {
    alert('That JSON file doesn\'t look like a Chat Gator session snapshot (missing "events").');
    return;
  }
  ingestSnapshotEvents(data);
}

function ingestSnapshotEvents(data) {
  stopWatching();
  state.rawEvents = data.events.slice().sort((a, b) => (a.clock ?? 0) - (b.clock ?? 0));
  state.unmatched = []; // the original log's unmatched lines weren't carried in the export
  state.encounters = segmentEncounters(state.rawEvents);
  state.scope = 'all';
  state.isSnapshot = true;

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = false;
  el('snapshotPill').title = data.exportedAt
    ? `Imported snapshot · exported ${new Date(data.exportedAt).toLocaleString()}${data.player ? ` · ${data.player}` : ''}`
    : 'Imported snapshot';

  buildEncounterSelect();
  renderActiveTab();

  loadSkillIndex().then((map) => { state.skillMap = map; renderActiveTab(); });
}

// DAoC chat.log files are typically Windows-1252 (not UTF-8) — a straight
// UTF-8 decode will throw or mangle any byte above 0x7F (curly quotes in
// item names, accented characters in European player names, etc).
function decodeLogBytes(buf) {
  try {
    return new TextDecoder('windows-1252').decode(buf);
  } catch {
    return new TextDecoder('utf-8', { fatal: false }).decode(buf);
  }
}

function ingestTexts(fileTexts) {
  const allEvents = [];
  const allUnmatched = [];
  let resumeState = null;
  for (const { text } of fileTexts) {
    const { events, unmatched, state: parseState } = parseLogText(text);
    allEvents.push(...events);
    allUnmatched.push(...unmatched);
    // Resuming only makes sense for a single growing file (the live-watch
    // case) — a multi-file drop or a sample log has no "next chunk" coming,
    // and interleaving more than one file's state doesn't mean anything.
    if (fileTexts.length === 1) resumeState = parseState;
  }
  allEvents.sort((a, b) => (a.clock ?? 0) - (b.clock ?? 0));
  state.rawEvents = allEvents;
  state.unmatched = allUnmatched;
  state.encounters = segmentEncounters(allEvents);
  state.scope = 'all';
  state.isSnapshot = false;
  state.parseResumeState = resumeState;
  state.lastUpdatedAt = Date.now();

  // If we're actively watching a live log file, anchor the cooldown
  // tracker's live-clock sync point to the newest line we just read, paired
  // with the real time we read it — see the `liveSync` comment above. A
  // plain static load (state.watcher is null here) leaves it unset, so the
  // tracker renders a frozen end-of-file snapshot instead of ticking.
  state.liveSync = state.watcher
    ? { clock: lastKnownClock(allEvents), wallTime: Date.now() }
    : null;

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = true;

  buildEncounterSelect();
  renderActiveTab();

  loadSkillIndex().then((map) => { state.skillMap = map; renderActiveTab(); });
}

// ---------------------------------------------------------------------------
// Incremental live-watch update — handles just the NEW complete lines
// LogWatcher read since the last poll (see filewatch.js), instead of
// re-parsing the whole growing file every time. parseLogText() is handed
// `state.parseResumeState` (the carried day-rollover/pending-attribution
// state from the previous chunk) so the result is identical to one big
// call having parsed the whole file at once — see parseLogText's own
// comment for exactly what that carries and why.
//
// Because the file only ever grows forward in time while watching, new
// events are always newer than everything already in state.rawEvents, so
// we can just append instead of re-sorting the whole (possibly huge by
// now) array on every poll — that resort was never the expensive part,
// but there's no reason to pay for it repeatedly either.
// ---------------------------------------------------------------------------
function ingestAppend(chunkText) {
  const { events, unmatched, state: parseState } = parseLogText(chunkText, state.parseResumeState);
  state.parseResumeState = parseState;
  if (events.length) state.rawEvents.push(...events);
  if (unmatched.length) {
    state.unmatched.push(...unmatched);
    if (state.unmatched.length > 500) state.unmatched.length = 500; // same cap parseLogText applies per call
  }
  state.encounters = segmentEncounters(state.rawEvents);
  state.lastUpdatedAt = Date.now();
  advanceLiveSync(lastKnownClock(state.rawEvents));

  buildEncounterSelect();
  renderActiveTab();
}

// ---------------------------------------------------------------------------
// Encounter picker
// ---------------------------------------------------------------------------
function buildEncounterSelect() {
  const sel = el('encounterSelect');
  sel.innerHTML = '';
  const optAll = document.createElement('option');
  optAll.value = 'all';
  optAll.textContent = `All combined (${state.encounters.length} encounter${state.encounters.length === 1 ? '' : 's'})`;
  sel.appendChild(optAll);
  state.encounters.forEach((enc, i) => {
    const opt = document.createElement('option');
    opt.value = String(enc.id);
    // Time only, never a calendar date — the log gives us a bare [HH:MM:SS]
    // per line and nothing reliably tells us which real day an encounter
    // fell on across a log that may span many days (see parser.js). The
    // "(+Nd)" suffix from fmtClock shows elapsed-day gaps instead.
    const time = enc.start != null ? fmtClock(enc.start, true) : '?';
    opt.textContent = `#${i + 1} — ${time} (${durationLabel(enc.durationMs)})`;
    sel.appendChild(opt);
  });
  sel.value = 'all';
  sel.onchange = () => { state.scope = sel.value; renderActiveTab(); };
}

function durationLabel(ms) {
  const sec = Math.round(ms / 1000);
  const m = Math.floor(sec / 60), s = sec % 60;
  return m ? `${m}m ${s}s` : `${s}s`;
}

// Any single gap between consecutive log lines longer than this is treated as
// a disconnect, a log-off, or a break between separate real-world play
// sessions -- not played time -- when working out realm points per hour.
// Chosen generously above normal lulls (running between objectives, a BG
// queue, a minute AFK) so it only trims genuine multi-day-file idle gaps,
// not ordinary play.
const RP_IDLE_GAP_MS = 15 * 60 * 1000;

// Realm points, unlike DPS/HPS, are routinely earned with no damage event
// anywhere nearby at all (keep captures, Assault Orders, missions, War
// Supplies runs, group assists) -- so "time spent dealing/taking damage"
// badly undercounts how long the player was actually out there earning
// them (reported bug: a log with lots of RP from BG objectives and very
// little personal damage showed 42K/hr because the "/hr" denominator was
// only ~35 minutes of combat out of a 2h8m, gap-free session). Sum the real
// elapsed time between consecutive log lines instead, skipping any one gap
// over RP_IDLE_GAP_MS so a multi-day-old file doesn't get treated as one
// continuous session.
function playedDurationMs(events) {
  const clocks = events.map(e => e.clock).filter(x => x != null).sort((a, b) => a - b);
  if (clocks.length < 2) return 1000;
  let ms = 0;
  for (let i = 1; i < clocks.length; i++) {
    const gap = clocks[i] - clocks[i - 1];
    if (gap > 0 && gap <= RP_IDLE_GAP_MS) ms += gap;
  }
  return Math.max(1000, ms);
}

function currentStats() {
  if (state.scope === 'all') {
    const stats = buildStats(state.rawEvents, null);
    // DPS/HPS over the *full* file span (which can include multi-day idle
    // gaps between sessions) is meaningless, so recompute those rates
    // against the sum of actual encounter time instead.
    const activeMs = state.encounters.reduce((a, e) => a + e.durationMs, 0) || stats.meta.durationMs;
    const activeSec = Math.max(1, activeMs / 1000);
    stats.damageOut.dps = +(stats.damageOut.total / activeSec).toFixed(1);
    stats.damageIn.dtps = +(stats.damageIn.total / activeSec).toFixed(1);
    stats.healOut.hps = +(stats.healOut.total / activeSec).toFixed(1);
    stats.meta.activeDurationMs = activeMs;
    const playedSec = playedDurationMs(state.rawEvents) / 1000;
    stats.realmPoints.perHour = +(stats.realmPoints.total / (playedSec / 3600)).toFixed(0);
    return stats;
  }
  const enc = state.encounters.find(e => String(e.id) === String(state.scope));
  if (!enc) return buildStats(state.rawEvents, null);
  return buildStats(enc.events, playerNameGuess());
}

function playerNameGuess() {
  // reuse whatever name any /stats block in the whole file reported
  const full = buildStats(state.rawEvents, null);
  return full.meta.playerName;
}

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    state.activeTab = btn.dataset.tab;
    el('panel-' + state.activeTab).classList.add('active');
    renderActiveTab();
  });
});

function renderActiveTab() {
  if (!state.rawEvents.length) return;
  const stats = currentStats();
  renderBgTicker();
  renderCooldownTracker();
  renderLastUpdated();

  // inferredClass (see aggregate.js's inferClass) is only ever set when
  // confident, so appending it here is never a guess shown as a fact.
  const classSuffix = stats.meta.inferredClass ? ` (${stats.meta.inferredClass.name})` : '';
  el('characterName').textContent = stats.meta.playerName ? `👤 ${stats.meta.playerName}${classSuffix}` : '👤 (name not found — look for a /stats block, or it\'s just not in this log)';
  const encLabel = state.scope === 'all'
    ? `Totals across the whole file · DPS/HPS use ${durationLabel(stats.meta.activeDurationMs || stats.meta.durationMs)} of active time`
    : `Single encounter · ${durationLabel(stats.meta.durationMs)}`;
  el('encounterMeta').textContent = encLabel;
  el('officialStatsNote').textContent = stats.meta.latestSnapshot ? '· /stats snapshot available on Overview' : '';

  const panel = el('panel-' + state.activeTab);
  const renderer = renderers[state.activeTab];
  if (renderer) {
    const scopeEventCount = state.scope === 'all'
      ? state.rawEvents.length
      : (state.encounters.find(e => String(e.id) === String(state.scope)) || { events: [] }).events.length;
    renderer(panel, stats, {
      skillMap: state.skillMap,
      unmatched: state.unmatched,
      eventCount: scopeEventCount,
    });
  }
}

// ---------------------------------------------------------------------------
// /bg center broadcast ticker — persistent across every tab, always built
// from the *whole* session (state.rawEvents), independent of the encounter
// picker, so it keeps showing the latest callout no matter which encounter
// or tab you're looking at.
// ---------------------------------------------------------------------------
const BG_TICKER_LIMIT = 5;

function renderBgTicker() {
  const broadcasts = getBgBroadcasts(state.rawEvents).slice(0, BG_TICKER_LIMIT);
  const ticker = el('bgTicker');
  const list = el('bgTickerList');
  list.innerHTML = '';
  if (!broadcasts.length) { ticker.hidden = true; return; }
  ticker.hidden = false;
  for (const b of broadcasts) {
    const li = document.createElement('li');
    const time = document.createElement('span');
    time.className = 'bg-ticker-time';
    time.textContent = b.clock != null ? fmtClock(b.clock, true) : '';
    const text = document.createElement('span');
    text.className = 'bg-ticker-text';
    text.textContent = b.count > 1 ? `${b.text} (×${b.count})` : b.text;
    text.title = b.text;
    li.appendChild(time);
    li.appendChild(text);
    list.appendChild(li);
  }
}

// ---------------------------------------------------------------------------
// Ability cooldown tracker — persistent across every tab, same as the bg
// ticker above. Looks at every spell cast (`cast` events) and every weapon
// swing that landed a named style (`melee_weapon` events carrying a
// `styleName`), and the first time we see a name we recognize in
// ABILITY_COOLDOWNS, it gets a permanent slot here for the rest of the
// session (see the big comment on renderCooldownTracker below for why it's
// built as a static roster rather than a dynamic "what's on cooldown right
// now" list). Ticks every second via the setInterval below; see the
// `liveSync` comment on `state` for how "now" is estimated while watching a
// live log vs. a plain static file load.
// ---------------------------------------------------------------------------
const COOLDOWN_READY_SOON_SEC = 3; // highlight a pill green once it's about to come off cooldown

function lastKnownClock(events) {
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].clock != null) return events[i].clock;
  }
  return null;
}

// Advances the live-clock sync point forward only — never rewinds it.
//
// The bug this fixes: a poll can arrive late for all sorts of reasons
// (chrome throttles timers hard in a backgrounded tab — easily to a
// once-a-minute cadence after a few minutes unfocused, which is the normal
// case while you're actually alt-tabbed into the game). When a late poll
// finally delivers a backlog of lines, the *newest* clock value in that
// backlog is already seconds (or tens of seconds) old by the time we see
// it — it reflects whenever the game printed that line, not "right now".
// Re-anchoring liveSync to {that backlog clock, Date.now()} on every poll
// (what this used to do) tells the countdown "that old moment IS right
// now", which quietly rewinds its sense of time backward by exactly the
// poll's lateness — the countdown then shows MORE time remaining than is
// real, by that same amount, every single time a poll lags. That's
// consistent with seeing ~45s left here against ~7s left in-game: the
// in-game clock had moved on for ~38s while our estimate of "now" didn't.
//
// The fix: only resync if the new data proves our running estimate is
// actually BEHIND the log's own clock (the normal, on-time case, and a
// tiny periodic correction for JS timer drift over a long session) —
// never because a late poll's data happens to be older than our estimate,
// which is exactly backlog, not a correction.
function advanceLiveSync(newestClock) {
  if (newestClock == null) return;
  const now = Date.now();
  if (!state.liveSync) { state.liveSync = { clock: newestClock, wallTime: now }; return; }
  const estimatedNow = state.liveSync.clock + (now - state.liveSync.wallTime);
  if (newestClock > estimatedNow) {
    state.liveSync = { clock: newestClock, wallTime: now };
  }
}

// Most recent cast time per recognized ability name. Events are already
// chronological (ingestTexts sorts by clock), so a later match simply
// overwrites an earlier one — we only ever care about the latest use.
function computeAbilityUsage(events) {
  const usage = new Map(); // name -> clock
  for (const e of events) {
    if (e.clock == null) continue;
    if (e.type === 'cast' && e.name && ABILITY_COOLDOWNS[e.name]) {
      usage.set(e.name, e.clock);
    } else if (e.type === 'melee_weapon' && e.styleName && ABILITY_COOLDOWNS[e.styleName]) {
      usage.set(e.styleName, e.clock);
    }
  }
  return usage;
}

// Converts a logged event's synthetic `clock` value into a real wall-clock
// moment (epoch ms), using the current liveSync anchor -- the one (clock,
// wallTime) pair we trust to mean "the log was at this clock value at this
// real moment" (see advanceLiveSync above). Only meaningful while actively
// watching with a resolved anchor; returns null otherwise (static load, or
// no anchor yet).
//
// This is the literal "take the ability's logged start time and compare it
// against system time" the cooldown countdown is built on, confirmed
// against a real session's chat.log: the game's printed [HH:MM:SS] tracks
// real wall-clock time, so once an event's real-world moment is known via
// this conversion, its remaining cooldown is simply
// `cooldownSeconds - (Date.now() - thatMoment) / 1000` -- read straight off
// the browser's own clock for every ability, every render, rather than
// through one shared extrapolated "now" value computed once per tick.
// (The two are mathematically identical -- liveSync.clock + (Date.now() -
// liveSync.wallTime) - usedAtClock reduces to Date.now() - eventWallClockMs
// -- but comparing each ability's cast moment straight against Date.now()
// makes that relationship explicit instead of implicit, and is easier to
// sanity-check against your actual system clock.)
function eventWallClockMs(eventClock) {
  if (!state.liveSync || state.liveSync.clock == null || eventClock == null) return null;
  return state.liveSync.wallTime + (eventClock - state.liveSync.clock);
}

function fmtCooldownRemaining(sec) {
  const whole = Math.max(0, Math.ceil(sec));
  if (whole < 60) return `${whole}s`;
  const m = Math.floor(whole / 60), s = whole % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

// A roster, not a dynamic "what's active right now" list: every ability
// with a known cooldown that's been cast at least once gets a permanent
// slot here for the rest of the session, in the order it was first seen
// (computeAbilityUsage's `usage` Map already preserves that -- a later use
// overwrites an existing key's clock value without moving it, since Map
// iteration order follows first insertion, not last update). Each slot
// just flips between two states as its own cooldown ticks:
//   ready       — normal opacity, no bar, "Ready" in the time slot.
//   on-cooldown — name/icon dimmed, bar + countdown ticking down to 0.
// Nothing is ever added mid-list or removed once it's shown up, and
// nothing gets re-sorted by remaining time anymore -- that's what makes
// this "static": once you've used an ability, it keeps the exact same
// spot on the page whether it's ready or cooling down, so you build a
// stable muscle-memory read of the row instead of hunting for it as pills
// used to jump around/appear/disappear every render.
function renderCooldownTracker() {
  const tracker = el('cooldownTracker');
  const list = el('cooldownTrackerList');
  const usage = computeAbilityUsage(state.rawEvents);

  if (!usage.size) { list.innerHTML = ''; tracker.hidden = true; return; }

  // Live: compare each ability's cast moment directly against the
  // browser's own Date.now() (see eventWallClockMs above). Static load (no
  // watcher, or no anchor resolved yet): fall back to the frozen
  // end-of-file clock, same as before -- there's no "real now" to compare
  // against for a file that isn't actually being watched.
  const isLive = !!(state.watcher && state.liveSync && state.liveSync.clock != null);
  const frozenNowClock = isLive ? null : lastKnownClock(state.rawEvents);

  const rows = [];
  for (const [name, usedAtClock] of usage) {
    const info = ABILITY_COOLDOWNS[name];
    let remainingSec = 0; // can't compute "now" yet (no events at all) -> show ready
    if (isLive) {
      remainingSec = info.cooldownSeconds - (Date.now() - eventWallClockMs(usedAtClock)) / 1000;
    } else if (frozenNowClock != null) {
      remainingSec = info.cooldownSeconds - (frozenNowClock - usedAtClock) / 1000;
    }
    rows.push({ name, icon: info.icon, cooldownSeconds: info.cooldownSeconds, remainingSec });
  }

  tracker.hidden = false;
  list.innerHTML = '';
  for (const a of rows) {
    const onCooldown = a.remainingSec > 0.25;
    const li = document.createElement('li');
    li.className = 'cooldown-pill ' + (onCooldown ? 'on-cooldown' : 'ready') +
      (onCooldown && a.remainingSec <= COOLDOWN_READY_SOON_SEC ? ' ready-soon' : '');

    const icon = document.createElement('span');
    icon.className = 'cooldown-pill-icon';
    icon.textContent = `#${a.icon}`;
    icon.title = `icon id ${a.icon} — no id → image mapping yet`;

    const name = document.createElement('span');
    name.className = 'cooldown-pill-name';
    name.textContent = a.name;
    name.title = onCooldown
      ? `${a.name} — on cooldown`
      : `${a.name} — ready`;

    const barWrap = document.createElement('span');
    barWrap.className = 'cooldown-pill-bar';
    const barFill = document.createElement('span');
    barFill.className = 'cooldown-pill-bar-fill';
    const pct = onCooldown ? Math.max(0, Math.min(100, (a.remainingSec / a.cooldownSeconds) * 100)) : 0;
    barFill.style.width = `${pct}%`;
    barWrap.appendChild(barFill);

    const time = document.createElement('span');
    time.className = 'cooldown-pill-time';
    time.textContent = onCooldown ? fmtCooldownRemaining(a.remainingSec) : 'Ready';

    li.appendChild(icon);
    li.appendChild(name);
    li.appendChild(barWrap);
    li.appendChild(time);
    list.appendChild(li);
  }
}

// "Last updated" — how long ago we last picked up new lines from the log,
// shown under the cooldown tracker so it's obvious whether the view is
// actually keeping up. While watching live, this ticking up past a couple
// multiples of the configured refresh interval (flagged in orange) usually
// means the watched file genuinely isn't growing right now, not that
// anything here is broken — e.g. nothing new has been typed/cast since, or
// the browser tab lost its file handle (rare, but happens if the OS asks
// to re-grant permission after the tab's been backgrounded a long while).
const STALE_UPDATE_MULTIPLE = 3;

// A second, much coarser threshold: this one isn't about the poll interval
// at all (a few missed polls in a row is normal and not alarming), it's
// about real-world time with genuinely nothing new in the log. 2 minutes
// of total silence while actively watching almost always means the game
// client has stopped writing to this file — most commonly because in-game
// chat logging got turned off (or never got turned on) — rather than a
// normal lull, so this gets a much louder, actionable banner instead of
// just the quiet orange text above.
const STALE_WATCH_BANNER_MS = 2 * 60 * 1000;

function fmtAgo(ms) {
  const sec = Math.max(0, Math.round(ms / 1000));
  if (sec < 1) return 'just now';
  if (sec < 60) return `${sec}s ago`;
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}m ${s}s ago`;
}

function renderLastUpdated() {
  const el_ = el('lastUpdated');
  const textEl = el('lastUpdatedText');
  const checkedEl = el('lastCheckedText');
  const banner = el('staleWatchBanner');
  if (!state.lastUpdatedAt) { el_.hidden = true; banner.hidden = true; return; }
  el_.hidden = false;

  const ageMs = Date.now() - state.lastUpdatedAt;
  textEl.textContent = `🕓 Last updated: ${fmtAgo(ageMs)}`;
  const updateStale = state.watcher && ageMs > state.watchIntervalMs * STALE_UPDATE_MULTIPLE;
  textEl.classList.toggle('stale', !!updateStale);

  // Only meaningful while actively watching a live handle — a static load
  // never polls again after its initial read, so there's nothing to show.
  if (state.watcher && state.lastPolledAt != null) {
    const checkedAgeMs = Date.now() - state.lastPolledAt;
    checkedEl.hidden = false;
    checkedEl.textContent = `File checked: ${fmtAgo(checkedAgeMs)}`;
    // This one lagging (not just "updated") means the poll loop itself
    // has stalled — a backgrounded tab throttled by the browser, or a
    // lost file handle — rather than the file simply not growing yet.
    checkedEl.classList.toggle('stale', checkedAgeMs > state.watchIntervalMs * STALE_UPDATE_MULTIPLE);
  } else {
    checkedEl.hidden = true;
  }

  banner.hidden = !(state.watcher && ageMs > STALE_WATCH_BANNER_MS);
}

// Re-render every second so active cooldowns visibly count down, and the
// "last updated" line keeps ticking, while watching a live log. Against a
// static (non-watched) file this just redraws the same frozen end-of-file
// snapshot each tick — harmless, and keeps this one code path correct for
// both cases rather than branching.
setInterval(() => {
  if (state.rawEvents.length) { renderCooldownTracker(); renderLastUpdated(); }
}, 1000);

// ---------------------------------------------------------------------------
// Watch mode (File System Access API — Chrome/Edge). There's no separate
// "start watching" action anymore: picking or dropping a .log file IS
// watching it, whenever the browser can give us a reusable handle — see
// pickFileOrSession()/loadHandle() above, which call this once they've
// already decided (by extension) that the chosen file isn't a snapshot.
// ---------------------------------------------------------------------------
async function beginWatch(handle) {
  stopWatching(); // in case a previous session's watcher is still running
  try {
    const watcher = new LogWatcher({
      // The common case (file grew) hands us just the new complete lines —
      // append-parse them with the carried resume state. A reset (file
      // shrank/rotated) has no "new tail" to speak of, so it's treated
      // exactly like loading a brand new file: full fresh parse, replacing
      // everything, same as the initial read below.
      onChange: (text, { reset }) => {
        if (reset) ingestTexts([{ name: 'live', text }]);
        else ingestAppend(text);
      },
      onError: (err) => console.warn('[chatgator] watch error', err),
      onPoll: () => { state.lastPolledAt = Date.now(); },
      pollMs: state.watchIntervalMs,
    });
    await watcher.startWithHandle(handle);
    const initialText = await watcher.readAll();
    state.watcher = watcher;
    state.lastPolledAt = Date.now(); // the readAll() above was itself a check
    ingestTexts([{ name: 'live', text: initialText }]);
    el('watchStatus').hidden = false;
    el('watchDot').classList.add('live');
    el('watchLabel').textContent = 'Watching live — keep this tab open';
    el('watchIntervalWrap').hidden = false;
    el('btnStopWatch').hidden = false;
    el('clearLogOptWrap').hidden = false;
    el('btnClearLog').hidden = false;
    startLiveBackground();
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn('[chatgator] could not start watch mode', err);
  }
}
function stopWatching() {
  if (state.watcher) { state.watcher.stop(); state.watcher = null; }
  state.liveSync = null; // back to a frozen end-of-file snapshot for the cooldown tracker
  state.lastPolledAt = null;
  stopLiveBackground();
  el('watchStatus').hidden = true;
  el('watchDot').classList.remove('live');
  el('watchIntervalWrap').hidden = true;
  el('btnStopWatch').hidden = true;
  el('clearLogOptWrap').hidden = true;
  el('staleWatchBanner').hidden = true;
  el('btnClearLog').hidden = true;
}

// ---------------------------------------------------------------------------
// Clear the watched log file itself (not just this view) — truncates the
// real file on disk via the File System Access API, optionally saving a
// byte-for-byte timestamped copy first. Only reachable while actively
// watching via a handle (see beginWatch/stopWatching above), since that's
// the only time we hold a reference capable of writing back to disk at
// all — there's no such handle for a plain <input type=file> load.
// ---------------------------------------------------------------------------
async function clearWatchedLogFile() {
  if (!state.watcher) return;
  const confirmed = confirm(
    "This clears the actual chat.log file Chat Gator is watching — not just this view.\n\n" +
    "If DAoC still has chat logging on, pause it in-game first so the client isn't writing " +
    "to the file at the same moment it's cleared.\n\nContinue?"
  );
  if (!confirmed) return;

  try {
    if (el('chkBackupBeforeClear').checked) {
      const snapshot = await state.watcher.snapshotFile();
      const saveHandle = await window.showSaveFilePicker({
        suggestedName: `chat_${backupTimestamp()}.log`,
        types: [{ description: 'DAoC chat log backup', accept: { 'text/plain': ['.log'] } }],
      });
      const writable = await saveHandle.createWritable();
      await writable.write(snapshot); // the raw File/Blob — exact bytes, no text round-trip
      await writable.close();
    }
    await state.watcher.clear();
    // LogWatcher's next poll sees the file shrink to 0 and reports it as a
    // reset on its own (same path as an external truncation/rotation) —
    // nothing else to do here; ingestTexts() picks it up from there.
  } catch (err) {
    if (err && err.name === 'AbortError') return; // backup "Save As" dialog was cancelled
    console.warn('[chatgator] could not clear the watched log file', err);
    alert(err && err.name === 'NotAllowedError'
      ? "Couldn't clear the log — write permission for the file was declined."
      : "Couldn't clear the log file. If DAoC is still actively writing to it, try pausing in-game chat logging first, then clear again.");
  }
}

function backupTimestamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

// ---------------------------------------------------------------------------
// Download snapshot — saves the currently-viewed stats as a JSON file so a
// session's parse can be kept/shared without re-uploading the raw chat.log.
// ---------------------------------------------------------------------------
function downloadSnapshot() {
  if (!state.rawEvents.length) return;
  const stats = currentStats();
  const scopeLabel = state.scope === 'all'
    ? 'all encounters combined'
    : (() => {
        const enc = state.encounters.find(e => String(e.id) === String(state.scope));
        return enc ? `encounter starting ${fmtClock(enc.start, true)}` : String(state.scope);
      })();
  // The events for whatever scope is currently selected — this is what lets
  // someone else's upload of this file reconstruct the full session (encounter
  // switching, sortable tables, everything), not just a flat summary.
  const scopeEvents = state.scope === 'all'
    ? state.rawEvents
    : (state.encounters.find(e => String(e.id) === String(state.scope))?.events || state.rawEvents);
  const snapshot = {
    tool: 'Chat Gator',
    format: 'chatgator-session-v1',
    exportedAt: new Date().toISOString(), // real wall-clock time of this export, not a log timestamp
    scope: scopeLabel,
    player: stats.meta.playerName || null,
    officialStatsSnapshot: stats.meta.latestSnapshot || null,
    summary: {
      damageDone: stats.damageOut.total,
      dps: stats.damageOut.dps,
      healingDone: stats.healOut.total,
      hps: stats.healOut.hps,
      damageTaken: stats.damageIn.total,
      dtps: stats.damageIn.dtps,
      realmPoints: stats.realmPoints.total,
      rpPerHour: stats.realmPoints.perHour,
      deathblows: stats.kills.deathblows,
      deaths: stats.kills.deaths,
    },
    damageDoneBySource: stats.damageOut.bySource,
    damageTakenBySource: stats.damageIn.bySource,
    healingDoneBySpell: stats.healOut.bySpell,
    healingDoneByTarget: stats.healOut.byTarget,
    healingReceivedBySource: stats.healIn.bySource,
    pets: stats.pets,
    defense: stats.defense,
    realmPointsByReason: stats.realmPoints.byReason,
    deathblowLog: stats.kills.deathblowLog,
    deathblowRpTotal: stats.kills.deathblowRpTotal,
    spellsCast: stats.spellsCast,
    // Raw events for this scope — re-uploading this file replays them through
    // the same stats pipeline a freshly-parsed log would use.
    events: scopeEvents,
  };
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const namePart = (stats.meta.playerName || 'session').replace(/[^a-z0-9_-]+/gi, '_');
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  a.href = url;
  a.download = `${namePart}_${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
