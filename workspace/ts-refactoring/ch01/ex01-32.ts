(() => {
  /*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.

[실행 예시]
- doorLock('111111') -> 삐! 삐! 삐! 삐!
- doorLock('3242351234') -> 문이 열립니다.
- doorLock() -> 삐! 삐! 삐! 삐!
*/

  // 비밀번호를 매개변수로 받는 도어락 함수
  // password가 전달되지 않으면 빈 문자열('')이 기본값으로 설정됨
  function doorLock(num?: string): void {
    let password = "1234";
    if (!num) {
      console.log("삐! 삐! 삐! 삐!");
    } else {
      if (num?.length === 4) {
        if (num === "1234") {
          console.log("문이 열렸습니다");
        } else {
          console.log("삐! 삐! 삐! 삐!");
        }
      } else {
        let last = num?.slice(-4);
        if (last === "1234") {
          console.log("문이 열렸습니다");
        } else {
          console.log("삐! 삐! 삐! 삐!");
        }
      }
    }
  }

  // 테스트 케이스
  doorLock("111111"); // 잘못된 비밀번호
  doorLock("3242351234"); // 올바른 비밀번호 (뒤 4자리가 '1234')
  doorLock(); // 비밀번호 미입력
})();
