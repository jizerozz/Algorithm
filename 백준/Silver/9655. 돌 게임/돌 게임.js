var input = require("fs").readFileSync(0,"utf-8").toString().trim();
let stone = Number(input);
console.log(stone % 2 === 1 ? "SK" : "CY");