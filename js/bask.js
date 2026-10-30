// bask.js — the Bask page (bask/index.html): group sessions for up to 8
// players. Each player's browser tails their own chat.log (filewatch.js),
// parses it (parser.js), boils it down to combat numbers (bask-summary.js)
// and shares those through Supabase (bask-net.js). Everyone in the bask —
// players and "just watching" leaders — polls the same rows and renders the
// group view here. A downloaded bask file re-opens the same view offline.

import { parseLogText } from './parser.js';
import { isWatchSupported, LogWatcher } from './filewatch.js';
import { ABILITY_COOLDOWNS } from './ability-cooldowns.js';
import { CL_ABILITY_DATABASE } from './cl-ability-database.js';
import { statTile, barChart, legend, timelineChart, seriesColor, fmtNum, fmtExact } from './charts.js';
import { escHtml, heraldLink } from './ui.js';
import { iconHtml } from './icons.js';
import { GroupSummarizer, TICK_MS } from './bask-summary.js';
import * as net from './bask-net.js';
import { saveHandle, loadHandle, forgetHandle } from './bask-store.js';
import { CLASS_REALM, realmColorForClass } from './realm.js';

const CL_COOLDOWNS = Object.fromEntries(
  Object.entries(CL_ABILITY_DATABASE)
    .filter(([, info]) => info.cooldownSeconds != null)
    .map(([name, info]) => [name, { cooldownSeconds: info.cooldownSeconds }])
);
const ALL_COOLDOWNS = { ...CL_COOLDOWNS, ...ABILITY_COOLDOWNS };

const SYNC_MS = 10000;          // upload + poll cadence
// Data transfer is the free plan's tightest limit, so: totals (the big
// part) go out at most every 30s and only when they changed; otherwise a
// tiny "still here" ping once a minute. A tab nobody is looking at
// refreshes once a minute instead of every 10s.
const TOTALS_EVERY_MS = 30000;
const PING_EVERY_MS = 60000;
const HIDDEN_POLL_MS = 60000;
const VIEWER_KEY = 'chatgator:bask-viewer'; // this browser's spectator id
const SLEEP_MS = 5 * 60000;     // no activity of their own for this long = 💤 sleeping
const STOP_MS = 60 * 60000;     // ...this long = stop reading their log until they pick it again
const PAGE_GONE_MS = 3 * 60000; // no write from their page (heartbeat is 1/min) = page closed
const CURSOR_OVERLAP_MS = 5000;
const SAVE_KEY = 'chatgator:bask';
const RECENT_KEY = 'chatgator:bask-recent'; // baskets this browser joined or watched
const KEYS_KEY = 'chatgator:bask-keys';  // `${code}|${player}` -> this browser's per-join secret

const el = (id) => document.getElementById(id);
const show = (id, on = true) => { el(id).hidden = !on; };
const esc = escHtml;
// Icons live at the site root; this page is one folder down.
const icon = (name) => iconHtml(name).replace('src="img/', 'src="../img/');

// ---------------------------------------------------------------------------
// state
// ---------------------------------------------------------------------------
const S = {
  mode: null,            // 'live' | 'spectate' | 'offline'
  code: null,
  session: null,         // { code, created_at, expires_at }
  player: null,
  members: new Map(),    // player -> { player, joined_at, updated_at, totals }
  order: [],             // players in join order (drives colors)
  ticks: new Map(),      // player -> Map(bucketStartMs -> data)
  memberCursor: null, tickCursor: null,
  openedAt: Date.now(),
  exportedAt: null,      // offline: the moment the file was saved
  feed: [], feedKeys: new Set(),
  summarizer: null, watcher: null, parseState: null,
  lastTotalsSent: 0, lastSeenSent: 0, lastPoll: 0, watching: null,
  lastSent: 0, lastChecked: null, lastNewLines: null, syncError: null,
  syncTimer: null, clockTimer: null,
  tab: 'overview', metric: 'do',
  memberKey: null,       // secret proving we're S.player (leader actions, leaving)
  banned: [],            // names the leader banned
  lastLeader: undefined,
  booted: false,
  handle: null,          // the chat.log being read
  resume: null,          // { player, handle } while a refreshed page waits to resume sharing
  loopGen: 0,
};

const now = () => (S.mode === 'offline' ? S.exportedAt : Date.now());

// ---------------------------------------------------------------------------
// defensive readers for rows anyone holding the code could have written
// ---------------------------------------------------------------------------
const num = (x) => (Number.isFinite(+x) ? +x : 0);
const obj = (x) => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
const str = (x, n = 60) => String(x ?? '').slice(0, n);
function cleanAmt(b) {
  b = obj(b);
  const by = {};
  for (const [k, v] of Object.entries(obj(b.by))) if (Array.isArray(v)) by[str(k)] = [num(v[0]), num(v[1]), num(v[2])];
  return { total: num(b.total), hits: num(b.hits), crits: num(b.crits), by };
}
function cleanCount(c) {
  c = obj(c);
  const by = {};
  for (const [k, v] of Object.entries(obj(c.by))) by[str(k)] = num(v);
  return { total: num(c.total), by };
}
function cleanTotals(t) {
  t = obj(t);
  const pets = {};
  for (const [k, v] of Object.entries(obj(t.pets))) { const p = obj(v); pets[str(k)] = { dmg: num(p.dmg), hits: num(p.hits), crits: num(p.crits), heal: num(p.heal) }; }
  const list = (a, f) => (Array.isArray(a) ? a.slice(-200).map(f) : []);
  const cooldowns = {};
  for (const [k, v] of Object.entries(obj(t.cooldowns))) if (Array.isArray(v)) cooldowns[str(k, 80)] = [num(v[0]), v[1] == null ? null : num(v[1])];
  return {
    since: num(t.since) || null, last: num(t.last) || null,
    dmgOut: cleanAmt(t.dmgOut), dmgIn: cleanAmt(t.dmgIn), healOut: cleanAmt(t.healOut), healIn: cleanAmt(t.healIn),
    pets, resists: cleanCount(t.resists), interrupts: cleanCount(t.interrupts),
    deathblows: list(t.deathblows, (d) => ({ at: num(obj(d).at), victim: str(obj(d).victim), zone: obj(d).zone ? str(obj(d).zone) : null })),
    deaths: list(t.deaths, (d) => ({ at: num(obj(d).at), killer: obj(d).killer ? str(obj(d).killer) : null })),
    cooldowns,
    lastActive: num(t.lastActive) || null,
    paused: num(t.paused) || null,
    cls: t.cls && CLASS_REALM[t.cls.name] !== undefined ? String(t.cls.name) : null,
  };
}
const cleanTick = (d) => { d = obj(d); return { do: num(d.do), di: num(d.di), ho: num(d.ho), hi: num(d.hi), pd: num(d.pd), rs: num(d.rs), ir: num(d.ir), db: num(d.db), dd: num(d.dd) }; };

