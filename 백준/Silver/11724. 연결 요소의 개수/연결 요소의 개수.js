var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let cnt = 0;
const obj = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  obj[u].push(v);
  obj[v].push(u);
}

function dfs(graph, v, visited) {
  visited[v] = true;

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    cnt++;
    dfs(obj, i, visited);
  }
}

console.log(cnt);
