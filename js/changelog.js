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
    date: '2026-11-04',
    title: 'A fresh front page',
    bullets: [
      'The home page now opens with the Chat Gator banner and shows Chat Gator (your full breakdown) and Bask (your group at a glance) side by side',
      'Sample sessions are still one click away, under the drop area',
      'Bask gets the same look: a Bask banner, start or join in one card, and what the group sees next to it',
      'Got a question or found a bug? Message @autobotauz on Discord (Heb / Theorist); this is now on the home page, the FAQ and Bask',
    ],
  },
  {
    date: '2026-11-04',
    title: 'New sample: Hebal the Cabalist',
    bullets: [
      'A real Cabalist session (Hebal) is now in the sample picker, with pets and spell damage',
    ],
  },
  {
    date: '2026-11-04',
    title: 'New: How to use / FAQ page',
    bullets: [
      'How to turn on chat logging (/chatlog or Ctrl+L), where to find chat.log, and what each part of Chat Gator shows. Linked from the ⋯ menu and the home page',
    ],
  },
  {
    date: '2026-11-03',
    title: 'New sample: Hebstrel the Minstrel',
    bullets: [
      'A real Minstrel session (Hebstrel) is now in the sample picker, with songs, mezzes and pets -- replacing the Cleric (Dexii) sample',
    ],
  },
  {
    date: '2026-11-02',
    title: 'Songs now count as abilities used',
    bullets: [
      'Songs and chants ("You begin playing Commanding Cadence!") now show up on Spells & Styles -- in the tables and on the abilities timeline -- and a mez song\'s landings and resists are credited to it',
    ],
  },
  {
    date: '2026-11-02',
    title: 'Fixed: placement realm points',
    bullets: [
      '"You have taken First Place and are awarded with 2000 Realm Points!" (and second, third, etc.) now counts toward your realm points, listed as its own source',
    ],
  },
  {
    date: '2026-11-02',
    title: 'Bask: crit heals no longer counted twice',
    bullets: [
      'Same fix as the main page got earlier: a crit heal\'s "criticals for an extra N" line is mostly overheal and is already included in the heal itself, so Bask no longer adds it on top. Healing totals in a bask now match Chat Gator',
    ],
  },
  {
    date: '2026-11-02',
    title: 'Pick a time window and every tab follows',
    bullets: [
      'Drag across any chart to focus the whole page on that stretch of time: every tile, table and chart on every tab is recalculated for just that window, so you can see exactly what you did and used then. A banner shows the window; Clear (or double-click a chart) goes back',
      'DPS, HPS and RP/hour use only the fighting time inside the window',
      'Works in Bask too: totals, deathblows, deaths, rezzes and charts follow the window. Per-target breakdowns (who hit whom, who healed whom, pets) aren\'t time-stamped in a bask, so they stay whole-session and say so',
    ],
  },
  {
    date: '2026-11-02',
    title: 'Log backups named after your character',
    bullets: [
      'The copy saved when you clear your log is now named chat_<character>_<date and time>.log -- the character you have selected, on a log with several',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Fixed: realm points from activities',
    bullets: [
      'Rewards like "Collection completed. Earned 275 RP…", "Hold won. Earned 660 RP…", Treasure Guide and Patrol Hunt now count toward your realm points, each listed as its own source',
      'They (and "Salvage: 3/3 complete for this rotation.") no longer show up in the /bg center ticker',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Fixed: Bask missing every fight on daylight-saving day',
    bullets: [
      'On the day the clocks change, Bask read every log line as an hour old, treated it as from before you joined, and skipped it, so nothing showed up. The main page\'s cooldown timers were an hour off that day too. Both fixed',
      'Alone in a bask? Your numbers now stay on your page until someone else joins or starts watching, then everything catches up at once. It saves the shared monthly data for when a group is actually looking',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Live watching keeps up in the background',
    bullets: [
      'Chrome slows down tabs that have been in the background for 5 minutes, so while you were in the game window your log was only being checked about once a minute (in Bask, numbers reached the group up to a minute late)',
      'Chat Gator and Bask now keep their regular pace in a background tab: your log is checked every few seconds and Bask sends your numbers on time',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Sessions started today',
    bullets: [
      'The Chat Gator and Bask start pages now show how many sessions and baskets people have started today',
      'To count them, starting a session from your own log now sends one small note: your character\'s name, class and realm (if known) and the time. Your log itself still never leaves your machine. Samples, snapshots and refreshes don\'t count',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Healing received on the Overview chart',
    bullets: [
      'The Activity over time chart now has a Healing received line alongside healing done, damage taken and realm points',
    ],
  },
  {
    date: '2026-11-01',
    title: 'Bask season',
    bullets: [
      'Bask runs on a free plan with a monthly data allowance. The start page and the bask bar now show about how many hours of basking are left this month, and warn when it\'s running low',
      'If the month\'s allowance runs out, the bask season closes until it resets: you\'ll see a clear notice, new baskets can\'t start, and a running bask switches to solo. Your own numbers keep updating, and you can still download the group\'s numbers',
    ],
  },
  {
    date: '2026-10-31',
    title: 'Bask: clearer "Others"',
    bullets: [
      'Bask names each player\'s top 24 targets, attackers and so on, and groups the rest to keep shared data small. That group now says how many it holds, like "Others (31 more)", and hovering it explains why',
    ],
  },
  {
    date: '2026-10-31',
    title: 'Bask: @tag markers',
    bullets: [
      'Type @tag <text> in any chat channel during a bask (say, @tag koth) and a labelled line appears at that moment on the group charts for everyone, showing who tagged it',
      'Only your own tags are shared, and only the tag text, never the rest of your chat',
    ],
  },
  {
    date: '2026-10-31',
    title: 'Chart filters and a tidier layout',
    bullets: [
      'Click any label in a chart\'s legend (Overview, Realm Points, Pets) to show only that line or marker; click it again to bring everything back',
      'The abilities timeline on Spells & Styles has Crits only / Deathblows only filters',
      'Removed the Raw / Debug tab and a couple of long explanation paragraphs',
    ],
  },
  {
    date: '2026-10-31',
    title: 'See which ability got the deathblow',
    bullets: [
      'On the Spells & Styles timeline, the hit that landed each deathblow gets a red ring (and a 💀 in its tooltip), so you can see which ability or style finished them off',
    ],
  },
  {
    date: '2026-10-31',
    title: 'New: resurrects & demezzes on the Healing tab',
    bullets: [
      'Same layout as Bask: Resurrections and Cure mezz sections showing who rezzed whom, with a table of each one',
      'Covers rezzes you cast (including Perfect Recovery) and rezzes you received; your side shows who you had targeted, since the log doesn\'t say who it landed on',
    ],
  },
  {
    date: '2026-10-31',
    title: 'New: @tag markers on the charts',
    bullets: [
      'Type "@tag <anything>" in any chat channel (e.g. in group chat: @tag koth) and a labelled line appears at that moment on every time chart -- Overview, Realm Points, Pets and the abilities timeline',
      'Only your own tags count, so a groupmate typing @tag won\'t mark your charts',
    ],
  },
  {
    date: '2026-10-30',
    title: 'A cleaner header',
    bullets: [
      'The top bar is down to a few same-sized buttons. "Watching live" now sits next to the Chat Gator name, and one button switches between Stop watching and New session',
      'Download snapshot, Clear log file, What\'s new and the icon style moved into the ⋯ menu (a dot on it means there\'s something new here)',
      'Clear log now asks in one step: save a copy then clear, clear without a copy, or cancel',
      'Live watching refreshes every 5 seconds; the refresh picker is gone',
      'Light and dark now follow your system setting',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Support Chat Gator',
    bullets: [
      'Chat Gator and Bask are made by a fellow player in their spare time. If they help you or your group, there\'s now a ☕ Support link to buy me a coffee or become a member. Thank you!',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Bask: deathblows fixed, rezzes and cure mezz, leader hand-off',
    bullets: [
      'Deathblows and deaths were missing for anyone who joined under a nickname (the kill feed only uses real character names). Bask now offers the name from your log\'s /stats when you join, and typing /stats in game during a bask confirms it and recovers kills it missed. Unconfirmed names show ❔ name',
      'New on the Healing tab: who resurrected whom, and who cast Cure Mezz on whom',
      'The bask leader now passes to the next player after 30 minutes of the leader not playing. If everyone is idle the last one active keeps it, and the first one back takes over',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Fixed: crit heals were counted twice',
    bullets: [
      '"You heal X for N" already includes the crit (capped at what the target was missing); the "Your heal criticals for an extra N" line is the raw bonus, mostly overheal. We were adding both, and counting each crit as an extra heal',
      'Healing totals and HPS now count only what actually landed. Crit rate still counts crits',
      'Note: the game\'s own /stats "HP healed" only counts some of your heals, so it will usually read lower than Chat Gator',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Fixed: realm points from battle ticks and support activity',
    bullets: [
      '"You get N realm points from a Greater/Major/Minor Battle Tick" and "...for your support activity in battle" weren\'t being counted -- in a busy BG session that\'s close to half your RP',
      'Both now count toward your totals and RP/hour, and show as their own sources on the Realm Points tab. Totals now line up with the game\'s own /stats',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Pets tab: clearer damage types',
    bullets: [
      'A pet\'s spell damage (e.g. a dread lich\'s nuke right after "casts a spell!") now shows as Spell instead of Proc',
      'The damage-add buff hits ("Your bonerazer hit X for N damage!") now show as Damage add instead of Proc',
      'A pet\'s crit is added to the same type as the hit it followed, instead of always to Melee',
      'Caster pets that only ever cast (e.g. a bone warmage) are now recognised as pets -- their damage was being counted as yours',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Cleaner /bg center ticker',
    bullets: [
      'Guild info (/gc info), alliance/guild messages, and any line starting with "You" or "Your" no longer show up as /bg center callouts -- those are the game talking to you, not someone\'s broadcast',
      'Quick-cast spells ("You begin quick-casting ...") now count toward Attempted on Spells & Styles',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Fixed: blocks, parries and evades missing from Defense',
    bullets: [
      'Lines like "X attacks you and you evade the blow!" (and block / parry) weren\'t being counted at all -- only the older "You evade X\'s attack!" wording was. Both count now',
    ],
  },
  {
    date: '2026-10-30',
    title: 'New: pet damage over time',
    bullets: [
      'The Pets tab has a damage-over-time chart with one line per pet, with the same drag-to-zoom and hide-idle-time options as Overview',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Bask: lighter on data, and a watching count',
    bullets: [
      'Bask now downloads far less: one small request per refresh, players\' numbers only when they change, and once a minute when the Bask tab is in the background (it catches up as soon as you switch back)',
      'Your own numbers update instantly in the group view; other players\' totals refresh every 30 seconds, charts every 10',
      'New 👀 watching count at the top shows how many people are following the bask without sharing a log',
      'Bask is now clearly marked as a work in progress',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Bask: sleeping and idle players',
    bullets: [
      'A player with nothing of their own in the log for 5 minutes (no hits, heals, casts, getting hit...) now shows as sleeping: greyed out with 💤 ZzZzZz. The realm kill feed scrolling by doesn\'t count as playing',
      'After an hour idle, Bask stops reading that player\'s chat.log. Their card pulses yellow with "needs to reselect chat.log" for everyone, and they get a button to pick it again',
    ],
  },
  {
    date: '2026-10-30',
    title: 'Bask: classes, recent baskets, 12-hour expiry',
    bullets: [
      'Each player now shows their class (in their realm color), worked out from the spells and styles they use, the same way the main page does',
      'The Bask start page lists your recent baskets, so you can get back in even if you lost the code. Closed baskets drop off the list',
      'A bask now closes after 12 hours with no activity instead of 48 hours after it was made -- playing keeps it open',
      'New tip on the start page: begin with a fresh chat.log for faster joining',
    ],
  },
  {
    date: '2026-10-29',
    title: 'Bask: survives a page refresh, and names are taken',
    bullets: [
      'Refreshing the Bask page now puts you straight back in your bask. If you were sharing, one click on Resume sharing picks your log back up (or it resumes by itself if Chrome is set to always allow the file)',
      'You can no longer join as a name someone else is actively using -- you will see "Hebor is already in this bask". The real player can still rejoin from their own browser, or from anywhere once their old page has been quiet for 5 minutes',
    ],
  },
  {
    date: '2026-10-29',
    title: 'Bask: a leader who can boot, ban and unban',
    bullets: [
      'The first player to join a bask leads it (👑 in the roster) and gets boot and ban buttons on everyone else',
      'Boot (🥾) removes a player and their numbers -- handy when someone logged off but left their page sharing. They can join again any time',
      'Ban (⛔) also keeps that name out. A new Banned players list shows who is banned; the leader can unban there, or ban a name before they even join',
      'Leave now frees your spot and keeps your numbers in the group view. If the leader leaves (or goes quiet for 5 minutes) the next player in line takes over; rejoining puts you at the back of the line',
    ],
  },
  {
    date: '2026-10-29',
    title: 'New: Bask, live group sessions',
    bullets: [
      'Start a bask on the new Bask page, send the 6-letter invite code to up to 7 groupmates, and everyone shares live combat numbers from their own chat.log (Chrome/Edge)',
      'Group view: damage and healing in and out over time, who hit each player, who healed whom, resists, interrupts, pets, cooldowns and deathblows',
      'Only names and numbers are shared -- never chat, raw log lines, ability breakdowns or realm points. A bask is deleted 48 hours after it is created; download it first to keep it',
      'Group leaders can "just watch" without a log, from any browser',
    ],
  },
  {
    date: '2026-10-29',
    title: 'Fixed: enemies row refreshing when switching tabs',
    bullets: [
      'The Enemies targeted row no longer redraws every time you change tabs -- it only updates when someone new is examined or the window is resized',
      'The page no longer shifts width between short and long tabs, which was also nudging the row and charts',
    ],
  },
  {
    date: '2026-10-29',
    title: 'New: abilities & styles over time',
    bullets: [
      'Spells & Styles now opens with a timeline: one row per ability or style, one dot each time it landed -- a hit, a heal, a confirmed CC, or a silent debuff/buff cast that wasn\'t resisted (shown faded). Crits are ringed',
      'Hover a dot to see when it landed, who it hit (when the log says), and for how much. Drag to zoom and hide idle time work the same as the Overview chart',
      'Casts on a target that was immune ("can\'t have that effect again yet", enraged, etc.) now count as Failed instead of being ignored',
    ],
  },
  {
    date: '2026-10-29',
    title: 'Zoom into the time charts, and hide idle time',
    bullets: [
      'Click and drag across the Overview or Realm Points chart to zoom into that window -- the chart redraws in finer detail for just that stretch. Double-click or "Reset zoom" to go back',
      'Your zoom stays put while watching a live log, instead of resetting every time new lines come in',
      'New "Hide idle time" option: any stretch of an hour or more with no fights is squeezed down to a thin shaded band labelled with how long it was, so a long break doesn\'t leave the chart mostly empty. On by default; untick it to see real time spacing',
    ],
  },
  {
    date: '2026-10-28',
    title: 'Bolt damage credited to the right spell',
    bullets: [
      'A bolt has to travel, so a spell you cast after it often lands first -- e.g. Final Blast into Theft of Liveliness. Bolt hits were landing on whatever you\'d cast last, leaving bolts showing 0 damage',
      'When more than one recent spell could have caused a hit, we now compare the hit to each spell\'s base damage from the character planner and pick the best match',
      'Debuffs and other non-damage spells cast in between never take a bolt\'s damage',
    ],
  },
  {
    date: '2026-10-28',
    title: 'Spells & Styles table fits without scrolling',
    bullets: [
      'Columns with nothing in them for your character are hidden (Weapon for casters, the cast columns for pure melee), and "Total dmg/heal" is now just "Total"',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Spells & Styles: Attempted, Casted and Interrupted columns',
    bullets: [
      'Both spell tables now show Attempted (you started casting it), Casted (the cast went off), Interrupted (you moved or got hit) and Failed (target already had the effect, or was out of range)',
      '"Landed (CC)" is now just "Landed"',
      'Removed the "Detected class" note -- your class is already shown next to your name',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Defense tab: ablatives and bladeturns',
    bullets: [
      'New tiles for how much damage your ablative absorbed and how many hits a bladeturn stopped; bladeturns also count toward Attacks mitigated',
      'Removed the "Resists by spell / effect" chart -- the same numbers are on the Spells & Styles tab, per spell',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Fixed: debuffs showing 100% resisted',
    bullets: [
      'Many debuffs (like Visions of the Elements) print nothing when they land -- only resists get a line -- so they always showed 100% resisted. Casts that weren\'t resisted now count as landed',
      'New "Failed" column: casts that fizzled because the target already had the effect or was out of range. These no longer count against your resist %',
      'Lines like "X seems weaker!" or "X begins moving more slowly!" show up for everyone\'s spells nearby. They\'re now only credited to your spell when it\'s that kind of spell, so your groupmates\' snares stop inflating your debuffs\' landed count',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Enemies targeted: names colored by realm',
    bullets: [
      'Each enemy\'s name is now tinted by their realm -- red for Albion, blue for Midgard, green for Hibernia -- worked out from the race DAoC shows when you examine them',
      'Hover a card to see the race and realm; Minotaurs stay uncolored since all three realms have them',
      'A deathblow still adds the \u{1F480}, but the name no longer turns red, so it can\'t be mistaken for an Albion player',
    ],
  },
  {
    date: '2026-10-27',
    title: 'Fixed: Tactics and other class abilities missing from cooldowns',
    bullets: [
      'Tactics, Fury, Rampage, Snapshot, Climbing Spikes, Taunting Shout, Remedy, Shadow Strike, Bludgeon, Tracker\'s Alacrity, Immolation and Leeching Bolt never showed up in the cooldown tracker',
      'Their reuse timer is stored in a different format in the game data, which we weren\'t reading',
    ],
  },
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
