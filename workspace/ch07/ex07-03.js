"use strict";
// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사
(() => {
    console.log("시작");
    const timerId = setInterval((a, b) => {
        console.log("3초후에 실행됩니다." + a + b, new Date());
    }, 1000 * 3, 10, 20);
    console.log("종료");
    // clearInterval(timerId);
})();
