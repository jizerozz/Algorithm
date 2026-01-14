var input = require("fs").readFileSync(0, "utf-8").toString().trim().split(" ");

const minSum =
  Number(input[0].replaceAll("6", "5")) + Number(input[1].replaceAll("6", "5"));

const maxSum =
  Number(input[0].replaceAll("5", "6")) + Number(input[1].replaceAll("5", "6"));

console.log(minSum, maxSum);