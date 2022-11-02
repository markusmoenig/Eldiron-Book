# Random Walk

Intended for NPCs.

This node randomly walks around the given position or area.

#### Parameters

* **Max Distance**. The maximum distance to walk from the starting position.
* **Speed Delay**. A numerical expression indicating the walking speed. 0 is the fastest, no delay, the character will move one tile per game tick. Higher values will slow the character down. A value of 4 for example would mean that the character needs 4 game ticks to move to the next tile.
* **Delay**. A numerical expression indicating the delay between movements, i.e. how many game ticks the character will wait on the same tile before moving randomly to the next one. 0 means no delay.

#### See also

[Example](../nodegraph/examples/lookout.md)