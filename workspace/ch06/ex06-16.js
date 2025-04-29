"use strict";
// 인터페이스 선언 병합
// ex06-15.ts 복사
// 인터페이스 다중 상속
(() => {
    const todo = {
        id: 1,
        title: "할일",
        content: "할일내용",
        done: false,
        creatAt: new Date(),
    };
    console.log(todo);
})();
