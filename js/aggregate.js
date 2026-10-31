// aggregate.js — turns the flat event list from parser.js into the stats
// object the UI/charts consume. Also splits the log into discrete
// "encounters" (bursts of activity separated by quiet gaps) so a single
// multi-hour chat.log can be viewed as a set of individual fights, the way
// a live meter would show one fight at a time.
//
// Imports ABILITY_DATABASE (the same bundled, static data file parser.js
// uses for damage/heal gating — see that file's header) for one purpose:
// inferClass() below, which guesses the log's own class from the set of
// abilities it was seen to cast. That guess (stats.meta.inferredClass) is
// then available to ui.js to decide which rows in a by-ability table are
// even plausible for this character to have cast for real — see
// isAbilityGhost in ui.js.

import { ABILITY_DATABASE } from './ability-database.js';
import { NOT_BG_BROADCAST } from './parser.js';

const ENCOUNTER_GAP_MS = 45000; // a 45s silence ends one encounter and starts the next
// A stretch this long with no encounter at all is "idle" -- the time-series
// charts can squeeze these down (see charts.js timelineChart's hideIdle).
export const IDLE_GAP_MS = 60 * 60 * 1000;
const COMBAT_TYPES = new Set([
  'melee_weapon', 'melee_plain', 'melee_extra', 'melee_crit_named', 'melee_crit_generic', 'you_miss', 'you_fumble',
  'ability_hit', 'ability_crit', 'cast', 'cast_begin', 'cast_failed', 'cast_interrupted', 'ablative', 'bladeturn',
  'pet_melee', 'pet_melee_stray', 'pet_hit', 'pet_self_heal', 'pet_summon', 'pet_command', 'pet_lost', 'pet_cast',
  'incoming_dmg', 'incoming_crit', 'incoming_extra',
  'heal_out', 'heal_out_crit', 'heal_in', 'power_transfer',
  'block', 'block_in', 'you_parry', 'you_evade', 'parry_in', 'evade_in',
  'resist_named', 'resist_generic',
  'rp_bonus', 'rp_reason', 'rp_plain',
  'resurrected_by', 'you_died',
  'cc_landed',
  // Deliberately NOT 'kill_feed': "<victim> was just killed by <killer> in
  // <zone>" is a zone/battlegroup-wide broadcast of *anyone's* nearby kill,
  // not something that implies this player was personally still fighting.
  // On a busy populated BG log it fires every 10-30s basically nonstop
  // (observed ~47% of ALL events in one real session), which bridged every
  // gap and merged what should have been dozens of separate fights spread
  // across 2h43m into a single unbroken "encounter". The player's own kills
  // are still correctly pulled out of these same kill_feed events elsewhere
  // (see the kill-reward logic below, which filters by killer name) --
  // this only removes kill_feed as a signal for "is MY fight still going".
]);

export function segmentEncounters(events) {
  const timed = events.filter(e => e.clock != null && COMBAT_TYPES.has(e.type));
  if (!timed.length) return [];
  const segments = [];
  let cur = [timed[0]];
  for (let i = 1; i < timed.length; i++) {
    const gap = timed[i].clock - timed[i - 1].clock;
    if (gap > ENCOUNTER_GAP_MS) {
      segments.push(cur);
      cur = [];
    }
    cur.push(timed[i]);
  }
  if (cur.length) segments.push(cur);
  return segments.map((evs, idx) => ({
    id: idx,
    start: evs[0].clock,
    end: evs[evs.length - 1].clock,
    durationMs: Math.max(1000, evs[evs.length - 1].clock - evs[0].clock),
    events: evs,
  }));
}

// ---------------------------------------------------------------------------
// Checkpoints — reported directly: a /stats block is routinely left over
// from a PREVIOUS character in the same chat.log (the player forgot to
// clear it before switching alts, or just never has), and before this, the
// whole file was blindly treated as one player's session — "Statistics for
// <name> this Session:" only ever decided a DISPLAY name (see buildStats'
// own playerName, which keeps the FIRST one seen and ignores every later
// one), never where one player's data ends and another's begins. A /bg log
// full of other players' combat text made this worse: there was no signal
// at all for "this chunk of the file isn't really about the name shown."
//
// A checkpoint is the span of events from one "Statistics for X this
// Session:" header up to (but not including) the next one anywhere in the
// file, whoever it names — including the common case of just one name
// repeated (re-running /stats for the same character periodically, which
// must keep behaving exactly like today: one continuous session, nothing
// to pick). The FIRST checkpoint also absorbs every event before the
// file's first header at all, so a log that starts mid-fight and only
// types /stats later still attributes that leading play to the right name
// -- matching today's behavior for the common single-header case exactly.
// A file with no header anywhere returns a single checkpoint with
// player: null, covering everything -- today's behavior, unchanged.
//
// playerIndex numbers each checkpoint among that SAME player's own
// checkpoints only (not a global count), so "player1, player1, player1,
// player3, player1" yields player1's checkpoints 1/2/3/4 (4th skips right
// over player3's single checkpoint 1 in between) and player3's checkpoint
// 1 -- exactly the "playerName_checkpointN" scheme asked for, including the
// case where the same name reappears non-contiguously after someone else's
// checkpoint sits in the middle (switched back to that alt later, or just
// ran "/stats player <name>" to peek at a groupmate's totals mid-session --
// the log can't tell those two apart, and doesn't need to: either way, the
// right fix is splitting there, not guessing why).
// ---------------------------------------------------------------------------
export function segmentCheckpoints(events) {
  const headerIdxs = [];
  events.forEach((e, i) => { if (e.type === 'stats_header') headerIdxs.push(i); });

  if (!headerIdxs.length) {
    return [{
      id: 0, player: null, playerIndex: 1,
      startClock: events[0]?.clock ?? null,
      endClock: events[events.length - 1]?.clock ?? null,
      events,
    }];
  }

  const perPlayerCount = new Map();
  const checkpoints = [];
  for (let k = 0; k < headerIdxs.length; k++) {
    const sliceStart = k === 0 ? 0 : headerIdxs[k];
    const sliceEnd = k + 1 < headerIdxs.length ? headerIdxs[k + 1] : events.length;
    const slice = events.slice(sliceStart, sliceEnd);
    const player = events[headerIdxs[k]].player;
    const playerIndex = (perPlayerCount.get(player) || 0) + 1;
    perPlayerCount.set(player, playerIndex);
    checkpoints.push({
      id: k,
      player,
      playerIndex,
      startClock: slice[0]?.clock ?? null,
      endClock: slice[slice.length - 1]?.clock ?? null,
      events: slice,
    });
  }
  return checkpoints;
}

// "Last N distinct messages" per the user's call: a leader often spams the
// same /bg center line several times in a row (or across a whole fight), so
// showing every raw occurrence would just repeat one message instead of
// surfacing what's actually new. We keep insertion order by *last* seen
// occurrence, so a message that gets repeated again later bubbles back to
// the front rather than staying stuck at its first appearance. This is
// exported standalone (not only reached via buildStats) so the header
// ticker can show the latest broadcasts for the whole session regardless
// of which encounter/tab is currently selected.
export function getBgBroadcasts(events) {
  const map = new Map(); // text -> { text, clock, count }
  for (const e of events) {
    if (e.type !== 'bg_broadcast') continue;
    if (NOT_BG_BROADCAST.some(re => re.test(e.text))) continue; // e.g. a resumed session parsed before these were excluded
    const existing = map.get(e.text);
    if (existing) { existing.clock = e.clock; existing.count++; }
    else map.set(e.text, { text: e.text, clock: e.clock, count: 1 });
  }
  return [...map.values()].sort((a, b) => (b.clock ?? 0) - (a.clock ?? 0));
}

