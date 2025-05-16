Platform.mods.kubejs.name = 'Create Chronicles: The Endventure'

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.displayName = 'Create Chronicles: The Endventure';
});

//Stack Sizes
ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:egg', item => {
        item.maxStackSize = 64
    })
    event.modify('deeperdarker:heart_of_the_deep', item => {
        item.maxStackSize = 64
    })
})


const fragmentTypes = ['Core', 'Cracked', 'Shard']


ItemEvents.modification(event => {
  global.EYES.forEach(eye => {
    event.modify(eye.id, item => {
      item.rarity = 'EPIC'
    });
  });
  event.modify('minecraft:leather_helmet',item=>{
    let modifiedAttr = Item.of(item.item().id).attributeModifiers.withModifierAdded(
      'generic.armor',
      { amount:50, id:'minecraft:armor.helmet', operation:'add_value'},
      'head'
    );
    //apply
    item.setAttributeModifiersWithTooltip(modifiedAttr.modifiers())
  })
});

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model has to be placed kubejs/assets/kubejs/models/item/test_item.json
  /*
  event.create('kubejs:village_capacity_permit').maxStackSize(1)*/
  event.create('create_chronicles').displayName("§6Create Chronicles").texture('kubejs:item/example_item')
  event.create('lootbag_boss').displayName("Loot bag of gems").texture('kubejs:item/example_item')

  global.EYES.forEach(eye => {
    const baseId = eye.name.toLowerCase().replace(/ /g, '_') // e.g. forgotten_eye

    global.FRAGMENT_TYPES.forEach(type => {
      const id = `${baseId}_fragment_${type.toLowerCase()}`
      const displayName = `${eye.name} Fragment: ${type}`

      event.create(id)
        .displayName(displayName)
        .texture(`kubejs:item/fragments/${id}`)
        .tooltip(`Used to craft the ${eye.name}`)
        .rarity('RARE')
    })
  })

  event.create('token_basic')
    .displayName("§7Seal of Apprentice")
    .rarity("UNCOMMON")
    .tooltip('§7You\'ve taken your first steps, engineer.\n§eUsable in §lCategory 1§r§e contracts.')

    event.create('token_medium')
    .displayName("§fSeal of Operator")
    .rarity("RARE")
    .tooltip('§7Precision is your language.\n§eUsable in §lCategory 2§r§e contracts.')


    event.create('token_advanced')
    .displayName("§eSeal of Master Engineer")
    .rarity("EPIC")
    .tooltip('§7You command machines like no other.\n§eUsable in §lCategory 3§r§e contracts.')

    event.create('heart_container')
    .displayName("§6Heart Container")
    .rarity("EPIC")
    .tooltip('§7Permanently increases your maximum health by §c+1 Heart§7.')

    event.create('boss_token')
    .displayName("§6Boss Token")
    .rarity("EPIC")

    //Farmer's Stuff
    event.create('incomplete_barbecue_stick')
    event.create('incomplete_cod_roll')
    event.create('incomplete_kelp_roll')
    event.create('incomplete_melon_popsicle')
    event.create('incomplete_mutton_wrap')
    event.create('incomplete_salmon_roll')
    event.create('incomplete_stuffed_potato')
    event.create('incomplete_bacon_and_eggs')
    event.create('incomplete_grilled_salmon')
    event.create('incomplete_rice_roll_medley_block')
    event.create('incomplete_roast_chicken_block')
    event.create('incomplete_roasted_mutton_chops')
    event.create('incomplete_shepherds_pie_block')
    event.create('incomplete_steak_and_potatoes')
   
})