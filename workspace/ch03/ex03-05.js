/*
 * 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
 * ex03-04.js 복사
 */

/*
 * 프로토타입 체인을 이용한 상속 기능 구현
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};
HighSchool.prototype.avg = function () {
  return Math.round(this.sum() / 2);
};

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng) {
  HighSchool.call(this, kor, eng);
}

inherite(HighSchool, College);

// Child가 Parent를 상속 받는다.
function inherite(Parent, Child) {
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  Child.prototype = Object.create(parent.prototype);
  Child.prototype.constructor = Child;
}

College.prototype.grade = function () {
  let scroe = "A";
  if (this.avg() >= 90) {
    scroe = "A";
  } else if (this.avg() >= 80) {
    scroe = "B";
  } else if (this.avg() >= 70) {
    scroe = "C";
  } else if (this.avg() >= 60) {
    scroe = "D";
  } else {
    scroe = "F";
  }
  return scroe;
};

const c1 = new College(80, 99);
console.log(c1.sum()); //151
console.log(c1.avg()); //75.5
console.log(c1.grade()); //C

console.log(College.prototype);
