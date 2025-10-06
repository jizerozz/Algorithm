var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const len = input[0];
let answer = [];

for (let i = 1; i <= Number(len); i++) {
  let arr = [];
  let valid = true;

  for (let ch of input[i]) {
    if (ch === `(`) {
      arr.push("(");
    } else {
      if (arr.length === 0) {
        valid = false;
        break;
      }
      arr.pop();
    }
  }

  valid && arr.length === 0 ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));