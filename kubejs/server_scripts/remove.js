// === REMOVE BY RECIPE ID ===
const removeRecipesById = [
  'simplyswords:sword_on_a_stick',
  'apotheosis:book',
  'waystones:warp_stone',
  'apothic_enchanting:library',
  'apothic_enchanting:prismatic_web',
  'naturescompass:naturescompass',
  'apothic_enchanting:filtering_shelf',
  'apothic_enchanting:ender_library',
  'irons_spellbooks:lesser_spell_slot_upgrade',
  'irons_spellbooks:druidic_spell_book',
  'irons_spellbooks:cinderous_soulcaller',
  'irons_spellbooks:wayward_compass',
  'gamediscs:gaming_console',

  'apotheosis:sigil_of_socketing',
  'apotheosis:sigil_of_withdrawal',
  'apotheosis:sigil_of_rebirth',
  'apotheosis:sigil_of_enhancement',      
  'farmingforblockheads:green_fertilizer',
  'farmingforblockheads:red_fertilizer',
  'farmingforblockheads:yellow_fertilizer',
  'farmingforblockheads:feeding_trough',
  'farmingforblockheads:chicken_nest',
  'create_sa:block_picker_recipe',
  'create_mechanical_extruder:mechanical_brass_extruder',
  'create_mechanical_extruder:crafting/mechanical_extruder',
  //
  //'garnished:crushing/zultanite/iron_from_zultanite',
  //'garnished:crushing/zultanite/zinc_from_zultanite',
  //'garnished:crushing/zultanite/gold_from_zultanite',
  //'garnished:crushing/zultanite/copper_from_zultanite',
  'garnished:crushing/materials_from_unstable_stone',
  'minecraft:andesite',
  'create:crafting/kinetics/belt_connector'
  
  //'garnished:recipe/crushing/zultanite/iron_from_zultanite'
];

// === REMOVE BY MOD ID ===
const removeByMod = [
  'endrem',
  'armoroftheages',
  'cosmeticarmoursmod'
];

// === REMOVE BY INPUT ===
const removeByInput = [
  // 'minecraft:cobblestone'
];

// === REMOVE BY OUTPUT ===
const removeByOutput = [
  // 'minecraft:stone_sword'
];

// === REMOVE BY TAG ===
const removeByTag = [
  // '#forge:ingots/iron',
  // '#minecraft:logs'
];

ServerEvents.recipes(event => {
  // Remove by ID
  removeRecipesById.forEach(id => event.remove({id: id}));
  global.REMOVE_ITEMS.forEach(id => event.remove({id: id}));

  // Remove by mod ID
  removeByMod.forEach(modid => event.remove({ mod: modid }));

  // Remove by input only
  //removeByInput.forEach(item => event.remove({ input: item }));

  // Remove by output only
  //removeByOutput.forEach(item => event.remove({ output: item }));

  // Remove by tag
  /*removeByTag.forEach(tag => {
    event.remove({ input: tag });
    event.remove({ output: tag });
  });*/
});

/* 37 total wepons falta 2 na shop na sei quais
simplyswords:stars_edge
simplyswords:livyatan
simplyswords:watching_warglaive
simplyswords:mjolnir
simplyswords:emberblade
simplyswords:stormbringer
simplyswords:storms_edge //
simplyswords:sword_on_a_stick
simplyswords:bramblethorn
simplyswords:toxic_longsword
simplyswords:emberlash
simplyswords:twisted_blade
simplyswords:frostfall
simplyswords:hearthflame
simplyswords:soulpyre
simplyswords:soulkeeper
simplyswords:soulstealer
simplyswords:soulrender
simplyswords:molten_edge
simplyswords:icewhisper
simplyswords:thunderbrand
simplyswords:slumbering_lichblade
simplyswords:tempest
simplyswords:wickpiercer
simplyswords:arcanethyst
simplyswords:hiveheart
simplyswords:waxweaver
simplyswords:whisperwind
simplyswords:shadowsting
simplyswords:flamewind
simplyswords:watcher_claymore
simplyswords:righteous_relic
simplyswords:sunfire
simplyswords:enigma
simplyswords:ribboncleaver
simplyswords:caelestis
simplyswords:wraithfang
*/