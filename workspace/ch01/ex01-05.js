/*
변수 선언
*/

// 변수는 _ $ 영문자로 시작해야한다.
var a;

// 이렇게 콤마로 두개 나열 가능
var b, c;

// 선언과 동시에 할당가능
var d = 10;

// 값 할당도 동시에 가능. 근데 변수 선언이든 값할당이든 한줄에 한개만
var e =100, f=200;

// 오른쪽에 있는 값을 왼쪽 변수에 담아라.
var user = '하츄핑';
var user2 = '아자핑';

var message = '아자핑이 "안녕하세요" 라고 말했다.';
var message = "하츄핑이 속으로 '안녕하세요' 라고 말했다.";
var message = "피곤핑이  \"피곤해\" 라고 말했다.";
var message = "몰라핑이 \n모른다고 \t말했다."
var message = "하루핑아 \\놀자\\"

var 변수1 = '좋아핑';
var 이름_변수 = '싫어핑';

var $money = 4;
var $4 = 4;

var pi = 3.14;

var _ = 200;
var $ = 4;


// var user-name = '안돼핑'; 이렇게 하이푼은 안됨

// 카멜케이스 사용법
var userName = '낙타핑';
var userAge = 30;
var userGender = '여자';
var userEmail = 'ping@gmail.com';

// 변수는 언제든지 바뀔수 있는 특징을 갖고있고, 특정 데이터를 담는 그릇이다.


// 콘솔로그에 콤마 띄워쓰기하면 한칸 띄워쓰고 나온다.
console.log(user, message);

// 선언은 최초의 한번, 사용하거나, 값을 다시 바꿀때는 var를 안붙여도됨.
var userEmail = 'ping@gmail.com';
console.log(userEmail);

// 이렇게 재지정해서 사용할 수 도 있다. 이렇게 변수는 꼭 변해야하는 건아니지만,
// 변할 수 있는 수(값) 이다.
userEmail = 'ping@naver.com';
console.log(userEmail);