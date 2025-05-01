"use strict";
(() => {
    /*
  if문의 다양한 사용 예제
  이 파일은 if문을 사용한 다양한 예제들을 보여줍니다.
  */
    /*
  지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
  연산자는 +, -, * , / 만 입력 가능
  잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
  */
    // 기본 변수 설정
    let operator = "+"; // 연산자 변수
    let n1 = 10; // 첫 번째 숫자
    let n2 = 20; // 두 번째 숫자
    // 기본 if-else 문을 사용한 사칙연산 구현
    if (operator === "+") {
        console.log(n1 + n2);
    }
    else if (operator === "-") {
        console.log(n1 - n2);
    }
    else if (operator === "*") {
        console.log(n1 * n2);
    }
    else if (operator === "/") {
        console.log(n1 / n2);
    }
    /*
  1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
  1은 월요일, 2는 화요일, ... 7은 일요일
  1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
  */
    let day = 7; // 요일을 나타내는 숫자 (1-7)
    // if-else 문을 사용한 요일 출력
    if (day === 1) {
        console.log("월요일");
    }
    else if (day === 2) {
        console.log("화요일");
    }
    else if (day === 3) {
        console.log("수요일");
    }
    else if (day === 4) {
        console.log("목요일");
    }
    else if (day === 5) {
        console.log("금요일");
    }
    else if (day === 6) {
        console.log("토요일");
    }
    else if (day === 7) {
        console.log("일요일");
    }
    else {
        console.log("잘못된 입력");
    }
})();
