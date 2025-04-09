/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("for");

for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  console.log(i, elem);
}

let sum = 0;
let sumOdd = 0;
let sumEven = 0;

for (let item in arr) {
  let num = arr[item];
  sum += num; // 전체 배열의 합계
  if (num % 2 != 0) {
    // 홀수 추출
    sumOdd += num; // 홀수 합계
  } else {
    sumEven += num; // 짝수 합계
  }
}

console.log(`전체 배열의 합계 : ${sum}`);
console.log(`홀수의 합계 : ${sumOdd}`);
console.log(`짝수의 합계 : ${sumEven}`);

sum = 0;
sumOdd = 0;
sumEven = 0;

for (let elem of arr) {
  sum += elem; // 전체 배열의 합계
  if (elem % 2 === 0) {
    sumEven += elem; // 짝수 합계
  } else {
    sumOdd += elem; // 홀수 합계
  }
}
console.log(`전체 배열의 합계 : ${sum}`);
console.log(`홀수의 합계 : ${sumOdd}`);
console.log(`짝수의 합계 : ${sumEven}`);
