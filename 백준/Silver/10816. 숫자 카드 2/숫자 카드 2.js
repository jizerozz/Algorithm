var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let answer = new Map();
let NumberCards = input[1].split(" ").map(Number);
let hasCards = input[3].split(" ").map(Number);
let res = [];

for (let num of NumberCards) {
  answer.set(num, (answer.get(num) || 0) + 1);
}

res = hasCards.map((item) => (answer.get(item) ? answer.get(item) : 0));

console.log(res.join(" "));