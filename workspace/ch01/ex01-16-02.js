/*
score학점출력기

90이상 ~ 100이하 : "A출력"
80이상 ~ 90이하 : "B출력"
70이상 ~ 80이하 : "C출력"
60이상 ~ 70이하 : "D출력"
60미만이면 "F 출력"
*/

const score = 100;

if (score >= 90 && score <= 100) {
  console.log("A");
}
if (score >= 80 && score < 90) {
  console.log("B");
}
if (score >= 70 && score < 80) {
  console.log("C");
}
if (score >= 60 && score < 70) {
  console.log("D");
}
if (score < 60) {
  console.log("F");
}
