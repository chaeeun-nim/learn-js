"use strict";
(() => {
    /*
  매개변수와 반환값이 있는 함수와 없는 함수
  */
    // TODO hoisting 단원에서 다시 설명
    add(100, 10); // 110
    console.log(add(100, 20));
    add100(10); // 110
    add100(20); // 120
    sum(10, 20); // 30
    sum(30, 40); // 70
    /**
     * 10과 100의 합계를 콘솔에 출력하는 함수
     * @returns {void} 반환값 없음
     */
    function add100(num) {
        console.log(num + 100);
    }
    /**
     * 두 숫자의 합계를 콘솔에 출력하는 함수
     * @param {number} n1 - 첫 번째 숫자
     * @param {number} n2 - 두 번째 숫자
     * @returns {void} 반환값 없음
     */
    function sum(num1, num2) {
        console.log(num1 + num2);
    }
    /**
     * 두 숫자의 합계를 반환하는 함수
     * @param {number} n1 - 첫 번째 숫자
     * @param {number} n2 - 두 번째 숫자
     * @returns {number} 두 숫자의 합계
     */
    function add(n1, n2) {
        return n1 + n2;
    }
})();
