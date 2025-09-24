var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

let str = input[0];
let n = Number(input[1]);
let commands = input.slice(2);

let left = str.split("");
let right = [];

for (let i = 0; i < n; i++) {
  if (commands[i] === "L") {
    if (left.length > 0) right.push(left.pop());
  } else if (commands[i] === "D") {
    if (right.length > 0) left.push(right.pop());
  } else if (commands[i] === "B") {
    if (left.length > 0) left.pop();
  } else if (commands[i].startsWith("P")) {
    let word = commands[i].split(" ")[1];
    left.push(word);
  }
}

console.log(left.join("") + right.reverse().join(""));