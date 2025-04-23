/**
 *
 * @param {number} kor
 * @param {number} eng
 * @param {number} math
 */
/*
const Score = function (kor, eng, math) {
  this.kor = kor;
  this.eng = eng;
  this.math = math;
  this.sum = () => {
    return this.kor + this.eng + this.math;
  };
  this.avg = () => {
    return (this.kor + this.eng + this.math) / arguments.length;
  };
};
 */

const Score = function (kor, eng, math) {
  // TODO Closure단원 실행이 완료된 함수의 지역변수가 참조가능한 상태로 유지되는 현상
  // this = {}
  this.kor = kor;
  this.eng = eng;
  this.math = math;

  this.sum = function () {
    return this.kor + this.eng + this.math;
  };
  this.avg = function () {
    return this.sum() / 3;
  };
};

// 바로핑은 점수가 각각 100, 90, 80이다
const baro = new Score(100, 90, 80);
// 라라핑은 점수가 각각 90, 80, 60이다
const rara = new Score(90, 80, 60);

// 두사람의 총점과 평균을 출력하세요

console.log(baro.sum(), baro.avg());
console.log(rara.sum(), rara.avg());

// 전원 수학 점수를 10점 올린 후 총점과 평균을 출력하세요
baro.math += 10;
rara.math += 10;

console.log(baro.sum(), baro.avg());
console.log(rara.sum(), rara.avg());
