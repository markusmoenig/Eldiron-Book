# Action

This node is available both in area graphs and in behavior graphs.

It creates a way to map user commands (send from [screen scripts](../scripting/screen_scripts.md)) to a node based action.

If used in area graphs it filters the action parameter to a user command. So if a player executes for example a *Look* command and the action node has *Look* as its action parameter the nodes connected on the right will be executed. For example to send a message to a player with the content of a sign.

In behavior node graphs the action node needs to be in a behavior tree which has the name of the action. It works like this:

* The user sends an action command, lets say *Look* in the [screen scripts](../scripting/screen_scripts.md). The node system receives the command and searches for a behavior tree called *Look* for the player. If it finds one, it executes the tree.
* When it encounters an action node in the tree it performs the action (which should be *Look* again).

Now the action node does the following:

* It searches for other characters in the direction of the command, if there is a character it searches for a tree with the action name and the ending *(P)*, in our case **Look (P)** and executes the tree if it finds one. The *(P)* indicates that this is a [passive](../nodegraph/mechanics.md) tree and gets called from somebody looking at the character. In this tree you can for example send a message to the player using the [message](message.md) node (or anything else depending on the action).

* If there is no character, the action node searches for areas in the command direction. If it found one it searches for an action node with a fitting action parameter (as described above, in our case *Look*) and executes it.

In summary, using the *Action* node you can connect any kind of user action to behavior trees on characters or areas, opening up endless possibilities of user interactions with characters and areas.

#### Parameter

* **Action**. The name of the user command