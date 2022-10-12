# Game Settings

The game settings define global poperties for your game. Here is a list of all supported properties.

```rust
// The screen size of the game window.
screen_size = 1024, 608
```

This setting defines the size of your game window.

```rust
// The default square tile size when drawing game content.
square_tile_size = 32
```

The size of a square tile when drawing game content.

```rust
// The variable name of your primary currency. "gold" by default.
primary_currency = "gold"
// The variable name of your (optional) secondary currency. "silver" by default.
secondary_currency = "silver"
// How much secondary currency makes up one primary. 100 by default.
secondary_to_primary = 100
```

The variable name of your primary currency. You would assign currency to your character via a startup tree, like ```rust let gold = 10;```. The *primary_currency* setting lets Eldiron know which variable in the character scope defines the primary currency.

```admonish Note
Secondary currencies are not yet supported. This will be added in the future.
```