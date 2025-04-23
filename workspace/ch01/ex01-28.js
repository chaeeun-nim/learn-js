/*
유사 배열 객체
*/

// 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다
 * @param {any[]} arr - 배열
 */
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

// const colorArry = ["orange", "yellow", "green"];
// colorArry.push("pizza");

// printArr(colorArry);

// 유사배열 객체
let arr = {
  length: 3,
  0: "orange",
  1: "red",
  2: "hamster",

  /**
   * 유사배열(객체)의 맨 끝에 지정한 elem 을 추가한다
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    // this[this.length] = elem;
    // this.length += 1;
    // 배열의 push메서드를 사용해보자!
    // var tmpArr = new Array();
    // tmpArr.push.call(this, elem);
    // TODO prototype배운 후에~
    // 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype 속성에 정의되어있다.
    Array.prototype.push.call(this, elem);
  },
};
arr.push("black");
arr.push("white");
printArr(arr);
console.log(arr);
console.log(arr.length);
// printArr("이것은 문자열");
