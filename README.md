#7BOOM
This is a 7BOOM project, which I built to acquire the knowledge of how to use events in node.js.
In the project I used a Pub/Sub design pattern.
It's a game that can be opened in a CLI.
Once you start the game you need to add 2 or more players, you need to choose the maximum value that when reached, game is over.
When you finish all these steps, you start the actual game where there's a counter and each player logs the next number. When a player reaches a number that is a multiple of 7, or if the number includes the number 7, the player logs 'BOOM' instead of the actual number.
When the game is over the details of the players and the maximum number are saved in a file and the next time you load the game you can choose to load these details instead of filling it up again.
##Local Setup
To try this game you need to make sure Node is installed on your device, then open the CLI and type `node .`
