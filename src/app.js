import Game from "./publishers/game.js";
import Player from "./clients/player.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export const run = () => {
  console.log("Welcome to 7BOOM!");

  const limit = prompt("Enter the limit number you wanna play to: ");
  const game = new Game(limit);

  let answer = "y";
  let playerCounter = 0;

  while (answer === "y") {
    console.log("Add a player");
    const playerName = prompt("What is your name? ");
    const playerAge = prompt("What is your age? ");
    const player = new Player(playerName, playerAge);

    game.on("count", player.sayNumber.bind(player));

    playerCounter++;

    if (playerCounter < 2) {
      continue;
    }

    console.log("do you wish to add more players? ");
    answer = prompt(
      "enter the letter y if you do, anything else if you dont: "
    );
  }

  game.start();
};
