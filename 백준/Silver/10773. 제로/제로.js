var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

input.shift();
let answer = [];
let sum = 0;

input.forEach((item, idx) => {
  if (Number(item) === 0) {
    answer.pop();
  } else {
    answer.push(Number(item));
  }
});

answer.forEach((num) => (sum += Number(num)));
console.log(sum);