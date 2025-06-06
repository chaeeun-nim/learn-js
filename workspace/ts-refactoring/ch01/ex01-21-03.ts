(() => {
  /*
for문을 이용해서 구구단 작성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

  // 1. 3단 구구단 출력 (두 가지 방식으로 출력)
  // 첫 번째 방식: 문자열 연결 연산자 사용
  // 두 번째 방식: 템플릿 리터럴 사용
  for (let i = 1; i <= 9; i++) {
    const dan = 3;
    console.log(`${dan} * ${i} = ${dan * i}`);
  }

  /*
2단 부터 9단 까지 출력

출력 예시:
2 x 1 = 2
2 x 2 = 4
...
2 x 9 = 18

3 x 1 = 3
...
3 x 9 = 27

4 x 1 = 4
...
9 x 9 = 81
*/
  for (let dan = 2; dan <= 9; dan++) {
    console.log(`${dan}단 시작!!!!!!`);
    for (let i = 1; i <= 9; i++) {
      console.log(`${dan} * ${i} = ${dan * i}`);
    }
  }

  // 2. 2~9단 전체 구구단 출력
  // 바깥쪽 for문: 2단부터 9단까지 반복
  // 안쪽 for문: 각 단의 1~9까지 곱셈 결과 출력
  // 각 단 출력 후 빈 줄 추가

  /*
2단 부터 9단 까지 출력

출력 예시:
2 x 1 = 2  3 x 1 = 3  4 x 1 = 4 ... 9 x 1 = 9
2 x 2 = 4  3 x 2 = 6  ...
...
2 x 9 = 18 3 x 9 = 27 4 x 9 = 36 .. 9 x 9 = 81
*/
  // for (let i = 1; i <= 9; i++) {
  //   const text: string[] = [];
  //   for (let dan = 2; dan <= 9; dan++) {
  //     text.push(`${dan} x ${i} = ${dan * i}  `);
  //   }
  //   console.log(text);
  // }
  for (let i = 1; i <= 9; i++) {
    let text = "";
    for (let dan = 2; dan <= 9; dan++) {
      text += `${dan} x ${i} = ${dan * i} `.padEnd(12);
    }
    console.log(text);
  }

  // 바깥쪽 for문: 1~9까지의 곱하는 수 반복
  // 안쪽 for문: 2~9단까지의 결과를 한 줄에 출력
  // padEnd(12)를 사용하여 각 결과 사이에 일정한 간격 유지
})();
