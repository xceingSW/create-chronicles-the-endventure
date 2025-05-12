Platform.mods.kubejs.name = 'Create Chronicles: The Endventure'

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.displayName = 'Create Chronicles: The Endventure';
});

const fragmentTypes = ['Core', 'Cracked', 'Shard']



ItemEvents.modification(event => {
  global.EYES.forEach(eye => {
    event.modify(eye.id, item => {
      item.rarity = 'EPIC'
    });
  });
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

   
})