import { parseLogText } from './parser.js';
import { buildStats, segmentEncounters, segmentCheckpoints, getBgBroadcasts, getEnemiesTargeted } from './aggregate.js';
import { renderers, heraldLink, escHtml } from './ui.js';
import { loadSkillIndex } from './skills.js';
import { isWatchSupported, LogWatcher } from './filewatch.js';
import { SAMPLE_LOGS } from './sample-data.js';
import { fmtClock } from './charts.js';
import { ABILITY_COOLDOWNS } from './ability-cooldowns.js';
import { iconImg, getIconSkin, setIconSkin } from './icons.js';
import { CL_ABILITY_DATABASE } from './cl-ability-database.js';
import { startLiveBackground, stopLiveBackground, setColor as setLiveBackgroundColor } from './live-bg.js';
import { CHANGELOG } from './changelog.js';
import { realmColorForClass } from './realm.js';
import { saveSession, loadSession, clearSession } from './session-store.js';

// Champion-level abilities with a known Recast Delay, reshaped into the same
// { cooldownSeconds, cooldown, icon } shape ABILITY_COOLDOWNS already uses,
// so the cooldown tracker below can look both up through one combined map
// without caring which file an ability's data actually came from. No name
// here collides with an ABILITY_COOLDOWNS key (checked against this build's
// export — see tools/build-cl-ability-database.py), so there's no
// precedence question to resolve either way.
const CL_COOLDOWNS = Object.fromEntries(
  Object.entries(CL_ABILITY_DATABASE)
    .filter(([, info]) => info.cooldownSeconds != null)
    .map(([name, info]) => [name, { cooldownSeconds: info.cooldownSeconds, cooldown: info.cooldown, icon: info.icon }])
);
const ALL_COOLDOWNS = { ...CL_COOLDOWNS, ...ABILITY_COOLDOWNS };

const el = (id) => document.getElementById(id);

const state = {
  rawEvents: [],       // merged events from all loaded files
  unmatched: [],
  // Checkpoints — see aggregate.js's segmentCheckpoints for the full
  // rationale. Always derived from the FULL rawEvents (every /stats header
  // in the file, whoever it names), recomputed any time rawEvents changes.
  checkpoints: [],
  // Which player's checkpoints are currently being viewed. null is a real,
  // meaningful value here (the "no /stats header anywhere in this file"
  // case) — not "not yet chosen". Defaults to the most-recently-active
  // player (the last checkpoint's own name) every time checkpoints are
  // rebuilt from a changed player set, which for the overwhelmingly common
  // single-name-or-no-/stats-at-all file is also the ONLY player, so this
  // never surfaces as a visible choice in that case (see buildPlayerSelect).
  playerScope: null,
  // 'all' (every checkpoint belonging to playerScope, concatenated in file
  // order — which can be non-contiguous in time when another player's
  // checkpoint sits in between two of this one's own, see segmentCheckpoints)
  // or a specific checkpoint id scoped to playerScope.
  checkpointScope: 'all',
  // The resolved event list for the current player+checkpoint selection —
  // what encounters, and ultimately buildStats, actually run against.
  // Recomputed by refreshScopedEncounters() any time playerScope or
  // checkpointScope changes (or rawEvents itself changes).
  scopedEvents: [],
  encounters: [],       // from segmentEncounters(scopedEvents) — see above
  scope: 'all',          // 'all' or encounter id, WITHIN the current player+checkpoint scope
  activeTab: 'overview',
  skillMap: {},
  watcher: null,
  // The raw FileSystemFileHandle backing `watcher`, kept separately because
  // it's what gets persisted for resuming across a page refresh (see
  // js/session-store.js and the "Resume a watched session" section below) —
  // LogWatcher wraps its own copy internally, but app.js needs one too to
  // hand to saveSession() without reaching into the watcher's internals.
  // null whenever watcher is (plain upload, snapshot import, or just not
  // watching yet).
  watcherHandle: null,
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
  // unconditionally re-seeded on any full reload (new file, OR the watched
  // file being rotated/restarted, OR simply restarting the watch itself —
  // "New session" + re-picking the same still-unchanged file) — only the
  // pure-append path (ingestAppend) advances it forward-only instead of
  // re-seeding. That re-seed is NOT a naive "the newest known line just
  // happened" guess (it used to be, which is exactly the bug: restarting
  // the watch against a file that hadn't grown since you last looked at
  // it silently reset every ability's apparent cast time to "now",
  // discarding however much real time had actually already elapsed and
  // showing a freshly-full cooldown instead of correctly-reduced time
  // left) — see estimateInitialAnchor() below for how it derives the
  // newest event's real moment properly instead.
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

  // Classic vs. new in-game icon art (js/icons.js). Same ids either way, so
  // switching is just a re-render.
  const skinBtn = el('btnIconSkin');
  const label = () => { skinBtn.textContent = getIconSkin() === 'classic' ? '🖼 Classic icons' : '🖼 New icons'; };
  label();
  skinBtn.addEventListener('click', () => {
    setIconSkin(getIconSkin() === 'classic' ? 'new' : 'classic');
    label();
    if (state.rawEvents.length) { renderActiveTab(); renderCooldownTracker(); }
  });
})();

