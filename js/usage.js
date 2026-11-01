// usage.js — the one thing solo Chat Gator sends anywhere: a single tiny
// note when you start a session (your character's name, class and realm, if
// known, and the time), so we can see how many sessions people start. Never
// anything from the log itself. Also reads the "sessions started today"
// counts shown on the home pages. Both go to the same small database Bask
// uses (see supabase/bask.sql, chatgator_session_start / chatgator_counts).
//
// Everything here is best-effort: if the database can't be reached, nothing
// else on the page is affected.

import { SUPABASE_URL, SUPABASE_KEY } from './bask-config.js';
import { CLASS_REALM } from './realm.js';

const WAIT_MS = 2 * 60000; // send with whatever is known after this long

function rpc(name, body, { keepalive = false } = {}) {
  const headers = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json', Accept: 'application/json' };
  if (SUPABASE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_KEY}`;
  return fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, { method: 'POST', headers, body: JSON.stringify(body), keepalive });
}

let pending = null; // { timer, name, cls }

function send() {
  if (!pending) return;
  const { name, cls } = pending;
  clearTimeout(pending.timer);
  pending = null;
  window.removeEventListener('pagehide', send);
  rpc('chatgator_session_start', {
    p_player: name || null,
    p_class: cls || null,
    p_realm: (cls && CLASS_REALM[cls]) || null,
  }, { keepalive: true }).catch(() => {});
}

// A new session (a log opened or a live watch started -- not a sample, a
// snapshot, or resuming after a refresh). The note goes out once the
// character's name and class are both known, or after a couple of minutes,
// or when the tab closes, whichever comes first. `final`: the whole log is
// already parsed, nothing more to learn, so send right away.
export function sessionStarted({ name = null, cls = null, final = false } = {}) {
  if (pending) send(); // a previous session that never got to send
  pending = { name, cls, timer: setTimeout(send, WAIT_MS) };
  window.addEventListener('pagehide', send);
  if (final || (name && cls)) send();
}

// Called as the session learns more about the character.
export function sessionLearned({ name = null, cls = null } = {}) {
  if (!pending) return;
  if (name) pending.name = name;
  if (cls) pending.cls = cls;
  if (pending.name && pending.cls) send();
}

// { solo, bask } sessions started since this browser's local midnight.
export async function countsToday() {
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const res = await rpc('chatgator_counts', { p_since: midnight.toISOString() });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// The "started today" strip on both home pages: two small stat cards, the
// page's own kind first; the other one links across to its page.
const PILE = '<span class="gator-pile" aria-hidden="true"><span>🐊</span><span>🐊</span><span>🐊</span></span>';
export function renderToday(box, counts, page = 'solo') {
  if (!box || !counts) return;
  const n = (x) => Math.max(0, Math.round(+x || 0));
  const card = (kind) => {
    const count = n(counts[kind]);
    const inner = kind === 'solo'
      ? `<span class="today-icon" aria-hidden="true">🐊</span><span class="today-text"><span class="today-num">${count.toLocaleString()}</span><span class="today-label">Chat Gator session${count === 1 ? '' : 's'} started today</span></span>`
      : `<span class="today-icon">${PILE}</span><span class="today-text"><span class="today-num">${count.toLocaleString()}</span><span class="today-label">bask${count === 1 ? '' : 's'} started today</span></span>`;
    if (kind === page) return `<div class="today-card is-here">${inner}</div>`;
    return `<a class="today-card" href="${kind === 'solo' ? '../' : 'bask/'}">${inner}</a>`;
  };
  box.innerHTML = page === 'bask' ? card('bask') + card('solo') : card('solo') + card('bask');
  box.hidden = false;
}
