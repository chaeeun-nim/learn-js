/*
제목: 최소, 최대
설명: 최솟값과 최댓값을 찾는 문제
제출: 

문제
N개의 정수가 주어진다. 
이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7

예제 출력 1
7 35
*/

main();
function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  let max = parseInt(data.num[0]);
  let min = parseInt(data.num[0]);

  for (let i = 1; i < data.n; i++) {
    if (parseInt(data.num[i]) >= max) {
      max = parseInt(data.num[i]);
    }
    if (parseInt(data.num[i]) <= min) {
      min = parseInt(data.num[i]);
    }
  }
  console.log(min, max);
}

/**
 * 두줄에 입력된 두개의 입력값을 추출하는 함수, 두 건의 데이터를 읽어서 순자를 변환후
 * 객체에 a,b 속성으로 저장하여 반환한다.
 * @return {object} - a,b 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  // 입력값 예시 : 10 20
  const fileData = fs.readFileSync(0).toString().trim().split("\n");
  const first = fileData[0].toString().trim().split(" ");

  const result = new Object();
  result.n = first[0];
  result.x = first[1];
  result.num = fileData[1].toString().trim().split(" ");
  return result;
}
