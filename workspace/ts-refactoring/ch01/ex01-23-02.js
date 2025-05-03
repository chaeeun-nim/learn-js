"use strict";
(() => {
    /*
  국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
  */
    // 변수 선언 및 초기화
    let userName = "차차핑"; // 학생 이름
    let kor = 100; // 국어 점수
    let eng = 90; // 영어 점수
    let math = 85; // 수학 점수
    // 총점과 평균 계산
    let sum = kor + eng + math; // 세 과목의 총점 계산
    let avg = sum / 3; // 평균 계산 (총점 / 과목 수)
    // 결과 출력
    console.log("총점", sum);
    console.log("평균", avg);
    const TestScore = {
        userName: "껑껑이",
        kor: 80,
        eng: 80,
        math: 80,
        sum() {
            return this.kor + this.eng + this.math;
        },
        avg() {
            return this.sum() / 3;
        },
    };
    // 객체를 사용한 총점과 평균 계산
    // 객체를 사용한 결과 출력
    console.log(`${TestScore.userName}의 총점은 ${TestScore.sum()}점이고, 평균은 ${TestScore.avg()}`);
})();
