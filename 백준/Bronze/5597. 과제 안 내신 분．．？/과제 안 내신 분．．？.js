var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);
let answer = [];

let students = Array.from({ length: 30 }, (_, idx) => idx + 1);

students.forEach((student) => {
  if (!input.includes(student)) {
    answer.push(student);
  }
});

console.log(answer.join("\n"));