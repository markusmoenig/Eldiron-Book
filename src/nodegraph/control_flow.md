# Control Flow

A behavior tree executes from top to bottom. It all starts with a behavior tree node. You can connect up to 5 nodes to the to its terminals at the bottom.

Nodes have input and output terminals. Terminals on the left and top are input terminals. Terminals on the right and bottom of the node are output terminals.

#### In Progress

Nodes, like the [Pathfinder](./nodes/pathfinder.md) node, use the terminal on the right to indicate an action in progress. The pathfinder node will execute the right terminal when the character did not reach it's destination yet.

#### Failure and Success

Some nodes support red failure and green success terminals to indicate failure or success of the nodes function. The pathfinder node will execute the green success terminal if the character has reached its destination. The red failure terminal if the way to the destination is blocked for a longer period of time.

Another example is the [Expression](./nodes/expression.md) node which executes failure or success depending on the evaluation of the boolean expression script (false or true).

#### Single Output Terminal Nodes

Most nodes just support a single output terminal at the bottom when the node function cannot fail. For example sending a [Message](./nodes/message.md) to the player.

```admonish tip
When you debug a game, the graph will visualize which node connections are being executed by coloring executed connections in orange.
```
