/*
score학점출력기

90이상 ~ 100이하 : "A출력"
80이상 ~ 90이하 : "B출력"
70이상 ~ 80이하 : "C출력"
60이상 ~ 70이하 : "D출력"
60미만이면 "F 출력"
*/

const score = 98;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
