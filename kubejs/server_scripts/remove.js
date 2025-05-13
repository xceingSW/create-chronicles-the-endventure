// === REMOVE BY RECIPE ID ===
const removeRecipesById = [
  'simplyswords:sword_on_a_stick',
    'apotheosis:book',
  'apothic_enchanting:library',
  'apothic_enchanting:ender_library',
  'irons_spellbooks:lesser_spell_slot_upgrade',
  'irons_spellbooks:druidic_spell_book',
  'gamediscs:gaming_console',
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