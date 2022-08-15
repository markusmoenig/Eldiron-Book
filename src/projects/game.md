# Game Directory

The *game* directory contains all user created data for the game, such as regions (drawn via tiles in the region editor) or character behavior graphs.

Each folder name represents the type of game content it contains and matches the user interface sections in Eldiron and in this book (i.e. *regions*, *characters*, *systems* and *items*) with the game behavior located directly in the game directory.

You can share individual files with others, but there are some dependencies you have to be aware of:

* *Region* files need the tile-maps used to draw the region in the *assets/tilemaps* directory.

* *Systems* behavior files may be dependent on variables defined in the *characters* which invoke them.