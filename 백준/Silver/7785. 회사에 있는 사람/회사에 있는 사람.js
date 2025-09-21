var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let answer = new Set();

for (let i = 1; i <= N; i++) {
  const [name, record] = input[i].split(" ");

  if (record === "enter") {
    answer.add(name);
  } else {
    answer.delete(name);
  }
}

console.log(Array.from(answer).sort().reverse().join("\n"));