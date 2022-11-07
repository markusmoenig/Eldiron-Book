# Move

**This node is intended for player controlled characters only**

The node moves the player character in the user specified direction.

#### Parameters

* **Speed Delay**. A numerical expression indicating the walking speed. 0 is the fastest, no delay, the character will move one tile per game tick. Higher values will slow the character down. A value of 4 for example would mean that the character needs 4 game ticks to move to the next tile.

#### Returns

* **Success**. The character moved successfully.
* **Failure**. The path is blocked.

#### See also

[Mechanics](../nodegraph/mechanics.md