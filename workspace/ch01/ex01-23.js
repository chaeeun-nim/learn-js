/*
new Object() - 생성자 함수로 객체 생성
*/

const userName = "몰라핑";
const userNo = 3;
const userGender = "male";
const userLevel = "diamond";
const userPassword = "1234";
const userAge = 30;
const userEmail = "happy@naver.com";

const user1 = new Object();
user1.userName = "니똥핑";
user1.userNo = 4;
user1.userGender = "male";
user1.userLevel = "silver";
user1.userPassword = "1234";
user1.userAge = 30;
user1.userEmail = "happy@naver.com";

// 호정핑 회원이ㅡ 속성
const user2 = new Object();
user2.userName = "호정핑";
user2.userNo = 4;
user2.userGender = "female";
user2.userLevel = "diamond";
user2.userPassword = "1234545";
user2.userAge = 30;
user2.userEmail = "hojeong@naver.com";

console.log(user1.userName, user1.userEmail);
console.log(user2.userName, user2.userEmail);
