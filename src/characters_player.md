# Player Character

![Player](./images/characters_player.png)

Player based characters map their behavior tree names to actions send from [screen scripts](./ref_screen_scripts.md). They basically define what todo for every user based action.

For some of these actions there are specific nodes available which handle the given action, like the *Move*, *Take* or *Drop* nodes. These nodes perform the action and return success or false, depending on the outcome.

The screenshot above shows an example for the *Move* command.

For all other actions please use the *Action* node, for example for *Look* or *Use*. The action node searches for a region, item or character with an behavior tree of the same name and execute that tree.

As the actions send from the screen scripts are user defined, you can easily map any action command to the behavior trees / actions of the same name, allowing a very easy and modular way to build up custom character behavior.

## Special Message Shortcuts

- **${DIRECTION}** is the shortcut for the direction of the user initiated action. In the above screenshot we use it to send back "Move ${Direction}" or "Move ${Direction} - Blocked" messages back to the user.

- **${SUBJECT}** is the subject of the action. For take and drop actions it is the name of the item we take or drop. For example you can send something like this back to the user on success on the take action: "You take: ${SUBJECT}.".