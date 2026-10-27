// parser.js — turns raw DAoC chat.log text into a flat array of typed events.
// Pure, dependency-free, runs entirely client-side. Nothing in this file
// ever sends data anywhere — it only reads the string it's given.
//
// The one exception to "pure, no dependencies" is ABILITY_DATABASE below, a
// bundled, static, synchronous data file (same build pipeline as, and
// always available alongside, ability-cooldowns.js's cooldown lookup) —
// never a network fetch. Parsing must stay fully deterministic regardless
// of network conditions, so this can only ever come from data baked in at
// build time, same as the cooldown map.
//
// Every event has: { t: <elapsed ms since the first line we saw>, clock: same
// value, type, ...fields }. The game only ever prints a bare [HH:MM:SS] on
// each line — no date, and the header's "*** Chat Log Opened: <date>" text
// is informational only (a relog a few seconds later gets its own header,
// so it's not a reliable day boundary either). So we never attempt to
// recover a real calendar date: `clock` is a purely synthetic, always-
// forward-moving elapsed clock anchored at the first timestamp the file
// contains. Whenever the printed HH:MM:SS goes backwards by more than a
// few seconds (allowing for ordinary out-of-order log writes), we assume a
// midnight rollover happened and add a day's worth of ms — that's the only
// day-boundary signal we have, and it's still a guess across a log that
// spans many real days. Display code must only ever render the time-of-day
// portion of `clock`, never a calendar date, since we don't actually know
// what the date was.

import { ABILITY_DATABASE } from './ability-database.js';
import { CL_ABILITY_DATABASE } from './cl-ability-database.js';

const LINE_RE = /^\[(\d{2}):(\d{2}):(\d{2})\]\s?(.*)$/;
const OPEN_RE = /^\*\*\*\s*Chat Log Opened:\s*(.+)$/;
const CLOSE_RE = /^\*\*\*\s*Chat Log Closed:\s*(.+)$/;

