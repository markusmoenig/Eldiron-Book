# Node Graphs & Scripting in Eldiron

![NodeGraph](../images/nodegraph.png)

Node graphs in Eldiron are a mix between a behavior node system and scripting. Eldiron tries to combine the best of both worlds. The overall flow of execution is defined via nodes, while parameters of nodes are expressions or scripts which can be as complex as needed.

This has the advantage that you can easily visualize the overall flow of execution in a graph while adding details to behavior via node parameters which do not clutter up the node graph.

For example in the above screenshot the *Go Raiding* behavior tree executes the *Pathfinding* node which guides the character to a certain position or area in a region.

While the pathfinding is ongoing, i.e. the character did not reach its destination yet, the node connected to the terminal on the right side of the pathfinder node is executed. If the character successfully reached its destination the green OK terminal at the bottom of the pathfinding node is executed, if an error occured, for example the way to the destination is blocked for a longer period of time, the red ERROR terminal at the bottom of the pathfinding node is executed.

The *Speed Delay* property of the pathfinding node is a number value between 0 (no speed delay, which is a full move per game tick) and the number of game ticks to be skipped while the move is ongoing..

You could just set the expression to
```rust
2
```
for the speed delay.

Or as we do in the above screenshot you could set it to
```rust
1 + d2
```
which is 1 plus a dice throw of 2 (a random number of one or two) which gives a bit of a random speed, as this expression is evaluated for every movement the speed varies while the character is walking from tile to tile.

Or if things get more complex you could check if the character is on horseback or not or which usage role the current tile the characer is standing on has (for making the character walk slower in forests or hills).

To understand node graphs please read about [behavior trees](./nodegraph_behavior_trees.md), [control flow]() and the scripting subsystem.