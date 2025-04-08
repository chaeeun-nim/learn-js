/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
*/

main();

function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  // const n1 = data.a;
  // const n2 = data.b;

  // const n3 = n1 * (n2 % 10); // 5
  // const n4 = n1 * (parseInt(n2 / 10) % 10); // 38 % 10 = 8
  // const n5 = n1 * parseInt(n2 / 100); // 3 * 100 = 300
  // console.log(n3);
  // console.log(n4);
  // console.log(n5);
  // console.log(n1*n2);

  const n1 = data.a;
  const n2 = String(data.b);

  const n3 = n2[0]; //3
  const n4 = n2[1]; //8
  const n5 = n2[2]; //5
  // TODO toString(); 학습
  console.log(n1 * n5);
  console.log(n1 * n4);
  console.log(n1 * n3);
  console.log(n1 * n2);
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

  const result = new Object();
  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]); // result.a = 10
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]); // result.b = 20

  return result;
}
