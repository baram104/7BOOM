class Player {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  sayNumber(num) {
    const strNum = String(num);
    let statement = `${this.name}: `;
    if (num % 7 === 0 || strNum.includes("7")) {
      statement += "BOOM";
    } else {
      statement += num;
    }
    console.log(statement);
  }
}
export default Player;
