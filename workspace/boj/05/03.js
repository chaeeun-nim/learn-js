/*
제목: 문자열
설명: 문...제
제출: https://www.acmicpc.net/submit/9086

문제
문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

입력
입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 
각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 
문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.

출력
각 테스트 케이스에 대해서 주어진 문자열의 첫 글자와 마지막 글자를 연속하여 출력한다.

예제 입력 1
3
ACDKJFOWIEGHE
O
AB

예제 출력 1
AE
OO
AB
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  for (let i = 1; i <= data[0]; i++) {
    if (data[i].length == 1) {
      console.log(data[i] + data[i]);
    } else {
      let a = data[i][0];
      let b = data[i].slice(data[i].length - 1, data[i].length);
      console.log(`${a}${b}`);
    }
  }
}
main();
function getData() {
  const fileData = require("fs").readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];

  for (let row of arr) {
    const rowArr = row.trim().split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }

  return result.length === 1 ? result[0] : result;
}