// ---------------------------------------------------------------------------
// merging fetched rows
// ---------------------------------------------------------------------------
function mergeMembers(rows) {
  for (const r of rows || []) {
    const player = str(r.player, 40);
    if (!player) continue;
    const isNew = !S.members.has(player);
    const wasLeft = !isNew && !!S.members.get(player).left_at;
    S.members.set(player, { player, joined_at: r.joined_at, updated_at: r.updated_at, seen_at: r.seen_at || r.updated_at, left_at: r.left_at || null, totals: cleanTotals(r.totals) });
    if (r.left_at && !wasLeft) pushFeed(`leftvol:${player}:${r.left_at}`, Date.parse(r.left_at), `👋 <strong>${esc(player)}</strong> left the bask`);
    if (isNew || (wasLeft && !r.left_at)) {
      if (isNew) S.order.push(player);
      S.order.sort((a, b) => Date.parse(S.members.get(a).joined_at) - Date.parse(S.members.get(b).joined_at));
      pushFeed(`join:${player}:${r.joined_at}`, Date.parse(r.joined_at), `🐊 <strong>${esc(player)}</strong> slid into the bask`);
    }
    const t = S.members.get(player).totals;
    if (t.paused) pushFeed(`stop:${player}:${t.paused}`, t.paused, `⚠️ <strong>${esc(player)}</strong> was idle for an hour; their chat.log needs picking again`);
    for (const d of t.deathblows) pushFeed(`db:${player}:${d.at}:${d.victim}`, d.at, `⚔️ <strong>${esc(player)}</strong> took down ${heraldLink(d.victim)}`);
    for (const d of t.deaths) pushFeed(`dd:${player}:${d.at}`, d.at, `💀 <strong>${esc(player)}</strong> died${d.killer ? ` to ${heraldLink(d.killer)}` : ''}`);
    if (r.updated_at && (!S.memberCursor || r.updated_at > S.memberCursor)) S.memberCursor = r.updated_at;
  }
}

function mergeTicks(rows) {
  for (const r of rows || []) {
    const player = str(r.player, 40);
    const t = Date.parse(r.t);
    if (!player || !Number.isFinite(t)) continue;
    if (!S.ticks.has(player)) S.ticks.set(player, new Map());
    S.ticks.get(player).set(t, cleanTick(r.data));
    if (r.updated_at && (!S.tickCursor || r.updated_at > S.tickCursor)) S.tickCursor = r.updated_at;
  }
}

// Only announce things that happened around/after the page was opened (or,
// for a saved file, the last few minutes of it) — not a flood of history.
function pushFeed(key, at, html) {
  if (S.feedKeys.has(key)) return;
  S.feedKeys.add(key);
  const horizon = S.mode === 'offline' ? S.exportedAt - 5 * 60000 : S.openedAt - 2 * 60000;
  if (!Number.isFinite(at) || at < horizon) return;
  S.feed.push({ at, html });
  S.feed.sort((a, b) => b.at - a.at);
  S.feed.length = Math.min(S.feed.length, 6);
}

const cursorMinus = (iso) => (iso ? new Date(Date.parse(iso) - CURSOR_OVERLAP_MS).toISOString() : null);

// ---------------------------------------------------------------------------
// lobby / join
// ---------------------------------------------------------------------------
function setError(id, msg) { const e = el(id); e.textContent = msg || ''; e.hidden = !msg; }

function inviteLink(code) { return `${location.origin}${location.pathname}?code=${code}`; }

function fmtExpires(iso) {
  const ms = Date.parse(iso) - Date.now();
  if (!Number.isFinite(ms)) return '';
  if (ms <= 0) return 'expired';
  const h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000);
  return `closes in ${h ? `${h}h ` : ''}${m}m if idle`;
}

async function goJoinStep(code, { fresh = null } = {}) {
  setError('lobbyError', '');
  let session = fresh;
  if (!session) {
    try { session = await net.getSession(code); }
    catch (err) { setError('lobbyError', `Couldn't reach the bask server: ${err.message}`); return; }
  }
  if (!session) { forgetRecent(code); setError('lobbyError', `No bask with code ${code} — it may have expired (a bask closes after 12 hours with no activity).`); return; }
  S.code = session.code; S.session = session;
  history.replaceState(null, '', `?code=${S.code}`);
  el('joinCodeShow').textContent = S.code;
  el('joinExpires').textContent = fmtExpires(session.expires_at);
  const saved = loadSaved();
  const recent = loadRecent().find((r) => r.code === S.code);
  el('playerName').value = (recent && recent.player) || (saved && saved.player) || '';
  show('watchUnsupported', !isWatchSupported());
  el('btnPickLog').disabled = !isWatchSupported();
  show('lobby', false); show('joinStep', true);
  el('playerName').focus();
}

function loadKeys() { try { return JSON.parse(localStorage.getItem(KEYS_KEY) || '{}') || {}; } catch { return {}; } }
// Reuse the same secret for the same name in the same bask (page refresh),
// so a leader who reloads is still recognized as themselves.
function memberKeyFor(code, player) {
  const keys = loadKeys();
  const id = `${code}|${player.toLowerCase()}`;
  let entry = keys[id];
  if (!entry || !entry.key) entry = { key: net.newMemberKey() };
  entry.at = Date.now();
  keys[id] = entry;
  // Long-dead baskets: drop their secrets after a few days.
  for (const [k, v] of Object.entries(keys)) if (!v || Date.now() - v.at > 4 * 86400000) delete keys[k];
  try { localStorage.setItem(KEYS_KEY, JSON.stringify(keys)); } catch { /* ignore */ }
  return entry.key;
}

// ---- recent baskets (this browser only) ------------------------------------
function loadRecent() {
  try { const v = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch { return []; }
}
function writeRecent(list) { try { localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 8))); } catch { /* ignore */ } }
function rememberRecent(code, fields = {}) {
  const list = loadRecent();
  const prev = list.find((r) => r.code === code) || { code };
  writeRecent([{ ...prev, ...fields, code, at: Date.now() }, ...list.filter((r) => r.code !== code)]);
}
function forgetRecent(code) { writeRecent(loadRecent().filter((r) => r.code !== code)); }

// Lobby list: only baskets the server still has (anything expired is dropped
// from the list for good).
async function renderRecent() {
  const list = loadRecent();
  const box = el('recentBox');
  if (!list.length || !net.isConfigured()) { box.hidden = true; return; }
  let alive;
  try { alive = await net.fetchSessions(list.map((r) => r.code)); } catch { box.hidden = true; return; }
  const byCode = new Map(alive.map((x) => [x.code, x]));
  const live = list.filter((r) => byCode.has(r.code));
  if (live.length !== list.length) writeRecent(live);
  if (!live.length) { box.hidden = true; return; }
  el('recentList').innerHTML = live.map((r) => {
    const sess = byCode.get(r.code);
    const who = r.player ? `as <strong>${esc(r.player)}</strong>` : 'watching';
    return `<li><a class="recent-code" href="?code=${encodeURIComponent(r.code)}">${esc(r.code)}</a>
      <span class="sub">${who} · ${esc(fmtExpires(sess.expires_at))}${sess.leader ? ` · 👑 ${esc(sess.leader)}` : ''}</span></li>`;
  }).join('');
  box.hidden = false;
}

function hasMemberKey(code, player) { return !!loadKeys()[`${code}|${player.toLowerCase()}`]; }

function loadSaved() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch { return null; } }
function save(v) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(v)); } catch { /* ignore */ } }

async function copy(text, btn) {
  try { await navigator.clipboard.writeText(text); flash(btn, 'Copied!'); }
  catch { prompt('Copy this:', text); }
}
function flash(btn, text) {
  if (!btn) return;
  const old = btn.textContent; btn.textContent = text;
  setTimeout(() => { btn.textContent = old; }, 1400);
}

