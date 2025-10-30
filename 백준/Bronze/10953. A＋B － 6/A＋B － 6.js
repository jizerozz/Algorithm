var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

input.shift()

for(let i=0; i<input.length; i++){
    const [a,b] = input[i].split(",")
    console.log(Number(a)+Number(b))
}