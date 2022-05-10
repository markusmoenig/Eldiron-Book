Object.assign(window.search, {"doc_urls":["introduction.html#introduction","installation_1.html#installation","installation_1.html#installing-from-source","installation_1.html#prebuilt-binaries","projects_2.html#projects","projects/assets.html#assets-directory","projects/game.html#game-directory"],"index":{"documentStore":{"docInfo":{"0":{"body":56,"breadcrumbs":2,"title":1},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":34,"breadcrumbs":3,"title":2},"3":{"body":8,"breadcrumbs":3,"title":2},"4":{"body":74,"breadcrumbs":2,"title":1},"5":{"body":84,"breadcrumbs":5,"title":2},"6":{"body":45,"breadcrumbs":5,"title":2}},"docs":{"0":{"body":"Eldiron is a cross-platform creator for role-playing-games (RPGs). Eldiron consists of Eldiron Creator , a desktop application available for macOS, Windows and Linux, and various clients which will run the created games on nearly any device with support for single player and multi-player games. The first part of this book will describe how to create games using Eldiron Creator and will than focus on the clients in the Clients section. Whenever you see the name Eldiron in the book it references Eldiron Creator , the clients will be referenced explicitly by name.","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Installation » Installation","id":"1","title":"Installation"},"2":{"body":"Eldiron is written in Rust, to run it you have to install Rust and its package manager cargo. Please follow the instructions on this page . After you successfully installed Rust, clone the repository (or download the source via a .zip file), open a terminal, navigate to the Eldiron directory and start Eldiron Creator with cargo run --release.","breadcrumbs":"Installation » Installing from source","id":"2","title":"Installing from source"},"3":{"body":"At a later stage I will provide pre-build binaries for each platform.","breadcrumbs":"Installation » Prebuilt Binaries","id":"3","title":"Prebuilt Binaries"},"4":{"body":"Eldiron stores it's game projects in the Eldiron directory in your desktops Documents directory. When first started Eldiron will ask for the name of your first game project (the default name is New Game ) and create the project with the default starter content. When Eldiron is not running, you can rename game folders to change the name of the game, delete or copy game folders. The design goal for Eldiron projects was to make sharing of game content between games as easy as possible. Most game components are saved in individual files to allow sharing them with others. Each section of this book will mention where the corresponding game data is saved. Game projects consists of two directories: assets and game .","breadcrumbs":"Projects » Projects","id":"4","title":"Projects"},"5":{"body":"The assets directory contains all static data of the game. The fonts directory contains all fonts used by the game, to install new fonts just copy new fonts into this directory and on the next restart of Eldiron they will show up in the relevant font selectors. The tilemaps directory contains all tile-maps. Tile-maps are PNG images which contain game tiles. Copy new images into this folder and they will show up in the Tiles view upon restart. Eldiron will create .json files for each tile-map which include the user defined meta data for the tiles. The name of each file represents the in-game name of the represented entity. For example you can just rename a character file to rename the character itself. Eldiron will perform the same action when asked to rename a character.","breadcrumbs":"Projects » Assets Directory » Assets Directory","id":"5","title":"Assets Directory"},"6":{"body":"The game directory contains all user created data for the game. Each folder name represents the type of game content it contains and matches the user interface sections in Eldiron and in this book. You can share individual files with others, but there are some dependencies you have to be aware of: Region files need the tile-maps used to draw the region in the assets/tilemaps directory. Systems behavior files may be dependent on variables defined in the characters which invoke them.","breadcrumbs":"Projects » Game Directory » Game Directory","id":"6","title":"Game Directory"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951}},"s":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":2.0},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":2.0},"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.23606797749979},"6":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"0":{"tf":2.449489742783178},"2":{"tf":1.7320508075688772},"4":{"tf":2.23606797749979},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":2.23606797749979}}}}}},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":4,"docs":{"0":{"tf":2.0},"4":{"tf":3.4641016151377544},"5":{"tf":2.0},"6":{"tf":2.0}}}}},"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"u":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772},"5":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"t":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}},"y":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.449489742783178}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":2.449489742783178},"6":{"tf":1.0}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"s":{"df":3,"docs":{"0":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"k":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}},"s":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":2.0},"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":2.0},"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.6457513110645907},"6":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"0":{"tf":2.449489742783178},"2":{"tf":1.7320508075688772},"4":{"tf":2.23606797749979},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":2.23606797749979}}}}}},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":4,"docs":{"0":{"tf":2.0},"4":{"tf":3.4641016151377544},"5":{"tf":2.0},"6":{"tf":2.449489742783178}}}}},"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"u":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":4,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.23606797749979},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"n":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":2,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"t":{"a":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":4,"docs":{"0":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}},"y":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"4":{"tf":2.8284271247461903},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":2.449489742783178},"6":{"tf":1.0}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.4142135623730951}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"s":{"df":3,"docs":{"0":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});