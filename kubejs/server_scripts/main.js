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

  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')
  event.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')

  event.replaceInput({id:'apotheosis:salvaging_table'}, 'apotheosis:gem_dust', 'minecraft:diamond_block')

  event.replaceInput({id:'crystal_chronicles:hemalite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voidstone_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:divinite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voltite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:floralite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:volcanite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:ice_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')

  event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(6000)
  event.smoking('minecraft:leather', 'minecraft:rotten_flesh').cookingTime(900)
  event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "minecraft:rotten_flesh"
      }
    ],
    "results": [
      {
        "amount": 1,
        "id": "minecraft:leather"
      }
    ]
  })

  event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "minecraft:redstone"
      }
    ],
    "results": [
      {
        "amount": 120,
        "id": "kubejs:fluid_redstone"
      }
    ]
  })

  event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "results": [
      {
        "amount": 750,
        "id": "createmechanisms:enderiam"
      },
      {
        "amount": 1,
        "id": "garnished:crushed_ender_pearl"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 5000,
    "ingredient": {
      "item": "minecraft:copper_ingot"
    },
    "max_charge_rate": 200,
    "result": {
      "count": 1,
      "id": "createmechanisms:bronze"
    }
  })

  event.shaped('2x create:belt_connector', [
      '   ',
      'SSS',
      'SSS'
  ], {
      S: 'createmechanisms:cured_rubber',
  })
  
  event.shaped('createmechanisms:iron_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:iron_ingot',
  })
  event.shaped('createmechanisms:copper_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:copper_ingot',
  })  
  event.shaped('createmechanisms:diamond_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:diamond',
  })      
  event.smoking('createmechanisms:cured_rubber', 'createmechanisms:rubber').cookingTime(200)
});