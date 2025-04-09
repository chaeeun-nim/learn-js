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
    arr[arr.length] = elem;
    arr.length += 1;
  },
};
arr.push("black");
arr.push("white");
printArr(arr);

// printArr("이것은 문자열");
