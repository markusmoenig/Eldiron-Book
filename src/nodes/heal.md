# Heal

Heals the current target.

This node does not heal by itself. It just calculates the amount of healing and than calls the **onHeal** tree of the target, which should contain the [Take Heal](take_heal.md) node which applies the healing and to optionally increase the healing based on the attributes of the target character.

#### Parameters

* **For**. Either *Self* or *Target*.
* **Amount**. This numerical expression defines the amount of healing. Like ```d10```.
* **Speed Delay**. A numerical expression indicating the delay. 0 means you can heal for every game tick, 4 would mean a possible heal every 4 game ticks.

#### Returns

* **Success**. If we healed the target.
* **Failure**. The healing failed.

#### See also

[Mechanics](../nodegraph/mechanics.md)