// ---------------------------------------------------------------------------
// live: tail the log and share
// ---------------------------------------------------------------------------
async function startLive(handle, player) {
  const since = Date.now();
  const watcher = new LogWatcher({
    pollMs: 2000,
    onChange: (text, { reset }) => {
      if (!S.summarizer) return;
      const r = reset ? parseLogText(text) : parseLogText(text, S.parseState);
      S.parseState = r.state;
      S.summarizer.ingest(r.events);
      S.lastNewLines = Date.now();
    },
    onPoll: () => { S.lastChecked = Date.now(); },
    onError: (err) => { S.syncError = `Can't read your log file: ${err.message}`; renderBar(); },
  });
  await watcher.startWithHandle(handle);
  const text = await watcher.readAll();
  const r = parseLogText(text);
  const summarizer = new GroupSummarizer({ player, cooldowns: ALL_COOLDOWNS, since });
  summarizer.primePets(r.events);

  // Rejoining (page refresh, came back later): carry on from what the
  // server already has for this name instead of starting over at zero.
  const memberKey = memberKeyFor(S.code, player);
  try {
    const existing = await net.fetchMember(S.code, player);
    if (existing) summarizer.restore(existing.totals);
    summarizer.markActive(); // picking the log = here now (also clears an hour-idle stop)
    await net.upsertMember(S.code, player, summarizer.snapshot(), memberKey);
  } catch (err) {
    watcher.stop();
    throw err;
  }
  S.mode = 'live'; S.player = player; S.memberKey = memberKey;
  S.parseState = r.state;
  S.summarizer = summarizer;
  S.watcher = watcher;
  S.handle = handle;
  S.lastSent = S.lastTotalsSent = S.lastSeenSent = Date.now(); summarizer.changed = false;
  S.resume = null; S.booted = false;
  save({ code: S.code, player, mode: 'live' });
  rememberRecent(S.code, { player });
  saveHandle(S.code, handle);
  enterBask();
}

// An hour with nothing of their own in the log: stop reading it. The player
// stays in the bask (their page keeps checking in) and everyone sees their
// card asking them to pick their chat.log again.
function stopReadingIfIdle() {
  const sum = S.summarizer;
  if (!sum || !S.watcher || sum.paused) return;
  if (Date.now() - (sum.lastActive || sum.since) < STOP_MS) return;
  S.watcher.stop(); S.watcher = null;
  sum.paused = Date.now();
  sum.changed = true;
  S.resume = { player: S.player, handle: S.handle };
  showResume(`You've been idle for an hour, so Bask stopped reading your chat.log. Pick it again to keep sharing as <strong>${esc(S.player)}</strong>.`);
  show('watchStatus', false);
}

async function upload() {
  const sum = S.summarizer;
  if (!sum) return;
  stopReadingIfIdle();
  const ticks = sum.takeDirtyTicks();
  try {
    const t = Date.now();
    if (sum.changed && t - S.lastTotalsSent >= TOTALS_EVERY_MS) {
      sum.changed = false;
      if (!(await net.updateMember(S.code, S.player, sum.snapshot()))) { sum.requeueTicks(ticks); onBooted(); return; }
      S.lastTotalsSent = S.lastSeenSent = S.lastSent = t;
    } else if (t - S.lastSeenSent >= PING_EVERY_MS) {
      if (!(await net.ping(S.code, S.player, S.memberKey))) { sum.requeueTicks(ticks); onBooted(); return; }
      S.lastSeenSent = t;
    }
    if (ticks.length) { await net.upsertTicks(S.code, S.player, ticks); S.lastSent = t; }
    S.syncError = null;
  } catch (err) {
    sum.changed = true;
    sum.requeueTicks(ticks);
    S.syncError = /expired|does not exist/i.test(err.message) ? 'This bask has expired — download it now if you want to keep it.' : `Couldn't send your numbers: ${err.message}`;
  }
}

// Someone booted (or banned) disappears from the server; drop them here too.
// `names` comes from the same server snapshot as the changed rows, so a
// player who joins in between is never mistaken for one who left.
function pruneMembers(names, bannedName = null) {
  const present = new Set(names);
  for (const p of [...S.order]) {
    if (present.has(p)) continue;
    if (S.mode === 'live' && p === S.player) { onBooted(); continue; }
    S.members.delete(p); S.ticks.delete(p);
    S.order = S.order.filter((x) => x !== p);
    pushFeed(`left:${p}:${Date.now()}`, Date.now(), p === bannedName
      ? `⛔ <strong>${esc(p)}</strong> was banned from the bask`
      : `🥾 <strong>${esc(p)}</strong> was booted from the bask`);
  }
}

function viewerId() {
  try {
    let id = localStorage.getItem(VIEWER_KEY);
    if (!/^[0-9a-f]{32}$/.test(id || '')) { id = net.newMemberKey().slice(0, 32); localStorage.setItem(VIEWER_KEY, id); }
    return id;
  } catch { return null; }
}

async function poll() {
  try {
    let res, rounds = 0;
    do {
      res = await net.poll(S.code, cursorMinus(S.memberCursor), cursorMinus(S.tickCursor), S.mode === 'spectate' && !S.resume ? viewerId() : null); // a player waiting to resume isn't a spectator
      if (!res || !res.session) { S.syncError = 'This bask has expired — download it now if you want to keep it.'; return; }
      mergeMembers(res.members);
      mergeTicks(res.ticks);
      if (rounds === 0) {
        const presence = Array.isArray(res.presence) ? res.presence : [];
        pruneMembers(presence.map((x) => x.player));
        if (S.booted) return;
        for (const x of presence) {
          const m = S.members.get(x.player);
          if (m) { m.seen_at = x.seen_at; m.left_at = x.left_at || null; }
        }
        S.banned = Array.isArray(res.banned) ? res.banned.map((n) => str(n, 40)) : [];
        S.watching = Number.isFinite(+res.watching) ? +res.watching : null;
        const s = res.session;
        S.session = s;
        if (S.lastLeader !== undefined && s.leader && s.leader !== S.lastLeader) {
          pushFeed(`leader:${s.leader}:${Date.now()}`, Date.now(), `👑 <strong>${esc(s.leader)}</strong> is now the bask leader`);
        }
        S.lastLeader = s.leader || null;
      }
      // A late joiner catching up on a long bask: keep paging.
    } while (Array.isArray(res.ticks) && res.ticks.length >= net.POLL_TICK_LIMIT && ++rounds < 10);
    S.lastPoll = Date.now();
    if (S.mode === 'spectate') S.syncError = null;
  } catch (err) {
    S.syncError = `Couldn't fetch the group's numbers: ${err.message}`;
  }
}

function onBooted() {
  if (S.booted) return;
  S.booted = true;
  if (S.watcher) S.watcher.stop();
  S.watcher = null; S.summarizer = null;
  clearTimeout(S.syncTimer);
  S.mode = 'spectate'; // keep showing the group, just stop sharing
  show('watchStatus', false);
  S.syncError = null;
  save({ code: S.code, mode: 'spectate' });
  forgetHandle(S.code);
  renderAll();
  S.syncTimer = setTimeout(syncLoop, SYNC_MS);
}

// Only the newest loop keeps running (resuming sharing restarts it while a
// poll from the old one may still be in flight).
async function syncLoop() {
  clearTimeout(S.syncTimer);
  const gen = ++S.loopGen;
  if (S.mode === 'live') await upload();
  const due = !document.hidden || Date.now() - S.lastPoll >= HIDDEN_POLL_MS;
  if ((S.mode === 'live' || S.mode === 'spectate') && due) await poll();
  if (gen !== S.loopGen) return;
  renderAll();
  if (S.mode === 'live' || S.mode === 'spectate') S.syncTimer = setTimeout(syncLoop, SYNC_MS);
}

function enterBask() {
  show('lobby', false); show('joinStep', false); show('baskMain', true);
  show('btnDownload', true); show('btnLeave', S.mode !== 'offline');
  show('watchStatus', S.mode === 'live');
  show('barOffline', S.mode === 'offline');
  el('barCode').textContent = S.code || '—';
  el('btnBarCopy').hidden = S.mode === 'offline';
  clearInterval(S.clockTimer);
  S.clockTimer = setInterval(() => {
    renderBar();
    if (S.tab === 'cooldowns' && S.mode !== 'offline') renderCooldowns(el('panel-cooldowns'));
  }, 1000);
  syncLoop();
}

async function leave() {
  if (S.watcher) S.watcher.stop();
  clearTimeout(S.syncTimer); clearInterval(S.clockTimer);
  try { localStorage.removeItem(SAVE_KEY); } catch { /* ignore */ }
  if (S.code) await forgetHandle(S.code);
  location.href = location.pathname;
}

