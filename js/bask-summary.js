// bask-summary.js — boils a player's parsed chat.log events down to the small,
// combat-only summary a Bask (group session) shares with the rest of the group.
//
// Pure and DOM-free (so it can be unit-tested in Node). The input is the same
// typed events parser.js already produces; the output is:
//   * snapshot(): one cumulative totals object (damage/heals in+out by who,
//     pets, resists, interrupts, deathblows, deaths, cooldown last-use times),
//     re-sent whole every few seconds -- if one upload is lost, the next one
//     simply supersedes it.
//   * takeDirtyTicks(): the 15-second time buckets that changed since the last
//     call, for the group time-series chart.
//
// What is deliberately NOT in here, ever: chat or raw log lines, spell/style
// names (except names of abilities with a tracked cooldown, for the cooldown
// view), realm points, /stats output. Only names of the people involved and
// numbers.
//
// Class: worked out the same way the main page does (aggregate.js's
// inferClass) from the spells and styles this player is seen to use, and only
// shared once it's confident. Only the class name is sent, never the ability
// names behind the guess.
//
// Times are real wall-clock epoch ms, not the parser's synthetic `clock`: the
// game prints each line's local [HH:MM:SS], so each player's own browser turns
// that into an absolute moment (see wallClockFor) and every member's data
// lines up on one shared timeline regardless of their time zone.

import { inferClass } from './aggregate.js';

export const TICK_MS = 15000;
export const SUMMARY_VERSION = 1;
const DAY_MS = 86400000;
const MAX_KEYS = 25;        // per breakdown map; the rest roll into "Others"
const MAX_LOG = 200;        // deathblow / death lists
export const OTHERS = 'Others';

// Turns a parser `clock` (time-of-day ms + whole days of rollover) into epoch
// ms using THIS browser's local midnight. Only meaningful for lines written
// "now-ish" -- i.e. a file being tailed live, which is the only way Bask reads
// one. A time-of-day more than an hour in the future is yesterday's line seen
// just after midnight.
export function wallClockFor(clock, now = Date.now()) {
  const d = new Date(now);
  const midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const tod = ((clock % DAY_MS) + DAY_MS) % DAY_MS;
  let at = midnight + tod;
  if (at - now > 3600000) at -= DAY_MS;
  return at;
}

const norm = (s) => String(s || '').trim().toLowerCase();

function bucketMap() { return { total: 0, hits: 0, crits: 0, by: Object.create(null) }; }
function addTo(b, who, amount, isCrit) {
  b.total += amount;
  if (isCrit) b.crits++; else b.hits++;
  const k = who || 'Unknown';
  const row = b.by[k] || (b.by[k] = [0, 0, 0]);
  row[0] += amount;
  if (isCrit) row[2]++; else row[1]++;
}
// A crit line ("...for an additional N") is extra damage on the hit just
// before it: counted toward the amount and crit count, not as another hit.
function addCritExtra(b, who, amount) {
  b.total += amount; b.crits++;
  const k = who || 'Unknown';
  const row = b.by[k] || (b.by[k] = [0, 0, 0]);
  row[0] += amount; row[2]++;
}
function countMap() { return { total: 0, by: Object.create(null) }; }
function addCount(c, who) { c.total++; const k = who || 'Unknown'; c.by[k] = (c.by[k] || 0) + 1; }

// Keep the biggest MAX_KEYS entries; fold the rest into "Others".
function capBy(by, valueOf, merge) {
  const entries = Object.entries(by);
  if (entries.length <= MAX_KEYS) return { ...by };
  entries.sort((a, b) => valueOf(b[1]) - valueOf(a[1]));
  const out = Object.fromEntries(entries.slice(0, MAX_KEYS - 1));
  let rest = null;
  for (const [, v] of entries.slice(MAX_KEYS - 1)) rest = rest == null ? (Array.isArray(v) ? [...v] : v) : merge(rest, v);
  out[OTHERS] = rest;
  return out;
}
const capAmount = (b) => ({ total: b.total, hits: b.hits, crits: b.crits,
  by: capBy(b.by, v => v[0], (a, v) => [a[0] + v[0], a[1] + v[1], a[2] + v[2]]) });
const capCount = (c) => ({ total: c.total, by: capBy(c.by, v => v, (a, v) => a + v) });

