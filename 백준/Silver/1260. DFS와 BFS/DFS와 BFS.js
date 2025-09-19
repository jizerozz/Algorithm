var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ");
const obj = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  //인접 노드 탐색
  const [a, b] = input[i].split(" ").map(Number);
  obj[a].push(b);
  obj[b].push(a);
}

for (let i = 1; i <= N; i++) {
  //방문할 수 있는 정점이 여러 개인 경우 작은 번호부터 방문
  obj[i].sort((a, b) => a - b);
}

function dfs(graph, v, visited, answer) {
  visited[v] = true;
  answer.push(v);

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited, answer);
    }
  }
}

function bfs(startV, answer) {
  const visited = Array(N + 1).fill(false);
  const queue = [startV];
  visited[startV] = true;

  while (queue.length) {
    const current = queue.shift();
    answer.push(current);

    for (let nxt of obj[current]) {
      if (!visited[nxt]) {
        visited[nxt] = true;
        queue.push(nxt);
      }
    }
  }
}

const visited = Array.from({ length: N + 1 }).fill(false);
const dfsArray = [];
const bfsArray = [];

dfs(obj, Number(V), visited, dfsArray);
bfs(Number(V), bfsArray);

console.log(dfsArray.join(" "));
console.log(bfsArray.join(" "));
