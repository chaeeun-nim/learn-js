/*
제목: 최댓값
설명: 최댓값이 어디에 있는지 찾는 문제
제출: https://www.acmicpc.net/submit/2562

문제
9개의 서로 다른 자연수가 주어질 때, 
이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

예를 들어, 서로 다른 9개의 자연수
3, 29, 38, 12, 57, 74, 40, 85, 61
이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

입력
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 
주어지는 자연수는 100 보다 작다.

출력
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

예제 입력 1
3
29
38
12
57
74
40
85
61

예제 출력 1
85
8

예제 입력 2
10
20
30
40
50
60
70
80
90

예제 출력 2
90
9

예제 입력 3
99
10
20
30
40
50
60
70
80

예제 출력 3
99
1

예제 입력 4
10
20
30
40
99
50
60
70
80

예제 출력 4
99
5

예제 입력 5
10
20
30
40
50
60
70
80
99

예제 출력 5
99
9

예제 입력 6
50
60
70
80
90
10
20
30
40

예제 출력 6
90
5

예제 입력 7
9
8
7
6
5
4
3
2
1

예제 출력 7
9
1

예제 입력 8
1
2
3
4
5
6
7
8
9

예제 출력 8
9
9

예제 입력 9
45
23
78
12
56
89
34
67
21

예제 출력 9
89
6

예제 입력 10
11
22
33
44
55
66
77
88
99

예제 출력 10
99
9

예제 입력 11
98
76
54
32
10
87
65
43
21

예제 출력 11
98
1
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  let result = data[0][0];
  let resultC = 1;

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] >= result) {
      result = data[i][0];
      resultC = i + 1;
    } else {
      result = result;
      resultC = resultC;
    }
  }
  console.log(result);
  console.log(resultC);
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