// ---------------------------------------------------------------------------
// Changelog — a simple "what's new" dialog, available from the header
// whether or not a log is loaded yet. See js/changelog.js for the entries
// themselves (newest first); this just renders them into the dialog once.
// ---------------------------------------------------------------------------
(function initChangelog() {
  const list = el('changelogList');
  for (const entry of CHANGELOG) {
    const item = document.createElement('div');
    item.className = 'changelog-entry';
    const bullets = entry.bullets.map(b => `<li>${b}</li>`).join('');
    item.innerHTML = `<div class="changelog-date">${entry.date}</div><h3>${entry.title}</h3><ul>${bullets}</ul>`;
    list.appendChild(item);
  }
  const dialog = el('changelogDialog');
  el('btnChangelog').addEventListener('click', () => dialog.showModal());
  el('btnCloseChangelog').addEventListener('click', () => dialog.close());
  // Click on the backdrop (the native ::backdrop pseudo-element isn't a
  // real click target, so this is just "click landed on the <dialog> element
  // itself, not something inside it") closes it too, same as most modals.
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
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

// Loads one SAMPLE_LOGS entry by key — shared by the "Try a sample log"
// button below and the ?demo=<key> auto-load at the bottom of this file
// (and, via a tiny redirect stub, the pretty /demo/<Name>/ links people
// actually share — see demo/Dexii/index.html and demo/Whispra/index.html).
// Keeping this as the one place that knows how to turn a SAMPLE_LOGS key
// into a loaded session means a shared link and the manual picker can
// never drift apart.
async function loadSampleByKey(key) {
  const sample = SAMPLE_LOGS[key];
  if (!sample) return false;
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
      return false;
    }
    return true;
  }
  ingestTexts([{ name: `${key}.log`, text: sample.text }]);
  return true;
}

el('btnSample').addEventListener('click', () => loadSampleByKey(el('sampleClassSelect').value));

// A shared link for a specific sample — https://.../chatgator/?demo=dexii,
// or the prettier /demo/Dexii/ path that redirects here with this same
// query string — loads that sample immediately instead of making whoever
// clicked the link pick it from the dropdown themselves. Keeps the select
// box in sync too, so it doesn't silently disagree with what's on screen
// if they then touch "Try a sample log" again.
{
  const demoKey = new URLSearchParams(location.search).get('demo')?.toLowerCase();
  if (demoKey && SAMPLE_LOGS[demoKey]) {
    const select = el('sampleClassSelect');
    if (select) select.value = demoKey;
    loadSampleByKey(demoKey);
  }
}

el('btnLoadAnother').addEventListener('click', startNewSession);

function startNewSession() {
  stopWatching();
  el('appMain').hidden = true;
  el('dropzoneSection').hidden = false;
  el('btnLoadAnother').hidden = true;
  el('btnDownloadSnapshot').hidden = true;
  el('snapshotPill').hidden = true;
  el('bgTicker').hidden = true;
  el('enemiesTargetedRow').hidden = true;
  lastRenderedNewestKey = null;
  el('cooldownTracker').hidden = true;
  el('lastUpdated').hidden = true;
  state.rawEvents = []; state.unmatched = [];
  state.checkpoints = []; state.playerScope = null; state.checkpointScope = 'all'; state.scopedEvents = [];
  state.encounters = []; state.scope = 'all'; state.isSnapshot = false;
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
  state.scope = 'all';
  state.isSnapshot = true;
  refreshCheckpointsAndScope();

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = false;
  el('snapshotPill').title = data.exportedAt
    ? `Imported snapshot · exported ${new Date(data.exportedAt).toLocaleString()}${data.player ? ` · ${data.player}` : ''}`
    : 'Imported snapshot';

  buildPlayerSelect();
  buildCheckpointSelect();
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
  state.scope = 'all';
  state.isSnapshot = false;
  state.parseResumeState = resumeState;
  state.lastUpdatedAt = Date.now();
  refreshCheckpointsAndScope();

  // If we're actively watching a live log file, anchor the cooldown
  // tracker's live-clock sync point to the newest line we just read,
  // paired with our best estimate of when it REALLY happened — see
  // estimateInitialAnchor() below (and the `liveSync` comment above for
  // why this isn't simply "paired with right now"). A plain static load
  // (state.watcher is null here) leaves it unset, so the tracker renders
  // a frozen end-of-file snapshot instead of ticking.
  state.liveSync = state.watcher
    ? estimateInitialAnchor(lastKnownClock(allEvents))
    : null;

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = true;

  buildPlayerSelect();
  buildCheckpointSelect();
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
  state.lastUpdatedAt = Date.now();
  advanceLiveSync(lastKnownClock(state.rawEvents));
  refreshCheckpointsAndScope();

  buildPlayerSelect();
  buildCheckpointSelect();
  buildEncounterSelect();
  renderActiveTab();
}

