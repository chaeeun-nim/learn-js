"use strict";
// 타입 가드 함수 작성
// ex06-26.ts 복사
(() => {
    const user1 = {
        name: "하루",
        age: 5,
        admin: false,
    };
    const user2 = {
        name: "나무",
        admin: true,
        level: 2,
    };
    const user3 = {
        name: "게스트",
    };
    helloUser(user1);
    helloUser(user2);
    helloUser(user3);
    // User 타입이나 AdminUser 타입을 받아서 각각의 타입에 맞는 코드를 실행하는 함수
    function helloUser(user) {
        if (isAdmin(user)) {
            console.log(`안녕하세요. 레벨 ${user.level} ${user.name} 관리자님.`);
        }
        else if (isGuest(user)) {
            console.log(`안녕하세요 ${user.name}님`);
        }
        else {
            console.log(`안녕하세요. ${user.age}살 ${user.name} 회원님.`);
        }
    }
    // 이함수가 참,거짓을 리턴하는데 참을 리턴할경우 user의 타입이  AdminUser가됨.
    function isAdmin(user) {
        return "admin" in user && user.admin === true;
    }
    function isGuest(user) {
        return !("age" in user) && !("level" in user) && user.name === "게스트";
    }
})();
