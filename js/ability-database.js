// ability-database.js — GENERATED FILE, do not hand-edit.
// Produced by tools/build-ability-database.py from a charplan export (same
// source as ability-cooldowns.js). Flat map of ability name ->
// { type, isDamage, isHeal, classes }.
//
// isDamage/isHeal answer "can this ability positively be ruled OUT as the
// source of a damage/heal result line" — see build-ability-database.py's
// module docstring for exactly how they're derived and why the default for
// anything not confidently known is permissive (don't block), never the
// reverse. `type` is the ability's raw charplan Type string (e.g.
// "Direct Damage", "Heal", "Nearsight", "Stun") when every class trains an
// identical version of it, else null. `classes` lists every class with any
// version of this name at all (realm ability or spec skill).
export const ABILITY_DATABASE = 
{
  "Abate Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Abduct Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Ablative Remover": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Ablative Shear"
  },
  "Abolish Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Abolish Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Abolish Sight": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Abolish Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Abrasive Boulders": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Abrasive Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Abrogate Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Abrogate Sight": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Abrogate Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Abrogation Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Absorb Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Accelerate Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Accentuate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Accursed Desolation": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Accursed Hardship": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Accursed Infliction": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Accursed Misery": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Accursed Scourge": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Accursed Shear": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Random Buff Shear"
  },
  "Achilles Heel": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Aching Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Acid Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acid Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Acolyte's Redemption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Acuity Cut": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Shear"
  },
  "Acuity of the Congregation": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Acuity of the Council": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Acuity of the Magi": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Acuity of the Prophet": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Acuity of the Sage": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Acuity of the Seer": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Adamant Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Adept of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Adrenaline Rush": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Healer",
      "Mentalist",
      "Necromancer",
      "Runemaster",
      "Shaman",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Adroitness Commandeer": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Shear"
  },
  "Advancing Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Aegis Shell 1": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aegis Shell 2": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aegis Shell 3": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aegis Shell 4": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aegis Shell 5": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Afflict Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Afflicting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Aged Sporespawn": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Aged Tangler": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Agent of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Agent of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Aggravate": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Aggravate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Aggression of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Aggrevate Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Agility": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Agility Trunc": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Shear"
  },
  "Agility of the Archangel": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Agitating Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Agonize Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Agony of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Air Pet Elemental Stun": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Alacrity of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Alacrity of Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Alacrity of the Angel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Alacrity of the Archangel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Alacrity of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Alacrity of the Heavenly Host": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Alarming Cry": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Alarming Outburst": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Alarming Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Alarming Shriek": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Alarming Wail": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Alarming Yell": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Allay Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Allure of Death": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Alluring Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Amber Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Simulacrum"
  },
  "Ambition for Death": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Ameliorating Melodies": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Amelioration": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Amelioration of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Amethyst Shield": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Amethyst Shield (Enhanced)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Amethyst Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Amplified Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Amplified Celerity": {
    "classes": [
      "Healer",
      "Paladin",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Celerity Buff"
  },
  "Amplify Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Amplify Balance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Amplify Coordination": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Amplify Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Amplify Equilibrium": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Amplify Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Amplify Movement": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Amplify Running": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Amplify Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Amplify the Elements": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Anaconda": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ancestor's Boon": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Ancestor's Favor": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Ancestor's Gift": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Anchor Of Ice": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Anchored Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Angel's Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Angelic Agility": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Angelic Approbation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Angelic Benediction": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Angelic Blessing": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Angelic Commendation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Angelic Coordination": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Angelic Dexterity": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Angelic Potency": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Angelic Power": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Angelic Strength": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Anger of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Anger of the Gods": {
    "classes": [
      "Paladin",
      "Skald",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Anger of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Anguish of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Animate Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Annihilate Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Annihilate Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Annihilate Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Annihilate Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Annihilation": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Annihilation Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Annoy": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Annulling Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Annullling Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Apotheosis": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Apparitions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Aptitude for Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Arawn's Accuracy": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Arawn's Acuity": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Arawn's Blaze": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Clarity": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Arawn's Cunning": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Arawn's Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Fire": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Flare": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Gift": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Arawn's Heat": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Inferno": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Precision": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Arawn's Pyre": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Singe": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arawn's Sparks": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Arboreal Fire": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Arboreal Shield": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Archangel's Allotment": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archangel's Apportioning": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archangel's Might": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archangel's Potency": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archangel's Power": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archangel's Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Archangel's Strength": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Archery": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Archery Resistance": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Archery Resistance"
  },
  "Arctic Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Arctic Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Arctic Death": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Arctic Rift": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Arm's Length": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Armor of Bone": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Array of Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Array of Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Arrival from Valhalla": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Arrow of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Arthritic Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Artistic Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powerless"
  },
  "Asgard's Defense": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Asgard's Deflection": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Asgard's Greater Deflection": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Asgard's Lesser Defense": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Asgard's Lesser Might": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asgard's Lesser Potence": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asgard's Lesser Strength": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asgard's Might": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asgard's Potence": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asgard's Protection": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Asgard's Strength": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Asp": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Asp's Bite": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Assailing Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Assault": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Assist Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Atony": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Atrophy": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Attack Perpetual": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Attack Unceasing": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Attack Unending": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Attack Unfading": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Attack Uninterrupted": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Attenuate Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Attracting Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Attunement to Creation": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Audible Barrier": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Augment Bone Army": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Augment Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Augment Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Augment Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Augmented Acuity": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Paladin",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Augmented Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Augmented Constitution": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Augmented Dexterity": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Augmented Quickness": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Augmented Strength": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Aura of Darkness": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of Death": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of Defense": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Deflection": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Destiny": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of Echoing": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Fate": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of Foreboding": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of Global Feedback": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Guarding": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Incineration": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Aura of Indestructability": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Invincibility": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Protection": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Redirection": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Reflection": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Resonation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Reverberation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of Safety": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Salvation": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Shielding": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Aura of Turning": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Aura of the Inevitable": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Aura of the Sun": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Aurora": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Aurora Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Aurora Borealis": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Aurora Borealis Proc": {
    "classes": [
      "Berserker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Aurora Ray": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Auroral Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Auroric Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Avert Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Avert Magic": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Avoidance of Magic": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Awaken Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Awaken Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Awaking Scream": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Awareness of Magic": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Conversion"
  },
  "Axes": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Back Crush": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Back Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Backstab": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Backstab II": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Badge of Valor": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Baldur's Fury": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ban Sight": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Banestrike": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Banestrike Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Banish": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Banish Confidence": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Conviction": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Dedication": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Energy": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Banish Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Banish Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Banish Faith": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Hope": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Motivation": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banish Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Banish Soul": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Banish Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Banishing Blows": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Barbs of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Barkcase": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barkcase Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barkcoat": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barkcoat Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barkcrust": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barkcrust Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barkhusk": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barkhusk Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barksheath": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barksheath Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barkshell": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Barkshell proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barrier Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Barrier Refection": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Barrier Refocillation": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Barrier Resuscitation": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Barrier Reviction": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Barrier of Faith": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Barrier of Fortitude": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Barrier of Health": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Barrier of Negation": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Barrier of Power": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Barrier of Sound": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Barrier of Temperance": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Barrier of Virtue": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Barrier of Warding": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Bash": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bashing Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Basiliskfang": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Battle Crier": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Battle Fervor": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Battle Fury": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Battle Harbinger": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Battle Herald": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Battle Howl": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Battle Messenger": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Battle Roar": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Battle Scream": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Battle Shout": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Battle Vigor": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Battle Whoop": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Battle Zeal": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Battlesong of Apotheosis": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Battlesong of Regeneration": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Battlesong of Regrowth": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Battlesong of Renascence": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Battlesong of Restoration": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Battlesong of Revival": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Bear Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Bear Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Bear Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Beartooth": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Beautified Remedy": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bedazzling Aura": {
    "classes": [
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Enchanter",
      "Heretic",
      "Spiritmaster",
      "Theurgist",
      "Valewalker",
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bedazzling Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Befuddle Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Befuddler": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Befuddling Ballad": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Befuddling Cadence": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Beguiled Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Beguiled Injury": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Beguiled Pain": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Beguiling Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Beguiling Will": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Bellow of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Bellowing Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Benediction of Fortitude": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Benediction of Health": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Benefactor's Encouragement": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Benefit of the Archangel": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Benison of Fortitude": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Benison of Health": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Benison of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Benthic Shot 1": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 2": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 3": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 4": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 5": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 6": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 7": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 8": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Benthic Shot 9": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Berserk I": {
    "classes": [
      "Berserker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Berserk II": {
    "classes": [
      "Berserker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Berserk III": {
    "classes": [
      "Berserker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Berserk IV": {
    "classes": [
      "Berserker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bestial Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Billowing Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Binding Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bith's Acclaimation": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bith's Benediction": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bith's Benison": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bitter Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Black Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Black Widow": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blackjack": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blacksnake": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blade Barrier": {
    "classes": [
      "Blademaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blades": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Druid",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blades of Wrath": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Bladeturn": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Blank Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Blanket of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Blanket of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Blanket of Senility": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Blaring Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Boldness": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Bravery": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Courage": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Defiance": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Galliance": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Heroism": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of Valiance": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blast of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Breeze": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Cyclone": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Gale": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Gust": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Maelstrom": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Squall": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Storm": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Tempest": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blasting Winds": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Blazing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Blazing Current": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Flood": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Flow": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Flux": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing River": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Snare": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Blazing Stream": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Surge": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Blazing Wave": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Bleak Torment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Bleed Might": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Bleed Strength": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Bleeding 8, 20sec": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding 8, 40sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Vampiir",
      "Warrior"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 14, 40sec": {
    "classes": [
      "Champion",
      "Hero",
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 15 , 40sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 20 , 40sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 25 , 40sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Scout",
      "Shadowblade",
      "Valkyrie",
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 26 , 40sec": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 32 , 40sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Nightshade",
      "Ranger",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding, 4 , 25sec": {
    "classes": [
      "Armsman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Bleeding,9 , 40sec": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Bleeding"
  },
  "Blessed Agility": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Blessed Barrier": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Blessed Coordination": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Blessed Dexterity": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Blessed Encouragement": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Blessed Guard": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Blessed Potency": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Blessed Power": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Blessed Shield": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Blessed Strength": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Blessing of Abation": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Absorption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Creation": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Blessing of Dissipation": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Fortitude": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Blessing of Hardiness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Health": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Blessing of Nethuni": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Blessing of Resilience": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Stability": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of Sturdiness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Blessing of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Blessing of the Heavens": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Blessing of the Host": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Blessing of the Night": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Root"
  },
  "Blight": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Blight Burst": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Blight Spores": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Blight Swarm": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Blightstrike": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Blightstrike Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Blinding Rain": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blinding Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Blissful Ignorance": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blizzard": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blizzard Blade": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bloating Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Block Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Block ranged": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Shield Of Nature Effect"
  },
  "Blood Curdling Scream": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Blood Rage": {
    "classes": [
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blooddrinking": {
    "classes": [
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Bloodletter": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bloody Dance": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bludgeon": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Shadowblade",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blunt": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Druid",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blunt Arrows": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage Type"
  },
  "Blunt Trauma": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Blur Memory": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Blustering Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Body Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Body Lock": {
    "classes": [
      "Occultist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Body Masher": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bogdar's Boon": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bogdar's Fury": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Bogdar's Precision": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "To Hit Buff"
  },
  "Bogdar's Scorn": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Bogdar's Wisdom": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Resist Reduction Buff"
  },
  "Boiling Cauldron": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Boiling Cloud": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Boisterous Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Bolster Bone Army": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Bolster Bonecaster": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Debuff"
  },
  "Bolster Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Bolster Energy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Bolster Health": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Bolster Heartiness": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Bolster Matter": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Bolster Resillience": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Bolstering Gust": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Gust (Major)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Gust (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Roar": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bolstering Storm": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Storm (Greater)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Storm (Major)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Storm (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolstering Typhoon": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Bolt of Death": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Destruction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Healing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Lava": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Lava (Enhanced)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Mending": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Renewal": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bolt of Uncreation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Bonding Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bonding Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bonding of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bone Blades": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Breaker": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bone Bruiser": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bone Carapace": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Bone Case": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Bone Cover": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Bone Crusher": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bone Daggers": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Edges": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Husk": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Bone Knives": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Shanks": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Shell": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Bone Skin": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Bone Spikes": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bone Splitter": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bone Spurs": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Bonebreaker Deceleration": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Bonebreaker Disease": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Bonebuilder Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bonefixer Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bonehealer Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Boneknitter Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bonemender Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bonepatcher Heal": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bones to Ash": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Blood": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Dirt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Dust": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Grit": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Iron": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bones to Powder": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bones to Silt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Boomslang": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Boon from Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Boon of Battle": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Boon of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Boon of the Heavens": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Boon of the Host": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Boost Bonecaster": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Debuff"
  },
  "Boost Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Bore Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Boundless Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Bounty of the Archangel": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Brace": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Branching Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Brawler's Affliction": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Bruise": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Contamination": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Destruction": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Devastation": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Infliction": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Laceration": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Mutilation": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawler's Outrage": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Brawn Appropriate": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Shear"
  },
  "Brawn of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Brazen Stand": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Break Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Breaking the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Breath of Leviathan": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Waterbreathing"
  },
  "Breeze's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Briar Barrage": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Burst": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Cloud": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Detonation": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Discharge": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Eruption": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Explosion": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Salvo": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Shower": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briar Storm": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Turret PBAoE"
  },
  "Briarsprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Brilliant Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Brilliant Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bringer of Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Bringer of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Brisk Wind": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Brisk Wind (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Bristled Weapons": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Broiling Cloud": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Brotherhood of the Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Bruiser": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Brutal Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Brutalize": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Buff Shear": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Buffer of Earth": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Fire": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Heat": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Lava": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Magma": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Steam": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Stone": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffer of Warmth": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Buffering Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Build Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Bumblebee's Sting": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Burdening Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Burdening Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Burgeoned Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Burning Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Burning Cloud": {
    "classes": [
      "Mauler",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Burning Earth": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Burrsprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Burst of Steam": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Burst of Steam  (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Bursting Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Bursting Ivy": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bursting Tangleweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bursting Thornweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bursting Undergrowth": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Bursting Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Cacophonous Burst": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Cacophony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Cadence of Focus": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Cadence of Meditation": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Cadence of Musing": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Calcify Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Call Abomination": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Air Sprite": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Earthlord": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Elder Nature Bear": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Elder Nature Lynx": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Elder Nature Tree": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Elder Nature Wolf": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Greater Nature Spirit": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Greater Nature Tree": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Greater Necroservant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Lesser Air Sprite": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Lesser Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Lesser Nature Spirit": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Lesser Zombie Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Major Nature Spirit": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Mighty Air Sprite": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Mighty Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Minor Air Sprite": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Minor Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Minor Nature Spirit": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Minor Zombie Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Mjollnir": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Call Nature Spirit": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Druid Pet"
  },
  "Call Necroservant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Potent Air Sprite": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Potent Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Reanimated Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call Supreme Earth Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Call Zombie Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Necro Pet"
  },
  "Call from Valhalla": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Call of Darkness": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Call of the Hounds": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Call Hounds"
  },
  "Call of the Raven": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Calm of the Grave": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Calming Concentration": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Calming Contemplation": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Calming Focus": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Calming Meditation": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Calming Notes": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Camouflage": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cancel Defenses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Random Armor Debuff"
  },
  "Cancel Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Cant of Befuddling": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Cant of Bewilderment": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Cant of Confusion": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Cant of Discord": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Cant of Perplexity": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Capitulation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Captivate Army": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivate Audience": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivate Crowd": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivate Legions": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivate Multitude": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivate Swarms": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Captivating Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Capture Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Caress of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Caster's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Caster's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Cataclysm of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Cavern Unity": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Cease Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Celerity": {
    "classes": [
      "Healer",
      "Paladin",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Celerity Buff"
  },
  "Celerity of Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Celtic Fury": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Celtic Might": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Celtic Rage": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Celtic Spears": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Chain": {
    "classes": [
      "Armsman",
      "Cleric",
      "Healer",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Shaman",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Chain Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage Chain"
  },
  "Chains of Cold": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Chains of Frost": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Chains of Ice": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Chains of Permafrost": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Chamber of Creation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Chamber of Decimation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Chamber of Destruction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Chamber of Greater Fate": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Chamber of Lesser Fate": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Chamber of Restraint": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Chamber"
  },
  "Channel Attack": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Channel Blow": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Channel Damage": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Channel Offense": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Channeled Anger": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Channeled Ferocity": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Channeled Frenzy": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Channeled Fury": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Channeled Hatred": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Channeled Rage": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Channeled Savagery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Channeled Wrath": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chant of Blood": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chant of Endurance": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Chant of Energy": {
    "classes": [
      "Champion",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Chant of Healing": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Chant of Perseverance": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Chant of Persistence": {
    "classes": [
      "Champion",
      "Paladin",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Chant of Resilience": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Chant of Stamina": {
    "classes": [
      "Champion",
      "Paladin",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Chant of Tenacity": {
    "classes": [
      "Champion",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Chant of the Battle": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chant of the Brawl": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Chant of the Charge": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Chant of the Fight": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Chant of the Siege": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chant of the War": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chaplain's Redemption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Charge": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Mercenary",
      "Reaver",
      "Savage",
      "Valkyrie",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Charm Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Charm Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Charmed Boon of Health": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Charmed Favor of Health": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Charmed Gift of Health": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Chaser Enhancement": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Chilled Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Chilled Torment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Chilling Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Chilling Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Chilling Shriek": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Chilling Tendrils": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Chilling Touch": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Chimes of Health": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Choking Undergrowth": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Chthonic Focus": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Force": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Form": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Occultist Form"
  },
  "Chthonic Fortification": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Might": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Power": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Strength": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Chthonic Vigor": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Cinder Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Circle Of Flames": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Circle of Anger": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Circle of Cognition": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Circle of Enmity": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Circle of Fury": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Circle of Lucidity": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Circle of Rage": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Circle of Vengeance": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Circle of Wrath": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Clamoring Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Clamorous Concussion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Clan's Call": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Clan's Might": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Clangorous Burst": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Clarifying Harmonies": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Clarity of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Claws of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Claws of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Cleanse Mind": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Clear Field": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Clear Horizon": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Clear Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Clear Path": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Clear Road": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Clear Trail": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Cleave": {
    "classes": [
      "Armsman",
      "Berserker",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cleaving Guardian": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Clenching Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Climb Walls": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Savage",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Climbing Spikes": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Close Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Cloth": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Eldritch",
      "Enchanter",
      "Heretic",
      "Mentalist",
      "Necromancer",
      "Occultist",
      "Runemaster",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist",
      "Valewalker",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cloud Memory": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Cloud of Blindness": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Cloud of Darkness": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Cloud of Decay": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cloud of Decomposition": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cloud of Dessication": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cloud of Deterioration": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cloud of Distortion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Cloud of Obscurity": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Cloud of Rot": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cloud of Senility": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Clouded Agony": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Clouded Destruction": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Clouded Distress": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Clouded Pain": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Clouded Sight": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Clutching Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Clutching Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Clutching of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Cobalt Shield": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Cobalt Shield (Enhanced)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Cobra": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cobra Heretic": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Cobra Reaver": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Cobra's Bite": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Coerce Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Coercing Cadence": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Coercion of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Cognition of Power": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Cold's Bitter Grip": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Cold's Bitter Grip (Greater)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Cold's Bitter Grip (Lesser)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Collapse Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Combat Awareness": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Combustion": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Comeback": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Comforting Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Command Mjollnir": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Command of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Commanding Cadence": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Comminute": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Communion for Death": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Communion with Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Communion with the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Compact Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Companions Snare": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Compel Captulation": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Compel Defeat": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Compel Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Compel Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Compel Resignation": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Compel Submission": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Compel Surrender": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Compel Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Compelling Cadence": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Complete Mind Annihilation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Composite Bows": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Comprehension of Power": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Compress Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Compulsion of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Compulsory Cadence": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Conceal Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Concentration": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Eldritch",
      "Enchanter",
      "Mentalist",
      "Necromancer",
      "Occultist",
      "Runemaster",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Concentration of the Dead": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Interrupt Reduction"
  },
  "Conciliate Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Concussion": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Concussive Bellow": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Blast": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Blast (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Holler": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Roar": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Scream": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Shout": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Shriek": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Wail": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Whoop": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Concussive Yell": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Condense Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Confining Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Conflagration": {
    "classes": [
      "Valewalker",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Confounding Ballad": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Confounding Cadence": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Confuse Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Confusing Ballad": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Confusing Cadence": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Confusing Gust": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Confusing Gust (Major)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Confusing Gust (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Confusing Storm": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Confusing Wind": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Confusing Wind (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Conjure Icebrand": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Create Item"
  },
  "Conjured Bubble": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Conquer": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Constitution Hash": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Shear"
  },
  "Constraining Cadence": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Constraining Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Constraining Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Constrict Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Constricting Exhaustion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Constricting Field": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Constricting Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Constricting Jolt": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Constricting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Constricting Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Constrictor": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Consuming Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Contamination": {
    "classes": [
      "Cabalist",
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Control Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Control Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Control Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Contusions": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Convert Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Conversion"
  },
  "Cooling Tendrils": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Coordination": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Coordination of the Archangel": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Copperhead": {
    "classes": [
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Nightshade",
      "Ranger",
      "Reaver",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Corrosive Cloud": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Corrosive Fog": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Corrosive Smoke": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Corruping Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Corrupt Memory": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Corruption": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Coruscating Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Counter Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Counter Evade": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Counter Slash": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cover Eyes": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Crack Armor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Debuff"
  },
  "Craftiness": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Cramping Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Crawl": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Credit to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Credit to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Creeper Field": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Creeping Death": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Cripple": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Cripple Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Cripple Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Cripple Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Crippled Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Crippling Blow": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crippling Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Crippling Exhaustion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Crippling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Crippling Shout": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Critical Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Critical Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Critical Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Critical Shot 9": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Cross": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Cross Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crossbow": {
    "classes": [
      "Armsman",
      "Infiltrator"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crumble": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crumble Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Crumple Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Crunch Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Crusader's Barrier": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Defense": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Guard": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Mantle": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Protection": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Crusader's Shelter": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Shield": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crusader's Ward": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Crush Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Crusher": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crushing": {
    "classes": [
      "Armsman",
      "Cleric",
      "Friar",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crushing Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Crushing Blow": {
    "classes": [
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Savage",
      "Skald",
      "Thane",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Crushing Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Crushing Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Cry of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Crystallize Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Cuchulain's Revenge": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Culling the Weak": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Cultivate the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Cunning": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Curative Trance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Cure All": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure All"
  },
  "Cure Disease": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Disease"
  },
  "Cure Nearsight": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Nearsight"
  },
  "Cure Nearsight II": {
    "classes": [
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Shaman",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Nearsight"
  },
  "Cure Poison": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Poison"
  },
  "Curse of Blindness": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Curse of Crawling": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Curse of Death": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Detriment": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Devastation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Disaster": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Hurt": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Languishing": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Curse of Lumbering": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Curse of Pain": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Peril": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Ruin": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Curse of Slowness": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Curse of Sluggishness": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Cursed Annihilation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Blast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Bomb": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Burst": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Destruction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Devastation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Essence": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cursed Explosion": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Mortar": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Ruination": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Cursed Soul": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cursed Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cursed Spores": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cursed Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cursed Vitality": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Cutting Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Cutting Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Cycle of Death": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Cycle of Life": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Cycle of Rebirth": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Daemonic Fascination": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Dagger of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Damaged Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Damaging Grasp": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dampen Blow": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Dampen Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Dampen Offense": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Dampen Soul": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Dampening Ward": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Dancing Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dancing Flame": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Dancing Flare": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Dancing Gleam": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Dancing Glint": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Dancing Light": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Dancing Spark": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Daring Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Dark Empowerment": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Crit Buff"
  },
  "Dark Horror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Dark Tendrils": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dark Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Darken Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Darken Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Darken Vision": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Darkened Alacrity": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Darkened Cloud": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Darkened Haste": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Darkened Quickness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Darkened Swiftness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Darkened Urgency": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Darkness Form": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dart of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Dashing Defense": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Daunt Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Daze": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dazzling Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Dazzling Clutch": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Embrace": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Flare": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Dazzling Flash": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Dazzling Grasp": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Grip": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Hold": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Restraint": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Dazzling Spear": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dazzling Strobe": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Dazzling Torch": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Dead Awakening": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Dead Flesh Living": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Dead Flesh Living (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Deadening Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Deadly Empowerment": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Crit Buff"
  },
  "Deafening Cacophony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Deafening Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Deafening Explosion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Deafening Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Deafening Shout": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Deafening Shriek": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Deafening Wail": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Death Bladeturn": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Death Blast": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Death of Souls": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Death's Calling": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Deathseeker": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Healing Done Debuff"
  },
  "Debilitate Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Debilitate Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Debilitating Affliction": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Debilitating Cold": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Debilitating Exhaustion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Debilitating Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Debility": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Debt to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Debt to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Decaying Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Decaying Rage": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Deceiving Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Decimating Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Decimation Trap": {
    "classes": [
      "Eldritch",
      "Runemaster",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Decomposing Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Decrepify": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Decrepit Form": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Occultist Form"
  },
  "Decrepit Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Defedation": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Defender's Aegis": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Courage": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Cross": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Faith": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Fury": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Rage": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defender's Revenge": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Defending Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Deflect": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Deflect Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Deflect Blow": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Deflect Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Deflect Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Deflect Magic": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Deflect Offense": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Deflect Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Deftness Usurp": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Shear"
  },
  "Defy Lightning": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Defy Storm": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Defy Thunder": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Degenerate Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Degeneration": {
    "classes": [
      "Cabalist",
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dejecting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Delaceration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Delirium": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Deluding Harmony": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Deluge of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Delusional Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Delusions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Demand Awe": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Silence"
  },
  "Demand Respect": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Silence"
  },
  "Demand Reverence": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Silence"
  },
  "Demand of Integrity": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Perfection": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Precision": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Purity": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Quality": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Superiority": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Supremacy": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Demand of Transcendence": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cast Speed Debuff"
  },
  "Dementation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Demobilizing Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demolish": {
    "classes": [
      "Berserker",
      "Champion",
      "Hero",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Demolishing Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Demolishing Boulders": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Demon Flight": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Demon Horror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Demonic Collapse": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demonic Crumble": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demonic Decay": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demonic Rot": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demonic Wither": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Deny Advancement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Deny Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Derangment": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Desecrated Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Desperate Bowman": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Despondant Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Destroy Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Destroy Defenses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Random Armor Debuff"
  },
  "Destroy Magic": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Destroy Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Destroy Sight": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Destructive Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Detaining Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Detaining Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Detaunt, 27": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Taunt"
  },
  "Detect Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Detect Hidden": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Detention of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Deter Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Deteriorate Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Deterioration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Determination": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Devastate": {
    "classes": [
      "Armsman",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Devastate Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Devastating Blow": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Develop Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Develop Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Develop the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Devolution": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Devotion": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Dexterity Fragment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Shear"
  },
  "Dexterity of the Archangel": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Dexterity of the Badger": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Dexterity of the Bear": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Dexterity of the Ferret": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Dexterity of the Lynx": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Dexterity of the Rabbit": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Dexterity of the Wolf": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Diabolic Briars": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Fence": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Gate": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Spikes": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Spines": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Spurs": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Stakes": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diabolic Thorns": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Diamond Shield": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Diamond Shield (Enhanced)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Diamond Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Diamondback": {
    "classes": [
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Nightshade",
      "Ranger",
      "Reaver",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Diffuse Fervor": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Diffuse Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Diffuse Zeal": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Dilapidate Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Dilapidation": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Diminish Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Diminish Sight": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Diminish Soul": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Diminish Vision": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Diminishing Bellow": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Cadence": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Scream": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Shriek": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Wail": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Diminishing Yell": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Dirty Tricks": {
    "classes": [
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Disable": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Disable Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Disable Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Disabler": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Disabling Exhaustion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Disabling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Disabling Shout": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Dischordant Howl": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dischordant Note": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dischordant Shriek": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dischordant Tone": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dischordant Wail": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Disciplining the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Discomforting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Disconcerting Yell": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Discover Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Disenchanting Burst": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Disenchanting Emanation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Disenchanting Emission": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Disenchanting Eruption": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Disguise Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Disintegrate Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Disintegrating Cloud": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Disintegrating Fog": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Disintegrating Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Disintegrating Smoke": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dislocation": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dismantling Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dismissal": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dispel Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dispel Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Dispensation from Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Dispensation of Battle": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Dispersal of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Disperse Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Disperse Fervor": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Disperse Health": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Disperse Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disperse Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Disperse Strength": {
    "classes": [
      "Bonedancer",
      "Eldritch",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Disperse Vigor": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Disperse Zeal": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Dispiriting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Dissipate Energy": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Dissipate Fervor": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Dissipate Soul": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Dissipate Zeal": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Dissipating Blows": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Dissolute Swings": {
    "classes": [
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dissolve Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Dissolving Cloud": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dissolving Fog": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dissolving Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Dissolving Mist": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dissolving Smoke": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Distort Memory": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Distract": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Distracting Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Distraction": {
    "classes": [
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Distressing Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Disturbing Echoes": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Intonations": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Modulations": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Noises": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Reverberations": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Disturbing Vibrations": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Disturbing Voices": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Diversion": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Divert Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Divine Encouragement": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Divine Hammer": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Divine Intervention": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Diviner's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Diviner's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Dominate Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Dominate Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Domination": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Doom Hammer": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Doom of Spirits": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Double Back": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Double Strike": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Double Strike Heal": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Doublefrost": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Doubler": {
    "classes": [
      "Armsman",
      "Berserker",
      "Paladin",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dragon Talon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dragonfang": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dragonfly": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dragonspider": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Drain Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Draining Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Draining Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Draw Out": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dread Charge": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "True Speed"
  },
  "Dread Commander Bladeturn": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dread Guardian Death of Souls": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dread Lich Obsidian Strike": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dream Adversary": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Dream Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Dreams of the Elements": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Dreamweaver": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Drill Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Drive Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Drive Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Drive of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Combat Speed Buff"
  },
  "Dry Rot": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Dual Shadows": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dual Strike": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dual Threat": {
    "classes": [
      "Champion",
      "Mauler",
      "Occultist",
      "Reaver",
      "Thane",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ducking Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Dull Sight": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Dulling Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Dulling Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Duplicitous Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dusk Dart": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Dusk Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Dusk Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Dusted Vision": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Eagle Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Eagle Talon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ear-splitting Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Earth Affinity": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Earth Bond": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Earth Eddies": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Earth Invigoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Earth Pyre": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Earth Ripple": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Earth Splash": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Earth Union": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Earth Vivification": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Earth Wave": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Earthen Burst": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Earthen Fury": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Earthen Power": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Earthen Rage": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Earthspirit's Ire": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Ease of Mind": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Ease of Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Ebullient Blast": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ebullient Blast (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Eccentricity": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Eclipse": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Edge of Hatred": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Effervescence": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Efficacy Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Effulgent Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Eir's Barrier": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Direction": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Eir's Glorious Touch": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Eir's Guard": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Guidance": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Eir's Heavenly Touch": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Eir's Instruction": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Eir's Intervention": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Eir's Lesser Barrier": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Lesser Guard": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Lesser Shield": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Lifetap I": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Lifetap II": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Lifetap III": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Lifetap IV": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Lifetap V": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Lifetap VI": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Eir's Magnificent Touch": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Eir's Mandate": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Eir's Shield": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Eir's Suggestion": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Elder Sporespawn": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Elder Tangler": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Elegance of Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Elemental Deflection Chant": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Elemental Deflection Song": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Elemental Guarding Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Elemental Protection Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Elemental Shield": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Elemental Ward": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resists Coex Buff"
  },
  "Eliminate Sight": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Emasculate Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Ember Clip": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Embodiement Annex": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Shear"
  },
  "Emendation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Emendation of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Emerald Disease": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Emerald Disease Wrapper": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Emerald Poison": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Emerald Poison Wrapper": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Emerald Shield": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Emerald Shield (Enhanced)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Emerald Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Simulacrum"
  },
  "Emerald Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Empower Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Empower Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Empower the Elements": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Empowering Concordance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Empowering Harmony": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Empowering Perfection": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Empowering Tranquility": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Empowering Unity": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Encase Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Enchanted Armor": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Enchanted Armor Proc": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Enchanted Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Storm"
  },
  "Enchanting Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Enchanting Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Encoraching Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Encourage Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Encrust Eyes": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Encrusted Vision": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Endless Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Endow the Elements": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Endowment Sieze": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Shear"
  },
  "Endowment of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Endurance of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Endure Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Endure Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Endure Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Enduring Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Enemy's Debt": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Energy Barrier": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Energy Guard": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Energy Shield": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Energy Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Energy Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Energy of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Energy of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Enervating Affliction": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Enervating Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Enervating Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Enervating Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Enervation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Enfeeble Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Enfeeble Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Enfeeble Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Enfeebling Affliction": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Enfeebling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Engage": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Engaging Harmony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Engrosing Harmony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Enhance Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Enhance Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Enhance Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Enhance Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Enhance Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Enhanced Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Enhanced Celerity": {
    "classes": [
      "Healer",
      "Paladin",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Celerity Buff"
  },
  "Enhanced Evade": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Mercenary",
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Enhanced Senses": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Enrage": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Enrapturing Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Ensnaring Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Ensnaring Earth (Greater)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Ensnaring Earth (Lesser)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Ensnaring Earth (Potent)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Earth": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Earth (Greater)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Earth (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Earth (Potent)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entangling Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Enthralling Harmony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Enticing Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Entrance": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Entrancing Harmony": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Entrancing Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Entrancing Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Entrancing Melody": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Entrap": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Entrapping Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Entropic Affliction": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Entropic Disease": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Entropic Illness": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Entropic Pestilence": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Entropic Shot 1": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 2": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 3": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 4": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 5": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 6": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 7": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 8": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Shot 9": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Entropic Sickness": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Entwining Snakes": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Envelope of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Epiphany": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Eradicating Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Erase Memory": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Erosive Rocks": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Essence Blast": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Essence Devourer": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Essence Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Essence of Lethargy": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Essence of Weariness": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Debuff"
  },
  "Essence of the Forest": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Essence of the Grove": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Essence of the Tree": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Ethereal Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ethereal Bond": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Mauler",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ethereal Concussion": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ethereal Detonation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ethereal Devastation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ethereal Explosion": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Euphony of Healing": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Evade I Ability": {
    "classes": [
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Valewalker",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade II Ability": {
    "classes": [
      "Bard",
      "Berserker",
      "Blademaster",
      "Friar",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Minstrel",
      "Nightshade",
      "Ranger",
      "Savage",
      "Scout",
      "Shadowblade",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade III Ability": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Friar",
      "Hunter",
      "Infiltrator",
      "Nightshade",
      "Ranger",
      "Savage",
      "Scout",
      "Shadowblade",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade IV Ability": {
    "classes": [
      "Friar",
      "Infiltrator",
      "Nightshade",
      "Savage",
      "Shadowblade",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade V Ability": {
    "classes": [
      "Friar",
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade VI Ability": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evade VII Ability": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Evasion of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Eventide Redirection": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Eventide Reflection": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Eventide Repercussion": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Eventide Resonance": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Eventide Reverberation": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Evernight": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Evil Empowerment": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Crit Buff"
  },
  "Evil Horror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Eviscerate": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Eviscerating Protector": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Exacerbate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Exaggerate Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Exaggerated Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Exalted Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Exalted Magma Shield": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Excite Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Excommunicate": {
    "classes": [
      "Friar"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Executioner": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Exhaust Strength": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Exhausting Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Exhausting Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Exhausting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Expanded Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Expanding Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Expanding Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Expanse of Ice": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Expanse of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Expanse of Tangleweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Expectancy of Magic": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Conversion"
  },
  "Expel Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Expel Sight": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Expert of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Exploding Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Exploit Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Explosive Blast": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Explosive Blast (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Explosive Burst": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Explosive Burst (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Explosive Orb": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Explosive Orb (Major)": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Explosive Orb (Minor)": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Expose Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Extend Reach": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Extended Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Extinguish Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Extinguish Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Extinguish Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Extinguish Soul": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Extinguish Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Eye Shot": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Eyes of the Scout": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight Reduction"
  },
  "Eyes of the Sentinel": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight Reduction"
  },
  "Eyes of the Watchman": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight Reduction"
  },
  "Fabricated Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Facilitate Painworking": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Facinating Buffer": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Facinating Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Facinating Melody": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Falcon's Eye": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Falcon's Talon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fanatic's Redemption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Fanaticism": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fangs of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Fangs of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Fascination": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Fatigue Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Fatiguing Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Fatiguing Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Favor from Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Favor of Battle": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Favor of the Heavens": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Fear Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Fend Blow": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Fend Offense": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Feral Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Feral Spirit": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Ferocious Will": {
    "classes": [
      "Berserker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ferocity of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Fervor of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Combat Speed Buff"
  },
  "Fervor of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Festering Spores": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Fevering Spores": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Field of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Field of Entrapping": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Frost": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Ice": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Ivy": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Mazing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Field of Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Field of Slackening": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Slush": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Snaring": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Snow": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Suppression": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Tangleweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Field of Tangling": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Field of Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Fierce Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Fiery Bolt": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fiery Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Fiery Grapple": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Grapple 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Fiery Grasp": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Grasp 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Fiery Leglock": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Leglock 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Fiery Maelstrom": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fiery Maelstrom (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fiery Maelstrom (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fiery Orbs": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fiery Stranglehold": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Stranglehold 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Fiery Tangle": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Tangle 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Fiery Wrap": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Fiery Wrap 2": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Figments of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Figure Eight": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Figure Eight Heal": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Final Blast": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Find Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Fingers Of Ice": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Fingers Of Ice (Greater)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Fingers Of Ice (Lesser)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Fire Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fire Bolt": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fire Storm": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fire Storm (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fire Storm (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fire Streak": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fire Wind": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fireball": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fires from Below": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Firm Warrior Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "First Aid": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Fist Wraps": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fixed Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Flame Spear": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flame Streak": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flaming Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Flaming Rock": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flaming Rocks (Greater)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flaming Rocks (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flaming Rocks (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Flaming Scythe": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Flank": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Flaring Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Flaying Shield": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Fleetness Disjoin": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Shear"
  },
  "Fleetness of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Flesh of the Living": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Flexible": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Flickering Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Flickering Flame": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Floe of Ice": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Floe of Snow": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Flood of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Flow of Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Flowing Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Fluent Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powerless"
  },
  "Fluidity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Flurry": {
    "classes": [
      "Blademaster",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Flux of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Focus Blast": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Focus of Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Focus of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Focused Breach": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Focused Resilience": {
    "classes": [
      "Friar",
      "Shaman",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Focusing Chant": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Fog of Delirium": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fog of Senility": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Foil Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Force": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Force of Might": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Force of Nature": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Force of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Force of Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Force of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Force of the Oak": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Force of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Force of the Roundhouse": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Force of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Forest Phantom": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Forest Renascence": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Forest Restoration": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Forest Resurgance": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Forest Revivify": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Forest Shadow": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Forest Spear": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Forest Spirit": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Forest's Advocate": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Aid": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Blight": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Forest's Bulwark": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Companion": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Compatriot": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Core": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Curse": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Forest's Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Essence": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Heart": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Incarnation": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Menace": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Forest's Protector": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Revenge": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Forest's Scourge": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Forest's Sentry": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Servant": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Soul": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Forest's Torment": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Forging Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Foritify Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Fortification of Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Fortification of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Fortification of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Fortified Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Fortified Skin": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Primary Buff"
  },
  "Fortifying Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Fortitude of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Fortitude of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Fortitude of the Wanderer": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Foxfire": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fragmenting Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Free Spirits": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Freezing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Freezing Clench": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Freezing Clench Slow": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Freezing Grasp": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Freezing Grasp Slow": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Freezing Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Freezing Hold": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Freezing Howl": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Freezing Howl Slow": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Freezing Tendrils": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Freezing Terror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Freezing Terror Slow": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Frenzied Spirit": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Friar's Ally": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friar's Boon": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friar's Friend": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friar's Fury": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friar's Fury Heal": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Friar's Redress": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friar's Regeneration": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Friar's Strike": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Friend DoT Wrapper": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Frigg's Antidote": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Balm": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Cure": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Elixir": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Medicant": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Panacea": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigg's Remedy": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Frigid Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Frigid Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Frigid Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Frigid Mists": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Frigid Torment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Frontal Assault": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frost Blade": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frost Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Frost Cut": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frost Hammer": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frost Shadow": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frost-bound Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Frostbite": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frosting Tendrils": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Frosty Gaze": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Frosty Torment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Frozen Comet": {
    "classes": [
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Frozen Edge": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Debuff"
  },
  "Fueled by Rage": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Fungal  Degeneration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Barb": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Blast": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Blight": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Bramble": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Burr": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Case": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Coat": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Covering": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Decay": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Decrepitude": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Deterioration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Devolution": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Dilapidation": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Disintegration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Dispersion": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Erosion": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Froth": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Husk": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Ichor": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Muck": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Mucus": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Mud": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Needle": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Ooze": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Pin": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Pod": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Potency": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Resist Reduction Buff"
  },
  "Fungal Regeneration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Fungal Rejuvenation": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Fungal Restoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Fungal Scum": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Sheath": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Fungal Slime": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Sludge": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Slush": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Fungal Solvent": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Fungal Spear": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Spike": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Spine": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Spur": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Thistle": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Thorn": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Fungal Union": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fungal Wrap": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Furious Spirit": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Fury": {
    "classes": [
      "Armsman",
      "Hero",
      "Paladin",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Fury of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Fury of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Galaxy of Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Galaxy of Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Gale": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Galvanize Focus": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Garrote": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ghostly Adversary": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Ghostly Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Gift of Arawn": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer"
  },
  "Gift of Energy": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Gift of Essence": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gift of Force": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Gift of Form": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Gift of Insight": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Gift of Nethuni": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Gift of Perizor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gift of Power": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gift of Precision": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Gift of Renewal": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Gift of Renewal Proc": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Gift of Vim": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gift of Vision": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Gift of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Gift of the Heavens": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Gift of the Host": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Gigantic Blow": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Glacial Movement": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gleam Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Gleam Ray": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Gleam Streak": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Glimmering Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Glimpse of Chaos": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Glimpse of Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Glimpse of Fate": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Glimpse of Nightmares": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Glimpse of the Grave": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Glimpse of the Inevitable": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Glistening Blaze": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Glittering Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Glittering Ice Cloud": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Glittering Ice Cloud (Lesser)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Glittering Ice Cloud (Major)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Glittering Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Gloaming Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Globe of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Gloom Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Gloom Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Gloom's Enlightenment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Gloom's Guide": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Gloom's Wisdom": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Glorious Remedy": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Glorious Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Glossed Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Glowing Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Glowing Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gods' Drive": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Gods' Health": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Gods' Potency": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Gods' Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Gods' Vigor": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Gods' Will": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Grab of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Grace of Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Grace of Nethuni": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Gracefulness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Grasping Creepers": {
    "classes": [
      "Druid",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Grasping Ivy": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Grasping Roots": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Grasping Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Grasping Tangleweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Grasping Tendrils": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Grasping Thornweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Grasping Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Grasping of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Great Earthen Burst": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Amelioration": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Apotheosis": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Atony": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Greater Aura of Defense": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Aura of Echoing": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Aura of Guarding": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Aura of Redirection": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Aura of Reflection": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Aura of Resonation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Aura of Reverberation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Aura of Shielding": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Aura of Turning": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Barricade": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Battle Fervor": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Battle Fury": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Greater Battle Vigor": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Battle Zeal": {
    "classes": [
      "Paladin"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Greater Beguiled Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Greater Beguiled Injury": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Greater Beguiled Pain": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Greater Body Lock": {
    "classes": [
      "Occultist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Greater Bolt of Death": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Greater Bolt of Destruction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Greater Bolt of Havoc": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Greater Bolt of Ruin": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Greater Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Greater Cacophony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Greater Capitulation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Combustion": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Greater Conflagration": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Greater Crippling": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Greater Crippling Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Greater Curse of Blindness": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Debility": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Greater Demobilizing Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Greater Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Greater Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Greater Diversion": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Dusk Dart": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Earth Invigoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Greater Earth Vivification": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Greater Earthen Fury": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Earthen Power": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Earthen Rage": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Effervescence": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Greater Emendation": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Enervating Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Weapon Skill Constitution Debuff"
  },
  "Greater Enervation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Greater Ensnaring Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Greater Entangling Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Greater Entrancement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Greater Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Greater Fascination": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Force": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Greater Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Forest Shadow": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Greater Forest Spirit": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Greater Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Greater Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Greater Gloom Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Gust of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Holy Anger": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Holy Fury": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Holy Rage": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Holy Wrath": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Imbalance Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Greater Infectious Serum": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Greater Infirmity": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Greater Judgement": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Leg Twist": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Greater Lethal Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Lethal Venom": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Lull": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Lullaby": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Greater Magic Shield": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Mana Annihilation": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Mana Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Mana Burst": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Mesmerization": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Might of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Greater Mind Dissolution": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Mind Melt": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Molten Blanket": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Molten Wrap": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Murk Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Powerguard": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Powershield": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Purification": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Greater Reconstitution": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Greater Reconstruction": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Recovery": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Recuperation": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Refection": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Refocillation": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Greater Regeneration": {
    "classes": [
      "Bard",
      "Druid",
      "Vampiir",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Greater Regrowth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Renascence": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Renewal": {
    "classes": [
      "Cleric",
      "Friar",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Greater Reparation": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Resignation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Restoration": {
    "classes": [
      "Bard",
      "Druid",
      "Healer",
      "Shaman",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Resuscitation": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Reviction": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Revival": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Greater Rune of Agony": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Rune of Dusk": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Rune of Misery": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Greater Rune of Murk": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Rune of Obscurity": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Rune of Pitch": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Rune of Shadow": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Greater Sand Flurry": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Sedation": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Greater Shadow Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Sheet of Lava": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Sheet of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Greater Shell of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Shield": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Shield of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Greater Shield of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Greater Skin of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Smite": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Greater Submission": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Suppressive Barrier": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Greater Surrender": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Greater Thunder Bellow": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Thunder Howl": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Thunder Roar": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Thunder Shout": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Greater Vitality Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Greater Vitality Drain": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Greater Weakening Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Greater Webbing Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Grind Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Grinding Boulders": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Grinding Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Group Apotheosis": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Cure All": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure All"
  },
  "Group Cure Disease": {
    "classes": [
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Shaman",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Disease"
  },
  "Group Emendation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Purification": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Regrowth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Renascence": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Reparation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Restoration": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Group Revigoration": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Grove Augur": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Grove Druid": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Grove Oracle": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Grove Sibyl": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Grove's Aegis": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Agent": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Anguish": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Grove's Armor": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Assailant": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Assassin": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Buffer": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Defense": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Eliminator": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Enforcer": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Executioner": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Guard": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Hunter": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Inquisitor": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Grove's Protection": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Refuge": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Sanctuary": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Shield": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Grove's Ward": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Growing Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Grueling Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Grueling Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Guard I": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Guard II": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Guard III": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Guard of Health": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Guardian Bolster Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Guardian Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Guardian Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Guardian's Barrier": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Encouragement": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Guardian's Lesser Barrier": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Lesser Protection": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Lesser Shield": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Lesser Ward": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Shield": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guardian's Ward": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Guile": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Gungnir's Fury": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Gust of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Gust's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Gut Shot": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Hacking Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Half Moon": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hallucinatory Winds": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Halt Aggression": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Attack": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Hostility": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Invasion": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Offense": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Halt Rally": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Hammer of Devotion": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of Faith": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of Grace": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of Holiness": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of Justice": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of Zeal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of the Martyr": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of the Pious": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammer of the Sanctified": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Hammers": {
    "classes": [
      "Berserker",
      "Healer",
      "Savage",
      "Shaman",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hamstring": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hand of God": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Focus Shell"
  },
  "Hand to Hand": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Harden Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Hardened Skin": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Primary Buff"
  },
  "Harmonic Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Harmonic Song of Travel": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Harmonize Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Harry Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Haste Debuff, 16%, 20 sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 18%, 20 sec": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Valkyrie",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 19%, 20 sec": {
    "classes": [
      "Berserker",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 20%, 20 sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Scout",
      "Shadowblade",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 21%, 20 sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Vampiir",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 22%, 20 sec": {
    "classes": [
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Nightshade",
      "Reaver",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 26%, 20 sec": {
    "classes": [
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Savage",
      "Skald",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 30%, 20 sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 34%, 20 sec": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Scout",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste Debuff, 38%, 20 sec": {
    "classes": [
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Haste of Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Haste of the Angel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Haste of the Archangel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hasten Army": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Battallion": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Cohort": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Company": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Group": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Horde": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Pack": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hasten Squad": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Havoc": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hawk's Talon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Haymaker": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Head Shot": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Heal Group 100": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Group 15": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Group 30": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Group 45": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Group 60": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Group 75": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal PBAE 100": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal PBAE 125": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal PBAE 25": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal PBAE 50": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal PBAE 75": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 100": {
    "classes": [
      "Bard",
      "Friar",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 15": {
    "classes": [
      "Bard",
      "Friar",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 30": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 32": {
    "classes": [
      "Bard",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 45": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 49": {
    "classes": [
      "Bard",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 60": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 66": {
    "classes": [
      "Bard",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 75": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heal Self 83": {
    "classes": [
      "Bard",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Healing Conflux": {
    "classes": [
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Healing Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Healing Trance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Health Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Health Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Heart Stopper": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Hearth's Benison": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Hearth's Blessing": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Hearth's Gift": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Heat Chains": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat Clamp": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat Lock": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat Net": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat Pyre": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heat Snare": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat Web": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Heat from Below": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Heated Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Heated Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Heaven's Approbation": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heaven's Benediction": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heaven's Blessing": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heaven's Commendation": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heavenly Blast": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heavenly Bolt": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heavenly Detonation": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heavenly Dreams": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Heavenly Force": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heavenly Images": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Heavenly Imagination": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Heavenly Infusion": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Heavenly Mirage": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Heavenly Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Heavenly Song of Travel": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Heavenly Strike": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Heavenly Visions": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Heighten Energy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Heighten Matter": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Heighten Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Heightened Awareness": {
    "classes": [
      "Infiltrator"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Heightening Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Hel's Control": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Hel's Dominion": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Hel's Possession": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Help Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Heretic Constrictor": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Hexed Bonding Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Clutching Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Detaining Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Grasping Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Holding Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Tangling Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Tenacious Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hexed Webbing Root": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hibernal Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Hibernian Force": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hibernian Might": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hibernian Vigor": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hibernian Wrath": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hide Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Hinder Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Hinder Prey": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hinder Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Hinder Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Hindered": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Hindering Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Hoarfrost": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hold Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Holding Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Holding Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Holding of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Holy Agility": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Holy Anger": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Holy Barrier": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Holy Coordination": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Holy Dexterity": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Holy Encouragement": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Holy Fury": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Holy Guard": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Holy Might": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Holy Potency": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Holy Power": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Holy Rage": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Holy Shield": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Holy Staff": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Holy Strength": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Holy Vengeance": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Holy Wrath": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Honed Reflexes": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Honing the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Hooks of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Hooks of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Horizon Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hornet": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hornet's Sting": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hostile Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Hostility of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hugin's Affliction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Claw": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Hugin's Curse": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Damnation": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Malediction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Malison": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Vex": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Hugin's Vilification": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Humming Spike": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Hunger for Death": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Hunter's Ally": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Assault": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Attack": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Avatar": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Barb": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Blow": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Boon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Companion": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Elder Avatar": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Elder Protector": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Gift": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Lance": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Largess": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Offense": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Pet": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Press": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Protector": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Hunter Pet"
  },
  "Hunter's Spear": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hunter's Strike": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Hunter's Trap": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hurricane": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hurricane of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Hurricane's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hurry Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Hush Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Hymn of Healing": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Hymn of Soul Guarding": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Hymn of Soul Protection": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Hypnotic Darkness": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Hypnotic Harmony": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Ice Blast": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Ice Blast (Major)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Blast (Minor)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Blast (Potent)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Bond": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ice Bracelet": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ice Cable": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ice Chain": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ice Cloud": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Cloud (Greater)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Cloud (Minor)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Cloud (Potent)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ice Storm": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Hunter",
      "Nightshade",
      "Ranger",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Icebringer": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Iced Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Ichor of the Deep": {
    "classes": [
      "Animist",
      "Eldritch",
      "Necromancer",
      "Occultist",
      "Shaman",
      "Sorcerer",
      "Valewalker",
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Icy Brilliance": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Icy Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Icy Cleave": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Icy Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Icy Torment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ignore Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Ignore Debilitation": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Rampage"
  },
  "Ignore Depletion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Rampage"
  },
  "Ignore Impunities": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Rampage"
  },
  "Ignore Infirmity": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Rampage"
  },
  "Ignore Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Ignore Pain": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Ignore Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Ignore Weakness": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Rampage"
  },
  "Illuminate Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Illusion of Guarding": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Illusion of Protection": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Illusion of Shielding": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Illusions of the Elements": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Illusory Ache": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Agony": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Anguish": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Convulsions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Cramps": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Illusory Excrutiation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Lacerations": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Neuralgia": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Pains": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Illusory Spasms": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Illusory Torture": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Imaginary Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Imbue Alacrity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Imbue Greater Alacrity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Greater Haste": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Haste": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Lesser Alacrity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Lesser Haste": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Imbue Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Imbue the Abyss": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Imbue the Abyss (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Imbuement of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Immobilize Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Immolating Sphere": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Immolation": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Impact": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Impair Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Impaired Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Impale": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Impede Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Impede Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Impeding Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Impenetrable Skin": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Primary Buff"
  },
  "Impervious Skin": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Primary Buff"
  },
  "Impress Ambiguity": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Skills Debuff"
  },
  "Impress Amnesia": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Skills Debuff"
  },
  "Impress Confusion": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Skills Debuff"
  },
  "Impress Dread": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Skills Debuff"
  },
  "Imprison Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Improve Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Improvement": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Incapacitate": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Incapacitate Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Incapacitating Shout": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Incendiary Lance": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Incense": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Incinerating Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Incisive Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Incorporate the Living": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Increase Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Increase Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Increase Energy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Increase Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Increase Matter": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Increased Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Increased Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Indigosnake": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Indigosnake Heretic": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Indigosnake Reaver": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Indomitable Warrior Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Induce Ailment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Induce Disease": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Induce Fever": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Induce Malady": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Induce Sickness": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Ineluctable Hindrance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ineludible Encumberance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Ineludible Hindrance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Inescapable Encumberance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Inevitable Encumberance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Inevitable Hindrance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Infectious Serum": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Infectious Spores": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Infernal Carve": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infernal Cleave": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infernal Degredation": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Erosion": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Eruption": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Gouge": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infernal Infection": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Lance": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infernal Rot": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Slice": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infernal Sore": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Infernal Tear": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Infinite Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Infirmity": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Inflame": {
    "classes": [
      "Friar",
      "Infiltrator",
      "Mercenary",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Inflexible Armor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Inflict Amnesia": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Inflict Excruciation": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Forgetfulness": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Inflict Greater Excruciation": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Greater Malaise": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Greater Misery": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Greater Suffering": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Malaise": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Minor Amnesia": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Inflict Minor Forgetfulness": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Inflict Misery": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Inflict Oblivion": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Inflict Suffering": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Influence Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Influence Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Infurating Gesture": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Infuriate": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Infuse Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Infused Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Storm"
  },
  "Infusion of the Fallen": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Inhibiting Cold": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Inhibiting Cry": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Inhibiting Scream": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Inhibiting Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Inhibiting Shriek": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Inhibiting Wail": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Inner Strength": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Inquisitor's Redemption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Insanity": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Insidious Lethal Venom": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Insidious Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Insidious Will": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Piercing Magic"
  },
  "Insignia of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Instructing the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Instruments": {
    "classes": [
      "Bard",
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Insulting Gesture": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Intelligence Rupture": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Shear"
  },
  "Intensified Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Intensify Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Intensify Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Intensify Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Intercept": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Hero",
      "Mercenary",
      "Paladin",
      "Thane",
      "Valewalker",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Interrupt Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Intimacy for Death": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Intimacy with Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Intimacy with the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Intimidate Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Intoning Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Intruding Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Intrusive Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Inundation of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Inure Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Invest Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Invest Concordance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Invest Perfection": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Invigorate Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Invincibility": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Invoke Mjollnir": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Invulnerable Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Iron Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Irreverant Gesture": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Irreverent Gesture": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Jab": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Jade Ablative": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Jade Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Simulacrum"
  },
  "Javelin": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Jaw Breaker": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Jolting Staff": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Judgement": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Juggernaut": {
    "classes": [
      "Bonedancer",
      "Cabalist",
      "Enchanter",
      "Occultist",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Keen Sight": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Kelgor's Bane": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Kelgor's Boon": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Savage Endurance Heal"
  },
  "Kelgor's Claw": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Kelgor's Fist": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Kelgor's Gift": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Savage Endurance Heal"
  },
  "Kelgor's Might": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Kelgor's Reward": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Savage Endurance Heal"
  },
  "Kelgor's Wrath": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Kidney Rupture": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Kindled Barrier": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Kindled Guard": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Kindled Shield": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Kinetic Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Kinetic Dampening": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Kinetic Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Kinetic Siphon": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Kingsnake": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Knee Cap": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Knife of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Knives of Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Lacerate Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Lacerating Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Lambast": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lance Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lance of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lancer": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Languor": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Languoring Affliction": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Large Shields": {
    "classes": [
      "Armsman",
      "Champion",
      "Hero",
      "Paladin",
      "Reaver",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Large Weapons": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Last Stand": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Lava Avalanche": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Barrage": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Deluge": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Field": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lava Flux": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Force": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Force (Enhanced)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Inundation": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Snare": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Lava Spate": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava Streak": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Streak (Enhanced)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Strike": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Strike (Enhanced)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lava Torrent": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Lava's Fury": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Leaper": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Leather": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Minstrel",
      "Nightshade",
      "Ranger",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Vampiir",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Leeching Bolt": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Left Axes": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Leg Shot": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Leg Twist": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Lessen Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Lessen Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Lesser Abrasive Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Lesser Barricade": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Lesser Beguiled Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lesser Beguiled Injury": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lesser Beguiled Pain": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lesser Body Lock": {
    "classes": [
      "Occultist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Lesser Bolt of Death": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Destruction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Havoc": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Healing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Mending": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Renewal": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bolt of Ruin": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Bones to Ash": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bones to Dirt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bones to Dust": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bones to Grit": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bones to Powder": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Bones to Silt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Lesser Cacophony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Lesser Combustion": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Lesser Conflagration": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Lesser Constricting Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Constricting Jolt": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Contamination": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Crippling": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Lesser Crippling Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Lesser Crushing Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Decrepify": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Degeneration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Delaceration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Deliverance": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Lesser Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Lesser Deterioration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Devolution": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Lesser Disenchanting Burst": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Disenchanting Emanationdirect": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Disenchanting Emission": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Disenchanting Eruption": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Disintegrating Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Dusk Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lesser Earth Invigoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Lesser Earth Vivification": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Lesser Effervescence": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Lesser Enervating Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Weapon Skill Constitution Debuff"
  },
  "Lesser Ensnaring Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Entrapping Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lesser Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Lesser Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Lesser Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Lesser Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Lesser Gloaming Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lesser Grinding Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Gust of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Health Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Lesser Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Lesser Imbalance Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Lesser Infectious Serum": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Lesser Judgement": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Kinetic Dampening": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Kinetic Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Kinetic Siphon": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Lethal Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Lethal Venom": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Lullaby": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Lesser Mana Annihilation": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mana Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mana Burst": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mana Ripple": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mesmerization": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Lesser Midnight Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lesser Might of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Lesser Mind Blast": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mind Dissolution": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Mind Fade": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Mind Jolt": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mind Melt": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Mind Scream": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Mind Shriek": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Nature's Favor": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Lesser Nature's Gift": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Lesser Nature's Token": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Lesser Nocturnal Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lesser Null Ebullition": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Null Squall": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Null Storm": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Null Tempest": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Pounding Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Power of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Lesser Powerbarrier": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Lesser Powerfield": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Lesser Powerward": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Lesser Pulverizing Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lesser Purity of Aggression": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Lesser Purity of Attack": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Lesser Purity of Offense": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Lesser Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Lesser Reconstitution": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Lesser Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Lesser Rune of Mazing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Sand Flurry": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Shield of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Lesser Sigil of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Sigil of Devastation": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Sigil of Havoc": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Sigil of Ruin": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Sigil of Undoing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Lesser Smite": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Snaring Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Stamina of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Lesser Strength Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Lesser Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Lesser Strength of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Lesser Tangling Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Lesser Twilight Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Lesser Twisting Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Vigor Dispersal": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Lesser Vigor of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Lesser Vitality Drain": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lesser Warping Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Weakening Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Lesser Winding Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lesser Wrenching Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Lethal Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Leviathan": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Leviathan Heretic": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Leviathan Reaver": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Life Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Life Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lifebane": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lifeforce Evacuation": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Lifeforce Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Lifter": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lightning Affinity": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Ligneous Barrier": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ligneous Guard": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ligneous Seal": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ligneous Sheath": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ligneous Shield": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ligneous Wall": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Liontooth": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Liquify Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Liquify Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Lissome Wind": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Lissome Wind (Major)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Lissome Wind (Minor)": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Lithic Shot 1": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 2": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 3": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 4": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 5": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 6": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 7": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 8": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lithic Shot 9": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Lock Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Lock Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Locust Cloud": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Locust Flock": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Locust Horde": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Locust Mass": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Locust Swarm": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Long Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Long Wind": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Longbows": {
    "classes": [
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Longing for Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Longing for the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Lucidity of Power": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Lull": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Lullaby": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Lumber": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Lung Shot": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lunge": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lunging Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lunging Thrust": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Lustrous Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "MIght of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Madness": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Mage's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Mage's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Magic Empowerment": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Crit Buff"
  },
  "Magic Shield": {
    "classes": [
      "Bonedancer",
      "Paladin",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Magic Ward": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Magical Buffer": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster",
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Magical Net": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Magical Trap": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Magical Web": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Magma Crush": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Magnificent Remedy": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Magnificent Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Magnificent Song of Travel": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Magnify Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Magnify Dexterity": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Magnify Energy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Magnify Matter": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Magnify Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Magnify Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Majestic Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Storm"
  },
  "Major Amelioration": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Apotheosis": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Barricade": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Cacophony": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Combustion": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Major Conflagration": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Major Constricting Blast": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Major Constricting Field": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Major Consuming Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Crippling": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Major Crippling Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Major Crushing Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Deliverance": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Major Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Major Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Major Dismantling Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Dusk Dart": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Emendation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Enervating Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Weapon Skill Constitution Debuff"
  },
  "Major Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Major Ethereal Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Ethereal Concussion": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Ethereal Detonation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Ethereal Devastation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Ethereal Explosion": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Major Force": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Major Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Major Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Major Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Major Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Major Imbalance Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Major Infectious Serum": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Major Lethal Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Major Lethal Venom": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Major Magic Shield": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Mesh of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Major Mesmerization": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Major Net of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Major Purification": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Major Reconstitution": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Reconstruction": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Recovery": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Recuperation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Refection": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Refocillation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Major Regeneration": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Regrowth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Renascence": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Renewal": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Reparation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Restoration": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Restraining Field": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Major Resurgance": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Resuscitation": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Reviction": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Revival": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Major Shield": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Skin of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Smite": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Major Somatic Regeneration": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Rehabilitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Rejuvenation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Relief": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Renewal": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Reparation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Resuscitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Revigoration": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Somatic Revival": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Major Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Major Suppressive Barrier": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Major Vitality Drain": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Major Weakening Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Major Web of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Malevolent Affliction": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Malevolent Pestilence": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Malevolent Scourge": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Mana Annihilation": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Billow": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Burst": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Eddy": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Flood": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Flux": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Ripple": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Splash": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mana Surge": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Maneuver": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mangle": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mania of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Combat Speed Buff"
  },
  "Mark of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mark of Devastation": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mark of Havoc": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mark of Movement": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Mark of Prey": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mark of Ruin": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mark of Undoing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mark of the Elements": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Mask Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Massasauga": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Masterful Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powerless"
  },
  "Mastery of Blocking": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Concentration": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Ranger",
      "Runemaster",
      "Scout",
      "Shaman",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Focus": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Healer",
      "Heretic",
      "Mauler",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Healing": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Mentalist",
      "Paladin",
      "Shaman",
      "Valkyrie",
      "Warden",
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Mastery of Magery": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Healer",
      "Heretic",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Reaver",
      "Runemaster",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Pain": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Parrying": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Mercenary",
      "Occultist",
      "Paladin",
      "Reaver",
      "Savage",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mastery of Stealth": {
    "classes": [
      "Hunter",
      "Infiltrator",
      "Nightshade",
      "Ranger",
      "Scout",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Maul": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mauler": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mauler Staff": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Maximum Effervescence": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Maximum Force": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Medium Shields": {
    "classes": [
      "Blademaster",
      "Cleric",
      "Mercenary",
      "Skald",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Meliorating Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Melt Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Melt Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Memories of War": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Menace Spores": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Mend Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Mending Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Mental Purification": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Mercybringer": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Buff"
  },
  "Mesh of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Mesmerization": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Mesmerizing Glare": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Mesmerizing Glower": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Mesmerizing Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Mesmerizing Melody": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Mesmerizing Scowl": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Metal Guard": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Meteor Shower": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Midnight Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Midnight Sun": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Might Sunder": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Shear"
  },
  "Might of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Might of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Might of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Might of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Might of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Mighty Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Mind Annihilation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Mind Blast": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mind Dissolution": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Mind Fade": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Mind Flay": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mind Horror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Mind Jolt": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mind Melt": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Mind Scream": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Mind Shriek": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minion Rescue": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ministering Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Amelioration": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Annulling Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Apotheosis": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Minor Barricade": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Minor Body Lock": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Minor Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Minor Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Minor Combustion": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Minor Concussion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Conflagration": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Minor Consuming Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Crippling Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Minor Crushing Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Deliverance": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Minor Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Minor Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Minor Dismantling Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Earth Invigoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Minor Earth Vivification": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Minor Earthen Burst": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Minor Earthen Power": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Minor Emendation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Enervating Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Weapon Skill Constitution Debuff"
  },
  "Minor Entrapping Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Minor Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Minor Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Minor Fire Streak": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Minor Flame Spear": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Minor Flame Streak": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Minor Force": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Weapon Skill Buff"
  },
  "Minor Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Minor Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Minor Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Minor Gloom Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Minor Imbalance Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Minor Improvement": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Incendiary Lance": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Minor Infectious Serum": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Minor Judgement": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Lethal Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Minor Lethal Venom": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Minor Lullaby": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Minor Magic Shield": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Minor Mending": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Mesh of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Minor Mesmerization": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Minor Mind Fade": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Minor Net of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Minor Purification": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Minor Reconstitution": {
    "classes": [
      "Bard",
      "Druid",
      "Healer",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Minor Reconstruction": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Recovery": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Recuperation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Refinement": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Reflection": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Refocillation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Minor Regeneracy": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Regeneration": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Regrowth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Rejuvenation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Relief": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Renascence": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Renewal": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Reparation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Restoration": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Resurgance": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Resuscitation": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Reviction": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Revigoration": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Revival": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Revivification": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Minor Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Minor Shell of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Minor Shield of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Minor Smite": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Minor Stamina of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Minor Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Minor Vitality Drain": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Minor Weakening Poison": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Minor Web of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Mirages of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Mire Vision": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Misleading Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Misty Gloom": {
    "classes": [
      "Blademaster",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mitigating Cold": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Mjollnir's Fury": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Mjollnir's Protection": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mjolnir's Fury": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Modest Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Mold Burst": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Mold Cloud": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Mold Explosion": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Moldiness": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Molding Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Molten Barricade": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Molten Barrier": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Molten Blanket": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Molten Earth": {
    "classes": [
      "Cabalist",
      "Sorcerer",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Molten Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Molten Guard": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Molten Lake": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Molten Ocean": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Molten Pool": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Molten Puddle": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Molten Shield": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Molten Wrap": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Moon Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Moon Ray": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Moon Streak": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Moss Buffer": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Cloak": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Coat": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Cover": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Padding": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Sheet": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Moss Wrap": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Motivational Anthem": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Motivational Chant": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Motivational Hymn": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Motivational Song": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Motivational Strains": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Muddle Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Muffle Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Munin's Claw": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Murder Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Murk Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Murk Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Murk's Enlightenment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Murk's Guide": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Murk's Wisdom": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Mute Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Mystic Crystal Lore": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Mystic Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Storm"
  },
  "Mystic Net": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Mystic Trap": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Mystic Web": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Mystify Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Mystifying Ballad": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Mystifying Cadence": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Mystifying Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "NPC Archery (BD Commander)": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Nails of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Nails of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Natural Selection": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Nature's Appreciation": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Nature's Bane": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Barrier": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Bellow": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Nature's Blessing": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Nature's Blight": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Cocoon": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Focus Shell"
  },
  "Nature's Curator": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Deacon": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Decay": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Enlightenment": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Esteem": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Nature's Exhilaration": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Nature's Favor": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Fend": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Feud": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Nature's Gift": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Guard": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Heart of Wrath": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Nature's Ill": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Invigoration": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Nature's Keeper": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Nausea": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Poison": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Reckoning": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Nature's Retaliation": {
    "classes": [
      "Animist",
      "Valewalker",
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Nature's Retribution": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Nature's Revenge": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Nature's Rot": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Sagacity": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Sanction": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Nature's Sapience": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Sentinel": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Shield": {
    "classes": [
      "Valewalker",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Sight": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Steward": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Token": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Nature's Toxin": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Uplift": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Nature's Vendetta": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Nature's Vengeance": {
    "classes": [
      "Warden"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Nature's Venom": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Nature's Vision": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Wall": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Ward": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Nature's Wisdom": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Nature's Womb": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Necrotic Empowerment": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spell Crit Buff"
  },
  "Negate Advancement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Negate Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Negate Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Negate Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Negate Defenses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Random Armor Debuff"
  },
  "Negate Magic": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Negate Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Negate Sight": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Negate Soul": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Negate Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Negative Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Negative Maelstrom": {
    "classes": [
      "Animist",
      "Bonedancer",
      "Cabalist",
      "Enchanter",
      "Mentalist",
      "Necromancer",
      "Occultist",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Neriad's Blessing": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Waterbreathing"
  },
  "Neriad's Breath": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Waterbreathing"
  },
  "Neriad's Call": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Waterbreathing"
  },
  "Net of Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Nethersbane": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Create Item"
  },
  "Nethuni's Recuperating Waters": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Nethuni's Refreshing Waters": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Nethuni's Renewing Waters": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Neutralize": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Night Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Nil Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Nimbleness Tear": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Shear"
  },
  "Niord's Fury": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Nocturnal Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Northern Lights": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Note of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Notes of Health": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Nova": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Null Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Null Ebullition": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Null Squall": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Null Storm": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Null Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Null Tempest": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Nullify Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Nullify Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Nullify Offense": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Nullify Sight": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Nullify Soul": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Nullifying Ward": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Numb": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Numbing Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Numbing Tendrils": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Nurizane's Blinding Cyclone": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Nurizane's Blinding Gale": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Nurizane's Blinding Wind": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Oak's Girth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Oak's Stamina": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Oak's Stoutness": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Obfuscate": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Obligation to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Obligation to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Obliterate Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Obliteration": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Obliteration Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Obliviate Coordination": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Obliviate Sight": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Oblivion Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Obscure": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Obscure Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Obscure Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Obscure View": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Obscuring Dust": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Obsidian Strike": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Obstruct Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Obstructing Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Occultist's Plague": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Odin's Amelioration": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Anger": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Antidote": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Odin's Aura": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Odin's Aura Proc": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Bite": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Odin's Claw": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Clip": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Odin's Cure": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Odin's Deathblow": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Odin's Elixir": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Odin's Emendation": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Faith": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Odin's Frenzy": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Full Aura": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Odin's Full Aura Proc": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Grasp": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Odin's Greater Antidote": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Odin's Greater Aura": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Odin's Greater Aura Proc": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Greater Claw": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Greater Cure": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Odin's Greater Elixir": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Odin's Greater Hoof": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Greater Horn": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Greater Medicant": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Odin's Greater Ram": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Greater Retribution": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Grudge": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Hatred": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Heel": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Hoof": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Horn": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Ire": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Lesser Aura": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Odin's Lesser Aura Proc": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Lesser Retribution": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Lock": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Odin's Madness": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Odin's Major Retribution": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Medicant": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Odin's Minor Aura": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Odin's Minor Aura Proc": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Minor Retribution": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Purification": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Rage": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Ram": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Reconstruction": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Recovery": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Reparation": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Restoration": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Odin's Restraint": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Odin's Restriction": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Odin's Retribution": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Temperance": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Odin's Vengeance": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Odin's Virtue": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Odin's Wrath": {
    "classes": [
      "Hunter",
      "Runemaster",
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Oneness with Creation": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Onslaught": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Opal Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Orbit": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Oscillating Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ossify Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Overcharge Aggression": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Overpower Insect": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Overpower Reptile": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Overwhelm": {
    "classes": [
      "Infiltrator"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Overwhelming Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Owl Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pace of Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Pacify": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pacify Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pacifying Gaze": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pacifying Glance": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pacifying Glare": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pacifying Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pain of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Paradox Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Paragon's Encouragement": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Paralyze": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Paralyze Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyze Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Cloak": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Cloud": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Paralyzing Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Paralyzing Gaze": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Paralyzing Glance": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Paralyzing Glare": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Paralyzing Hymn": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Melody": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Shout": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Sphere": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Veil": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paralyzing Wind": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Paranoia": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Parry Ability": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Savage",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Partitioning of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Passion of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Combat Speed Buff"
  },
  "Patch Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Patch of Ivy": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Patch of Tangleweed": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Patch of Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Payment to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Payment to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Penumbra": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Perception of Power": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Percussion": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Perennial Range": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Range"
  },
  "Perfect Acuity": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Perfect Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Perfect Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Perfect Recovery": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Perfect Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Perfection of Form": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Perfection of Method": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Perfection of Style": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Perforate": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Perforate Artery": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Perforate Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Perizor's Disarming Bash": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Disarm"
  },
  "Perizor's Disarming Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Disarm"
  },
  "Perizor's Disarming Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Disarm"
  },
  "Perplex Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Confusion"
  },
  "Perserverance": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Persevering Warrior Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Persistent Obscuration": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Perspicuity of Power": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Persuade Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Perturbing Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Pet AF Buff": {
    "classes": [
      "Cabalist",
      "Druid",
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Pet Accentuate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Adept of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Afflicting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Agent of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Agent of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Aggravate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Agony of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Amber Simulacrum Stun": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Pet Anguish of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Apparitions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Aptitude for Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Arawn's Gift": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Bellow of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Billowing Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Blades of Wrath": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Bloating Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Boost Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Brawn of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Breaking the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Bringer of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Bringer of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Channeled Anger": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Ferocity": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Frenzy": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Fury": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Hatred": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Rage": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Savagery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Channeled Wrath": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Cleaving Guardian": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Command of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Communion with Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Communion with the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Con Buff": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Pet Constricting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Crippling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Cry of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Cultivate the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Cure RS": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Resurrection Illness"
  },
  "Pet Dead Flesh Living": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Deadening Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Death's Calling": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Debilitating Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Dejecting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Delusions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Despondant Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Develop the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Disabling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Disciplining the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Discomforting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Dispiriting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Distressing Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Edge of Hatred": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Efficacy Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Endowment of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Energy Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Enfeebling Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Enhance Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Eviscerating Protector": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Exacerbate Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Exhausting Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Pet Expanding Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Expert of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Exploding Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Fervor of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Figments of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Fire DD": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Flaying Shield": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Flesh of the Living": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Flowing Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Fortitude of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Gift of Energy": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Essence": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Force": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Insight": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Power": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Vim": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Gift of Vision": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Transfer Pet"
  },
  "Pet Glimpse of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Glimpse of Fate": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Glimpse of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Glimpse of the Inevitable": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Health Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Heighten Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Heightening Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Honing the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Imbue the Abyss": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Incorporate the Living": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Infinite Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Instructing the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Intensify Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Intimacy with Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Intimacy with the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Knives of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Life Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Lifeforce Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Longing for Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Longing for the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Pet Magnify Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Might of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Mirages of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Nature Spirit Bladeturn": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Pet Nature Spirit Stun": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Pet Necromancer Stun": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Pet Pain of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Phantasms of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Phantoms of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Poison Aroma": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Breath": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Exhalation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Gasp": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Gust": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Vapor": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Wheeze": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Poison Wind": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Power Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Proficiency of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Puissance Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Reaping Shield": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Refining the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Pet Regenerate Blood": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Regenerate Body": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Regenerate Flesh": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Regenerate Muscle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Pet Sapphire Simulacrum Lifedrain": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pet Sapphire Simulacrum Lifedrain Wrapper": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Scream of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Servant of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Servant of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Pet Sharpen Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Pet Shriek of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Shroud of Affliction": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Agony": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Injury": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Misery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Torture": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Shroud of Woe": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Pet Simulacrum DD": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Simulacrum DD Wrapper": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Simulacrum Resist Wrapper": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Sorrow of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Sorrowful Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Soul Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Soul Sundering Aura": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Pet Soul Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Soulbreaking Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Specters of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Spirit Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Spirit Thrall Bladeturn": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Pet Spirit Thrall Bladeturn Wrapper": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Pet Spirit Thrall DD": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Spirit Thrall DD Wrapper": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Spirit Thrall Lifedrain": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pet Spirit Thrall Lifedrain Wrapper": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Spirit Thrall Stun": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Pet Spirit Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Strength of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Strength-Constitution Buff": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Pet Swelling Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Tenacity of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Theft of Energy": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Theft of Liveliness": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Theft of Vigor": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Theft of Vim": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Tormenting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Torturous Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Underhill DD": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Pet Underhill DD Wrapper": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Pet Unending Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pet Vigor Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain Pet"
  },
  "Pet Vigor of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Pet Visions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Visions of Fate": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Visions of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Visions of the Inevitable": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "Pet Vitality Theft": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Lifedrain"
  },
  "Pet Vortex of Agony": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Anguish": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Grief": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Misery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Rue": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Suffering": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Vortex of Wretchedness": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Pet Weakening Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Petrify Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Petrify Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Petrify Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Petrifying Cry": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Phalanx": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Phantasms of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Phantom Adversary": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Phantom Enemy": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Phantom Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Regeneration": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Rehabilitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Rejuvenation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Relief": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Renewal": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Reparation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Resuscitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantom Revival": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Phantoms of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Phoenix Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Physical Defense": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Eldritch",
      "Enchanter",
      "Heretic",
      "Mentalist",
      "Runemaster",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pierce": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pierce Armor": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Slash Resist Debuff"
  },
  "Pierce Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Piercing": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Piercing Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Piercing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Piercing Concussion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Piercing Explosion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Piercing Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Piety Sequester": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Shear"
  },
  "Piety of the Wanderer": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Pilfer Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pillager": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pin": {
    "classes": [
      "Champion",
      "Reaver",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pin Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Pincer": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pincers of Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Pinpoint Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Pitch Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Placate": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Placate Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Plague": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Plague Barrage": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Plague Burst": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Plague Spores": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Plague Surge": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Plague Torrent": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Plague Trap": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Plate": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pleasurable Melodies": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Plunderer": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Point Blank Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Point Blank Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Poison Aroma": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Cloud": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Exhalation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Gasp": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Gust": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Poison Vapor": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Wheeze": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Poison Wind": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Polar Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Polar Light": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Polar Rift": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pole Thrash": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Polearms": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Poleaxe": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Polluting Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pollution": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Potence of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Potency Whack": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Shear"
  },
  "Pounding Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pousse d'Enchevêtreur": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Powder Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Power Absorb": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Power Blast": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Power Cross": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Shear"
  },
  "Power Drain": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Power Leech": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Power Restore Storm 1": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Power Restore Storm 2": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Power Restore Storm 3": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Power Restore Storm 4": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Power Restore Storm 5": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Power Heal"
  },
  "Power Shield": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powershield"
  },
  "Power Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Power Siphon": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Power Vacuum": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Power Vortex": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Power of Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Power of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Power of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Power of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Power of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Powerbarrier": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Powerfield": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Powershield": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Powerward": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Precision": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Precision Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Prevent Flight": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Mercenary",
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Pricklesprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Prismatic Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Prismatic Flare": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Prismatic Flash": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Prismatic Sheen": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Prismatic Shimmer": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Prismatic Strobe": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Proficiency of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Prohibiting Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Prompt Focus": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Prophet's Conviction": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Prophet's Dogma": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Prophet's Faith": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Prophet's Fidelity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Prophet's Penitence": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Prophet's Piety": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Protect I": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Mauler",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Savage",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protect II": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Hero",
      "Mauler",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protect III": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Hero",
      "Mauler",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Valewalker",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protecting Spirit": {
    "classes": [
      "Animist",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protection from Anarchy": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection from Dissent": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection from Doubt": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection from Fear": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection from Heresy": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection from Idleness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Protection of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protector": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Protector Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Protector's Encouragement": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Provoke": {
    "classes": [
      "Berserker",
      "Paladin",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Provoke Focus": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Psalm of Healing": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Pugnacious Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Puissance Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Puissance Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Pulsing Cure Disease": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Disease"
  },
  "Pulsing Cure Disease II": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Disease"
  },
  "Pulsing Cure Poison": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Poison"
  },
  "Pulsing Cure Poison II": {
    "classes": [
      "Cleric",
      "Druid",
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Poison"
  },
  "Pulverize Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pulverizing Force": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Puncture": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Puncture Defense": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Puncture Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Pure Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powerless"
  },
  "Pure Celerity": {
    "classes": [
      "Healer",
      "Paladin",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Celerity Buff"
  },
  "Purge": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Purge Sight": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Purification": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purification of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Purifying Amelioration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purifying Emendation": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purifying Heal": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purifying Rain": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Purifying Reconstruction": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purifying Restoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Purifying Strength": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Buff"
  },
  "Purity of Aggression": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Purity of Attack": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Purity of Contemplation": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Purity of Intellect": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Purity of Meditation": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Purity of Mind": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Purity of Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Purity of Offense": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Purity of Thought": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Pursuer Enhancement": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Putrifying Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Pyroclasmic Shot 1": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 2": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 3": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 4": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 5": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 6": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 7": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 8": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Pyroclasmic Shot 9": {
    "classes": [
      "Ranger"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Python": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Quarter Moon": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Quell Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Quell Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Quick Strike": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Quickcast": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bonedancer",
      "Cabalist",
      "Eldritch",
      "Enchanter",
      "Mentalist",
      "Runemaster",
      "Sorcerer",
      "Spiritmaster",
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Quicken Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Quickness of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Rabies": {
    "classes": [
      "Druid",
      "Hunter",
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Rabies 10%": {
    "classes": [
      "Druid",
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Rabies 15%": {
    "classes": [
      "Druid",
      "Hunter",
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Rabies 20%": {
    "classes": [
      "Druid",
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Rabies 25%": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Radiant Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Radiant Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rage of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Raging Power": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Raging Spirit": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Ragnarok": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Raider": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Raise Fallen": {
    "classes": [
      "Cleric",
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Rampage": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rampant Speed": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Rampant Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Rapid Fire 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapid Fire 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Rapier of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Ratfang": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ravager": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Cloud": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Drove": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Flock": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Horde": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Host": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Legion": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raven Throng": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Raw Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Raze": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Razor Edge": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Razorthorn": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Readiness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Reanimate Corpse": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Reanimate Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reaper": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reaping Shield": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Reaver Constrictor": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Reaver Curse": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Rebuild Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Recenter": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reception from Valhalla": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Reckoning of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Reconstitute Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reconstitution": {
    "classes": [
      "Druid",
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Reconstruct Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reconstruction": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reconstruction of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Recover Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Recovery": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Recovery of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Recuperation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Recurved Bow": {
    "classes": [
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Redeem from Valhalla": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Redwood's Girth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Redwood's Stamina": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Redwood's Stoutness": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Refinement": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Refiner's Strength": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Buff"
  },
  "Refining the Servant": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Reflect": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reflect Attack": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Reflect Blow": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Reflect Damage": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Reflect Offense": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Reflection": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic",
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reflective Backlash": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Reflex Attack": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Friar",
      "Mauler",
      "Mercenary",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Refocillation": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Refresh Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Regeneracy": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerate Blood": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Regenerate Blood (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Regenerate Body": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Regenerate Body (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Regenerate Flesh": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Regenerate Flesh (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Regenerate Muscle": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Regenerate Muscle (Pet)": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Regenerate Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Apotheosis": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Heal": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Renascence": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Resurgence": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Revival": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Regenerating Spirits": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Regeneration": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Vampiir",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Regrowth": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reign of Fire": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Reign of Fire (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Reign of Fire (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Reincarnate": {
    "classes": [
      "Cleric",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Reinforce Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reinforced": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Druid",
      "Hero",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reinforcement": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reject Advancement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Reject Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Rejuvenate Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Rejuvenating Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Release Clump": {
    "classes": [
      "Animist",
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Release Clump"
  },
  "Relentless Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Relief": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Remedy": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Remigration from Valhalla": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Remove Defenses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Random Armor Debuff"
  },
  "Remove Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Renascence": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Render Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Render Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Renew Flesh": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Renew Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Renewal": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Vampiir",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Renewing Conflux": {
    "classes": [
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Repair Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reparation": {
    "classes": [
      "Healer",
      "Shaman",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reparation of Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Reparation to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Reparation to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Repel Advancement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Repel Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Repel Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Repel Movement": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Replenish Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Repulse Evil": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Repulse Evil Heal": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Rescue": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Resignation": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Resilience of the Wanderer": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Resillience of the Sun": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Resist Attack": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Resist Magic": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Resist Secondary Buff"
  },
  "Resolute Minion": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Resolute Warrior Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Resolution": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Resonant Concussion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Resonant Explosion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Resonating Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Resounding Barrier": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Restitution to Arawn": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Restitution to Arawn Proc": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Restoration": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Shaman",
      "Valkyrie",
      "Vampiir",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Restorative Mend": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Restorative Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Restorative Trance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Restore Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Restore Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Restoring Conflux": {
    "classes": [
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Restrain Spirit": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Restraining Field": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Resurgance": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Resurrection": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Resuscitating Spirits": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Resuscitation": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Retribution of the Faithful": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Return Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Return Thrust": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Revenge": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Revenging Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Reverberating Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Reviction": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Revitalization": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Revival": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Heretic",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Revive": {
    "classes": [
      "Cleric",
      "Friar",
      "Heretic",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Revivification": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reviving Conflux": {
    "classes": [
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reviving Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Reviving Spirits": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Spread Heal"
  },
  "Rhyme of Creation": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Rhyme of Earth": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Rhyme of Nature": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Rhyme of the Cosmos": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Rhyme of the World": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Rhythm of Earth": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Rhythm of Hibernia": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Rhythm of Nature": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Rhythm of the Cosmos": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Rhythm of the World": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Rib Cracker": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Rib Separation": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ricochet": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Right of Life": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Righteous Potency": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Righteous Power": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Righteous Strength": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Rigid Armor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Rigid Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Rile": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ringing Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ripening Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Riposte": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ripper": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Roaring Concussion": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Roaring Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rock Unity": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Rotstrike": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Rotstrike Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Rotting Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Rotting Hex": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Rough Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Rough Pebbles": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Roundhouse": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rout Energy": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Routing Blows": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Ruby Shield": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Ruby Shield (Enhanced)": {
    "classes": [
      "Theurgist",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Ruby Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Simulacrum"
  },
  "Ruby Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rude Gesture": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Ruiner": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rune of Agony": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Discomfort": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Dusk": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Hurt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Injury": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Mazing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Rune of Misery": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Movement": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Rune of Murk": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Obscurity": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Pain": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Pitch": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Shadow": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rune of Torment": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Rune of Utter Agility": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rune of the Elements": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Runic Barrier": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Runic Fend": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Runic Guard": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Runic Shield": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Runic Wall": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Runic Ward": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Rush": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Rush of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Rushing Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Safe Fall I": {
    "classes": [
      "Hunter",
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Ranger",
      "Scout",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Safe Fall II": {
    "classes": [
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Safe Fall III": {
    "classes": [
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Safe Fall IV": {
    "classes": [
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Safe Fall V": {
    "classes": [
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sagacity of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Saint's Energy": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Saint's Persistence": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Saint's Refreshment": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Combat Heal"
  },
  "Saint's Stamina": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Saint's Tenacity": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Buff"
  },
  "Saint's Vigor": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Sanative Trance": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Sand Flurry": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sap Might": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Sap Strength": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Sapphire Simulacrum": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Simulacrum"
  },
  "Sapphire Slash": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Savage Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage DP SBuff"
  },
  "Sawgrass": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scale": {
    "classes": [
      "Champion",
      "Druid",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scars of Battle": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scathing Blade": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scatter Fervor": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Scatter Zeal": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Scintillating Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Scorching Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Scorching Staff": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Scorpion": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scourge Spores": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Scourgestrike": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Scourgestrike Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Scraping Rocks": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Scratching Pebbles": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Scream of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Screaming Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Screeching Howl": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Screeching Note": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Screeching Scream": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Screeching Shout": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Screeching Tone": {
    "classes": [
      "Bard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Screen of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Scuffing Pebbles": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Scythe": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Scythe of Flame": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Scythe of Ice": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Sea of Illusion": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sea of Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Sea of Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Seal of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Seal of Movement": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Searing Blast": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Searing Gust": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Gust (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Wave": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Wave (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Wind": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Wind (Lesser)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Searing Wind (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Second Wind": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sedate": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Sedating Lullaby": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Seize Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Selective Blindness": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Self Control": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Self Destruction": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Random Buff Shear"
  },
  "Selfless Devotion": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Sense of Magic": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Conversion"
  },
  "Serenity": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Servant of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Servant of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Sever": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shackle Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Shackling Curse": {
    "classes": [
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Damage Debuff"
  },
  "Shadow Beckon": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shadow Blast": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadow Shroud": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shadow Strike": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shadow Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Shadow's Acuteness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Agility": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Blessing": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Shadow's Edge": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shadow's Endowment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Shadow's Enlightenment": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Shadow's Fleetness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Nimbleness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Quickness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Rain": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shadow's Reflex": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Swiftness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Shadow's Wisdom": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Shadowblast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowburst": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowcharge": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowcrash": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowcrush": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowdoom": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowforce": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowshock": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shadowsmash": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shaman's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Shaman's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Shards of Bone": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Sharpen Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Sharpened Senses": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Sharpened Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Shatter": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shatter Empowerment": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Random Buff Shear"
  },
  "Shattering Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shattering Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Shattering Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sheet of Lava": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Sheet of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Shell of Magma": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Shield Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Shield Swipe": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shield Trip": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Shield of Devotion": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Faith": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Grace": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Health": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Buff"
  },
  "Shield of Holiness": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Immunity": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shield of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Justice": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Melody": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Shield of Piety": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shield of Wood": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Shield of Zeal": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shielding Emissary": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Shieldmaiden's Aid": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Shieldmaiden's Alleviation": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Shieldmaiden's Redress": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Shieldmaiden's Remedy": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal Over Time"
  },
  "Shift Essence": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Shift Health": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Shift Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Shift Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Shift Vitality": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Shimmering Armor": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Shimmering Armor Proc": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Shimmering Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Shimmering Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shimmering Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shining Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Shining Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shocking Staff": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Shooting Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Shortbows": {
    "classes": [
      "Blademaster",
      "Hero",
      "Mercenary",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Shriek of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shrieking Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Shrill Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shrill Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Shroud of Affliction": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Agony": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Cowardice": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Shroud of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Shroud of Despair": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Shroud of Doubt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Shroud of Dread": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Shroud of Fear": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Shroud of Gloom": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Shroud of Injury": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Shroud of Madness": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Shroud of Misery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Pitch": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Shroud of Senility": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Shroud of Shadow": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Shroud of Torture": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of Woe": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Shroud of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Side Bash": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Side Crush": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Side Slicer": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sideswipe": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sidewinder": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Siege Resistance": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Siege Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Siege Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Sif's Revenge": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sight of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Sigil of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sigil of Devastation": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sigil of Havoc": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sigil of Ruin": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sigil of Undoing": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sigil of the Elements": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Signet of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Silence Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Simmering Cloud": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Simple Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Simple Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Simple Song of Travel": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Siphon Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Skeleton to Blood": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Skillful Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Powerless"
  },
  "Skin of Diamond": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of Dust": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of Earth": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of Rock": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of Stone": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Skin of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Skull Breaker": {
    "classes": [
      "Armsman",
      "Heretic",
      "Mercenary",
      "Paladin",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sky of Rapture": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Sky of Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Slam": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Savage",
      "Scout",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Slashing": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Slashing Arrows": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage Type"
  },
  "Slashing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Sledgehammer": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Slicing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Slow, 40%, 11sec": {
    "classes": [
      "Armsman",
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 12sec": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Champion",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Ranger",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Vampiir",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 14sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Friar",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Scout",
      "Valkyrie",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 15sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Skald",
      "Thane",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 19sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 23sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Heretic",
      "Hero",
      "Hunter",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Shadowblade",
      "Skald",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 40%, 27sec": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slow, 70%, 6sec": {
    "classes": [
      "Champion",
      "Reaver",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slowed": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Combat Speed Debuff"
  },
  "Slowness": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Sluggishness": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Slyness": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Small Shields": {
    "classes": [
      "Bard",
      "Berserker",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Hunter",
      "Infiltrator",
      "Minstrel",
      "Nightshade",
      "Ranger",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Thane",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Smash": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Smelting Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Smite": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Smoldering Embers": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Smoltering Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Smother Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Snapshot": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Snaring Blow": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Snaring Exhaustion": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Snaring Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Snatch Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Snow Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Snow Shower": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Snowblind": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Snowsquall": {
    "classes": [
      "Berserker",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Soften Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soften Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soil Vision": {
    "classes": [
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Solar Absorption": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Solar Conversion": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Solar Flare": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Solar Regeneration": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Solar Regrowth": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Solar Resuscitation": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Soldier's Barricade": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Soldier's Citadel": {
    "classes": [
      "Armsman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Solid Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Solidarity of Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Solidified Skin": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Melee Resist Primary Buff"
  },
  "Solidify Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Somatic Reconstitution": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Regeneration": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Rehabilitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Rejuvenation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Relief": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Renewal": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Reparation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Resuscitation": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Revigoration": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Revival": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Somatic Shot 1": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 2": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 3": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 4": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 5": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 6": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 7": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 8": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Somatic Shot 9": {
    "classes": [
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Song of Clarity": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Song of Empowering": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Song of Energy": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Song of Healing": {
    "classes": [
      "Bard",
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Minor Healing": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Minor Regeneration": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Minor Rejuvenation": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Minor Renewal": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Power": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Song of Regeneration": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Rejuvenation": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Renewal": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Rest": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Song of Travel": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Song of the Mind": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Sonic Barrier": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sonorous Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soothing Spirit": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Soporific Scintillation": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Sorcerous Web": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Sorrow of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Sorrowful Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Soul Annihilation": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Bane": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soul Banish": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Blast": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Blight": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soul Bolstering Chant": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Soul Bolstering Song": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Soul Break": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Soul Burden": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Burial": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Curse": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Dampen": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Soul Destruction": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Diminish": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Soul Dispersal": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Dissipation": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Evacuation": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Soul Explosion": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Oppression": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Soul Poison": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soul Quench": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Soul Shield": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Soul Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Soul Sundering Aura": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Soul Sundering Shield": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Soul Toxin": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soul Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Soul Venom": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Soul Ward": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Coex Buff"
  },
  "Soul of Magic": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Conversion"
  },
  "Soulbreaking Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Sovereign Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Sovereign Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Sparkling Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spear of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Spears": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Specters of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Spectrum Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Speed of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Speed of Kudzu": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Speed of Sound": {
    "classes": [
      "Bard",
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Speed of the Angel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Speed of the Archangel": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spell Blast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spell Bombardment": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spell Burst": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spell of Crawling": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spell of Creeping": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spell of Greater Healing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Greater Mending": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Greater Renewal": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Healing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Languoring": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spell of Lumbering": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spell of Mending": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Minor Healing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Minor Mending": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Minor Renewal": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Power": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Spell of Regeneration": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Regen Buff"
  },
  "Spell of Renewal": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Spell of Slowness": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spell of Sluggishness": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Spellbinder's Blast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spellbinder's Bombardment": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spellbinder's Burst": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spellbound Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Storm"
  },
  "Sphere of Annihilation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sphere of Negation": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sphere of Oblivion": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sphere of Unmaking": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spinesprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spinning Staff": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spirit Bladeturn": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Spirit Burden": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spirit Burial": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spirit Confluence": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Curse": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spirit Decay": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spirit Evacuation": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit Flood": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Flow": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Flux": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Form": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Occultist Form"
  },
  "Spirit Fount": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Ill": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spirit Martyr": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spirit Oppression": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Spirit Purge": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Spirit Rot": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spirit Shell": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Focus Shell"
  },
  "Spirit Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Spirit Surge": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Spirit Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Spirit Wrench": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spirit of Aggravation": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Anger": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Attack": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Battle": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Betterment": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Combat": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Cunning": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Deceit": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Deception": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Enmity": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Fury": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Guile": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Hatred": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Ire": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Melee": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Nourishing": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Outrage": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Rage": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Regeneration": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Relief": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Remedy": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Replenishing": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Spirit of Strife": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Trickery": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of Vengeance": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of War": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Buff"
  },
  "Spirit of Wrath": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Spirit of the Forest": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Spirit of the Grove": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Spirit of the Tree": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Spirit's Fury": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Spirit's Justification": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Rage": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Spirit's Reckoning": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Retaliation": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Retribution": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Revenge": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Vendetta": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Vengeance": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spirit's Vindication": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Spiritual Barrier": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Spiritual Guard": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Spiritual Shield": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Splendorous Armor": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Splendorous Armor Proc": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Splendorous Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Splintered Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Splitfrost": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Splitter": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Burst": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spore Cannon": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Cloud": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spore Ejector": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Emitter": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Erupter": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Explosion": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spore Jet": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Secreter": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Spewer": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Storm": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Spore Vent": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spore Whirlwind": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Sporespawn": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sporespawn Youth": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Spreading Vines": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Sprouting Undergrowth": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Spurred Weapons": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Spursprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Sputin's Legacy": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Squall": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Squall's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Stab": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stabbing Blade": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stag I": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stag II": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stag III": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stag IV": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stamina of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Stamp of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Standard Shot 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Standard Shot 9": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Static Tempest": {
    "classes": [
      "Champion",
      "Friar",
      "Mentalist",
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Staves": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Steady Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Steal Lifeforce": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Steaming Blast": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steaming Blast (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steaming Blast (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steaming Wind": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steaming Wind (Major)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steaming Wind (Minor)": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Steel Mind": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stiffen Skeleton": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Stifle Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Stiletto of Night": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Stimulate Focus": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Sting": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stingers of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Stir Focus": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Stoic Stand": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Stoicism": {
    "classes": [
      "Champion",
      "Paladin",
      "Reaver",
      "Thane",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stoicism II": {
    "classes": [
      "Armsman",
      "Hero",
      "Mauler",
      "Savage",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stoicism III": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stone Unity": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Buff"
  },
  "Storm Affinity": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Storm of Insanity": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Storm's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Strength From Adversity": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Strength From Adversity Proc": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Strength Lop": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Shear"
  },
  "Strength of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Strength of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Strength of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Defender": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Strength of the Forest": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Grove": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Hinterland": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Oak": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Strength of the Orchard": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Strength of the Sun": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Strength of the Thicket": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Timberland": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Tree": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Strength of the Wildwood": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strength of the Wood": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Army": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Battalion": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Blow": {
    "classes": [
      "Healer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Strengthen Bone Army": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Strengthen Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Strengthen Cohort": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Company": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Group": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Health": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Strengthen Horde": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Pack": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strengthen Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Strengthen Squad": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Strike Prediction": {
    "classes": [
      "Infiltrator",
      "Mentalist",
      "Nightshade",
      "Reaver",
      "Savage",
      "Shadowblade",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Studded": {
    "classes": [
      "Armsman",
      "Berserker",
      "Cleric",
      "Healer",
      "Hunter",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Savage",
      "Scout",
      "Shaman",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stun": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stun, 10sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 2sec": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Reaver",
      "Scout",
      "Shadowblade",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 3sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Reaver",
      "Scout",
      "Shadowblade",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 4sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 5sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 6sec": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 7sec": {
    "classes": [
      "Armsman",
      "Berserker",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 8sec": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Friar",
      "Heretic",
      "Hero",
      "Infiltrator",
      "Mercenary",
      "Nightshade",
      "Paladin",
      "Ranger",
      "Reaver",
      "Scout",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stun, 9sec": {
    "classes": [
      "Armsman",
      "Blademaster",
      "Champion",
      "Heretic",
      "Hero",
      "Mercenary",
      "Paladin",
      "Reaver",
      "Savage",
      "Scout",
      "Thane",
      "Valkyrie",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stunned": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Stun"
  },
  "Stunning Aura": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Bellow": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Blade": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stunning Blow": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stunning Flare": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Flash": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Glare": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Halo": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Screech": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Stunning Shout": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stunning Stab": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stunning Wrath": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Stunning Yell": {
    "classes": [
      "Minstrel"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Style ABS 2": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Style ABS 7": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Subdolosity": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Subdue": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Subduing Cold": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Submission": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Subterfuge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Subtle Kills": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Subtlety": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Subvert Strength": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Succor Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Summon Aegis": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Occultist Pet"
  },
  "Summon Aged Ice Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Aged Ice Spirit": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Bone Archer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Arrow": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Bolt": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Boss": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Bouncer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Captain": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Chieftan": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Commander": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Dart": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Deadeye": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Defender": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Diviner": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Guard": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Hunter": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Keeper": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Magus": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Master": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Overseer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Commander"
  },
  "Summon Bone Patroller": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Sentry": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Shaman": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Warlock": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Warmage": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bone Watchman": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonebeguiler": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonebewitcher": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonebreaker": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonebuilder": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Boneburster": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonecaster": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonecracker": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonecrusher": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonecurser": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonefixer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonehealer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonehexer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonejinxer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Boneknitter": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonemage": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonemender": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonepatcher": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonerazer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Boneslammer": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Bonesmasher": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Minion"
  },
  "Summon Elder Ice Spirit": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Fiend": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Occultist Pet"
  },
  "Summon Fire": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Summon Greater Ice Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Ice Elemental": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Ice Spirit": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Lesser Ice Spirit": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Minor Ice Spirit": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Theurgist Pet"
  },
  "Summon Mjollnir": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Summon Priest": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Occultist Pet"
  },
  "Summon Soultorn": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Occultist Pet"
  },
  "Summon Spirit Champion": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Spirit Fighter"
  },
  "Summon Spirit Fighter": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Spirit Fighter"
  },
  "Summon Spirit Soldier": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Spirit Fighter"
  },
  "Summon Spirit Swordsman": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Spirit Fighter"
  },
  "Summon Spirit Warrior": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Spirit Fighter"
  },
  "Summon Succubus": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Occultist Pet"
  },
  "Sun Blast": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sun Ray": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sun Streak": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Sun and Moon": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Sunder Energy": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Debuff"
  },
  "Sundering Blows": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Superior Bark Skin": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Superior Barricade": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Superior Body Lock": {
    "classes": [
      "Occultist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Superior Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Superior Coordination": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Superior Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Superior Discipline of Laresh": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Superior Earth Invigoration": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Superior Earth Vivification": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Regen Buff"
  },
  "Superior Effervescence": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Superior Essence Consumption": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Superior Evasion": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Buff"
  },
  "Superior Fascination": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Superior Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Superior Friction": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Superior Gift of Foresight": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Evade Buff"
  },
  "Superior Imbalance": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Superior Leg Twisting": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Superior Lullaby": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Superior Magic Shield": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Superior Raven Bolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Superior Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Superior Shield": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Superior Skin of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Superior Strength of the Forge": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Superior Suppressive Barrier": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Supernova": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Support Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Support Bonecaster": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Body Resist Debuff"
  },
  "Suppress Lifeforce": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Suppress Movement": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Suppress Sight": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Suppress Soul": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Suppress Strength": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Suppress View": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Suppress Vision": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Suppressing Screech": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Suppressive Barrier": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Suppressive Buffer": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Supreme Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Supreme Judgement": {
    "classes": [
      "Cleric"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Supreme Powerguard": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Supreme Runebolt": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Supress": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Surge of Cataclysm": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Destruction": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Infliction": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Maiming": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Mutilation": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Ruin": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surge of Wrecking": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Surrender": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Debuff"
  },
  "Survival of the Fittest": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Suspend Charge": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stun"
  },
  "Swelling Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Sweltering Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Sweltering Cloud": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Swift Reconstitution": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Swiftness of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Evade Buff"
  },
  "Swords": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Symbol of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Symbol of Movement": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Tactics": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taipan": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Talons of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Talons of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Tangler": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tangler Sapling": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tangler Youngling": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tangler Youth": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Animist Fn F"
  },
  "Tangling Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Tangling Rune": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Tangling Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Tangling of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Tarantula": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taunt, 25": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Style Taunt"
  },
  "Taunting Blade": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taunting Call": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taunting Scythe": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taunting Shout": {
    "classes": [
      "Armsman",
      "Hero",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Taxing Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Taxing Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Tearing Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Tease": {
    "classes": [
      "Friar",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Taunt"
  },
  "Teeth of the Wild": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Tegashrig's Accommodation": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage To Power"
  },
  "Tegashrig's Arbitration": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage To Power"
  },
  "Tegashrig's Mediation": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage To Power"
  },
  "Tegashrig's Negotiation": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage To Power"
  },
  "Temper": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tempered Strike": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Tempest": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tempest of Sand": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Tempestuous Shot 1": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 2": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 3": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 4": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 5": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 6": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 7": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 8": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tempestuous Shot 9": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Tenacious Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Tenacious Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Tenacious Warrior Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Tenacity of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Tendril Field": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Teragani's Fury": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Teragani's Ire": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Teragani's Rage": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Matter Resist Debuff"
  },
  "Terrify Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Test of Courage": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Faith": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Test of Faith Proc": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Test of Honor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Mettle": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Mind": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Nerve": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Power": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Spirit": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Test of Strength": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Testudo": {
    "classes": [
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thane 100d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 150d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 175d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 20d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 45d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 50d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Thane 75d": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "The Empty Mind": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Theft of Energy": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Theft of Liveliness": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Theft of Vigor": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Theft of Vim": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Theophany": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Thicken Bones": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Thigh Cut": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thistle": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thistlesprout": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Thor's Answer": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thor's Anvil": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thor's Bolt": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Fortification": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Full Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Greater Bolt": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Greater Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Hammer": {
    "classes": [
      "Berserker",
      "Savage",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thor's Lesser Bolt": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Lesser Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Major Bolt": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Might": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Minor Bolt": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Minor Lightning": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thor's Potence": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Power": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Strength": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Vigor": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thor's Vitality": {
    "classes": [
      "Thane"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Thorned Weapons": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thorns of Retribution": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Thornsprout": {
    "classes": [
      "Druid",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Thornweed Field": {
    "classes": [
      "Bonedancer",
      "Mauler",
      "Reaver",
      "Runemaster",
      "Warden",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Thorny Shield": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Threshing the Chaff": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Thrown": {
    "classes": [
      "Berserker",
      "Shadowblade",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thrusting": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thrusting Arrows": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Damage Type"
  },
  "Thrusting Claw": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magical Strike"
  },
  "Thrusting Spear": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thrym's Strength": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Thunder Affinity": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Energy Resist Buff"
  },
  "Thunder Bellow": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thunder Howl": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thunder Roar": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thunder Shout": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Thunder's Bash": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Blow": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Crush": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Force": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Hammer": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Rend": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunder's Strike": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Thunderous Burst": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Thunderous Burst (Major)": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Thunderous Burst (Minor)": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Thunderstorm": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tigersnake": {
    "classes": [
      "Heretic",
      "Reaver"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tightening Armor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Tireless": {
    "classes": [
      "Armsman",
      "Bard",
      "Berserker",
      "Blademaster",
      "Champion",
      "Friar",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Savage",
      "Scout",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tiring Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Tiring Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Toiling Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Toiling Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Token of Destruction": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Token of Movement": {
    "classes": [
      "Runemaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Tones of Health": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Toothgnasher's Bite": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgnasher's Hoof": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgnasher's Horn": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgnasher's Ram": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgrinder's Bite": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgrinder's Hoof": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgrinder's Horn": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Toothgrinder's Ram": {
    "classes": [
      "Thane"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Torment Movement": {
    "classes": [
      "Heretic"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Torment Spores": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Tormenting Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Tornado": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tornado's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Torrent of Dementia": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Torrential Blaze": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Torrid Cloud": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Torso Shot": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Torturous Cackle": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Totemic Fear": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Totemic Sacrifice": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Totemic Wrath": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Toughness": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tracker Enhancement": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Tracker's Alacrity": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tracking Spear": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tranquilize Area": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Tranquillize": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Transplace Essence": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Transplace Health": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Transplace Spirit": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Transplace Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Transplace Vitality": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Life Transfer"
  },
  "Trial By Fire": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Defensive Proc"
  },
  "Trial By Fire Proc": {
    "classes": [
      "Cleric"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Tribal Assault": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tribal Might": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tribal Rage": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tribal Wrath": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Parry Buff"
  },
  "Tribute from Eir": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Tribute of Battle": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Trickiness": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Triple Wield": {
    "classes": [
      "Blademaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Tumultuous Barrier": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Magic Ablative Armor"
  },
  "Tunes of Health": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Twilight Strike": {
    "classes": [
      "Nightshade"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Nightshade Nuke"
  },
  "Twin Return": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Twin Spikes": {
    "classes": [
      "Infiltrator",
      "Mercenary"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Twin Star": {
    "classes": [
      "Blademaster",
      "Nightshade",
      "Ranger"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Twinkling Arms": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Twinkling Visions": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Twisting Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Two Fists": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Two Handed": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Two Moons": {
    "classes": [
      "Armsman",
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Typhoon's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Tyr's Fury": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Ultimate Demoralization": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Ultimate Force of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Ultimate Recovery": {
    "classes": [
      "Champion",
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Umbral Shroud": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Umbral Wave": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Unavoidable Encumberance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Unavoidable Hindrance": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Unbending Armor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Unceasing Burden": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Underhill Ally": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Underhill"
  },
  "Underhill Ally Heal": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Heal"
  },
  "Underhill Companion": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Underhill"
  },
  "Underhill Compatriot": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Underhill"
  },
  "Underhill Friend": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Underhill"
  },
  "Underhill Mystery": {
    "classes": [
      "Cabalist",
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Underhill Zealot": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Summon Underhill"
  },
  "Underhill's Lifebane": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Undermine Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Undulating Aura": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Unending Death": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Unerring Strike": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Unholy Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Unholy Rejuvenation": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": "Omni Heal"
  },
  "Unity of Mind": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize Duration Buff"
  },
  "Unmake Mind": {
    "classes": [
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Unmake Perception": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Unmake Seeing": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Unmake Sight": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Unmake Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Unmake Vision": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Unnerving Bellow": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fear"
  },
  "Unshakable Cast": {
    "classes": [
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Uninterruptable"
  },
  "Unstoppable Force": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Unveil Flaw": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Unyeilding Call of Gleipnir": {
    "classes": [
      "Hunter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Unyielding Armor": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Unbreakable Speed Decrease"
  },
  "Uppercut": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mauler",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Vale Defense": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Valhalla's Blessing": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Valhalla's Contempt": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Valhalla's Despite": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Valhalla's Disdain": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Valhalla's Rage": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Valhalla's Scorn": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Valkryie's Command": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Shear"
  },
  "Valkryie's Dominance": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Shear"
  },
  "Valkyrie 100d": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Valkyrie 150d": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Valkyrie 45d": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Valkyrie 50d": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Valkyrie power drain 3%": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Valkyrie power drain 6%": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Power Drain"
  },
  "Valkyrie's Agility": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Aid": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Valkyrie's Alacrity": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Alleviation": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Valkyrie's Haste": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Health": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Valkyrie's Quickness": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Redress": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Valkyrie's Remedy": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Health Regen Buff"
  },
  "Valkyrie's Shield": {
    "classes": [
      "Berserker",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Valkyrie's Spirit": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Vigilance": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Valkyrie's Vivacity": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Vampiir Constitution +3": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vampiir Dexterity +3": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vampiir Quickness +2": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vampiir Strength +3": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vampiir's Blaze": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Charge": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Vampiir's Combustion": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Embers": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Fire": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Flame": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Flare": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Heat": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Inferno": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Pyre": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Rush": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Vampiir's Sparks": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Vampiir's Speed": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Vampiir's Sprint": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Vampiir's Stride": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Vampiiric Awareness": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stealth Lore"
  },
  "Vampiiric Feint": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vampiiric Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stealth Lore"
  },
  "Vampiiric Sight": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Stealth Lore"
  },
  "Vanish": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vanquish Sight": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Nearsight"
  },
  "Vanquisher": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vehement Renewal": {
    "classes": [
      "Friar",
      "Paladin",
      "Shaman",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Veil Path": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Veil Recovery": {
    "classes": [
      "Animist",
      "Armsman",
      "Bainshee",
      "Bard",
      "Berserker",
      "Blademaster",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Friar",
      "Healer",
      "Heretic",
      "Hero",
      "Hunter",
      "Infiltrator",
      "Mauler",
      "Mentalist",
      "Mercenary",
      "Minstrel",
      "Necromancer",
      "Nightshade",
      "Occultist",
      "Paladin",
      "Ranger",
      "Reaver",
      "Runemaster",
      "Savage",
      "Scout",
      "Shadowblade",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Vampiir",
      "Warden",
      "Warlock",
      "Warrior",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Veil of Apprehension": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Veil of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Veil of Doubt": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Veil of Hesitation": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Veil of Indecision": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Veil of Senility": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Mesmerize"
  },
  "Veil of Uncertainty": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Vengeance of the Raven": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Vent of Elemental Guarding": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Elemental Protection": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Elemental Resistance": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Elemental Shielding": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Physical Guarding": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Physical Protection": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Physical Resistance": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vent of Physical Shielding": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Vigor Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Vigor Vacuum": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vigor of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vigor of the Champion": {
    "classes": [
      "Champion"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vigor of the Dead": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vigor of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vigor of the Oak": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Vigor of the Redwood": {
    "classes": [
      "Bard",
      "Druid",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Vigor of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vigor of the Viking": {
    "classes": [
      "Healer",
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Vigorous Will": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Vile Horror": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Debuff"
  },
  "Villainous Strike": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Debuff"
  },
  "Vim of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vindictive Bite": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Shear"
  },
  "Vindictive Nip": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Shear"
  },
  "Vine Field": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Viper": {
    "classes": [
      "Heretic",
      "Infiltrator",
      "Nightshade",
      "Reaver",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Viper's Bite": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Viruous Might": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Viruous Potency": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Viruous Power": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Viruous Strength": {
    "classes": [
      "Paladin"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Buff"
  },
  "Vision of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Visions of Death": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Visions of Fate": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Visions of the Elements": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Elemental Resist Debuff"
  },
  "Visions of the Grave": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Visions of the Inevitable": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vitality Drain": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Vitality Siphon": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Vitality Theft": {
    "classes": [
      "Necromancer",
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Vitality of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vitality of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Vitality of the Uruz": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Buff"
  },
  "Vitiate Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Vivify Golem": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Voice of Horror": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Voice of Shock": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Voice of Skadi": {
    "classes": [
      "Skald"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Void Abyss": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Bolt": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Break": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Chasm": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Cleave": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Fissure": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Gap": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Gulf": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Rent": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Rift": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Slit": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Void Soul": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Soul Resist Debuff"
  },
  "Void Strength": {
    "classes": [
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Volcanic Pillar": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Occultist",
      "Runemaster",
      "Warlock",
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Volley 1": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 2": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 3": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 4": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 5": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 6": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 7": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley 8": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Archery"
  },
  "Volley Resistance": {
    "classes": [
      "Hunter",
      "Ranger",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Archery Resistance"
  },
  "Vortex of Agony": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Anguish": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Grief": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Misery": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Rue": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Suffering": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Vortex of Wretchedness": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Wailing Cascade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Wailing Pain": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Wake Forgetful": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Wake Ignorant": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Wake Mindless": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Wake Oblivious": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Wake Senseless": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Amnesia"
  },
  "Wake Servant": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cure Mezz"
  },
  "Wall of Flame": {
    "classes": [
      "Wizard"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Wall of Song": {
    "classes": [
      "Minstrel",
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "War Crier": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "War Herald": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "War Howl": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "War Messenger": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Warbellow": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Warcry": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Ward Blow": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Ward Offense": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "AF Buff"
  },
  "Ward of Power": {
    "classes": [
      "Bainshee",
      "Eldritch",
      "Enchanter",
      "Mentalist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Armor Absorption Buff"
  },
  "Warden's Courage": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Warden's Encouragement": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Speed Enhancement"
  },
  "Warden's Honor": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Warden's Spirit": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spirit Resist Buff"
  },
  "Warholler": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Warlock's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Warlock's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Warmage's Lifetap": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Lifedrain"
  },
  "Warmage's Snare": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Warmth from Below": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Warmth of the Badger": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Warmth of the Bear": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Warmth of the Wolf": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Cold Resist Buff"
  },
  "Warping Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Warshriek": {
    "classes": [
      "Skald"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Wasp's Sting": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Way of Magic": {
    "classes": [
      "Occultist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Magic Conversion"
  },
  "Way of Perfection": {
    "classes": [
      "Mauler"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Add"
  },
  "Weak Essence of Lethargy": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Combat Speed Debuff"
  },
  "Weak Essence of Weariness": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fatigue Consumption Debuff"
  },
  "Weaken Body": {
    "classes": [
      "Cabalist",
      "Sorcerer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Debuff"
  },
  "Weaken Senses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Effectiveness Debuff"
  },
  "Weaken Strength": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Debuff"
  },
  "Weakened Armor": {
    "classes": [
      "Bonedancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Weakened Vigor": {
    "classes": [
      "Cabalist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Weakening Embrace": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Weakening Grasp of Februstos": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Endurance Drain"
  },
  "Weakening Pain": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Pet Spell"
  },
  "Wearing Rocks": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Weather Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Weather Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Weather Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Webbing Blast": {
    "classes": [
      "Eldritch"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Webbing Creepers": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Webbing Vines": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Webbing of Nature": {
    "classes": [
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Weed Field": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Root"
  },
  "Welcome from Valhalla": {
    "classes": [
      "Healer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Resurrect"
  },
  "Whirling Blade": {
    "classes": [
      "Berserker",
      "Hunter",
      "Savage",
      "Shadowblade",
      "Skald",
      "Thane",
      "Valkyrie",
      "Warrior"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Whirling Blaze": {
    "classes": [
      "Heretic"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Increasing Damage"
  },
  "Whirling Spear": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Whirling Staff": {
    "classes": [
      "Friar"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Whirring Spike": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Bolt"
  },
  "Wild Call": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wild Healing": {
    "classes": [
      "Bard",
      "Cleric",
      "Druid",
      "Friar",
      "Healer",
      "Heretic",
      "Mentalist",
      "Paladin",
      "Shaman",
      "Valkyrie",
      "Warden",
      "Warlock"
    ],
    "isDamage": false,
    "isHeal": true,
    "type": null
  },
  "Wild Minion": {
    "classes": [
      "Bonedancer",
      "Cabalist",
      "Druid",
      "Enchanter",
      "Hunter",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Sorcerer",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wild Power": {
    "classes": [
      "Animist",
      "Bainshee",
      "Bard",
      "Bonedancer",
      "Cabalist",
      "Champion",
      "Cleric",
      "Druid",
      "Eldritch",
      "Enchanter",
      "Healer",
      "Heretic",
      "Mauler",
      "Mentalist",
      "Minstrel",
      "Necromancer",
      "Occultist",
      "Reaver",
      "Runemaster",
      "Shaman",
      "Skald",
      "Sorcerer",
      "Spiritmaster",
      "Thane",
      "Theurgist",
      "Valewalker",
      "Valkyrie",
      "Warlock",
      "Wizard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wild Spirit": {
    "classes": [
      "Hunter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Wild Swing": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wiliness": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Willpower Dissolve": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Constitution Shear"
  },
  "Wind Taker": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Snare"
  },
  "Windfall": {
    "classes": [
      "Bard",
      "Blademaster",
      "Champion",
      "Hero",
      "Warden"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Winding Blow": {
    "classes": [
      "Mauler"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Parry Buff"
  },
  "Winding Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Windmill": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Windmill's Devastation": {
    "classes": [
      "Valkyrie"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Style Direct Damage"
  },
  "Winter Blast": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "Winter's Scythe": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wisdom of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Acuity Buff"
  },
  "Wisp Blaze": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Fire": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Flame": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Flare": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Glow": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Heat": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Inferno": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Pyre": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wisp Spark": {
    "classes": [
      "Animist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Wither": {
    "classes": [
      "Druid"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Wither Defenses": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Random Armor Debuff"
  },
  "Witherstrike": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Witherstrike Proc": {
    "classes": [
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Disease"
  },
  "Withstand Blows": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Crush Resistance Buff"
  },
  "Withstand Lacerations": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Slash Resistance Buff"
  },
  "Withstand Punctures": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Thrust Resistance Buff"
  },
  "Wolftooth": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wood's Vengeance": {
    "classes": [
      "Animist",
      "Valewalker"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Shield"
  },
  "Woodspirit Barrier": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Woodspirit Guard": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Woodspirit Seal": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Woodspirit Sheath": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Woodspirit Shield": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Woodspirit Wall": {
    "classes": [
      "Animist"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Bladeturn"
  },
  "Wounding Thrust": {
    "classes": [
      "Hunter",
      "Valkyrie"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wracking Aura": {
    "classes": [
      "Reaver"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Wraith's Barricade": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Wraith's Barrier": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Wraith's Shield": {
    "classes": [
      "Bainshee"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Ablative Armor"
  },
  "Wrap of Darkness": {
    "classes": [
      "Bonedancer",
      "Runemaster",
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Debuff"
  },
  "Wrap of Ivy": {
    "classes": [
      "Bard"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Spec AF Buff"
  },
  "Wrap of the Deep": {
    "classes": [
      "Shaman"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Heat Resist Buff"
  },
  "Wrath of Champions": {
    "classes": [
      "Champion",
      "Paladin",
      "Thane",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wrath of the Raven": {
    "classes": [
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Fumble Chance Debuff"
  },
  "Wrath of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wrenching Curse": {
    "classes": [
      "Warlock"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage"
  },
  "Wrest Will": {
    "classes": [
      "Sorcerer"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Charm"
  },
  "Wretched Ground": {
    "classes": [
      "Occultist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": null
  },
  "Wyvern Talon": {
    "classes": [
      "Hero"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wyvern's Bite": {
    "classes": [
      "Blademaster",
      "Champion",
      "Hero",
      "Nightshade",
      "Ranger",
      "Vampiir"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Wyvernfang": {
    "classes": [
      "Armsman",
      "Infiltrator",
      "Mercenary",
      "Minstrel",
      "Paladin",
      "Reaver",
      "Scout"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "Zeal of Kelgor": {
    "classes": [
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Savage Combat Speed Buff"
  },
  "Zealot's Fury": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Direct Damage With Debuff"
  },
  "Zealot's Pain": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Over Time"
  },
  "Zealot's Redemption": {
    "classes": [
      "Friar"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Offensive Proc"
  },
  "Zephyr's Dance": {
    "classes": [
      "Druid"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Dexterity Quickness Buff"
  },
  "Zest of Valhalla": {
    "classes": [
      "Spiritmaster"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Zest of the Underhill": {
    "classes": [
      "Enchanter"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Strength Constitution Buff"
  },
  "Zombie Servant's Touch": {
    "classes": [
      "Necromancer"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": null
  },
  "aged ice elemental Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "aged ice spirit Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "elder ice spirit Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "greater ice elemental Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "ice elemental Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "ice spirit Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "lesser ice spirit Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "minor ice spirit Nuke": {
    "classes": [
      "Theurgist"
    ],
    "isDamage": true,
    "isHeal": false,
    "type": "Damage Speed Decrease"
  },
  "style af debuff 100": {
    "classes": [
      "Berserker",
      "Blademaster",
      "Mercenary",
      "Savage"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  },
  "style af debuff 50": {
    "classes": [
      "Infiltrator",
      "Nightshade",
      "Ranger",
      "Shadowblade"
    ],
    "isDamage": false,
    "isHeal": false,
    "type": "Base Af Debuff"
  }
}
;
