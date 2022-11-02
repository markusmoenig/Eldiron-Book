# Close In

Intended for NPCs.

Walks towards the current target.

#### Parameters

* **To Distance**. The desired distance to the target. This is most often the weapon range. For a melee weapon it would be 1.
* **Speed Delay**. A numerical expression indicating the walking speed. 0 is the fastest, no delay, the character will move one tile per game tick. Higher values will slow the character down. A value of 4 for example would mean that the character needs 4 game ticks to move to the next tile.

#### Returns

* **Success**. If we have reached the desired distance.
* **Failure**. We are not close enough yet.

#### See also

[Example](../nodegraph/examples/lookout.md)