// "Last N enemies targeted" -- a rolling window of the last 5 players
// confirmed as real enemies via the game's own examine action (see
// js/parser.js's 'examine_enemy' rule: "You examine X. He is a member of
// an enemy realm!"). Exported standalone (not only reached via buildStats)
// so the header-area card row can show the latest targets for the whole
// session regardless of which encounter/tab is currently selected -- same
// reasoning as getBgBroadcasts just above.
//
// Reported directly against a real log: the NAME in that examine line is
// NOT the player's character name -- it's their RACE ("Frostalf", "Kobold",
// "Dwarf", "Norseman", ...), always the same handful of words repeating
// across totally different people. The real name is in the "You target
// [Name]." line that always fires immediately before it (same timestamp,
// every single occurrence checked), which is exactly how you'd end up
// examining them in the first place. So this tracks the most recent
// 'target' event's name (lastTargetName, carried forward the same way
// e.g. lastMeleeTarget is elsewhere in this file) and attributes each
// confirmed-enemy examine to THAT name, ignoring the examine line's own
// (race) text entirely.
//
// Immediate repeats (examining the same still-targeted enemy again right
// away) update the existing entry's clock instead of adding a duplicate
// card, but the same name CAN reappear as a fresh entry later if something
// else was targeted in between -- this is a recency window, not a unique
// roster, so re-targeting an old enemy legitimately bumps them back to the
// front. Returned oldest-first/newest-last; app.js is the one that flips
// this for display now that new cards enter on the left instead of the
// right, and uses each entry's `seq` (not name+clock, which an immediate
// repeat's clock bump would change without this actually being a new
// entry) to tell a genuinely new card from the same one re-rendering.
//
// `playerName`, when given, also sets `killed: true` on an entry when a
// kill_feed line ("<victim> was just killed by <killer> in <zone>.")
// shows this player as the killer, that victim matching this entry's
// name, at or after this entry's own clock -- i.e. you finished off THIS
// confirmed target, not a same-named enemy you'd killed earlier before
// targeting this (possibly respawned) one.
export function getEnemiesTargeted(events, limit = 5, playerName = null) {
  const list = [];
  let lastTargetName = null;
  let seq = 0;
  for (const e of events) {
    if (e.type === 'target') { lastTargetName = e.target; continue; }
    if (e.type !== 'examine_enemy' || !lastTargetName) continue;
    const name = lastTargetName;
    const last = list[list.length - 1];
    // e.name is the examine line's own text -- the enemy's RACE (see the
    // comment above) -- kept as `race` so the card can be tinted by realm.
    if (last && last.name === name) { last.clock = e.clock; last.race = e.name || last.race; continue; }
    list.push({ name, race: e.name || null, clock: e.clock, seq: seq++, killed: false });
  }
  const trimmed = list.slice(-limit);
  if (playerName) {
    const normPlayer = normalizeName(playerName);
    for (const entry of trimmed) {
      const normName = normalizeName(entry.name);
      entry.killed = events.some(e =>
        e.type === 'kill_feed' &&
        e.clock != null && entry.clock != null && e.clock >= entry.clock &&
        normalizeName(e.killer) === normPlayer &&
        normalizeName(e.victim) === normName
      );
    }
  }
  return trimmed;
}

function emptySourceStat() {
  return { hits: 0, crits: 0, dmg: 0, critDmg: 0, min: null, max: 0, misses: 0, resists: 0 };
}

function bump(map, key, dmg, isCrit) {
  if (!map[key]) map[key] = emptySourceStat();
  const s = map[key];
  if (isCrit) { s.crits++; s.critDmg += dmg; }
  else { s.hits++; }
  s.dmg += dmg;
  if (s.min == null || dmg < s.min) s.min = dmg;
  if (dmg > s.max) s.max = dmg;
  return s;
}

function finalizeSourceMap(map) {
  const out = {};
  for (const [name, s] of Object.entries(map)) {
    const totalHits = s.hits + s.crits;
    out[name] = {
      ...s,
      totalHits,
      avg: totalHits ? Math.round(s.dmg / totalHits) : 0,
      critRate: totalHits ? +(100 * s.crits / totalHits).toFixed(1) : 0,
    };
  }
  return out;
}

function bucketTimeline(points, startClock, endClock, buckets = 40) {
  if (!points.length || endClock <= startClock) return [];
  const span = endClock - startClock;
  const size = Math.max(1000, span / buckets);
  const arr = new Array(Math.ceil(span / size) + 1).fill(0).map((_, i) => ({ t: startClock + i * size, v: 0 }));
  for (const p of points) {
    const idx = Math.min(arr.length - 1, Math.floor((p.clock - startClock) / size));
    if (idx >= 0) arr[idx].v += p.amount;
  }
  return arr;
}

