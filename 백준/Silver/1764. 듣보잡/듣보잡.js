var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let answer = [];
let notLook = new Set();
let notSee = [];

for (let i = 1; i <= N; i++) {
  notLook.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  notSee.push(input[i]);
}


for (let i = 0; i < M; i++) {
  if (notLook.has(notSee[i])) {
    answer.push(notSee[i]);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));