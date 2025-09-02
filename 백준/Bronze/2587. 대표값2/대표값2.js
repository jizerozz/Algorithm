var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let avg = 0;
let middle = 0;

input.forEach((num) => (sum += Number(num)));
avg = sum / input.length;

input.sort((a, b) => Number(a) - Number(b));

middle =
  input.length % 2 === 0 ? input.length / 2 : Math.ceil(input.length / 2);

console.log(avg);
console.log(Number(input[middle - 1]));