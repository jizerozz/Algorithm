const universityScore = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

var input = require("fs").readFileSync(0,"utf-8").toString().trim();
let mulScore = 0;
let totalScore = 0;
const scoreArray = input.split("\n");

scoreArray.forEach((item) => {
  const [subject, avgScore, grade] = item.split(" ");

  if (grade !== "P") {
    mulScore += Number(avgScore) * universityScore[grade];
    totalScore += Number(avgScore);
  }
});

console.log(mulScore / totalScore);