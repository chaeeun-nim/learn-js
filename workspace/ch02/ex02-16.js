/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

// 브라우저와 Node.js 모두 사용가능한 전역 객체
globalThis.name = "global"; // 브라우저가 가지고 있는 전역객체

console.log(this);
const getPingName = () => {
  // 이렇게 하면 상위 스코프인 window객체가됨...
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
