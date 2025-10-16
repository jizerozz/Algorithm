var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let count = 0;

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

const setInput = new Set(input.slice(1, N + 1));

for (let j = N + 1; j <= N + M; j++) {
  if (setInput.has(input[j])) {
    count++;
  }
}

console.log(count);