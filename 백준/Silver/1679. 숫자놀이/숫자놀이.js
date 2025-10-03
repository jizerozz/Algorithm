var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const nums = input[1].split(" ").map(Number);
const limit = Math.max(...nums) * M + 1;
const arr = Array(limit).fill(Infinity);
arr[0] = 0;

for (let i = 1; i < limit; i++) {
  for (let num of nums) {
    if (i - num >= 0) arr[i] = Math.min(arr[i], arr[i - num] + 1);
  }

  if (arr[i] > M) {
    const winner = i % 2 === 0 ? "holsoon" : "jjaksoon";
    console.log(`${winner} win at ${i}`);
    break;
  }
}
