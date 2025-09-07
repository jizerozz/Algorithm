var input = require("fs").readFileSync(0,"utf-8").toString().trim().split(" ");
console.log(Number(input[0]).toString(Number(input[1])).toUpperCase());