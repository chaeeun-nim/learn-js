// 에러 핸들링 - 에러가 발생하는 경우
// ex08-01.ts 복사

// 에러 핸들링 - Error 객체

(() => {
  function f1() {
    const obj = undefined;
    // obj = fn(); // 타입에러 밠생
    const fn = new Function("x", "y", "return x+y"); // syntaxError 발생
    console.log(fn(10, 20));
  }

  function f2() {
    f1();
  }

  f2();
  console.log("프로그램종료");
})();