// ---------------------------------------------------------------------------
// Repaints the screen from a session saved by schedulePersistSession()
// below, as part of resuming a watched log across a page refresh — see the
// "Resume a watched session" section further down for the full picture.
// This is deliberately NOT a re-parse: it trusts the already-parsed events
// exactly as they were saved, so the view can come back instantly without
// waiting on the file handle's permission check (which may need a click —
// see tryResumeSession). If that check succeeds, beginWatch() runs right
// after this and fully replaces everything here with a fresh read of the
// file's current contents anyway, so this is only ever the bridge until
// then (or, if the handle can't be resumed, the view the user is left
// looking at — static, same as any one-time load).
// ---------------------------------------------------------------------------
function applyRestoredSnapshot(snapshot) {
  state.rawEvents = snapshot.rawEvents || [];
  state.unmatched = snapshot.unmatched || [];
  state.playerScope = snapshot.playerScope ?? null;
  state.checkpointScope = snapshot.checkpointScope ?? 'all';
  state.scope = snapshot.scope ?? 'all';
  state.isSnapshot = false;
  state.liveSync = null; // static until/unless beginWatch confirms live access below
  state.parseResumeState = null; // beginWatch does a fresh full parse, not an append, so this isn't needed
  state.lastUpdatedAt = snapshot.lastUpdatedAt ?? null;
  refreshCheckpointsAndScope();

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = true;

  const tabName = snapshot.activeTab;
  const tabBtn = tabName && document.querySelector(`.tab[data-tab="${tabName}"]`);
  if (tabBtn) {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    state.activeTab = tabName;
    el('panel-' + tabName).classList.add('active');
  }

  buildPlayerSelect();
  buildCheckpointSelect();
  buildEncounterSelect();
  renderActiveTab();

  loadSkillIndex().then((map) => { state.skillMap = map; renderActiveTab(); });
}

// ---------------------------------------------------------------------------
// Player / checkpoint / encounter pickers
//
// Three nested levels, outermost first: a PLAYER (a name any "Statistics
// for X this Session:" block in the file named — see aggregate.js's
// segmentCheckpoints for exactly how a changed name splits the file), a
// CHECKPOINT (one specific /stats block belonging to that player, or "all"
// of that player's checkpoints combined), and an ENCOUNTER (unchanged from
// before this feature — a single fight within whatever player+checkpoint
// scope is currently selected, or "all" of them combined). Each level's
// dropdown is rebuilt top-down whenever the level above it changes, and
// state.scopedEvents/state.encounters always reflect the fully-resolved
// player+checkpoint scope — buildStats and playedDurationMs etc. never see
// the raw whole-file event list directly, only this resolved view of it.
// ---------------------------------------------------------------------------

// Called any time state.rawEvents changes (new file, snapshot import, or a
// live-watch append). Rebuilds the checkpoint list and, only when the
// current playerScope no longer exists in it (a fresh load, or — in
// principle — a live file somehow losing a name, which never really
// happens since a watched file only grows), re-defaults to the most
// recently active player: the last checkpoint's own name. That default
// rule is deliberately "most recent", not "first" or "most data", since
// the whole point of this feature is usually "which character am I
// playing *right now*" — and it's also why a live-watch append, which can
// only ever add a NEWER checkpoint, never yanks the view away from a
// player the user deliberately selected earlier (their choice still
// exists in the rebuilt list, so the "no longer exists" re-default never
// fires for them).
function refreshCheckpointsAndScope() {
  state.checkpoints = segmentCheckpoints(state.rawEvents);
  const knownPlayers = new Set(state.checkpoints.map(cp => cp.player));
  if (!knownPlayers.has(state.playerScope)) {
    state.playerScope = state.checkpoints.length
      ? state.checkpoints[state.checkpoints.length - 1].player
      : null;
    state.checkpointScope = 'all';
  }
  const cpsForPlayer = state.checkpoints.filter(cp => cp.player === state.playerScope);
  if (state.checkpointScope !== 'all' && !cpsForPlayer.some(cp => String(cp.id) === String(state.checkpointScope))) {
    state.checkpointScope = 'all';
  }
  refreshScopedEncounters();
}

