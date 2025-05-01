"use strict";
(() => {
    /*
  switch문을 사용하여 학점을 출력하세요.
  */
    // 점수 변수 선언
    const score = 30;
    const scr = Math.floor(score / 10);
    // 점수를 10으로 나누고 정수 부분만 추출하는 방법
    // 예시:
    // 67/10 -> parseInt(6.7) -> 6
    // 36.6/10 -> parseInt(3.66) -> 3
    // 99/10 -> parseInt(9.9) -> 9
    // switch문을 사용하여 학점 계산
    // 90점 이상: A
    // 80점 이상: B
    // 70점 이상: C
    // 60점 이상: D
    // 60점 미만: F
    switch (scr) {
        case 10:
            console.log("A");
            break;
        case 9:
            console.log("A");
            break;
        case 8:
            console.log("B");
            break;
        case 7:
            console.log("C");
            break;
        case 6:
            console.log("D");
            break;
        default:
            console.log("F");
    }
})();