// ---------------------------------------------------------------------------
// coming back after a refresh
// ---------------------------------------------------------------------------
// Straight back into the bask: watching resumes by itself; sharing resumes by
// itself too when Chrome still allows reading the file, otherwise one click
// on "Resume sharing" (browsers require a click before a reloaded page may
// read a file again).
async function resumeSaved(saved) {
  let session = null;
  try { session = await net.getSession(saved.code); } catch { return false; }
  if (!session) { try { localStorage.removeItem(SAVE_KEY); } catch { /* ignore */ } forgetHandle(saved.code); return false; }
  S.code = session.code; S.session = session;
  if (saved.mode === 'live' && saved.player && isWatchSupported()) {
    const handle = await loadHandle(S.code);
    S.resume = { player: saved.player, handle };
    if (handle && typeof handle.queryPermission === 'function') {
      try {
        if (await handle.queryPermission({ mode: 'read' }) === 'granted') {
          await startLive(handle, saved.player);
          return true;
        }
      } catch { /* fall through to the button */ }
    }
    S.mode = 'spectate';
    showResume();
    enterBask();
    return true;
  }
  S.mode = 'spectate';
  enterBask();
  return true;
}

function showResume(msg) {
  if (!S.resume) { show('resumeBanner', false); return; }
  el('resumeText').innerHTML = msg || `You're still in this bask as <strong>${esc(S.resume.player)}</strong>, but your numbers aren't being shared since the page reloaded.`;
  el('btnResume').textContent = S.resume.handle ? '▶ Resume sharing' : '▶ Pick my chat.log to resume';
  show('resumeBanner', true);
}

async function resumeSharing() {
  const r = S.resume;
  if (!r) return;
  el('btnResume').disabled = true;
  try {
    let handle = r.handle;
    if (handle && typeof handle.requestPermission === 'function') {
      if (await handle.requestPermission({ mode: 'read' }) !== 'granted') handle = null;
    }
    if (!handle) {
      try { [handle] = await window.showOpenFilePicker({ types: [{ description: 'DAoC chat log', accept: { 'text/plain': ['.log', '.txt'] } }] }); }
      catch { return; } // cancelled
    }
    await startLive(handle, r.player);
    show('resumeBanner', false);
  } catch (err) {
    showResume(`Couldn't resume sharing as <strong>${esc(r.player)}</strong>: ${esc(err.message || String(err))}`);
  } finally {
    el('btnResume').disabled = false;
  }
}

