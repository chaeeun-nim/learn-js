"use strict";
// 기본 타입
(() => {
    let str = "문자열";
    let age = 100;
    let done = true;
    let nullVal = null;
    let emptyVal = undefined;
    let todo = { title: "typescript 공부", done: false };
    let todoList = ["점박이 물범", "참물범"];
    let todoList2 = ["햄스터", "강아지", "물범"];
    // tuple : 길이가 고정되고, 각 요소의 타입이 정의된 타입
    let items = ["물범", 5];
    let userName = "Typescript";
    let userName2 = "Typescript";
    console.log(userName.toUpperCase());
    if (typeof userName2 === "string") {
        //이렇게 이프문으로 넣어주면 에러없이 더욱 안전하게 사용가능ㅋ
        console.log(userName2.toUpperCase());
    }
})();
