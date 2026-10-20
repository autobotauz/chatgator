// parser.js — turns raw DAoC chat.log text into a flat array of typed events.
// Pure, dependency-free, runs entirely client-side. Nothing in this file
// ever sends data anywhere — it only reads the string it's given.
//
// Every event has: { t: <ms since file start>, clock: <ms-of-day epoch estimate>, type, ...fields }
// `t` is used for ordering/bucketing; `clock` carries enough date info to
// render real timestamps when a session-open date is known.

const MONTHS = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };

// "Sun Oct 15 14:12:36 2023"  ->  Date
function parseLogOpenDate(str) {
  const m = str.match(/\w+\s+(\w+)\s+(\d{1,2})\s+(\d{2}):(\d{2}):(\d{2})\s+(\d{4})/);
  if (!m) return null;
  const [, mon, day, hh, mm, ss, yyyy] = m;
  const monthIdx = MONTHS[mon];
  if (monthIdx === undefined) return null;
  return new Date(Date.UTC(+yyyy, monthIdx, +day, +hh, +mm, +ss));
}

const LINE_RE = /^\[(\d{2}):(\d{2}):(\d{2})\]\s?(.*)$/;
const OPEN_RE = /^\*\*\*\s*Chat Log Opened:\s*(.+)$/;
const CLOSE_RE = /^\*\*\*\s*Chat Log Closed:\s*(.+)$/;

