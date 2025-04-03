/*
제목: A+B - 8
설명: A+B를 바로 위 문제보다 아름답게 출력하는 문제
제출: https://www.acmicpc.net/submit/11022

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
*/

let fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n"); // 일단 줄단위로 자르기..
const floor1 = fileData[0].split(" "); // 첫번째줄 데이터 통채로 추출
let t = parseInt(floor1[0]); // 첫 줄에 테스트케이스의 개수 T
let text = "";
let k = 0;

for (let i = 1; i <= t; i++) {
  k++;
  let floori = fileData[i].split(" "); // 첫번째줄 데이터 통채로 추출
  let a = parseInt(floori[0]);
  let b = parseInt(floori[1]);
  text += `Case #${k}: ${a} + ${b} = ${a + b}` + "\n";
}

console.log(text);
