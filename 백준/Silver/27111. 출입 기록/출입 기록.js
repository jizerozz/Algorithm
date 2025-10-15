var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const group = new Set();
let count = 0;

for (let i = 0; i < Number(N); i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (b === 1) {
    if (group.has(a)) {
      count++;
    } else {
      group.add(a);
    }
  } else {
    if (!group.has(a)) {
      count++;
    } else {
      group.delete(a);
    }
  }
}

count += group.size;

console.log(count);