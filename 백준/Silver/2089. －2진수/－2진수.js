var input = require("fs").readFileSync(0,"utf-8").toString().trim();

function toNegabinary(n) {
  if (n === 0n) return "0";

  let result = "";

  const BASE = -2n;

  while (n !== 0n) {
    let r = n % BASE;
    n = n / BASE;

    if (r < 0n) {
      r += -BASE;
      n += 1n;
    }

    result = r.toString() + result;
  }

  return result;
}

const answer = toNegabinary(BigInt(input));

console.log(answer);