/*
제목: 알람 시계
설명: 시간 계산 문제
제출: https://www.acmicpc.net/submit/2884

문제
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
이런 상근이를 불쌍하게 보던 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "45분 일찍 알람 설정하기"이다.
이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 
어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 
이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.

입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 
시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

출력
첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

예제 입력 1
10 10
예제 출력 1
9 25

예제 입력 2
0 30
예제 출력 2
23 45

예제 입력 3
23 40
예제 출력 3
22 55

예제 입력 3
12 40
예제 출력 3
11 55
*/
/*
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

const time = a * 60;
const min = b;
const allTime = time + min;

function alramTime() {
  if (allTime >= 45) {
    const alramT = (allTime - 45 - ((allTime - 45) % 60)) / 60;
    const alramM = (allTime - 45) % 60;
    console.log(alramT, alramM);
  } else if (allTime < 45) {
    const allTime = time + min + 24 * 60;
    const alramT = (allTime - 45 - ((allTime - 45) % 60)) / 60;
    const alramM = (allTime - 45) % 60;
    console.log(alramT, alramM);
  }
}
alramTime();
 */

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  let h = data.a;
  let m = data.b;

  if (m < 45) {
    h--;
    if (h < 0) {
      h += 24;
    }
    m += 60;
  }

  m -= 45;
  console.log(h, m);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 한 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  // 입력값 예시 : 10 20
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();
  result.a = parseInt(fileData[0]); // result.a = 10
  result.b = parseInt(fileData[1]); // result.b = 20
  return result;
}