// The player's own doings: what decides whether they're playing (sleeping
// after 5 idle minutes, log reading stops after an hour). The realm-wide kill
// feed and other background lines keep flowing while someone is AFK, so
// they don't count -- only a kill feed line naming this player does.
const ACTIVITY = new Set([
  'melee_weapon', 'melee_plain', 'melee_extra', 'melee_crit_named', 'melee_crit_generic', 'you_miss', 'you_fumble',
  'ability_hit', 'ability_crit', 'pet_melee', 'pet_hit', 'pet_melee_stray', 'pet_summon', 'pet_command', 'pet_lost',
  'incoming_dmg', 'incoming_crit', 'incoming_extra', 'heal_out', 'heal_out_crit', 'heal_in', 'power_transfer',
  'resist_named', 'resist_generic', 'cast', 'cast_begin', 'cast_failed', 'cast_interrupted', 'cc_landed',
  'block', 'block_in', 'you_parry', 'you_evade', 'parry_in', 'evade_in', 'ablative', 'bladeturn',
  'you_died', 'target', 'item_use',
]);

const EMPTY_TICK = () => ({ do: 0, di: 0, ho: 0, hi: 0, pd: 0, rs: 0, ir: 0, db: 0, dd: 0 });

export class GroupSummarizer {
  // player: this member's character name (needed to tell "I killed X" from the
  //   realm-wide kill feed, and to label everything).
  // cooldowns: { abilityName: { cooldownSeconds } } -- which casts to report.
  // toWall: clock -> epoch ms (injectable for tests).
  // since: when this member joined (shown as their start time). countFrom:
  //   ignore log lines written before this moment (defaults to since) — after
  //   a page refresh the totals are restored from the server with restore()
  //   and only lines newer than the refresh are counted on top.
  constructor({ player, cooldowns = {}, toWall = (c) => wallClockFor(c), since = Date.now(), countFrom }) {
    this.player = player;
    this.playerKey = norm(player);
    this.cooldowns = cooldowns;
    this.toWall = toWall;
    this.since = since;
    this.countFrom = countFrom ?? since;
    this.changed = false;
    this.last = null;
    this.dmgOut = bucketMap();
    this.dmgIn = bucketMap();
    this.healOut = bucketMap();
    this.healIn = bucketMap();
    this.pets = Object.create(null);     // pet -> { dmg, hits, crits, heal }
    this.petNames = new Set();
    this.resists = countMap();           // who resisted my spells
    this.interrupts = countMap();        // who interrupted my casts (or "Moved")
    this.deathblows = [];                // [{ at, victim, zone }]
    this.deaths = [];                    // [{ at, killer }]
    this.cdUsed = Object.create(null);   // ability -> epoch ms of last use
    this.ticks = new Map();              // bucketStart -> tick
    this.dirty = new Set();
    this._lastMeleeTarget = null;
    this._lastAbilityTarget = new Map(); // ability/pet name -> last target
    this._lastHealTarget = null;
    this._pendingDeathAt = null;
    this.abilityNames = new Set();       // for the class guess only; never sent
    this.cls = null;                     // { name, confidence } once confident
    this.lastActive = null;              // epoch ms of this player's last own activity
    this.paused = null;                  // epoch ms when the page stopped reading the log (idle 1h)
  }

  // "The player is here now" (joining, resuming): resets the idle clock.
  markActive(at = Date.now()) { this.lastActive = Math.max(this.lastActive || 0, at); this.changed = true; }

  // Events from BEFORE the session started: used only to learn which names
  // are this player's pets (a pet summoned earlier still fights now).
  primePets(events) {
    for (const e of events) if (e.pet && /^pet_/.test(e.type) && e.type !== 'pet_flavor') this.petNames.add(e.pet);
  }

  _tick(at) {
    const k = Math.floor(at / TICK_MS) * TICK_MS;
    let t = this.ticks.get(k);
    if (!t) { t = EMPTY_TICK(); this.ticks.set(k, t); }
    this.dirty.add(k);
    return t;
  }

  _pet(name) {
    this.petNames.add(name);
    return this.pets[name] || (this.pets[name] = { dmg: 0, hits: 0, crits: 0, heal: 0 });
  }

  ingest(events) {
    for (const e of events) {
      if (e.clock == null) continue;
      const at = this.toWall(e.clock);
      if (at < this.countFrom - 5000) continue; // a backlog line from before we joined
      if (this.last == null || at > this.last) this.last = at;
      this._one(e, at);
      if (ACTIVITY.has(e.type) || (e.type === 'kill_feed' && (norm(e.killer) === this.playerKey || norm(e.victim) === this.playerKey))) {
        if (this.lastActive == null || at > this.lastActive) this.lastActive = at;
      }
      this.changed = true;
    }
  }

