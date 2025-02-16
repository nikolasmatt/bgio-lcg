// function Card(value, suit, rank) {
// "number": "",
//   // this.value = value;
//   // this.suit = suit;
//   // this.rank = rank;
// }

const cardlist = [
  {
    number: 1,
    name: "Tank",
    type: "Being",
    subtype: "",
    element: "",
    stats: {
      strength: 2,
      armor: 0,
      agility: 0,
      will: 0,
    },
    traits: ["human"],
    text: "",
    materials: {
      soul: 1,
    },
  },
  {
    number: 2,
    name: "Short Sword",
    type: "Item",
    subtype: "Equipment",
    element: "",
    stats: {
      strength: 1,
      armor: 1,
      agility: 0,
      will: 0,
    },
    traits: ["sword", "one-handed"],
    text: "",
    materials: {
      metal: 1,
    },
  },
  {
    number: 3,
    name: "Small Shield",
    type: "Item",
    subtype: "Equipment",
    element: "",
    stats: {
      strength: 0,
      armor: 2,
      agility: 0,
      will: 0,
    },
    traits: ["shield", "one-handed"],
    text: "",
    materials: {
      wood: 1,
    },
  },
  {
    number: 4,
    name: "Dense Forest",
    type: "Location",
    subtype: "",
    element: "Earth",
    traits: [],
    text: "",
    production: {
      wood: 3,
    },
  },
  {
    number: 5,
    name: "Iron Mine",
    type: "Location",
    subtype: "",
    element: "Earth",
    traits: ["sword", "one-handed"],
    text: "",
    production: {
      metal: 3,
    },
  },
  {
    number: 6,
    name: "Mister Wizard",
    type: "Being",
    subtype: "",
    element: "",
    stats: {
      strength: 0,
      armor: 0,
      agility: 0,
      will: 5,
    },
    traits: ["human", "wizard"],
    text: "BEWARE MY FIREBALL!",
    materials: {
      soul: 1,
    },
  },
  {
    number: 7,
    name: "Stinky Goblin",
    type: "Being",
    subtype: "",
    element: "",
    stats: {
      strength: 1,
      armor: 1,
      agility: -1,
      will: 0,
    },
    traits: ["goblin"],
    text: "Shower?",
    materials: {
      soul: 1,
    },
  },
  {
    number: 6,
    name: "Goblinhole",
    type: "Location",
    subtype: "",
    element: "",
    text: "Goblins only!",
    production: {
      soul: 1,
    },
  },
  {
    number: 7,
    name: "Wizard Tower",
    type: "Location",
    subtype: "",
    element: "",
    text: "Wizards only!",
    production: {
      soul: 1,
    },
  },
  // {
  //   "number": "5",
  //   "name": "Short Sword",
  //   "type": "Item",
  //   "subtype": "Equipment",
  //   "element": "",
  //   "stats": {
  //     "strength": 1,
  //     "armor": 1,
  //     "agility": 0,
  //     "will": 0,
  //   },
  //   "traits": ['sword', 'one-handed'],
  //   "text": "",
  //   "materials": {
  //     metal: 1,
  //   },
  // },

  // {
  //   "number": "1",
  //   "name": "Commerce",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Destroy a friendly Item. Reveal the top 5 cards of your deck. Add an item of the same type to your Inventory.",
  //   "materials": "",
  // },
  // {
  //   "number": "2",
  //   "name": "Diplomatic Solution",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "None",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "min2",
  //   "will": "",
  //   "traits": [],
  //   "text": "React: Prevent all damage to this character.",
  //   "materials": "",
  // },
  // {
  //   "number": "3",
  //   "name": "Hone",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "None",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "This character's next Sharp or Piercing attack this turn does +2 damage On Hit.",
  //   "materials": "",
  // },
  // {
  //   "number": "4",
  //   "name": "Teleport",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "None",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "min3",
  //   "traits": [],
  //   "text": "Move this character up to 4. Action +1.",
  //   "materials": "",
  // },
  // {
  //   "number": "5",
  //   "name": "Greatship",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Water",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "",
  //   "materials": "Metal, Rope, Hide, Wood",
  // },
  // {
  //   "number": "6",
  //   "name": "Health Potion",
  //   "type": "Item",
  //   "subtype": "Potion",
  //   "element": "",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Use: Heal 5. Draw a card.",
  //   "materials": "Soul",
  // },
  // {
  //   "number": "7",
  //   "name": "Leather Armor",
  //   "type": "Item",
  //   "subtype": "Armor",
  //   "element": "None",
  //   "strength": 0,
  //   "armor": "+2",
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Armor, Light, Chest",
  //   "text": "",
  //   "materials": "Hide",
  // },
  // {
  //   "number": "8",
  //   "name": "Lighthammer",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+1",
  //   "armor": 0,
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Hammer, 1-Handed, Blunt",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "9",
  //   "name": "Long Axe",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+3",
  //   "armor": "+1",
  //   "agility": -1,
  //   "will": 0,
  //   "traits": "Axe, 2-Handed, Sharp",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "10",
  //   "name": "Longbow",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+4",
  //   "armor": -3,
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Bow, 2-Handed, Piercing",
  //   "text": "",
  //   "materials": "Wood, Rope",
  // },
  // {
  //   "number": "11",
  //   "name": "Longsword",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+3",
  //   "armor": "+1",
  //   "agility": -1,
  //   "will": 0,
  //   "traits": "Sword, 2-Handed, Sharp",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "12",
  //   "name": "Plate Armor",
  //   "type": "Item",
  //   "subtype": "Armor",
  //   "element": "None",
  //   "strength": 0,
  //   "armor": "+4",
  //   "agility": -2,
  //   "will": 0,
  //   "traits": "Armor, Heavy, Chest",
  //   "text": "",
  //   "materials": "Metal, Metal",
  // },
  // {
  //   "number": "13",
  //   "name": "Short Axe",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+1",
  //   "armor": 0,
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Axe, 1-Handed, Sharp",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "14",
  //   "name": "Shortbow",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+2",
  //   "armor": -2,
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Bow, 2-Handed, Piercing",
  //   "text": "",
  //   "materials": "Wood, Rope",
  // },
  // {
  //   "number": "15",
  //   "name": "Shortsword",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+1",
  //   "armor": 0,
  //   "agility": 0,
  //   "will": 0,
  //   "traits": "Sword, 1-Handed, Sharp",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "16",
  //   "name": "Sledgehammer",
  //   "type": "Item",
  //   "subtype": "Weapon",
  //   "element": "None",
  //   "strength": "+3",
  //   "armor": "+1",
  //   "agility": -1,
  //   "will": 0,
  //   "traits": "Hammer, 2-Handed, Blunt",
  //   "text": "",
  //   "materials": "Metal",
  // },
  // {
  //   "number": "17",
  //   "name": "Farmhouse",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Earth",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "",
  //   "materials": "Hide, Metal, Rope",
  //   'text': '+1 wood',
  //   "production": {
  //     "wood": 1,
  //   },
  // },
  // {
  //   "number": "18",
  //   "name": "Tree-on-Cliff",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Earth",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "+1 wood",
  //   "materials": "Metal, Wood",
  //   "production": {
  //     "wood": 1
  //   },
  // },
  // {
  //   "number": "19",
  //   "name": "Dwarven Fortress",
  //   "type": "Location",
  //   "subtype": "Castle",
  //   "element": "Earth",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "+1 wood, +1 metal",
  //   "materials": "",
  //   "production": {
  //     "wood": 1,
  //     "metal": 1
  //   },
  // },
  // {
  //   "number": "20",
  //   "name": "Woodland",
  //   "type": "Location",
  //   "subtype": "Wild",
  //   "element": "Earth",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "",
  //   "materials": "Wood",
  //   "production": {
  //     "wood": 1,
  //     "metal": 1
  //   },
  //   'text': '+1 wood, +1 metal',
  // },
  // {
  //   "number": "21",
  //   "name": "Item Shop",
  //   "type": "Location",
  //   "subtype": "Vendor",
  //   "element": "",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Sells goods",
  //   "materials": "",
  //  text: 'Vendor',
  // },
  // {
  //   "number": "22",
  //   "name": "First City",
  //   "type": "Location",
  //   "subtype": "Settlement",
  //   "element": "",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "materials": "",
  //   "production": {
  //     "wood": 1,
  //     "metal": 1
  //   },
  //   'Text': '+1 metal',
  // },
  // {
  //   "number": "23",
  //   "name": "Little Village",
  //   "type": "Location",
  //   "subtype": "Settlement",
  //   "element": "",
  //   "strength": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Place some sheeps around. +1 wood",
  //   "materials": "",
  //   "production": {
  //     "wood": 1,
  //   },
  // },
  // {
  //   "number": "24",
  //   "name": "Fireball",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "min2",
  //   "traits": "Destruction",
  //   "text": "+3 Ranged attack.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "25",
  //   "name": "Desecrate",
  //   "type": "Ability",
  //   "subtype": "Tactic",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": "Destruction",
  //   "text": "Characters cannot move through target space.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "26",
  //   "name": "Fury",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "+3 Might this turn. -3 Armor this turn.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "27",
  //   "name": "Channel",
  //   "type": "Ability",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "-X Soul: Perform a +X ranged attack.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "28",
  //   "name": "Fire Dagger",
  //   "type": "Ability",
  //   "subtype": "Thief",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "m1",
  //   "traits": "Conjuration",
  //   "text": "Equip a +1 Might offhand Sword weapon.",
  //   "materials": "Soul",
  //   "recipe": "",
  // },
  // {
  //   "number": "29",
  //   "name": "Armory",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Put your arms in here to buy them!",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "30",
  //   "name": "Berserker",
  //   "type": "Being",
  //   "subtype": "Fighter",
  //   "element": "Fire",
  //   "might": 3,
  //   "armor": 2,
  //   "agility": 2,
  //   "will": "",
  //   "traits": [],
  //   "text": "O: +2 Melee attack.\nD: React - After being hit by a basic attack, if the attacking character is in range, perform a -4 basic attack against them.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "31",
  //   "name": "Pyromancer",
  //   "type": "Being",
  //   "subtype": "Mage",
  //   "element": "Fire",
  //   "might": 3,
  //   "armor": 0,
  //   "agility": 2,
  //   "will": "",
  //   "traits": [],
  //   "text": "O: +0 Ranged attack.\nO: Burn target character. Range 2.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "32",
  //   "name": "Fire Rogue",
  //   "type": "Being",
  //   "subtype": "Rogue",
  //   "element": "Fire",
  //   "might": 1,
  //   "armor": 1,
  //   "agility": 3,
  //   "will": "",
  //   "traits": [],
  //   "text": "O: 1 damage Melee attack. Draw a card.\nD: The next attack that targets this character misses.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "33",
  //   "name": "Hero",
  //   "type": "Being",
  //   "subtype": "Fighter",
  //   "element": "Fire",
  //   "might": 5,
  //   "armor": 4,
  //   "agility": 2,
  //   "will": "",
  //   "traits": "Leader",
  //   "text": "O: +2 Melee attack.\nO: You may move up to 3 spaces in one direction and then make a -2 melee attack.\nD: The next time an adjacent character would take damage from an opponent's attack, this character takes that damage instead.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "34",
  //   "name": "Rebirth Potion",
  //   "type": "Item",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Use: Recruit a character from the Crypt.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "35",
  //   "name": "Fire Core",
  //   "type": "Location",
  //   "subtype": "Core",
  //   "element": "Fire",
  //   "might": "-",
  //   "armor": 20,
  //   "agility": "-",
  //   "will": "",
  //   "traits": [],
  //   "text": "Draw +1. At the end of your turn, discard a card from your hand.",
  //   "materials": "",
  //   "recipe": "",
  // },
  // {
  //   "number": "36",
  //   "name": "Volcano",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": "Quest",
  //   "text": "Complete: Have 5 or more of your characters on the field.\nReward: Draw a card for each of your characters on the field.",
  //   "materials": "+1 wood, +1 metal",
  //   "recipe": "",
  //   "production": {
  //     "wood": 1,
  //     "metal": 1
  //   },
  // },
  // {
  //   "number": "37",
  //   "name": "Campfire",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Characters in this row have +1 Might. Fire characters in this row have +3 Might.",
  //   "materials": "+1 Soul",
  //   "recipe": "",
  //   "production": {
  //     "soul": 1,
  //   },
  //   'text': '',
  // },
  // {
  //   "number": "38",
  //   "name": "Obsidian Mine",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Enter: +3 Soul or +3 Metal.",
  //   "materials": "2 metal",
  //   "recipe": "",
  //   "production": {
  //     "wood": 1,
  //     "metal": 1
  //   },
  // },
  // {
  //   "number": "39",
  //   "name": "Heatwell",
  //   "type": "Location",
  //   "subtype": "",
  //   "element": "Fire",
  //   "might": "",
  //   "armor": "",
  //   "agility": "",
  //   "will": "",
  //   "traits": [],
  //   "text": "Build: +1 Soul. \n-3 Soul: Draw a card.",
  //   "materials": "+1 Soul",
  //   "recipe": "",
  //   "production": {
  //     "soul": 1
  //   },
  // }
];

export function generateDeckFromDecklist(decklist) {
  return cardlist
    .reduce(
      (populatedDeck, card) =>
        decklist.hasOwnProperty(card.name) && decklist[card.name] > 0
          ? [
              ...populatedDeck,
              ...Array.from({ length: decklist[card.name] }).fill({ ...card }),
            ]
          : populatedDeck,
      []
    )
    .map((card, i) => ({ ...card, id: i.toString() }));
}

export function Cards() {
  return cardlist;
}

export const CardCatalog = () => cardlist;
