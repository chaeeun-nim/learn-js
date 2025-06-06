(() => {
  /*
연산자 우선순위
1. 괄호 ()
2. 산술 연산자 (*, /, %, +, -)
3. 비교 연산자 (>, <, >=, <=, ==, ===, !=, !==)
4. 논리 연산자 (&&, ||)
*/

  // 괄호 우선순위 예제1
  let result = 5 + 3 * 2; // 3 * 2가 먼저 계산되어 5 + 6 = 11
  console.log(result);

  let comparison = (5 + 3) * 2; // 괄호 안이 먼저 계산되어 8 * 2 = 16
  console.log(comparison);

  // 산술 연산자와 비교 연산자의 우선순위 예제
  // 산술 연산이 비교 연산보다 우선
  const comparison2 = 5 + 3 > 6 * 2; // 8 > 12 => false
  console.log(comparison2);

  // 논리 연산자 우선순위 예제
  // 1. 괄호 안의 산술 연산: (5 + 3) = 8, (6 * 2) = 12, (3 * 4) = 12, (5 + 10) = 15
  // 2. 괄호 안의 비교 연산: 8 > 12 = false, 12 < 15 = true
  // 3. 논리 연산: false || true = true
  const comparison3 = 5 + 3 > 6 * 2 || 3 * 4 < 5 + 10;
  console.log(comparison3);
})();
