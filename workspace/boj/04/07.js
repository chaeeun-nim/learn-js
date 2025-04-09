/*
제목: 과제 안 내신 분..?
설명: 과제 제출 기한이 지났습니다.
제출: https://www.acmicpc.net/submit/5597

문제
X대학 M교수님은 프로그래밍 수업을 맡고 있다. 
교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.
교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

입력
입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.

출력
출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.

예제 입력 1 
3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
예제 출력 1 
2
8

예제 입력 2 
9
30
6
12
10
20
21
11
7
5
28
4
18
29
17
19
27
13
16
26
14
23
22
15
3
1
24
25
예제 출력 2 
2
8
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  let student = data.flat(); // 입력값의 1차원 배열
  let thrity = []; // 1~30까지의 배열
  let a = []; // 콘솔로그 결과창

  for (let i = 1; i <= 30; i++) {
    thrity.push(i);
  }
  // console.log(student);
  // console.log(thrity);

  for (let i = 0; i < 30; i++) {
    if (!student.includes(thrity[i])) {
      a.push(thrity[i]);
    }
  }
  a.sort((a, b) => a - b);
  console.log(a[0]);
  console.log(a[1]);
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
