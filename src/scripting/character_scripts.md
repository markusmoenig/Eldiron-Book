# Character Scripts

Character scripts are script nodes or node expression parameters, many parameter of a node are expressions which either expect a boolean or numerical return value.

### Startup Trees

During startup you can define character attributes in your startup tree as discussed [here](../nodegraph/scripting.md).

### Dice throws

You can easily throw a dice and get a random value by using ```dvalue```, like

```rust
d14
```

would return a random value between 1 and 14. This works with very number.

### Handling character inventory

Each character has an *inventory* class available available inside the script scope.

You can add inventory items to the character

```rust
inventory.add("Torch", 1);
```

where ```Torch``` is the inventory item and ```1``` the amount of items you want to add. The name of the item has to be name of an item created in the [items](../items.md) view.

You can iterate your current inventory with

```rust
for item_index in 0..inventory.len() {
    let name = inventory.item_name_at(item_index);
    let amount = inventory.item_amount_at(item_index);
}
```

#### Gold

The big exception to the inventory is gold. You can just assign gold to your character by creating a variable

```rust
let gold = 10;
```

And of course you can freely modify the variable in your scripts.

The [Sell](../nodes/sell.md) node autmatically sells and transfers items between buyers and sellers and also handles the money transfer.

The [Drop Inv.](../nodes/drop_inventory.md) node drops all or some of your inventory items (mostly used on death).

When rendering gold in the game world the icon you specify in the Gold item specified in the item view is used.

```admonish note
If you want to change the name of the gold variable to something else you have todo so in your [game settings](../game_settings.md).
```