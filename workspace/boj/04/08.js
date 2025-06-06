/*
제목: 나머지
설명: 배열을 활용하여 서로 다른 값의 개수를 찾는 문제
제출: https://www.acmicpc.net/submit/3052

TODO 다시한번 풀어보기

문제
두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

입력
첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 
이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

출력
첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

예제 입력 1 
1
2
3
4
5
6
7
8
9
10
예제 출력 1 - 모든 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이다.
10

예제 입력 2 
42
84
252
420
840
126
42
84
420
126
예제 출력 2 (모든 수를 42로 나눈 나머지는 0이다.)
1

예제 입력 3 
39
40
41
42
43
44
82
83
84
85


예제 출력 3 
6
*/

function main() {
  const data = getData();
  let result = [];
  let count = [];
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  for (let i = 0; i < data.length; i++) {
    result.push(data[i] % 42);
  }
  for (let i of result) {
    if (count.indexOf(i) === -1) {
      count.push(i);
    }
  }
  console.log(count.length);
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