// ---------------------------------------------------------------------------
// download / open a saved bask
// ---------------------------------------------------------------------------
function exportBask() {
  const ticks = [];
  for (const [player, m] of S.ticks) for (const [t, data] of m) ticks.push({ player, t: new Date(t).toISOString(), data });
  ticks.sort((a, b) => a.t.localeCompare(b.t));
  const doc = {
    tool: 'chatgator-bask', format: 1,
    code: S.code,
    createdAt: S.session?.created_at ?? null,
    expiresAt: S.session?.expires_at ?? null,
    exportedAt: new Date(now()).toISOString(),
    members: S.order.map((p) => { const m = S.members.get(p); return { player: p, joined_at: m.joined_at, updated_at: m.updated_at, totals: m.totals }; }),
    ticks,
  };
  const blob = new Blob([JSON.stringify(doc)], { type: 'application/json' });
  const a = document.createElement('a');
  const d = new Date();
  const p2 = (n) => String(n).padStart(2, '0');
  a.href = URL.createObjectURL(blob);
  a.download = `bask-${S.code || 'saved'}-${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}-${p2(d.getHours())}${p2(d.getMinutes())}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

async function openSavedFile(file) {
  setError('lobbyError', '');
  let doc;
  try { doc = JSON.parse(await file.text()); } catch { setError('lobbyError', "That file isn't a saved bask (couldn't read it as JSON)."); return; }
  if (!doc || doc.tool !== 'chatgator-bask' || !Array.isArray(doc.members)) {
    setError('lobbyError', doc && doc.tool === 'chatgator'
      ? "That's a single-player Chat Gator session — open it on the main Chat Gator page instead."
      : "That file isn't a saved bask.");
    return;
  }
  S.mode = 'offline';
  S.code = str(doc.code, 12) || null;
  S.session = { code: S.code, created_at: doc.createdAt, expires_at: doc.expiresAt };
  S.exportedAt = Date.parse(doc.exportedAt) || Date.now();
  mergeMembers(doc.members);
  mergeTicks(doc.ticks);
  enterBask();
}

// 'left' | 'stopped' (hour idle, log no longer read) | 'sleeping' (5 min idle,
// or their page closed) | 'active'
function memberStatus(p) {
  const m = S.members.get(p);
  if (!m) return 'active';
  if (m.left_at) return 'left';
  const t = m.totals;
  if (t.paused) return 'stopped';
  const at = now();
  if (S.mode !== 'offline' && at - Date.parse(m.seen_at || m.updated_at) > PAGE_GONE_MS) return 'sleeping';
  const lastActive = t.lastActive || t.last || t.since || Date.parse(m.joined_at);
  return at - lastActive > SLEEP_MS ? 'sleeping' : 'active';
}

const isLeader = () => S.mode === 'live' && !S.booted && !!S.player && S.session?.leader === S.player;
const isActive = (p) => !S.members.get(p)?.left_at;

// ---------------------------------------------------------------------------
// derived group numbers
// ---------------------------------------------------------------------------
const playerColor = (p) => seriesColor(Math.max(0, S.order.indexOf(p)));
const T = (p) => S.members.get(p).totals;
const norm = (s) => String(s || '').trim().toLowerCase();

function memberKeyMap() {
  const m = new Map();
  for (const p of S.order) m.set(norm(p), p);
  return m;
}

function activeSeconds(t) {
  if (!t.since || !t.last) return 0;
  return Math.max(1, (t.last - t.since) / 1000);
}

// Healing between members comes from the healer's own log ("You heal X");
// the receiver's "X heals you" for the same heal is skipped so nothing is
// counted twice. Heals from people outside the bask only exist on the
// receiver's side, so those come from healIn.
function healingMatrix() {
  const keys = memberKeyMap();
  const cell = new Map();        // `${healer}\0${target}` -> amount
  const outside = new Map();     // healer -> amount healed on non-members
  const fromOutside = new Map(); // receiver -> [[healer, amount]]
  for (const h of S.order) {
    for (const [target, v] of Object.entries(T(h).healOut.by)) {
      const tk = norm(target);
      const member = (tk === 'yourself' || tk === 'you') ? h : keys.get(tk);
      if (member) cell.set(`${h}\u0000${member}`, (cell.get(`${h}\u0000${member}`) || 0) + v[0]);
      else outside.set(h, (outside.get(h) || 0) + v[0]);
    }
  }
  for (const r of S.order) {
    const list = [];
    for (const [healer, v] of Object.entries(T(r).healIn.by)) {
      if (keys.has(norm(healer)) || norm(healer) === norm(r)) continue;
      list.push([healer, v[0]]);
    }
    fromOutside.set(r, list.sort((a, b) => b[1] - a[1]));
  }
  const received = new Map(S.order.map((r) => [r,
    S.order.reduce((a, h) => a + (cell.get(`${h}\u0000${r}`) || 0), 0) + fromOutside.get(r).reduce((a, x) => a + x[1], 0)]));
  return { cell, outside, fromOutside, received };
}

function tickSeries(metric, players = S.order) {
  return players.map((p) => {
    const m = S.ticks.get(p) || new Map();
    const raw = [];
    for (const [t, d] of m) if (d[metric]) raw.push({ clock: t + TICK_MS / 2, amount: d[metric] });
    return { name: p, color: playerColor(p), raw };
  });
}
function tickDomain() {
  let lo = Infinity, hi = -Infinity;
  for (const m of S.ticks.values()) for (const t of m.keys()) { if (t < lo) lo = t; if (t + TICK_MS > hi) hi = t + TICK_MS; }
  return Number.isFinite(lo) ? [lo, hi] : null;
}
const fmtTime = (t) => new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const fmtTimeSec = (t) => new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

function killMarkers() {
  const out = [];
  for (const p of S.order) {
    for (const d of T(p).deathblows) out.push({ t: d.at, color: 'var(--series-7)', label: 'Deathblow' });
    for (const d of T(p).deaths) out.push({ t: d.at, color: 'var(--status-critical)', label: 'Death' });
  }
  return out;
}

// ---------------------------------------------------------------------------
// rendering helpers
// ---------------------------------------------------------------------------
function section(parent, title, note) {
  const s = document.createElement('div'); s.className = 'section';
  if (title) { const h = document.createElement('h3'); h.textContent = title; s.appendChild(h); }
  if (note) { const p = document.createElement('p'); p.className = 'sub section-note'; p.textContent = note; s.appendChild(p); }
  parent.appendChild(s); return s;
}
function grid(parent, cols) { const g = document.createElement('div'); g.className = `grid cols-${cols}`; parent.appendChild(g); return g; }
function card(parent, titleHtml) {
  const c = document.createElement('div'); c.className = 'card';
  if (titleHtml) { const h = document.createElement('h4'); h.className = 'card-title'; h.innerHTML = titleHtml; c.appendChild(h); }
  parent.appendChild(c); return c;
}
function empty(parent, text) { const d = document.createElement('div'); d.className = 'empty-state'; d.textContent = text; parent.appendChild(d); }
const swatch = (p) => `<span class="swatch-dot" style="background:${playerColor(p)}"></span>`;
// "Cleric" in its realm's color (red Albion, blue Midgard, green Hibernia).
function classTag(p) {
  const c = S.members.get(p)?.totals.cls;
  if (!c) return '';
  const rgb = realmColorForClass(c);
  return ` <span class="class-tag"${rgb ? ` style="--realm:${rgb}"` : ''}>${esc(c)}</span>`;
}
const nameCell = (p) => `${swatch(p)}${esc(p)}${classTag(p)}`;
const amtItems = (by) => Object.entries(by).map(([label, v]) => ({ label, value: v[0], hits: v[1], crits: v[2] })).filter((x) => x.value > 0);
const countItems = (by) => Object.entries(by).map(([label, v]) => ({ label, value: v })).filter((x) => x.value > 0);
const total = (f) => S.order.reduce((a, p) => a + f(T(p)), 0);
const playerItems = (f) => S.order.map((p) => ({ label: p, ...f(T(p), p) }));
const byPlayerColor = (i) => playerColor(i.label);

function table(parent, head, rows, { numericFrom = 1 } = {}) {
  const wrap = document.createElement('div'); wrap.className = 'data-table-wrap card';
  wrap.innerHTML = `<table class="data-table"><thead><tr>${head.map((h, i) => `<th${i >= numericFrom ? ' class="num"' : ''}>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td${i >= numericFrom ? ' class="num"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  parent.appendChild(wrap); return wrap;
}

function noMembers(container) {
  container.innerHTML = '';
  const c = card(container);
  c.innerHTML = S.mode === 'offline'
    ? '<div class="empty-state">This saved bask has no players in it.</div>'
    : `<div class="empty-state">Nobody's sharing yet. Send your group the invite link — each player picks their own chat.log and their numbers show up here within a few seconds.<div class="big-code">${esc(S.code || '')}</div></div>`;
}

// ---------------------------------------------------------------------------
// top bar, roster, feed
// ---------------------------------------------------------------------------
function ago(ms) {
  if (!ms) return '—';
  const s = Math.max(0, Math.round((Date.now() - ms) / 1000));
  return s < 60 ? `${s}s ago` : `${Math.floor(s / 60)}m ago`;
}

function renderBar() {
  const w = el('barWatching');
  w.hidden = S.mode === 'offline' || S.watching == null;
  if (!w.hidden) w.textContent = `👀 ${S.watching} watching`;
  if (S.mode === 'offline') el('barExpires').textContent = `saved ${new Date(S.exportedAt).toLocaleString()}`;
  else if (S.session) el('barExpires').textContent = fmtExpires(S.session.expires_at);
  const me = el('barMe');
  if (S.booted) {
    me.innerHTML = `<span class="bask-error">🥾 You were booted from this bask, so your numbers aren't being shared.</span> <a class="btn" href="?code=${encodeURIComponent(S.code)}">Rejoin</a>`;
    return;
  }
  if (S.syncError) { me.innerHTML = `<span class="bask-error">⚠️ ${esc(S.syncError)}</span>`; return; }
  if (S.mode === 'live' && S.summarizer?.paused) {
    me.innerHTML = `${isLeader() ? '👑 You lead this bask · ' : ''}<span class="bask-warn">⚠️ Not reading your chat.log (idle an hour)</span>`;
  } else if (S.mode === 'live') {
    me.innerHTML = `${isLeader() ? '👑 You lead this bask · ' : ''}Sharing as <strong>${esc(S.player)}</strong> · log checked ${ago(S.lastChecked)} · new lines ${ago(S.lastNewLines)} · sent ${ago(S.lastSent)}`;
  } else if (S.mode === 'spectate') {
    me.textContent = `Just watching · updates every 10 seconds${S.session?.leader ? ` · 👑 ${S.session.leader} leads` : ''}`;
  } else {
    me.textContent = `${S.order.length} player${S.order.length === 1 ? '' : 's'} in this saved bask`;
  }
}

function renderRoster() {
  const open = 8 - S.order.filter(isActive).length;
  const leader = S.session?.leader;
  el('roster').innerHTML = S.order.map((p) => {
    const m = S.members.get(p);
    const st = memberStatus(p);
    const left = st === 'left';
    const t = m.totals;
    const title = {
      left: 'Left the bask. Their numbers so far stay in the group view.',
      stopped: 'Idle for an hour, so their page stopped reading their chat.log. They need to pick it again to keep sharing.',
      sleeping: 'Nothing new from this player for 5+ minutes: not playing, or their page is closed.',
      active: 'Sharing live',
    }[st];
    return `<li class="roster-chip st-${st}" title="${title}">
      <span class="roster-dot" style="background:${playerColor(p)}"></span>
      <span class="roster-name">${p === leader && !left && S.mode !== 'offline' ? '<span title="Bask leader">👑</span> ' : ''}${esc(p)}${classTag(p)}${p === S.player ? ' <span class="pill">you</span>' : ''}</span>
      <span class="roster-stats">⚔ ${fmtNum(t.dmgOut.total)} · ✚ ${fmtNum(t.healOut.total)}</span>
      ${{ left: '<span class="roster-quiet">left</span>',
          sleeping: '<span class="roster-zzz" aria-label="sleeping">💤 Z<span>z</span>Z<span>z</span>Z<span>z</span></span>',
          stopped: `<span class="roster-stopped">⚠️ ${p === S.player ? 'pick your chat.log again' : 'needs to reselect chat.log'}</span>`,
          active: '' }[st]}
      ${isLeader() && p !== S.player ? `<span class="roster-actions">
        <button class="roster-act" data-boot="${esc(p)}" title="Boot ${esc(p)}: removes them and their numbers from the bask. They can join again.">🥾</button>
        <button class="roster-act" data-ban="${esc(p)}" title="Ban ${esc(p)}: removes them and keeps that name out of this bask.">⛔</button>
      </span>` : ''}
    </li>`;
  }).join('') + (S.mode !== 'offline' && open > 0 ? `<li class="roster-chip empty-slot">${open} open spot${open === 1 ? '' : 's'}</li>` : '');
  renderBanned();
  el('feed').innerHTML = S.feed.map((f) => `<li><span class="feed-time">${fmtTimeSec(f.at)}</span> ${f.html}</li>`).join('');
}

// Who's banned, and (for the leader) unban / ban-by-name.
function renderBanned() {
  const box = el('bannedBox');
  const lead = isLeader();
  if (S.mode === 'offline' || (!S.banned.length && !lead)) { box.hidden = true; return; }
  box.hidden = false;
  el('bannedCount').textContent = S.banned.length ? `(${S.banned.length})` : '';
  el('bannedList').innerHTML = S.banned.length
    ? S.banned.map((n) => `<li><span>${esc(n)}</span>${lead ? ` <button class="btn btn-small" data-unban="${esc(n)}">Unban</button>` : ''}</li>`).join('')
    : '<li class="sub">Nobody is banned.</li>';
  show('banForm', lead);
}

// ---------------------------------------------------------------------------
// tabs
// ---------------------------------------------------------------------------
const countFmt = (v) => String(Math.round(v));

function renderOverview(c) {
  c.innerHTML = '';
  if (!S.order.length) return noMembers(c);
  const hm = healingMatrix();
  const g = grid(section(c), 4);
  statTile(g, { label: 'Damage out', value: fmtNum(total((t) => t.dmgOut.total)), colorVar: '--series-1' });
  statTile(g, { label: 'Damage in', value: fmtNum(total((t) => t.dmgIn.total)), colorVar: '--series-8' });
  statTile(g, { label: 'Heals out', value: fmtNum(total((t) => t.healOut.total)), colorVar: '--series-3' });
  statTile(g, { label: 'Heals in', value: fmtNum([...hm.received.values()].reduce((a, b) => a + b, 0)), colorVar: '--series-6', title: 'Healing the group received. Heals between members are counted once, from the healer’s side.' });
  const g2 = grid(section(c), 4);
  statTile(g2, { label: 'Resisted', value: fmtExact(total((t) => t.resists.total)), sub: 'spells resisted by targets', colorVar: '--series-4' });
  statTile(g2, { label: 'Interrupted', value: fmtExact(total((t) => t.interrupts.total)), sub: 'casts interrupted', colorVar: '--series-2' });
  statTile(g2, { label: 'Deathblows', value: fmtExact(total((t) => t.deathblows.length)), colorVar: '--series-7' });
  statTile(g2, { label: 'Deaths', value: fmtExact(total((t) => t.deaths.length)) });

  const dom = tickDomain();
  const all = (metric) => tickSeries(metric).flatMap((s) => s.raw);
  const c1 = card(section(c, 'Group activity over time', 'Drag across a chart to zoom into one fight; double-click to zoom back out.'));
  legend(c1, [
    { color: 'var(--series-1)', label: 'Damage out' }, { color: 'var(--series-8)', label: 'Damage in' },
    { color: 'var(--series-3)', label: 'Heals out' }, { color: 'var(--series-6)', label: 'Heals in' },
    { color: 'var(--series-7)', label: 'Deathblow' }, { color: 'var(--status-critical)', label: 'Death' },
  ]);
  timelineChart(c1, {
    id: 'bask-group', domain: dom, timeFmt: fmtTime, markers: killMarkers(),
    series: [
      { name: 'Damage out', color: 'var(--series-1)', raw: all('do') },
      { name: 'Damage in', color: 'var(--series-8)', raw: all('di') },
      { name: 'Heals out', color: 'var(--series-3)', raw: all('ho') },
      { name: 'Heals in', color: 'var(--series-6)', raw: all('hi') },
    ],
  });
  const c1b = card(section(c));
  legend(c1b, [{ color: 'var(--series-4)', label: 'Resisted' }, { color: 'var(--series-2)', label: 'Interrupted' }]);
  timelineChart(c1b, {
    id: 'bask-group-ri', domain: dom, timeFmt: fmtTime, height: 150, valueFmt: countFmt,
    series: [
      { name: 'Resisted', color: 'var(--series-4)', raw: all('rs') },
      { name: 'Interrupted', color: 'var(--series-2)', raw: all('ir') },
    ],
  });

  const metrics = [['do', 'Damage out'], ['di', 'Damage in'], ['ho', 'Heals out'], ['hi', 'Heals in'], ['rs', 'Resisted'], ['ir', 'Interrupted']];
  const c2 = card(section(c, 'By player'));
  const chips = document.createElement('div'); chips.className = 'chip-row';
  chips.innerHTML = metrics.map(([k, l]) => `<button class="chip${S.metric === k ? ' active' : ''}" data-metric="${k}">${l}</button>`).join('');
  chips.addEventListener('click', (ev) => { const b = ev.target.closest('[data-metric]'); if (!b) return; S.metric = b.dataset.metric; renderOverview(c); });
  c2.appendChild(chips);
  legend(c2, S.order.map((p) => ({ color: playerColor(p), label: p })));
  timelineChart(c2, {
    id: 'bask-players', domain: dom, timeFmt: fmtTime, markers: killMarkers(),
    valueFmt: S.metric === 'rs' || S.metric === 'ir' ? countFmt : fmtNum,
    series: tickSeries(S.metric),
  });

  const s3 = section(c, 'Players');
  table(s3, ['Player', 'Damage out', 'DPS', 'Damage in', 'Heals out', 'HPS', 'Heals in', 'Resisted', 'Interrupted', 'Deathblows', 'Deaths'],
    S.order.map((p) => {
      const t = T(p), secs = activeSeconds(t);
      return [nameCell(p), fmtExact(t.dmgOut.total), secs ? fmtNum(t.dmgOut.total / secs) : '—', fmtExact(t.dmgIn.total),
        fmtExact(t.healOut.total), secs ? fmtNum(t.healOut.total / secs) : '—', fmtExact(hm.received.get(p) || 0),
        fmtExact(t.resists.total), fmtExact(t.interrupts.total), fmtExact(t.deathblows.length), fmtExact(t.deaths.length)];
    }));
}

function renderDamage(c) {
  c.innerHTML = '';
  if (!S.order.length) return noMembers(c);
  const g = grid(section(c), 2);
  barChart(card(g, 'Damage dealt'), { items: playerItems((t) => ({ value: t.dmgOut.total, hits: t.dmgOut.hits, crits: t.dmgOut.crits })), colorFn: byPlayerColor });
  barChart(card(g, 'Damage taken'), { items: playerItems((t) => ({ value: t.dmgIn.total, hits: t.dmgIn.hits, crits: t.dmgIn.crits })), colorFn: byPlayerColor });

  const g2 = grid(section(c, 'Who hit each player', 'Everything that damaged each groupmate, by attacker.'), 2);
  for (const p of S.order) {
    const cc = card(g2, `${nameCell(p)} <span class="sub">took ${fmtExact(T(p).dmgIn.total)}</span>`);
    const items = amtItems(T(p).dmgIn.by);
    if (!items.length) empty(cc, 'No damage taken.'); else barChart(cc, { items, maxItems: 10, colorFn: () => 'var(--series-8)' });
  }

  const g3 = grid(section(c, 'Who each player hit'), 2);
  for (const p of S.order) {
    const cc = card(g3, `${nameCell(p)} <span class="sub">dealt ${fmtExact(T(p).dmgOut.total)}</span>`);
    const items = amtItems(T(p).dmgOut.by);
    if (!items.length) empty(cc, 'No damage dealt.'); else barChart(cc, { items, maxItems: 10, colorFn: () => playerColor(p) });
  }

  const g4 = grid(section(c, 'Resists & interrupts', 'Resisted: targets that resisted a player’s spells. Interrupted: what broke a player’s casts.'), 2);
  for (const p of S.order) {
    const t = T(p);
    if (!t.resists.total && !t.interrupts.total) continue;
    const cc = card(g4, `${nameCell(p)} <span class="sub">${t.resists.total} resisted · ${t.interrupts.total} interrupted</span>`);
    const sub = (text) => { const h = document.createElement('div'); h.className = 'sub mini-head'; h.textContent = text; cc.appendChild(h); };
    if (t.resists.total) { sub('Resisted by'); barChart(cc, { items: countItems(t.resists.by), maxItems: 6, valueFmt: countFmt, colorFn: () => 'var(--series-4)' }); }
    if (t.interrupts.total) { sub('Interrupted by'); barChart(cc, { items: countItems(t.interrupts.by), maxItems: 6, valueFmt: countFmt, colorFn: () => 'var(--series-2)' }); }
  }
  if (!g4.children.length) empty(g4, 'No resists or interrupts yet.');
}

function renderHealing(c) {
  c.innerHTML = '';
  if (!S.order.length) return noMembers(c);
  const hm = healingMatrix();
  const g = grid(section(c), 2);
  barChart(card(g, 'Healing done'), { items: playerItems((t) => ({ value: t.healOut.total, hits: t.healOut.hits, crits: t.healOut.crits })), colorFn: byPlayerColor });
  barChart(card(g, 'Healing received'), { items: playerItems((t, p) => ({ value: hm.received.get(p) || 0 })), colorFn: byPlayerColor });

  const healers = S.order.filter((h) => T(h).healOut.total > 0);
  const s = section(c, 'Who healed whom', 'Rows are healers, columns are who they healed. Heals between groupmates are counted once, from the healer’s own log.');
  if (!healers.length) empty(card(s), 'No healing done yet.');
  else {
    const max = Math.max(1, ...hm.cell.values());
    table(s, ['Healer → target', ...S.order.map((p) => nameCell(p)), 'Outside group', 'Total'],
      healers.map((h) => [nameCell(h),
        ...S.order.map((r) => { const v = hm.cell.get(`${h}\u0000${r}`) || 0; return v ? `<span class="heat" style="--heat:${(v / max).toFixed(3)}">${fmtExact(v)}</span>` : '<span class="sub">·</span>'; }),
        fmtExact(hm.outside.get(h) || 0), `<strong>${fmtExact(T(h).healOut.total)}</strong>`]));
  }

  const g2 = grid(section(c, 'Heals from outside the group', 'Healers who aren’t in this bask, as seen in each receiver’s own log.'), 2);
  for (const r of S.order) {
    const list = hm.fromOutside.get(r);
    if (!list.length) continue;
    barChart(card(g2, nameCell(r)), { items: list.map(([label, value]) => ({ label, value })), maxItems: 8, colorFn: () => 'var(--series-6)' });
  }
  if (!g2.children.length) empty(g2, 'None yet.');

  if (healers.length) {
    const g3 = grid(section(c, 'Who each healer healed'), 2);
    for (const h of healers) {
      barChart(card(g3, `${nameCell(h)} <span class="sub">healed ${fmtExact(T(h).healOut.total)}</span>`), { items: amtItems(T(h).healOut.by), maxItems: 10, colorFn: () => 'var(--series-3)' });
    }
  }
}

function renderPets(c) {
  c.innerHTML = '';
  if (!S.order.length) return noMembers(c);
  const rows = [], items = [];
  for (const p of S.order) {
    const t = T(p);
    for (const [pet, v] of Object.entries(t.pets)) {
      const share = t.dmgOut.total ? `${Math.round((v.dmg / t.dmgOut.total) * 100)}%` : '—';
      rows.push([nameCell(p), esc(pet), fmtExact(v.dmg), share, fmtExact(v.hits), fmtExact(v.crits), fmtExact(v.heal)]);
      items.push({ label: `${pet} (${p})`, value: v.dmg, hits: v.hits, crits: v.crits, owner: p });
    }
  }
  if (!rows.length) { empty(card(section(c)), 'No pets seen yet. Pet damage shows up here once a groupmate’s pet hits something.'); return; }
  barChart(card(section(c, 'Pet damage')), { items, colorFn: (i) => playerColor(i.owner) });
  table(section(c), ['Owner', 'Pet', 'Damage', 'Share of owner', 'Hits', 'Crits', 'Self-heals'], rows, { numericFrom: 2 });
}

function fmtRemaining(sec) {
  const w = Math.max(0, Math.ceil(sec));
  if (w < 60) return `${w}s`;
  return `${Math.floor(w / 60)}:${String(w % 60).padStart(2, '0')}`;
}

function renderCooldowns(c) {
  if (!S.order.length) { noMembers(c); return; }
  const t0 = now();
  const parts = S.order.map((p) => {
    const cds = Object.entries(T(p).cooldowns);
    const pills = cds.map(([name, [at, secs]]) => {
      const full = secs ?? ALL_COOLDOWNS[name]?.cooldownSeconds ?? null;
      const left = full == null ? 0 : full - (t0 - at) / 1000;
      const ready = left <= 0;
      const pct = ready || !full ? 0 : Math.min(100, (left / full) * 100);
      return `<li class="cooldown-pill ${ready ? 'ready' : 'on-cooldown'}${!ready && left <= 3 ? ' ready-soon' : ''}" title="${esc(name)}: last used ${fmtTimeSec(at)}${full ? `, ${fmtRemaining(full)} cooldown` : ''}">
        ${icon(name) || '<span class="cooldown-pill-icon cooldown-pill-icon-empty"></span>'}
        <span class="cooldown-pill-name">${esc(name)}</span>
        <span class="cooldown-pill-bar"><span class="cooldown-pill-bar-fill" style="width:${pct}%"></span></span>
        <span class="cooldown-pill-time">${ready ? 'Ready' : fmtRemaining(left)}</span></li>`;
    }).join('');
    return `<div class="card cd-card"><h4 class="card-title">${nameCell(p)}</h4>${cds.length ? `<ul class="cd-list">${pills}</ul>` : '<div class="empty-state">No tracked cooldowns used yet.</div>'}</div>`;
  });
  const note = S.mode === 'offline'
    ? `As of when this bask was saved (${new Date(S.exportedAt).toLocaleString()}).`
    : 'Abilities with a known cooldown, counted from the moment each player last used them. Times come from each player’s own log, so they can trail the game by a few seconds.';
  c.innerHTML = `<div class="section"><p class="sub section-note">${esc(note)}</p><div class="grid cols-2">${parts.join('')}</div></div>`;
}

function renderDeathblows(c) {
  c.innerHTML = '';
  if (!S.order.length) return noMembers(c);
  const g = grid(section(c), 2);
  barChart(card(g, 'Deathblows'), { items: playerItems((t) => ({ value: t.deathblows.length })), valueFmt: countFmt, colorFn: byPlayerColor });
  barChart(card(g, 'Deaths'), { items: playerItems((t) => ({ value: t.deaths.length })), valueFmt: countFmt, colorFn: () => 'var(--status-critical)' });

  const kills = S.order.flatMap((p) => T(p).deathblows.map((d) => ({ ...d, p }))).sort((a, b) => b.at - a.at);
  const s = section(c, `Group deathblows (${kills.length})`);
  if (!kills.length) empty(card(s), 'No deathblows yet.');
  else table(s, ['Time', 'Player', 'Victim', 'Where'], kills.slice(0, 300).map((d) => [fmtTimeSec(d.at), nameCell(d.p), heraldLink(d.victim), esc(d.zone || '')]), { numericFrom: 99 });

  const deaths = S.order.flatMap((p) => T(p).deaths.map((d) => ({ ...d, p }))).sort((a, b) => b.at - a.at);
  const s2 = section(c, `Group deaths (${deaths.length})`);
  if (!deaths.length) empty(card(s2), 'Nobody has died. Yet.');
  else table(s2, ['Time', 'Player', 'Killed by'], deaths.slice(0, 300).map((d) => [fmtTimeSec(d.at), nameCell(d.p), d.killer ? heraldLink(d.killer) : '<span class="sub">unknown</span>']), { numericFrom: 99 });
}

const RENDER = { overview: renderOverview, damage: renderDamage, healing: renderHealing, pets: renderPets, cooldowns: renderCooldowns, deathblows: renderDeathblows };

// Your own numbers come straight from this page (no 30s wait for the
// server round trip).
function applyOwnTotals() {
  if (S.mode !== 'live' || !S.summarizer || !S.members.has(S.player)) return;
  S.members.get(S.player).totals = cleanTotals(S.summarizer.snapshot());
}

function renderAll() {
  applyOwnTotals();
  renderBar();
  renderRoster();
  RENDER[S.tab](el(`panel-${S.tab}`));
}

// ---------------------------------------------------------------------------
// wiring
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

document.querySelector('.tabbar').addEventListener('click', (ev) => {
  const b = ev.target.closest('.tab'); if (!b) return;
  S.tab = b.dataset.tab;
  document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === b));
  document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('active', p.id === `panel-${S.tab}`));
  RENDER[S.tab](el(`panel-${S.tab}`));
});

