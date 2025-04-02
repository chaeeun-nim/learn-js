/*
첫날에 쌀 한톨
둘쨰날에 쌀 두톨
셋째날에 쌀 네톨...

매일 전날의 두배가 되는 쌀알을 받을때, 며칠을 모아야 쌀알을
천만개 모을 수 있을까요?
*/

let day = 1; // 쌀알을 받은 날
let count = 1; // 쌀알을 하루에 받은 갯수
let sum = 0; // 전체 쌀알 갯수

while (sum < 1000_0000) {
  sum += count;
  day++;
  count = count * 2;
}
let money = sum * 0.036;
console.log(
  `${--day}일동안 받았더니, 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받겠군.
  지금까지 ${money}원 벌었다!`
);
day = 1; // 쌀알을 받은 날
count = 1; // 쌀알을 하루에 받은 갯수
sum = 0; // 전체 쌀알 갯수

while (day <= 24) {
  sum += count;
  day++;
  count = count * 2;
}
money = sum * 0.036;
console.log(
  `${--day}일동안 받았더니, 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받겠군.
  지금까지 ${money}원 벌었다!`
);
