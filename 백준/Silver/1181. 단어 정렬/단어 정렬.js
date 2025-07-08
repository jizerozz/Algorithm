var input = require("fs").readFileSync(0,'utf-8').toString().trim().split("\n");
input.shift();

const res = Array.from(new Set(input))
  .sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });

console.log(res.join("\n"));