el('btnCreate').addEventListener('click', async (ev) => {
  const btn = ev.currentTarget; btn.disabled = true;
  try { const s = await net.createSession(); await goJoinStep(s.code, { fresh: s }); }
  catch (err) { setError('lobbyError', `Couldn't create a bask: ${err.message}`); }
  finally { btn.disabled = false; }
});

el('joinForm').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const code = net.normalizeCode(el('joinCode').value);
  if (!net.CODE_RE.test(code)) { setError('lobbyError', 'Invite codes are 6 letters and numbers, like ABC234.'); return; }
  goJoinStep(code);
});
el('joinCode').addEventListener('input', (ev) => { ev.target.value = net.normalizeCode(ev.target.value); });

el('btnOpenFile').addEventListener('click', () => el('fileInput').click());
el('fileInput').addEventListener('change', (ev) => { const f = ev.target.files[0]; if (f) openSavedFile(f); ev.target.value = ''; });

el('btnCopyLink').addEventListener('click', (ev) => copy(inviteLink(S.code), ev.currentTarget));
el('btnCopyCode').addEventListener('click', (ev) => copy(S.code, ev.currentTarget));
el('btnBarCopy').addEventListener('click', (ev) => copy(inviteLink(S.code), ev.currentTarget));

el('nameForm').addEventListener('submit', async (ev) => {
  ev.preventDefault();
  setError('joinError', '');
  const name = el('playerName').value.trim();
  if (!name) { setError('joinError', 'Enter your character name first.'); el('playerName').focus(); return; }
  if (!isWatchSupported()) return;
  // Someone is already sharing under this name, and it isn't this browser.
  if (!hasMemberKey(S.code, name)) {
    try {
      const m = await net.fetchMember(S.code, name);
      if (m && !m.left_at && Date.now() - Date.parse(m.seen_at || m.updated_at) < 5 * 60000) {
        setError('joinError', `${m.player} is already in this bask. Pick your own character name.`);
        return;
      }
    } catch { /* the server checks again on join */ }
  }
  let handle;
  try {
    [handle] = await window.showOpenFilePicker({ types: [{ description: 'DAoC chat log', accept: { 'text/plain': ['.log', '.txt'] } }] });
  } catch { return; } // picker cancelled
  el('btnPickLog').disabled = true;
  try { await startLive(handle, name); }
  catch (err) { setError('joinError', err.message || String(err)); }
  finally { el('btnPickLog').disabled = false; }
});

