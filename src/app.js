import Game from "./publishers/game.js";
import Player from "./clients/player.js";
import promptSync from "prompt-sync";
import fs from "fs";

const prompt = promptSync();

const readFromFileAndPlay = () => {
  fs.readFile("./previousPlayers.txt", "utf-8", (err, data) => {
    const players = data.split(",");
    const limit = Number(players.pop());
    const game = new Game(limit);
    for (const player of players) {
      const playerArr = player.split(" ");
      const playerObj = new Player(playerArr[0], playerArr[1]);
      game.on("count", playerObj.sayNumber.bind(playerObj));
    }
    game.start();
  });
};

const createNewPlayersAndPlay = () => {
  const playersToSave = [];
  const limit = Number(prompt("Enter the limit number you wanna play to: "));
  const game = new Game(limit > 0 ? limit : 100);

  let answer = "y";
  let playerCounter = 0;

  while (answer === "y") {
    console.log("Add a player");
    const playerName = prompt("What is your name? ");
    const playerAge = prompt("What is your age? ");
    const player = new Player(playerName, playerAge);

    game.on("count", player.sayNumber.bind(player));

    playerCounter++;
    playersToSave.push(`${playerName} ${playerAge}`);

    if (playerCounter < 2) {
      continue;
    }

    console.log("do you wish to add more players? ");
    answer = prompt(
      "enter the letter y if you do, anything else if you dont: "
    );
  }

  const finalStringToSave = `${playersToSave.join(",")},${limit}`;
  fs.writeFile("previousPlayers.txt", finalStringToSave, function (err) {
    if (err) throw err;
  });
  game.start();
};

export const run = () => {
  console.log("Welcome to 7BOOM!");

  let loadPrevious;
  if (fs.existsSync("previousPlayers.txt")) {
    loadPrevious = prompt(
      "Do you wish to load previous players and a previous limit? enter the letter 'y' if you do, anything else if you dont: "
    );
  }

  if (loadPrevious === "y") {
    readFromFileAndPlay();
  } else {
    createNewPlayersAndPlay();
  }
};
