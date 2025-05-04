// === REMOVE BY RECIPE ID ===
const removeRecipesById = [
  'cataclysm:mech_eye',
  'cataclysm:flame_eye',
  'cataclysm:void_eye',
  'cataclysm:monstrous_eye',
  'cataclysm:abyss_eye',
  'cataclysm:desert_eye',
  'cataclysm:cursed_eye'
];

// === REMOVE BY MOD ID ===
const removeByMod = [
  'endrem'
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

/*
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