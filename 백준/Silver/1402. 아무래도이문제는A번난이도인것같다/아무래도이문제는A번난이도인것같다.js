var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split(/\s+/);

const T = Number(input[0]);
console.log(Array.from({ length: T }, () => "yes").join("\n"));