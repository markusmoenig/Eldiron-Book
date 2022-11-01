# Lookout

Intended for NPCs.

This node looks out for other characters to make it the target for an action. For example a monster may look for something to attack, a healer may look out for somebody to heal.

If the node successfully finds a character it will make the character the target, meaning that nodes which work on a target, like [Close In](../nodes/close_in.md), [Deal Damage](../nodes/deal_damage.md) or [Heal](../nodes/heal.md), will target that character.

You can use [Untarget](../nodes/untarget.md) to un-target it again.

*Parameters*

* **State**. You can select if the node looks out for a *Normal* (i.e. active / alive character) or a *Killed* one (for example to resurrect it).
* **Expression**. A numerical expression which checks the potential target character (i.e. this expression is run on the potential target!). For example a monster could check the alignment: ```alignment > 0```.
* **Max Distance**. The maximum distance to look out for characters.

*Returns*

* **Success**. If a fitting character has been found and is our new target.
* **Failure**. If no character has been found.

*See also*

[Untarget](../nodes/untarget.md), [Has Target ?](../nodes/has_target.md), [Example](../nodegraph/examples/lookout.md)