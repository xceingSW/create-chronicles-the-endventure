ServerEvents.tags('block', event => {
    event.add("ftbchunks:interact_whitelist", [
        'minecraft:crafting_table',
        '#minecraft:doors',
        '#minecraft:beds',
        "minecraft:bell",
        "create:desk_bell",
        'create_things_and_misc:card_reader',
        'refurbished_furniture:post_box',
        'create:contraption_controls',
        '#create:table_cloths',
        '#waystones:waystones',
        '#waystones:sharestones',
        '#lootr:containers',
        'farmingforblockheads:market',
    ]);
})