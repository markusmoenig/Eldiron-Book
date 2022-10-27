# Message Node

This node sends a message to the player (or broadcasts a message from the player) and is probably one of the most used nodes.

There are several different message types:

* **Status**. This send a message to the player from the system and is used for any kind of status updates.

When sending messages there are several kind of codes you can use which the system replaces with the given text.

* ```${CONTEXT}```. The name of the current context, which can either be a character or an item name depending on the node context.
* ```${DEF_CONTEXT}```. The name of the current context of the action prepended by an definite article if appropriate. The name will be in lowercase. For example ```"You take ${DEF_CONTEXT}"``` can become *"You take the torch"*.
* ```${TARGET}```. The name of the current target of the character.
* ```${DEF_TARGET}```. The name of the current target of the character prepended with by a definite article. The name will be in lowercase. For example ```"You kill ${DEF_TARGET}"``` can become *"You kill the orc"*.
* ```${DAMANGE}```. If the character is currently dealing damage to the target or receiving damage, this code will be replaced with the amount of damage dealt or taken.
* ```${HEALING}```. If the character is currently healing the target or receiving healing, this code will be replaced with the amount of healing.