// === REMOVE BY RECIPE ID ===
const removeRecipesById = [
  // 'minecraft:stick'
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
  //removeRecipesById.forEach(id => event.remove({ id }));

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