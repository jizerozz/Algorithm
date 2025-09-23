var input = require("fs").readFileSync(0, "utf-8").toString().trim();

const cards = Array.from({ length: Number(input) }, (_, idx) => idx + 1);
let getCard = [];

function ThrowCard(arr) {
  if (arr.length === 0) return;

  let floorCard = arr.shift();
  getCard.push(floorCard);

  arr = arr.slice(1).concat(arr.slice(0, 1));

  ThrowCard(arr);
}

ThrowCard(cards);

console.log(getCard.join(" "));