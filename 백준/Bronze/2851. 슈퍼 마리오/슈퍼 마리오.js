var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
let state = false;

input.reduce((acc, cur) => {
  if (state) return acc;
  const newSum = acc + cur;

  if (newSum >= 100) {
    sum = Math.abs(100 - newSum) <= Math.abs(100 - acc) ? newSum : acc;
    state = true;
    return acc;
  }

  sum = newSum;
  return newSum;
}, 0);

console.log(sum);