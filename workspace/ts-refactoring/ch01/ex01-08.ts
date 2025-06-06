/*
산술 연산자 +, -, *, /, %, **
+ : 덧셈
- : 뺄셈
* : 곱셈
/ : 나눗셈
% : 나머지
** : 거듭제곱
*/
(() => {
  const a = 1;
  const b = 4;
  const c = 5;

  function calc(a: number, b: number, c: number) {
    // 연산자 우선순위: 곱셈이 덧셈보다 우선순위가 높음
    console.log(a + b * c); // 1 + 20 = 21

    // 괄호를 사용하여 연산 우선순위 변경
    console.log((a + b) * c); // 5 * 5 = 25
  }
  calc(a, b, c);

  function calc2(a: number, b: number) {
    // 나눗셈은 소수점까지 계산
    console.log(a / b); // 2.25

    // 나머지 연산: 9를 4로 나눈 나머지
    console.log(a % b); // 1
  }

  calc2(a, b);

  // 거듭제곱 연산: 2의 3승
  var age: number = 2 ** 3; // 2 * 2 * 2 = 8
  // 문자열 연결 연산자 사용
  console.log("나이는 " + age + "살 입니다.");
  // 템플릿 리터럴 사용
  console.log(`나이는 ${age}짤 입니다.`);
})();
