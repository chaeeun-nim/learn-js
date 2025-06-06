/*
다음과 같은 a, b가 주어졌을 때 +,-,*,/,%,** 산술 연산자를 사용하여 계산된 결과를 출력하세요.

출력 결과:
13
7
30
3.333333333333335
1
1000
*/

(() => {
  var a: number = 10;
  var b: number = 5;

  function calc(a: number, b: number): void {
    // 덧셈 연산자 (+)
    console.log(a + b); // 10 + 5 = 15

    // 뺄셈 연산자 (-)
    console.log(a - b); // 10 - 5 = 5

    // 곱셈 연산자 (*)
    console.log(a * b); // 10 * 5 = 50

    // 나눗셈 연산자 (/)
    console.log(a / b); // 10 / 5 = 2

    // 나머지 연산자 (%)
    console.log(a % b); // 10 % 5 = 0

    // 거듭제곱 연산자 (**)
    console.log(a ** b); // 10 ^ 5 = 100000
  }

  calc(a, b);
})();
