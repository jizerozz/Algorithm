var input = require("fs").readFileSync(0, 'utf-8').toString().trim();
const word = input.toLowerCase();
const alpha = {};

word.split("").forEach((item) => (alpha[item] = (alpha[item] || 0) + 1));

const maxfreq = Math.max(...Object.values(alpha));

const maxFreqChars = Object.entries(alpha).filter(
  ([key, value]) => value === maxfreq
);

console.log(maxFreqChars.length === 1 ? maxFreqChars[0][0].toUpperCase() : "?");