// Chat-channel lines we should never try to run combat regexes against,
// e.g. "@@[Region] Hilyth: ..." or "@@Bleblu says, "...""
const CHAT_CHANNEL_RE = /^@@(\[[A-Za-z ]+\]\s*[^:]+:|[A-Za-z0-9'_-]+\s+(says|tells|yells|whispers|says to you|replies))/;

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
  ['pet_summon', /^The (.+?) is now under your control\.$/, m => ({ pet: m[1] })],
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
  ['pet_hit', /^Your (.+?) hit (.+?) for (\d+) damage!$/, m => ({ pet: m[1], target: m[2], dmg: +m[3] })],
  // "Your <pet> heals itself for N hit points."
  ['pet_self_heal', /^Your (.+?) heals itself for (\d+) hit points?\.$/, m => ({ pet: m[1], amount: +m[2] })],
  // flavor-only pet announcement — not counted, but useful for pet-name discovery
  ['pet_flavor', /^The (.+?) (attacks|casts) /, m => ({ pet: m[1] })],

  // ---- named ability (spell / style / RA / proc) damage -----------------
  // crit MUST be matched before the plain hit rule (both start the same way)
  ['ability_crit', /^Your (.+?) critical(?:ly)? hits (.+?) for an additional (\d+) damage!(?:\s*\(([\d.]+)%\))?$/,
    m => ({ name: m[1], target: m[2], dmg: +m[3], pct: m[4] ? parseFloat(m[4]) : null })],
  ['ability_hit', /^Your (.+?) hits (.+?) for (\d+) damage!$/, m => ({ name: m[1], target: m[2], dmg: +m[3] })],

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
  ['incoming_crit', /^(.+?) critical(?:ly)? hits you for an additional (\d+) damage!$/, m => ({ attacker: m[1], dmg: +m[2] })],
  ['incoming_dmg', /^(.+?) hits you for (\d+)(?:\s*\(([+-]\d+)\))? damage!$/,
    m => ({ attacker: m[1], dmg: +m[2], mod: m[3] ? +m[3] : null })],
  ['incoming_extra', /^(.+?) does (\d+) extra damage to you!$/, m => ({ attacker: m[1], dmg: +m[2] })],

  // ---- healing -------------------------------------------------------------
  ['heal_out_crit', /^You critical(?:ly)? heal (.+?) for an additional (\d+) hit points?!$/, m => ({ target: m[1], amount: +m[2] })],
  ['heal_out', /^You heal (.+?) for (\d+) hit points?!$/, m => ({ target: m[1], amount: +m[2] })],
  ['heal_in', /^(.+?) heals you for (\d+) hit points?\.?!?$/, m => ({ healer: m[1], amount: +m[2] })],
  ['heal_in', /^You are healed by (.+?) for (\d+) hit points?\.?!?$/, m => ({ healer: m[1], amount: +m[2] })],

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
  ['flavor', /^.+? is (stunned|rooted|mesmerized) and cannot move!$/, () => ({})],
  ['flavor', /^.+? (begins moving more slowly|seems vulnerable to .+? magic|is covered in lava|is surrounded by an? .+?|'s (attack speed is slowed|skin erupts in open wounds|strength returns to normal)|looks healthy again|seems weaker)!?\.?$/, () => ({})],
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
  ['flavor', /^You have been charged .+ for the teleport\.$/, () => ({})],
  ['flavor', /^\[.+?\] .+? \(\d+s\),?$/, () => ({})],
  ['flavor', /^.+? (becomes more resistant to .+?|is blessed with holy protection|takes a second wind|begins attacking faster|is entranced|looks calmer)[.!]?$/, () => ({})],
  ['flavor', /^.+?'s (attacks (move with the speed of the wind|return to normal)|armor returns to normal|crush vulnerability fades|enhanced strength fades)\.?$/, () => ({})],
  ['flavor', /^Your attacks move with the speed of the wind!$/, () => ({})],
  ['flavor', /^You are (protected from .+?|entranced|invigorated)!$/, () => ({})],
  ['flavor', /^Your (Strength|Dexterity|Constitution|Piety|Hits|Quickness|Charisma|Empathy|Intelligence|(Crush|Thrust|Slash|Body|Cold|Energy|Heat|Matter|Spirit) resistance) has (increased|decreased)\.$/, () => ({})],
  ['flavor', /^You get [\d,]+ XP \( [\d,]+ base XP \)$/, () => ({})],
  ['flavor', /^You get \d+ bounty points!$/, () => ({})],
  ['flavor', /^You now have a total of \d+ contribution points\.$/, () => ({})],
  ['flavor', /^You gain a total of \d+ experience points?\.$/, () => ({})],
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
  ['flavor', /^.+? (seems to be moving more slowly|is entranced)\.?$/, () => ({})],
  ['flavor', /^.+?'s movement returns to normal\.$/, () => ({})],
  ['flavor', /^.+? attacks move with the speed of the wind!$/, () => ({})],
];

function toNum(s) { return parseInt(String(s).replace(/,/g, ''), 10); }

export function parseLogText(rawText) {
  const lines = rawText.split(/\r?\n/);

  const events = [];
  const unmatched = [];
  let currentOpen = null;      // Date at most recent "Chat Log Opened"
  let dayOffsetMs = 0;         // added when we detect a midnight rollover within one open block
  let lastTimeOfDayMs = -1;
  let fallbackBase = Date.UTC(2000, 0, 1); // used if no Opened marker ever appears
  let sawAnyOpen = false;
  let inInfoBlock = false; // inside an item/spell "<Begin Info: ...> ... <End Info>" tooltip dump

  // Neither styles nor spell-damage/heal results carry their own name on
  // the result line — "You perform your Glowing Blade perfectly!" and
  // "You cast a Screeching Scream spell!" are separate lines from the
  // "You attack ... and hit for N damage!" / "You hit ... for N damage!" /
  // "You heal ... for N hit points!" that follow a beat later. These two
  // bits of state bridge that gap so the result can be labeled correctly.
  const STYLE_WINDOW_MS = 3000;
  const CAST_WINDOW_MS = 4000;
  let pendingStyleName = null, pendingStyleAt = -Infinity;
  let pendingCastName = null, pendingCastAt = -Infinity;

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
      const d = parseLogOpenDate(openM[1]);
      currentOpen = d || currentOpen;
      sawAnyOpen = true;
      dayOffsetMs = 0;
      lastTimeOfDayMs = -1;
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
      const base = (currentOpen ? currentOpen.getTime() - ((currentOpen.getUTCHours() * 3600 + currentOpen.getUTCMinutes() * 60 + currentOpen.getUTCSeconds()) * 1000) : fallbackBase);
      clockMs = base + dayOffsetMs + timeOfDayMs;
      body = rest.trim();
      if (!body) continue;
    } else {
      // Lines with no [HH:MM:SS] prefix: /stats block rows, item-info blocks, etc.
      body = trimmed;
      clockMs = lastEventClock(events);
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
      if (parsed.type === 'cast') {
        pendingCastName = parsed.payload.name;
        pendingCastAt = clockMs;
      }

      const payload = { ...parsed.payload };
      let type = parsed.type;

      if (type === 'melee_weapon') {
        if (pendingStyleName && clockMs - pendingStyleAt <= STYLE_WINDOW_MS) {
          payload.styleName = pendingStyleName;
        }
        pendingStyleName = null;
        pendingCastName = null; // a weapon swing means we're past any pending spell result
      } else if (type === 'melee_plain' || type === 'heal_out' || type === 'heal_out_crit') {
        if (pendingCastName && clockMs - pendingCastAt <= CAST_WINDOW_MS) {
          payload.spellName = pendingCastName;
          pendingCastName = null;
        }
      }

      if (type !== 'flavor') {
        events.push({ t: clockMs, clock: clockMs, type, raw: body, ...payload });
      }
    } else {
      if (unmatched.length < 500) unmatched.push(body);
    }
  }

  return { events, unmatched, sawAnyOpen };
}

function lastEventClock(events) {
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].clock != null) return events[i].clock;
  }
  return 0;
}

function matchLine(body) {
  for (const [type, re, map] of RULES) {
    const m = body.match(re);
    if (m) return { type, payload: map(m) };
  }
  return null;
}
