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
    date: '2026-10-27',
    title: 'Enemies targeted: fills the whole row, not just 5',
    bullets: [
      'The row now shows however many cards actually fit across its width instead of always stopping at a fixed 5 -- on most screens that\'s noticeably more',
      'A narrower window still works correctly, just with fewer slots -- never more than genuinely fit',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Fixed: Overview chart could show hours of dead space',
    bullets: [
      'A /stats checkpoint logged well before your real first action (like the all-zero reset the moment the log file opens) used to stretch the whole chart back to cover it, squeezing all your actual activity into a sliver at the edge',
      'The chart now sizes itself to your actual activity; a stray early/late checkpoint still shows as a line, just pinned to the edge instead of dragging the whole timeline out to meet it',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Overview chart: death and checkpoint markers',
    bullets: [
      'Added a red dashed line for each of your own deaths, right alongside the existing deathblow marker',
      'Added a solid line for each checkpoint boundary (a /stats re-run, or a genuinely new one) so you can see where the data seams are',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Fixed: most targeted enemies were missing from the row',
    bullets: [
      'DAoC confirms an enemy with "...is a member of an enemy realm!" when they\'re solo, but "...an enemy group!" when they\'re grouped -- we were only recognizing the solo wording',
      'Since most enemies you run into are grouped, this was silently dropping the large majority of real targets from the Enemies targeted row',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Empty ad slots no longer leave a blank gap',
    bullets: [
      'If an ad spot has nothing to show, it now disappears entirely instead of sitting there as an empty box',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Enemies targeted: fills left-to-right, red on a kill',
    bullets: [
      'New targets now slide in from the left and push older ones right, instead of the other way around',
      'The row shows all 5 slots right away as dashed placeholders, filling in one by one as you confirm real targets',
      'Once you land the deathblow on someone in the row, their name turns red (with a \u{1F480}) so you can see you got them',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Fixed: Enemies targeted showed race, not player, names',
    bullets: [
      'The enemies-targeted cards were showing words like "Norseman", "Dwarf", "Kobold", and "Frostalf" -- that\'s the enemy\'s race, not their name',
      'Now shows the actual player name from the "You target [Name]." line right before it, same as everywhere else',
    ],
  },
  {
    date: '2026-10-26',
    title: 'New: Enemies targeted row',
    bullets: [
      'Shows the last 5 enemy players you\'ve actually confirmed by examining them in-game — not just anyone you clicked on',
      'Each one links to their Eden Herald page, same as every other player name in the app',
      'New enemies slide in from the right; once there are 5, the oldest drops off the left',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Herald links: your own name, and fewer dead links',
    bullets: [
      'Healing yourself used to show up as the target "You" (and a dead herald link to match) — it now shows your actual character name, linked to your Eden Herald page like everyone else',
      'Your character name at the top of the page (above the /bg ticker) now links to your Eden Herald page too',
      'Names with a space in them (pets, NPCs, siege hazards like "The cauldron of boiling oil") no longer get a herald link at all, since a real character name is never more than one word',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Fixed: cooldown tracker ignored the character picker',
    bullets: [
      'With more than one character\'s /stats block in the same log, the cooldown tracker now shows only the abilities for whichever character is currently selected -- it used to keep showing everyone\'s abilities mixed together no matter who you picked',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Watching a log now survives a page refresh',
    bullets: [
      'Reload the page (say, to pick up a new update) while watching a live chat.log and Chat Gator picks right back up — same data, same tab/encounter selection, usually with no extra clicks',
      'If your browser needs a fresh OK to keep reading the file, you\'ll see a one-click "Resume watching" button instead of losing anything',
      '"New session" still works exactly as before, and clears this so a later refresh starts clean',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Fixed: restarting the watch could reset ability cooldowns',
    bullets: [
      'Clicking "New session" and re-picking the same chat.log mid-cooldown no longer resets abilities back to a fresh cooldown',
      'Already-elapsed time is now preserved correctly, so the countdown picks up where it really should be instead of starting over',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Damage Out is back, renamed the tab back to "Damage"',
    bullets: [
      'The Damage tab now shows "Damage Out" (who you hit) alongside "Damage In" (who hit you) — both by player, not by spell/style (that\'s on Spells & Styles)',
      'Renamed the tab from "Punched" back to "Damage"',
      'Every player name shown anywhere in the app — attackers, heal targets/healers, deathblow victims — now links to their Eden Herald page',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Watching-live indicator matches your realm',
    bullets: [
      'The green "Watching live" dot and label in the header now tint to your class\'s realm, same as the live background',
      'Albion = red, Midgard = blue, Hibernia = green',
    ],
  },
  {
    date: '2026-10-26',
    title: 'Herald links on the Punched tab',
    bullets: [
      "Every attacker in \"Damage taken by attacker\" now links to their Eden Herald page",
      "No check that the name is a real player — an NPC or siege hazard will link to a page with no data, same as searching for them on the herald yourself",
    ],
  },
  {
    date: '2026-10-26',
    title: 'In-game spell, style & ability icons',
    bullets: [
      'The cooldown tracker and the Spells & Styles / Healing tables now show the real in-game icon next to each ability',
      'New "🖼 New icons / Classic icons" button in the header switches between the current and classic icon art',
    ],
  },
  {
    date: '2026-10-25',
    title: 'Realm-colored live background',
    bullets: [
      "The animated background shown while watching a live log now tints to your class's realm",
      'Albion = red, Midgard = blue, Hibernia = green',
    ],
  },
  {
    date: '2026-10-25',
    title: 'Added this changelog',
    bullets: [
      "New \"What's new\" button in the header — click it any time to see what's changed",
    ],
  },
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
