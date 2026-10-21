// sample-data.js — inlined copies of the sample-logs/*.log files so the
// "Try a sample log" picker works even when the page is opened via
// file:// (where fetch() of a relative path is blocked by the browser).

// Legacy single sample (kept for backward compatibility, no longer wired
// into the UI — superseded by the class-specific logs in SAMPLE_LOGS below).
export const SAMPLE_LOG_TEXT = `

*** Chat Log Opened: Mon Jan 05 20:10:00 2026

[20:10:01] Options: /stats [ rp | kills | deathblows | solo | irs | heal | rez | player <name|target>  ]
Statistics for Testknight this Session:
Total RP: 128450
Deathblows: 42
Solo kills: 3
Deaths: 7
HP healed: 9120 and 310 RP gained from this heal
Resurrections performed: 2
Online time: 3 hours, 12 minutes, 5 seconds
RP/hour: 40015.625
Kills per death: 6
RP per kill: 180
"I Remain Standing...": 2290
[20:10:05] You begin casting a Call Greater Fire Elemental spell!
[20:10:06] You cast a Call Greater Fire Elemental spell!
[20:10:06] The greater fire elemental is now under your control.
[20:10:08] You attack Keep Guard with your sword and hit for 180 (+22) damage!
[20:10:08] You hit Keep Guard for 30 extra damage!
[20:10:09] Keep Guard blocks your attack!
[20:10:11] You attack Keep Guard with your sword and hit for 165 (+19) damage!
[20:10:11] You critically hit for an additional 88 damage! (Crit Chance: 22%)
[20:10:12] Your Brutal Slash hits Keep Guard for 140 damage!
[20:10:13] Your Brutal Slash critically hits Keep Guard for an additional 70 damage!
[20:10:14] Your greater fire elemental attacks Keep Guard and hits for 210 (+5) damage!
[20:10:16] The greater fire elemental attacks Keep Guard and hits!
[20:10:17] Your greater fire elemental attacks Keep Guard and hits for 198 (-3) damage!
[20:10:18] Your greater fire elemental heals itself for 64 hit points.
[20:10:19] Keep Guard parries your attack! (Parry Chance: 9.00%)
[20:10:20] You attack Keep Guard with your sword and hit for 171 (+20) damage!
[20:10:21] Keep Guard resists your Brutal Slash's effect! (Resist Chance: 12.00%)
[20:10:22] Keep Guard hits you for 95 (-20) damage!
[20:10:23] You block Keep Guard's attack against Testknight! (Block Chance: 18.00%)
[20:10:24] Keep Guard hits you for 140 damage!
[20:10:24] Keep Guard critical hits you for an additional 40 damage!
[20:10:25] You evade Keep Guard's attack!
[20:10:26] You heal Testknight for 210 hit points!
[20:10:27] You attack Keep Guard with your sword and hit for 190 (+25) damage!
[20:10:28] You attack Keep Guard and miss!
[20:10:28] You miss! (18%)
[20:10:29] Your Brutal Slash hits Keep Guard for 152 damage!
[20:10:31] Keep Guard dies.
[20:10:31] Keep Guard was just killed by Testknight in Emain Macha.
[20:10:31] You get an additional 25 realm points due to your guild's buff!
[20:10:31] You get 540 realm points!
[20:10:32] A guard at West Pennine has been slain!
[20:10:33] You feel calm and healthy.

*** Chat Log Closed: Mon Jan 05 20:10:40 2026



*** Chat Log Opened: Mon Jan 05 20:11:30 2026

[20:11:31] @@[BattleGroup] Gembo: "mids inc emain"
[20:11:35] You attack Shadow Blade with your sword and hit for 145 (-10) damage!
[20:11:36] Shadow Blade hits you for 210 damage!
[20:11:36] Shadow Blade critical hits you for an additional 60 damage!
[20:11:37] Your Brutal Slash hits Shadow Blade for 133 damage!
[20:11:38] Shadow Blade evades your attack!
[20:11:39] You attack Shadow Blade with your sword and hit for 160 (+12) damage!
[20:11:39] You critically hit Shadow Blade for an additional 95 damage! (24%)
[20:11:40] Sir Cedric heals you for 180 hit points.
[20:11:41] You attack Shadow Blade with your sword and hit for 150 (+14) damage!
[20:11:42] Shadow Blade hits you for 88 (-15) damage!
[20:11:43] You parry Shadow Blade's attack!
[20:11:44] Your greater fire elemental attacks Shadow Blade and hits for 205 (+2) damage!
[20:11:45] Shadow Blade resists the effect! (15.00%)
[20:11:46] You heal Sir Cedric for 240 hit points!
[20:11:47] You critically heal Sir Cedric for an additional 60 hit points!
[20:11:48] You attack Shadow Blade with your sword and hit for 170 (+18) damage!
[20:11:49] Shadow Blade dies.
[20:11:49] Shadow Blade was just killed by Testknight in Emain Macha.
[20:11:49] You get 610 realm points!
[20:11:50] Your war efforts have been rewarded with experience and realm points!
[20:11:52] You have been resurrected by Sir Cedric!
[20:11:55] Mathzor casts a spell!
[20:11:56] Mathzor seems calm and healthy.

*** Chat Log Closed: Mon Jan 05 20:12:10 2026
`;

