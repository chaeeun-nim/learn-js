(() => {
  /*
if-else문을 사용하여 학점을 출력하세요.
*/

  const score = 40; // 점수 변수 선언 및 초기화

  // 첫 번째 방법: 중첩된 if-else문을 사용한 학점 계산
  // score가 90 이상 100 이하이면 "A" 출력
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
  // 90 미만
  // score가 80 이상 90 미만이면 "B" 출력

  // 80 미만
  // score가 70 이상 80 미만이면 "C" 출력

  // 70 미만
  // score가 60 이상 70 미만이면 "D" 출력
})();
