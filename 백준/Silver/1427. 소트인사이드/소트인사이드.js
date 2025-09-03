var input = require("fs").readFileSync(0,"utf-8").toString().trim().split("");
let answer = input.sort((a, b) => Number(b) - Number(a)).join("");
console.log(parseInt(answer));