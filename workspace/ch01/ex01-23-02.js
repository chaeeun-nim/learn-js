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

const score = new Object();
score.ko = 100;
score.eng = 90;
score.math = 85;

score.sum = score.ko + score.eng + score.math;
score.avg = score.sum / 3;

console.log("score 총점: " + score.sum);
console.log("score 평균: " + score.avg);
