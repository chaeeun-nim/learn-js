/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

// window.name = "global"; // 브라우저가 가지고 있는 전역객체
// global.name = "global"; // global, Node.js가 가지고 있는 전역 객체

// 브라우저와 Node.js 모두 사용가능한 전역 객체
globalThis.name = "global"; // 브라우저가 가지고 있는 전역객체

const getPingName = function () {
  return this.name;
};

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};

const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

// 함수 호출하는 방법 1 - 일반 함수로 바로 호출 (this = window)
console.log(getPingName());

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName());
console.log(rara.age, rara.getName());

console.log(getPingName(), getPingName.call(baro));
console.log(baro.getName()); // this 는 바로핑
console.log(baro.getName(), baro.getName.apply(rara)); // this 는 라라핑
console.log(rara.getName(), rara.getName.apply(globalThis)); // this 는 글로벌~
