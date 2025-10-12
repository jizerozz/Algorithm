var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a,b) => a-b);
console.log(input[1]);