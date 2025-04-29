"use strict";
// // 함수에 타입 지정
(() => {
    function getCount(count) {
        // return count; // 리턴 값이 타입이 안맞아서 컴파일 에러
        return "Count: " + count;
    }
    let result /* : string */ = getCount(20);
    //result에는 꼭 지정하지 않아도되긴함. => typescript의 타입추론 기능으로 가능
    // result = getCount("20"); // 매개변수를 스트링으로 넣었더니, 컴파일에러
    console.log(result);
})();
