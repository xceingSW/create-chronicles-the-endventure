ItemEvents.rightClicked(event => {
  const { item, player, server, level } = event

  if (item.id == 'kubejs:heart_container') {
    // Increase max health by 2 (1 heart = 2.0)
    const attribute = player.getAttribute('minecraft:generic.max_health')
    attribute.baseValue += 2.0

    // Heal to new max
    player.heal(player.getMaxHealth());

    // Consume item
    item.count--

    // Optional sound effect

    // Feedback
    player.tell(Text.green('You feel your heart grow stronger! (+1 Heart)'));
  }
});


ItemEvents.rightClicked(event => {
  console.log("manuellll",event.item);
  let item = event.item;
  if (item.nbt) {
    console.log("NBT:", item.nbt);
  } else {
    console.log("Item has no NBT");
  }
});
