/** Original placeholder card catalogue. Effects are data-only until the game rules engine is implemented. */
export type CardType = "Creature" | "Location" | "Item" | "Spell" | "Character" | "Treasure" | "Quest";
export type CardRarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
export type GameCard = { id: string; name: string; type: CardType; rarity: CardRarity; description: string; effect: string };

export const CARD_CATALOG: GameCard[] = [
  {
    "id": "GI-001",
    "name": "Verdant Sprite",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-002",
    "name": "Ember Fox",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-003",
    "name": "Tide Serpent",
    "type": "Creature",
    "rarity": "Uncommon",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-004",
    "name": "Stoneback Tortoise",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-005",
    "name": "Gale Hawk",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-006",
    "name": "Moonlit Stag",
    "type": "Creature",
    "rarity": "Rare",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-007",
    "name": "Cinder Moth",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-008",
    "name": "Frost Lynx",
    "type": "Creature",
    "rarity": "Legendary",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-009",
    "name": "Thunder Ram",
    "type": "Creature",
    "rarity": "Rare",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-010",
    "name": "Moss Golem",
    "type": "Creature",
    "rarity": "Uncommon",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-011",
    "name": "Sunscale Drake",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-012",
    "name": "Coral Guardian",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-013",
    "name": "Whispering Willow",
    "type": "Location",
    "rarity": "Rare",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-014",
    "name": "Ironhorn Beetle",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-015",
    "name": "Cloud Dancer",
    "type": "Creature",
    "rarity": "Legendary",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-016",
    "name": "Ashen Wolf",
    "type": "Creature",
    "rarity": "Rare",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-017",
    "name": "Crystal Koi",
    "type": "Creature",
    "rarity": "Uncommon",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-018",
    "name": "Dune Scorpion",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-019",
    "name": "Storm Heron",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-020",
    "name": "Night Bloom",
    "type": "Creature",
    "rarity": "Uncommon",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-021",
    "name": "Ruby Basilisk",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-022",
    "name": "Sapphire Wyrm",
    "type": "Creature",
    "rarity": "Legendary",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-023",
    "name": "Obsidian Bear",
    "type": "Creature",
    "rarity": "Rare",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-024",
    "name": "Ivory Griffin",
    "type": "Creature",
    "rarity": "Uncommon",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-025",
    "name": "Jade Mantis",
    "type": "Creature",
    "rarity": "Common",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-026",
    "name": "Golden Jackal",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-027",
    "name": "Silver Wisp",
    "type": "Spell",
    "rarity": "Uncommon",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-028",
    "name": "Copper Automaton",
    "type": "Item",
    "rarity": "Common",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-029",
    "name": "Pearl Nymph",
    "type": "Creature",
    "rarity": "Epic",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-030",
    "name": "Onyx Crow",
    "type": "Creature",
    "rarity": "Rare",
    "description": "An original creature card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-031",
    "name": "Forest Shrine",
    "type": "Location",
    "rarity": "Uncommon",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-032",
    "name": "Ancient Bridge",
    "type": "Location",
    "rarity": "Common",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-033",
    "name": "Hidden Spring",
    "type": "Location",
    "rarity": "Epic",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-034",
    "name": "Sky Observatory",
    "type": "Location",
    "rarity": "Uncommon",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-035",
    "name": "Forgotten Library",
    "type": "Location",
    "rarity": "Common",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-036",
    "name": "Sunken Temple",
    "type": "Location",
    "rarity": "Epic",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-037",
    "name": "Mirror Lake",
    "type": "Location",
    "rarity": "Rare",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-038",
    "name": "Wandering Market",
    "type": "Location",
    "rarity": "Common",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-039",
    "name": "Silent Monastery",
    "type": "Location",
    "rarity": "Legendary",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-040",
    "name": "Clockwork Tower",
    "type": "Location",
    "rarity": "Rare",
    "description": "An original location card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A landmark recorded in your Player Book."
  },
  {
    "id": "GI-041",
    "name": "Herbal Remedy",
    "type": "Item",
    "rarity": "Uncommon",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-042",
    "name": "Traveler's Ration",
    "type": "Item",
    "rarity": "Common",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-043",
    "name": "Stamina Elixir",
    "type": "Item",
    "rarity": "Epic",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-044",
    "name": "Lucky Charm",
    "type": "Item",
    "rarity": "Rare",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-045",
    "name": "Repair Kit",
    "type": "Item",
    "rarity": "Common",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-046",
    "name": "Compass of Echoes",
    "type": "Item",
    "rarity": "Legendary",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-047",
    "name": "Lantern of Dawn",
    "type": "Item",
    "rarity": "Rare",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-048",
    "name": "Cloak of Mists",
    "type": "Item",
    "rarity": "Uncommon",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-049",
    "name": "Boots of Swiftness",
    "type": "Item",
    "rarity": "Common",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-050",
    "name": "Map Fragment",
    "type": "Item",
    "rarity": "Epic",
    "description": "An original item card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-051",
    "name": "Fireball",
    "type": "Spell",
    "rarity": "Rare",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-052",
    "name": "Frost Bind",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-053",
    "name": "Wind Step",
    "type": "Spell",
    "rarity": "Legendary",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-054",
    "name": "Stone Wall",
    "type": "Spell",
    "rarity": "Rare",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-055",
    "name": "Healing Pulse",
    "type": "Spell",
    "rarity": "Uncommon",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-056",
    "name": "Spark Chain",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-057",
    "name": "Water Veil",
    "type": "Spell",
    "rarity": "Epic",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-058",
    "name": "Shadow Snare",
    "type": "Spell",
    "rarity": "Uncommon",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-059",
    "name": "Radiant Burst",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-060",
    "name": "Nature's Grasp",
    "type": "Spell",
    "rarity": "Epic",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-061",
    "name": "Quick Draw",
    "type": "Spell",
    "rarity": "Rare",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-062",
    "name": "Counterspell",
    "type": "Spell",
    "rarity": "Uncommon",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-063",
    "name": "Dispel Field",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-064",
    "name": "Recall",
    "type": "Spell",
    "rarity": "Epic",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-065",
    "name": "Double or Nothing",
    "type": "Spell",
    "rarity": "Uncommon",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-066",
    "name": "Safe Passage",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-067",
    "name": "Card Exchange",
    "type": "Spell",
    "rarity": "Epic",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-068",
    "name": "Fortune's Favor",
    "type": "Spell",
    "rarity": "Rare",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-069",
    "name": "Binding Seal",
    "type": "Spell",
    "rarity": "Common",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-070",
    "name": "Mystic Search",
    "type": "Spell",
    "rarity": "Legendary",
    "description": "An original spell card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "Playable during an encounter; effect depends on the spell."
  },
  {
    "id": "GI-071",
    "name": "Bandit Captain",
    "type": "Character",
    "rarity": "Epic",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-072",
    "name": "Warden of Thorns",
    "type": "Character",
    "rarity": "Uncommon",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-073",
    "name": "Desert Nomad",
    "type": "Character",
    "rarity": "Common",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-074",
    "name": "Harbor Trader",
    "type": "Character",
    "rarity": "Epic",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-075",
    "name": "Mountain Monk",
    "type": "Character",
    "rarity": "Rare",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-076",
    "name": "Royal Scout",
    "type": "Character",
    "rarity": "Common",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-077",
    "name": "Arcane Scholar",
    "type": "Character",
    "rarity": "Legendary",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-078",
    "name": "Beast Tamer",
    "type": "Character",
    "rarity": "Rare",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-079",
    "name": "Ruin Diver",
    "type": "Character",
    "rarity": "Uncommon",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-080",
    "name": "Island Cartographer",
    "type": "Character",
    "rarity": "Common",
    "description": "An original character card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "An ally or encounter entry for the island's collection."
  },
  {
    "id": "GI-081",
    "name": "Dragon's Hoard",
    "type": "Treasure",
    "rarity": "Epic",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-082",
    "name": "Everlasting Seed",
    "type": "Treasure",
    "rarity": "Rare",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-083",
    "name": "Crown of Tides",
    "type": "Treasure",
    "rarity": "Common",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-084",
    "name": "Heart of the Mountain",
    "type": "Treasure",
    "rarity": "Legendary",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-085",
    "name": "Phoenix Feather",
    "type": "Treasure",
    "rarity": "Rare",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-086",
    "name": "Starfall Crystal",
    "type": "Treasure",
    "rarity": "Uncommon",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-087",
    "name": "World Tree Sapling",
    "type": "Treasure",
    "rarity": "Common",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-088",
    "name": "Hourglass of Ages",
    "type": "Treasure",
    "rarity": "Epic",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-089",
    "name": "Crest of the First Guild",
    "type": "Treasure",
    "rarity": "Uncommon",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-090",
    "name": "Key to the Inner Gate",
    "type": "Treasure",
    "rarity": "Common",
    "description": "An original treasure card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A collectible that can support future crafting and trading."
  },
  {
    "id": "GI-091",
    "name": "Island Beacon",
    "type": "Quest",
    "rarity": "Legendary",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-092",
    "name": "Guild Charter",
    "type": "Quest",
    "rarity": "Rare",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-093",
    "name": "Trial Token",
    "type": "Quest",
    "rarity": "Uncommon",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-094",
    "name": "Arena Invitation",
    "type": "Quest",
    "rarity": "Common",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-095",
    "name": "Treasure License",
    "type": "Quest",
    "rarity": "Epic",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-096",
    "name": "Ancient Contract",
    "type": "Quest",
    "rarity": "Uncommon",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-097",
    "name": "Memory Crystal",
    "type": "Quest",
    "rarity": "Common",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-098",
    "name": "Wayfinder's Sigil",
    "type": "Quest",
    "rarity": "Epic",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-099",
    "name": "Guardian's Oath",
    "type": "Quest",
    "rarity": "Rare",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  },
  {
    "id": "GI-100",
    "name": "Greed Island Atlas",
    "type": "Quest",
    "rarity": "Common",
    "description": "An original quest card from the Greed Island archipelago. Discover it through exploration, quests, or encounters.",
    "effect": "A record of a challenge waiting to be completed."
  }
];
