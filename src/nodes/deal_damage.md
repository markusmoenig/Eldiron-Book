# Deal Damage

Deals damage to the target.

This node does not deal damage by itself. It just calculates the damage to be dealt and than calls the **onHit** tree of the target, which should contain the [Take Damage](take_damage.md) node, to reduce the damage based on the character attributes of the target.

#### Parameters

* **Damage**. This numerical expression defines the damage to deal. Like ```2 + d3```. Query gear for bonuses (TBD).
* **Speed Delay**. A numerical expression indicating the delay. 0 means dealing damage for every game tick, 4 would mean a swing every 4 game ticks. Should be set to the weapon speed (TBD).

#### Returns

* **Success**. If we killed the target.
* **Failure**. The target is still alive.

#### See also

[Mechanics](../nodegraph/mechanics.md), [Example](../nodegraph/examples/lookout.md)