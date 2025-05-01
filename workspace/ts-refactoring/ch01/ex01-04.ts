/*
명령문과 주석
이 파일은 JavaScript의 다양한 콘솔 출력 메서드를 보여주는 예제입니다.
각 메서드는 다른 목적과 스타일로 콘솔에 메시지를 출력합니다.
*/

(() => {
  const hello: string = "Hello";
  const world: string = "World!!";

  function print(a: string, b?: string): void {
    if (b !== undefined) {
      return console.log(a, b);
    } else {
      return console.log(a);
    }
  }
  print(hello);
  print(world);
  print(hello, world);

  function warn(a: string, b?: string): void {
    if (b !== undefined) {
      return console.warn(a, b);
    } else {
      return console.warn(a);
    }
  }

  warn(hello);
  warn(world);
  warn(hello, world);

  function error(a: string, b?: string): void {
    if (b !== undefined) {
      return console.error(a, b);
    } else {
      return console.error(a);
    }
  }

  error(hello);
  error(world);
  error(hello, world);
})();

// // 일반적인 로그 메시지 출력
// console.log("Hello World!!!");

// // 경고 메시지 출력 (노란색으로 표시)
// console.warn("Hello ");

// // 디버그 메시지 출력 (개발자 도구에서만 표시)
// console.debug("World!");

// // 일반적인 로그 메시지 출력
// console.log("Hello World!!");

// // 에러 메시지 출력 (빨간색으로 표시)
// console.error("Hello World!!!");
