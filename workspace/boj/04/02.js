/*
제목: X보다 작은 수
설명: 배열을 입력받고 X보다 작은 수를 찾는 문제
제출: https://www.acmicpc.net/submit/10871 

문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 
주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

예제 입력 1
10 5
1 10 4 9 2 3 8 5 7 6

예제 출력 1
1 4 2 3
*/

main();

function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  let ssam = "";
  for (let i = 0; i <= data.n; i++) {
    if (data.x > parseInt(data.num[i])) {
      ssam += data.num[i] + " ";
    }
  }
  console.log(ssam);
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
