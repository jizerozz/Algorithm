var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let M = Number(input[0]) - 1;

let obj = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const parent = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ");
  obj[a].push(b);
  obj[b].push(a);
}

function dfs(node) {
  visited[node] = true;

  for (let n of obj[node]) {
    if (!visited[n]) {
      parent[n] = node;
      dfs(n);
    }
  }
}

dfs(1);

for (let i = 2; i <= N; i++) {
  console.log(parent[i]);
}
