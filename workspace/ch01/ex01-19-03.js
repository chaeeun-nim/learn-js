/*
if문의 다양한 사용 예제
*/

/*
 지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
 */

const operator = "/";
const n1 = 1;
const n2 = 20;

switch (operator) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  case "*":
    console.log(n1 * n2);
    break;
  case "/":
    if (n1 == 0 || n2 == 0) {
      console.log("0은 나눌수 없습니다");
    } else {
      console.log(n1 / n2);
    }
    break;
  default:
    console.log("잘못된 출력입니다.");
    break;
}

/* 
1~7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일,...7은 일요일
1~7 사이의 숫자가 아닐 경우 "잘못된 입력"출력
*/

const day = 4;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 입력입니다.");
    break;
}
/* 
1~12 사이의 월을 받아서 계절을 출력하는 프로그램
봄 : 4월, 여름 : 5~10 , 가을 : 11, 겨울:12~3
1~12 사이의 숫자가 아닐경우 '잘못된 입력' 출력
*/

const month = 5;

switch (true) {
  case month == 4:
    console.log("봄");
    break;
  case month >= 5 && month <= 10:
    console.log("여름");
    break;
  case month == 11:
    console.log("가을");
    break;
  case month == 12 || (month <= 3 && month > 0):
    console.log("겨울");
    break;
  default:
    console.log("잘못된 입력입니다.");
    break;
}
