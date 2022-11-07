# Pathfinder

Intended for NPCs.

This node finds and walks the path to the given target location or area.

#### Parameters

* **Destination**. The destination position or area. If an area a random position inside the area is choosen.
* **Speed Delay**. A numerical expression indicating the walking speed. 0 is the fastest, no delay, the character will move one tile per game tick. Higher values will slow the character down. A value of 4 for example would mean that the character needs 4 game ticks to move to the next tile.

#### Returns

* **Right**. If the operation is ongoing, i.e. the character did not reach the destination yet, the right terminal is executed.
* **Success**. The character reached the destination.
* **Failure**. If the path to the destination is blocked for a longer period of time.

#### See also

[Random Walk](../nodes/random_walk.md)