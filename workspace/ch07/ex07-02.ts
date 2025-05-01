// 주요 내장 함수 - setTimeout

(() => {
  console.log("시작");
  const timerId = setTimeout(
    (a: number, b: number) => {
      console.log(a + b);
    },
    1000 * 3,
    10,
    20
  );

  console.log("종료");

  clearTimeout(timerId);
})();
