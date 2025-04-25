Platform.mods.kubejs.name = 'Create Chronicles: Bosses and Beyond'

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model has to be placed kubejs/assets/kubejs/models/item/test_item.json
  /*event.create('kubejs:miles_ticket')
  event.create('kubejs:miles_booklet')
	event.create('kubejs:debug')
  event.create('kubejs:remove_active_order')
  event.create('kubejs:check_collection_progress').maxStackSize(1)
  event.create('kubejs:village_capacity_permit').maxStackSize(1)*/
  event.create('create_chronicles').displayName("§6Create Chronicles").texture('kubejs:item/example_item')

  event.create('token_basic')
    .displayName("§6Seal of Apprentice")
    .texture('kubejs:item/token1')
    .rarity("UNCOMMON")
    .tooltip([
      '§7You\'ve taken your first steps, engineer...',
      '§7Gears are turning, belts are moving.',
      '§eUsable in §lCategory 1§r§e contracts.'
    ])

    event.create('token_medium')
    .displayName("§7Seal of Operator")
    .texture('kubejs:item/token1')
    .rarity("RARE")
    .tooltip([
      '§7Precision is your language. Efficiency your creed.',
      '§7Machines answer to your call.',
      '§eUsable in §lCategory 2§r§e contracts.'
    ])

    event.create('token_advanced')
    .displayName("§eSeal of Master Engineer")
    .texture('kubejs:item/token1')
    .rarity("EPIC")
    .tooltip([
      '§7So, you really think you\'re ready for this?',
      '§7Creative power in your mortal hands... madness!',
      '§cOnly those insane enough dare claim this prize.',
      '§ebUsable in §lCategory 3§r§b contracts.'
    ])
})