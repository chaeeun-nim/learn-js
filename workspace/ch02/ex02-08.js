/*
  함수 생성 2 (표현식)
*/

// 표현식 방식의 함수 선언(기명함수 사용예)
var f = function factorial(n) {
  console.log(n + "호출됨!");
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

var f = function getFactiorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};
console.log(f(5));
// console.log(factorial(5));

// 로또 1등 당첨확률
// 45!/(45-6)!*6!

// function combination(n, r) {
//   // 멈추는 조건
//   if (r === 0 || r === n) return 1;

//   // 재귀 공식
//   return combination(n - 1, r - 1) + combination(n - 1, r);
// }
// console.log(combination(45, 6));
/*
  5!
  = 5 * 4 * 3 * 2 * 1
  = 5 * 4!
  = 5 * 4 * 3!
  = 5 * 4 * 3 * 2!
  = 5 * 4 * 3 * 2 * 1!
  
  n!
  = n * (n-1)!
*/