// Chat-channel lines we should never try to run combat regexes against,
// e.g. "@@[Region] Hilyth: ..." or "@@Bleblu says, "...""
const CHAT_CHANNEL_RE = /^@@(\[[A-Za-z ]+\]\s*[^:]+:|[A-Za-z0-9'_-]+\s+(says|tells|yells|whispers|says to you|replies|sends?))/;

function stripAt(line) {
  return line.startsWith('@@') ? line.slice(2) : line;
}

// Ordered list of [type, regex, mapper]. Mapper receives the regex match
// and returns the event payload (without t/clock/type/raw, which the
// caller attaches). First match wins, so more specific patterns are listed
// before their more general overlapping cousins.
const RULES = [
  // ---- /stats block -------------------------------------------------
  ['stats_header', /^Statistics for (.+?) this Session:$/, m => ({ player: m[1] })],
  ['stats_total_rp', /^Total RP:\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],
  ['stats_deathblows', /^Deathblows:\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],
  ['stats_solo_kills', /^Solo kills:\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],
  ['stats_deaths', /^Deaths:\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],
  ['stats_hp_healed', /^HP healed:\s*([\d,]+)(?: and (\d+) RP gained from this heal)?$/, m => ({ hp: toNum(m[1]), rp: m[2] ? toNum(m[2]) : 0 })],
  ['stats_rez', /^Resurrections performed:\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],
  ['stats_online', /^Online time:\s*(.+)$/, m => ({ text: m[1] })],
  ['stats_rp_hour', /^RP\/hour:\s*([\d.,]+)$/, m => ({ value: parseFloat(m[1].replace(/,/g, '')) })],
  ['stats_kpd', /^Kills per death:\s*([\d.,]+)$/, m => ({ value: parseFloat(m[1].replace(/,/g, '')) })],
  ['stats_rpk', /^RP per kill:\s*([\d.,]+)$/, m => ({ value: parseFloat(m[1].replace(/,/g, '')) })],
  ['stats_standing', /^"I Remain Standing\.\.\.":\s*([\d,]+)$/, m => ({ value: toNum(m[1]) })],

  // ---- casting --------------------------------------------------------
  ['cast_begin', /^You begin casting an?\s+(.+?)\s+spell!$/, m => ({ name: m[1] })],
  ['cast', /^You cast an?\s+(.+?)\s+spell!$/, m => ({ name: m[1] })],

  // ---- pet lifecycle ----------------------------------------------------
  // Animist/Spiritmaster turret pets ("Forest's Core", "Ligneous Wall",
  // "Grove Augur", "Vent of Physical/Elemental Shielding", ...) append a
  // running turret-count sentence to this same line — "The forest heart is
  // now under your control. 3 turrets are under your control." — which the
  // original `$`-anchored version of this regex required NOT to be there,
  // so it silently never matched any turret at all (while a non-turret pet
  // like "war crier", whose line has no such suffix, matched fine). The
  // Pets tab showing only "war crier" and never the turrets it was
  // summoned alongside was reported directly from a log with exactly this
  // mix. The optional group below accepts the suffix without requiring it,
  // so a non-turret pet's plain line still matches exactly as before.
  ['pet_summon', /^The (.+?) is now under your control\.(?:\s*\d+\s*turrets?\s*are\s*under\s*your\s*control\.)?$/, m => ({ pet: m[1] })],
  ['pet_lost', /^You lose control of the (.+?)\.$/, m => ({ pet: m[1] })],
  ['pet_command', /^You command the (.+?) to (.+?)!$/, m => ({ pet: m[1], command: m[2] })],

  // ---- pet combat -------------------------------------------------------
  // "Your <pet> attacks <target> but hits <other> for N (±M) damage!" (friendly-fire / mistarget)
  ['pet_melee_stray', /^Your (.+?) attacks (.+?) but hits (.+?) for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ pet: m[1], target: m[2], actualTarget: m[3], dmg: +m[4], mod: m[5] ? +m[5] : null })],
  // "Your <pet> attacks <target> and hits for N (±M) damage!"
  ['pet_melee', /^Your (.+?) attacks (.+?) and hits for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ pet: m[1], target: m[2], dmg: +m[3], mod: m[4] ? +m[4] : null })],
  // "Your <pet> hit <target> for N damage!" (proc-style line, often @@-tagged)
  // Same optional "(±N)" armor/resist modifier as ability_hit below, applied
  // defensively here too — same pattern shape, same bug class, even though no
  // instance of this specific singular-"hit" line with a modifier suffix has
  // been observed in the available logs.
  ['pet_hit', /^Your (.+?) hit (.+?) for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ pet: m[1], target: m[2], dmg: +m[3], mod: m[4] ? +m[4] : null })],
  // "Your <pet> heals itself for N hit points."
  ['pet_self_heal', /^Your (.+?) heals itself for (\d+) hit points?\.$/, m => ({ pet: m[1], amount: +m[2] })],
  // "The <pet> casts a spell!" — counted per pet (once we know it's really
  // your pet — see aggregate.js's petNames gate) so pet spellcasting shows up
  // at all instead of silently vanishing. We deliberately don't try to parse
  // the spell's actual effect line (immobilize, snare, "seems weaker", etc.)
  // by name — every pet class has different ones and a BG log is full of
  // other people's pets producing the exact same generic text at the same
  // moment, so that'd be a guess. Resists are still fully captured, though:
  // "<target> resists your <pet>'s effect!" already names the pet directly,
  // the same way it names a player's spell, so no special-casing is needed.
  ['pet_cast', /^The (.+?) casts a spell!$/, m => ({ pet: m[1] })],
  // flavor-only pet announcement (attack telegraph with no damage number,
  // the real hit/miss comes from a separate "Your <pet> ..." line) — not
  // counted, but useful for pet-name discovery and keeps it out of unmatched.
  ['pet_flavor', /^The (.+?) attacks /, m => ({ pet: m[1] })],

  // ---- named ability (spell / style / RA / proc) damage -----------------
  // crit MUST be matched before the plain hit rule (both start the same way)
  ['ability_crit', /^Your (.+?) critical(?:ly)? hits (.+?) for an additional (\d+) damage!(?:\s*\((?:Crit Chance:\s*)?([\d.]+)%\))?$/,
    m => ({ name: m[1], target: m[2], dmg: +m[3], pct: m[4] ? parseFloat(m[4]) : null })],
  // Trailing "(±N)" is the target's armor/resist damage-reduction modifier —
  // every sibling melee rule (melee_plain, melee_weapon, incoming_dmg) already
  // accepts this optional suffix, but this rule didn't, so any ability/pet
  // hit against an armored or resistant target ("Your forest heart hits
  // Level 50 Training Dummy for 63 (-39) damage!") failed to match here and
  // fell all the way through to the bg_broadcast catch-all instead — reported
  // directly as these lines wrongly showing up in the BG center ticker. Worse
  // than a display bug: the damage was silently dropped from totals entirely
  // rather than just mis-displayed (confirmed across the available logs: 47
  // real instances, all pet hits — "spirit aegis", "isolationist wizardess",
  // "underhill companion" — against targets with damage mitigation). Adding
  // the same optional group used elsewhere fixes both at once: the damage is
  // now correctly attributed, and the line no longer falls through to
  // bg_broadcast since it's matched here first.
  ['ability_hit', /^Your (.+?) hits (.+?) for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ name: m[1], target: m[2], dmg: +m[3], mod: m[4] ? +m[4] : null })],

  // ---- styles: "You perform your <Style> perfectly! (+N, Growth Rate: x)"
  // confirms the weapon swing that immediately follows was a style, not a
  // plain swing. Consumed by the next melee_weapon event in the main loop
  // below (never pushed as its own event — it's pure setup context).
  ['style_perform', /^You perform your (.+?) perfectly!(?:\s*\(([+-]?\d+)?,?\s*Growth Rate:\s*([\d.]+)\))?$/,
    m => ({ name: m[1], bonus: m[2] ? +m[2] : null })],
  ['style_perform', /^You perform your (.+?)!(?:\s*\(([+-]?\d+)?,?\s*Growth Rate:\s*([\d.]+)\))?$/,
    m => ({ name: m[1], bonus: m[2] ? +m[2] : null })],

  // ---- melee (weapon) damage, outgoing -----------------------------------
  // trailing "(Damage Modifier: N)" is extra debug info some rulesets append; ignored.
  ['melee_weapon', /^You attack (.+?) with your (.+?) and hit for (\d+)(?:\s*\(([+-]\d+)\))? damage!(?:\s*\(Damage Modifier:\s*[\d.]+\))?$/,
    m => ({ target: m[1], weapon: m[2], dmg: +m[3], mod: m[4] ? +m[4] : null })],
  ['melee_extra', /^You hit (.+?) for (\d+) extra damage!$/, m => ({ target: m[1], dmg: +m[2] })],
  ['melee_plain', /^You hit (.+?) for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ target: m[1], dmg: +m[2], mod: m[3] ? +m[3] : null })],
  ['melee_crit_named', /^You critical(?:ly)? hit (.+?) for an additional (\d+) damage!(?:\s*\(([\d.]+)%\))?$/,
    m => ({ target: m[1], dmg: +m[2], pct: m[3] ? parseFloat(m[3]) : null })],
  ['melee_crit_generic', /^You critical(?:ly)? hit for an additional (\d+) damage!(?:\s*\(Crit Chance:\s*([\d.]+)%\))?$/,
    m => ({ dmg: +m[1], pct: m[2] ? parseFloat(m[2]) : null })],
  ['you_miss', /^You miss!(?:\s*\((?:Miss Chance:\s*)?([\d.]+)%\))?$/, m => ({ pct: m[1] ? parseFloat(m[1]) : null })],
  ['you_miss', /^You attack (.+?) and miss!$/, m => ({ target: m[1], pct: null })],
  ['you_fumble', /^You fumble!/, () => ({})],
  ['block_in', /^(.+?) blocks your attack!(?:\s*\(Block Chance:\s*([\d.]+)%\))?$/, m => ({ blocker: m[1], pct: m[2] ? parseFloat(m[2]) : null })],

  // ---- incoming damage ----------------------------------------------------
  // Both lines can carry a trailing "(Crit Chance: N%)" / "(Damage Modifier:
  // N)" suffix (PvE hits mostly do, PvP hits mostly don't) and the base hit
  // can land on "you" or on a named body part ("your leg"/"your torso"/etc)
  // — either suffix missing, or the body-part form, used to fall all the
  // way through to unmatched, undercounting damage taken.
  ['incoming_crit', /^(.+?) critical(?:ly)? hits you for an additional (\d+) damage!(?:\s*\(Crit Chance:\s*[\d.]+%\))?$/,
    m => ({ attacker: m[1], dmg: +m[2] })],
  ['incoming_dmg', /^(.+?) hits (?:you|your \w+) for (\d+)(?:\s*\(([+-]\d+)\))? damage!(?:\s*\(Damage Modifier:\s*[\d.]+\))?$/,
    m => ({ attacker: m[1], dmg: +m[2], mod: m[3] ? +m[3] : null })],
  ['incoming_extra', /^(.+?) does (\d+) extra damage to you!$/, m => ({ attacker: m[1], dmg: +m[2] })],

  // ---- healing -------------------------------------------------------------
  // The real crit-bonus line, confirmed directly against a healer's own
  // chat.log, carries NO target at all and uses completely different
  // grammar from a melee crit line: "Your heal criticals for an extra N
  // amount of hit points! (Crit Chance: N%)" — not "You critically heal X
  // for an additional N hit points!" (that phrasing never matched any real
  // line; every heal crit in a reported log was silently falling through
  // to `unmatched`, which is why the UI always showed 0 crits / 0% crit
  // rate for every heal spell despite the raw log clearly showing them).
  // "heal" is swapped for "spreadheal" when the cast was a group/AE heal
  // that spreads overflow healing onto other injured targets (e.g. "Gift
  // of the Host") — same shape otherwise. This line carries its own
  // spellName via the same activeHealName/pendingCastName window used for
  // heal_out below (see the main loop), since by the time it's seen we're
  // already inside that window; it has no target of its own, so the main
  // loop also fills in `target` from the most recently healed target —
  // see `lastHealTarget` there for the one case (a spreadheal's bonus line
  // printing BEFORE any of that cast's own heal_out lines) where that's a
  // best-effort guess rather than exact.
  ['heal_out_crit', /^Your (?:heal|spreadheal) criticals for an extra (\d+) amount of hit points!?(?:\s*\(Crit Chance:\s*([\d.]+)%\))?$/,
    m => ({ amount: +m[1], chance: m[2] ? parseFloat(m[2]) : null })],
  // "You heal yourself for N hit points." ends in a period and names
  // "yourself" instead of a target, unlike every other heal_out line (which
  // ends "!" and names someone else) — accept both terminators like heal_in
  // already does, and normalize "yourself" to a clean "You" label.
  ['heal_out', /^You heal (.+?) for (\d+) hit points?\.?!?$/,
    m => ({ target: m[1] === 'yourself' ? 'You' : m[1], amount: +m[2] })],
  ['heal_in', /^(.+?) heals you for (\d+) hit points?\.?!?$/, m => ({ healer: m[1], amount: +m[2] })],
  ['heal_in', /^You are healed by (.+?) for (\d+) hit points?\.?!?$/, m => ({ healer: m[1], amount: +m[2] })],

  // ---- power transfer -------------------------------------------------------
  // Reported directly: "Gift of Arawn" (an Occultist spell, ABILITY_DATABASE
  // type "Power Transfer") prints "You transfer N power to <target>!" right
  // after its own cast line, same shape as a heal_out following a heal
  // cast — this used to be matched and thrown away as pure flavor, so the
  // ability never showed up with any real numbers anywhere (only as a bare
  // name, if at all). Attributed to the spell that cast it via the same
  // pendingCastName/CAST_WINDOW_MS window heal_out uses — see the main
  // loop's `power_transfer` branch — with its own activePowerName burst
  // tracker (kept separate from activeHealName) in case a transfer spell
  // ever hits more than one target per cast, the same way a group heal does.
  ['power_transfer', /^You transfer (\d+) power to (.+?)!$/, m => ({ amount: +m[1], target: m[2] })],
  // Reported directly, a second time: "Gift of Arawn" itself (and "Mystic
  // Ground", an Occultist Type "Storm") ALSO shows up as "You restore
  // <target> for N power points!" — a totally different phrasing from the
  // "transfer" line just above, used for a storm/AE power ability that
  // ticks once per target in a rapid burst (the exact real excerpt this was
  // confirmed against has over a dozen of these lines in the same logged
  // second, several targets repeated as they're topped off). This exact
  // text used to be matched and thrown away as pure flavor (see the
  // ['flavor', ...'You restore...] rule further down, which now only keeps
  // the OTHER, targetless "You restore 30 power points." shape — a plain
  // self-only regen tick with no one to attribute it to). Reuses the same
  // 'power_transfer' type and the same pendingCastName/activePowerName
  // attribution as the line above rather than inventing a separate event
  // shape, since both are identical in substance: your cast moved a real
  // amount of power to a real target.
  ['power_transfer', /^You restore (.+?) for (\d+) power points!$/, m => ({ target: m[1], amount: +m[2] })],

  // ---- defense: block / parry / evade / resist ------------------------------
  ['block', /^You block (.+?)'s attack against (.+?)!(?:\s*\(Block Chance:\s*([\d.]+)%\))?$/,
    m => ({ attacker: m[1], defended: m[2], pct: m[3] ? parseFloat(m[3]) : null })],
  ['you_parry', /^You parry (.+?)'s attack!(?:\s*\(Parry Chance:\s*([\d.]+)%\))?$/,
    m => ({ attacker: m[1], pct: m[2] ? parseFloat(m[2]) : null })],
  ['you_evade', /^You evade (.+?)'s attack!(?:\s*\(Evade Chance:\s*([\d.]+)%\))?$/,
    m => ({ attacker: m[1], pct: m[2] ? parseFloat(m[2]) : null })],
  ['parry_in', /^(.+?) parries your attack!(?:\s*\(Parry Chance:\s*([\d.]+)%\))?$/,
    m => ({ attacker: m[1], pct: m[2] ? parseFloat(m[2]) : null })],
  ['evade_in', /^(.+?) evades (?:your attack|with extra skill)!$/, m => ({ defender: m[1] })],
  ['resist_named', /^(.+?) resists your (.+?)'s effect!(?:\s*\((?:Resist Chance:\s*)?([\d.]+)%\))?$/,
    m => ({ target: m[1], source: m[2], pct: m[3] ? parseFloat(m[3]) : null })],
  ['resist_generic', /^(.+?) resists the effect!(?:\s*\((?:Resist Chance:\s*)?([\d.]+)%\))?$/,
    m => ({ target: m[1], pct: m[2] ? parseFloat(m[2]) : null })],

  // ---- realm points -----------------------------------------------------------
  ['rp_bonus', /^You get an additional (\d+) realm points? due to (.+?)!$/, m => ({ amount: +m[1], reason: m[2] })],
  ['rp_reason', /^You get (\d+) realm points? for (.+?)!$/, m => ({ amount: +m[1], reason: m[2] })],
  ['rp_plain', /^You get (\d+) realm points?!$/, m => ({ amount: +m[1], reason: null })],
  ['war_reward', /^Your war efforts have been rewarded with experience and realm points!$/, () => ({})],

  // ---- kills / deaths / resurrection ---------------------------------------------
  ['kill_feed', /^(.+?) was just killed by (.+?) in (.+?)\.{0,3}$/, m => ({ victim: m[1], killer: m[2], zone: m[3] })],
  ['resurrected_by', /^You have been resurrected by (.+?)!$/, m => ({ healer: m[1] })],
  ['rez_not_worth', /^The player you resurrected was not worth realm points on death\.$/, () => ({})],
  ['you_died', /^You have died\.?$/, () => ({})],

  // ---- misc useful context ---------------------------------------------------------
  ['item_use', /^(.+?) uses? (.+?)\.$/, m => ({ who: m[1], item: m[2] })],
  ['resurrection_cured', /^(.+?) cures your resurrection sickness\.$/, m => ({ who: m[1] })],
  ['target', /^You target \[(.+?)\]\.$/, m => ({ target: m[1] })],
  // "You examine <Name>. He/She/It is a member of an enemy realm/group!"
  // is the one examine outcome that actually confirms the thing you just
  // targeted is a real enemy player -- as opposed to a friendly player, a
  // pet, an NPC, or a neutral mob, none of which print this exact line.
  // "enemy realm" is the solo wording; "enemy group" is what DAoC prints
  // for an enemy who's grouped -- confirmed directly against a real log
  // where "enemy group" outnumbered "enemy realm" more than 60 to 1, so
  // the original realm-only regex was silently dropping almost every
  // targeted enemy. Feeds js/aggregate.js's getEnemiesTargeted(), which
  // drives the "Enemies targeted" card row. Every OTHER examine outcome
  // (your own realm, a guard's faction text, etc.) still falls through to
  // the generic 'You examine ' flavor rule just below, unused -- this only
  // needs to catch the two cases we act on.
  ['examine_enemy', /^You examine (.+?)\. (?:He|She|It) is a member of an enemy (?:realm|group)!$/, m => ({ name: m[1] })],

  // ---- pure flavor text: recognized so it doesn't clutter the "unknown line" debug list,
  // but deliberately not counted toward any stat ----------------------------------------
  ['flavor', /^You (have entered|have left) /, () => ({})],
  ['flavor', /^\(Region\) You have (entered|left) /, () => ({})],
  ['flavor', /^.+? casts a spell!$/, () => ({})],
  ['flavor', /^.+? seems calm and healthy\.$/, () => ({})],
  ['flavor', /^.+?'s (meditative state|serenity|calmness) (fades|leaves)\.?$/, () => ({})],
  ['flavor', /^.+? has joined the battle group\.$/, () => ({})],
  ['flavor', /^.+? is no longer in your group\.$/, () => ({})],
  ['flavor', /^You are no longer ready to sprint\.$/, () => ({})],
  ['flavor', /^Controlled by .+\.$/, () => ({})],
  ['flavor', /^Options: \/stats/, () => ({})],
  ['flavor', /^You examine /, () => ({})],
  ['flavor', /^Your target is already considering a resurrection!$/, () => ({})],
  ['flavor', /^No one is currently trying to resurrect you\.$/, () => ({})],
  ['flavor', /^Your resurrection spell has expired\.$/, () => ({})],
  ['flavor', /^You thus get no realm points for the resurrect\.$/, () => ({})],
  ['flavor', /^You attempt to use /, () => ({})],
  ['flavor', /^.+? has been used\.$/, () => ({})],
  ['flavor', /^.+? (feels stronger|looks more healthy|looks more agile|looks more stronger|is surrounded by a holy aura)[!.]$/, () => ({})],
  ['flavor', /^.+? (has been (poisoned|diseased))!$/, () => ({})],
  ['flavor', /^A crystal shield covers /, () => ({})],
  ['flavor', /^Your speed greatly increases!$/, () => ({})],
  ['flavor', /^.+?'s speed greatly increases!$/, () => ({})],

  // ---- ambient third-party combat / world noise (common in busy RvR/keep-siege logs) ----
  ['flavor', /^.+? attacks .+? and (hits|misses|is (blocked|parried|evaded))!?$/, () => ({})],
  ['flavor', /^.+? attacks .+? with (his|her|its|their) .+?!$/, () => ({})],
  // ---- CC/debuff landing on a target — attributed to whichever cast (yours
  // or your pet's) just happened, within a short window, so e.g. a pet's
  // root/snare/mez spell shows up as something rather than silent noise.
  // Each pet/class has its own wording for this, so these are the specific
  // ones we've actually seen; anything else still just falls through as
  // ordinary unattributed flavor text below, same as before.
  ['cc_landed', /^(.+?) cannot seem to move!$/, m => ({ target: m[1], effect: 'immobilize' })],
  ['cc_landed', /^(.+?) is (stunned|rooted|mesmerized) and cannot move!$/, m => ({ target: m[1], effect: m[2] })],
  ['cc_landed', /^(.+?) begins moving more slowly!?\.?$/, m => ({ target: m[1], effect: 'snare' })],
  ['cc_landed', /^(.+?) seems weaker!?\.?$/, m => ({ target: m[1], effect: 'debuff' })],
  ['flavor', /^.+? (seems vulnerable to .+? magic|is covered in lava|is surrounded by an? .+?|'s (attack speed is slowed|skin erupts in open wounds|strength returns to normal)|looks healthy again)!?\.?$/, () => ({})],
  ['flavor', /^The (lava falls from|destructive energy around|acidic mist around) .+?[.!]$/, () => ({})],
  ['flavor', /^.+? dies\.$/, () => ({})],
  ['flavor', /^.+? drops? .+\.$/, () => ({})],
  ['flavor', /^Your share of the loot is .+\.$/, () => ({})],
  ['flavor', /^You deposit .+ into the guild bank\.$/, () => ({})],
  ['flavor', /^You take falling damage!$/, () => ({})],
  ['flavor', /^You take \d+% of your max hits in damage\.$/, () => ({})],
  ['flavor', /^You (select|find|deposit|steal|just bought) /, () => ({})],
  ['flavor', /^The forces of .+? have captured .+?!$/, () => ({})],
  ['flavor', /^.+? has (lost control of|claimed) .+?!$/, () => ({})],
  ['flavor', /^.+? is now level \d+, it is on the way to level \d+\.$/, () => ({})],
  ['flavor', /^A (guard|King of the Hill World Event) .+\.$|^A King of the Hill World Event has started/, () => ({})],
  ['flavor', /^(Duo|Solo) zone bonus changed to .+\.$/, () => ({})],
  ['flavor', /^\[Realm Mission\]/, () => ({})],
  ['flavor', /^Illegal source object\./, () => ({})],
  ['flavor', /^.+? (cheers at|has placed an Assault Target to destroy) .+?!$/, () => ({})],
  ['flavor', /^.+?\/Item:/, () => ({})],
  ['flavor', /^.+?'s (weapon returns to normal|extra strength fades|enhanced (vigor|agility) fades|holy aura wears off)\.$/, () => ({})],
  ['flavor', /^Your (meditative state fades|active buffs have been cancelled|temporary invulnerability timer has expired)\.?$/, () => ({})],
  ['flavor', /^You (prepare to sprint|feel a calmness come over you|feel more dexterous|feel stronger|feel calm and healthy|look more healthy|are surrounded by a holy aura|are already casting a spell.*|are protected from .+? magic)!?\.?$/, () => ({})],
  ['flavor', /^.+? (looks wizened|loses their graceful edge|becomes more resistant to .+? magic|is imbued with .+?)\.?$/, () => ({})],
  ['flavor', /^This spell requires \d+ concentration points to cast!$/, () => ({})],
  ['flavor', /^Your stats and abilities have been enhanced/, () => ({})],
  ['flavor', /^(Guild Message:|Welcome to |Moving to page|Items returned:|\[Right click to display|Unlocked Teleport Locations:|Locked locations:|##)/, () => ({})],
  ['flavor', /says?, ".*"$/, () => ({})],
  // /send tells — private messages, same category as say/whisper/tell above.
  // These should normally already be caught by the @@-prefixed CHAT_CHANNEL_RE
  // check before a line ever reaches these RULES; this is just a safety net
  // for the rare case one reaches here without its @@ marker.
  ['flavor', /^.+? sends?, ".*"(\s+to .+?)?\.?$/, () => ({})],
  ['flavor', /^You have been charged .+ for the teleport\.$/, () => ({})],
  ['flavor', /^\[.+?\] .+? \(\d+s\),?$/, () => ({})],
  ['cc_landed', /^(.+?) is entranced!?\.?$/, m => ({ target: m[1], effect: 'mesmerize' })],
  ['flavor', /^.+? (becomes more resistant to .+?|is blessed with holy protection|takes a second wind|begins attacking faster|looks calmer)[.!]?$/, () => ({})],
  ['flavor', /^.+?'s (attacks (move with the speed of the wind|return to normal)|armor returns to normal|crush vulnerability fades|enhanced strength fades)\.?$/, () => ({})],
  ['flavor', /^Your attacks move with the speed of the wind!$/, () => ({})],
  ['flavor', /^You are (protected from .+?|entranced|invigorated)!$/, () => ({})],
  ['flavor', /^Your (Strength|Dexterity|Constitution|Piety|Hits|Quickness|Charisma|Empathy|Intelligence|Acuity|(Crush|Thrust|Slash|Body|Cold|Energy|Heat|Matter|Spirit) resistance) has (increased|decreased)\.$/, () => ({})],
  ['flavor', /^You get [\d,]+ XP \( [\d,]+ base XP \)$/, () => ({})],
  ['flavor', /^You get \d+ bounty points!$/, () => ({})],
  ['flavor', /^You now have a total of \d+ contribution points\.$/, () => ({})],
  ['flavor', /^You gain a total of [\d,]+ experience points?\.$/, () => ({})], // large totals are comma-formatted
  ['flavor', /^The magic of .+? flows through you\.$/, () => ({})],
  ['flavor', /^The protection around .+? fades\.$/, () => ({})],
  ['flavor', /^Your armor is blessed with heavenly powers!$/, () => ({})],
  ['flavor', /^The door is too far away!$/, () => ({})],
  ['flavor', /^A guard at .+? has been slain!$/, () => ({})],
  ['flavor', /^XP Base:|^Relic bonus:|^Loyalty bonus:/, () => ({})],
  ['flavor', /^.+? has left the battle group\.$/, () => ({})],
  ['flavor', /^You guild pays \d+ bounty points to maintain .+$/, () => ({})],
  ['flavor', /^\[Guild\] \[.+?\]$/, () => ({})],
  ['flavor', /^Your efforts (attacking|defending) .+? have not gone unnoticed \([\d.]+% participation\)\.$/, () => ({})],

  // ---- gear-swap / weapon-switch spam (common with macro'd combat styles) ----
  ['flavor', /^You attempt to use .+?\.$/, () => ({})],
  ['flavor', /^You sheathe .+?\.$/, () => ({})],
  ['flavor', /^You wield .+? in (your (left|right) hand|both hands)\.$/, () => ({})],
  ['flavor', /^You enter combat mode and target \[.+?\]$/, () => ({})],
  ['flavor', /^You prepare to perform an? .+?!$/, () => ({})],
  ['flavor', /^You are now preparing to perform an? .+? style as a backup for .+?!$/, () => ({})],
  ['flavor', /^No '.+?' found in inventory$/i, () => ({})],
  ['flavor', /^You must be out of combat\.$/, () => ({})],
  ['flavor', /^You can't (attack yourself|enter melee combat mode with a fired weapon)!\s*$/, () => ({})],
  ['flavor', /^You must wait \d+ seconds? (to use this spell|before you can cast a spell again)!$/, () => ({})],
  ['flavor', /^You don't have enough power to cast that!$/, () => ({})],
  ['flavor', /^You move and interrupt your spellcast\.$/, () => ({})],
  ['flavor', /^You gather energy from your surroundings\.(?:\s*\(Siphon Chance:\s*[\d.]+%\))?$/, () => ({})],
  ['flavor', /^\[Reset\] to try again$/, () => ({})],
  ['cc_landed', /^(.+?) seems to be moving more slowly\.?$/, m => ({ target: m[1], effect: 'snare' })],
  ['flavor', /^.+?'s movement returns to normal\.$/, () => ({})],
  ['flavor', /^.+? attacks move with the speed of the wind!$/, () => ({})],

  // ---- more reward/status/RvR flavor (no event of their own yet) ----------
  // This block exists mainly to keep these common, fixed-phrasing server
  // messages OUT of bg_broadcast below — see that rule's comment for why.
  ['flavor', /^You gain \d+ champion experience points\.$/, () => ({})],
  ['flavor', /^XP (Group|Camp|Frontier|Guild|Social|Buff|Guard) Bonus: [\d,]+(\s*\([\d.]+%.*?\))?$/, () => ({})],
  ['flavor', /^You receive [\d,]+ (gold|silver|copper)(?:,\s*[\d,]+ (?:gold|silver|copper))*[.!]?$/, () => ({})],
  ['flavor', /^You (get \d+ campaign points|have gained a realm level)!$/, () => ({})],
  ['flavor', /^You get \d+ realm points from a (Minor|Major|Greater) Battle Tick for your efforts!$/, () => ({})],
  ['flavor', /^You get an extra .+? from bonuses\.$/, () => ({})],
  ['flavor', /^You gain an additional \d+ bounty points for adventuring in this zone!$/, () => ({})],
  ['flavor', /^You earned extra XP for adventuring in this zone!$/, () => ({})],
  ['flavor', /^You gain no experience from this kill!$/, () => ({})],
  ['flavor', /^Your realm's continued efforts have granted you \d+ contribution points\.$/, () => ({})],
  ['flavor', /^Your war efforts have been rewarded with \d+ contribution points\.$/, () => ({})],
  ['flavor', /^You have earned \d+ merit points for your guild!$/, () => ({})],
  ['flavor', /^You get \d+ more Specialization Points to spend at this level!$/, () => ({})],
  ['flavor', /^You have \d+ specialization points left this level\.$/, () => ({})],
  ['flavor', /^You spend \d+ points and specialize further in .+$/, () => ({})],
  ['flavor', /^You raise to level \d+!$/, () => ({})],
  ['flavor', /^Your (hits|power|stats) raises? by \d+ points?\.$/, () => ({})],
  ['flavor', /^Your stats raise!$/, () => ({})],
  ['flavor', /^Your stats and abilities return to normal\.?$/, () => ({})],
  ['flavor', /^You get an additional \d+ realm points for your support activity in battle!$/, () => ({})],
  ['flavor', /^.+? has been killed recently and is worth no (realm points|experience)!$/, () => ({})],
  ['flavor', /^.+?'s skin erupts in open wounds!$/, () => ({})],
  ['flavor', /^Your skin erupts in open wounds!$/, () => ({})],
  ['flavor', /^(.+? is|You are) diseased!$/, () => ({})],
  ['flavor', /^(.+?'s|Your) disease fades\.$/, () => ({})],
  ['flavor', /^.+? looks (stronger|more perceptive|more dextrous|more intelligent|more agile)!?\.?$/, () => ({})],
  ['flavor', /^You feel more (dextrous|agile)!$/, () => ({})],
  ['flavor', /^(.+? is|You are) fully healed\.$/, () => ({})],
  ['flavor', /^.+? seems (calm and healthy|weaker|vulnerable to [\w\s]+?)!?\.?$/, () => ({})],
  ['flavor', /^Your ablative absorbs \d+ damage!$/, () => ({})],
  ['flavor', /^The (blow|arrow) was absorbed by a magical barrier!$/, () => ({})],
  ['flavor', /^You resist the effect! \(Resist Chance:\s*[\d.]+%\)$/, () => ({})],
  ['flavor', /^.+? attacks you and (misses! \(Miss Chance:\s*[\d.]+%\)|your spell is interrupted!)$/, () => ({})],
  ['flavor', /^You (draw your weapons and interrupt your spell cast|enter combat mode but have no target)!$/, () => ({})],
  ['flavor', /^Your spell is cancelled!$/, () => ({})],
  ['flavor', /^You must (wait \d+ (seconds?|minutes? \d+ seconds?) to (cast a spell|use this spell)|have a target for your next attack style|select a target for this spell)!$/, () => ({})],
  ['flavor', /^(Your target|That target|.+?) is too far away( \(max \d+\))?( to attack)?!?$/, () => ({})],
  ['flavor', /^(Your target is not (in view\. The spell fails|visible|in view)|You cannot move|You can't (attack a member of your realm|cast while (stunned|mesmerized))|You can't use that door)\.?!?$/, () => ({})],
  ['flavor', /^(Your|.+?'s) feet are frozen to the ground!$/, () => ({})],
  ['flavor', /^You are (mesmerized|covered in lava|no longer protected by Divine Intervention|protected by Divine Intervention|already beginning a song|dead and can't cast)\.?!?$/, () => ({})],
  ['flavor', /^You feel more vulnerable to \w+ magic!$/, () => ({})],
  ['flavor', /^It belongs to .+?\.$/, () => ({})],
  ['flavor', /^.+? has joined the (group|battle group)\.$/, () => ({})],
  ['flavor', /^\(Autosplit\) .+? goes to .+?\.$/, () => ({})],
  ['flavor', /^.+? just died\. (Her|His|Its) corpse lies on the ground\.$/, () => ({})],
  ['flavor', /^.+? (can't have that effect again yet|is enraged and cannot be mesmerized|is moving too fast and cannot be mesmerized|is immune to this effect)!$/, () => ({})],
  ['flavor', /^.+?'s protection from debilitation has faded\.$/, () => ({})],
  ['flavor', /^The .+? runs in fear!$/, () => ({})],
  ['flavor', /^The .+?'s? calms? down\.?$/, () => ({})],
  ['flavor', /^.+? focuses on entrancing .+?$/, () => ({})],
  ['flavor', /^Your target already has that effect! Wait until it expires\. Spell failed\.$/, () => ({})],
  ['flavor', /^This spell only works on dead members of your realm!$/, () => ({})],
  ['flavor', /^The forces of \w+ led by .+? have captured .+?!$/, () => ({})],
  ['flavor', /^.+? has lost control of .+?!$/, () => ({})],
  ['flavor', /^A violent tempest makes it difficult to move or focus on your foes!$/, () => ({})],
  ['flavor', /^The (tempest|temptest) ends as suddenly as it began\.$/, () => ({})],
  ['flavor', /^.+?'s (strength|agility|health) returns to normal\.$/, () => ({})],
  ['flavor', /^Your (strength|agility|health|movement|intelligence) returns to normal\.$/, () => ({})],
  ['flavor', /^You gain \d+ campaign points!$/, () => ({})],
  ['flavor', /^You have died\.\s+Type \/release to return to your last bindpoint\.$/, () => ({})],
  ['flavor', /^You begin playing .+?!$/, () => ({})], // bard song announcements
  ['flavor', /^The damage was lessened by your equipment!$/, () => ({})],
  ['flavor', /^.+?'s skin hardens\.$/, () => ({})],
  ['flavor', /^Bark falls from .+?'s skin\.$/, () => ({})],
  ['flavor', /^.+?'s weapon is enchanted\.$/, () => ({})],
  ['flavor', /^.+?'s weapon skill has increased!$/, () => ({})],
  ['flavor', /^.+? attacks are quickened by a dark power!$/, () => ({})],
  ['flavor', /^.+?'s mental acuity (wanes|returns to normal)!?\.?$/, () => ({})],
  ['flavor', /^.+?'s enhanced intelligence fades\.$/, () => ({})],
  ['flavor', /^.+?'s \w+ vulnerability fades\.$/, () => ({})],
  ['flavor', /^.+?'s (vampiiric grace|vampiiric agility) fades\.$/, () => ({})],
  ['flavor', /^.+? will now (parry with vampiiric grace|evade with vampiiric agility)!$/, () => ({})],
  ['flavor', /^.+?'s attack speed (is reduced|returns to normal)!?\.?$/, () => ({})],
  ['flavor', /^.+? is attacking more slowly!$/, () => ({})],
  ['flavor', /^.+? armor withers away!$/, () => ({})],
  ['flavor', /^.+?'s armor is reinforced\.$/, () => ({})],
  ['flavor', /^.+? is no longer protected from magic\.$/, () => ({})],
  ['flavor', /^.+? wants to hold the .+?!$/, () => ({})],
  ['flavor', /^Your (power|Power) (has (increased|decreased)\.?|was restored by .+? for \d+ points\.|returns to normal\.)$/, () => ({})],
  // Only the targetless "You restore 30 power points." shape stays flavor —
  // the "You restore <target> for N power points!" shape (a storm/transfer
  // spell actually moving power to someone) is now its own power_transfer
  // event, matched further up before this catch-all is ever reached. See
  // that rule's comment for the report this split came from.
  ['flavor', /^You restore \d+ power points\.$/, () => ({})],
  ['flavor', /^.+? (power|mana) is full\.$/, () => ({})],
  ['flavor', /^.+? (wracked with pain|is dead)!$/, () => ({})],
  ['flavor', /^.+?: Foolish weaklings! Your attacks do me no harm!$/, () => ({})],
  ['flavor', /^(Hibernia|Albion|Midgard) Siege Tent (has been built|power is full)\.?$/, () => ({})],
  ['flavor', /^.+? becomes a battle group moderator\.$/, () => ({})],
  ['flavor', /^(There is no one by that name around here|Nobody of that class is in your group)\.$/, () => ({})],
  ['flavor', /^.+? (speaks to|hugs|does a backflip|rolls on the floor laughing at|went linkdead) ?.*$/, () => ({})],
  ['flavor', /^Spell effect set to show for: \w+$/, () => ({})],
  ['flavor', /^You target \[.+?\]$/, () => ({})],
  ['flavor', /^Your (constitution|target) is (already fully restored|not in view)!?\.?$/, () => ({})],
  ['flavor', /^Your power is already full\.$/, () => ({})],
  ['flavor', /^Your attacks return to normal\.$/, () => ({})],
  ['flavor', /^.+?'s actions are noticeably slower!$/, () => ({})],
  ['flavor', /^No enhancement of that type found on the target\.$/, () => ({})],
  ['flavor', /^You (use .+? \(\d+\/\d+\)|die.+Type \/release to return to your last bindpoint\.|died fighting for your realm and lose no experience!|will now release to the nearest border or portal keep in \d+ more seconds?!)$/, () => ({})],
  ['flavor', /^Your (holy aura wears off|skin (hardens|loses its extra strength)|movement is slowed!|protection against \w+ magic fades|extra protection against \w+ (magic )?fades|disease fades)\.?!?$/, () => ({})],
  ['flavor', /^Some of your enhancing magic has been ripped away by a spell!$/, () => ({})],
  ['flavor', /^An acidic cloud surrounds you!$/, () => ({})],
  ['flavor', /^Your surroundings suddenly change!$/, () => ({})],
  ['flavor', /^.+? (moves at incredible speed|slows down|calmness leaves)!?\.?$/, () => ({})],
  ['flavor', /^.+?'s (undead flesh will now regenerate faster|regeneration returns to normal)!?\.?$/, () => ({})],
  ['flavor', /^Your (attack speed is reduced|attack speed returns to normal)!?\.?$/, () => ({})],
  ['flavor', /^You are enveloped by numbing cold!$/, () => ({})],
  ['flavor', /^.+? was just killed by (a |an )?.+?\.$/, () => ({})], // killed-by lines with no zone named
  ['flavor', /^The underhill (ally|companion) (is too far away|is blessed with extra \w+)!?\.?$/, () => ({})],
  ['flavor', /^Keep Gate is too far away!$/, () => ({})],
  // battlegroup/who-listing block noise (the multi-line output of /bgwho, /who, etc.)
  ['flavor', /^\d+\) .+? the Level \d+ .+? in .+/, () => ({})],
  ['flavor', /^\[.+?\]$/, () => ({})], // bracketed zone/category names from such listings
  ['flavor', /^(Purpose|Leader|Moderators|Loot chest|Starting time|Meeting point):/, () => ({})],
  ['flavor', /^\[BattleGroup\] Informations:$/, () => ({})],
  ['flavor', /^Players currently in Battle Group:$/, () => ({})],
  ['flavor', /^\d+\)\s+<.+?>\s+.+? - \d+ .+$/, () => ({})], // "8)  <Member> Kaynk - 50 Friar" guild/bg roster rows
  ['flavor', /^\[.+?\]\s*\(.+?\)$/, () => ({})], // "[Catterick Hamlet] (New Frontiers)" zone-list rows

  // ---- busy keep-siege / RvR server noise (reward spam, group/guild utility
  // messages, pet & NPC chatter) — these templates were found by diffing
  // every log's leftover "unmatched/bg_broadcast" text against known-good
  // broadcasts, so each one here is confirmed server-generated boilerplate
  // rather than a real /bg center message. ------------------------------
  ['flavor', /^You have already selected your styles for this round!$/, () => ({})],
  ['flavor', /^.+?'s weapon begins channeling the strength of the earth\.$/, () => ({})],
  ['flavor', /^.+? trains in various specializations\.$/, () => ({})],
  ['flavor', /^Your Spirit Form blocks \d+ damage!$/, () => ({})],
  ['flavor', /^You move and interrupt your (spellcast|focus)!$/, () => ({})],
  ['flavor', /^You cannot absorb any more (life|power)\.$/, () => ({})],
  ['flavor', /^You received .+? and place it in your backpack!$/, () => ({})],
  ['flavor', /^You regain \d+ (power|endurance|hits|health) from resting by the campfire\.?$/, () => ({})],
  ['flavor', /^.+?'s tactics ends?\.$/, () => ({})],
  ['flavor', /^.+? fights with improved defensive tactics!$/, () => ({})],
  ['flavor', /^.+? motions .+? onward\.$/, () => ({})],
  ['flavor', /^.+? picks up .+? and puts (it|them) into the battlegroup loot chest\.$/, () => ({})],
  ['flavor', /^(You are|.+? is) being crushed by an invisible force!$/, () => ({})],
  ['flavor', /^(Your|.+?'s) armor grows diabolic thorns\.$/, () => ({})],
  ['flavor', /^You have reached the level limit of this battleground!$/, () => ({})],
  ['flavor', /^.+?'s weapon glows with infernal power!$/, () => ({})],
  ['flavor', /^A barrier absorbs \d+ damage of your attack!$/, () => ({})],
  ['flavor', /^Your relationship with .+? has (increased|decreased)\.$/, () => ({})],
  ['flavor', /^You lose your focus on your .+? spell\.$/, () => ({})],
  ['flavor', /^Your .+? absorbs? \d+ power to you!$/, () => ({})],
  ['flavor', /^.+? is bleeding!$/, () => ({})],
  ['flavor', /^.+? is marked as LFF with \d+ members?!(\s*\(They are in combat\))?$/, () => ({})],
  ['flavor', /^Housing \[entrance\], \[personal house\], \[guild house\], \[house bind\]"?$/, () => ({})],
  ['flavor', /^You don't see your target\.$/, () => ({})],
  ['flavor', /^The .+? is not ready to fire yet!$/, () => ({})],
  ['flavor', /^Training complete!$/, () => ({})],
  ['flavor', /^.+? has left the group\.$/, () => ({})],
  ['flavor', /^You gain power in the .+? spell list!$/, () => ({})],
  ['flavor', /^.+? can move normally again\.$/, () => ({})],
  ['flavor', /^You are too fatigued to use this style!$/, () => ({})],
  ['flavor', /^You've been in combat recently, the spell has no effect on you!$/, () => ({})],
  ['flavor', /^You can't attack a member of your group!$/, () => ({})],
  ['flavor', /^(Alliance Message:|Clan Message:)/, () => ({})],
  ['flavor', /^You must perform the .+? style before this one!$/, () => ({})],
  ['flavor', /^Your magic resistances have (increased|decreased)\.$/, () => ({})],
  ['flavor', /^Casting Speed: [\d.]+s$/, () => ({})],
  ['flavor', /^You are protecting .+? and distract the .+?\.$/, () => ({})],
  ['flavor', /^.+?'s embers goes out\.$/, () => ({})],
  ['flavor', /^.+? hits your .+? for \d+(?:\s*\([+-]?\d+\))? damage!$/, () => ({})],
  ['flavor', /^You harm yourself for \d+ hit points!$/, () => ({})],
  ['flavor', /^.+? is stunned by a (flash of light|barrage of color)!$/, () => ({})],
  ['flavor', /^.+? picks a random number between \d+ and \d+: \d+$/, () => ({})],
  ['flavor', /^Your weapon glows with a heavenly light!$/, () => ({})],
  ['flavor', /^Your character has been saved\.$/, () => ({})],
  ['flavor', /^Your (weapon|armor) returns to normal\.$/, () => ({})],
  ['flavor', /^You look healthy again\.$/, () => ({})],
  ['flavor', /^You release your corpse unto death\.$/, () => ({})],
  ['flavor', /^Your group is in combat and the Town Portal fails!$/, () => ({})],
  ['flavor', /^Your (serenity|meditative state|calmness) (fades|leaves)\.?$/, () => ({})],
  ['flavor', /^You feel more at ease\.$/, () => ({})],
  ['flavor', /^.+?'s horrible app?e?arance fades and they return to normal\.$/, () => ({})],
  ['flavor', /^Your inner peace leaves you\.$/, () => ({})],
  ['flavor', /^Embers burn .+?!$/, () => ({})],
  ['flavor', /^You ground-target <[\d, ]+>$/, () => ({})],
  ['flavor', /^.+?'s blade strikes more accurately!$/, () => ({})],
  ['flavor', /^.+?'s attack speed is slowed\.$/, () => ({})],
  ['flavor', /^You can't enter combat mode while lying down!$/, () => ({})],
  ['flavor', /^You release control of your controlled target\.$/, () => ({})],
  ['flavor', /^Your .+? is healed by .+? for \d+ hit points\.$/, () => ({})],
  ['flavor', /^You convert [\d.]+% of the spell damage into healing!$/, () => ({})],
  ['flavor', /^.+? recovers from the stun\.$/, () => ({})],
  ['flavor', /^You swing your weapon with zeal!$/, () => ({})],
  ['flavor', /^An infection affects .+?!$/, () => ({})],
  ['flavor', /^.+?'s (acuity|weapon skill) returns to normal\.$/, () => ({})],
  ['flavor', /^.+?'s castings have perfect poise!$/, () => ({})],
  ['flavor', /^.+? has been reanimated as a horrible monster!$/, () => ({})],
  ['flavor', /^You are poisoned!$/, () => ({})],
  ['flavor', /^You seem weaker!$/, () => ({})],
  ['flavor', /^Target is not in view\.$/, () => ({})],
  ['flavor', /^.+?'s armor becomes too hot to touch\.$/, () => ({})],
  ['flavor', /^This is a named monster!$/, () => ({})],
  ['flavor', /^.+? yells for help from the \w+!$/, () => ({})],
  ['flavor', /^You assist .+?\.$/, () => ({})],
  ['flavor', /^.+? is disarmed!$/, () => ({})],
  ['flavor', /^.+? begs .+?( to pick them)?\.$/, () => ({})],
  ['flavor', /^.+?'s crystal shield fades\.$/, () => ({})],
  ['flavor', /^You sit down\.\s+Type '\/stand' or move to stand up\.$/, () => ({})],
  ['flavor', /^You will quit after sitting for \d+ seconds?\.\s+Type '\/stand' or move if you don't want to quit\.$/, () => ({})],
  ['flavor', /^You are no longer waiting to quit\.$/, () => ({})],
  ['flavor', /^.+? recovers their weapon\.$/, () => ({})],
  ['flavor', /^No Matches\.$/, () => ({})],
  ['flavor', /^You cannot teleport unless you are near a valid portal stone\.$/, () => ({})],
  ['flavor', /^This style requires an? \w+ weapon!$/, () => ({})],
  ['flavor', /^Your group is (no longer )?protected by Divine Intervention!$/, () => ({})],
  ['flavor', /^RvR Task: \d+\/\d+ kills \(Tier \d+\)$/, () => ({})],
  ['flavor', /^.+? dies!$/, () => ({})],
  ['flavor', /^Value: -?\d+ \| Effectiveness: [\d.]+ \| EffectiveValue: -?\d+$/, () => ({})],
  ['flavor', /^.+?'s weapon is blessed by the heavens!$/, () => ({})],
  ['flavor', /^.+? appears fanatical!$/, () => ({})],
  ['flavor', /^You forget what you were doing\.$/, () => ({})],
  ['flavor', /^Your Divine Intervention heals .+? for \d+ hitpoints!(\s*\(remaining: \d+\))?$/, () => ({})],
  ['flavor', /^You must wait \d+ more seconds? before using another potion!$/, () => ({})],
  ['flavor', /^Slow down! Think before you say each word!$/, () => ({})],
  ['flavor', /^You automatically attempt .+? style as a backup for .+?!$/, () => ({})],
  ['flavor', /^.+? is already dead!$/, () => ({})],
  ['flavor', /^Your .+? performs their .+? perfectly!(\s*\([+-]?\d+\))?$/, () => ({})],
  ['flavor', /^.+? is the new group leader\.$/, () => ({})],
  ['flavor', /^BaseWS: [\d.]+ \| SpecMod: [\d.]+ \([\d.]+~[\d.]+\) \| WS: [\d.]+$/, () => ({})],
  ['flavor', /^AF: [\d.]+ \| ABS: \d+% \| AF\/ABS: [\d.]+$/, () => ({})],
  ['flavor', /^.+? has joined the guild!$/, () => ({})],
  ['flavor', /^.+? appears in your inventory!$/, () => ({})],
  ['flavor', /^.+? is not in view!$/, () => ({})],
  ['flavor', /^You have been given the .+? quest\.$/, () => ({})],
  ['flavor', /^.+? has invited you to join (his|her|their) group\.$/, () => ({})],
  ['flavor', /^(He|She|They) has upgraded equipment \(\d+\)\.$/, () => ({})],
  ['flavor', /^You get [\d,]+ XP \( [\d,]+ base XP.*\)$/, () => ({})],
  ['flavor', /^the .+? hits (the )?Keep (Door|Gate)$/, () => ({})],
  ['flavor', /^You leave your group\.$/, () => ({})],
  ['flavor', /^You are fully healed!$/, () => ({})],
  ['flavor', /^Your target is moving too fast and cannot be (slowed|mesmerized)!$/, () => ({})],

  // ---- round 2: more server noise found by diffing the remaining
  // bg_broadcast leftovers across all sample logs -------------------------
  ['flavor', /^Kill participation: [\d.]+%$/, () => ({})],
  ['flavor', /^Your (.+? )?absorbs? \d+ power to you!$/, () => ({})],
  ['flavor', /^Your target is too far away to attack by your pet!$/, () => ({})],
  ['flavor', /^(You are|.+? is) enveloped by numbing cold!$/, () => ({})],
  ['flavor', /^.+?'s horrible (appearance|apperance) fades and they return to normal\.$/, () => ({})],
  ['flavor', /^(Your|.+?'s) weapon glows with (a heavenly light|infernal power)!$/, () => ({})],
  ['flavor', /^Y(ou|our) group is (no longer )?protected by Divine Intervention!$/, () => ({})],
  ['flavor', /^(Your|.+?'s) weapon begins channeling the strength of the earth\.$/, () => ({})],
  ['flavor', /^DamageMod: [\d.]+ \| BaseDamageCap: [\d.]+ \| Critical Chance: \d+%$/, () => ({})],
  ['flavor', /^You perform your .+? perfectly!\s*\([+-]?\d+, GR: [\d.]+\)$/, () => ({})],
  ['flavor', /^.+? Task: \d+\/\d+ kills \(Tier \d+\)$/, () => ({})],
  ['flavor', /^.+? armor appears more fragile!$/, () => ({})],
  ['flavor', /^You feel more (dextrous|agile|intelligent|stronger)!$/, () => ({})],
  ['flavor', /^You need to stand still to deploy a boat\.$/, () => ({})],
  ['flavor', /^Craft queue repeating recipe, got \d+\/\d+ successes with \d+ attempts so far\.$/, () => ({})],
  ['flavor', /^.+? slams (his|her|its|their) paw on the ground\.$/, () => ({})],
  ['flavor', /^Mob Type Bonus: -?[\d,]+$/, () => ({})],
  ['flavor', /^You stand up\.$/, () => ({})],
  ['flavor', /^"+$/, () => ({})],
  ['flavor', /^.+? blocks you from .+?'s attack! \(Block Chance: [\d.]+%\)$/, () => ({})],
  ['flavor', /^.+? is zoning and is temporarily immune to PvP attacks!$/, () => ({})],
  ['flavor', /^.+? is coughing up acid smoke\.$/, () => ({})],
  ['flavor', /^You pick up [\d,]+ (gold|silver|copper)(,\s*[\d,]+ (gold|silver|copper))*\.$/, () => ({})],
  ['flavor', /^.+? contributed \d+ supplies to the .+? blueprint\.$/, () => ({})],
  ['flavor', /^You are (protected by a defensive aura|surrounded by a protective aura)!$/, () => ({})],
  ['flavor', /^Effectiveness \(bonus \/ crit\): [\d.]+$/, () => ({})],
  ['flavor', /^(chance to be missed|miss rate): \d+% rand: [\d.]+$/, () => ({})],
  ['flavor', /^.+?'s group \(size: \d+\) picks up an? .+?\.$/, () => ({})],
  ['flavor', /^.+? picks up (an? )?.+?\.$/, () => ({})],
  ['flavor', /^.+?'s fanaticism fades\.$/, () => ({})],
  ['flavor', /^.+? yells for help!$/, () => ({})],
  ['flavor', /^You raise to level \d+(?: Stage \d+)?!$/, () => ({})],
  ['flavor', /^You received .+? as your reward!$/, () => ({})],
  ['flavor', /^Attack Speed: [\d.]+s$/, () => ({})],
  ['flavor', /^This chest contains treasures from your recent victory\.$/, () => ({})],
  ['flavor', /^You have emptied the exploration chest\.$/, () => ({})],
  ['flavor', /^You are healed by Divine Intervention for \d+!$/, () => ({})],
  ['flavor', /^A hole can be made in this wall!$/, () => ({})],
  ['flavor', /^Kill Report$/, () => ({})],
  ['flavor', /^You have activated quickcast\.$/, () => ({})],
  ['flavor', /^.+? has been promoted to .+?\.$/, () => ({})],
  ['flavor', /^(You|Your .+?) cannot absorb any more (life|power)\.$/, () => ({})],
  ['flavor', /^.+?'s infection clears up\.$/, () => ({})],
  ['flavor', /^.+? critically hits your .+? for an additional \d+ damage!(\s*\(Crit Chance:\s*[\d.]+%\))?$/, () => ({})],
  ['flavor', /^.+? from (Albion|Hibernia|Midgard) (has captured|lost) the .+? Relic\.$/, () => ({})],
  ['flavor', /^You are healed by [\w' ]+?\.$/, () => ({})],
  ['flavor', /^You (no longer )?concentrate on blocking the blows of .+?\.?!?$/, () => ({})],
  ['flavor', /^You are worthy of my gratitude!$/, () => ({})],
  ['flavor', /^You can chose ONE of the following:$/, () => ({})],
  ['flavor', /^.+? can't attack as fast as normal\s*!$/, () => ({})],
  ['flavor', /^.+? is surrounded by constricting bonds!$/, () => ({})],
  ['flavor', /^For completing your task, you are awarded with bonus experience and \d+ Realm Points!$/, () => ({})],
  ['flavor', /^You gain an extra [\d,]+ XP for killing this monster for the first time!$/, () => ({})],
  ['flavor', /^Too many messages are coming in\. Message list truncated\.$/, () => ({})],
  ['flavor', /^Your spell rips away some of your target's enhancing magic\.$/, () => ({})],
  ['flavor', /^.+? becomes the battle group leader\.$/, () => ({})],
  ['flavor', /^You critically hit (the |an? )?.+? for an additional \d+ damage!(\s*\(Crit Chance:\s*[\d.]+%\))?$/, () => ({})],
  ['flavor', /^You prepare the .+? for firing\. \([\d.]+s until armed\)$/, () => ({})],
  ['flavor', /^This mob is charmable \(.+?\)\.$/, () => ({})],
  ['flavor', /^You have been in combat recently and cannot use this item!$/, () => ({})],
  ['flavor', /^.+? blows a kiss to .+?!$/, () => ({})],
  ['flavor', /^.+? says\s*:\s*.+$/, () => ({})],
  ['flavor', /^.+? becomes more vulnerable to your weapon\.?$/, () => ({})],
  ['flavor', /^You can't see your target from here!$/, () => ({})],
  ['flavor', /^You need to wait \d+ more seconds? before casting a spell!$/, () => ({})],
  ['flavor', /^You (join|leave) the battle group\.$/, () => ({})],
  ['flavor', /^You can't get that!$/, () => ({})],
  ['flavor', /^.+? missed! \(Miss Chance: [\d.]+%\)$/, () => ({})],

  // ---- round 3: cleanup of the remaining ≥10x-repeated templates --------
  ['flavor', /^.+? is no longer entranced\.$/, () => ({})],
  ['flavor', /^Duration \d+ min$/, () => ({})],
  ['flavor', /^You (lower|recover) your defenses[.!]$/, () => ({})],
  ['flavor', /^Your .+? is now armed!$/, () => ({})],
  ['flavor', /^You fire the .+?!$/, () => ({})],
  ['flavor', /^The .+? hits Keep (Gate|Door) for \d+ dmg!$/, () => ({})],
  ['flavor', /^.+? blushes at .+?\.$/, () => ({})],
  ['flavor', /^You are rooted to the ground!$/, () => ({})],
  ['flavor', /^Your pet is too far away from the target!$/, () => ({})],
  ['flavor', /^.+?'s energy shield fades\.$/, () => ({})],
  ['flavor', /^This item is too powerful for you to benefit from its magical properties!$/, () => ({})],
  ['flavor', /^.+? gains a clinical precision to its death dealing\.$/, () => ({})],
  ['flavor', /^Your guild is awarded \d+ merit points!$/, () => ({})],
  ['flavor', /^\d+\) <(Leader|Member)>.+$/, () => ({})],
  // "/bg roster" / "/bgwho" listing rows: "2) (Bard)Airmid (Eldritch)Nuki ..." —
  // a group number followed by one or more "(Class)Name" pairs with no
  // space between the class parens and the name that follows them.
  ['flavor', /^\d+\)\s+(\(\w+\)\S+\s*)+$/, () => ({})],
  ['flavor', /^.+? is no longer guarding you\.$/, () => ({})],
  ['flavor', /^.+? begins to charge wildly!$/, () => ({})],
  ['flavor', /^.+? doesn't currently have a target\.$/, () => ({})],
  ['flavor', /^The energy of the relic rushes through you, awarding you with more XP!$/, () => ({})],
  ['flavor', /^(Albion|Hibernia|Midgard) Deathblows: \d+$/, () => ({})],
  ['flavor', /^Capture Report$/, () => ({})],
  ['flavor', /^You can't see your target!$/, () => ({})],
  ['flavor', /^Total members online:\s+\d+$/, () => ({})],
  ['flavor', /^\[Personal\]: [\d.]+$/, () => ({})],
  ['flavor', /^You lose some experience!$/, () => ({})],
  ['flavor', /^This item can't be sold\.$/, () => ({})],
  ['flavor', /^.+? attacks you and you (block|parry|evade) the blow!(\s*\([\w\s]+?:\s*[\d.]+%\))?$/, () => ({})],
  ['flavor', /^You begin work on the .+?\.$/, () => ({})],
  ['flavor', /^You successfully make the .+?!(\s*\(\d+\))?$/, () => ({})],
  ['flavor', /^Server restart in [\d:]+ \(.+?\)!$/, () => ({})],
  ['flavor', /^.+? waves to .+?\.$/, () => ({})],
  ['flavor', /^.+? already has this effect!$/, () => ({})],
  ['flavor', /^Your active buffs have been cancelled due to your effective level changing\.$/, () => ({})],
  ['flavor', /^RP earned from kills: \d+$/, () => ({})],
  ['flavor', /^Kills that have earned RP: \d+$/, () => ({})],
  ['flavor', /^Your chance to resist: [\d.]+ RandomNumber: [\d.]+$/, () => ({})],
  ['flavor', /^Your group's continued efforts have granted you \d+ contribution points\.$/, () => ({})],
  ['flavor', /^.+? shrugs off the effect! \(\d+%\)$/, () => ({})],
  ['flavor', /^You begin to move more slowly!$/, () => ({})],
  ['flavor', /^The battlegroup is now private\.$/, () => ({})],
  ['flavor', /^You have exceeded the level cap of this battleground!$/, () => ({})],
  ['flavor', /^You are too fatigued to sprint!$/, () => ({})],
  ['flavor', /^You can't attack when you are stunned!$/, () => ({})],
  ['flavor', /^You move normally again\.$/, () => ({})],
  ['flavor', /^You feel invigorated!$/, () => ({})],

  // ---- /record macro system — these are bare, untagged client messages
  // (no "@@" channel prefix) just like a real /bg center broadcast, so
  // without a rule here they'd fall all the way through to the
  // bg_broadcast catch-all below and show up in the bg ticker as if
  // someone had typed them. Reported by a user seeing exactly this in
  // their log:
  //   Recording is stopped.
  //   Record with name <nsDemez> saved.
  //   Record [nsDemez] contains 2 actions.
  //   (1) Spell: Expel Sight
  //   (2) Spell: Awaking Scream
  // "Recording is started." is the documented counterpart to "...is
  // stopped." for the same /record toggle, included on the same basis
  // even though it wasn't in the reported example. The numbered-action
  // line is kept general (any action-type word, not just "Spell") since
  // /record can presumably also list Style/Ability/etc. entries the same
  // way. -----------------------------------------------------------------
  ['flavor', /^Recording is (started|stopped)\.$/, () => ({})],
  ['flavor', /^Record with name <.+?> saved\.$/, () => ({})],
  ['flavor', /^Record \[.+?\] contains \d+ actions?\.$/, () => ({})],
  ['flavor', /^\(\d+\) \w+: .+$/, () => ({})],

  // ---- /bg center screen-broadcast (catch-all — MUST stay last) -----------
  // /bg center puts arbitrary free-typed text in the middle of everyone's
  // screen for a few seconds; the log records it as a completely bare line
  // with no channel tag, no speaker name, no quotes — the one thing every
  // other kind of chat always has (they all start with "@@", stripped
  // earlier) and that every system/combat message template above has (a
  // fixed, recognizable shape). There's no positive signal to match on, so
  // this is a last-resort catch-all: whatever reaches this point already
  // isn't a tagged chat line and didn't match any known template above it,
  // so it's treated as a /bg center broadcast. That means a not-yet-seen
  // system message could occasionally get mistaken for one — if that
  // happens, it's a sign this list above needs one more pattern added.
  ['bg_broadcast', /^(.+)$/, m => ({ text: m[1] })],
];

function toNum(s) { return parseInt(String(s).replace(/,/g, ''), 10); }

// True when a cc_landed/resist_generic's own target is the exact same
// creature as the pending pet-cast that would otherwise get credited as its
// source — see the cc_landed/resist_generic branches below for why that
// collision means "something landed on our pet", not "our pet's cast
// landed on something". cc_landed/resist_generic's target capture keeps a
// leading "The "/"A "/"An " article (it's just "(.+?) is entranced!" etc.),
// while pet_cast's capture doesn't ("The (.+?) casts a spell!"), so the
// article has to be stripped before comparing.
function isSelfTargetingPetCast(target, pendingEffectIsPet, pendingEffectName) {
  if (!pendingEffectIsPet || !pendingEffectName || !target) return false;
  const bare = String(target).replace(/^(the|a|an)\s+/i, '').toLowerCase();
  return bare === String(pendingEffectName).toLowerCase();
}

// Is `name` positively confirmed, by ABILITY_DATABASE and/or
// CL_ABILITY_DATABASE (a champion-level ability can share a name with a
// class spell — e.g. "Onslaught" — so both are always consulted, never just
// one), to be INCAPABLE of the thing being attributed to it? Used right
// before crediting a pending cast with a nearby unnamed damage/heal result
// line (see the melee_plain/heal_out branches below) — the one case this
// exists to catch is a CC/debuff/buff spell (no damage or heal component at
// all) sitting immediately before a damage/heal line from something else
// entirely. Deliberately permissive by construction: a name neither
// database recognizes at all returns false from *both* calls below (never
// blocks), same as a name whose damage/heal capability wasn't confidently
// resolved at build time — see each file's header for exactly when
// isDamage/isHeal are set. Only blocks when EVERY database that has an
// entry for this name agrees it can't do the thing — one source saying
// "yes it can" is enough to never block, same OR-permissive rule used
// everywhere else this data is consulted. A gap in the data can only ever
// fail to catch a bug this way, never block a real attribution.
function confirmedCannotDamage(name) {
  const entries = [ABILITY_DATABASE[name], CL_ABILITY_DATABASE[name]].filter(Boolean);
  return entries.length > 0 && entries.every(info => info.isDamage === false);
}
function confirmedCannotHeal(name) {
  const entries = [ABILITY_DATABASE[name], CL_ABILITY_DATABASE[name]].filter(Boolean);
  return entries.length > 0 && entries.every(info => info.isHeal === false);
}

// `resume`, when given, is the `state` object returned by an earlier call —
// see the return value below. Passing it in lets the live-watch path feed
// just the *new* lines appended to a growing chat.log (instead of
// re-parsing the whole file from scratch every poll) while still getting
// identical results to one big call, by picking every piece of
// cross-line state back up exactly where the previous call left off: the
// day-rollover clock, which weapon/style/cast is still "pending" a result,
// and the last clock value seen (for a no-timestamp line arriving right at
// the start of a new chunk, which would otherwise have no local event to
// fall back on). See filewatch.js for the chunking side of this.
export function parseLogText(rawText, resume) {
  const lines = rawText.split(/\r?\n/);

  const events = [];
  const unmatched = [];
  let dayOffsetMs = resume?.dayOffsetMs ?? 0;          // added each time the printed clock jumps backwards (assumed midnight rollover)
  let lastTimeOfDayMs = resume?.lastTimeOfDayMs ?? -1; // never reset — the whole file is one continuous forward timeline
  const base = 0; // elapsed ms from the first line's own time-of-day — not a real calendar epoch
  let sawAnyOpen = resume?.sawAnyOpen ?? false;
  let inInfoBlock = resume?.inInfoBlock ?? false; // inside an item/spell "<Begin Info: ...> ... <End Info>" tooltip dump
  // Carried fallback for a no-timestamp line with no local event yet this
  // call. Defaults to 0 (not null) to match the original single-call
  // behavior for the rare case a file opens with one of these lines before
  // any timestamped line at all — `lastEventClock` itself distinguishes
  // "found nothing" (null) from a genuine 0, so a real resumed value always
  // still wins once there is one.
  let lastClock = resume?.lastClock ?? 0;

  // Neither styles nor spell-damage/heal results carry their own name on
  // the result line — "You perform your Glowing Blade perfectly!" and
  // "You cast a Screeching Scream spell!" are separate lines from the
  // "You attack ... and hit for N damage!" / "You hit ... for N damage!" /
  // "You heal ... for N hit points!" that follow a beat later. These two
  // bits of state bridge that gap so the result can be labeled correctly.
  const STYLE_WINDOW_MS = 3000;
  const CAST_WINDOW_MS = 4000;
  let pendingStyleName = resume?.pendingStyleName ?? null, pendingStyleAt = resume?.pendingStyleAt ?? -Infinity;
  let pendingCastName = resume?.pendingCastName ?? null, pendingCastAt = resume?.pendingCastAt ?? -Infinity;
  // A CC/debuff landing (cc_landed) or an unnamed resist (resist_generic) is
  // attributed to whichever cast — yours or your pet's — most recently
  // happened, and unlike pendingCastName above this one is deliberately NOT
  // cleared on first use: a single AOE cast can land on (or be resisted by)
  // several targets in a row, each producing its own confirmation line.
  const EFFECT_WINDOW_MS = 4000;
  let pendingEffectName = resume?.pendingEffectName ?? null, pendingEffectAt = resume?.pendingEffectAt ?? -Infinity, pendingEffectIsPet = resume?.pendingEffectIsPet ?? false;
  // A DoT or channeled spell (e.g. "Arawn's Inferno") only prints "You cast
  // a ... spell!" ONCE, but then produces a separate bare "You hit <target>
  // for N damage!" line per tick — the exact same line shape as a plain
  // unstyled weapon swing. pendingCastName (below) correctly labels the
  // FIRST tick, but since it's single-use (cleared right after, so an
  // unrelated plain swing a few seconds later doesn't inherit a stale spell
  // name), every tick after the first would otherwise fall through to the
  // "last weapon used" fallback and get completely misattributed — the
  // damage is real, it just lands in the wrong weapon's bucket, sometimes
  // very far from where the player was actually standing when it ticked.
  // Fix: once a tick is confirmed for a spell, keep tracking that spell
  // AND the target it hit — a later bare hit on that same target, within
  // the window (refreshed each tick so a long DoT keeps attributing
  // correctly), is almost certainly another tick of the same thing, while
  // one on any other target is almost certainly an unrelated plain swing.
  // The one exception (handled in the main loop below, not here): several
  // of these lines landing in the exact same logged SECOND — an AE spell
  // splashing onto multiple targets in one tick — all get attributed
  // regardless of target, since there's no way for an unrelated swing to
  // coincide with that same single instant.
  const DOT_TICK_WINDOW_MS = 5000;
  let activeDotName = resume?.activeDotName ?? null, activeDotTarget = resume?.activeDotTarget ?? null, activeDotAt = resume?.activeDotAt ?? -Infinity;
  // A group/AOE heal (e.g. "Group Apotheosis", "Tones of Health") also only
  // prints "You cast a ... spell!" ONCE, then one "You heal <target> for N
  // hit points!" line PER target it actually healed. pendingCastName labels
  // the first of those lines then clears, same as above — but unlike a DoT
  // tick, the rest of a group heal's lines name DIFFERENT targets (your
  // other party members), not the same one repeating. So this tracker
  // deliberately does NOT require a matching target the way activeDotTarget
  // does: any heal_out/heal_out_crit line within the window counts as
  // another target of the same cast, until a new cast (or too long a gap)
  // starts a fresh one.
  const HEAL_BURST_WINDOW_MS = 2500;
  let activeHealName = resume?.activeHealName ?? null, activeHealAt = resume?.activeHealAt ?? -Infinity;
  // heal_out_crit's own line (see its rule above) never names a target —
  // only heal_out does. Track whoever was most recently healed so the crit
  // bonus can still be attributed to someone instead of landing with an
  // undefined target. Exact for the overwhelmingly common case (the crit
  // line follows the heal_out it belongs to, same tick); a best-effort
  // guess only for a spread-heal's bonus line, which the game prints
  // BEFORE that cast's own heal_out lines and which conceptually spreads
  // across more than one recipient anyway — there's no single "right"
  // target to blame it on in that case either way.
  let lastHealTarget = resume?.lastHealTarget ?? null;
  // Same burst-window idea as activeHealName above, kept as its own tracker
  // (not shared with activeHealName) so a heal and a power-transfer cast
  // happening moments apart never bleed into each other's attribution —
  // see power_transfer's own rule/comment above for the ability this is for.
  let activePowerName = resume?.activePowerName ?? null, activePowerAt = resume?.activePowerAt ?? -Infinity;
  // Every pet name this log has confirmed belongs to the PLAYER — i.e. it's
  // appeared on a line that only ever makes sense for your own pet ("is now
  // under your control", "Your X attacks...", "You command X to..."). Same
  // signal aggregate.js's own petNames set is built from (kept in sync with
  // that list below), just accumulated here, line by line, as the log is
  // read, since pet_cast's attribution below needs to know this before the
  // rest of the file has been seen.
  //
  // Reported directly: "The Greater Necroservant casts a spell!" (someone
  // else's necro pet, in a reported Cleric's own log — a BG log shows every
  // nearby pet casting, not just yours) was setting pendingEffectName/
  // pendingEffectIsPet UNCONDITIONALLY below, with no check that this pet
  // was ever actually the log owner's. A CC/debuff line landing on ANY
  // target shortly after then got misattributed to that unrelated pet's
  // cast — and since aggregate.js's merge only drops a cc_landed/resist
  // whose source is a *confirmed* pet (so it can live on the Pets tab
  // instead), an unconfirmed one fell through and landed in the player's
  // OWN "Spells, styles & abilities used" table instead, as if the Cleric
  // had cast a Necromancer pet's spell. Gating pendingEffectName on
  // ownPetNames fixes this at the source: a pet never seen doing something
  // only the log owner's own pet would do is never treated as "ours" at
  // all, so it can neither absorb a CC/resist result nor stomp a real
  // pending attribution (the player's own recent cast, or their actual
  // pet's) that was still in its window.
  const PET_OWNERSHIP_TYPES = new Set([
    'pet_summon', 'pet_command', 'pet_melee', 'pet_melee_stray',
    'pet_hit', 'pet_self_heal', 'pet_lost',
  ]);
  const ownPetNames = new Set(resume?.ownPetNames ?? []);

  for (let li = 0; li < lines.length; li++) {
    const raw = lines[li];
    if (!raw) continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;

    // Item/spell inspection tooltips are pasted verbatim into the log when a
    // player mouses over gear; they carry no combat data and can contain
    // almost any text (stat names, numbers with "damage" in them, etc.) so
    // they must be fully skipped rather than run through the line matcher.
    if (/^\[\d{2}:\d{2}:\d{2}\]\s*<Begin Info/.test(trimmed) || /^<Begin Info/.test(trimmed)) {
      inInfoBlock = true;
      continue;
    }
    if (inInfoBlock) {
      if (/<End Info>/.test(trimmed)) inInfoBlock = false;
      continue;
    }

    const openM = trimmed.match(OPEN_RE);
    if (openM) {
      // Informational only: we deliberately do NOT reset dayOffsetMs/lastTimeOfDayMs
      // here. A relog can happen seconds later (same day) or after the file has
      // skipped ahead by real days with no way to tell from the text alone — the
      // only signal we trust for a day boundary is the printed clock itself going
      // backwards, handled below, regardless of how many "Chat Log Opened" headers
      // appear in between.
      sawAnyOpen = true;
      events.push({ t: null, type: 'session_open', raw: trimmed, dateText: openM[1] });
      continue;
    }
    const closeM = trimmed.match(CLOSE_RE);
    if (closeM) {
      events.push({ t: null, type: 'session_close', raw: trimmed, dateText: closeM[1] });
      continue;
    }

    const lm = trimmed.match(LINE_RE);
    let body, clockMs;
    if (lm) {
      const [, hh, mm, ss, rest] = lm;
      const timeOfDayMs = ((+hh) * 3600 + (+mm) * 60 + (+ss)) * 1000;
      if (lastTimeOfDayMs >= 0 && timeOfDayMs < lastTimeOfDayMs - 5000) {
        // clock went backwards by more than a few seconds -> midnight rollover
        dayOffsetMs += 86400000;
      }
      lastTimeOfDayMs = timeOfDayMs;
      clockMs = base + dayOffsetMs + timeOfDayMs;
      body = rest.trim();
      if (!body) continue;
    } else {
      // Lines with no [HH:MM:SS] prefix: /stats block rows, item-info blocks, etc.
      // Fall back to the carried `lastClock` when this call's own local
      // `events` is still empty (e.g. a chunk that opens with one of these
      // lines) — otherwise identical to the always-fresh-call behavior.
      body = trimmed;
      clockMs = lastEventClock(events) ?? lastClock;
    }

    if (body.startsWith('@@')) {
      if (CHAT_CHANNEL_RE.test(body)) continue; // pure chat, skip entirely
      body = stripAt(body);
    }

    const parsed = matchLine(body);
    if (parsed) {
      if (parsed.type === 'style_perform') {
        pendingStyleName = parsed.payload.name;
        pendingStyleAt = clockMs;
        continue; // setup-only line, not an event itself
      }
      if (PET_OWNERSHIP_TYPES.has(parsed.type)) {
        ownPetNames.add(parsed.payload.pet);
      }
      if (parsed.type === 'cast') {
        pendingCastName = parsed.payload.name;
        pendingCastAt = clockMs;
        pendingEffectName = parsed.payload.name;
        pendingEffectAt = clockMs;
        pendingEffectIsPet = false;
      } else if (parsed.type === 'pet_cast' && ownPetNames.has(parsed.payload.pet)) {
        // Only a pet already confirmed as the player's own (see
        // ownPetNames above) can set the pending effect — an unconfirmed
        // pet's "casts a spell!" line (someone else's, in the same BG)
        // is otherwise left completely alone, exactly like any other
        // unrelated chat line: it neither claims a later CC/resist result
        // nor overwrites whatever attribution window was already pending.
        pendingEffectName = parsed.payload.pet;
        pendingEffectAt = clockMs;
        pendingEffectIsPet = true;
      }

      const payload = { ...parsed.payload };
      let type = parsed.type;

      if (type === 'melee_weapon') {
        if (pendingStyleName && clockMs - pendingStyleAt <= STYLE_WINDOW_MS) {
          payload.styleName = pendingStyleName;
        }
        pendingStyleName = null;
        pendingCastName = null; // a weapon swing means we're past any pending spell result
      } else if (type === 'melee_plain') {
        // The `&& !confirmedCannotDamage(...)` guard is what stops a CC/
        // debuff/buff cast with zero damage component (no Direct Damage,
        // Bolt, DoT, etc.) from absorbing an unrelated damage line that
        // merely happens to land within the window — reported directly: a
        // log showed "Expel Sight" (a pure Nearsight debuff) credited with
        // 504 damage and 3 hits it never actually dealt, just because it
        // was the most recently cast spell when an unrelated hit landed.
        // Falling through here (rather than attributing wrongly) still
        // lets the activeDotName branches below correctly pick up a REAL
        // damage DoT/AE already in progress instead — see ABILITY_DATABASE.
        if (pendingCastName && !confirmedCannotDamage(pendingCastName) && clockMs - pendingCastAt <= CAST_WINDOW_MS) {
          payload.spellName = pendingCastName;
          activeDotName = pendingCastName;
          activeDotTarget = payload.target;
          activeDotAt = clockMs;
          pendingCastName = null;
        } else if (activeDotName && clockMs === activeDotAt) {
          // Another bare "You hit <target> for N damage!" in the EXACT same
          // logged second as the hit just attributed above (or as a
          // previous tick) — an AE spell landing on more than one target
          // at once, each producing its own identical-shaped line with
          // nothing tying them together but that shared timestamp (seen
          // directly in a reported log: a "Deafening Cascade"/"Deafening
          // Explosion" AE nuke hitting 2-3 targets in the same tick, where
          // only the first one was getting attributed and the rest were
          // falling through and getting counted as plain melee — there was
          // no actual melee swing anywhere in that entire log). Not
          // target-restricted, unlike the DoT-tick branch below, but safe
          // from bleeding into a later unrelated swing precisely because
          // it only ever matches the SAME instant, never a later one.
          payload.spellName = activeDotName;
        } else if (activeDotName && payload.target === activeDotTarget && clockMs - activeDotAt <= DOT_TICK_WINDOW_MS) {
          payload.spellName = activeDotName;
          activeDotAt = clockMs; // still ticking — extend the window
        }
      } else if (type === 'heal_out' || type === 'heal_out_crit') {
        // Same guard as melee_plain above, mirrored for heals: a cast
        // ABILITY_DATABASE positively confirms can't heal (e.g. a damage
        // spell, a buff, a debuff) shouldn't absorb a heal result line that
        // happens to land in its window — falls through to activeHealName
        // (a real heal already resolving) instead of attributing wrongly.
        if (pendingCastName && !confirmedCannotHeal(pendingCastName) && clockMs - pendingCastAt <= CAST_WINDOW_MS) {
          payload.spellName = pendingCastName;
          activeHealName = pendingCastName;
          activeHealAt = clockMs;
          pendingCastName = null;
        } else if (activeHealName && clockMs - activeHealAt <= HEAL_BURST_WINDOW_MS) {
          payload.spellName = activeHealName;
          activeHealAt = clockMs; // still resolving — extend the window
        }
        if (type === 'heal_out') {
          lastHealTarget = payload.target;
        } else if (!payload.target) {
          // heal_out_crit's own regex never captures one — see above.
          payload.target = lastHealTarget || 'Unknown';
        }
      } else if (type === 'power_transfer') {
        // Same cast-window attribution as heal_out just above, but its own
        // activePowerName/activePowerAt burst tracker — see its declaration
        // for why this is deliberately separate from activeHealName.
        if (pendingCastName && clockMs - pendingCastAt <= CAST_WINDOW_MS) {
          payload.spellName = pendingCastName;
          activePowerName = pendingCastName;
          activePowerAt = clockMs;
          pendingCastName = null;
        } else if (activePowerName && clockMs - activePowerAt <= HEAL_BURST_WINDOW_MS) {
          payload.spellName = activePowerName;
          activePowerAt = clockMs; // still resolving — extend the window
        }
      } else if (type === 'cc_landed') {
        // A pending pet-cast ("The X casts a spell!") only tells us *that*
        // X cast something, not what it does or who it hit — so when the
        // very next cc_landed's target is that SAME creature (e.g. "The
        // underhill ally is entranced." right after "The underhill ally
        // casts a spell!"), this is an enemy's CC landing ON our pet, not
        // our pet's own cast landing on an enemy, and attributing it to
        // pendingEffectName would have it backwards — seen directly in a
        // reported log, where a pure-caster pet that never melees or
        // self-heals (so never otherwise confirmed as "ours") ended up with
        // a phantom "Landed (CC): 2" row in the Spells table, as if its own
        // generic cast-flavor line were a named ability. ("The " is part of
        // cc_landed's target capture but not pet_cast's, hence the strip.)
        if (!isSelfTargetingPetCast(payload.target, pendingEffectIsPet, pendingEffectName) &&
            pendingEffectName && clockMs - pendingEffectAt <= EFFECT_WINDOW_MS) {
          payload.sourceName = pendingEffectName;
          payload.isPet = pendingEffectIsPet;
        }
      } else if (type === 'resist_generic') {
        if (!payload.source && !isSelfTargetingPetCast(payload.target, pendingEffectIsPet, pendingEffectName) &&
            pendingEffectName && clockMs - pendingEffectAt <= EFFECT_WINDOW_MS) {
          payload.source = pendingEffectName;
          payload.isPet = pendingEffectIsPet;
        }
      }

      if (type !== 'flavor') {
        events.push({ t: clockMs, clock: clockMs, type, raw: body, ...payload });
      }
    } else {
      if (unmatched.length < 500) unmatched.push(body);
    }
  }

  // Carry every piece of cross-line state forward so a later call can pick
  // up exactly where this one left off — see the `resume` param above.
  return {
    events,
    unmatched,
    sawAnyOpen,
    state: {
      dayOffsetMs,
      lastTimeOfDayMs,
      sawAnyOpen,
      inInfoBlock,
      lastClock: lastEventClock(events) ?? lastClock,
      pendingStyleName, pendingStyleAt,
      pendingCastName, pendingCastAt,
      pendingEffectName, pendingEffectAt, pendingEffectIsPet,
      activeDotName, activeDotTarget, activeDotAt,
      activeHealName, activeHealAt, lastHealTarget,
      activePowerName, activePowerAt,
      ownPetNames: Array.from(ownPetNames),
    },
  };
}

function lastEventClock(events) {
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].clock != null) return events[i].clock;
  }
  // `null`, not 0 — 0 is a legitimate clock value (the very first moment in
  // the file) and `?? lastClock` at both call sites needs a true "nothing
  // found yet" sentinel to correctly fall through to the carried resume
  // value instead of masking it with a bogus zero.
  return null;
}

function matchLine(body) {
  for (const [type, re, map] of RULES) {
    const m = body.match(re);
    if (m) return { type, payload: map(m) };
  }
  return null;
}