export function buildStats(events, playerNameHint) {
  // ---- pet-name discovery ------------------------------------------------
  const petNames = new Set();
  for (const e of events) {
    if (e.type === 'pet_summon' || e.type === 'pet_command' || e.type === 'pet_melee' ||
        e.type === 'pet_melee_stray' || e.type === 'pet_hit' ||
        e.type === 'pet_self_heal' || e.type === 'pet_lost') {
      petNames.add(e.pet);
    }
  }
  // A caster pet (e.g. a bone warmage) may never melee, get commanded or be
  // seen summoned in the window you're looking at -- it only ever "casts a
  // spell!" and then "Your <pet> hits X". "Your" makes it yours (other
  // people's pets cast in a BG too, but never as "Your ..."), and the same
  // name casting is what tells it apart from one of your own named spells
  // -- also checked against the ability database to be safe.
  const castingPets = new Set(events.filter(e => e.type === 'pet_cast').map(e => e.pet));
  for (const e of events) {
    if (e.type === 'ability_hit' && castingPets.has(e.name) && !ABILITY_DATABASE[e.name]) petNames.add(e.name);
  }

  // ---- /stats snapshots (most recent wins) --------------------------------
  let playerName = playerNameHint || null;
  const statsSnapshots = [];
  // Each 'stats_header' line is a checkpoint boundary (see segmentCheckpoints
  // above) within whatever events were handed to us -- when the Overview
  // chart is showing every checkpoint concatenated (checkpointScope 'all'),
  // these are the seams between them, surfaced to app.js as vertical marker
  // lines so a re-run /stats mid-session (or the start of a genuinely new
  // one) is visible against the activity around it, not just implied by the
  // checkpoint picker. The very first one is still included -- it just lands
  // at (or near) the chart's own left edge, where it's harmless.
  const checkpointStarts = [];
  let curSnap = null;
  for (const e of events) {
    if (e.type === 'stats_header') {
      curSnap = { player: e.player }; statsSnapshots.push(curSnap); playerName = playerName || e.player;
      if (e.clock != null) checkpointStarts.push(e.clock);
    }
    else if (curSnap) {
      if (e.type === 'stats_total_rp') curSnap.totalRP = e.value;
      else if (e.type === 'stats_deathblows') curSnap.deathblows = e.value;
      else if (e.type === 'stats_solo_kills') curSnap.soloKills = e.value;
      else if (e.type === 'stats_deaths') curSnap.deaths = e.value;
      else if (e.type === 'stats_hp_healed') { curSnap.hpHealed = e.hp; curSnap.rpFromHeal = e.rp; }
      else if (e.type === 'stats_rez') curSnap.resurrections = e.value;
      else if (e.type === 'stats_online') curSnap.onlineTime = e.text;
      else if (e.type === 'stats_rp_hour') curSnap.rpPerHour = e.value;
      else if (e.type === 'stats_kpd') curSnap.killsPerDeath = e.value;
      else if (e.type === 'stats_rpk') curSnap.rpPerKill = e.value;
      else if (e.type === 'stats_standing') curSnap.standing = e.value;
    }
  }
  const latestSnapshot = statsSnapshots[statsSnapshots.length - 1] || null;

  // ---- spells cast (for Spell vs Style/Ability tagging) -------------------
  const castNames = new Set();
  // How many times each name was actually cast — castNames above only knows
  // it happened at least once, which is fine for class inference but not
  // enough to show "how much is this ability actually used" for the ones
  // that never land a trackable damage/heal/CC/resist result (a pure buff
  // like "Aura of Deflection") -- see ui.js's renderSpells "no damage/heal"
  // table, which this feeds.
  const castCountByName = {};
  for (const e of events) if (e.type === 'cast') {
    castNames.add(e.name);
    castCountByName[e.name] = (castCountByName[e.name] || 0) + 1;
  }
  // Completed casts that then fizzled ("Your target already has that
  // effect!", "That target is too far away!") -- see parser.js 'cast_failed'.
  const castFailedByName = {};
  for (const e of events) if (e.type === 'cast_failed' && e.spellName) {
    castFailedByName[e.spellName] = (castFailedByName[e.spellName] || 0) + 1;
  }
  // Attempted = every "You begin casting X" plus every instant cast (no
  // begin line of its own). Interrupted = attempts cut off by moving or
  // being hit -- see parser.js 'cast_interrupted'.
  const castAttemptedByName = {};
  const castInterruptedByName = {};
  const bump1 = (m, k) => { m[k] = (m[k] || 0) + 1; };
  for (const e of events) {
    if (e.type === 'cast_begin') bump1(castAttemptedByName, e.name);
    else if (e.type === 'cast' && e.instant) bump1(castAttemptedByName, e.name);
    else if (e.type === 'cast_interrupted' && e.spellName) bump1(castInterruptedByName, e.spellName);
  }

  // Class-inference signal: spell casts plus melee style names. A style
  // name only ever reaches an event as e.styleName tacked onto its
  // melee_weapon hit (see parser.js — "You perform your X!" is itself a
  // setup-only line, never its own event), so it can't be read off
  // castNames above; folding both into one combined set here is what lets
  // a melee class (whose rotation is almost entirely named styles, not
  // spells) get a confident class guess too, not just casters.
  const abilityNamesForClassGuess = new Set(castNames);
  for (const e of events) if (e.styleName) abilityNamesForClassGuess.add(e.styleName);

  const inferredClass = inferClass(abilityNamesForClassGuess);

  // ---- damage out -----------------------------------------------------------
  const dmgOutBySource = {};
  // Same damage-out events, bucketed by the player on the receiving end
  // instead of by spell/style/weapon — the Damage tab's "Damage Out"
  // table (js/ui.js) wants "who did I hit", not "what did I hit with",
  // which already lives on the Spells & Styles tab. Pet damage is
  // deliberately excluded, same as dmgOutBySource itself only ever holds
  // the player's own hits — pets have their own tab.
  const dmgOutByTarget = {};
  const dmgOutPoints = [];
  const petStats = {}; // name -> { dmg, heals, hits, crits, bySource:{} }
  function petBucket(name) {
    if (!petStats[name]) petStats[name] = { dmg: 0, heals: 0, hits: 0, crits: 0, bySource: {}, spellsCast: 0, resists: 0, points: [] }; // points: raw { clock, amount } for the Pets tab's damage-over-time chart
    return petStats[name];
  }

  let totalMeleeHits = 0, totalMeleeCrits = 0, totalMeleeMisses = 0, totalMeleeDmg = 0;
  let pendingWeapon = null;    // last weapon used, for the generic "Melee: <weapon>" bucket
  let lastMeleeLabel = 'Melee'; // bucket key the most recent swing landed in — crit/extra follow-ups reuse it,
                                 // so a style's crit or a spell's "extra damage" line lands on the same row
  let lastMeleeWeapon = null;   // weapon behind that same swing, for crit/extra follow-up lines
  let lastMeleeTarget = null;   // target of that same swing, for the generic crit follow-up line (no target of its own)
  // Whether `lastMeleeLabel` is actually a spell's bucket rather than a
  // real melee one — a melee_plain line with e.spellName set (parser.js
  // attributed it to a recent cast/AE tick/DoT, not a weapon swing) is
  // spell damage wearing a melee-shaped log line, not melee. It's already
  // correctly bucketed by spell name in dmgOutBySource above/below; what
  // this flag guards is totalMelee{Hits,Crits,Dmg} just below, which feed
  // the "Melee crit rate" stat tile and must only ever count genuine
  // swings — a crit/extra follow-up line inherits whichever of the two
  // its preceding hit was, same as it inherits lastMeleeLabel itself.
  let lastMeleeIsSpell = false;
  // A style name (e.g. "Glowing Blade") replaces the weapon in the bucket
  // label, so without this the weapon a melee player actually swung with —
  // which can change fight to fight with a dual-wield/weapon-swap macro —
  // would disappear once any style is involved. Tracked per bucket since the
  // same style can, in principle, be thrown with more than one weapon.
  const dmgOutWeapons = {};
  function trackWeapon(key, weapon) {
    if (!weapon) return;
    if (!dmgOutWeapons[key]) dmgOutWeapons[key] = new Set();
    dmgOutWeapons[key].add(weapon);
  }
  // A style thrown with more than one weapon (common with a dual-wield or
  // weapon-swap macro) must NOT share one bucket across weapons — "Numb with
  // weapon A" and "Numb with weapon B" can hit for very different numbers,
  // and merging them (as an earlier version of this did, joining the weapon
  // names together with "/") hides exactly the comparison a melee player
  // wants. So the style+weapon pair IS the bucket key; this map remembers
  // the bare style name for each composite key so the table/skill-lookup
  // can still show "Numb" as the Name and the weapon in its own column.
  const dmgOutBaseName = {};

  // Pet damage types (Pets tab breakdown):
  //   Melee       "Your <pet> attacks X and hits for N damage!"
  //   Spell       "Your <pet> hits X for N damage!" within PET_SPELL_WINDOW_MS
  //               of "The <pet> casts a spell!" (e.g. a dread lich's nuke)
  //   Proc        that same "hits" line with no cast before it (e.g. the
  //               spirit aegis' AoE proc off its melee swings)
  //   Damage add  "Your <pet> hit X for N damage!" -- singular "hit", the
  //               pet's damage-add buff firing on a swing
  // A crit line goes to whichever type the pet's previous hit was.
  const PET_SPELL_WINDOW_MS = 4000;
  const petLastCastAt = {};
  const petLastLabel = {};

  for (const e of events) {
    switch (e.type) {
      case 'melee_weapon': {
        pendingWeapon = e.weapon;
        lastMeleeWeapon = e.weapon;
        const key = e.styleName ? `${e.styleName} (${e.weapon})` : `Melee: ${e.weapon}`;
        if (e.styleName) dmgOutBaseName[key] = e.styleName;
        lastMeleeLabel = key;
        lastMeleeIsSpell = false; // always a real weapon swing
        lastMeleeTarget = e.target;
        bump(dmgOutBySource, key, e.dmg, false);
        if (e.target) bump(dmgOutByTarget, e.target, e.dmg, false);
        trackWeapon(key, e.weapon);
        totalMeleeHits++; totalMeleeDmg += e.dmg;
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'melee_plain': {
        // No weapon name on this line — it's either a basic swing (no style
        // triggered this tick) or, if a "You cast a <Spell> spell!" happened
        // moments ago (or this is another tick/target of that same cast —
        // see parser.js), that spell's direct-damage result wearing the
        // exact same "You hit <target> for N damage!" shape as a swing.
        const key = e.spellName || (pendingWeapon ? `Melee: ${pendingWeapon}` : 'Melee');
        lastMeleeLabel = key;
        lastMeleeIsSpell = !!e.spellName;
        if (!e.spellName) { lastMeleeWeapon = pendingWeapon; trackWeapon(key, pendingWeapon); }
        else lastMeleeWeapon = null;
        lastMeleeTarget = e.target;
        bump(dmgOutBySource, key, e.dmg, false);
        if (e.target) bump(dmgOutByTarget, e.target, e.dmg, false);
        // Only count toward the melee-specific totals (crit rate tile) when
        // this genuinely was a swing — a spell's damage is already counted
        // under its own name in dmgOutBySource just above, via `key`; double
        // counting it here as melee too was the bug a user reported after
        // seeing a "Melee: 15k" bucket in a log with no weapon swing in it
        // at all (totalMeleeDmg was silently summing in 100% of this
        // character's spell damage on top of its own correct spell-bucket
        // total, since this line ran unconditionally for every melee_plain
        // event regardless of e.spellName).
        if (!e.spellName) { totalMeleeHits++; totalMeleeDmg += e.dmg; }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'melee_extra': {
        bump(dmgOutBySource, lastMeleeLabel, e.dmg, false);
        if (e.target) bump(dmgOutByTarget, e.target, e.dmg, false);
        lastMeleeTarget = e.target;
        trackWeapon(lastMeleeLabel, lastMeleeWeapon);
        if (!lastMeleeIsSpell) totalMeleeDmg += e.dmg;
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'melee_crit_named':
      case 'melee_crit_generic': {
        bump(dmgOutBySource, lastMeleeLabel, e.dmg, true);
        const critTarget = e.target || lastMeleeTarget;
        if (critTarget) { bump(dmgOutByTarget, critTarget, e.dmg, true); lastMeleeTarget = critTarget; }
        trackWeapon(lastMeleeLabel, lastMeleeWeapon);
        if (!lastMeleeIsSpell) { totalMeleeCrits++; totalMeleeDmg += e.dmg; }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'you_miss': totalMeleeMisses++; break;

      case 'ability_hit': {
        if (petNames.has(e.name)) {
          // "Your <pet> hits <target> for N damage!" — grammatically
          // identical to a player's own named-ability line (hence matching
          // the same `ability_hit` rule), but reported directly: for a pet
          // this phrasing is the pet's own spell/proc damage, distinct from
          // its melee swing ("Your <pet> attacks <target> and hits for N
          // damage!", pet_melee below, bucketed as 'Melee'). A concrete
          // example: "spirit aegis" has an AE proc that fires off its melee
          // hits and can land on several nearby targets in the same moment,
          // logged as separate "hits <target> for N" lines per target —
          // real melee damage, by contrast, never gets this phrasing.
          // Bucketing these under the pet's own name (the old behavior)
          // produced a confusing, redundant-looking row ("spirit aegis"
          // nested inside "spirit aegis"'s own breakdown) that also gave no
          // hint this was a different kind of damage than the Melee row
          // right next to it. 'Proc' matches the label pet_hit already uses
          // for the exact same "hit (singular) ... for N" grammar below —
          // both describe a pet's own spell-like damage, not its melee
          // attack, so they share one label rather than inventing a second
          // name for the identical concept.
          const p = petBucket(e.name); p.dmg += e.dmg; p.points.push({ clock: e.clock, amount: e.dmg }); p.hits++;
          const castAt = petLastCastAt[e.name];
          const label = castAt != null && e.clock != null && e.clock - castAt <= PET_SPELL_WINDOW_MS ? 'Spell' : 'Proc';
          petLastLabel[e.name] = label;
          bump(p.bySource, label, e.dmg, false);
        } else {
          bump(dmgOutBySource, e.name, e.dmg, false);
          if (e.target) bump(dmgOutByTarget, e.target, e.dmg, false);
        }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'ability_crit': {
        if (petNames.has(e.name)) {
          // Same reasoning as ability_hit above, plus one more: this text
          // shape ("Your X critically hits Y for an additional N damage!")
          // is also exactly what a pet's own melee-swing crit looks like —
          // there used to be a separate, earlier-matching 'pet_melee_crit'
          // rule for that in parser.js, which this absorbed (see its own
          // comment on why). Bucketed as 'Melee' rather than 'Proc' to
          // match that removed case exactly, not because this line is
          // actually distinguishable from a pet's proc-spell crit — it
          // isn't, in the log text itself.
          const p = petBucket(e.name); p.dmg += e.dmg; p.points.push({ clock: e.clock, amount: e.dmg }); p.crits++;
          bump(p.bySource, petLastLabel[e.name] || 'Melee', e.dmg, true);
        } else {
          bump(dmgOutBySource, e.name, e.dmg, true);
          if (e.target) bump(dmgOutByTarget, e.target, e.dmg, true);
        }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }

      case 'pet_melee': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.points.push({ clock: e.clock, amount: e.dmg }); p.hits++;
        petLastLabel[e.pet] = 'Melee';
        bump(p.bySource, 'Melee', e.dmg, false);
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_melee_stray': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.points.push({ clock: e.clock, amount: e.dmg }); p.hits++;
        petLastLabel[e.pet] = 'Melee (stray)';
        bump(p.bySource, 'Melee (stray)', e.dmg, false);
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_hit': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.points.push({ clock: e.clock, amount: e.dmg }); p.hits++;
        bump(p.bySource, 'Damage add', e.dmg, false); // singular "hit" -- the damage-add buff, see above
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_self_heal': {
        const p = petBucket(e.pet); p.heals += e.amount;
        break;
      }
      case 'pet_cast': {
        // Only count this toward a pet we've independently confirmed is
        // yours (via a summon/melee/self-heal line) — a BG log is full of
        // other players' pets casting the same generic "The X casts a
        // spell!" text, and we don't want those miscounted as yours.
        if (e.clock != null) petLastCastAt[e.pet] = e.clock;
        if (petNames.has(e.pet)) petBucket(e.pet).spellsCast++;
        break;
      }
      default: break;
    }
  }

  // ---- damage in --------------------------------------------------------------
  const dmgInBySource = {};
  const dmgInPoints = [];
  const normAttacker = (name) => (name === 'Damage' ? 'Damage over time (unattributed)' : name);
  for (const e of events) {
    if (e.type === 'incoming_dmg' || e.type === 'incoming_extra') {
      bump(dmgInBySource, normAttacker(e.attacker), e.dmg, false);
      dmgInPoints.push({ clock: e.clock, amount: e.dmg });
    } else if (e.type === 'incoming_crit') {
      bump(dmgInBySource, normAttacker(e.attacker), e.dmg, true);
      dmgInPoints.push({ clock: e.clock, amount: e.dmg });
    }
  }

  // ---- healing out / in --------------------------------------------------------
  // "You heal yourself for N hit points." has no player name to attach at
  // parse time, so js/parser.js normalizes its target to the placeholder
  // "You" (see heal_out there). Swap that placeholder for the real player
  // name wherever we already know it (resolved above, from playerNameHint
  // or a /stats header) so the healing-done-by-target table shows the
  // player's actual name instead of the literal word "You" -- and, just as
  // importantly, so it becomes a real Eden Herald link like every other
  // name in that table instead of a dead link to .../herald?...k=You.
  // Left as the "You" placeholder only in the rare case we never learn who
  // this is (no playerNameHint and no /stats block anywhere in this log).
  const healTargetKey = name => (name === 'You' && playerName) ? playerName : name;
  const healOutByTarget = {};
  const healOutBySpell = {};
  const healOutPoints = [];
  let healOutTotal = 0, healOutHits = 0, healOutCrits = 0;
  // A heal crit ("Your heal criticals for an extra N amount of hit
  // points!") is NOT extra healing on top of the "You heal X for N" line
  // before it: that line already reports what actually landed, crit
  // included, capped at the target's missing health. The crit line is the
  // raw bonus, mostly overheal -- in a real log a 98 crit follows "You heal
  // Tina for 22", and spreadheal crits of 1,000-1,900 come with no heal
  // line at all. Adding it double-counted (~7% of a healer's total) and
  // counted each crit as an extra heal. So a crit now only flips the heal
  // it follows from a normal hit to a crit -- amounts untouched.
  let lastHeal = null; // { targetKey, spellKey } of the previous heal_out
  const flipToCrit = (map, key) => {
    const s = map[key];
    if (s && s.hits > 0) { s.hits--; s.crits++; }
  };
  for (const e of events) {
    if (e.type === 'heal_out') {
      const targetKey = healTargetKey(e.target);
      const spellKey = e.spellName || 'Heal (spell not identified)';
      bump(healOutByTarget, targetKey, e.amount, false);
      bump(healOutBySpell, spellKey, e.amount, false);
      healOutTotal += e.amount; healOutHits++;
      healOutPoints.push({ clock: e.clock, amount: e.amount });
      lastHeal = { targetKey, spellKey, clock: e.clock };
    } else if (e.type === 'heal_out_crit') {
      // Only the heal logged in the same second -- a spreadheal crit often
      // has no heal line of its own and mustn't flip some earlier heal.
      if (lastHeal && e.clock != null && lastHeal.clock != null && e.clock - lastHeal.clock <= 1000) {
        flipToCrit(healOutByTarget, lastHeal.targetKey);
        flipToCrit(healOutBySpell, lastHeal.spellKey);
        healOutHits--; healOutCrits++;
        lastHeal = null; // one crit per heal
      }
    }
  }
  // ---- ability timeline (Spells & Styles dot chart) ----------------------
  // One entry per thing an ability or style actually DID: a damage hit, a
  // style hit, a heal, a confirmed CC/debuff landing -- each with the target
  // the log names. Attribution is the same as the tables above (parser.js's
  // spellName/styleName/sourceName), so the dots and the table agree.
  // Crit / "extra damage" follow-up lines are folded into the hit they
  // follow rather than drawn as dots of their own. Plain unstyled weapon
  // swings aren't an ability, so they're left out.
  const abilityTimeline = [];
  {
    let last = null; // most recent dot, for crit/extra follow-ups
    const add = (d) => { abilityTimeline.push(d); last = d; };
    for (const e of events) {
      if (e.clock == null) continue;
      switch (e.type) {
        case 'melee_weapon':
          last = null;
          if (e.styleName) add({ clock: e.clock, name: e.styleName, target: e.target || null, amount: e.dmg, kind: 'style', weapon: e.weapon });
          break;
        case 'melee_plain':
          last = null;
          if (e.spellName) add({ clock: e.clock, name: e.spellName, target: e.target || null, amount: e.dmg, kind: 'damage' });
          break;
        case 'ability_hit':
          last = null;
          if (!petNames.has(e.name)) add({ clock: e.clock, name: e.name, target: e.target || null, amount: e.dmg, kind: 'damage' });
          break;
        case 'melee_extra':
          if (last && last.amount != null) last.amount += e.dmg;
          break;
        case 'melee_crit_named':
        case 'melee_crit_generic':
          if (last && last.kind !== 'heal') last.crit = (last.crit || 0) + e.dmg;
          break;
        case 'ability_crit':
          if (last && last.name === e.name) last.crit = (last.crit || 0) + e.dmg;
          break;
        case 'heal_out':
          add({ clock: e.clock, name: e.spellName || 'Heal (spell not identified)', target: e.target ? healTargetKey(e.target) : null, amount: e.amount, kind: 'heal' });
          break;
        case 'heal_out_crit':
          // already included in the heal's own amount -- see healOut above
          if (last && last.kind === 'heal') last.crit = true;
          break;
        case 'cc_landed':
          if (e.sourceName && !e.isPet) add({ clock: e.clock, name: e.sourceName, target: e.target || null, kind: 'effect', effect: e.effect });
          break;
        default: break;
      }
    }

    // Spells that land silently (many debuffs, most buffs) leave no line of
    // their own -- for those, a completed cast that wasn't resisted and
    // didn't fizzle counts as landed, same rule as the Landed column. The
    // log doesn't say who it landed on, so no target.
    const dotsByName = new Map();
    for (const d of abilityTimeline) (dotsByName.get(d.name) || dotsByName.set(d.name, []).get(d.name)).push(d.clock);
    const missByName = new Map(); // resist / fizzle clocks per spell
    for (const e of events) {
      const name = ((e.type === 'resist_generic' || e.type === 'resist_named') && !e.isPet) ? e.source
        : e.type === 'cast_failed' ? e.spellName : null;
      if (name && e.clock != null) (missByName.get(name) || missByName.set(name, []).get(name)).push(e.clock);
    }
    const casts = events.filter(e => e.type === 'cast' && e.clock != null);
    const nextSame = new Array(casts.length).fill(null);
    const seen = new Map();
    for (let i = casts.length - 1; i >= 0; i--) { nextSame[i] = seen.get(casts[i].name) || null; seen.set(casts[i].name, casts[i]); }
    casts.forEach((e, i) => {
      // A cast's results arrive before the next cast of the same spell (or
      // within 4s / 6s for a travelling bolt, whichever is sooner). Any
      // resist or fizzle in that window means it didn't land -- an AoE mez
      // can log several resists for one cast, so they're not "used up" one
      // per cast.
      const next = nextSame[i];
      const end = Math.min(e.clock + (ABILITY_DATABASE[e.name]?.isBolt ? 6000 : 4000), next ? next.clock - 1 : Infinity);
      const inWin = (t) => t >= e.clock && t <= end;
      if ((dotsByName.get(e.name) || []).some(inWin)) return;
      if ((missByName.get(e.name) || []).some(inWin)) return;
      abilityTimeline.push({ clock: e.clock, name: e.name, target: null, kind: 'cast' });
    });
    abilityTimeline.sort((a, b) => a.clock - b.clock);
  }

  const healInBySource = {};
  const healInPoints = [];
  let healInTotal = 0;
  for (const e of events) {
    if (e.type === 'heal_in') {
      bump(healInBySource, e.healer, e.amount, false);
      healInTotal += e.amount;
      healInPoints.push({ clock: e.clock, amount: e.amount });
    }
  }

  // ---- power transfer (e.g. Occultist's "Gift of Arawn") ------------------
  // Same bump()-produced shape as healOutBySpell/byTarget above (never a
  // crit — power transfer has no crit variant in the real log this was
  // confirmed against), deliberately so ui.js's renderSpells can merge this
  // in exactly the same way it already merges healOut.bySpell, rather than
  // needing its own bespoke handling.
  const powerOutByTarget = {};
  const powerOutBySpell = {};
  let powerOutTotal = 0;
  for (const e of events) {
    if (e.type === 'power_transfer') {
      bump(powerOutByTarget, e.target, e.amount, false);
      bump(powerOutBySpell, e.spellName || 'Power transfer (spell not identified)', e.amount, false);
      powerOutTotal += e.amount;
    }
  }

  // ---- defense (your mitigation of incoming attacks) ---------------------------
  let blocks = 0, youParries = 0, youEvades = 0, enemyParriedYou = 0, enemyEvadedYou = 0, enemyBlockedYou = 0;
  let resistCount = 0;
  const resistBySource = {};
  let ablativeHits = 0, ablativeAbsorbed = 0, bladeturns = 0;
  // A CC/debuff application (e.g. a pet's root, or your own mez) with no
  // damage number of its own — tracked separately from resistBySource so a
  // spell's "landed vs resisted" rate reflects real attempts even when it
  // never shows up in the damage table at all.
  const ccLandedBySource = {};
  for (const e of events) {
    if (e.type === 'block') blocks++;
    else if (e.type === 'you_parry') youParries++;
    else if (e.type === 'you_evade') youEvades++;
    else if (e.type === 'parry_in') enemyParriedYou++;
    else if (e.type === 'evade_in') enemyEvadedYou++;
    else if (e.type === 'block_in') enemyBlockedYou++;
    else if (e.type === 'ablative') { ablativeHits++; ablativeAbsorbed += e.amount; }
    else if (e.type === 'bladeturn') bladeturns++;
    else if (e.type === 'resist_generic' || e.type === 'resist_named') {
      resistCount++;
      const key = e.source || 'Unknown';
      resistBySource[key] = (resistBySource[key] || 0) + 1;
    } else if (e.type === 'cc_landed' && e.sourceName) {
      ccLandedBySource[e.sourceName] = (ccLandedBySource[e.sourceName] || 0) + 1;
    }
  }
  const incomingHitsLanded = Object.values(dmgInBySource).reduce((a, s) => a + s.hits + s.crits, 0);
  // A bladeturned blow is an attack that would otherwise have landed, so it
  // counts as an attempt (and as mitigated) alongside blocks/parries/evades.
  const totalIncomingAttackAttempts = blocks + youParries + youEvades + bladeturns + incomingHitsLanded;

  // ---- realm points --------------------------------------------------------------
  // The game logs a realm-rank bonus as its OWN line ("You get an additional N
  // realm points due to your realm rank!"), immediately followed by a bare total
  // line ("You get N realm points!") whose amount already includes that bonus
  // (base + bonus) -- it is NOT a third, separate award on top of it. Summing
  // rp_bonus in addition to rp_plain/rp_reason therefore double-counts the bonus
  // portion of every bonus-eligible award. Verified against a real log's own
  // in-game /stats "Total RP" snapshots: summing all three event types overshot
  // the true RP gained by exactly the sum of the rp_bonus amounts; leaving
  // rp_bonus out of the total lines up with the snapshot delta exactly.
  // rpBonusTotal is still tracked (for the "Bonus RP" stat tile) but must stay
  // out of both the grand total and the by-reason breakdown.
  let rpTotal = 0, rpBonusTotal = 0;
  const rpByReason = {};
  const rpPoints = [];
  const rpPointsByReason = {}; // same breakdown as rpByReason, but as a per-source timeline instead of a single total
  // Bonus-only breakdown, by the free-text reason the "additional N realm
  // points due to X!" line names: "your realm rank", "your guild's buff",
  // "your buff", and whatever else the game logs this way (never a fixed
  // list — any new reason text works here automatically, it just needs a
  // first log that has it to show up). Reported directly: with three
  // different bonus sources stacking on one kill, the single combined
  // "Bonus RP (realm rank)" stat tile (named for the only source anyone had
  // seen before) was blending a guild buff and a personal buff in under a
  // label that implied it was realm-rank-only, with no way to tell how much
  // of the total bonus came from which source. Kept strictly separate from
  // rpByReason/rpTotal above -- these amounts are already folded into their
  // paired rp_plain/rp_reason total (see the comment above), so adding them
  // here too is purely an additional view for display, never summed into
  // the grand total or the main by-reason breakdown.
  const rpBonusByReason = {};
  for (const e of events) {
    if (e.type === 'rp_plain' || e.type === 'rp_reason') {
      rpTotal += e.amount;
      const key = e.reason || 'Kill / assist';
      rpByReason[key] = (rpByReason[key] || 0) + e.amount;
      rpPoints.push({ clock: e.clock, amount: e.amount });
      (rpPointsByReason[key] ||= []).push({ clock: e.clock, amount: e.amount });
    } else if (e.type === 'rp_bonus') {
      rpBonusTotal += e.amount;
      const bonusKey = e.reason || 'Unknown bonus';
      rpBonusByReason[bonusKey] = (rpBonusByReason[bonusKey] || 0) + e.amount;
    }
  }

  // ---- kills / deaths ------------------------------------------------------------
  let deathblows = 0, deaths = 0, resurrectedCount = 0;
  const killVictims = [];
  // Your own deaths, timestamped -- the mirror image of deathblowLog just
  // below (that one's kill_feed with YOU as killer; this is kill_feed with
  // YOU as victim). Feeds the Overview chart's red "Death" marker lines,
  // same reasoning as that chart's existing deathblow markers: a death is a
  // discrete "it happened" moment worth correlating against the
  // damage/heal/RP lines around it, not a quantity with its own line.
  const deathLog = [];
  for (const e of events) {
    if (e.type === 'kill_feed' && playerName) {
      if (normalizeName(e.killer) === normalizeName(playerName)) { deathblows++; killVictims.push(e.victim); }
      if (normalizeName(e.victim) === normalizeName(playerName)) { deaths++; deathLog.push({ killer: e.killer, zone: e.zone, clock: e.clock }); }
    }
    if (e.type === 'resurrected_by') resurrectedCount++;
  }

  // ---- deathblow log (who you killed, and the RP that came from it) --------------
  // The kill feed ("X was just killed by you in Zone.") never names the RP amount
  // itself — that's a separate "You get N realm points!" line (plus an optional
  // guild-buff bonus line) immediately after it. We attribute the nearest
  // not-yet-claimed RP-gain line(s) within a short window to each deathblow; a
  // kill with no RP line nearby (rare, but zerg combat logs can interleave
  // unpredictably) is still listed, just with an unknown RP amount rather than a
  // guessed one.
  const DEATHBLOW_RP_WINDOW_MS = 2500;
  const deathblowLog = [];
  if (playerName) {
    const claimedRp = new Set();
    for (let i = 0; i < events.length; i++) {
      const e = events[i];
      if (e.type !== 'kill_feed' || normalizeName(e.killer) !== normalizeName(playerName)) continue;
      let rp = 0, rpKnown = false;
      for (let j = i + 1; j < events.length; j++) {
        const e2 = events[j];
        if (e2.clock == null || e.clock == null || e2.clock - e.clock > DEATHBLOW_RP_WINDOW_MS) break;
        if (e2.type === 'kill_feed') break; // the next kill's own reward starts here
        // Only rp_plain/rp_reason, not rp_bonus -- see the realm-points total
        // above for why: rp_bonus's amount is already folded into its paired
        // rp_plain total, so adding it again here would double-count it in
        // each deathblow's listed RP too.
        if ((e2.type === 'rp_plain' || e2.type === 'rp_reason') && !claimedRp.has(j)) {
          rp += e2.amount;
          rpKnown = true;
          claimedRp.add(j);
        } else if (e2.type === 'rp_bonus') {
          claimedRp.add(j);
        }
      }
      deathblowLog.push({ victim: e.victim, zone: e.zone, clock: e.clock, rp, rpKnown });
    }
  }
  const deathblowRpTotal = deathblowLog.reduce((a, d) => a + (d.rpKnown ? d.rp : 0), 0);

  // ---- /bg center broadcasts ----------------------------------------------
  const bgBroadcasts = getBgBroadcasts(events);

  // ---- spans / DPS/HPS -----------------------------------------------------------
  // Reported directly: the Overview graph (and every other timeline, since
  // they all share this one startClock/endClock) was showing "hours worth
  // of no data" with the x-axis starting at what looked like midnight
  // instead of the log's real first moment of play. Root cause: this used
  // to span EVERY event with a clock at all, combat or not — a raw chat.log
  // routinely carries plenty of timestamped-but-not-yours noise before (and
  // between) real play: zone-wide kill broadcasts, other players' chatter,
  // login/zone-change lines, a /stats header left over from checking a
  // previous session, etc. Any one of those sitting well before the
  // player's own first real action silently dragged the whole chart's start
  // back to it, and a long idle stretch between two real play sessions in
  // the same file (or before the first one even begins) in a 40-bucket
  // chart reads as a long flat nothing at the start rather than a graph
  // that begins where activity actually does. Restricting the span to
  // COMBAT_TYPES — the exact same "is this player's own real activity"
  // filter segmentEncounters already uses just above — fixes both: the
  // chart now starts at the first thing the player actually did, and any
  // leading/trailing idle noise no longer counts toward the plotted range.
  // Falls back to every event's clock only when there's no combat activity
  // at all (an empty/non-combat log), so a real span is still shown instead
  // of nothing.
  const combatClocks = events.filter(e => COMBAT_TYPES.has(e.type)).map(e => e.clock).filter(x => x != null);
  const clocks = combatClocks.length ? combatClocks : events.map(e => e.clock).filter(x => x != null);
  const startClock = clocks.length ? Math.min(...clocks) : null;
  const endClock = clocks.length ? Math.max(...clocks) : null;
  const durationMs = (startClock != null && endClock != null) ? Math.max(1000, endClock - startClock) : 1000;
  const durationSec = durationMs / 1000;

  // User tags ("@tag koth" typed in chat -- see parser.js USER_TAG_RE):
  // only the viewed character's own, so a groupmate's tag doesn't mark your
  // charts. "You say, ..." is always yours; with no known player name, all
  // tags are kept.
  const userTags = events
    .filter(e => e.type === 'user_tag' && e.clock != null)
    .filter(e => !playerName || !e.speaker || /^you$/i.test(e.speaker) || normalizeName(e.speaker) === normalizeName(playerName))
    .map(e => ({ clock: e.clock, text: e.text, speaker: e.speaker }));

  // Idle gaps: the space between two encounters when it's IDLE_GAP_MS or
  // longer -- you logged off, went AFK, etc. Charts can collapse these.
  const idleGaps = [];
  const encs = segmentEncounters(events);
  for (let i = 1; i < encs.length; i++) {
    if (encs[i].start - encs[i - 1].end >= IDLE_GAP_MS) idleGaps.push({ start: encs[i - 1].end, end: encs[i].start });
  }

  const totalDmgOut = sumVals(dmgOutBySource) + sumPetDmg(petStats);
  const totalDmgIn = sumVals(dmgInBySource);

  const dmgOutBySourceFinal = finalizeSourceMap(dmgOutBySource);
  for (const [key, weapons] of Object.entries(dmgOutWeapons)) {
    if (dmgOutBySourceFinal[key]) dmgOutBySourceFinal[key].weapon = Array.from(weapons).join(' / ');
  }
  for (const [key, baseName] of Object.entries(dmgOutBaseName)) {
    if (dmgOutBySourceFinal[key]) dmgOutBySourceFinal[key].displayName = baseName;
  }
  // Fold resists (and CC/debuff landings, which carry no damage number of
  // their own) into the per-ability table so "how often does this spell or
  // style get resisted" sits right next to its hits/crits — including an
  // ability that landed zero damage hits because it's pure CC, which would
  // otherwise vanish from the table entirely. Pet-sourced ones are kept on
  // the Pets tab instead (via petStats below), not mixed in here.
  for (const [key, count] of Object.entries(resistBySource)) {
    if (petNames.has(key)) continue;
    if (!dmgOutBySourceFinal[key]) dmgOutBySourceFinal[key] = { ...emptySourceStat(), totalHits: 0, avg: 0, critRate: 0 };
    dmgOutBySourceFinal[key].resists = count;
  }
  for (const [key, count] of Object.entries(ccLandedBySource)) {
    if (petNames.has(key)) continue;
    if (!dmgOutBySourceFinal[key]) dmgOutBySourceFinal[key] = { ...emptySourceStat(), totalHits: 0, avg: 0, critRate: 0 };
    dmgOutBySourceFinal[key].ccLanded = count;
  }
  // Resist %. Many debuffs (e.g. Sorcerer's "Visions of the Elements")
  // print NOTHING when they land -- only a resist or a failure is ever
  // logged -- so counting attempts as landed + resisted made every such
  // spell show 100% resisted. For no-damage spells the attempts are instead
  // the casts that actually went off (casts minus fizzles), or the logged
  // landed + resisted count if that's higher (an AoE mez/root reports one
  // line per target hit). `landed` is then everything not resisted.
  for (const [key, entry] of Object.entries(dmgOutBySourceFinal)) {
    const logged = entry.totalHits + (entry.ccLanded || 0) + (entry.resists || 0);
    let attempts = logged;
    if (!entry.totalHits && castCountByName[key]) {
      attempts = Math.max(logged, castCountByName[key] - (castFailedByName[key] || 0));
      entry.landed = attempts - (entry.resists || 0);
    }
    entry.resistRate = attempts ? +(100 * (entry.resists || 0) / attempts).toFixed(1) : 0;
  }

  // Same idea for pets: a pet's cast landing or being resisted is tracked
  // per pet rather than mixed into the player's own ability table.
  for (const [pet, count] of Object.entries(resistBySource)) {
    if (petStats[pet]) petStats[pet].resists = count;
  }
  for (const [pet, count] of Object.entries(ccLandedBySource)) {
    if (petStats[pet]) petStats[pet].ccLanded = count;
  }
  for (const p of Object.values(petStats)) {
    // Deliberately excludes p.hits/p.crits here: those are the pet's melee
    // swings, a completely different ability from whatever it's casting, so
    // mixing them in would dilute the spell's own resist rate. Landed/
    // resisted are the only two outcomes a pet's spell-cast line has.
    const attempts = (p.ccLanded || 0) + (p.resists || 0);
    p.resistRate = attempts ? +(100 * (p.resists || 0) / attempts).toFixed(1) : 0;
  }

  return {
    meta: {
      playerName, startClock, endClock, durationMs, idleGaps, userTags,
      statsSnapshots, latestSnapshot, checkpointStarts,
      petNames: Array.from(petNames),
      inferredClass,
    },
    damageOut: {
      total: totalDmgOut,
      bySource: dmgOutBySourceFinal,
      byTarget: finalizeSourceMap(dmgOutByTarget),
      dps: durationSec ? +(totalDmgOut / durationSec).toFixed(1) : 0,
      melee: { hits: totalMeleeHits, crits: totalMeleeCrits, misses: totalMeleeMisses, dmg: totalMeleeDmg,
        critRate: (totalMeleeHits + totalMeleeCrits) ? +(100 * totalMeleeCrits / (totalMeleeHits + totalMeleeCrits)).toFixed(1) : 0 },
      timeline: bucketTimeline(dmgOutPoints, startClock, endClock),
      points: dmgOutPoints, // raw { clock, amount }, for the zoomable charts
    },
    damageIn: {
      total: totalDmgIn,
      bySource: finalizeSourceMap(dmgInBySource),
      dtps: durationSec ? +(totalDmgIn / durationSec).toFixed(1) : 0,
      timeline: bucketTimeline(dmgInPoints, startClock, endClock),
      points: dmgInPoints,
    },
    healOut: {
      total: healOutTotal,
      hits: healOutHits, crits: healOutCrits,
      critRate: (healOutHits + healOutCrits) ? +(100 * healOutCrits / (healOutHits + healOutCrits)).toFixed(1) : 0,
      byTarget: finalizeSourceMap(healOutByTarget),
      bySpell: finalizeSourceMap(healOutBySpell),
      hps: durationSec ? +(healOutTotal / durationSec).toFixed(1) : 0,
      timeline: bucketTimeline(healOutPoints, startClock, endClock),
      points: healOutPoints,
    },
    healIn: {
      total: healInTotal,
      bySource: finalizeSourceMap(healInBySource),
      timeline: bucketTimeline(healInPoints, startClock, endClock),
    },
    powerOut: {
      total: powerOutTotal,
      byTarget: finalizeSourceMap(powerOutByTarget),
      bySpell: finalizeSourceMap(powerOutBySpell),
    },
    pets: {
      byPet: Object.fromEntries(Object.entries(petStats).map(([k, v]) => [k, { ...v, bySource: finalizeSourceMap(v.bySource) }])),
      combinedDmg: sumPetDmg(petStats),
      combinedHeals: Object.values(petStats).reduce((a, p) => a + p.heals, 0),
    },
    defense: {
      blocks, youParries, youEvades, enemyParriedYou, enemyEvadedYou, enemyBlockedYou, resistCount,
      ablativeHits, ablativeAbsorbed, bladeturns,
      bladeturnRate: pct(bladeturns, totalIncomingAttackAttempts),
      resistBySource,
      totalIncomingAttackAttempts,
      blockRate: pct(blocks, totalIncomingAttackAttempts),
      parryRate: pct(youParries, totalIncomingAttackAttempts),
      evadeRate: pct(youEvades, totalIncomingAttackAttempts),
    },
    realmPoints: {
      total: rpTotal, bonusTotal: rpBonusTotal, byReason: rpByReason, bonusByReason: rpBonusByReason,
      perHour: durationSec ? +(rpTotal / (durationSec / 3600)).toFixed(0) : 0,
      timeline: bucketTimeline(rpPoints, startClock, endClock),
      points: rpPoints,
      pointsByReason: rpPointsByReason,
      // Same bucketing (same startClock/endClock/bucket count) as `timeline`
      // above, just split out per reason -- so each reason's series lines up
      // on the same x-axis buckets as every other, which a stacked chart
      // depends on to add up to the right total at every point in time.
      timelineByReason: Object.fromEntries(
        Object.entries(rpPointsByReason).map(([reason, pts]) => [reason, bucketTimeline(pts, startClock, endClock)])
      ),
    },
    kills: { deathblows, deaths, resurrectedCount, killVictims, deathblowLog, deathblowRpTotal, deathLog },
    spellsCast: Array.from(castNames),
    abilityTimeline,
    castCountByName,
    castFailedByName,
    castAttemptedByName,
    castInterruptedByName,
    bgBroadcasts,
  };
}

function sumVals(map) { return Object.values(map).reduce((a, s) => a + s.dmg, 0); }
function sumPetDmg(petStats) { return Object.values(petStats).reduce((a, p) => a + p.dmg, 0); }
function pct(n, total) { return total ? +(100 * n / total).toFixed(1) : 0; }

// Guess which single class this log's player plays, from the set of
// ability names it was observed to cast. Each cast name votes for every
// class ABILITY_DATABASE says trains it, weighted 1/(number of classes that
// train it) — a name trained by only one class (the overwhelming majority
// of a real rotation: nukes, debuffs, pet summons, class-specific buffs)
// casts a full vote for that class, while a name shared across several
// classes (baseline/common realm abilities, common group buffs) is diluted
// across all of them so it can't single-handedly tip the result. A name
// ABILITY_DATABASE doesn't recognize at all (not yet in this build's
// charplan export, or a weapon-proc/item spell with no class of its own)
// contributes no vote either way — same permissive-by-default rule as the
// damage/heal gating in parser.js: a gap in the data can only ever fail to
// produce a guess, never produce a wrong one.
//
// Returns { name, score, confidence } when the result clears both
// thresholds below, else null — "we don't confidently know" is the honest
// and safe answer the rest of the app (ui.js's isAbilityGhost) treats as
// "don't filter anything on this". The thresholds are deliberately
// conservative tunables, not a precise statistical claim:
//   MIN_SCORE   — the winning class needs at least this much weighted
//                 evidence (~2 fully class-exclusive abilities' worth)
//                 before a guess is even considered.
//   MIN_MARGIN  — the winner must lead the runner-up by at least this
//                 fraction of its own score, so two classes that trained
//                 similar amounts of what was cast (e.g. a log with mostly
//                 shared realm abilities and little else) correctly yields
//                 "unknown" instead of an arbitrary tie-break.
const MIN_CLASS_SCORE = 2;
const MIN_CLASS_MARGIN = 0.4;

export function inferClass(castNames) {
  const scores = {};
  for (const name of castNames) {
    const info = ABILITY_DATABASE[name];
    if (!info || !info.classes || !info.classes.length) continue;
    const weight = 1 / info.classes.length;
    for (const cls of info.classes) scores[cls] = (scores[cls] || 0) + weight;
  }
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return null;
  const [name, score] = ranked[0];
  const runnerUp = ranked[1] ? ranked[1][1] : 0;
  const confidence = +((score - runnerUp) / score).toFixed(3);
  if (score < MIN_CLASS_SCORE || confidence < MIN_CLASS_MARGIN) return null;
  return { name, score: +score.toFixed(3), confidence };
}
function normalizeName(s) { return (s || '').trim().toLowerCase(); }
