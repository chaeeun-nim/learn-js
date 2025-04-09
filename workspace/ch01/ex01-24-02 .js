/*
국어, 영어, 수학 점수
총점과 평균을 출력하는 프로그램
*/

// let ko = 100;
// let eng = 90;
// let math = 85;

// let sum = ko + eng + math;
// let avg = sum / 3;

// console.log("총점", sum);
// console.log("평균", avg);

// 객체로 만들기

const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // TODO this 는 score와 같음.
    // 객체의 메서드가 자신의 속성을 접근할때 this를 사용함.
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.log(score);
console.log("score 총점: " + score.sum());
console.log("score 평균: " + score.avg());
