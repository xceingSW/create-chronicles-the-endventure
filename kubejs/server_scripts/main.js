/*event.shaped('kubejs:air_essence_block', [
    'SSS',
    'SSS',
    'SSS'
], {
    S: 'ars_nouveau:air_essence'
})*/


ServerEvents.recipes(event => {
  event.shapeless('endrem:wither_eye', [
    'kubejs:forgotten_eye_fragment_core',
    'kubejs:forgotten_eye_fragment_shard',
    'kubejs:forgotten_eye_fragment_cracked',
    'minecraft:ender_eye'
  ]);
});