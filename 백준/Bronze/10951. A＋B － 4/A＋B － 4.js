var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer.push(a + b);
}

console.log(answer.join("\n"));