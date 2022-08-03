import events from "events";
class Game extends events {
  constructor(limit) {
    super();
    this.interval = undefined;
    this.generator = this.generateNumbers(limit);
  }

  *generateNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
      yield i;
    }
  }

  start() {
    const players = this.listeners("count");
    let i = 0;
    this.interval = setInterval(() => {
      const value = this.generator.next().value;
      if (!value) {
        clearInterval(this.interval);
        return;
      }
      players[i](value);
      if (i === players.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }, 1000);
  }
}
export default Game;
