/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

// 함수는 동적으로 생성된 프로퍼티를 가질 수 있다.
function add(x, y) {
  result = x + y;
  return result;
}

console.log(add(10, 20), add(50, 50));
// add(50, 60);
// console.log(add.result, add.result);

// console.log(add);
// console.dir(add);
console.log(result);
console.log(globalThis.result);
