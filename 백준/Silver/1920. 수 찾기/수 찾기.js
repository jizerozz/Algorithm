var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const firstArr = new Set(input[1].split(" ").map(Number));
const M = Number(input[2]);
const secondArr = input[3].split(" ").map(Number);

let answer = [];

for (let i = 0; i < M; i++) {
  if (firstArr.has(secondArr[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join("\n"));