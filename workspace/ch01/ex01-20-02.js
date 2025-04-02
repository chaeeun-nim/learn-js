/*

*/

// 1부터 10까지의 홀수의 합계
let sum = 0;
let i = 1;

while (i <= 10) {
  if (i % 2 != 0) {
    sum += i;
  }
  i++;
}
console.log(`홀수의 합계 : ${sum}`);
sum = 0;
i = 1;
// 1부터 10까지의 짝수의 합계
while (i <= 10) {
  if (i % 2 == 0) {
    sum += i;
  }
  i++;
}
console.log(`짝수의 합계 : ${sum}`);
