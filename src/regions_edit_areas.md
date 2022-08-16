# Edit Areas

![Regions Draw Tiles](images/regions_edit_areas.png)

Areas are a group of tiles in a region which share common behavior. For example they may teleport the character entering it to a certain location, set a trap, open a door or send a message if you are near a sign. Apart from assigning behavior itself, areas can also be used from character nodes to go to a certain area or walk along a path defined by the area tiles. And lastly they can also modify the visual appearance of a tile, like for example emitting light.

You can cycle through the areas in your region by using the button next to the red *Edit Areas* button. Pressing the *Add Area* button will create an empty new area (that means no tiles are assigned to this area yet). You can *Delete* and *Rename* areas by pressing the respective button.

Clicking on a tile in the region will add the tile to the current area if the *Add Tile* mode is active, if it is set to *Remove* the tile will be removed from the area.

## Behavior Nodes

To add behavior to an area just drop nodes from the left sidebar into the graph below the region view. Area nodes work a bit different than other nodes in Eldiron. They do not utilize behavior trees but rather use nodes which query the current occupation state of an area, for example if the player (or another character) just entered or exited the area. These nodes have a green color. You can add multiple green nodes to an area and connect area behavior to them.