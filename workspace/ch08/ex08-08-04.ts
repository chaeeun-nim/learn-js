// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사

(() => {
  function f1() {
    return new Promise<string>((resolve, reject) => {
      console.log("\t\t3.f1 호출됨.");
      const delay = Math.floor(Math.random() * 1000);
      console.log(`\t\t4. ${delay}ms 동안 작업중...`);

      setTimeout(() => {
        if (delay < 500) {
          resolve(delay + " 성공");
        } else {
          reject(delay + " 실패");
        }
      }, delay);

      console.log("\t\t5.f1 리턴됨.");
    });
  }

  function test() {
    console.log("\t2.test 호출됨.");
    f1()
      .then(f1)
      .then(f1)
      .then(f1)
      .then((result) => {
        //콜백함수 전달
        console.log("\t셋다 성공해야만 성공호출", result);
      })
      .catch((result) => {
        console.log("\t셋중 하나라도 작업이 실패했을때 호출됨", result);
      });
    console.log("\t6.test 리턴됨");
  }

  // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log("1.작업 시작.");
  test();
  console.log("7.작업 종료.");
})();
