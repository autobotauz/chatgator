// aggregate.js — turns the flat event list from parser.js into the stats
// object the UI/charts consume. Also splits the log into discrete
// "encounters" (bursts of activity separated by quiet gaps) so a single
// multi-hour chat.log can be viewed as a set of individual fights, the way
// a live meter would show one fight at a time.

const ENCOUNTER_GAP_MS = 45000; // a 45s silence ends one encounter and starts the next
const COMBAT_TYPES = new Set([
  'melee_weapon', 'melee_plain', 'melee_extra', 'melee_crit_named', 'melee_crit_generic', 'you_miss', 'you_fumble',
  'ability_hit', 'ability_crit', 'cast', 'cast_begin',
  'pet_melee', 'pet_melee_stray', 'pet_melee_crit', 'pet_hit', 'pet_self_heal', 'pet_summon', 'pet_command', 'pet_lost', 'pet_cast',
  'incoming_dmg', 'incoming_crit', 'incoming_extra',
  'heal_out', 'heal_out_crit', 'heal_in',
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
    const existing = map.get(e.text);
    if (existing) { existing.clock = e.clock; existing.count++; }
    else map.set(e.text, { text: e.text, clock: e.clock, count: 1 });
  }
  return [...map.values()].sort((a, b) => (b.clock ?? 0) - (a.clock ?? 0));
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
        e.type === 'pet_melee_stray' || e.type === 'pet_melee_crit' || e.type === 'pet_hit' ||
        e.type === 'pet_self_heal' || e.type === 'pet_lost') {
      petNames.add(e.pet);
    }
  }

  // ---- /stats snapshots (most recent wins) --------------------------------
  let playerName = playerNameHint || null;
  const statsSnapshots = [];
  let curSnap = null;
  for (const e of events) {
    if (e.type === 'stats_header') { curSnap = { player: e.player }; statsSnapshots.push(curSnap); playerName = playerName || e.player; }
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
  for (const e of events) if (e.type === 'cast') castNames.add(e.name);

  // ---- damage out -----------------------------------------------------------
  const dmgOutBySource = {};
  const dmgOutPoints = [];
  const petStats = {}; // name -> { dmg, heals, hits, crits, bySource:{} }
  function petBucket(name) {
    if (!petStats[name]) petStats[name] = { dmg: 0, heals: 0, hits: 0, crits: 0, bySource: {}, spellsCast: 0, resists: 0 };
    return petStats[name];
  }

  let totalMeleeHits = 0, totalMeleeCrits = 0, totalMeleeMisses = 0, totalMeleeDmg = 0;
  let pendingWeapon = null;    // last weapon used, for the generic "Melee: <weapon>" bucket
  let lastMeleeLabel = 'Melee'; // bucket key the most recent swing landed in — crit/extra follow-ups reuse it,
                                 // so a style's crit or a spell's "extra damage" line lands on the same row
  let lastMeleeWeapon = null;   // weapon behind that same swing, for crit/extra follow-up lines
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

  for (const e of events) {
    switch (e.type) {
      case 'melee_weapon': {
        pendingWeapon = e.weapon;
        lastMeleeWeapon = e.weapon;
        const key = e.styleName ? `${e.styleName} (${e.weapon})` : `Melee: ${e.weapon}`;
        if (e.styleName) dmgOutBaseName[key] = e.styleName;
        lastMeleeLabel = key;
        lastMeleeIsSpell = false; // always a real weapon swing
        bump(dmgOutBySource, key, e.dmg, false);
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
        bump(dmgOutBySource, key, e.dmg, false);
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
        trackWeapon(lastMeleeLabel, lastMeleeWeapon);
        if (!lastMeleeIsSpell) totalMeleeDmg += e.dmg;
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'melee_crit_named':
      case 'melee_crit_generic': {
        bump(dmgOutBySource, lastMeleeLabel, e.dmg, true);
        trackWeapon(lastMeleeLabel, lastMeleeWeapon);
        if (!lastMeleeIsSpell) { totalMeleeCrits++; totalMeleeDmg += e.dmg; }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'you_miss': totalMeleeMisses++; break;

      case 'ability_hit': {
        if (petNames.has(e.name)) {
          const p = petBucket(e.name); p.dmg += e.dmg; p.hits++;
          bump(p.bySource, e.name, e.dmg, false);
        } else {
          bump(dmgOutBySource, e.name, e.dmg, false);
        }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'ability_crit': {
        if (petNames.has(e.name)) {
          const p = petBucket(e.name); p.dmg += e.dmg; p.crits++;
          bump(p.bySource, e.name, e.dmg, true);
        } else {
          bump(dmgOutBySource, e.name, e.dmg, true);
        }
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }

      case 'pet_melee': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.hits++;
        bump(p.bySource, 'Melee', e.dmg, false);
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_melee_stray': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.hits++;
        bump(p.bySource, 'Melee (stray)', e.dmg, false);
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_melee_crit': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.crits++;
        bump(p.bySource, 'Melee', e.dmg, true);
        dmgOutPoints.push({ clock: e.clock, amount: e.dmg });
        break;
      }
      case 'pet_hit': {
        const p = petBucket(e.pet); p.dmg += e.dmg; p.hits++;
        bump(p.bySource, 'Proc', e.dmg, false);
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
  const healOutByTarget = {};
  const healOutBySpell = {};
  const healOutPoints = [];
  let healOutTotal = 0, healOutHits = 0, healOutCrits = 0;
  for (const e of events) {
    if (e.type === 'heal_out') {
      bump(healOutByTarget, e.target, e.amount, false);
      bump(healOutBySpell, e.spellName || 'Heal (spell not identified)', e.amount, false);
      healOutTotal += e.amount; healOutHits++;
      healOutPoints.push({ clock: e.clock, amount: e.amount });
    } else if (e.type === 'heal_out_crit') {
      bump(healOutByTarget, e.target, e.amount, true);
      bump(healOutBySpell, e.spellName || 'Heal (spell not identified)', e.amount, true);
      healOutTotal += e.amount; healOutCrits++;
      healOutPoints.push({ clock: e.clock, amount: e.amount });
    }
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

  // ---- defense (your mitigation of incoming attacks) ---------------------------
  let blocks = 0, youParries = 0, youEvades = 0, enemyParriedYou = 0, enemyEvadedYou = 0, enemyBlockedYou = 0;
  let resistCount = 0;
  const resistBySource = {};
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
    else if (e.type === 'resist_generic' || e.type === 'resist_named') {
      resistCount++;
      const key = e.source || 'Unknown';
      resistBySource[key] = (resistBySource[key] || 0) + 1;
    } else if (e.type === 'cc_landed' && e.sourceName) {
      ccLandedBySource[e.sourceName] = (ccLandedBySource[e.sourceName] || 0) + 1;
    }
  }
  const incomingHitsLanded = Object.values(dmgInBySource).reduce((a, s) => a + s.hits + s.crits, 0);
  const totalIncomingAttackAttempts = blocks + youParries + youEvades + incomingHitsLanded;

  // ---- realm points --------------------------------------------------------------
  let rpTotal = 0, rpBonusTotal = 0;
  const rpByReason = {};
  const rpPoints = [];
  for (const e of events) {
    if (e.type === 'rp_plain' || e.type === 'rp_reason') {
      rpTotal += e.amount;
      const key = e.reason || 'Kill / assist';
      rpByReason[key] = (rpByReason[key] || 0) + e.amount;
      rpPoints.push({ clock: e.clock, amount: e.amount });
    } else if (e.type === 'rp_bonus') {
      rpTotal += e.amount; rpBonusTotal += e.amount;
      rpByReason["Guild buff"] = (rpByReason["Guild buff"] || 0) + e.amount;
      rpPoints.push({ clock: e.clock, amount: e.amount });
    }
  }

  // ---- kills / deaths ------------------------------------------------------------
  let deathblows = 0, deaths = 0, resurrectedCount = 0;
  const killVictims = [];
  for (const e of events) {
    if (e.type === 'kill_feed' && playerName) {
      if (normalizeName(e.killer) === normalizeName(playerName)) { deathblows++; killVictims.push(e.victim); }
      if (normalizeName(e.victim) === normalizeName(playerName)) deaths++;
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
        if ((e2.type === 'rp_plain' || e2.type === 'rp_reason' || e2.type === 'rp_bonus') && !claimedRp.has(j)) {
          rp += e2.amount;
          rpKnown = true;
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
  const clocks = events.map(e => e.clock).filter(x => x != null);
  const startClock = clocks.length ? Math.min(...clocks) : null;
  const endClock = clocks.length ? Math.max(...clocks) : null;
  const durationMs = (startClock != null && endClock != null) ? Math.max(1000, endClock - startClock) : 1000;
  const durationSec = durationMs / 1000;

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
  for (const entry of Object.values(dmgOutBySourceFinal)) {
    const attempts = entry.totalHits + (entry.ccLanded || 0) + (entry.resists || 0);
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
      playerName, startClock, endClock, durationMs,
      statsSnapshots, latestSnapshot,
      petNames: Array.from(petNames),
    },
    damageOut: {
      total: totalDmgOut,
      bySource: dmgOutBySourceFinal,
      dps: durationSec ? +(totalDmgOut / durationSec).toFixed(1) : 0,
      melee: { hits: totalMeleeHits, crits: totalMeleeCrits, misses: totalMeleeMisses, dmg: totalMeleeDmg,
        critRate: (totalMeleeHits + totalMeleeCrits) ? +(100 * totalMeleeCrits / (totalMeleeHits + totalMeleeCrits)).toFixed(1) : 0 },
      timeline: bucketTimeline(dmgOutPoints, startClock, endClock),
    },
    damageIn: {
      total: totalDmgIn,
      bySource: finalizeSourceMap(dmgInBySource),
      dtps: durationSec ? +(totalDmgIn / durationSec).toFixed(1) : 0,
      timeline: bucketTimeline(dmgInPoints, startClock, endClock),
    },
    healOut: {
      total: healOutTotal,
      hits: healOutHits, crits: healOutCrits,
      critRate: (healOutHits + healOutCrits) ? +(100 * healOutCrits / (healOutHits + healOutCrits)).toFixed(1) : 0,
      byTarget: finalizeSourceMap(healOutByTarget),
      bySpell: finalizeSourceMap(healOutBySpell),
      hps: durationSec ? +(healOutTotal / durationSec).toFixed(1) : 0,
      timeline: bucketTimeline(healOutPoints, startClock, endClock),
    },
    healIn: {
      total: healInTotal,
      bySource: finalizeSourceMap(healInBySource),
      timeline: bucketTimeline(healInPoints, startClock, endClock),
    },
    pets: {
      byPet: Object.fromEntries(Object.entries(petStats).map(([k, v]) => [k, { ...v, bySource: finalizeSourceMap(v.bySource) }])),
      combinedDmg: sumPetDmg(petStats),
      combinedHeals: Object.values(petStats).reduce((a, p) => a + p.heals, 0),
    },
    defense: {
      blocks, youParries, youEvades, enemyParriedYou, enemyEvadedYou, enemyBlockedYou, resistCount,
      resistBySource,
      totalIncomingAttackAttempts,
      blockRate: pct(blocks, totalIncomingAttackAttempts),
      parryRate: pct(youParries, totalIncomingAttackAttempts),
      evadeRate: pct(youEvades, totalIncomingAttackAttempts),
    },
    realmPoints: {
      total: rpTotal, bonusTotal: rpBonusTotal, byReason: rpByReason,
      perHour: durationSec ? +(rpTotal / (durationSec / 3600)).toFixed(0) : 0,
      timeline: bucketTimeline(rpPoints, startClock, endClock),
    },
    kills: { deathblows, deaths, resurrectedCount, killVictims, deathblowLog, deathblowRpTotal },
    spellsCast: Array.from(castNames),
    bgBroadcasts,
  };
}

function sumVals(map) { return Object.values(map).reduce((a, s) => a + s.dmg, 0); }
function sumPetDmg(petStats) { return Object.values(petStats).reduce((a, p) => a + p.dmg, 0); }
function pct(n, total) { return total ? +(100 * n / total).toFixed(1) : 0; }
function normalizeName(s) { return (s || '').trim().toLowerCase(); }
