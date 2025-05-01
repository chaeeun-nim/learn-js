"use strict";
(() => {
    /*
  ex01-18-05.js 복사
  switch문의 다양한 사용 예제
  
  */
    /*
  사칙연산 프로그램
  -----------------
  지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
  연산자는 +, -, * , / 만 입력 가능
  잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
  */
    let operator = "*"; // 연산자 변수 선언
    let n1 = 10; // 첫 번째 숫자
    let n2 = 20; // 두 번째 숫자
    // switch문을 사용한 사칙연산 구현
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
            console.log(n1 / n2);
            break;
    }
    /*
  요일 출력 프로그램
  -----------------
  1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
  1은 월요일, 2는 화요일, ... 7은 일요일
  1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
  */
    let day = 7; // 요일을 나타내는 숫자 (1-7)
    // switch문을 사용한 요일 출력
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
    }
    /*
  계절 출력 프로그램
  -----------------
  1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
  봄: 4월, 여름: 5 ~ 10, 가을: 11, 겨울: 12 ~ 3
  1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
  */
    let month = 3; // 월을 나타내는 숫자 (1-12)
    // if-else문을 사용한 계절 출력
    if (month >= 1 && month <= 12) {
        if (month === 4) {
            console.log("봄");
        }
        else if (month >= 5 && month <= 10) {
            console.log("여름");
        }
        else if (month === 11) {
            console.log("가을");
        }
        else {
            console.log("겨울");
        }
    }
    else {
        console.log("잘못된 입력");
    }
    // switch문을 사용한 계절 출력
    switch (month) {
        case 1:
            console.log("겨울");
            break;
        case 2:
            console.log("겨울");
            break;
        case 3:
            console.log("겨울");
            break;
        case 4:
            console.log("봄");
            break;
        case 5:
            console.log("여름");
            break;
        case 6:
            console.log("여름");
            break;
        case 7:
            console.log("여름");
            break;
        case 8:
            console.log("여름");
            break;
        case 9:
            console.log("여름");
            break;
        case 10:
            console.log("여름");
            break;
        case 11:
            console.log("가을");
            break;
        case 12:
            console.log("겨울");
            break;
        default:
            console.log("잘못된 입력입니다.");
    }
})();
