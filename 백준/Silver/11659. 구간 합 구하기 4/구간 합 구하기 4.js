var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
let answer = [];
let arr = input[1].split(" ").map(Number);

let prefix = [0];
for (let i = 0; i < M; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}

for (let i = 2; i <= Number(N) + 1; i++) {
  let [a, b] = input[i].split(" ");
  let sum = prefix[b] - prefix[a - 1];
  answer.push(sum);
}

console.log(answer.join("\n"));
