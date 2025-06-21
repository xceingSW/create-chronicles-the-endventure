// Hide Recipes
RecipeViewerEvents.removeEntriesCompletely('item', item =>{
  global.REMOVE_ITEMS.forEach(id => {
    item.remove(id)
  })
})

// Hide Categories 
RecipeViewerEvents.removeCategories(event => {
  event.remove('apothic_enchanting:enchanting')
  event.remove('ftbquests:loot_crate')
  event.remove('ftbquests:quest')
})

RecipeViewerEvents.addInformation('item', item =>{
  let fromMarket="Purchased from Market using Boss Tokens"
  item.add("kubejs:forgotten_eye_fragment_core", "Drops from Warden")
  item.add("kubejs:forgotten_eye_fragment_shard", "Drops from Wither Skeleton")
  item.add("kubejs:forgotten_eye_fragment_cracked", "Drops from Elder Guardian")

  item.add("kubejs:cursed_eye_fragment_core", "Drops from The Gauntlet")
  item.add("kubejs:cursed_eye_fragment_shard", "Drops from Netherite Monstrosity")
  item.add("kubejs:cursed_eye_fragment_cracked", "Drops from The Death King")

  item.add("kubejs:lost_eye_fragment_core", "Drops from Starlight Golem")
  item.add("kubejs:lost_eye_fragment_shard", "Drops from Lunar Monstrosity")
  item.add("kubejs:lost_eye_fragment_cracked", "Obtained from the Quest Pass the Gatekeeper's Trial")

  item.add("kubejs:lich_eye_fragment_core", "Drops from The Night Lich")
  item.add("kubejs:lich_eye_fragment_shard", "Drops from The Harbinger")
  item.add("kubejs:lich_eye_fragment_cracked", fromMarket)

  item.add("kubejs:omen_eye_fragment_core", "Drops from Echo of Tyros, First Flamebearer")
  item.add("kubejs:omen_eye_fragment_shard", "Drops from Obsidilith")
  item.add("kubejs:omen_eye_fragment_cracked", "Drops from Void Blossom (This one is ok)")

  item.add("kubejs:gilded_eye_fragment_core", "Drops from The Leviathan")
  item.add("kubejs:gilded_eye_fragment_shard", "Drops from Ancient Remnant")
  item.add("kubejs:gilded_eye_fragment_cracked", "Drops from Scylla")

  item.add("kubejs:cryptic_eye_fragment_core", "Drops from Ignis")
  item.add("kubejs:cryptic_eye_fragment_shard", "Drops from Maledictus")
  item.add("kubejs:cryptic_eye_fragment_cracked", fromMarket)

  item.add("simplyswords:soulstealer", "Drops from Death King")
  item.add("simplyswords:wraithfang", "Drops from Death King")

  item.add("simplyswords:brimstone_claymore", "Drops from Netherite Monstrosity")
  item.add("simplyswords:molten_edge", "Drops from Netherite Monstrosity")

  item.add("simplyswords:frostfall", "Drops from The Gauntlet")
  item.add("simplyswords:watcher_claymore", "Drops from The Gauntlet")

  item.add("simplyswords:emberlash", "Drops from Lunar Monstrosity")
  item.add("simplyswords:toxic_longsword", "Drops from Lunar Monstrosity")

  item.add("simplyswords:stormbringer", "Drops from Starlight Golem")
  item.add("simplyswords:mjolnir", "Drops from Lunar Starlight Golem")

  item.add("simplyswords:slumbering_lichblade", "Drops from The Lich")
  item.add("simplyswords:soulrender", "Drops from The Lich")

  item.add("simplyswords:emberblade", "Drops from The Harbinger")
  item.add("simplyswords:ribboncleaver", "Drops from The Harbinger")

  item.add("simplyswords:bramblethorn", "Drops from Void Blossom")
  item.add("simplyswords:twisted_blade", "Drops from Void Blossom")

  item.add("simplyswords:flamewind", "Drops from Obsidilith")
  item.add("simplyswords:watching_warglaive", "Drops from Obsidilith")

  item.add("simplyswords:tempest", "Drops from Echo of Tyros, First Flamebearer")
  item.add("simplyswords:soulpyre", "Drops from Echo of Tyros, First Flamebearer")

  item.add("simplyswords:whisperwind", "Drops from Ancient Remnant")
  item.add("simplyswords:waxweaver", "Drops from Ancient Remnant")

  item.add("simplyswords:hiveheart", "Drops from The Leviathan")
  item.add("simplyswords:caelestis", "Drops from The Leviathan")

  item.add("simplyswords:dormant_relic", "Drops from Scylla")
  item.add("simplyswords:thunderbrand", "Drops from Scylla ")

  item.add("simplyswords:enigma", "Drops from Ignis")
  item.add("simplyswords:wickpiercer", "Drops from Ignis")

  item.add("simplyswords:storms_edge", "Drops from Maledictus")
  item.add("simplyswords:stars_edge", "Drops from Maledictus")

  item.add("simplyswords:hearthflame", "Drops from Ender Dragon")
  item.add("simplyswords:soulkeeper", "Drops from Ender Dragon")
  item.add("simplyswords:icewhisper", "Drops from Ender Dragon")
  item.add("simplyswords:arcanethyst", "Drops from Ender Dragon")
  item.add("simplyswords:shadowsting", "Drops from Ender Dragon")
  item.add("simplyswords:livyatan", "Drops from Ender Dragon")
  //34 total
  item.add("hazennstuff:overgrown_bone", "Drops from Bogged Zombies")
})





// Language names
ClientEvents.lang("en_us", event => {
  global.EYES.forEach(eye => {
    event.renameItem(eye.id, eye.uiname);
  });
});

// Tooltips with order
ItemEvents.modifyTooltips(event => {
  global.EYES.forEach((eye, index) => {
    event.modify(eye.id, tooltip => {
      tooltip.removeLine(1);
      tooltip.insert(1, Text.of(`#${index + 1} Used to activate the End Portal.`).color(0xFFA5F7));
    });
  });
  event.modify('kubejs:token_basic', tooltip => {
    tooltip.insert(1, Text.of('§7You\'ve taken your first steps, engineer.'))
    tooltip.insert(2, Text.of('§eUsable in §lCategory 1§r§e contracts.'))
  })

  event.modify('kubejs:token_medium', tooltip => {
    tooltip.insert(1, Text.of('§7Precision is your language.'))
    tooltip.insert(2, Text.of('§eUsable in §lCategory 2§r§e contracts.'))
  })

  event.modify('kubejs:token_advanced', tooltip => {
    tooltip.insert(1, Text.of('§7You command machines like no other.'))
    tooltip.insert(2, Text.of('§eUsable in §lCategory 3§r§e contracts.'))
  })  
});
