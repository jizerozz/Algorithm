var input = require("fs").readFileSync(0, "utf-8").toString().trim();
const num = Number(input);

const queue = [[num, 0]];
const visited = new Set();

visited.add(queue);

while (queue.length > 0) {
  const [current, count] = queue.shift();

  if (current === 1) {
    console.log(count);
    break;
  }

  if (current % 3 === 0 && !visited.has(current / 3)) {
    queue.push([current / 3, count + 1]);
    visited.add(current / 3);
  }

  if (current % 2 === 0 && !visited.has(current / 2)) {
    queue.push([current / 2, count + 1]);
    visited.add(current / 2);
  }

  if (!visited.has(current - 1)) {
    queue.push([current - 1, count + 1]);
    visited.add(current - 1);
  }
}