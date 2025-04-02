/*
do-while
do {
  반복할 코드
}while(조건);

일단 한번은 실행시킴
*/

let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 10);

console.log(sum);
