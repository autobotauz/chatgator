// User-facing changelog, shown from the "What's new" button in the header
// (see index.html's #btnChangelog/#changelogDialog, wired up in app.js).
//
// Newest entry first. Keep each one simple: a date, a short title, and a
// few plain-language bullets — this is for players wondering what changed,
// not a commit log, so skip file/function names and internal "why" detail.
//
// Add a new entry here in the same commit whenever a change is something a
// player would actually notice (a fix, a new tab, new sample data, a
// rename, a new feature...). Pure internal cleanup/refactors with no
// visible effect don't need one.
export const CHANGELOG = [
  {
    date: '2026-10-25',
    title: "Pets that aren't yours stop stealing credit",
    bullets: [
      "Fixed: other players' (or enemies') pets no longer show up in your own Spells & Styles list",
      'Moved the "damage by spell/style/weapon" table into Spells & Styles — it was showing up twice',
      'Renamed the Damage tab to "Punched" — it\'s just damage taken now',
    ],
  },
  {
    date: '2026-10-25',
    title: 'Shareable demo links',
    bullets: [
      'Added direct links to try sample sessions (e.g. /demo/Dexii/) instead of picking from a dropdown',
      'Added a Cleric sample log (Dexii)',
      'Charts now start at your first real action instead of showing hours of empty time',
    ],
  },
  {
    date: '2026-10-25',
    title: 'Champion abilities & power transfers',
    bullets: [
      'Added champion-level ability data (heals, damage, cooldowns)',
      "Fixed power-transfer spells (like Gift of Arawn) not showing how much power they moved",
      'Split Spells & Styles into "did damage/healing" vs. "no damage logged" tables',
    ],
  },
  {
    date: '2026-10-24',
    title: 'Multi-character logs',
    bullets: [
      'Pick which character to view when a log has more than one /stats session in it',
      'Fixed healing crits always showing 0%',
    ],
  },
  {
    date: '2026-10-23',
    title: 'Smarter class & pet detection',
    bullets: [
      'Chat Gator now guesses your class from the abilities you use',
      'Fixed turret pets (Animist/Spiritmaster) missing from the Pets tab',
      'Fixed a handful of abilities being silently dropped by the parser',
      'Realm point bonuses now broken down by source instead of lumped together',
    ],
  },
  {
    date: '2026-10-22',
    title: 'More accurate numbers',
    bullets: [
      'Built a full ability database so spells/styles are correctly tagged as damage, heal, or neither',
      'Fixed damage and realm-points-per-hour miscalculations',
      'Added one-click log clearing, with an optional backup first',
      'Polished the landing page',
    ],
  },
  {
    date: '2026-10-21',
    title: 'Live tracking while you play',
    bullets: [
      'Added a live ability cooldown tracker',
      'Made the live refresh rate configurable',
      'Sped up live watching on long sessions',
      'Added more sample logs',
    ],
  },
  {
    date: '2026-10-20',
    title: 'Chat Gator launches',
    bullets: [
      'Parses your DAoC chat.log into damage, healing, and realm point breakdowns',
      'Spells & styles, pets, and defense stats',
      'Live /bg center callout ticker',
    ],
  },
];
