/*
변수 선언 방법
var - 전통적인 변수 선언 방식
let - 블록 스코프 변수 선언
const - 상수 선언
*/

(() => {
  // 기본 변수 선언 및 초기화
  var a: number = 100; // 변수 선언

  // 여러 변수 동시 선언
  var b: number, c: number; // 변수 두개 선언
  var d = 10; // 변수 선언 + 초기화 (추천)
  var e = 100,
    f = 200; // 변수 두개 선언 + 초기화

  // 문자열 변수 선언
  var user: string = "하츄핑";
  var user2: string = "아자핑";

  // 문자열 내 특수문자 사용 예시
  var message: string = '아자핑이 "안녕하세요." 라고 말했다.'; // 작은따옴표 내 큰따옴표 사용

  // 한글 변수명 사용
  var 변수1: string = "좋아핑";
  var 이름_변수: string = "싫어핑";

  // 특수문자로 시작하는 변수명
  var $money = 4;
  var $4 = 4;

  // 숫자형 변수
  var pi = 3.14;

  // 특수문자 변수명
  var _ = 200;
  var $ = 4;

  // 잘못된 변수명 예시 (주석 처리)
  // var user-name = '안돼핑'; // 하이픈(-)은 변수명에 사용할 수 없음

  // 사용자 정보 변수
  var userName: string = "낙타핑";
  var userAge: number = 30;
  var userGender: string = "여자";
  var userEmail: string = "ping@gmail.com";

  // 콘솔 출력 예시
  console.log(user, message);

  console.log("ping@gmail.com"); // 문자열 직접 출력
  console.log(userEmail); // 변수 값 출력

  // 변수 값 변경
  userEmail = "ping@naver.com";
  console.log(userEmail); // 변경된 값 출력
})();
