let answer = [];
var input = require("fs").readFileSync(0,"utf-8").toString().trim();
answer = input ? input.split(/\s+/) : [];
console.log(answer.length);