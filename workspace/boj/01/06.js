/*
제목: 사칙연산
설명: 모든 연산 문제
제출: https://www.acmicpc.net/submit/10869

문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

예제 입력 1
7 3

예제 출력 1
10
4
21
2
1
*/

main();

function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
  console.log(data.a - data.b);
  console.log(data.a * data.b);
  console.log(parseInt(data.a / data.b));
  console.log(data.a % data.b);
}

/**
 * 한줄에 입력된 입력값을 추출하는 함수, 두 건의 데이터를 읽어서 순자를 변환후
 * 객체에 a,b 속성으로 저장하여 반환한다.
 * @return {object} - a,b 입력값이 저장된 객체
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