el('btnSpectate').addEventListener('click', () => {
  S.mode = 'spectate';
  save({ code: S.code, mode: 'spectate' });
  if (!loadRecent().some((r) => r.code === S.code)) rememberRecent(S.code, {});
  enterBask();
});
el('btnResume').addEventListener('click', resumeSharing);

// Coming back to a background tab: catch up right away.
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && (S.mode === 'live' || S.mode === 'spectate') && Date.now() - S.lastPoll > 3000) syncLoop();
});

el('roster').addEventListener('click', async (ev) => {
  const b = ev.target.closest('[data-boot],[data-ban]');
  if (!b || !isLeader()) return;
  const ban = b.hasAttribute('data-ban');
  const player = ban ? b.dataset.ban : b.dataset.boot;
  const msg = ban
    ? `Ban ${player}? Their numbers are removed from the bask and that name can't join it again.`
    : `Boot ${player}? Their numbers are removed from the bask and their spot opens up. They can join again with the code.`;
  if (!confirm(msg)) return;
  b.disabled = true;
  try {
    await net.kickPlayer(S.code, S.player, S.memberKey, player, ban);
    if (ban && !S.banned.includes(player)) S.banned.push(player);
    pruneMembers(S.order.filter((p) => p.toLowerCase() !== player.toLowerCase()), ban ? player : null);
    renderAll();
  } catch (err) {
    S.syncError = `Couldn't ${ban ? 'ban' : 'boot'} ${player}: ${err.message}`;
    b.disabled = false;
    renderBar();
  }
});

