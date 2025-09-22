var input = require("fs").readFileSync(0,"utf-8").toString().trim().split(" ");
let answer = [];

const freq = Number(input[1]);
const peoples = Array.from({ length: Number(input[0]) }, (_, i) => i + 1);

function popNumber(arr, idx) {
  if (arr.length === 0) return;

  idx = (idx + freq - 1) % arr.length;
  answer.push(arr.splice(idx, 1)[0]);

  popNumber(arr, idx);
}

popNumber(peoples, 0);

console.log(`<${answer.join(", ")}>`);