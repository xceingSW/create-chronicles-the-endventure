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

  event.replaceInput({id:'apotheosis:salvaging_table'}, 'apotheosis:gem_dust', 'minecraft:diamond_block')

  event.replaceInput({id:'crystal_chronicles:hemalite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voidstone_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:divinite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voltite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:floralite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:volcanite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:ice_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')

});