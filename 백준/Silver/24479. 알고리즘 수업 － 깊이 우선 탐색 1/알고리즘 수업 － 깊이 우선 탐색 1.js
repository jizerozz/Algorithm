var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const obj = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
let visitedRank = Array(N + 1).fill(0);
let cnt = 1;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  obj[a].push(b);
  obj[b].push(a);
}

for (let i = 1; i <= N; i++) {
  obj[i].sort((a, b) => a - b);
}

function dfs(graph, v, visited) {
  visited[v] = true;
  visitedRank[v] = cnt++;

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(obj, node, visited);
    }
  }
}

dfs(obj, Number(R), visited);
visitedRank.shift();
console.log(visitedRank.join("\n"));