var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const freq = Number(input.shift());

let idx = 0;
let answer = [];

for (let i = 0; i < freq; i++) {
  const n = Number(input[idx]);
  const phones = input.slice(idx + 1, idx + 1 + n).sort();

  let isConsistent = true;

  for (let j = 0; j < n - 1; j++) {
    if (phones[j + 1].startsWith(phones[j])) {
      isConsistent = false;
      break;
    }
  }

  idx += n + 1;

  isConsistent ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));