// 비동기 함수 - 콜백 방식
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 콜백 함수 사용
// ex08-07.ts 복사

(() => {
  function f1(resolve: (result: string) => void) {
    console.log("\t\t3.f1 호출됨.");
    const delay = Math.floor(Math.random() * 1000);

    console.log(`\t\t4. ${delay}ms 동안 작업중...`);
    setTimeout(() => {
      console.log("\t\t f1작업 완료우...", delay);
      resolve(delay.toString());
    }, delay);

    console.log("\t\t5.f1 리턴됨.");
  }

  function test() {
    console.log("\t2.test 호출됨.");
    f1((result) => {
      //콜백함수 전달
      console.log("\t8.f1이후에 호출함!!! " + result + "초나 걸렸음!!!!");
    });
    f1((result) => {
      //콜백함수 전달
      console.log("\t9.f1이후에 호출함!!! " + result + "초나 걸렸음!!!!");
    });
    console.log("\t6.test 리턴됨");
  }

  // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log("1.작업 시작.");
  test();
  console.log("7.작업 종료.");
})();
