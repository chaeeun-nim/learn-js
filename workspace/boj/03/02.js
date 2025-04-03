/*
제목: A+B - 3
설명: A+B를 여러 번 출력하는 문제
제출: https://www.acmicpc.net/submit/10950

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
*/

let fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n"); // 일단 줄단위로 자르기..

const now = fileData[0].split(" "); // 첫번째줄 데이터 통채로 추출
let first = parseInt(now[0]); // 첫번째줄 첫번째 숫자

for(let i = 1; i <= first; i++){
  let lines= fileData[i].split(" ");
  let k = parseInt(lines[0]);
  let j = parseInt(lines[1]);
  console.log(k+j);
}

