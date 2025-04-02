/*
score학점출력기

90이상 ~ 100이하 : "A출력"
80이상 ~ 90이하 : "B출력"
70이상 ~ 80이하 : "C출력"
60이상 ~ 70이하 : "D출력"
60미만이면 "F 출력"
*/

const score = 98;

switch (parseInt(score / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
