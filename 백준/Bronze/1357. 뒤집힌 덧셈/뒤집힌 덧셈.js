var input = require("fs").readFileSync(0,"utf-8").toString().trim();
const [a, b] = input.split(" ");

function reverseToNum(num) {
  return Array.from(num).reverse().join("");
}

const sum = Number(reverseToNum(a)) + Number(reverseToNum(b));
console.log(Number(reverseToNum(sum.toString())));