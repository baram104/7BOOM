import events from "events";

class Counter extends events {
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

  start(players) {
    let i = 0;
    this.interval = setInterval(() => {
      const value = this.generator.next().value;
      if (!value) {
        clearInterval(this.interval);
        return;
      }
      console.log(players[i], value);
      if (i === players.length - 1) {
        i = 0;
      } else {
        i++;
      }
      this.emit("count", value);
    }, 1000);
  }
}
export default Counter;
