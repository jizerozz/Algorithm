var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let answer = [];

for (let i = 1; i <= input.length-1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer.push(a + b);
}

console.log(answer.join("\n"));