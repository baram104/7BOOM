import Counter from "./publishers/counter.js";

let limit = 50;
const players = [1, 2, 3, 4];
const counter = new Counter(50);

// let i = 0;
// let j = 0;
// counter.on("count", () => {});
counter.start(players);
