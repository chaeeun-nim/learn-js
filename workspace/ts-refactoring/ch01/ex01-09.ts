/*
대입 연산자 종류:
= : 기본 대입 연산자
+= : 덧셈 후 대입 (a += b는 a = a + b와 동일)
-= : 뺄셈 후 대입 (a -= b는 a = a - b와 동일)
*= : 곱셈 후 대입 (a *= b는 a = a * b와 동일)
/= : 나눗셈 후 대입 (a /= b는 a = a / b와 동일)
%= : 나머지 연산 후 대입 (a %= b는 a = a % b와 동일)
**= : 거듭제곱 후 대입 (a **= b는 a = a ** b와 동일)
*/

(() => {
  // 변수 age를 선언하고 20으로 초기화
  let age = 20;
  // 변수 year를 선언하고 3 + 2의 결과인 5로 초기화
  let year = 3 + 2;
  // age와 year의 초기값 출력
  console.log("age :", age, "year :", year);
  // age에 year를 더한 값을 다시 age에 대입
  age = age + year;
  // 계산 과정: age = 20 + 5 = 25

  // 현재 age와 year의 값 출력
  console.log("age :", age, "year :", year);

  // += 연산자를 사용하여 age에 year를 더한 값을 다시 age에 대입
  // 계산 과정: age = 25 + 5 = 30
  age += year;
  // 연산 후 age의 값 출력
  console.log("age :", age, "year :", year);
})();
