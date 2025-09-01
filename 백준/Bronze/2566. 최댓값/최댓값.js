var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let maxNum = -1;
let column = 0;
let rows = 0;

input.forEach((item, rowIdx) => {
  const nums = item.split(" ").map(Number);
  const rowMax = Math.max(...nums);

  if (rowMax > maxNum) {
    maxNum = rowMax;
    rows = rowIdx + 1;             
    column = nums.indexOf(maxNum) + 1; 
  }
});

console.log(maxNum);
console.log(rows, column);