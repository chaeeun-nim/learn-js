(() => {
  /*
new Object() - 생성자 함수로 객체 생성
*/

// 1. 변수로 회원 정보를 관리하는 방식 (비효율적)
// 몰라핑 회원의 속성
const userName1 = '몰라핑';
const userNo1 = 3;
const userGender1 = 'male';
const userLevel1 = 'diamond';
const userPassword1 = '1234';
const userAge1 = 6;
const userEmail1 = 'uzoolove@gmail.com';

console.log(userName1, userAge1);

// 호정핑 회원의 속성

type User = {
  name : string
  no : number
  gender : string
  level : string
  password : string
  age:number
  email : string
}

const Ping : User = {
  name : '핑핑이',
  no:3,
  gender:'암컷',
  level:'silver',
  password : '1234love',
  age : 8,
  email:'naver@naver.com'
}
console.log(Ping, typeof Ping);

})();