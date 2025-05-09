// Hide Recipes
RecipeViewerEvents.removeEntriesCompletely('item', item =>{
  global.REMOVE_ITEMS.forEach(id => {
    item.remove(id)
  })
})

RecipeViewerEvents.addInformation('item', item =>{
  item.add("kubejs:forgotten_eye_fragment_core", "Drops from Warden")
  item.add("kubejs:forgotten_eye_fragment_shard", "Drops from Wither Skeleton")
  item.add("kubejs:forgotten_eye_fragment_cracked", "Drops from Elder Guardian")

  item.add("simplyswords:soulstealer", "Drops from Death King")
  item.add("simplyswords:toxic_longsword", "Drops from Death King")

  item.add("simplyswords:brimstone_claymore", "Drops from Netherite Monstrosity")
  item.add("simplyswords:molten_edge", "Drops from Netherite Monstrosity")

  item.add("simplyswords:frostfall", "Drops from The Gauntlet")
  item.add("simplyswords:watcher_claymore", "Drops from The Gauntlet")





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
});
