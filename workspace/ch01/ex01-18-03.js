/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/
const isLogin = true;
const isUser = false;
const isSeller = false;
const isAdmin = true;

if (isLogin) {
  console.log("로그인 상태");
} else {
  console.log("로그아웃 상태");
}

if (isUser) {
  console.log("사용자");
} else if (isSeller) {
  console.log("판매자");
} else {
  console.log("관리자");
}

if (isLogin) {
  if (isUser) {
    console.log("사용자 로그인 상태입니다.");
  } else if (isSeller) {
    console.log("판매자 로그인 상태입니다.");
  } else {
    console.log("관리자 로그인 상태입니다.");
  }
} else {
  if (isUser) {
    console.log("사용자 로그아웃 상태입니다.");
  } else if (isSeller) {
    console.log("판매자 로그아웃 상태입니다.");
  } else {
    console.log("관리자 로그아웃 상태입니다.");
  }
}
