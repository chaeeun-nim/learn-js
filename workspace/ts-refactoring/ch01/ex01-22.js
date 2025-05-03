"use strict";
(() => {
    /*
  반복문 - break, continue
  */
    // n ~ m 까지의 정수중에서 가장 작은 짝수를 찾아서 출력하세요.
    // n < m
    // 시작값과 끝값을 정의
    const n = 1;
    const m = 10;
    // 첫 번째 문제: 가장 작은 짝수 찾기
    // n부터 m까지 순회하면서 첫 번째 짝수를 찾으면 출력하고 반복문 종료
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            console.log(i);
            break;
        }
    }
    // 두 번째 문제: 홀수만 출력하기
    // n부터 m까지 모든 홀수를 출력
    for (let i = n; i <= m; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    // 세 번째 문제: 홀수와 짝수를 구분해서 출력
    // n부터 m까지 모든 숫자를 순회하면서 홀수와 짝수를 구분하여 출력
    let even = '짝수는? : ';
    let odd = '홀수는? : ';
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            even += i;
        }
        else {
            odd += i;
        }
    }
    console.log(even);
    console.log(odd);
    // 굉장히 많고
    // 복잡한
    // 코드가 
    // 있을 수 
    // 있습니다.
})();
