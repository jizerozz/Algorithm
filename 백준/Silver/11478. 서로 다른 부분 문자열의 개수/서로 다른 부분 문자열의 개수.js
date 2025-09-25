var input = require("fs").readFileSync(0,"utf-8").toString().trim().split("");
let s = new Set(input);

for (let i = 0; i < input.length; i++) {
  let str = "";
  for (let j = i; j < input.length; j++) {
    str += input[j];
    s.add(str);
  }
}

console.log(s.size);

//a
//ab
//aba
//abab
//ababc
//b
//ba
//bab
//babc
//abc
//bc
//c