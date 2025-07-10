let cnt = 0;
var input = require("fs").readFileSync(0,"utf-8").toString().trim();
let fMoney = Number(input);

caculateSalary(fMoney);

function caculateSalary(number) {
  if (number == 0) return;

  if (number < 0) {
    cnt = -1;
    return;
  }

  if (number % 5 === 0) {
    cnt += number / 5;
    return;
  }

  cnt++;
  caculateSalary(number - 2);
}

console.log(cnt);