// The events for the current player+checkpoint selection, then re-derives
// state.encounters from exactly that (never from the raw whole-file list),
// preserving the current encounter selection if it's still valid and
// falling back to "all" otherwise — so switching player/checkpoint, or a
// live-watch append adding more lines to the SAME selection, never yanks
// the view back to "all" out from under someone looking at one specific
// fight (the "continue from where you left off" ask).
function refreshScopedEncounters() {
  const cpsForPlayer = state.checkpoints.filter(cp => cp.player === state.playerScope);
  state.scopedEvents = state.checkpointScope === 'all'
    ? cpsForPlayer.flatMap(cp => cp.events)
    : (cpsForPlayer.find(cp => String(cp.id) === String(state.checkpointScope))?.events
       || cpsForPlayer.flatMap(cp => cp.events));
  state.encounters = segmentEncounters(state.scopedEvents);
  if (state.scope !== 'all' && !state.encounters.some(e => String(e.id) === String(state.scope))) {
    state.scope = 'all';
  }
}

function buildPlayerSelect() {
  const wrap = el('playerSelectWrap');
  const sel = el('playerSelect');
  // First-appearance order (by each player's first checkpoint), not
  // alphabetical or most-active — reads naturally as "who showed up when".
  const seen = new Set();
  const players = [];
  for (const cp of state.checkpoints) {
    if (!seen.has(cp.player)) { seen.add(cp.player); players.push(cp.player); }
  }
  sel.innerHTML = '';
  for (const p of players) {
    const opt = document.createElement('option');
    opt.value = p == null ? '__unknown__' : p;
    opt.textContent = p == null ? '(name not found)' : p;
    sel.appendChild(opt);
  }
  sel.value = state.playerScope == null ? '__unknown__' : state.playerScope;
  // Only ever shows up once a SECOND player name is actually seen — a
  // typical single-character log (the vast majority) looks exactly like it
  // did before this feature existed.
  wrap.hidden = players.length <= 1;
  sel.onchange = () => {
    state.playerScope = sel.value === '__unknown__' ? null : sel.value;
    state.checkpointScope = 'all';
    refreshScopedEncounters();
    buildCheckpointSelect();
    buildEncounterSelect();
    renderActiveTab();
  };
}

function buildCheckpointSelect() {
  const wrap = el('checkpointSelectWrap');
  const sel = el('checkpointSelect');
  const cps = state.checkpoints.filter(cp => cp.player === state.playerScope);
  sel.innerHTML = '';
  const optAll = document.createElement('option');
  optAll.value = 'all';
  optAll.textContent = `All checkpoints (${cps.length})`;
  sel.appendChild(optAll);
  cps.forEach((cp) => {
    const opt = document.createElement('option');
    opt.value = String(cp.id);
    const time = cp.startClock != null ? fmtClock(cp.startClock, true) : '?';
    opt.textContent = `Checkpoint ${cp.playerIndex} — ${time}`;
    sel.appendChild(opt);
  });
  sel.value = state.checkpointScope;
  // Only shows up once the selected player actually has a second
  // checkpoint — re-running /stats once for the same character (by far the
  // most common reason a /stats block exists at all) stays exactly as
  // simple as it always was.
  wrap.hidden = cps.length <= 1;
  sel.onchange = () => {
    state.checkpointScope = sel.value;
    refreshScopedEncounters();
    buildEncounterSelect();
    renderActiveTab();
  };
}

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
  // Preserve the current selection across a rebuild (a live-watch append
  // rebuilds this on every poll) if it's still a valid encounter id in the
  // new list, instead of always snapping back to "all" — same
  // continue-where-you-left-off reasoning as refreshScopedEncounters above.
  sel.value = state.encounters.some(e => String(e.id) === String(state.scope)) ? String(state.scope) : 'all';
  if (sel.value === 'all') state.scope = 'all';
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

