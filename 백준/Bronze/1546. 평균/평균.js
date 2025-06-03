var input = require("fs").readFileSync(0, 'utf-8').toString().split("\n");
let a = parseInt(input[0]);
let b = input[1].split(" ");

let score = [];
let sum = 0;
let avg = 0;

for (let i = 0; i < a; i++) {
  score.push(Number(b[i]));
  sum += score[i];
}

avg = sum / Number(a);

console.log((avg / Math.max(...score)) * 100);