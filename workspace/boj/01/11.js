/*
제목: 꼬마 정민
설명: 더 큰 수를 더하는 문제
제출: https://www.acmicpc.net/submit/11382

문제
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

입력
첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

출력
A+B+C의 값을 출력한다.

예제 입력 1
77 77 7777

예제 출력 1
7931
*/
main();

function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b + data.c);
}

/**
 * 한줄에 입력된 입력값을 추출하는 함수, 세 건의 데이터를 읽어서 순자를 변환후
 * 객체에 a,b 속성으로 저장하여 반환한다.
 * @return {object} - a,b, c 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  // 입력값 예시 : 10 20 30
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();
  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]); // result.a = 10
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]); // result.b = 20
  result.c = isNaN(fileData[2]) ? fileData[2] : parseInt(fileData[2]); // result.b = 30

  return result;
}
