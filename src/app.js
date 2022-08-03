import Game from "./entities/game.js";
import Player from "./entities/player.js";

let limit = 50;
const players = [
  new Player("yoni", 12),
  new Player("irmi", 45),
  new Player("yossi", 13),
];
const game = new Game(50);

// let i = 0;
// let j = 0;
game.on("count", players[0].sayNumber.bind(players[0]));
game.on("count", players[1].sayNumber.bind(players[1]));
game.on("count", players[2].sayNumber.bind(players[2]));
game.start(players);
