var input = require("fs").readFileSync(0, 'utf-8').toString().trim();
const a = input.padStart(Math.ceil(input.length / 3) * 3, "0");
const b = a
  .match(/.{3}/g)
  .map((num) => parseInt(num, 2).toString())
  .join("");

console.log(b.replace(/^0+/, "") || "0");