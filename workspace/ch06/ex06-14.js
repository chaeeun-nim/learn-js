"use strict";
// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사
(() => {
    const todo1 = {
        title: "할일1",
        content: "내용1",
    };
    console.log("등록", todo1);
    const todo2 = {
        id: 2,
        title: "할일2",
        content: "내용2",
        done: false,
    };
    console.log("할일 상세 조회", todo2);
    const todo3 = {
        id: 3,
        title: "햄스터",
        content: "햄스터밥주기",
        done: true,
        creatAt: new Date(),
        updatedAt: new Date(),
    };
    console.log(todo3);
})();
