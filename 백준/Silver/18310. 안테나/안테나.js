var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const homes = input[1].split(" ").map(Number);
homes.sort((a, b) => a - b);

const mid = Math.floor((homes.length - 1) / 2);
console.log(homes[mid]);