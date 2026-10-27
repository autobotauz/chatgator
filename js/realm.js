// Maps each DAoC class name to its realm, and each realm to a color — used
// to tint the ambient live-background (see live-bg.js: its "nodes" and the
// "edges" connecting them) to match whichever player/class is currently
// selected. Albion = red, Midgard = blue, Hibernia = green, same as the
// realms' own in-game banner colors.
//
// Two classes are deliberately left out of CLASS_REALM below:
//   - "Mauler" exists, under the identical name, in all three realms
//     (added in the Darkness Rising expansion) — ABILITY_DATABASE has no
//     way to tell which realm's Mauler a given log's abilities belong to,
//     so this is left unmapped rather than guessed.
//   - "Occultist" isn't an official DAoC class at all. Eden's own charplan
//     export defines it with the exact same spec lines (Deathsight,
//     Painworking, Death Servant) as the real Necromancer, so it's almost
//     certainly Eden's own reskin/rename of that class — mapped to Albion
//     to match the Necromancer it's built from.
export const CLASS_REALM = {
  // Albion
  Armsman: 'Albion', Cabalist: 'Albion', Cleric: 'Albion', Friar: 'Albion',
  Heretic: 'Albion', Infiltrator: 'Albion', Mercenary: 'Albion', Minstrel: 'Albion',
  Necromancer: 'Albion', Occultist: 'Albion', Paladin: 'Albion', Reaver: 'Albion',
  Scout: 'Albion', Sorcerer: 'Albion', Theurgist: 'Albion', Wizard: 'Albion',
  // Midgard
  Berserker: 'Midgard', Bonedancer: 'Midgard', Healer: 'Midgard', Hunter: 'Midgard',
  Runemaster: 'Midgard', Savage: 'Midgard', Shadowblade: 'Midgard', Shaman: 'Midgard',
  Skald: 'Midgard', Spiritmaster: 'Midgard', Thane: 'Midgard', Valkyrie: 'Midgard',
  Warlock: 'Midgard', Warrior: 'Midgard',
  // Hibernia
  Animist: 'Hibernia', Bainshee: 'Hibernia', Bard: 'Hibernia', Blademaster: 'Hibernia',
  Champion: 'Hibernia', Druid: 'Hibernia', Eldritch: 'Hibernia', Enchanter: 'Hibernia',
  Hero: 'Hibernia', Mentalist: 'Hibernia', Nightshade: 'Hibernia', Ranger: 'Hibernia',
  Valewalker: 'Hibernia', Vampiir: 'Hibernia', Warden: 'Hibernia',
};

// rgb() triples, not hex — live-bg.js draws on a <canvas> with rgba(...)
// strings built fresh every animation frame, not CSS, so these need to be
// plain numbers it can drop straight into that string. Picked to match
// this app's existing palette (css/styles.css's --status-critical,
// --series-1, and --status-good) rather than inventing new colors.
export const REALM_COLORS = {
  Albion: '208, 59, 59',    // red — matches --status-critical
  Midgard: '42, 120, 214',  // blue — matches --series-1
  Hibernia: '12, 163, 12',  // green — matches --status-good (the app's original default)
};

// The rgb triple for a class name's realm, or null when the class is
// unmapped (Mauler) or unknown/not confidently inferred at all — callers
// fall back to their own default color in that case.
export function realmColorForClass(className) {
  const realm = className ? CLASS_REALM[className] : null;
  return realm ? REALM_COLORS[realm] : null;
}

// Race -> realm, for enemy players. The game's examine line ("You examine
// Kobold. He is a member of an enemy realm!") only ever reveals an enemy's
// RACE, never their class (see aggregate.js's getEnemiesTargeted), and every
// playable race belongs to exactly one realm -- except Minotaur, which all
// three realms share, so plain "Minotaur" is left unmapped rather than
// guessed. Its realm-specific names (Korazh / Deifrang / Graoch) are mapped
// in case the client ever prints those instead. Keys are lowercase with
// spaces/hyphens removed; look up through realmForRace(), not directly.
export const RACE_REALM = {
  // Albion
  briton: 'Albion', avalonian: 'Albion', highlander: 'Albion', saracen: 'Albion',
  inconnu: 'Albion', halfogre: 'Albion', korazh: 'Albion',
  // Midgard
  norseman: 'Midgard', norsewoman: 'Midgard', troll: 'Midgard', dwarf: 'Midgard',
  kobold: 'Midgard', valkyn: 'Midgard', frostalf: 'Midgard', deifrang: 'Midgard',
  // Hibernia
  celt: 'Hibernia', firbolg: 'Hibernia', elf: 'Hibernia', lurikeen: 'Hibernia',
  shar: 'Hibernia', sylvan: 'Hibernia', graoch: 'Hibernia',
};

// 'Albion' | 'Midgard' | 'Hibernia', or null for an unknown/shared race.
export function realmForRace(race) {
  if (!race) return null;
  return RACE_REALM[race.toLowerCase().replace(/[\s-]+/g, '')] || null;
}
