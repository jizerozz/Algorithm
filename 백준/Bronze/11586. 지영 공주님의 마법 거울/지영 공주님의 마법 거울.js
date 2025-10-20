var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

input.shift();

const emotion = Number(input.pop());

if (emotion === 1) {
  console.log(input.join("\n"));
}

if (emotion === 2) {
  for (let em of input) {
    console.log(em.split("").reverse().join(""));
  }
}

if (emotion === 3) {
  console.log(input.reverse().join("\n"));
}