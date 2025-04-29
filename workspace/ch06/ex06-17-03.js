"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    function echo(msg) {
        //extends로 타입제어가능
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    // console.log(echo<boolean>(true)); //타입에러
    const str = echo("hello");
    const num = echo(123.456);
    console.log(str.toUpperCase(), num.toFixed(2));
    function echo2(msg) {
        return msg;
    }
    // echo2<number>(100); length속성이 없어서 안됨
    const str2 = echo2("hamsger");
    const num2 = echo2([10, 20]);
})();
