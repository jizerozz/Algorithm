var input = require("fs").readFileSync(0, 'utf-8').toString().trim().split("\n").map(Number)
input.shift()
const res = Array.from(new Set(input)).sort((a, b) => a - b).join("\n")

console.log(res);
