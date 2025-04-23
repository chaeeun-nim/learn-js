/*
ex02-15 복사
*/

globalThis.name = "global"; // 브라우저가 가지고 있는 전역객체

// 객체를 생성해서 반환해주는 함수

function Ping(name, age) {
  if (!(this instanceof Ping)) {
    return new Ping(name, age);
  }

  this.name = `${name}`;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}

const baro = new Ping("바로핑", 8);
const rara = new Ping("라라핑", 7);
const copyPing = new Ping("카피핑", 12);
const kkungPing = Ping("물범핑", 29);

// 함수 호출하는 방법 1 - 일반 함수로 바로 호출 (this = window)

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName());
console.log(rara.age, rara.getName());
console.log(kkungPing.age, kkungPing.getName());
console.log(copyPing.age, copyPing.getName());
console.log(baro);
// console.log(Ping());