// Class-specific sample logs, selectable from the "Try a sample log" dropdown.
// Each is a short solo-vs-dummy session captured for that class, so a new
// user can see how Chat Gator renders their own class's spells/styles/pets.
export const SAMPLE_LOGS = {
  bonedancer: {
    label: "Bonedancer",
    text: `

*** Chat Log Opened: Tue Oct 20 20:18:23 2026

[20:18:26] Zelianne was just killed by Swingkong in The Curraghs (Ellan Vannin).
[20:18:26] You target [Level 50 Training Dummy].
[20:18:26] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:18:29] You command the dread commander to kill your target!
[20:18:30] Your bonerazer performs their Havoc perfectly! (+28)
[20:18:30] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:30] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:31] The bonerazer attacks Level 50 Training Dummy and misses!
[20:18:31] The dread commander attacks Level 50 Training Dummy and misses!
[20:18:31] The bonejinxer casts a spell!
[20:18:31] Level 50 Training Dummy is attacking more slowly!
[20:18:31] You begin casting a Obsidian Strike spell!
[20:18:33] You are already casting a spell! You prepare this spell as a follow up!
[20:18:33] You cast a Obsidian Strike spell!
[20:18:33] You hit Level 50 Training Dummy for 162 (-43) damage!
[20:18:33] You gather energy from your surroundings. (Siphon Chance: 10.00%)
[20:18:33] You begin casting a Calcify Skeleton spell!
[20:18:33] The bonejinxer casts a spell!
[20:18:33] Level 50 Training Dummy resists your bonejinxer's effect! (Resist Chance: 51.00%)
[20:18:33] @@[Advice] Lysh: yes FE crit change in archer's
[20:18:34] Your bonerazer performs their Tyr's Fury perfectly! (+28)
[20:18:34] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:34] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:34] @@[Region] Pokeybowington: alb bg nott boats
[20:18:34] Your bonerazer performs their Havoc perfectly! (+28)
[20:18:34] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:34] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:34] You are already casting a spell! You prepare this spell as a follow up!
[20:18:35] You cast a Calcify Skeleton spell!
[20:18:35] Level 50 Training Dummy resists the effect! (Resist Chance: 21.00%)
[20:18:35] You begin casting a Cloud of Dessication spell!
[20:18:35] The bonejinxer casts a spell!
[20:18:35] Level 50 Training Dummy resists your bonejinxer's effect! (Resist Chance: 51.00%)
[20:18:36] Your dread commander performs their Polar Rift perfectly! (+29)
[20:18:36] The dread commander attacks Level 50 Training Dummy and hits!
[20:18:36] Your dread commander attacks Level 50 Training Dummy and hits for 145 (-50) damage!
[20:18:37] You cast a Cloud of Dessication spell!
[20:18:37] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:37] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:37] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:37] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:37] Your bonerazer performs their Havoc perfectly! (+28)
[20:18:37] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:37] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:37] The bonejinxer casts a spell!
[20:18:37] Level 50 Training Dummy resists your bonejinxer's effect! (Resist Chance: 51.00%)
[20:18:38] Your bonerazer performs their Tyr's Fury perfectly! (+28)
[20:18:38] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:38] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:38] Your bonerazer critical hits Level 50 Training Dummy for an additional 41 damage! (Crit Chance: 17%)
[20:18:38] You begin casting a Bones to Ash spell!
[20:18:39] Rhoiwen was just killed by Stunningstylezzs in The Curraghs (Ellan Vannin).
[20:18:39] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:39] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:39] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:39] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:39] You are already casting a spell! You prepare this spell as a follow up!
[20:18:39] The bonejinxer casts a spell!
[20:18:39] Level 50 Training Dummy is diseased!
[20:18:40] Mataspana was just killed by Tupsment in Emain Macha.
[20:18:40] The bonejinxer attacks Level 50 Training Dummy and hits!
[20:18:40] Your bonejinxer attacks Level 50 Training Dummy and hits for 12 (-4) damage!
[20:18:40] You cast a Bones to Ash spell!
[20:18:40] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:40] You begin casting a Render Skeleton spell!
[20:18:40] Your Bones to Ash hits Level 50 Training Dummy for 70 damage!
[20:18:41] The dread commander attacks Level 50 Training Dummy and hits!
[20:18:41] Your dread commander attacks Level 50 Training Dummy and hits for 116 (-40) damage!
[20:18:41] Your bonerazer performs their Tyr's Fury perfectly! (+28)
[20:18:41] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:41] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:41] Your bonerazer critical hits Level 50 Training Dummy for an additional 45 damage! (Crit Chance: 17%)
[20:18:41] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:41] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:41] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:41] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:41] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:41] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:42] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:42] Your Bones to Ash hits Level 50 Training Dummy for 70 damage!
[20:18:42] You cast a Render Skeleton spell!
[20:18:43] You cast a Break Skeleton spell!
[20:18:43] Level 50 Training Dummy resists the effect! (Resist Chance: 30.00%)
[20:18:43] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:43] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:43] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:43] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:44] The bonejinxer attacks Level 50 Training Dummy and misses!
[20:18:44] Thisisthaway was just killed by Longshanks in Odin's Gate.
[20:18:44] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:44] Your Bones to Ash hits Level 50 Training Dummy for 70 damage!
[20:18:44] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:44] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:45] Your bonerazer performs their Havoc perfectly! (+28)
[20:18:45] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:45] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:45] @@[Advice] Oraclee: Falcon's eye RA to incress crit for bow
[20:18:45] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:45] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:45] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:45] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:46] You cast a Boost Bonecaster spell!
[20:18:46] Your dread commander performs their Polar Rift perfectly! (+29)
[20:18:46] The dread commander attacks Level 50 Training Dummy and hits!
[20:18:46] Your dread commander attacks Level 50 Training Dummy and hits for 145 (-50) damage!
[20:18:46] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:46] Your Bones to Ash hits Level 50 Training Dummy for 70 damage!
[20:18:47] Earlobz was just killed by Swingkong in The Curraghs (Ellan Vannin).
[20:18:47] Level 1 Training Dummy is being crushed by an invisible force!
[20:18:47] Your Cloud of Dessication hits Level 1 Training Dummy for 169 damage!
[20:18:47] The destructive energy around Level 1 Training Dummy fades.
[20:18:47] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:47] Your Cloud of Dessication hits Level 50 Training Dummy for 67 damage!
[20:18:47] The destructive energy around Level 50 Training Dummy fades.
[20:18:47] The bonejinxer attacks Level 50 Training Dummy and hits!
[20:18:47] Your bonejinxer attacks Level 50 Training Dummy and hits for 12 (-4) damage!
[20:18:48] You begin casting a Annihilate Movement spell!
[20:18:48] The bonerazer attacks Level 50 Training Dummy and misses!
[20:18:48] Your bonerazer performs their Tyr's Fury perfectly! (+28)
[20:18:48] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:48] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:48] Your bonerazer critical hits Level 50 Training Dummy for an additional 64 damage! (Crit Chance: 17%)
[20:18:48] Level 50 Training Dummy is being crushed by an invisible force!
[20:18:48] Your Bones to Ash hits Level 50 Training Dummy for 70 damage!
[20:18:49] The destructive energy around Level 50 Training Dummy fades.
[20:18:50] You cast a Annihilate Movement spell!
[20:18:50] Level 50 Training Dummy's feet are frozen to the ground!
[20:18:51] Your dread commander performs their Polar Rift perfectly! (+29)
[20:18:51] The dread commander attacks Level 50 Training Dummy and hits!
[20:18:51] Your dread commander attacks Level 50 Training Dummy and hits for 145 (-50) damage!
[20:18:51] Your dread commander critical hits Level 50 Training Dummy for an additional 92 damage! (Crit Chance: 17%)
[20:18:51] The bonejinxer attacks Level 50 Training Dummy and misses!
[20:18:52] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:52] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:52] You cast a Break Skeleton spell!
[20:18:52] Level 50 Training Dummy resists the effect! (Resist Chance: 30.00%)
[20:18:52] Your bonerazer performs their Havoc perfectly! (+28)
[20:18:52] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:52] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:55] The bonejinxer attacks Level 50 Training Dummy and hits!
[20:18:55] Your bonejinxer attacks Level 50 Training Dummy and hits for 12 (-4) damage!
[20:18:55] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:55] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:55] Your bonerazer critical hits Level 50 Training Dummy for an additional 55 damage! (Crit Chance: 17%)
[20:18:55] Your bonerazer performs their Tyr's Fury perfectly! (+28)
[20:18:55] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:55] Your bonerazer attacks Level 50 Training Dummy and hits for 100 (-35) damage!
[20:18:56] The dread commander attacks Level 50 Training Dummy and hits!
[20:18:56] Your dread commander attacks Level 50 Training Dummy and hits for 116 (-40) damage!
[20:18:56] Sabatease was just killed by Cheeftain in The Curraghs (Ellan Vannin).
[20:18:58] You begin casting a Annihilate Movement spell!
[20:18:58] The bonejinxer attacks Level 50 Training Dummy and misses!
[20:18:59] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:59] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:59] You are already casting a spell! You prepare this spell as a follow up!
[20:18:59] The bonerazer attacks Level 50 Training Dummy and hits!
[20:18:59] Your bonerazer attacks Level 50 Training Dummy and hits for 72 (-25) damage!
[20:18:59] Your bonerazer critical hits Level 50 Training Dummy for an additional 8 damage! (Crit Chance: 17%)
[20:18:59] You cast a Annihilate Movement spell!
[20:18:59] Level 50 Training Dummy's feet are frozen to the ground!
[20:18:59] You begin casting a Obsidian Strike spell!
[20:19:00] You cast a Boost Bonecaster spell!
[20:19:01] You cast a Break Skeleton spell!
[20:19:01] Level 50 Training Dummy resists the effect! (Resist Chance: 30.00%)
[20:19:01] Your dread commander performs their Polar Rift perfectly! (+29)
[20:19:01] The dread commander attacks Level 50 Training Dummy and hits!
[20:19:01] Your dread commander attacks Level 50 Training Dummy and hits for 145 (-50) damage!
[20:19:01] You command the dread commander to kill your target!
[20:19:01] You cast a Obsidian Strike spell!
[20:19:01] You hit Level 50 Training Dummy for 162 (-43) damage!
[20:19:02] You command the dread commander to disengage from combat!
[20:19:04] Alzan was just killed by Jucyungs in The Curraghs (Ellan Vannin).

*** Chat Log Closed: Tue Oct 20 20:19:04 2026
`,
  },
  occultist: {
    label: "Occultist",
    text: `

*** Chat Log Opened: Tue Oct 20 20:22:42 2026

[20:22:44] Options: /stats [ rp | kills | deathblows | solo | irs | heal | rez | player <name|target>  ]
Statistics for Heb this Session:
Total RP: 0
Deathblows: 0
Solo kills: 0
Deaths: 0
HP healed: 0
Resurrections performed: 0
Kills per death: 0
"I Remain Standing...": 0
[20:22:45] Earlobz was just killed by Burekcp in Breifine.
[20:22:46] You target [Level 50 Training Dummy].
[20:22:46] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:22:46] Lysh was just killed by Orphann in Breifine.
[20:22:48] Sabatease was just killed by Boarshack in Breifine.
[20:22:49] You command the umbral hulk to kill your target!
[20:22:49] You begin casting a Plague Surge spell!
[20:22:50] You are already casting a spell! You prepare this spell as a follow up!
[20:22:50] You are already casting a spell! You prepare this spell as a follow up!
[20:22:50] You cast a Plague Surge spell!
[20:22:50] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:22:50] You critically hit for an additional 319 damage! (Crit Chance: 43%)
[20:22:50] You begin casting a Theft of Liveliness spell!
[20:22:51] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:22:51] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:22:51] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:22:51] You are already casting a spell! You prepare this spell as a follow up!
[20:22:51] You are already casting a spell! You prepare this spell as a follow up!
[20:22:51] Zelianne was just killed by Swingkong in Breifine.
[20:22:52] You are already casting a spell! You prepare this spell as a follow up!
[20:22:52] Koboldinho was just killed by Keoo in Breifine.
[20:22:52] You cast a Theft of Liveliness spell!
[20:22:52] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:22:52] You cannot absorb any more life.
[20:22:52] You begin casting a Theft of Liveliness spell!
[20:22:52] You are already casting a spell! You prepare this spell as a follow up!
[20:22:52] You are already casting a spell! You prepare this spell as a follow up!
[20:22:53] Pillerran was just killed by Stinkywee in Breifine.
[20:22:53] You are already casting a spell! You prepare this spell as a follow up!
[20:22:53] Bunnyhunt was just killed by Jeffrey in Darkness Falls.
[20:22:53] You cast a Theft of Liveliness spell!
[20:22:53] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:22:53] You critically hit for an additional 255 damage! (Crit Chance: 43%)
[20:22:53] You cannot absorb any more life.
[20:22:53] You begin casting a Final Blast spell!
[20:22:53] You are already casting a spell! You prepare this spell as a follow up!
[20:22:54] You are already casting a spell! You prepare this spell as a follow up!
[20:22:54] Cullu was just killed by Decept in Breifine.
[20:22:54] The umbral hulk attacks Level 50 Training Dummy and misses!
[20:22:54] You cast a Final Blast spell!
[20:22:54] You begin casting a Plague Surge spell!
[20:22:54] You are already casting a spell! You prepare this spell as a follow up!
[20:22:54] Ramenmezz was just killed by Puddinx in Breifine.
[20:22:55] You hit Level 50 Training Dummy for 489 (-42) damage!
[20:22:55] You are already casting a spell! You prepare this spell as a follow up!
[20:22:55] You are already casting a spell! You prepare this spell as a follow up!
[20:22:55] You are already casting a spell! You prepare this spell as a follow up!
[20:22:55] You cast a Plague Surge spell!
[20:22:55] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:22:55] You begin casting a Plague Surge spell!
[20:22:56] You are already casting a spell! You prepare this spell as a follow up!
[20:22:56] You are already casting a spell! You prepare this spell as a follow up!
[20:22:56] You are already casting a spell! You prepare this spell as a follow up!
[20:22:57] You are already casting a spell! You prepare this spell as a follow up!
[20:22:57] You cast a Plague Surge spell!
[20:22:57] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:22:57] You critically hit for an additional 180 damage! (Crit Chance: 43%)
[20:22:57] You begin casting a Plague Surge spell!
[20:22:57] You are already casting a spell! You prepare this spell as a follow up!
[20:22:57] You are already casting a spell! You prepare this spell as a follow up!
[20:22:58] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:22:58] Your umbral hulk attacks Level 50 Training Dummy and hits for 335 (-117) damage!
[20:22:58] You are already casting a spell! You prepare this spell as a follow up!
[20:22:58] You are already casting a spell! You prepare this spell as a follow up!
[20:22:58] You cast a Plague Surge spell!
[20:22:58] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:22:58] You begin casting a Plague Surge spell!
[20:22:58] You are already casting a spell! You prepare this spell as a follow up!
[20:22:58] You are already casting a spell! You prepare this spell as a follow up!
[20:22:59] Boarshack was just killed by Swingkong in Breifine.
[20:22:59] Sonofagunzz was just killed by Deinaria in Breifine.
[20:22:59] You are already casting a spell! You prepare this spell as a follow up!
[20:22:59] You are already casting a spell! You prepare this spell as a follow up!
[20:22:59] You cast a Plague Surge spell!
[20:22:59] Level 50 Training Dummy resists the effect! (Resist Chance: 10.00%)
[20:22:59] You begin casting a Theft of Liveliness spell!
[20:22:59] You are already casting a spell! You prepare this spell as a follow up!
[20:23:00] You are already casting a spell! You prepare this spell as a follow up!
[20:23:00] You are already casting a spell! You prepare this spell as a follow up!
[20:23:00] You are already casting a spell! You prepare this spell as a follow up!
[20:23:01] You are already casting a spell! You prepare this spell as a follow up!
[20:23:01] You cast a Theft of Liveliness spell!
[20:23:01] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:01] You critically hit for an additional 176 damage! (Crit Chance: 43%)
[20:23:01] You cannot absorb any more life.
[20:23:01] You begin casting a Theft of Liveliness spell!
[20:23:01] You are already casting a spell! You prepare this spell as a follow up!
[20:23:01] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:23:01] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:01] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:23:01] You cast a Power Absorb spell!
[20:23:01] You hit Level 50 Training Dummy for 104 (-19) damage!
[20:23:01] Your absorb 55 power to you!
[20:23:02] You are already casting a spell! You prepare this spell as a follow up!
[20:23:02] You cast a Theft of Liveliness spell!
[20:23:02] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:02] You critically hit for an additional 257 damage! (Crit Chance: 43%)
[20:23:02] You cannot absorb any more life.
[20:23:02] You begin casting a Theft of Liveliness spell!
[20:23:02] You are already casting a spell! You prepare this spell as a follow up!
[20:23:02] You are already casting a spell! You prepare this spell as a follow up!
[20:23:03] Rffin was just killed by Sixfeett in Breifine.
[20:23:03] You are already casting a spell! You prepare this spell as a follow up!
[20:23:03] Strellamo was just killed by Whooty in Breifine.
[20:23:03] You are already casting a spell! You prepare this spell as a follow up!
[20:23:03] You are already casting a spell! You prepare this spell as a follow up!
[20:23:03] You cast a Theft of Liveliness spell!
[20:23:03] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:03] You critically hit for an additional 112 damage! (Crit Chance: 43%)
[20:23:03] You cannot absorb any more life.
[20:23:03] You begin casting a Theft of Liveliness spell!
[20:23:03] You are already casting a spell! You prepare this spell as a follow up!
[20:23:04] You are already casting a spell! You prepare this spell as a follow up!
[20:23:04] You are already casting a spell! You prepare this spell as a follow up!
[20:23:04] Healsyoualot was just killed by Decept in Breifine.
[20:23:04] You are already casting a spell! You prepare this spell as a follow up!
[20:23:05] Boones was just killed by Sanblade in Breifine.
[20:23:05] You are already casting a spell! You prepare this spell as a follow up!
[20:23:05] You cast a Theft of Liveliness spell!
[20:23:05] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:05] You cannot absorb any more life.
[20:23:05] You begin casting a Theft of Liveliness spell!
[20:23:05] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:23:05] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:05] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:23:05] You are already casting a spell! You prepare this spell as a follow up!
[20:23:05] You are already casting a spell! You prepare this spell as a follow up!
[20:23:06] You are already casting a spell! You prepare this spell as a follow up!
[20:23:06] You are already casting a spell! You prepare this spell as a follow up!
[20:23:06] You cast a Theft of Liveliness spell!
[20:23:06] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:06] You critically hit for an additional 227 damage! (Crit Chance: 43%)
[20:23:06] You cannot absorb any more life.
[20:23:06] You begin casting a Plague Surge spell!
[20:23:06] You are already casting a spell! You prepare this spell as a follow up!
[20:23:07] You are already casting a spell! You prepare this spell as a follow up!
[20:23:07] You are already casting a spell! You prepare this spell as a follow up!
[20:23:07] You cast a Imbue the Abyss spell!
[20:23:07] You gather energy from your surroundings. (Siphon Chance: 10.00%)
[20:23:07] You are already casting a spell! You prepare this spell as a follow up!
[20:23:07] You cast a Plague Surge spell!
[20:23:07] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:23:07] You begin casting a Plague Surge spell!
[20:23:08] You are already casting a spell! You prepare this spell as a follow up!
[20:23:08] Lolabye was just killed by Homir in Breifine.
[20:23:08] You are already casting a spell! You prepare this spell as a follow up!
[20:23:08] Dronix was just killed by Cheeftain in Breifine.
[20:23:08] You are already casting a spell! You prepare this spell as a follow up!
[20:23:08] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:23:08] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:08] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:23:08] Level 50 Training Dummy resists your umbral hulk's effect! (Resist Chance: 18.00%)
[20:23:08] You are already casting a spell! You prepare this spell as a follow up!
[20:23:08] Drunkard was just killed by Sixfeett in Breifine.
[20:23:09] You cast a Plague Surge spell!
[20:23:09] Level 50 Training Dummy resists the effect! (Resist Chance: 10.00%)
[20:23:09] You begin casting a Plague Surge spell!
[20:23:09] You are already casting a spell! You prepare this spell as a follow up!
[20:23:09] You are already casting a spell! You prepare this spell as a follow up!
[20:23:10] You are already casting a spell! You prepare this spell as a follow up!
[20:23:10] You are already casting a spell! You prepare this spell as a follow up!
[20:23:10] You cast a Plague Surge spell!
[20:23:10] You hit Level 50 Training Dummy for 334 (-63) damage!
[20:23:10] You begin casting a Final Blast spell!
[20:23:10] You are already casting a spell! You prepare this spell as a follow up!
[20:23:10] You are already casting a spell! You prepare this spell as a follow up!
[20:23:11] Alrunaq was just killed by Strazzberrypop in Darkness Falls.
[20:23:11] You are already casting a spell! You prepare this spell as a follow up!
[20:23:11] You cast a Final Blast spell!
[20:23:11] You begin casting a Theft of Liveliness spell!
[20:23:11] You hit Level 50 Training Dummy for 489 (-42) damage!
[20:23:12] You are already casting a spell! You prepare this spell as a follow up!
[20:23:12] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:12] Your umbral hulk attacks Level 50 Training Dummy and hits for 335 (-117) damage!
[20:23:12] You are already casting a spell! You prepare this spell as a follow up!
[20:23:12] You are already casting a spell! You prepare this spell as a follow up!
[20:23:12] You cast a Theft of Liveliness spell!
[20:23:12] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:12] You critically hit for an additional 84 damage! (Crit Chance: 43%)
[20:23:12] You cannot absorb any more life.
[20:23:12] You begin casting a Theft of Liveliness spell!
[20:23:13] Hisstoria was just killed by Cheeftain in Breifine.
[20:23:14] You cast a Theft of Liveliness spell!
[20:23:14] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:14] You cannot absorb any more life.
[20:23:15] The umbral hulk attacks Level 50 Training Dummy and misses!
[20:23:16] Tiguhweeds was just killed by Mogarr in Breifine.
[20:23:18] Barz was just killed by Tappedout in Breifine.
[20:23:19] Krudeljty was just killed by Whooty in Breifine.
[20:23:19] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:19] Your umbral hulk attacks Level 50 Training Dummy and hits for 335 (-117) damage!
[20:23:19] Heduri was just killed by Cheeftain in Breifine.
[20:23:20] You begin casting a Lesser Body Lock spell!
[20:23:21] Unisin was just killed by Picrate in Breifine.
[20:23:21] You cast a Snaring Exhaustion spell!
[20:23:22] You cast a Lesser Body Lock spell!
[20:23:22] Level 50 Training Dummy resists the effect! (Resist Chance: 23.00%)
[20:23:22] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:23:22] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:22] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:23:23] @@[LFG] Havocnecro (50, Necromancer): LFM PL 4p
[20:23:23] You cast a Power Absorb spell!
[20:23:23] You hit Level 50 Training Dummy for 104 (-19) damage!
[20:23:23] Your absorb 55 power to you!
[20:23:23] You begin casting a Lesser Body Lock spell!
[20:23:25] You cast a Lesser Body Lock spell!
[20:23:25] Level 50 Training Dummy resists the effect! (Resist Chance: 23.00%)
[20:23:25] You begin casting a Lesser Body Lock spell!
[20:23:25] Airspro was just killed by Jeffrey in Darkness Falls.
[20:23:26] You are already casting a spell! You prepare this spell as a follow up!
[20:23:26] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:26] Your umbral hulk attacks Level 50 Training Dummy and hits for 335 (-117) damage!
[20:23:26] You cast a Lesser Body Lock spell!
[20:23:26] You begin casting a Lesser Body Lock spell!
[20:23:26] Level 50 Training Dummy's feet are frozen to the ground!
[20:23:27] You move and interrupt your spellcast.
[20:23:27] You begin casting a Final Blast spell!
[20:23:28] You are already casting a spell! You prepare this spell as a follow up!
[20:23:28] You are already casting a spell! You prepare this spell as a follow up!
[20:23:28] You cast a Final Blast spell!
[20:23:28] You begin casting a Theft of Liveliness spell!
[20:23:29] You are already casting a spell! You prepare this spell as a follow up!
[20:23:29] You hit Level 50 Training Dummy for 489 (-42) damage!
[20:23:29] You critically hit for an additional 207 damage! (Crit Chance: 43%)
[20:23:29] You are already casting a spell! You prepare this spell as a follow up!
[20:23:29] Your umbral hulk performs their Rabid Swipe perfectly! (+57)
[20:23:29] The umbral hulk attacks Level 50 Training Dummy and hits!
[20:23:29] Your umbral hulk attacks Level 50 Training Dummy and hits for 392 (-137) damage!
[20:23:29] You command the umbral hulk to disengage from combat!
[20:23:30] You cast a Theft of Liveliness spell!
[20:23:30] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:30] You cannot absorb any more life.
[20:23:30] You gather energy from your surroundings. (Siphon Chance: 10.00%)
[20:23:30] You begin casting a Theft of Liveliness spell!
[20:23:31] You cast a Theft of Liveliness spell!
[20:23:31] You hit Level 50 Training Dummy for 311 (-59) damage!
[20:23:31] You critically hit for an additional 218 damage! (Crit Chance: 43%)
[20:23:31] You cannot absorb any more life.
[20:23:33] Thatboycooking was just killed by Rolig in Breifine.

*** Chat Log Closed: Tue Oct 20 20:23:33 2026
`,
  },
  armsman: {
    label: "Armsman",
    text: `

*** Chat Log Opened: Tue Oct 20 20:27:52 2026

[20:27:54] Electronicax was just killed by Toollyy in Breifine.
[20:27:54] Healsyoualot was just killed by Decept in Breifine.
[20:27:54] You target [Camelot Cleric].
[20:27:54] You examine Camelot Cleric. She is friendly towards you.
[20:27:54] You feel stronger!
[20:27:54] Your Strength has increased.
[20:27:54] You look more healthy!
[20:27:54] Your Constitution has increased.
[20:27:54] You feel more dextrous!
[20:27:54] Your Dexterity has increased.
[20:27:54] You feel stronger!
[20:27:54] Your Strength has increased.
[20:27:54] Your Constitution has increased.
[20:27:54] You feel more agile!
[20:27:54] Your Dexterity has increased.
[20:27:54] Your Quickness has increased.
[20:27:54] You are surrounded by a holy aura.
[20:27:54] You are surrounded by a holy aura.
[20:27:56] Catament was just killed by Rigmcrigstien in Breifine.
[20:27:56] Options: /stats [ rp | kills | deathblows | solo | irs | heal | rez | player <name|target>  ]
Statistics for Hebsman this Session:
Total RP: 0
Deathblows: 0
Solo kills: 0
Deaths: 0
HP healed: 0
Resurrections performed: 0
Kills per death: 0
"I Remain Standing...": 0
[20:27:56] Pveisdumb was just killed by Burekcp in Breifine.
[20:27:57] Ryvid was just killed by Shinichi in Breifine.
[20:27:58] Zelianne was just killed by Mogarr in Breifine.
[20:27:58] Lysh was just killed by Dannzg in Breifine.
[20:28:00] You target [Level 50 Training Dummy].
[20:28:00] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:28:01] You prepare to sprint!
[20:28:01] Crazzxx was just killed by Homir in Breifine.
[20:28:02] Finga was just killed by Rigmcrigstien in Breifine.
[20:28:04] Tehasquemado was just killed by Beeches in Breifine.
[20:28:05] You enter combat mode and target [Level 50 Training Dummy]
[20:28:05] You prepare to perform a Sting!
[20:28:05] You perform your Sting perfectly! (+27, Growth Rate: 0.6)
[20:28:05] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 95 (-33) damage! (Damage Modifier: 1361)
[20:28:06] You prepare to perform a Sting!
[20:28:06] Harwood was just killed by Burekcp in Breifine.
[20:28:06] You perform your Sting perfectly! (+27, Growth Rate: 0.6)
[20:28:06] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 95 (-33) damage! (Damage Modifier: 1361)
[20:28:06] Dannzg was just killed by Largefarva in Breifine.
[20:28:07] You prepare to perform a Sting!
[20:28:08] You perform your Sting perfectly! (+27, Growth Rate: 0.6)
[20:28:08] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 95 (-33) damage! (Damage Modifier: 1361)
[20:28:08] You prepare to perform a Sting!
[20:28:09] You perform your Sting perfectly! (+27, Growth Rate: 0.6)
[20:28:09] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 95 (-33) damage! (Damage Modifier: 1361)
[20:28:10] Seceld was just killed by Homir in Breifine.
[20:28:11] You attempt to use Crushbender Arcanium Dirk.
[20:28:11] You prepare to perform a Slam!
[20:28:11] You perform your Slam perfectly! (+30, Growth Rate: 0.78)
[20:28:11] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 88 (-30) damage! (Damage Modifier: 938)
[20:28:11] Level 50 Training Dummy is stunned and cannot move!
[20:28:11] DMH has claimed Nottmoor Faste!
[20:28:12] You attempt to use Fallen Soldier's Wrath.
[20:28:12] You sheathe Crushbender Arcanium Dirk from your right hand.
[20:28:12] Your Crush resistance has decreased.
[20:28:12] Your Heat resistance has decreased.
[20:28:12] You sheathe Crimson Blade-stopper from your left hand.
[20:28:12] Your Strength has decreased.
[20:28:12] Your Dexterity has decreased.
[20:28:12] You wield Fallen Soldier's Wrath in both hands.
[20:28:12] The magic of Fallen Soldier's Wrath flows through you.
[20:28:12] Your Strength has increased.
[20:28:12] Your Crush resistance has increased.
[20:28:12] Your Heat resistance has increased.
[20:28:12] Your Matter resistance has increased.
[20:28:12] Your Slash resistance has increased.
[20:28:12] Your Thrust resistance has increased.
[20:28:12] You enter combat mode and target [Level 50 Training Dummy]
[20:28:12] You must perform the Phalanx style before this one!
[20:28:12] You must perform the Crippling Blow style before this one!
[20:28:12] You prepare to perform a Phalanx!
[20:28:12] You are now preparing to perform a Crippling Blow style as a backup for Phalanx!
[20:28:13] You perform your Phalanx perfectly! (+90, Growth Rate: 0.72)
[20:28:13] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 334 (-117) damage! (Damage Modifier: 1507)
[20:28:13] Level 50 Training Dummy seems to be moving more slowly.
[20:28:13] You attempt to use Fallen Soldier's Wrath.
[20:28:13] You prepare to perform a Defender's Revenge!
[20:28:13] You must perform the Crippling Blow style before this one!
[20:28:13] You are now preparing to perform a Phalanx style as a backup for Defender's Revenge!
[20:28:13] You have already selected your styles for this round!
[20:28:13] Tinioth was just killed by Xedicus in Folley Lake (Hadrian's Wall).
[20:28:15] Alaurin was just killed by Xedicus in Folley Lake (Hadrian's Wall).
[20:28:16] You are no longer ready to sprint.
[20:28:16] You perform your Defender's Revenge perfectly! (+107, Growth Rate: 0.9)
[20:28:16] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 351 (-123) damage! (Damage Modifier: 1507)
[20:28:16] Level 50 Training Dummy already has this effect!
[20:28:17] You attempt to use Fallen Soldier's Wrath.
[20:28:17] You must perform the Phalanx style before this one!
[20:28:17] You must perform the Crippling Blow style before this one!
[20:28:17] You prepare to perform a Phalanx!
[20:28:17] You are now preparing to perform a Crippling Blow style as a backup for Phalanx!
[20:28:19] You perform your Crippling Blow perfectly! (+67, Growth Rate: 0.47)
[20:28:19] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 311 (-109) damage! (Damage Modifier: 1507)
[20:28:19] Level 50 Training Dummy's movement returns to normal.
[20:28:19] Level 50 Training Dummy seems to be moving more slowly.
[20:28:20] Haerradfrid was just killed by Puddinx in Breifine.
[20:28:20] You attempt to use Fallen Soldier's Wrath.
[20:28:20] You must perform the Phalanx style before this one!
[20:28:20] You prepare to perform a Mangle!
[20:28:20] You are now preparing to perform a Phalanx style as a backup for Mangle!
[20:28:20] You have already selected your styles for this round!
[20:28:20] Cynbo was just killed by Rigmcrigstien in Breifine.
[20:28:20] Rottie was just killed by Burekcp in Breifine.
[20:28:21] Ranat was just killed by Treesus in Breifine.
[20:28:23] You perform your Mangle perfectly! (+98, Growth Rate: 0.81)
[20:28:23] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 342 (-120) damage! (Damage Modifier: 1507)
[20:28:23] Level 50 Training Dummy is stunned and cannot move!
[20:28:23] Gramaton was just killed by Swingkong in Breifine.
[20:28:24] This style requires a Thrust weapon!
[20:28:26] You miss! (Miss Chance: 10.15%)
[20:28:26] @@Sir Galvon speaks to Jinglebells
[20:28:26] This style requires a Thrust weapon!
[20:28:27] Goldeneyes was just killed by Velocirupter in Nottmoor Faste Watchtower.
[20:28:27] Toollyy was just killed by Tappedout in Breifine.
[20:28:29] Inqui was just killed by Heduri in Breifine.
[20:28:29] @@Sir Galvon speaks to Jinglebells
[20:28:29] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 244 (-85) damage! (Damage Modifier: 1507)
[20:28:29] Your attacks move with the speed of the wind!
[20:28:30] @@Charon speaks to Jinglebells
[20:28:30] Treesus was just killed by Raginchamp in Breifine.
[20:28:30] Jonzey was just killed by Stunningstylezzs in Breifine.
[20:28:30] Level 50 Training Dummy's movement returns to normal.
[20:28:31] @@Charon speaks to Jinglebells
[20:28:31] This style requires a Thrust weapon!
[20:28:32] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 244 (-85) damage! (Damage Modifier: 1507)
[20:28:33] Hawt was just killed by Swingkong in Breifine.
[20:28:33] Minairy was just killed by Tappedout in Breifine.
[20:28:34] This style requires a Thrust weapon!
[20:28:35] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 244 (-85) damage! (Damage Modifier: 1507)
[20:28:35] You hit Level 50 Training Dummy for 56 (-19) damage!
[20:28:35] You cannot absorb any more life.
[20:28:35] You steal 8 endurance.
[20:28:35] Your power is already full.
[20:28:35] Tikabard was just killed by Heduri in Breifine.
[20:28:36] You attempt to use Fallen Soldier's Wrath.
[20:28:36] You must perform the Phalanx style before this one!
[20:28:36] You must perform the Crippling Blow style before this one!
[20:28:36] You prepare to perform a Phalanx!
[20:28:36] You are now preparing to perform a Crippling Blow style as a backup for Phalanx!
[20:28:37] You perform your Phalanx perfectly! (+71, Growth Rate: 0.72)
[20:28:37] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 315 (-110) damage! (Damage Modifier: 1507)
[20:28:37] Level 50 Training Dummy seems to be moving more slowly.
[20:28:38] You attempt to use Crushbender Arcanium Dirk.
[20:28:38] You sheathe Fallen Soldier's Wrath. Both hands are now free.
[20:28:38] Your Strength has decreased.
[20:28:38] Your Crush resistance has decreased.
[20:28:38] Your Heat resistance has decreased.
[20:28:38] Your Matter resistance has decreased.
[20:28:38] Your Slash resistance has decreased.
[20:28:38] Your Thrust resistance has decreased.
[20:28:38] You wield Crushbender Arcanium Dirk in your right hand.
[20:28:38] The magic of Crushbender Arcanium Dirk flows through you.
[20:28:38] Your Crush resistance has increased.
[20:28:38] Your Heat resistance has increased.
[20:28:38] You wield Crimson Blade-stopper in your left hand.
[20:28:38] The magic of Crimson Blade-stopper flows through you.
[20:28:38] Your Strength has increased.
[20:28:38] Your Dexterity has increased.
[20:28:38] You enter combat mode and target [Level 50 Training Dummy]
[20:28:38] You prepare to perform a Shield Swipe!
[20:28:39] Hierbanegra was just killed by Largefarva in Breifine.
[20:28:39] You perform your Shield Swipe perfectly! (+15, Growth Rate: 0.4)
[20:28:39] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 73 (-25) damage! (Damage Modifier: 938)
[20:28:40] Calcazar was just killed by Janicegriffith in Nottmoor Faste Watchtower.
[20:28:41] You attempt to use Crushbender Arcanium Dirk.
[20:28:41] You prepare to perform a Shield Swipe!
[20:28:41] You perform your Shield Swipe perfectly! (+15, Growth Rate: 0.4)
[20:28:41] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 73 (-25) damage! (Damage Modifier: 938)
[20:28:41] Yourx was just killed by Swingkong in Breifine.
[20:28:42] You attempt to use Crushbender Arcanium Dirk.
[20:28:42] You prepare to perform a Shield Swipe!
[20:28:42] Bricker was just killed by Tappedout in Breifine.
[20:28:42] You perform your Shield Swipe perfectly! (+15, Growth Rate: 0.4)
[20:28:42] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 73 (-25) damage! (Damage Modifier: 938)
[20:28:43] Minorthreat was just killed by Decept in Breifine.
[20:28:43] Bozo was just killed by Whooty in Breifine.
[20:28:44] This style requires a Polearm weapon!
[20:28:44] This style requires a Polearm weapon!
[20:28:44] You prepare to perform a Pierce!
[20:28:44] This style requires a Polearm weapon!
[20:28:44] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:28:44] You perform your Pierce perfectly! (+32, Growth Rate: 0.75)
[20:28:44] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 100 (-35) damage! (Damage Modifier: 1361)
[20:28:44] Level 50 Training Dummy's movement returns to normal.
[20:28:44] Level 50 Training Dummy seems to be moving more slowly.
[20:28:45] This style requires a Polearm weapon!
[20:28:45] This style requires a Polearm weapon!
[20:28:45] You prepare to perform a Pierce!
[20:28:45] This style requires a Polearm weapon!
[20:28:45] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:28:45] You perform your Pierce perfectly! (+32, Growth Rate: 0.75)
[20:28:45] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 100 (-35) damage! (Damage Modifier: 1361)
You critically hit Level 50 Training Dummy for an additional 34 damage! (Crit Chance: 10%)
[20:28:46] Level 50 Training Dummy's movement returns to normal.
[20:28:46] Level 50 Training Dummy seems to be moving more slowly.
[20:28:46] This style requires a Polearm weapon!
[20:28:46] This style requires a Polearm weapon!
[20:28:46] You prepare to perform a Pierce!
[20:28:46] This style requires a Polearm weapon!
[20:28:46] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:28:46] Homir was just killed by Redflyagaric in Breifine.
[20:28:46] Beeches was just killed by Cheeftain in Breifine.
[20:28:46] Tekmedic was just killed by Dronix in Breifine.
[20:28:46] You attempt to use Fallen Soldier's Wrath.
[20:28:46] You sheathe Crushbender Arcanium Dirk from your right hand.
[20:28:46] Your Crush resistance has decreased.
[20:28:46] Your Heat resistance has decreased.
[20:28:46] You sheathe Crimson Blade-stopper from your left hand.
[20:28:46] Your Strength has decreased.
[20:28:46] Your Dexterity has decreased.
[20:28:46] You wield Fallen Soldier's Wrath in both hands.
[20:28:46] The magic of Fallen Soldier's Wrath flows through you.
[20:28:46] Your Strength has increased.
[20:28:46] Your Crush resistance has increased.
[20:28:46] Your Heat resistance has increased.
[20:28:46] Your Matter resistance has increased.
[20:28:46] Your Slash resistance has increased.
[20:28:46] Your Thrust resistance has increased.
[20:28:47] You enter combat mode and target [Level 50 Training Dummy]
[20:28:47] You must perform the Phalanx style before this one!
[20:28:47] You prepare to perform a Phalanx!
[20:28:47] This style requires a Thrust weapon!
[20:28:47] You are now preparing to perform a Defender's Rage style as a backup for Phalanx!
[20:28:47] This style requires a Thrust weapon!
[20:28:47] You perform your Phalanx perfectly! (+71, Growth Rate: 0.72)
[20:28:47] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 315 (-110) damage! (Damage Modifier: 1507)
[20:28:47] Level 50 Training Dummy's movement returns to normal.
[20:28:47] Level 50 Training Dummy seems to be moving more slowly.
[20:28:48] You prepare to perform a Defender's Revenge!
[20:28:48] You are now preparing to perform a Phalanx style as a backup for Defender's Revenge!
[20:28:48] This style requires a Thrust weapon!
[20:28:48] You have already selected your styles for this round!
[20:28:48] This style requires a Thrust weapon!
[20:28:49] You perform your Defender's Revenge perfectly! (+83, Growth Rate: 0.9)
[20:28:49] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 327 (-114) damage! (Damage Modifier: 1507)
[20:28:49] Level 50 Training Dummy is stunned and cannot move!
[20:28:50] The forces of Albion led by Janicegriffith have captured Nottmoor Faste Watchtower!
[20:28:51] You attempt to use Fallen Soldier's Wrath.
[20:28:51] You must perform the Phalanx style before this one!
[20:28:51] You must perform the Crippling Blow style before this one!
[20:28:51] You prepare to perform a Phalanx!
[20:28:51] You are now preparing to perform a Crippling Blow style as a backup for Phalanx!
[20:28:52] You perform your Crippling Blow perfectly! (+55, Growth Rate: 0.47)
[20:28:52] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 299 (-105) damage! (Damage Modifier: 1507)
[20:28:52] Level 50 Training Dummy's movement returns to normal.
[20:28:52] Level 50 Training Dummy seems to be moving more slowly.
[20:28:52] You attempt to use Fallen Soldier's Wrath.
[20:28:52] You are too fatigued to use this style!
[20:28:52] You are too fatigued to use this style!
[20:28:52] You are too fatigued to use this style!
[20:28:52] You are too fatigued to use this style!
[20:28:53] Tyl was just killed by Kutbacks in Breifine.
[20:28:54] You miss! (Miss Chance: 10.15%)
[20:28:55] You attempt to use Fallen Soldier's Wrath.
[20:28:55] You are too fatigued to use this style!
[20:28:55] You are too fatigued to use this style!
[20:28:55] You are too fatigued to use this style!
[20:28:55] You are too fatigued to use this style!
[20:28:56] You attempt to use Crushbender Arcanium Dirk.
[20:28:56] You sheathe Fallen Soldier's Wrath. Both hands are now free.
[20:28:56] Your Strength has decreased.
[20:28:56] Your Crush resistance has decreased.
[20:28:56] Your Heat resistance has decreased.
[20:28:56] Your Matter resistance has decreased.
[20:28:56] Your Slash resistance has decreased.
[20:28:56] Your Thrust resistance has decreased.
[20:28:56] You wield Crushbender Arcanium Dirk in your right hand.
[20:28:56] The magic of Crushbender Arcanium Dirk flows through you.
[20:28:56] Your Crush resistance has increased.
[20:28:56] Your Heat resistance has increased.
[20:28:56] You wield Crimson Blade-stopper in your left hand.
[20:28:56] The magic of Crimson Blade-stopper flows through you.
[20:28:56] Your Strength has increased.
[20:28:56] Your Dexterity has increased.
[20:28:56] You enter combat mode and target [Level 50 Training Dummy]
[20:28:56] You are too fatigued to use this style!
[20:28:56] Raginchamp was just killed by Lemielame in Breifine.
[20:28:56] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
[20:28:57] Rigmcrigstien was just killed by Burekcp in Breifine.
[20:28:57] You attempt to use Crushbender Arcanium Dirk.
[20:28:57] You are too fatigued to use this style!
[20:28:58] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
[20:28:58] This style requires a Polearm weapon!
[20:28:58] This style requires a Polearm weapon!
[20:28:58] You prepare to perform a Pierce!
[20:28:58] This style requires a Polearm weapon!
[20:28:58] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:28:59] You attempt to use Crushbender Arcanium Dirk.
[20:28:59] You enter combat mode and target [Level 50 Training Dummy]
[20:28:59] You are too fatigued to use this style!
[20:28:59] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
[20:29:00] You attempt to use Crushbender Arcanium Dirk.
[20:29:00] You prepare to perform a Slam!
[20:29:01] Spindexx was just killed by Swingkong in Breifine.
[20:29:01] You perform your Slam perfectly! (+24, Growth Rate: 0.78)
[20:29:01] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 82 (-28) damage! (Damage Modifier: 938)
[20:29:01] Level 50 Training Dummy can't have that effect again yet!
[20:29:02] Teimuda was just killed by Sabatease in Breifine.
[20:29:02] Shinichi was just killed by Heduri in Breifine.
[20:29:02] You attempt to use Crushbender Arcanium Dirk.
[20:29:02] You are too fatigued to use this style!
[20:29:03] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
You critically hit Level 50 Training Dummy for an additional 26 damage! (Crit Chance: 10%)
[20:29:03] Level 50 Training Dummy's movement returns to normal.
[20:29:03] You attempt to use Crushbender Arcanium Dirk.
[20:29:03] You are too fatigued to use this style!
[20:29:04] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
[20:29:05] You attempt to use Crushbender Arcanium Dirk.
[20:29:05] You are too fatigued to use this style!
[20:29:05] Drardoldric was just killed by Whooty in Breifine.
[20:29:07] Envamp was just killed by Frei in Hvedrungr Hill Ruins (Jamtland Mountains).
[20:29:07] You attempt to use Greater Improved Draught of Invigoration.
[20:29:07] You use Greater Improved Draught of Invigoration. (52/100)
[20:29:07] Greater Improved Draught of Invigoration has been used.
[20:29:08] You enter combat mode and target [Level 50 Training Dummy]
[20:29:08] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 68 (-23) damage! (Damage Modifier: 1361)
[20:29:09] Shadowkiss was just killed by Heduri in Breifine.
[20:29:09] Redflyagaric was just killed by Koboldinho in Breifine.
[20:29:10] This style requires a Polearm weapon!
[20:29:10] This style requires a Polearm weapon!
[20:29:10] You prepare to perform a Pierce!
[20:29:10] This style requires a Polearm weapon!
[20:29:10] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:10] You perform your Liontooth perfectly! (+35, Growth Rate: 0.85)
[20:29:10] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 103 (-36) damage! (Damage Modifier: 1361)
[20:29:10] Level 50 Training Dummy's actions are noticeably slower!
[20:29:10] Haerradfrid was just killed by Whooty in Breifine.
[20:29:11] This style requires a Polearm weapon!
[20:29:11] This style requires a Polearm weapon!
[20:29:11] You prepare to perform a Pierce!
[20:29:11] This style requires a Polearm weapon!
[20:29:11] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:11] You perform your Liontooth perfectly! (+39, Growth Rate: 0.85)
[20:29:11] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 113 (-39) damage! (Damage Modifier: 1483)
[20:29:12] This style requires a Polearm weapon!
[20:29:12] This style requires a Polearm weapon!
[20:29:12] You prepare to perform a Pierce!
[20:29:12] This style requires a Polearm weapon!
[20:29:12] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:13] You perform your Pierce perfectly! (+35, Growth Rate: 0.75)
[20:29:13] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 109 (-38) damage! (Damage Modifier: 1483)
[20:29:13] Level 50 Training Dummy seems to be moving more slowly.
[20:29:13] This style requires a Polearm weapon!
[20:29:13] This style requires a Polearm weapon!
[20:29:13] You prepare to perform a Pierce!
[20:29:13] This style requires a Polearm weapon!
[20:29:13] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:14] You attempt to use Fallen Soldier's Wrath.
[20:29:14] You sheathe Crushbender Arcanium Dirk from your right hand.
[20:29:14] Your Crush resistance has decreased.
[20:29:14] Your Heat resistance has decreased.
[20:29:14] You sheathe Crimson Blade-stopper from your left hand.
[20:29:14] Your Strength has decreased.
[20:29:14] Your Dexterity has decreased.
[20:29:14] You wield Fallen Soldier's Wrath in both hands.
[20:29:14] The magic of Fallen Soldier's Wrath flows through you.
[20:29:14] Your Strength has increased.
[20:29:14] Your Crush resistance has increased.
[20:29:14] Your Heat resistance has increased.
[20:29:14] Your Matter resistance has increased.
[20:29:14] Your Slash resistance has increased.
[20:29:14] Your Thrust resistance has increased.
[20:29:14] You enter combat mode and target [Level 50 Training Dummy]
[20:29:14] You must perform the Phalanx style before this one!
[20:29:14] You prepare to perform a Phalanx!
[20:29:14] This style requires a Thrust weapon!
[20:29:14] You are now preparing to perform a Defender's Rage style as a backup for Phalanx!
[20:29:14] This style requires a Thrust weapon!
[20:29:14] Elowenn was just killed by Burekcp in Breifine.
[20:29:14] You perform your Phalanx perfectly! (+77, Growth Rate: 0.72)
[20:29:14] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 343 (-120) damage! (Damage Modifier: 1643)
[20:29:14] Level 50 Training Dummy's movement returns to normal.
[20:29:14] Level 50 Training Dummy seems to be moving more slowly.
[20:29:15] You prepare to perform a Defender's Revenge!
[20:29:15] You are now preparing to perform a Phalanx style as a backup for Defender's Revenge!
[20:29:15] This style requires a Thrust weapon!
[20:29:15] You have already selected your styles for this round!
[20:29:15] This style requires a Thrust weapon!
[20:29:15] Ranat was just killed by Swingkong in Breifine.
[20:29:16] Tappedout was just killed by Reaviera in Breifine.
[20:29:17] You perform your Defender's Revenge perfectly! (+90, Growth Rate: 0.9)
[20:29:17] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 356 (-125) damage! (Damage Modifier: 1643)
[20:29:17] Level 50 Training Dummy can't have that effect again yet!
[20:29:17] Jediwheels was just killed by Heduri in Breifine.
[20:29:20] You attempt to use Fallen Soldier's Wrath.
[20:29:20] You enter combat mode and target [Level 50 Training Dummy]
[20:29:20] You must perform the Phalanx style before this one!
[20:29:20] You must perform the Crippling Blow style before this one!
[20:29:20] You prepare to perform a Phalanx!
[20:29:20] You are now preparing to perform a Crippling Blow style as a backup for Phalanx!
[20:29:20] You perform your Crippling Blow perfectly! (+59, Growth Rate: 0.47)
[20:29:20] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 325 (-114) damage! (Damage Modifier: 1643)
[20:29:20] You hit Level 50 Training Dummy for 56 (-19) damage!
[20:29:20] You cannot absorb any more life.
[20:29:20] You steal 8 endurance.
[20:29:20] Your power is already full.
[20:29:20] Level 50 Training Dummy's movement returns to normal.
[20:29:20] Level 50 Training Dummy seems to be moving more slowly.
[20:29:21] You attempt to use Fallen Soldier's Wrath.
[20:29:21] You must perform the Phalanx style before this one!
[20:29:21] You prepare to perform a Mangle!
[20:29:21] You are now preparing to perform a Phalanx style as a backup for Mangle!
[20:29:21] You have already selected your styles for this round!
[20:29:21] The Cowtipping Marauders has claimed Nottmoor Faste Watchtower!
[20:29:22] Tirzepatide was just killed by Heduri in Breifine.
[20:29:22] You perform your Mangle perfectly! (+84, Growth Rate: 0.81)
[20:29:22] You attack Level 50 Training Dummy with your Fallen Soldier's Wrath and hit for 350 (-122) damage! (Damage Modifier: 1643)
[20:29:22] Level 50 Training Dummy can't have that effect again yet!
[20:29:23] Lemielame was just killed by Burekcp in Breifine.
[20:29:23] You attempt to use Crushbender Arcanium Dirk.
[20:29:23] You sheathe Fallen Soldier's Wrath. Both hands are now free.
[20:29:23] Your Strength has decreased.
[20:29:23] Your Crush resistance has decreased.
[20:29:23] Your Heat resistance has decreased.
[20:29:23] Your Matter resistance has decreased.
[20:29:23] Your Slash resistance has decreased.
[20:29:23] Your Thrust resistance has decreased.
[20:29:23] You wield Crushbender Arcanium Dirk in your right hand.
[20:29:23] The magic of Crushbender Arcanium Dirk flows through you.
[20:29:23] Your Crush resistance has increased.
[20:29:23] Your Heat resistance has increased.
[20:29:23] You wield Crimson Blade-stopper in your left hand.
[20:29:23] The magic of Crimson Blade-stopper flows through you.
[20:29:23] Your Strength has increased.
[20:29:23] Your Dexterity has increased.
[20:29:23] You enter combat mode and target [Level 50 Training Dummy]
[20:29:23] You prepare to perform a Shield Swipe!
[20:29:25] You miss! (Miss Chance: 12.25%)
[20:29:25] You attempt to use Crushbender Arcanium Dirk.
[20:29:25] You prepare to perform a Shield Swipe!
[20:29:26] You perform your Shield Swipe perfectly! (+17, Growth Rate: 0.4)
[20:29:26] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 81 (-28) damage! (Damage Modifier: 1023)
[20:29:26] Puddinx was just killed by Deinaria in Breifine.
[20:29:27] You attempt to use Crushbender Arcanium Dirk.
[20:29:27] You prepare to perform a Shield Swipe!
[20:29:28] You perform your Shield Swipe perfectly! (+17, Growth Rate: 0.4)
[20:29:28] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 81 (-28) damage! (Damage Modifier: 1023)
[20:29:28] You attempt to use Crushbender Arcanium Dirk.
[20:29:28] You prepare to perform a Shield Swipe!
[20:29:29] You perform your Shield Swipe perfectly! (+17, Growth Rate: 0.4)
[20:29:29] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 81 (-28) damage! (Damage Modifier: 1023)
[20:29:29] Your attacks return to normal.
[20:29:30] You attempt to use Crushbender Arcanium Dirk.
[20:29:30] You prepare to perform a Slam!
[20:29:31] You perform your Slam perfectly! (+34, Growth Rate: 0.78)
[20:29:31] You attack Level 50 Training Dummy with your Crimson Blade-stopper and hit for 98 (-34) damage! (Damage Modifier: 1023)
[20:29:31] Level 50 Training Dummy can't have that effect again yet!
[20:29:31] Kenshiroval was just killed by Burekcp in Breifine.
[20:29:31] Level 50 Training Dummy's movement returns to normal.
[20:29:31] Ramenmezz was just killed by Phockette in Breifine.
[20:29:31] Mogarr was just killed by Sanblade in Breifine.
[20:29:31] This style requires a Polearm weapon!
[20:29:31] This style requires a Polearm weapon!
[20:29:31] You prepare to perform a Pierce!
[20:29:31] This style requires a Polearm weapon!
[20:29:31] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:33] You perform your Liontooth perfectly! (+39, Growth Rate: 0.85)
[20:29:33] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 113 (-39) damage! (Damage Modifier: 1483)
[20:29:33] This style requires a Polearm weapon!
[20:29:33] This style requires a Polearm weapon!
[20:29:33] You prepare to perform a Pierce!
[20:29:33] This style requires a Polearm weapon!
[20:29:33] You are now preparing to perform a Liontooth style as a backup for Pierce!
[20:29:34] You perform your Pierce perfectly! (+35, Growth Rate: 0.75)
[20:29:34] You attack Level 50 Training Dummy with your Crushbender Arcanium Dirk and hit for 109 (-38) damage! (Damage Modifier: 1483)
[20:29:34] Level 50 Training Dummy seems to be moving more slowly.

*** Chat Log Closed: Tue Oct 20 20:29:37 2026
`,
  },
  cleric: {
    label: "Cleric",
    text: `

*** Chat Log Opened: Tue Oct 20 20:25:14 2026

[20:25:15] Options: /stats [ rp | kills | deathblows | solo | irs | heal | rez | player <name|target>  ]
Statistics for Hebic this Session:
Total RP: 0
Deathblows: 0
Solo kills: 0
Deaths: 0
HP healed: 0
Resurrections performed: 0
Kills per death: 0
"I Remain Standing...": 0
[20:25:15] Jediwheels was just killed by Stinkywee in Breifine.
[20:25:17] Bozo casts a spell!
[20:25:17] Drardoldric's weapon begins channeling the strength of the earth.
[20:25:17] Toollyy's weapon begins channeling the strength of the earth.
[20:25:17] Frei was just killed by Envamp in Hvedrungr Hill Ruins (Jamtland Mountains).
[20:25:19] You attempt to use Enhancing Duskwood Staff.
[20:25:19] You sheathe Bloodstained War Hammer from your right hand.
[20:25:19] Your Dexterity has decreased.
[20:25:19] Your Power has decreased.
[20:25:19] Your Slash resistance has decreased.
[20:25:19] Your Crush resistance has decreased.
[20:25:19] Your Thrust resistance has decreased.
[20:25:19] You sheathe Basalt Buckler of Oblivion from your left hand.
[20:25:19] Your Dexterity has decreased.
[20:25:19] Your Power has decreased.
[20:25:19] Your Slash resistance has decreased.
[20:25:19] Your Crush resistance has decreased.
[20:25:19] Your Thrust resistance has decreased.
[20:25:19] You wield Enhancing Duskwood Staff in both hands.
[20:25:19] The magic of Enhancing Duskwood Staff flows through you.
[20:25:19] Your Cold resistance has increased.
[20:25:19] You cast a Archangel's Power spell!
[20:25:19] You cast a Agility of the Archangel spell!
[20:25:19] You cast a Holy Agility spell!
[20:25:19] You cast a Benediction of Fortitude spell!
[20:25:19] You feel stronger!
[20:25:19] Your Strength has increased.
[20:25:19] Your Constitution has increased.
[20:25:19] You feel more dextrous!
[20:25:19] Your Dexterity has increased.
[20:25:19] Your Quickness has increased.
[20:25:19] You feel more dextrous!
[20:25:19] Your Dexterity has increased.
[20:25:19] You look more healthy!
[20:25:19] Your Constitution has increased.
[20:25:19] Tarnkappei casts a spell!
[20:25:21] Tarnkappei casts a spell!
[20:25:21] You begin casting a Test of Faith spell!
[20:25:21] Erezeneb was just killed by Thatboycooking in Breifine.
[20:25:21] Moer was just killed by Dannzg in Breifine.
[20:25:22] Dunky was just killed by Ramplol in Breifine.
[20:25:22] You cast a Test of Faith spell!
[20:25:22] You gather energy from your surroundings. (Siphon Chance: 10.00%)
[20:25:23] Sanblade was just killed by Rolig in Breifine.
[20:25:23] You begin casting a Energy Guard spell!
[20:25:23] Bozo uses Improved Draught of Combined Regeneration.
[20:25:24] Bozo casts a spell!
[20:25:24] The isolationist cleric's serenity fades.
[20:25:24] Misstikal's serenity fades.
[20:25:24] You cast a Energy Guard spell!
[20:25:24] You are protected from energy!
[20:25:24] Your Energy resistance has increased.
[20:25:25] You begin casting a Spiritual Guard spell!
[20:25:25] Alzan was just killed by Heatherlocklear in Breifine.
[20:25:26] Toollyy casts a spell!
[20:25:26] You cast a Spiritual Guard spell!
[20:25:26] You are protected from spirtual magic!
[20:25:26] Your Spirit resistance has increased.
[20:25:26] Tyl casts a spell!
[20:25:27] You begin casting a Guard of Health spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Bozo feels stronger!
[20:25:27] Drardoldric casts a spell!
[20:25:27] Bozo looks more agile!
[20:25:27] Toollyy casts a spell!
[20:25:28] Envamp was just killed by a deserter underling in Hvedrungr Hill Ruins (Jamtland Mountains).
[20:25:28] You cast a Guard of Health spell!
[20:25:28] You are protected from body magic!
[20:25:28] Your Body resistance has increased.
[20:25:29] Toollyy casts a spell!
[20:25:30] Tyl casts a spell!
[20:25:30] You target [Level 50 Training Dummy].
[20:25:30] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:25:30] Bozo casts a spell!
[20:25:30] Tyl's weapon begins channeling the strength of the earth.
[20:25:31] Infirms was just killed by Boarshack in Breifine.
[20:25:31] Tyl casts a spell!
[20:25:31] You attempt to use Bloodstained War Hammer.
[20:25:31] You sheathe Enhancing Duskwood Staff. Both hands are now free.
[20:25:31] Your Cold resistance has decreased.
[20:25:31] You wield Bloodstained War Hammer in your right hand.
[20:25:31] The magic of Bloodstained War Hammer flows through you.
[20:25:31] Your Dexterity has increased.
[20:25:31] Your Power has increased.
[20:25:31] Your Slash resistance has increased.
[20:25:31] Your Crush resistance has increased.
[20:25:31] Your Thrust resistance has increased.
[20:25:31] You wield Basalt Buckler of Oblivion in your left hand.
[20:25:31] The magic of Basalt Buckler of Oblivion flows through you.
[20:25:31] Your Dexterity has increased.
[20:25:31] Your Power has increased.
[20:25:31] Your Slash resistance has increased.
[20:25:31] Your Crush resistance has increased.
[20:25:31] Your Thrust resistance has increased.
[20:25:31] You begin casting a Major Refection spell!
[20:25:31] You are already casting a spell! You prepare this spell as a follow up!
[20:25:31] Sydneyy was just killed by Stinkywee in Breifine.
[20:25:32] Bozo casts a spell!
[20:25:32] You attempt to use Bloodstained War Hammer.
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:32] You attempt to use Bloodstained War Hammer.
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:32] You cast a Major Refection spell!
[20:25:32] You heal Level 50 Training Dummy for 478 hit points!
[20:25:32] You begin casting a Supreme Judgement spell!
[20:25:32] Tyl casts a spell!
[20:25:32] You attempt to use Bloodstained War Hammer.
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:32] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You attempt to use Bloodstained War Hammer.
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You attempt to use Bloodstained War Hammer.
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You attempt to use Bloodstained War Hammer.
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:33] You are already casting a spell! You prepare this spell as a follow up!
[20:25:34] You cast a Supreme Judgement spell!
[20:25:34] You hit Level 50 Training Dummy for 167 (-58) damage!
[20:25:34] You begin casting a Supreme Judgement spell!
[20:25:34] You attempt to use Bloodstained War Hammer.
[20:25:34] You are already casting a spell! You prepare this spell as a follow up!
[20:25:34] You are already casting a spell! You prepare this spell as a follow up!
[20:25:34] You attempt to use Bloodstained War Hammer.
[20:25:34] You are already casting a spell! You prepare this spell as a follow up!
[20:25:34] You are already casting a spell! You prepare this spell as a follow up!
[20:25:34] Bozo uses Improved Draught of Combined Regeneration.
[20:25:35] You move and interrupt your spellcast.
[20:25:35] You target [Level 50 Training Dummy].
[20:25:35] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:25:36] You attempt to use Bloodstained War Hammer.
[20:25:36] You begin casting a Major Refection spell!
[20:25:36] You are already casting a spell! You prepare this spell as a follow up!
[20:25:37] You cast a Major Refection spell!
[20:25:37] You heal Level 50 Training Dummy for 478 hit points!
[20:25:37] You begin casting a Supreme Judgement spell!
[20:25:37] You target [Level 50 Training Dummy].
[20:25:37] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:25:37] You attempt to use Bloodstained War Hammer.
[20:25:37] You are already casting a spell! You prepare this spell as a follow up!
[20:25:37] You are already casting a spell! You prepare this spell as a follow up!
[20:25:37] Tallboi was just killed by Sirslaughter in Hadrian's Wall.
[20:25:38] Drardoldric looks calmer.
[20:25:38] You cast a Supreme Judgement spell!
[20:25:38] You hit Level 50 Training Dummy for 167 (-58) damage!
[20:25:38] You begin casting a Supreme Judgement spell!
[20:25:38] Tyl casts a spell!
[20:25:39] You move and interrupt your spellcast.
[20:25:39] You target [Level 50 Training Dummy].
[20:25:39] You examine Level 50 Training Dummy. It is aggressive towards you.
[20:25:39] Earlobz was just killed by Heduri in Breifine.
[20:25:39] Finga was just killed by Severith in Breifine.
[20:25:40] You attempt to use Bloodstained War Hammer.
[20:25:40] You begin casting a Greater Reviction spell!
[20:25:40] You are already casting a spell! You prepare this spell as a follow up!
[20:25:41] You attempt to use Bloodstained War Hammer.
[20:25:41] You are already casting a spell! You prepare this spell as a follow up!
[20:25:41] You are already casting a spell! You prepare this spell as a follow up!
[20:25:41] You cast a Greater Reviction spell!
[20:25:41] You heal Level 50 Training Dummy for 675 hit points!
[20:25:41] You begin casting a Stunning Aura spell!
[20:25:41] You attempt to use Bloodstained War Hammer.
[20:25:41] You are already casting a spell! You prepare this spell as a follow up!
[20:25:41] You are already casting a spell! You prepare this spell as a follow up!
[20:25:42] You move and interrupt your spellcast.
[20:25:42] You attempt to use Bloodstained War Hammer.
[20:25:42] You begin casting a Greater Reviction spell!
[20:25:42] You are already casting a spell! You prepare this spell as a follow up!
[20:25:43] You cast a Greater Reviction spell!
[20:25:43] You heal Level 50 Training Dummy for 675 hit points!
[20:25:43] You begin casting a Stunning Aura spell!
[20:25:44] Zelianne was just killed by Demonastronaut in Breifine.
[20:25:44] You attempt to use Bloodstained War Hammer.
[20:25:44] You are already casting a spell! You prepare this spell as a follow up!
[20:25:44] You are already casting a spell! You prepare this spell as a follow up!
[20:25:44] You are already casting a spell! You prepare this spell as a follow up!
[20:25:45] You cast a Stunning Aura spell!
[20:25:45] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:25:45] Level 50 Training Dummy is stunned by a flash of light!
[20:25:45] You begin casting a Deftness Usurp spell!
[20:25:45] You attempt to use Bloodstained War Hammer.
[20:25:45] You are already casting a spell! You prepare this spell as a follow up!
[20:25:45] You are already casting a spell! You prepare this spell as a follow up!
[20:25:45] You are already casting a spell! You prepare this spell as a follow up!
[20:25:45] Modjokh was just killed by Perfccttommy in Breifine.
[20:25:46] Milo was just killed by Dronix in Breifine.
[20:25:46] You cast a Deftness Usurp spell!
[20:25:46] No enhancement of that type found on the target.
[20:25:46] You begin casting a Deftness Usurp spell!
[20:25:47] Sydneyy was just killed by Stinkywee in Breifine.
[20:25:48] You cast a Deftness Usurp spell!
[20:25:48] No enhancement of that type found on the target.
[20:25:48] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:25:48] You attempt to use Bloodstained War Hammer.
[20:25:48] You begin casting a Embodiement Annex spell!
[20:25:48] You are already casting a spell! You prepare this spell as a follow up!
[20:25:48] You are already casting a spell! You prepare this spell as a follow up!
[20:25:49] Rhoiwen was just killed by Heduri in Breifine.
[20:25:49] You cast a Embodiement Annex spell!
[20:25:49] No enhancement of that type found on the target.
[20:25:49] You begin casting a Endowment Sieze spell!
[20:25:51] You cast a Endowment Sieze spell!
[20:25:51] No enhancement of that type found on the target.
[20:25:51] You attempt to use Bloodstained War Hammer.
[20:25:51] You begin casting a Adroitness Commandeer spell!
[20:25:51] You are already casting a spell! You prepare this spell as a follow up!
[20:25:51] You are already casting a spell! You prepare this spell as a follow up!
[20:25:51] Notphunsized was just killed by Heatherlocklear in Breifine.
[20:25:53] You cast a Adroitness Commandeer spell!
[20:25:53] No enhancement of that type found on the target.
[20:25:53] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:25:53] You begin casting a Deftness Usurp spell!
[20:25:53] You attempt to use Bloodstained War Hammer.
[20:25:53] You are already casting a spell! You prepare this spell as a follow up!
[20:25:53] You move and interrupt your spellcast.
[20:25:53] Rolig was just killed by Crazzxx in Breifine.
[20:25:54] You attempt to use Bloodstained War Hammer.
[20:25:54] You begin casting a Gift of the Host spell!
[20:25:54] You attempt to use Bloodstained War Hammer.
[20:25:54] You are already casting a spell! You prepare this spell as a follow up!
[20:25:55] You attempt to use Bloodstained War Hammer.
[20:25:55] You are already casting a spell! You prepare this spell as a follow up!
[20:25:55] You attempt to use Bloodstained War Hammer.
[20:25:55] You are already casting a spell! You prepare this spell as a follow up!
[20:25:55] You cast a Gift of the Host spell!
[20:25:55] You heal yourself for 291 hit points.
[20:25:55] You begin casting a Gift of the Host spell!
[20:25:56] You attempt to use Bloodstained War Hammer.
[20:25:56] You are already casting a spell! You prepare this spell as a follow up!
[20:25:56] You attempt to use Bloodstained War Hammer.
[20:25:56] You are already casting a spell! You prepare this spell as a follow up!
[20:25:56] You are already casting a spell! You prepare this spell as a follow up!
[20:25:57] You attempt to use Bloodstained War Hammer.
[20:25:57] You are already casting a spell! You prepare this spell as a follow up!
[20:25:57] You are already casting a spell! You prepare this spell as a follow up!
[20:25:57] You cast a Gift of the Host spell!
[20:25:57] You heal yourself for 269 hit points.
[20:25:57] You are fully healed.
[20:25:57] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:25:57] You begin casting a Supreme Judgement spell!
[20:25:58] You move and interrupt your spellcast.
[20:25:58] You attempt to use Bloodstained War Hammer.
[20:25:58] You begin casting a Major Refection spell!
[20:25:58] You are already casting a spell! You prepare this spell as a follow up!
[20:25:58] Thisisthaway was just killed by Projects in Snowdonia.
[20:25:59] Drardoldric casts a spell!
[20:25:59] You cast a Major Refection spell!
[20:25:59] You heal Level 50 Training Dummy for 478 hit points!
[20:25:59] You begin casting a Supreme Judgement spell!
[20:26:00] You attempt to use Bloodstained War Hammer.
[20:26:00] You are already casting a spell! You prepare this spell as a follow up!
[20:26:00] You are already casting a spell! You prepare this spell as a follow up!
[20:26:00] You move and interrupt your spellcast.
[20:26:01] You attempt to use Bloodstained War Hammer.
[20:26:01] You begin casting a Major Refection spell!
[20:26:01] You are already casting a spell! You prepare this spell as a follow up!
[20:26:02] You cast a Major Refection spell!
[20:26:02] You heal Level 50 Training Dummy for 478 hit points!
[20:26:02] You begin casting a Supreme Judgement spell!
[20:26:03] You move and interrupt your spellcast.
[20:26:03] Perfccttommy was just killed by Demonastronaut in Breifine.
[20:26:03] You attempt to use Bloodstained War Hammer.
[20:26:03] You begin casting a Greater Reviction spell!
[20:26:03] You are already casting a spell! You prepare this spell as a follow up!
[20:26:04] You cast a Favor of the Heavens spell!
[20:26:04] You heal Level 50 Training Dummy for 1665 hit points!
[20:26:05] You cast a Greater Reviction spell!
[20:26:05] You heal Level 50 Training Dummy for 675 hit points!
[20:26:05] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:26:05] You begin casting a Stunning Aura spell!
[20:26:05] You move and interrupt your spellcast.
[20:26:06] You attempt to use Bloodstained War Hammer.
[20:26:06] You begin casting a Greater Reviction spell!
[20:26:06] You are already casting a spell! You prepare this spell as a follow up!
[20:26:07] You cast a Greater Reviction spell!
[20:26:07] You heal Level 50 Training Dummy for 675 hit points!
[20:26:07] You gather energy from your surroundings. (Siphon Chance: 20.00%)
[20:26:07] You begin casting a Stunning Aura spell!
[20:26:07] You move and interrupt your spellcast.
[20:26:08] You attempt to use Bloodstained War Hammer.
[20:26:08] You begin casting a Greater Reviction spell!
[20:26:08] You are already casting a spell! You prepare this spell as a follow up!
[20:26:09] You cast a Greater Reviction spell!
[20:26:09] You heal Level 50 Training Dummy for 675 hit points!
[20:26:09] You begin casting a Stunning Aura spell!
[20:26:10] You move and interrupt your spellcast.
[20:26:10] You attempt to use Bloodstained War Hammer.
[20:26:10] You begin casting a Greater Reviction spell!
[20:26:10] You are already casting a spell! You prepare this spell as a follow up!
[20:26:11] You cast a Greater Reviction spell!
[20:26:11] You heal Level 50 Training Dummy for 675 hit points!
[20:26:11] You begin casting a Stunning Aura spell!
[20:26:12] Medicima was just killed by Stunningstylezzs in Breifine.
[20:26:12] You move and interrupt your spellcast.
[20:26:12] Catament was just killed by Stinkywee in Breifine.

*** Chat Log Closed: Tue Oct 20 20:26:14 2026
`,
  },
};

