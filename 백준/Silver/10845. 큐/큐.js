var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const freq = Number(input[0]);
let res = [];
let answer = [];

for (let i = 1; i <= freq; i++) {
  if (input[i].includes("push")) {
    res.push(input[i].split(" ")[1]);
  }

  if (input[i] === "pop") {
    res.length > 0 ? answer.push(res.shift()) : answer.push(-1);
  }

  if (input[i] === "empty") {
    res.length > 0 ? answer.push(0) : answer.push(1);
  }

  if (input[i] === "size") {
    answer.push(res.length);
  }

  if (input[i] === "front") {
    res.length > 0 ? answer.push(res.at(0)) : answer.push(-1);
  }

  if (input[i] === "back") {
    res.length > 0 ? answer.push(res.at(-1)) : answer.push(-1);
  }
}

console.log(answer.map(Number).join("\n"));