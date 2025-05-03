"use strict";
(() => {
    /*
  반환값이 있는 함수 - 토스터
  */
    /**
     * 주어진 시간동안 빵을 구워서 토스트를 만드는 함수
     * @param {number} time - 토스트를 굽는 시간(초)
     * @param {string} bread - 빵의 종류
     * @returns {string} 구워진 토스트에 대한 설명 문자열
     * @example
     * toaster(40, '우유 식빵') // returns '40초 동안 구워진 우유 식빵'
     */
    function toaster(num, bread) {
        return `${num}초 동안 구워진 ${bread}`;
    }
    // 실행 예시 1: 모든 매개변수 전달
    const toast = toaster(40, "옥수수 식빵");
    console.log(toast);
    // '40초 동안 구워진 우유 식빵'
    // 실행 예시 2: bread 매개변수 생략 - undefined로 처리됨
    console.log(toaster(50)); // 타입스크립트에서는 에러(함수생성시 타입지정) ?: 이
})();
