/*
기본 함수

함수형식

function 함수명(매개변수1, 매개변수 2, ...){
    실행할 구문1;
    실행할 구문2;
    ...
    return 반환값;
}

함수사용(호출)
var result = 함수명(인자값1, 인자값2, ...);
*/

console.log("Hello Funtion!");

function sayHello(e) {
  console.log("안녕 Funtion!" + e);
}
//함수호출
sayHello();

for (let i = 0; i < 100; i++) {
  sayHello(i);
}
