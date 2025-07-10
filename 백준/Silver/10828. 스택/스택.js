var input = require("fs").readFileSync(0,"utf-8").toString().trim();
let num = [];
let answer = [];

input.split("\n").forEach((item) => {
  if (item === "pop") {
    answer.push(num.length > 0 ? num.pop() : -1);
  }

  if (item === "top") {
    answer.push(num.length > 0 ? num.at(-1) : -1);
  }

  if (item.includes("push")) {
    num.push(Number(item.split(" ")?.[1]));
  }

  if (item === "size") {
    answer.push(num.length);
  }

  if (item === "empty") {
    num.length === 0 ? answer.push(1) : answer.push(0);
  }
});

console.log(answer.join("\n"));
