(() => {
  /*
반복문 - for문

for (초기화; 조건식; 증감식) {
  반복할 구문1;
  반복할 구문2;
}
*/

  // 1부터 10까지의 모든 수의 합계를 출력

  // for문을 사용하여 1부터 10까지의 합계 계산
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }

  console.log("합계", sum); // 최종 합계 출력

  // 1부터 몇까지 더하면 10000이 넘을까? (while)
  sum = 0;
  let count = 1;
  for (let i = 0; sum < 10000; i++) {
    sum += i;
    count = i;
  }

  console.log(--count, sum); // 10000을 넘기기 직전의 숫자와 합계 출력

  // 1부터 10까지의 숫자를 순차적으로 출력
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  // 1부터 10까지 홀수의 합계 출력 (1, 3, 5, 7, 9의 합)
  sum = 0;
  for (let i = 1; i <= 10; i += 2) {
    sum += i;
  }
  console.log("홀수 합계" + sum);

  // 1부터 10까지 짝수의 합계 출력 (2, 4, 6, 8, 10의 합)
  sum = 0;
  for (let i = 0; i <= 10; i += 2) {
    sum += i;
  }
  console.log("짝수 합계" + sum);
})();