  _dmgOut(at, target, amount, { crit = false, extra = false, pet = null } = {}) {
    if (extra) addCritExtra(this.dmgOut, target, amount); else addTo(this.dmgOut, target, amount, crit);
    const t = this._tick(at); t.do += amount;
    if (pet) {
      const p = this._pet(pet); p.dmg += amount;
      if (extra || crit) p.crits++; else p.hits++;
      t.pd += amount;
    }
  }

  _one(e, at) {
    switch (e.type) {
      // ---- damage out ------------------------------------------------------
      case 'melee_weapon': case 'melee_plain':
        this._lastMeleeTarget = e.target;
        this._dmgOut(at, e.target, e.dmg);
        break;
      case 'melee_extra':
        this._dmgOut(at, e.target, e.dmg, { extra: true });
        break;
      case 'melee_crit_named':
        this._dmgOut(at, e.target, e.dmg, { extra: true });
        break;
      case 'melee_crit_generic':
        this._dmgOut(at, this._lastMeleeTarget, e.dmg, { extra: true });
        break;
      case 'ability_hit': {
        this._lastAbilityTarget.set(e.name, e.target);
        const pet = this.petNames.has(e.name) ? e.name : null;
        this._dmgOut(at, e.target, e.dmg, { pet });
        break;
      }
      case 'ability_crit': {
        const pet = this.petNames.has(e.name) ? e.name : null;
        this._dmgOut(at, e.target || this._lastAbilityTarget.get(e.name), e.dmg, { extra: true, pet });
        break;
      }
      case 'pet_melee': case 'pet_hit':
        this._dmgOut(at, e.target, e.dmg, { pet: e.pet });
        break;
      case 'pet_melee_stray':
        this._dmgOut(at, e.actualTarget, e.dmg, { pet: e.pet });
        break;
      case 'pet_summon': case 'pet_command': case 'pet_lost':
        this.petNames.add(e.pet);
        break;
      case 'pet_self_heal':
        this._pet(e.pet).heal += e.amount;
        break;

      // ---- damage in -------------------------------------------------------
      case 'incoming_dmg': {
        addTo(this.dmgIn, e.attacker, e.dmg, false);
        this._tick(at).di += e.dmg;
        break;
      }
      case 'incoming_crit': case 'incoming_extra': {
        addCritExtra(this.dmgIn, e.attacker, e.dmg);
        this._tick(at).di += e.dmg;
        break;
      }

      // ---- healing ---------------------------------------------------------
      case 'heal_out':
        // "You heal yourself" -- label it with our own name so groupmates
        // see who it was, not "You".
        this._lastHealTarget = /^(you|yourself)$/i.test(String(e.target).trim()) ? this.player : e.target;
        addTo(this.healOut, this._lastHealTarget, e.amount, false);
        this._tick(at).ho += e.amount;
        break;
      case 'heal_out_crit':
        addCritExtra(this.healOut, this._lastHealTarget, e.amount);
        this._tick(at).ho += e.amount;
        break;
      case 'heal_in':
        addTo(this.healIn, e.healer, e.amount, false);
        this._tick(at).hi += e.amount;
        break;

      // ---- resists / interrupts -------------------------------------------
      case 'resist_named': case 'resist_generic':
        addCount(this.resists, e.target);
        this._tick(at).rs++;
        break;
      case 'cast_interrupted':
        addCount(this.interrupts, e.by || (e.reason === 'moved' ? 'Moved' : e.reason === 'weapons drawn' ? 'Drew weapons' : 'Unknown'));
        this._tick(at).ir++;
        break;

      // ---- kills & deaths --------------------------------------------------
      case 'kill_feed':
        if (norm(e.killer) === this.playerKey) {
          this.deathblows.push({ at, victim: e.victim, zone: e.zone || null });
          if (this.deathblows.length > MAX_LOG) this.deathblows.shift();
          this._tick(at).db++;
        } else if (norm(e.victim) === this.playerKey) {
          // Name the killer on the "You have died." we already counted, if any.
          const d = this.deaths[this.deaths.length - 1];
          if (d && !d.killer && Math.abs(d.at - at) < 10000) d.killer = e.killer;
          else this._death(at, e.killer);
        }
        break;
      case 'you_died': {
        const d = this.deaths[this.deaths.length - 1];
        if (d && Math.abs(d.at - at) < 10000) break; // kill feed got here first
        this._death(at, null);
        break;
      }

      // ---- cooldowns (and class evidence) ---------------------------------
      case 'cast':
        if (e.name && this.cooldowns[e.name]) this.cdUsed[e.name] = at;
        if (e.name) this._sawAbility(e.name);
        break;
    }
    if (e.styleName) this._sawAbility(e.styleName);
    // A styled weapon swing can also start a cooldown.
    if (e.type === 'melee_weapon' && e.styleName && this.cooldowns[e.styleName]) this.cdUsed[e.styleName] = at;
  }

