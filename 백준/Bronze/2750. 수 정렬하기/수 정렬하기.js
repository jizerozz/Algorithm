var input = require("fs").readFileSync(0, 'utf-8').toString().trim().split("\n");
const N = parseInt(input[0]);
let array = [];

for (let i = 1; i <= N; i++) {
  array.push(parseInt(input[i]));
}

let answer = [...new Set(array)].sort((a, b) => a - b);
answer = answer.join("\n");

console.log(answer);
