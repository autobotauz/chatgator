import { parseLogText } from './parser.js';
import { buildStats, segmentEncounters } from './aggregate.js';
import { renderers } from './ui.js';
import { loadSkillIndex } from './skills.js';
import { isWatchSupported, LogWatcher } from './filewatch.js';
import { SAMPLE_LOG_TEXT } from './sample-data.js';
import { fmtClock } from './charts.js';

const el = (id) => document.getElementById(id);

const state = {
  rawEvents: [],       // merged events from all loaded files
  unmatched: [],
  encounters: [],       // from segmentEncounters(rawEvents)
  scope: 'all',          // 'all' or encounter id
  activeTab: 'overview',
  skillMap: {},
  watcher: null,
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
// File loading (drag/drop, picker, sample)
// ---------------------------------------------------------------------------
const dropzone = el('dropzone');
['dragenter', 'dragover'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault(); dropzone.classList.add('dragover');
}));
['dragleave', 'drop'].forEach(evt => dropzone.addEventListener(evt, (e) => {
  e.preventDefault(); dropzone.classList.remove('dragover');
}));
dropzone.addEventListener('drop', (e) => {
  const files = Array.from(e.dataTransfer.files || []);
  if (files.length) loadFiles(files);
});

el('btnPickFile').addEventListener('click', () => el('fileInput').click());
el('fileInput').addEventListener('change', (e) => {
  const files = Array.from(e.target.files || []);
  if (files.length) loadFiles(files);
});

el('btnSample').addEventListener('click', () => {
  ingestTexts([{ name: 'sample.log', text: SAMPLE_LOG_TEXT }]);
});

el('btnLoadAnother').addEventListener('click', startNewSession);

function startNewSession() {
  stopWatching();
  el('appMain').hidden = true;
  el('dropzoneSection').hidden = false;
  el('btnLoadAnother').hidden = true;
  el('btnDownloadSnapshot').hidden = true;
  el('snapshotPill').hidden = true;
  state.rawEvents = []; state.unmatched = []; state.encounters = []; state.scope = 'all'; state.isSnapshot = false;
}

if (isWatchSupported()) {
  el('btnWatch').hidden = false;
  el('btnWatch').addEventListener('click', startWatch);
  el('btnWatchHeader').hidden = false;
  el('btnWatchHeader').addEventListener('click', () => {
    if (state.watcher) stopWatching(); else startWatch();
  });
}

el('btnDownloadSnapshot').addEventListener('click', downloadSnapshot);

async function loadFiles(files) {
  // A shared snapshot (exported via "Download snapshot") is a .json file —
  // route it to its own importer instead of trying to parse it as a chat.log.
  // Mixing a snapshot with raw logs in one drop isn't a meaningful merge
  // (its event clocks belong to a different parse session), so a snapshot
  // present in the drop wins and anything else in that drop is ignored.
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
  el('btnWatchHeader').hidden = true; // no live file handle behind an imported snapshot
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
  for (const { text } of fileTexts) {
    const { events, unmatched } = parseLogText(text);
    allEvents.push(...events);
    allUnmatched.push(...unmatched);
  }
  allEvents.sort((a, b) => (a.clock ?? 0) - (b.clock ?? 0));
  state.rawEvents = allEvents;
  state.unmatched = allUnmatched;
  state.encounters = segmentEncounters(allEvents);
  state.scope = 'all';
  state.isSnapshot = false;

  el('dropzoneSection').hidden = true;
  el('appMain').hidden = false;
  el('btnLoadAnother').hidden = false;
  el('btnDownloadSnapshot').hidden = false;
  el('snapshotPill').hidden = true;
  if (isWatchSupported()) el('btnWatchHeader').hidden = false;

  buildEncounterSelect();
  renderActiveTab();

  loadSkillIndex().then((map) => { state.skillMap = map; renderActiveTab(); });
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

function currentStats() {
  if (state.scope === 'all') {
    const stats = buildStats(state.rawEvents, null);
    // DPS/HPS/RP-per-hour over the *full* file span (which can include
    // multi-day idle gaps between sessions) is meaningless, so recompute
    // those rates against the sum of actual encounter time instead.
    const activeMs = state.encounters.reduce((a, e) => a + e.durationMs, 0) || stats.meta.durationMs;
    const activeSec = Math.max(1, activeMs / 1000);
    stats.damageOut.dps = +(stats.damageOut.total / activeSec).toFixed(1);
    stats.damageIn.dtps = +(stats.damageIn.total / activeSec).toFixed(1);
    stats.healOut.hps = +(stats.healOut.total / activeSec).toFixed(1);
    stats.realmPoints.perHour = +(stats.realmPoints.total / (activeSec / 3600)).toFixed(0);
    stats.meta.activeDurationMs = activeMs;
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

  el('characterName').textContent = stats.meta.playerName ? `👤 ${stats.meta.playerName}` : '👤 (name not found — look for a /stats block, or it\'s just not in this log)';
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
// Watch mode (File System Access API — Chrome/Edge)
// ---------------------------------------------------------------------------
async function startWatch() {
  try {
    const watcher = new LogWatcher({
      // Full re-parse on every poll via the same path a fresh upload uses —
      // see filewatch.js for why a byte-slice/incremental-merge here would
      // be wrong, not just less efficient.
      onChange: (text) => ingestTexts([{ name: 'live', text }]),
      onError: (err) => console.warn('[chatgator] watch error', err),
    });
    await watcher.pickAndStart();
    const initialText = await watcher.readAll();
    state.watcher = watcher;
    ingestTexts([{ name: 'live', text: initialText }]);
    el('watchStatus').hidden = false;
    el('watchDot').classList.add('live');
    el('watchLabel').textContent = 'Watching live — keep this tab open';
    if (isWatchSupported()) el('btnWatchHeader').textContent = '⏹ Stop watching';
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn('[chatgator] could not start watch mode', err);
  }
}
function stopWatching() {
  if (state.watcher) { state.watcher.stop(); state.watcher = null; }
  el('watchStatus').hidden = true;
  el('watchDot').classList.remove('live');
  if (isWatchSupported()) el('btnWatchHeader').textContent = 'Watch a live log file…';
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