  _sawAbility(name) {
    if (this.abilityNames.has(name) || this.abilityNames.size >= 400) return;
    this.abilityNames.add(name);
    const guess = inferClass(this.abilityNames);
    // Keep the last confident answer if a new ability briefly muddies it.
    if (guess) this.cls = { name: guess.name, confidence: guess.confidence };
  }

  _death(at, killer) {
    this.deaths.push({ at, killer: killer || null });
    if (this.deaths.length > MAX_LOG) this.deaths.shift();
    this._tick(at).dd++;
  }

  snapshot() {
    return {
      v: SUMMARY_VERSION,
      player: this.player,
      since: this.since,
      last: this.last,
      dmgOut: capAmount(this.dmgOut),
      dmgIn: capAmount(this.dmgIn),
      healOut: capAmount(this.healOut),
      healIn: capAmount(this.healIn),
      pets: { ...this.pets },
      resists: capCount(this.resists),
      interrupts: capCount(this.interrupts),
      deathblows: this.deathblows.slice(),
      deaths: this.deaths.slice(),
      cls: this.cls ? { ...this.cls } : null,
      lastActive: this.lastActive,
      paused: this.paused,
      cooldowns: Object.fromEntries(Object.entries(this.cdUsed).map(([n, at]) => [n, [at, this.cooldowns[n]?.cooldownSeconds ?? null]])),
    };
  }

  // Pick up where an earlier page load of this same member left off (the
  // snapshot is whatever the server has for them). Breakdown maps come back
  // already capped, which is fine — "Others" just keeps accumulating.
  restore(snap) {
    if (!snap || snap.v !== SUMMARY_VERSION) return;
    const amt = (b) => ({ total: +b?.total || 0, hits: +b?.hits || 0, crits: +b?.crits || 0, by: Object.assign(Object.create(null), b?.by || {}) });
    const cnt = (c) => ({ total: +c?.total || 0, by: Object.assign(Object.create(null), c?.by || {}) });
    if (snap.since) this.since = Math.min(this.since, +snap.since);
    this.last = snap.last ?? this.last;
    this.dmgOut = amt(snap.dmgOut); this.dmgIn = amt(snap.dmgIn);
    this.healOut = amt(snap.healOut); this.healIn = amt(snap.healIn);
    this.pets = Object.assign(Object.create(null), snap.pets || {});
    for (const n of Object.keys(this.pets)) this.petNames.add(n);
    this.resists = cnt(snap.resists); this.interrupts = cnt(snap.interrupts);
    this.deathblows = Array.isArray(snap.deathblows) ? snap.deathblows.slice(-MAX_LOG) : [];
    this.deaths = Array.isArray(snap.deaths) ? snap.deaths.slice(-MAX_LOG) : [];
    for (const [n, v] of Object.entries(snap.cooldowns || {})) if (Array.isArray(v)) this.cdUsed[n] = +v[0];
    if (Number.isFinite(+snap.lastActive) && +snap.lastActive > 0) this.lastActive = +snap.lastActive;
    // (snap.paused is deliberately not restored: picking the log again resumes.)
    if (snap.cls && typeof snap.cls.name === 'string') this.cls = { name: snap.cls.name, confidence: +snap.cls.confidence || 0 };
  }

  // [{ t: bucketStartEpochMs, data }] for buckets touched since the last call.
  takeDirtyTicks() {
    const out = [];
    // Zero fields are left out (readers treat missing as 0): smaller rows.
    for (const k of this.dirty) out.push({ t: k, data: Object.fromEntries(Object.entries(this.ticks.get(k)).filter(([, v]) => v)) });
    this.dirty.clear();
    return out.sort((a, b) => a.t - b.t);
  }
  // Put buckets back if an upload failed, so they're retried next time.
  requeueTicks(list) { for (const x of list) this.dirty.add(x.t); }
}