el('bannedList').addEventListener('click', async (ev) => {
  const b = ev.target.closest('[data-unban]');
  if (!b || !isLeader()) return;
  const player = b.dataset.unban;
  b.disabled = true;
  try {
    await net.unbanPlayer(S.code, S.player, S.memberKey, player);
    S.banned = S.banned.filter((n) => n.toLowerCase() !== player.toLowerCase());
    pushFeed(`unban:${player}:${Date.now()}`, Date.now(), `✅ <strong>${esc(player)}</strong> was unbanned`);
    renderRoster();
  } catch (err) { S.syncError = `Couldn't unban ${player}: ${err.message}`; b.disabled = false; renderBar(); }
});

el('banForm').addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const input = el('banName');
  const player = input.value.trim();
  if (!player || !isLeader()) return;
  if (player.toLowerCase() === S.player.toLowerCase()) { S.syncError = "You can't ban yourself."; renderBar(); return; }
  if (!confirm(`Ban ${player}? If they're in the bask their numbers are removed, and that name can't join until you unban it.`)) return;
  try {
    await net.kickPlayer(S.code, S.player, S.memberKey, player, true);
    if (!S.banned.some((n) => n.toLowerCase() === player.toLowerCase())) S.banned.push(player);
    pruneMembers(S.order.filter((p) => p.toLowerCase() !== player.toLowerCase()), player);
    input.value = '';
    renderAll();
  } catch (err) { S.syncError = `Couldn't ban ${player}: ${err.message}`; renderBar(); }
});

el('btnDownload').addEventListener('click', exportBask);
el('btnLeave').addEventListener('click', () => {
  if (S.mode === 'live' && !S.booted) {
    const extra = isLeader() ? ' The next player in line becomes the leader.' : '';
    if (!confirm(`Stop sharing and leave this bask? Your numbers so far stay in it, and your spot opens up.${extra}`)) return;
    net.leaveBask(S.code, S.player, S.memberKey).catch(() => {}).finally(leave);
    return;
  }
  leave();
});

(function boot() {
  if (!net.isConfigured()) {
    show('configWarning', true);
    el('btnCreate').disabled = true;
    el('joinForm').querySelector('button').disabled = true;
    return;
  }
  const code = net.normalizeCode(new URLSearchParams(location.search).get('code'));
  if (!net.CODE_RE.test(code)) { renderRecent(); return; }
  el('joinCode').value = code;
  const saved = loadSaved();
  (async () => {
    if (saved && saved.code === code && saved.mode && await resumeSaved(saved)) return;
    await goJoinStep(code);
    if (!el('lobby').hidden) renderRecent(); // code was dead: show what's still alive
  })();
})();
