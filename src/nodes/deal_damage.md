# Deal Damage

Deals damage to the target.

This node does not deal damage by itself. It just calculates the attack rating, gets the weapon damage and calls the **onHit** tree of the target, which should contain the [Take Damage](take_damage.md) node, to block the attack or reduce the damage based on the character attributes of the target.

#### Parameters

* **Attack Rating**. This numerical expression defines the attack rating of the attack. Like ```STR + d3```. The result of this expression will be set as "attack_rating" variable on the target. In the *onHit* tree of the target you can optionally test this variable to see if the character can block the attack.

#### Returns

* **Success**. If we killed the target.
* **Failure**. The target is still alive.

#### See also

[Mechanics](../nodegraph/mechanics.md), [Example](../nodegraph/examples/lookout.md)