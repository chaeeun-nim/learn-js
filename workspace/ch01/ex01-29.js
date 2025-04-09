/*
2차원 배열
*/

let numbers = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
];

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[0][2]);
// console.log(numbers[1][2]);
let sum = 0;

for (let row of numbers) {
  for (let num of row) {
    sum += num;
  }
}
console.log(sum);
