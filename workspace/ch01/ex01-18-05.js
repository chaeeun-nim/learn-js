/*
if문의 다양한 사용 예제
*/

/*
 지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
 */

const operator = "+";
const n1 = 10;
const n2 = 20;

if (operator === "+") {
  console.log(n1 + n2);
} else if (operator === "-") {
  console.log(n1 + n2);
} else if (operator === "*") {
  console.log(n1 - n2);
} else if (operator === "/") {
  console.log(n1 / n2);
} else {
  console.log("잘못된 입력");
}

/* 
1~7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일,...7은 일요일
1~7 사이의 숫자가 아닐 경우 "잘못된 입력"출력
*/

const day = 4;

if (day == 1) {
  console.log("월요일");
} else if (day === 2) {
  console.log("화요일");
} else if (day === 3) {
  console.log("수요일");
} else if (day === 4) {
  console.log("목요일");
} else if (day === 5) {
  console.log("금요일");
} else if (day === 6) {
  console.log("토요일");
} else if (day === 7) {
  console.log("일요일");
} else {
  console.log("잘못된 입력");
}

/* 
1~12 사이의 월을 받아서 계절을 출력하는 프로그램
봄 : 4월, 여름 : 5~10 , 가을 : 11, 겨울:12~3
1~12 사이의 숫자가 아닐경우 '잘못된 입력' 출력
*/

const month = 1;

if (month == 4) {
  console.log("따뜻한 봄 입니다.");
} else if (month >= 5 && month <= 10) {
  console.log("맑은 여름 입니다.");
} else if (month === 11) {
  console.log("배부른 가을 입니다.");
} else if (month === 12 || (month <= 3 && month > 0)) {
  console.log("신나는 겨울 입니다.");
} else {
  console.log("잘못된 입력 입니다.");
}
