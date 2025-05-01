"use strict";
(() => {
    /*
  for문을 사용한 다양한 별찍기 패턴 연습
  */
    /*
     *
     **
     ***
     ****
     *****
     */
    const lines = 5; // 전체 줄 수를 정의
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let k = 1; k <= i; k++) {
            star += "*";
        }
        console.log(star);
    }
    console.log("--------------------------");
    /*
     *****
     ****
     ***
     **
     *
     */
    // 역순 왼쪽 정렬 삼각형 출력 (하트 사용)
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let k = 1; k <= 5 - i + 1; k++) {
            star += "*";
        }
        console.log(star);
    }
    console.log("--------------------------");
    /*
         *
        **
       ***
      ****
     *****
     */
    // 오른쪽 정렬 삼각형 출력
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let j = 1; j <= 5 - i; j++) {
            star += " ";
        }
        for (let k = 1; k <= i; k++) {
            star += "*";
        }
        console.log(star);
    }
    console.log("--------------------------");
    /*
        *     1개 4
       ***    3개 3
      *****   5개 2
      ******* 7개 1
     ********* 9개 0
     */
    // 피라미드 출력
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let k = 1; k <= 5 - i; k++) {
            star += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            star += "*";
        }
        console.log(star);
    }
    console.log("--------------------------");
    /*
         *
        ***
       *****
      *******
     *********
      *******
       *****
        ***
         *
     */
    // 다이아몬드 출력
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let k = 1; k <= 5 - i; k++) {
            star += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            star += "*";
        }
        console.log(star);
    }
    for (let i = 1; i <= 5; i++) {
        let star = "";
        for (let k = 1; k <= i; k++) {
            star += " ";
        }
        for (let j = 1; j <= 10 - 2 * i - 1; j++) {
            star += "*";
        }
        console.log(star);
    }
})();
