/*event.shaped('kubejs:air_essence_block', [
    'SSS',
    'SSS',
    'SSS'
], {
    S: 'ars_nouveau:air_essence'
})*/


ServerEvents.recipes(event => {

  // Create Crafting Recipe of all the 12 eyes
  global.EYES.forEach(eye => {
    const id = eye.name.toLowerCase().replace(/ /g, '_'); // "Forgotten Eye" → "forgotten_eye"
    const fragments = [];
  
    global.FRAGMENT_TYPES.forEach(type => {
      fragments.push(`kubejs:${id}_fragment_${type.toLowerCase()}`);
    });
  
    fragments.push('minecraft:ender_eye');
  
    event.shapeless(eye.id, fragments);
  });

});