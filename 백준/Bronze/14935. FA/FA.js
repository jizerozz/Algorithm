var input = require("fs").readFileSync(0,"utf-8").toString().trim();

let x = Number(input);

function cal(x, seen = new Set(), limit = 1000) {
  if (limit === 0) return "NFA";

  let firstNum = Number(String(x)[0]);
  let xLength = String(x).length;
  let res = firstNum * xLength;

  if (res === x || seen.has(res)) {
    return "FA";
  }

  seen.add(x);
  return cal(res, seen, limit - 1);
}

console.log(cal(x));