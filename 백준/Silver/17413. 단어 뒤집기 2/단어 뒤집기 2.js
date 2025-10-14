var input = require("fs").readFileSync(0, "utf-8").toString().trim();
let answer = [];

const parts = input.split(/(<[^>]*>)/);
answer = parts.map((part) => {
  if (part.startsWith("<") && part.endsWith(">")) return part;

  //단어 사이 공백이 있는 경우
  if (part.includes(" "))
    return part
      .split(" ")
      .map((item) => item.split("").reverse().join(""))
      .join(" ");

  return part.split("").reverse().join("");
});

console.log(answer.join(""));