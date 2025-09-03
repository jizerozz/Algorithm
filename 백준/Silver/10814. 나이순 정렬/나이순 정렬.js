var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

input.shift();

const info = input.map((item, idx) => {
  const [age, name] = item.split(" ");
  return [Number(age), name, idx];
});

info.sort((a, b) => {
  if (a[0] === b[0]) return a[2] - b[2];
  return a[0] - b[0];
});

let result = "";
info.forEach(([age, name]) => {
  result += age + " " + name + "\n";
});

console.log(result.trim());