var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const TestCase = Number(input[0]);
let idx = 1;
let result = [];

for (let t = 0; t < TestCase; t++) {
  let n = Number(input[idx]); // 테스트케이스에 해당하는 의상 수
  idx++;

  let clothes = new Map();

  for (let i = 0; i < n; i++) {
    const [name, pieces] = input[idx].split(" ");
    idx++;

    if (clothes.has(pieces)) {
      clothes.set(pieces, clothes.get(pieces) + 1);
    } else {
      clothes.set(pieces, 1);
    }
  }

  let answer = 1;
  for (let cnt of clothes.values()) {
    answer *= cnt + 1;
  }
  answer -= 1;
  result.push(answer);
}

console.log(result.join("\n"));
