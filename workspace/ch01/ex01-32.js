/*
매개변수를 가진 함수 - 도어락
올바른 비밀번호가 입력되면, 문이 열린다.
잘못된 비밀번호가 입력되면, 경고음이 울린다.
*/

function doorLock(password) {
  const pwd = "1234";
  password = password || "";
  const subPassword = password.slice(-pwd.length);
  if (subPassword === pwd) {
    console.log("문이 열렸습니다.");
  } else {
    console.log("침입 발생!!!!");
  }
}

doorLock("1111111111");
doorLock("1321654989879651234");
doorLock();
