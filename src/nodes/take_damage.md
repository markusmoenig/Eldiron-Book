# Take Damage

Take damage dealt by the [Deal Damage](deal_damage.md) node.

This node calculates the reduction of the damage and applies it.

#### Parameters

* **Reduce By**. This numerical expression defines the reduction of the incoming damage. Should be based on gear (TBD).

#### Returns

* **Success**. If the character survives the damage it took.
* **Failure**. The character died. You should now [set the state](set_state.md) to Killed or Purged. See [Mechanics](../nodegraph/mechanics.md). You can [Respawn](respawn.md) non-player characters too.

#### See also

[Mechanics](../nodegraph/mechanics.md), [Example](../nodegraph/examples/onHit.md)