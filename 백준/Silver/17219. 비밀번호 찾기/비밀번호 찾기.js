var input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const storedSites = Number(input[0].split(" ")[0]);
const findSites = Number(input[0].split(" ")[1]);

const siteInfo = new Map();
let answer = [];

for (let i = 1; i <= storedSites; i++) {
  const [domain, password] = input[i].split(" ");
  siteInfo.set(domain, password);
}

//찾으려는 사이트 비밀번호
for (let i = storedSites + 1; i <= storedSites + findSites; i++) {
  const domain = input[i];

  answer.push(siteInfo.get(domain));
}

console.log(answer.join("\n"));