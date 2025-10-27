var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let count = Number(input.shift());
let answer = 0;

const words = new Map();
let compareWord = input[0];

for (let w of compareWord) {
  words.set(w, (words.get(w) || 0) + 1);
}

for (let i = 1; i < input.length; i++) {
  let word = input[i].split("");

  if (findSimillar(word)) answer++;
}

function findSimillar(findWord) {
  const temp = new Map(words);
  for (let w of findWord) {
    if (temp.get(w)) {
      temp.set(w, temp.get(w) - 1);
    } else {
      temp.set(w, (temp.get(w) || 0) - 1);
    }
  }

  let diff = 0;
  for (let d of temp.values()) {
    diff += Math.abs(d);
  }

  if (
    diff === 0 ||
    diff === 1 ||
    (diff === 2 && findWord.length === compareWord.length)
  ) {
    return true;
  }

  return false;
}

console.log(answer);
