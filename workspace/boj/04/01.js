/*
!!! nums가 1개일 경우 배열이 아니라 숫자가 들어오기 때문에 주의해야 함

제목: 개수 세기
설명: 배열을 입력받고 v를 찾는 문제
제출: https://www.acmicpc.net/submit/10807

문제
총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 
둘째 줄에는 정수가 공백으로 구분되어져있다. 
셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 
입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

예제 입력 1
11
1 4 1 2 4 2 4 2 3 4 4
2
예제 출력 1
3

예제 입력 2
11
1 4 1 2 4 2 4 2 3 4 4
5
예제 출력 2
0

예제 입력 3
1
42
42
예제 출력 3
1
*/
function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data[0][1]);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 en 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {[]} 2차원 배열로 리턴하겠다!
 *
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }

  return result;
}
