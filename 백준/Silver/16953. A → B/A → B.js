var input = require("fs").readFileSync(0, "utf-8").toString().trim().split(" ");

let first = Number(input[0]);
let end = Number(input[1]);

let ans = -1;

function dfs(n, count) {
  if (n > end) return;
  if (n === end) {
    ans = count;
    return;
  }

  dfs(n * 2, count + 1);
  dfs(n * 10 + 1, count + 1);
}

dfs(first, 1);

console.log(ans);