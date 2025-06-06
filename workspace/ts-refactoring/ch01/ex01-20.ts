(() => {
  /*
반복문 - while문
while문은 조건식이 참(true)인 동안 계속해서 코드를 실행하는 반복문입니다.
*/

  // 0부터 10까지 출력하는 예제
  let i = 0; // 초기값 설정
  while (i <= 10) {
    console.log(i);
    i++;
  }

  // 1부터 10까지의 모든 수의 합계를 계산하는 예제
  let sum = 0; // 합계를 저장할 변수 초기화
  i = 1; // 초기화: 1부터 시작
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(i); // 반복문 종료 후 i값 출력 (11이 출력됨)
  console.log(sum); // 1부터 10까지의 합계 출력 (55가 출력됨)
})();
