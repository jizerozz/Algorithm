var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const members = new Map();

let count = 0;

for (let i = 1; i <= input.length - 1; i++) {
  members.set(i, Number(input[i]));
}

while (members.get(1) <= Math.max(...Array.from(members.values()).slice(1))) {
  Purchased();
}

function Purchased() {
  let maxKey = 2;

  for (let [key, value] of members) {
    if (key !== 1 && value > members.get(maxKey)) {
      maxKey = key;
    }
  }

  members.set(maxKey, members.get(maxKey) - 1);
  members.set(1, members.get(1) + 1);
  count++;
}

console.log(count);