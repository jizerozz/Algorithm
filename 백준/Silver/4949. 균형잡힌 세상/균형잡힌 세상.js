var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const char = ["[", "]", "(", ")"];
let answer = [];

function FindBalance(str) {
  let stack = [];

  if (!char.some((c) => str.includes(c))) {
    answer.push("yes");
    return;
  }
  const brackets = str.split("").filter((v) => char.includes(v)); // 문자열 내 괄호 문자들만 필터링

  for (let bracket of brackets) {
    if (bracket === "(" || bracket === "[") {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        // 오른쪽 괄호 및 대괄호만 들어간 경우가 존재할 수 있음
        answer.push("no");
        return;
      }

      const last = stack.pop(); //마지막 요소 가져오기

      if (
        (bracket === ")" && last !== "(") ||
        (bracket === "]" && last !== "[")
      ) {
        answer.push("no");
        return;
      }
    }
  }

  if (stack.length === 0) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;
  FindBalance(input[i]);
}

console.log(answer.join("\n"));