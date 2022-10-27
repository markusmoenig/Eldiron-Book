# Behavior Tree

A behavior tree is a node with several terminals at the bottom which get executed from left to right. You typically rename the behavior tree to indicate what behavior the tree is executing, for example *Go Raiding*, or *Talk* and *Combat*.

In a programming language behavior trees would be similar to callable functions.

Every behavior tree node has an *Execute* property which indicates when the tree is executed:

- **Always**. The behavior tree is always executed if the graph is not locked.
- **On Startup**. The behavior tree is only executed once when the graph is created.
- **On Demand**. The behavior tree is executed on demand.

Behavior trees perform the AI for non-player-characters (NPCs) and connect input commands from the *Player* character to the right player action (see the [characters section](./characters.md)).

All behavior trees in a graph are listed as tabs at the top of the graph. Select the given behavior to edit it.