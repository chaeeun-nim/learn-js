"use strict";
(() => {
    /*
  학생의 점수에 따라 학점을 계산하고 출력하는 프로그램입니다.
  if문을 사용하여 각 점수 구간에 맞는 학점을 출력합니다.
  */
    // 학생의 점수를 저장하는 변수 (0~100 사이의 정수)
    const score = 80;
    // 학점 계산 로직
    // 90점 이상 100점 이하: A학점
    // 80점 이상 90점 미만: B학점
    // 70점 이상 80점 미만: C학점
    // 60점 이상 70점 미만: D학점
    // 60점 미만: F학점
    function calc(num) {
        let result = "F";
        if (num >= 90 && num <= 100) {
            result = "A";
        }
        else if (num >= 80) {
            result = "B";
        }
        else if (num >= 70) {
            result = "C";
        }
        else if (num >= 60) {
            result = "D";
        }
        return console.log(`학점은 ${result}입니다.`);
    }
    calc(score);
})();
