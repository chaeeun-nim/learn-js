/*
제목: 아스키 코드
설명: 데이터는 결국 0과 1일 텐데 문자를 어떻게 만드는 걸까요? 아스키 코드에 대해 알아봅시다.
제출: https://www.acmicpc.net/submit/11654

문제
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

입력
알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

출력
입력으로 주어진 글자의 아스키 코드 값을 출력한다.

예제 입력 1
A
예제 출력 1
65

예제 입력 2
C
예제 출력 2
67

예제 입력 3
0
예제 출력 3
48

예제 입력 4
9
예제 출력 4
57

예제 입력 5
a
예제 출력 5
97

예제 입력 6
z
예제 출력 6
122
*/

function main() {
  const data = getData().toString();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  let a = data.charCodeAt();
  console.log(a);
}
main();
function getData() {
  const fileData = require("fs").readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];

  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }

  return result.length === 1 ? result[0] : result;
}
