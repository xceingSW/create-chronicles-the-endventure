// Hide Recipes
RecipeViewerEvents.removeEntriesCompletely('item', item =>{
  item.remove('cataclysm:mech_eye')
  item.remove('cataclysm:flame_eye')
  item.remove('cataclysm:void_eye')
  item.remove('cataclysm:monstrous_eye')
  item.remove('cataclysm:abyss_eye')
  item.remove('cataclysm:desert_eye')
  item.remove('cataclysm:cursed_eye')
})

RecipeViewerEvents.addInformation('item', item =>{
  item.add("kubejs:forgotten_eye_fragment_core", "Drops from Warden")
  item.add("kubejs:forgotten_eye_fragment_shard", "Drops from Wither Skeleton")
  item.add("kubejs:forgotten_eye_fragment_cracked", "Drops from Elder Guardian")
})




const eyes = [
  { id: "endrem:wither_eye", name: "§7Forgotten Eye" },
  { id: "endrem:cursed_eye", name: "§5Cursed Eye" },
  { id: "endrem:lost_eye", name: "§4Lost Eye" },
  { id: "endrem:magical_eye", name: "§bLich Eye" },
  { id: "endrem:witch_eye", name: "§dOmen Eye" },
  { id: "endrem:exotic_eye", name: "§3Gilded Eye" },
  { id: "endrem:cryptic_eye", name: "§aCryptic Eye" },
  { id: "endrem:old_eye", name: "§eOblivion Eye" },
  { id: "endrem:evil_eye", name: "§9Evil Eye" },
  { id: "endrem:corrupted_eye", name: "§2Corrupted Eye" },
  { id: "endrem:black_eye", name: "§fBlack Eye" },
  { id: "endrem:nether_eye", name: "§6Infernal Eye" }
];

// Language names
ClientEvents.lang("en_us", event => {
  eyes.forEach(eye => {
    event.renameItem(eye.id, eye.name);
  });
});

// Tooltips with order
ItemEvents.modifyTooltips(event => {
  eyes.forEach((eye, index) => {
    event.modify(eye.id, tooltip => {
      tooltip.removeLine(1);
      tooltip.insert(1, Text.of(`#${index + 1} Used to activate the End Portal.`).color(0xFFA5F7));
    });
  });
});
