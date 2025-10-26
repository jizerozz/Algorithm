var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("")
  .map(Number);

let count = 0;

let cards = Array(10).fill(0);

for (let num of input) {
  cards[num]++;
}

cards[6] = Math.ceil((cards[6] + cards[9]) / 2);
cards[9] = 0;

console.log(Math.max(...cards));