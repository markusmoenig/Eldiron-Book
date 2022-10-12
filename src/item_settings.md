# Item Settings

In the item settings you can define basic properties of your item.

```rust
// Type of the item, either "Weapon", "Gear" or "Tool"
item_type = "Tool"
```

The item typpe defines the role of the item, *"Gear"* and *"Weapons"* can be placed in the appropriate UI slots, everything else is a *"Tool"*.

```rust
// true if the item should have it's own state (variables).
state = true
```

If the item has state, it has it's own variable scope, see [item state](./item_state.md).

```rust
// Value greater than 1 if item should be stackable. Only for items without state.
stackable = 1
```

Your item is stackable if this value is greater than 1. Stackable items cannot have a state and are meant for basic inventory for crafting.

```rust
// True if the item is static, i.e. cannot be picked up (campfire etc.).
static = true
```

If you set the item to static, it cannot be picked up by the user. Imagine a campfire for example. Static items are a great way to add interactivity to the environment. Note that static items and [areas](./regions_edit_areas.md) have overlapping features. Using static items has the advantage that you can just simply instantiate items as many times as you like, whereas placing tiles and defining areas and behavior for them takes a bit more time and effort (but allows for more customized behavior).

```rust
// The sales price of the item. 0.0 if the item cannot be sold.
price = 0.0
```

The sales price of the item in your game currency (i.e. gold). This is a float value so that your game can optionally support a secondary currency in the fractional value of the float (like for example silver).

```admonish Note
Eldiron does not currently support a secondary currency. This will be added in the future.
```

See also the currency properties in the [game settings](./game_settings.md).