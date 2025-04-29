"use strict";
// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사
(() => {
    const u1 = {
        name: "haru",
        age: 5,
    };
    const u2 = {
        name: "namu",
        age: 8,
    };
    const createUser = function (name, age) {
        return { name, age };
    };
    const u3 = createUser("유저핑", 7);
    console.log(u1.age, u2.name.toUpperCase());
    console.log(u3);
    function getAge(user) {
        return user.age;
    }
    console.log(getAge(u1));
})();
