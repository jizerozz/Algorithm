var input = require("fs")
  .readFileSync(0,"utf-8")
  .toString()
  .trim()
  .split("\n");

let virusCnt = 0;

const N = Number(input[0]);
const M = Number(input[1]);
const obj = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  obj[a].push(b);
  obj[b].push(a);
}

function findWorm(graph, v, visited) {
  visited[v] = true;

  for (let node of graph[v]) {
    if (!visited[node]) {
      virusCnt++;
      findWorm(graph, node, visited);
    }
  }
}

findWorm(obj, 1, visited);
console.log(virusCnt);
