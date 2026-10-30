// bask-net.js — the only part of Chat Gator that talks to a server, and only
// when you join a Bask. Plain fetch() against Supabase's REST API (PostgREST),
// no client library. What gets sent is exactly what bask-summary.js produces:
// names and numbers, never log lines.

import { SUPABASE_URL, SUPABASE_KEY } from './bask-config.js';

const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/0/1 — easy to read aloud
export const CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;

export function isConfigured() {
  return !!SUPABASE_URL && !!SUPABASE_KEY && !SUPABASE_KEY.startsWith('__');
}

export function normalizeCode(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}

function randomCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
}

class BaskError extends Error {
  constructor(message, status, body) { super(message); this.status = status; this.body = body; }
}

async function rest(path, { method = 'GET', body, prefer } = {}) {
  const headers = { apikey: SUPABASE_KEY, Accept: 'application/json' };
  // Legacy anon keys are JWTs and also go in Authorization; new
  // "sb_publishable_" keys must NOT (they aren't JWTs).
  if (SUPABASE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_KEY}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (prefer) headers.Prefer = prefer;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method, headers, body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const msg = (data && (data.message || data.hint)) || `Request failed (${res.status})`;
    throw new BaskError(msg, res.status, data);
  }
  return data;
}

export async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

// A random per-join secret that proves "I am this player" to the leader and
// leave functions. Only its hash is stored (bask_members.key_hash); the secret
// stays in this browser.
export function newMemberKey() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)), (b) => b.toString(16).padStart(2, '0')).join('');
}

// ---- sessions ---------------------------------------------------------------
export async function createSession() {
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = randomCode();
    try {
      const rows = await rest('bask_sessions', { method: 'POST', body: { code }, prefer: 'return=representation' });
      return rows[0];
    } catch (err) {
      if (err.status === 409) continue; // code collision — roll again
      throw err;
    }
  }
  throw new Error('Could not create a bask. Try again in a moment.');
}

// Which of these codes still exist (expired ones are hidden by the server).
export async function fetchSessions(codes) {
  const ok = codes.filter((c) => CODE_RE.test(c));
  if (!ok.length) return [];
  return rest(`bask_sessions?code=in.(${ok.join(',')})&select=code,expires_at,leader`);
}

export async function getSession(code) {
  const rows = await rest(`bask_sessions?code=eq.${encodeURIComponent(code)}&select=*`);
  return rows[0] || null; // null = never existed, or expired
}

// ---- members ----------------------------------------------------------------
// Joining (or rejoining after leaving): claims a spot. key_hash is ignored by
// the server if this name already has a seat that wasn't left.
export async function upsertMember(code, player, totals, memberKey) {
  const key_hash = memberKey ? await sha256Hex(memberKey) : null;
  await rest('bask_members?on_conflict=code,player', {
    method: 'POST', body: { code, player, totals, key_hash, left_at: null },
    prefer: 'resolution=merge-duplicates,return=minimal',
  });
}

// Leader only (me/key prove it): remove a player and their time buckets. A
// booted player can join again; with ban=true their name is kept out.
export async function kickPlayer(code, me, key, player, ban = false) {
  await rest('rpc/bask_kick', { method: 'POST', body: { p_code: code, p_me: me, p_key: key, p_player: player, p_ban: !!ban } });
}
export async function unbanPlayer(code, me, key, player) {
  await rest('rpc/bask_unban', { method: 'POST', body: { p_code: code, p_me: me, p_key: key, p_player: player } });
}
// Keep my numbers in the bask but free my spot (and hand off leadership).
export async function leaveBask(code, me, key) {
  await rest('rpc/bask_leave', { method: 'POST', body: { p_code: code, p_me: me, p_key: key } });
}
// After joining, a player updates their own row rather than upserting it, so
// a page that was booted can't quietly put itself back. Returns false when
// the row is gone (booted).
export async function updateMember(code, player, totals) {
  const rows = await rest(`bask_members?code=eq.${encodeURIComponent(code)}&player=eq.${encodeURIComponent(player)}&select=player`, {
    method: 'PATCH', body: { totals }, prefer: 'return=representation',
  });
  return Array.isArray(rows) && rows.length > 0;
}

// Case-insensitive: "dexii" finds Dexii (the server treats them as one name).
export async function fetchMember(code, player) {
  const pattern = String(player).replace(/[\\%_]/g, (c) => `\\${c}`);
  const rows = await rest(`bask_members?code=eq.${encodeURIComponent(code)}&player=ilike.${encodeURIComponent(pattern)}&select=player,joined_at,updated_at,seen_at,left_at,totals`);
  return rows.find((r) => r.player === player) || rows[0] || null;
}

// ---- time buckets -------------------------------------------------------------
export async function upsertTicks(code, player, ticks) {
  if (!ticks.length) return;
  const rows = ticks.map((x) => ({ code, player, t: new Date(x.t).toISOString(), data: x.data }));
  for (let i = 0; i < rows.length; i += 500) {
    await rest('bask_ticks?on_conflict=code,player,t', {
      method: 'POST', body: rows.slice(i, i + 500),
      prefer: 'resolution=merge-duplicates,return=minimal',
    });
  }
}

// ---- polling ----------------------------------------------------------------
// One round trip for everything a page shows (see bask_poll in
// supabase/bask.sql): session, banned names, presence, only the members and
// time buckets that changed since the cursors, and the spectator count.
// viewerId (just-watching pages only) counts this browser as a spectator.
export async function poll(code, membersSince, ticksSince, viewerId) {
  return rest('rpc/bask_poll', { method: 'POST', body: {
    p_code: code, p_members_since: membersSince || null, p_ticks_since: ticksSince || null, p_viewer: viewerId || null,
  } });
}
export const POLL_TICK_LIMIT = 3000;

// "Still here" for a player whose numbers haven't changed. false = booted.
export async function ping(code, me, key) {
  return (await rest('rpc/bask_ping', { method: 'POST', body: { p_code: code, p_me: me, p_key: key } })) === true;
}
