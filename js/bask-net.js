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

// All members, or only those whose row changed after `sinceIso` (pass a cursor
// with some overlap, same as fetchTicksSince) — members who've gone quiet
// then cost nothing to poll.
export async function fetchMembers(code, sinceIso) {
  const filter = sinceIso ? `&updated_at=gt.${encodeURIComponent(sinceIso)}` : '';
  return rest(`bask_members?code=eq.${encodeURIComponent(code)}${filter}&select=player,joined_at,updated_at,left_at,totals&order=joined_at.asc`);
}

// Just the names currently in the bask — how viewers notice someone was booted.
export async function fetchMemberNames(code) {
  const rows = await rest(`bask_members?code=eq.${encodeURIComponent(code)}&select=player`);
  return rows.map((r) => r.player);
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
export async function fetchBanned(code) {
  const rows = await rest(`bask_banned?code=eq.${encodeURIComponent(code)}&select=player,banned_at&order=banned_at.asc`);
  return rows.map((r) => r.player);
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

export async function fetchMember(code, player) {
  const rows = await rest(`bask_members?code=eq.${encodeURIComponent(code)}&player=eq.${encodeURIComponent(player)}&select=player,joined_at,updated_at,left_at,totals`);
  return rows[0] || null;
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

// Every bucket written or rewritten after `sinceIso` (server time). Rows from
// one batched upsert share the same updated_at, and a slow transaction can
// commit with an updated_at a little in the past, so callers should pass a
// cursor with some overlap (a few seconds back) and merge rows by
// (player, t) — re-reading a bucket is harmless, missing one is not.
// Pages with offset (stable order) so a late joiner can catch up on a long
// session.
export async function fetchTicksSince(code, sinceIso) {
  const out = [];
  const filter = sinceIso ? `&updated_at=gt.${encodeURIComponent(sinceIso)}` : '';
  for (let page = 0; page < 200; page++) {
    const rows = await rest(`bask_ticks?code=eq.${encodeURIComponent(code)}${filter}&select=player,t,updated_at,data&order=updated_at.asc,player.asc,t.asc&limit=1000&offset=${page * 1000}`);
    out.push(...rows);
    if (rows.length < 1000) break;
  }
  return out;
}
