/*
반복문 - for문
*/

// 반복문을 이용해서 1부터 10까지 합계 출력
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   sum += i;
//   i++;
// }

for (let i = 1, sum = 0; i <= 10; i++) {
  sum += i;
  console.log(i, sum);
}

// 반복문을 이용해서 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1부터 10까지 홀수의 합계
let sum = 0;
for (let i = 1; i <= 10; i += 2) {
  sum += i;
}
console.log("10까지의 홀수의 합계 : " + sum);

// 1부터 10까지 짝수의 합계
sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log("10까지의 짝수의 합계 : " + sum);
// for (let i = 1, evenSum = 0, oddSum = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
//   console.log(i + "까지의 짝수의 합계 : " + evenSum);
//   console.log(i + "까지의 홀수의 합계 : " + oddSum);
// }
