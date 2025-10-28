var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

input.shift();

let res = [];

for (let i = 0; i < input.length; i++) {
  const [a, ...rest] = input[i].split(" ").map(Number);
  const answer = setCount(rest);
  res.push([a + " " + answer]);
}

console.log(res.join("\n"));

function setCount(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - i - 1; j++) {
      if (students[j] > students[j + 1]) {
        [students[j], students[j + 1]] = [students[j + 1], students[j]];
        count++;
      }
    }
  }
  return count;
}
