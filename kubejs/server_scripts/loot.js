LootJS.modifiers((event) => {
  //event.addTableModifier("minecraft:chests/simple_dungeon").addLoot("minecraft:netherite_sword");
  //event.addTableModifier(/dungeons_arise:chests.*/).addLoot("minecraft:netherite_sword");

  // Easy
  event
    .addTableModifier(/(minecraft:chests.*|revampedvillages:.*|mvs:.*)/)
    .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([1, 2]).randomChance(0.35));

  // Medium
  event
  .addTableModifier(/(minecraft:chests\/(bastion|shipwreck).*|irons_spellbooks:chests.*|eternal_starlight:chests.*|mns:.*|formationsnether:.*|repurposed_structures:chests\/.*|adventuredungeons:chests\/.*)/)
  .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([2, 4]).randomChance(0.60));

  // Hard
  event
    .addTableModifier(/(minecraft:chests\/(end_city|ancient_city|stronghold).*|betterfortresses:chests.*|dungeons_arise:chests\/.*)/)
    .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([3, 7]).randomChance(0.80));


  const trialChamberTables = [
    "minecraft:chests/trial_chambers/corridor",
    "minecraft:chests/trial_chambers/entrance",
    "minecraft:chests/trial_chambers/intersection",
    "minecraft:chests/trial_chambers/intersection_barrel"
  ];

  for (const table of trialChamberTables) {
    event
      .addTableModifier(table)
      .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([1, 6]).randomChance(0.18));
  }

  const ironsAdvanced = [
    "minecraft:chests/pillager_outpost",
    "irons_spellbooks:chests/catacombs/coffin_loot",
    "irons_spellbooks:chests/catacombs/crypt_loot",
    "irons_spellbooks:chests/catacombs/hidden_trough_treasure",
    "irons_spellbooks:chests/citadel/citadel_vault",
    "irons_spellbooks:chests/citadel/rampart_chest",
    "irons_spellbooks:chests/citadel/citadel_bookshelf"
  ];
  for (const table of ironsAdvanced) {
    event
      .addTableModifier(table)
      .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([2, 10]).randomChance(0.50));
  }
});