// Everything here runs against state.scopedEvents (the resolved
// player+checkpoint selection — see refreshScopedEncounters), never the raw
// whole-file state.rawEvents directly, so a file covering more than one
// character or more than one /stats-separated play session never blends
// another player's (or another checkpoint's) numbers into what's shown.
// state.playerScope is passed explicitly as buildStats' hint instead of
// buildStats inferring it from whatever /stats header it sees first — see
// aggregate.js's buildStats for why that first-wins default is wrong once a
// file can contain more than one name.
function currentStats() {
  if (state.scope === 'all') {
    const stats = buildStats(state.scopedEvents, state.playerScope);
    // DPS/HPS over the *full* scoped span (which can include multi-day idle
    // gaps between sessions) is meaningless, so recompute those rates
    // against the sum of actual encounter time instead.
    const activeMs = state.encounters.reduce((a, e) => a + e.durationMs, 0) || stats.meta.durationMs;
    const activeSec = Math.max(1, activeMs / 1000);
    stats.damageOut.dps = +(stats.damageOut.total / activeSec).toFixed(1);
    stats.damageIn.dtps = +(stats.damageIn.total / activeSec).toFixed(1);
    stats.healOut.hps = +(stats.healOut.total / activeSec).toFixed(1);
    stats.meta.activeDurationMs = activeMs;
    const playedSec = playedDurationMs(state.scopedEvents) / 1000;
    stats.realmPoints.perHour = +(stats.realmPoints.total / (playedSec / 3600)).toFixed(0);
    return stats;
  }
  const enc = state.encounters.find(e => String(e.id) === String(state.scope));
  if (!enc) return buildStats(state.scopedEvents, state.playerScope);
  return buildStats(enc.events, state.playerScope);
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
  renderEnemiesTargeted();
  renderCooldownTracker();
  renderLastUpdated();

  // inferredClass (see aggregate.js's inferClass) is only ever set when
  // confident, so appending it here is never a guess shown as a fact.
  const classSuffix = stats.meta.inferredClass ? ` (${stats.meta.inferredClass.name})` : '';
  // Re-tint the live background (if it's running), and the "Watching
  // live" dot/label in the header, to the selected player's class's
  // realm — see js/realm.js. Harmless to call even when the background
  // isn't currently showing; it just sits unused until it is.
  const realmColor = realmColorForClass(stats.meta.inferredClass?.name);
  setLiveBackgroundColor(realmColor);
  if (realmColor) document.documentElement.style.setProperty('--watch-color', `rgb(${realmColor})`);
  else document.documentElement.style.removeProperty('--watch-color');
  // Links the character name itself to their Eden Herald profile, same as
  // every other player name shown elsewhere in the app -- heraldLink()
  // already no-ops (plain escaped text, no link) for anything containing a
  // space, which a real DAoC character name never does, so this is safe
  // even on the "name not found" fallback text below.
  el('characterName').innerHTML = stats.meta.playerName
    ? `👤 ${heraldLink(stats.meta.playerName)}${escHtml(classSuffix)}`
    : '👤 (name not found — look for a /stats block, or it\'s just not in this log)';
  // "the whole file" is only accurate when there's nothing to scope away —
  // a single player, no /stats-separated checkpoints. Once either kind of
  // scoping is actually narrowing the view, say so instead of overclaiming.
  const isFullFile = state.checkpointScope === 'all' &&
    new Set(state.checkpoints.map(cp => cp.player)).size <= 1;
  const totalsLabel = isFullFile ? 'Totals across the whole file' : 'Totals for this selection';
  const encLabel = state.scope === 'all'
    ? `${totalsLabel} · DPS/HPS use ${durationLabel(stats.meta.activeDurationMs || stats.meta.durationMs)} of active time`
    : `Single encounter · ${durationLabel(stats.meta.durationMs)}`;
  el('encounterMeta').textContent = encLabel;
  el('officialStatsNote').textContent = stats.meta.latestSnapshot ? '· /stats snapshot available on Overview' : '';

  const panel = el('panel-' + state.activeTab);
  const renderer = renderers[state.activeTab];
  if (renderer) {
    const scopeEventCount = state.scope === 'all'
      ? state.scopedEvents.length
      : (state.encounters.find(e => String(e.id) === String(state.scope)) || { events: [] }).events.length;
    renderer(panel, stats, {
      skillMap: state.skillMap,
      unmatched: state.unmatched,
      eventCount: scopeEventCount,
    });
  }

  // renderActiveTab runs after every change that actually matters for a
  // resumed session (new/appended events, or the player/checkpoint/
  // encounter/tab selection changing) — but NOT from the once-a-second
  // cooldown/last-updated tick (that calls renderCooldownTracker/
  // renderLastUpdated directly, never this), which is exactly the
  // distinction schedulePersistSession's debouncing needs: this fires only
  // on real changes, not every second regardless. See its own comment for
  // why saves are debounced at all.
  if (state.watcher) schedulePersistSession();
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
// Enemies targeted — persistent across every tab, same reasoning as the /bg
// ticker just above: always built from the *whole* session, independent of
// the encounter picker. Shows the last ENEMIES_TARGETED_LIMIT real enemy
// players confirmed via the game's own examine action (see parser.js's
// 'examine_enemy' rule and aggregate.js's getEnemiesTargeted) as a row of
// small cards. New cards enter from the right and push older ones left;
// once there are more than the limit, the oldest (leftmost) is simply
// dropped by getEnemiesTargeted's own slice before we ever render it.
//
// lastRenderedNewestKey remembers which entry was newest last time we
// rendered, purely so we can tell whether THIS render's newest entry is
// actually new (and deserves the slide-in animation) or just the same
// entry being redrawn again (e.g. the player switched tabs, which re-runs
// renderActiveTab but hasn't targeted anyone new) -- without this, every
// render would replay the entrance animation on the rightmost card.
// ---------------------------------------------------------------------------
const ENEMIES_TARGETED_LIMIT = 5;
let lastRenderedNewestKey = null;

function renderEnemiesTargeted() {
  const enemies = getEnemiesTargeted(state.rawEvents, ENEMIES_TARGETED_LIMIT);
  const row = el('enemiesTargetedRow');
  const list = el('enemiesTargetedList');
  list.innerHTML = '';
  if (!enemies.length) { row.hidden = true; return; }
  row.hidden = false;
  const newest = enemies[enemies.length - 1];
  const newestKey = `${newest.name}@${newest.clock}`;
  const isFreshEntry = lastRenderedNewestKey !== null && newestKey !== lastRenderedNewestKey;
  enemies.forEach((enemy, i) => {
    const card = document.createElement('div');
    card.className = 'enemy-card';
    if (i === enemies.length - 1 && isFreshEntry) card.classList.add('enemy-card-enter');
    // heraldLink() already escapes the name and skips linking anything
    // containing a space (never a real player) -- same safety net every
    // other player name in this app gets.
    card.innerHTML = heraldLink(enemy.name);
    list.appendChild(card);
  });
  lastRenderedNewestKey = newestKey;
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

// Bug fixed here: restarting the watch ("New session" + re-picking the
// same file, or a page reload once that's supported) against a file
// that HASN'T grown since you last looked at it used to pair the
// newest known line with Date.now() unconditionally — i.e. "that line
// just happened", even when it actually happened minutes ago and
// nothing since has moved. Every ability's apparent cast time silently
// reset to "now", showing a freshly-full cooldown instead of correctly
// reduced time left — not using current system time at all, really: it
// was using current system time for BOTH sides of the subtraction.
//
// The fix uses the same fact eventWallClockMs relies on below — the
// game's own [HH:MM:SS] tracks real wall-clock time, confirmed against
// a real session's chat.log — to derive the newest line's actual real
// moment directly: today's midnight (local time) plus its time-of-day
// (clock mod 24h strips out any day-rollover offset parser.js already
// folded in, getting back to a plain HH:MM:SS-shaped value). That's
// correct for the one case this matters — a file that's genuinely
// being tailed live right now, which can only be from today — with no
// "just happened" guess anywhere in it.
//
// Sanity-guarded against the other case: an old, already-finished log
// opened via the watch picker by mistake (it'll just never grow, but
// nothing stops a user from picking last week's backup). If the
// derived moment lands implausibly far from right now — more than a
// generous few hours either way, well past any normal overnight
// session or just-past-midnight rollover — this falls back to the old
// "treat it as having just happened" behavior, which is at least
// internally consistent and keeps ticking sensibly from that point,
// rather than showing a nonsense multi-day countdown.
const ANCHOR_PLAUSIBLE_WINDOW_MS = 6 * 3600 * 1000;
const DAY_MS = 86400000;
function estimateInitialAnchor(newestClock) {
  const now = Date.now();
  if (newestClock == null) return { clock: newestClock, wallTime: now };
  const d = new Date(now);
  const todayMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const timeOfDayMs = ((newestClock % DAY_MS) + DAY_MS) % DAY_MS; // guard a stray negative before parser.js ever produces one
  const derivedMoment = todayMidnight + timeOfDayMs;
  const wallTime = Math.abs(now - derivedMoment) <= ANCHOR_PLAUSIBLE_WINDOW_MS ? derivedMoment : now;
  // Pairing wallTime with newestClock itself (not some other clock
  // value) means eventWallClockMs(newestClock) reduces to exactly
  // wallTime, same formula advanceLiveSync already relies on below.
  return { clock: newestClock, wallTime };
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
    if (e.type === 'cast' && e.name && ALL_COOLDOWNS[e.name]) {
      usage.set(e.name, e.clock);
    } else if (e.type === 'melee_weapon' && e.styleName && ALL_COOLDOWNS[e.styleName]) {
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
  // state.scopedEvents (the resolved player+checkpoint selection -- see
  // refreshScopedEncounters), NOT the raw whole-file state.rawEvents: with
  // more than one character's /stats checkpoints in the same file, the
  // tracker used to keep showing whichever abilities happened to be used
  // anywhere in the WHOLE file regardless of which player was selected,
  // while every other tab correctly followed the player/checkpoint picker
  // (they already went through currentStats(), which reads scopedEvents).
  // Deliberately NOT narrowed further to the single-encounter state.scope,
  // though -- unlike the per-tab stats breakdown, the cooldown tracker is
  // meant to reflect the whole selected play session regardless of which
  // past encounter you're browsing (see the comment above on why this is a
  // static, persistent-across-encounters roster).
  const usage = computeAbilityUsage(state.scopedEvents);

  if (!usage.size) { list.innerHTML = ''; tracker.hidden = true; return; }

  // Live: compare each ability's cast moment directly against the
  // browser's own Date.now() (see eventWallClockMs above). Static load (no
  // watcher, or no anchor resolved yet): fall back to the frozen
  // end-of-file clock, same as before -- there's no "real now" to compare
  // against for a file that isn't actually being watched. Scoped the same
  // way as `usage` above, for the same reason -- "now" for a statically
  // viewed character should be that character's own last line, not
  // whichever player's line happens to be last in the whole file.
  const isLive = !!(state.watcher && state.liveSync && state.liveSync.clock != null);
  const frozenNowClock = isLive ? null : lastKnownClock(state.scopedEvents);

  const rows = [];
  for (const [name, usedAtClock] of usage) {
    const info = ALL_COOLDOWNS[name];
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

    // Real in-game icon (see js/icons.js); falls back to an empty slot of the
    // same size so pills stay aligned when a name has no known icon.
    const icon = iconImg(a.name, 'cooldown-pill-icon') || document.createElement('span');
    if (!icon.classList.contains('cooldown-pill-icon')) icon.className = 'cooldown-pill-icon cooldown-pill-icon-empty';

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
// Persisting the watched session across a page refresh — saves the live
// file handle (structured-cloneable, so IndexedDB can hold it directly —
// see js/session-store.js) plus enough of `state` to redraw the view
// instantly on the next load, before we even know whether the handle's
// permission survived the reload (see tryResumeSession further below).
//
// Only ever meaningful while state.watcher is set — a one-time upload or a
// browser without the File System Access API has no handle to resume from,
// so there's nothing worth persisting for those.
//
// Debounced: renderActiveTab() (the one call site below) runs on every
// poll that actually found new lines, which during active combat can be
// every second or two for a whole play session — re-serializing the whole
// (possibly large) rawEvents array to IndexedDB that often would be wasted
// work for data that's about to be overwritten again a moment later.
// schedulePersistSession() coalesces a burst of these into one write ~1.5s
// after the last one, with an 8s maxWait so a long, continuously-busy
// session doesn't go that whole time without a save.
// ---------------------------------------------------------------------------
let persistDebounceTimer = null;
let persistMaxWaitTimer = null;
function schedulePersistSession() {
  if (!state.watcher || !state.watcherHandle) return;
  if (persistDebounceTimer) clearTimeout(persistDebounceTimer);
  persistDebounceTimer = setTimeout(runScheduledPersist, 1500);
  if (!persistMaxWaitTimer) persistMaxWaitTimer = setTimeout(runScheduledPersist, 8000);
}
function runScheduledPersist() {
  if (persistDebounceTimer) { clearTimeout(persistDebounceTimer); persistDebounceTimer = null; }
  if (persistMaxWaitTimer) { clearTimeout(persistMaxWaitTimer); persistMaxWaitTimer = null; }
  persistSessionNow();
}
function cancelScheduledPersist() {
  if (persistDebounceTimer) { clearTimeout(persistDebounceTimer); persistDebounceTimer = null; }
  if (persistMaxWaitTimer) { clearTimeout(persistMaxWaitTimer); persistMaxWaitTimer = null; }
}
function persistSessionNow() {
  if (!state.watcher || !state.watcherHandle) return;
  saveSession(state.watcherHandle, {
    rawEvents: state.rawEvents,
    unmatched: state.unmatched,
    playerScope: state.playerScope,
    checkpointScope: state.checkpointScope,
    scope: state.scope,
    activeTab: state.activeTab,
    lastUpdatedAt: state.lastUpdatedAt,
    fileName: state.watcherHandle.name,
  });
}

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
    state.watcherHandle = handle;
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
    // Saved right away (not just via the debounced hook above) so a
    // refresh seconds after starting to watch — including the exact
    // "refresh to pick up a new build" case this feature exists for —
    // always has something to resume, rather than a window where nothing's
    // been saved yet.
    persistSessionNow();
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn('[chatgator] could not start watch mode', err);
  }
}
function stopWatching() {
  if (state.watcher) { state.watcher.stop(); state.watcher = null; }
  state.watcherHandle = null;
  cancelScheduledPersist();
  // Explicitly stopping means there's nothing left to resume on a later
  // refresh — leave the data on screen (same as always), but don't let a
  // refresh after this silently start watching again against the user's
  // own choice to stop.
  clearSession();
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
// Resume a watched session across a page refresh/reload (a new tab, or just
// hitting F5 to pick up a freshly-deployed update) using the file handle
// persistSessionNow()/schedulePersistSession() above saved to IndexedDB —
// see js/session-store.js.
//
// Whether this can finish silently depends entirely on what the browser
// did to the handle's permission grant since it was saved, which is out of
// our hands:
//   - A same-tab refresh soon after starting to watch USUALLY leaves the
//     grant intact — handle.queryPermission() reports 'granted' with no UI
//     at all — so this resumes live watching completely silently. That's
//     the literal case this exists for.
//   - Anything that actually revokes the grant (closing every tab for this
//     origin, or the tab sitting backgrounded long enough) means getting
//     it back needs a real requestPermission() call — and the File System
//     Access API requires transient user activation (a real click) to show
//     that permission prompt at all; calling it unprompted from a page-load
//     handler throws SecurityError outright, with no way around that from
//     here. So in that case this still restores the last-saved data
//     immediately (no blank dropzone while we find out) and shows a single
//     "Resume watching…" button that supplies the click requestPermission
//     needs — ignorable (dismiss, or just use "New session" as always) if
//     that's not what you want right now.
// ---------------------------------------------------------------------------
let pendingResume = null; // { handle, snapshot, savedAt } while the resume button is showing

(async function tryResumeSession() {
  if (!isWatchSupported()) return;
  // An explicit shared-sample link (?demo=...) takes priority over
  // resuming whatever was being watched before — someone who followed a
  // demo link wants that demo, not to be dropped back into their own last
  // session instead.
  if (new URLSearchParams(location.search).get('demo')) return;

  let record;
  try { record = await loadSession(); } catch { record = null; }
  if (!record || !record.handle || !record.snapshot) return;
  // Something's already loaded by the time this resolves (in principle, a
  // very fast manual pick) — don't clobber it.
  if (state.rawEvents.length) return;

  applyRestoredSnapshot(record.snapshot);
  const restoredEventsRef = state.rawEvents; // see the guard right after the await below

  let granted = false;
  try {
    granted = (await record.handle.queryPermission({ mode: 'read' })) === 'granted';
  } catch { granted = false; }

  // However unlikely, the user could have taken their own action (picked a
  // different file, tried a sample) during that await — ingestTexts/
  // ingestAppend/ingestSnapshotEvents always assign state.rawEvents a new
  // array, so a reference change here means exactly that happened. Don't
  // override whatever they're looking at now with the stale resume.
  if (state.rawEvents !== restoredEventsRef) return;

  if (granted) {
    beginWatch(record.handle);
    return;
  }

  pendingResume = record;
  const banner = el('resumeSessionBanner');
  if (banner) {
    el('resumeSessionText').textContent =
      `This is where you left off watching ${record.snapshot.fileName || 'your chat.log'} — click to resume live updates.`;
    banner.hidden = false;
  }
})();

el('resumeSessionBtn')?.addEventListener('click', async () => {
  if (!pendingResume) return;
  const { handle } = pendingResume;
  pendingResume = null;
  el('resumeSessionBanner').hidden = true;
  try {
    const perm = await handle.requestPermission({ mode: 'read' });
    if (perm === 'granted') { await beginWatch(handle); return; }
  } catch (err) {
    console.warn('[chatgator] could not resume watching', err);
  }
  clearSession();
  alert('Couldn\'t resume watching that file — use "New session" to pick it again.');
});

el('resumeSessionDismiss')?.addEventListener('click', () => {
  pendingResume = null;
  el('resumeSessionBanner').hidden = true;
});

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
  const encounterLabel = state.scope === 'all'
    ? 'all encounters combined'
    : (() => {
        const enc = state.encounters.find(e => String(e.id) === String(state.scope));
        return enc ? `encounter starting ${fmtClock(enc.start, true)}` : String(state.scope);
      })();
  // Mention the player/checkpoint scope too whenever it's actually narrowing
  // anything — a file with only one player and no /stats-separated
  // checkpoints (by far the common case) keeps the exact label this always
  // had, rather than a name/checkpoint clause nobody asked to see.
  const cpsForPlayer = state.checkpoints.filter(cp => cp.player === state.playerScope);
  const multiplePlayers = new Set(state.checkpoints.map(cp => cp.player)).size > 1;
  const checkpointLabel = state.checkpointScope === 'all'
    ? null
    : (() => {
        const cp = cpsForPlayer.find(c => String(c.id) === String(state.checkpointScope));
        return cp ? `checkpoint ${cp.playerIndex}` : null;
      })();
  const scopeParts = [];
  if (multiplePlayers) scopeParts.push(state.playerScope == null ? '(name not found)' : state.playerScope);
  if (checkpointLabel) scopeParts.push(checkpointLabel);
  scopeParts.push(encounterLabel);
  const scopeLabel = scopeParts.join(' · ');
  // The events for whatever scope is currently selected — this is what lets
  // someone else's upload of this file reconstruct the full session (encounter
  // switching, sortable tables, everything), not just a flat summary.
  const scopeEvents = state.scope === 'all'
    ? state.scopedEvents
    : (state.encounters.find(e => String(e.id) === String(state.scope))?.events || state.scopedEvents);
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
