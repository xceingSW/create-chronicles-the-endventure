let lootbags = {
  'kubejs:lootbag_boss': 'simple_journey:teste',
};

ItemEvents.rightClicked(event => {
  let id = event.item.id;
  if (!(id in lootbags)) return;
  event.item.count--
  
  // Sound effect
  event.player.playSound('minecraft:entity.experience_orb.pickup', 1.0, 1.0);
  event.server.runCommandSilent(`/playsound minecraft:entity.experience_orb.pickup`);

  // Particle effect
  event.server.runCommandSilent(`particle minecraft:enchanted_hit ${event.player.x} ${event.player.y + 1} ${event.player.z} 0.5 0.5 0.5 0.05 20 force`);
  let lootTable = lootbags[id];

  event.server.runCommandSilent(
    `execute in ${event.level.dimension} run loot give ${event.player.username} loot ${lootTable}`
  );
});

