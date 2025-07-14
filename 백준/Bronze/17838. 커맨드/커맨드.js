const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const s = input[i].trim();
  if (s.length !== 7) {
    console.log(0);
    continue;
  }

  const X = s[0];
  const Y = s[2];

  const isPattern = (
    s[0] === X &&
    s[1] === X &&
    s[2] === Y &&
    s[3] === Y &&
    s[4] === X &&
    s[5] === Y &&
    s[6] === Y &&
    X !== Y
  );

  console.log(isPattern ? 1 : 0);
}