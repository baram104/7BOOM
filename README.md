This is a 7BOOM project, which i built to aquire the knowledge of how to use events in node.js.
In the project I used a design pattern called Pub/Sub.
It's a game that can be opened in a CLI.
Once you start the game you need to add 2 or more players, you need to choose the number that whenever is reached, the game is over.
When you finish all these steps, you start the actual game where there's a counter and each player logs the next number. When a player reaches to a number that is a multiple of 7, or if the number includes the number 7, the player logs 'BOOM' instead of the actual number.
When the game is over the details of the players and the limit number get saved and the next time you load the game you can choose to load these details instead of filling it up again.
