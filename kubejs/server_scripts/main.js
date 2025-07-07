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

  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:netherite_boots', 'create:belt_connector')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, '#minecraft:wool', 'create:copper_sheet')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:cut_copper_slab', 'create:copper_sheet')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:copper_block', '#create:seats')

  //conf
  event.replaceInput({id:'another_furniture:cherry_table'}, 'minecraft:cherry_planks', 'minecraft:cherry_slab')
  event.replaceInput({id:'another_furniture:warped_table'}, 'minecraft:warped_planks', 'minecraft:warped_slab')
  event.replaceInput({id:'another_furniture:spruce_table'}, 'minecraft:spruce_planks', 'minecraft:spruce_slab')
  event.replaceInput({id:'another_furniture:acacia_table'}, 'minecraft:acacia_planks', 'minecraft:acacia_slab')
  event.replaceInput({id:'another_furniture:bamboo_table'}, 'minecraft:bamboo_planks', 'minecraft:bamboo_slab')
  event.replaceInput({id:'another_furniture:jungle_table'}, 'minecraft:jungle_planks', 'minecraft:jungle_slab')
  event.replaceInput({id:'another_furniture:mangrove_table'}, 'minecraft:mangrove_planks', 'minecraft:mangrove_slab')
  event.replaceInput({id:'another_furniture:dark_oak_table'}, 'minecraft:dark_oak_planks', 'minecraft:dark_oak_slab')
  event.replaceInput({id:'another_furniture:crimson_table'}, 'minecraft:crimson_planks', 'minecraft:crimson_slab')
  event.replaceInput({id:'another_furniture:birch_table'}, 'minecraft:birch_planks', 'minecraft:birch_slab')
  event.replaceInput({id:'another_furniture:oak_table'}, 'minecraft:oak_planks', 'minecraft:oak_slab')
  event.replaceInput({id:'handcrafted:wood_plate'}, '#minecraft:wooden_slabs', '#minecraft:wooden_pressure_plates')

  event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(6000)
  event.smoking('minecraft:leather', 'minecraft:rotten_flesh').cookingTime(900)

  event.custom({
    "type": "mechanical_botany:insolating",
    "ingredients": [
      {
        "type": "fluid_stack",
        "amount": 250,
        "fluid": "eternal_starlight:ether"
      },
      {
        "item": "eternal_starlight:lunaris_cactus"
      }
    ],
    "processing_time": 3200,
    "results": [
      {
        "count": 2,
        "id": "eternal_starlight:lunaris_cactus_fruit"
      },
      {
        "count": 1,
        "id": "eternal_starlight:lunaris_cactus"
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
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "create:limestone"
      }
    ],
    "results": [
      {
        "amount": 1,
        "id": "create_enchantment_industry:experience"
      },
      {
        "amount": 1,
        "id": "garnished:crushed_salt"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 200,
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


  // Recipe conflicts
  event.shaped('create_sa:vault_component', [
      ' B ',
      ' A ',
      '   '
  ], {
      B: '#create:toolboxes',
      A: 'create:item_vault',
  })
  
  event.shaped('create_sa:small_filling_tank', [
      ' B ',
      ' A ',
      '   '
  ], {
      B: 'create_sa:hydraulic_engine',
      A: 'create:fluid_tank',
  })
  
  event.shaped('multibeds:feather_pile', [
      'SS ',
      'SS ',
      'SS '
  ], {
      S: 'minecraft:feather',
  })  
  event.shapeless('6x minecraft:feather', 'multibeds:feather_pile');

  event.shaped('simplyswords:iron_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:iron_ingot',
      C: 'minecraft:iron_nugget',
  })   

  event.shaped('simplyswords:gold_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:gold_ingot',
      C: 'minecraft:gold_nugget',
  })   

  event.shaped('simplyswords:diamond_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:diamond',
      C: 'createaddition:diamond_grit',
  }) 

  event.shaped('handcrafted:terracotta_thin_pot', [
      ' A ',
      ' A ',
      ' A '
  ], {
      A: 'minecraft:terracotta',
  })     
});