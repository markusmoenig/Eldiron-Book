# Assets Directory

The *assets* directory contains all static data of the game.

- The **audio** directory contains all audio assets of your game. Only WAV files are currently supported.

- The **fonts** directory contains all fonts used by the game, to install new fonts just copy new fonts into this directory and on the next restart of Eldiron they will show up in the relevant font selectors.

- The **tilemaps** directory contains all tile-maps. Tile-maps are PNG images which contain game tiles. Copy new images into this folder and they will show up in the **Tiles** view upon restart. Eldiron will create .json files for each tile-map which include the user defined meta data for the tiles.

The name of each file represents the in-game name of the represented entity. For example you can just rename a character file to rename the character itself. Eldiron will perform the same action when asked to rename a character.