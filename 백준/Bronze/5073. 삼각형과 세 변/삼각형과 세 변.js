var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

input.pop();
let answer = [];

input.forEach((item) => {
  let sides = item.split(" ").map(Number).sort((a, b) => b - a);
  let [a, b, c] = sides; 

  if (a >= b + c) {
    answer.push("Invalid");
  } else if (a === b && b === c) {
    answer.push("Equilateral");
  } else if (a === b || a === c || b === c) {
    answer.push("Isosceles");
  } else {
    answer.push("Scalene");
  }
});

console.log(answer.join("\n"));

