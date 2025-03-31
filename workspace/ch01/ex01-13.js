/*
논리 연산자 &&, ||, !
*/

// 논리합 or : 피연산자 둘 중 하나라도 true일 경우 true가 됨. 둘다 false일 경우에만 false가됨.

console.log(true || true); // 참
console.log(true || false); // 참
console.log(false || true); // 참
console.log(false || false); // 거짓

var id = "hongkkungkkung";
// var invalidId = id.length < 4 || id.length > 12;
var invalidId = !(id.length >= 4 && id.length <= 12);
console.log("id 입력 조건에 맞지 않음", invalidId);

// 앞의 값이 참이면 앞의 값을 반환, 앞의값이 거짓이면 뒤의 값을 반환
// falsy(거짓스러운놈) : number 0, string '', boolean false, null, undefined
// truthy(참스러운놈) : 100, 'hello', true
console.log("hello" || "world"); // 참 || 참 hello
console.log(90 || 30); // 참 || 참 90
console.log(null || "world"); // 거짓 || 참 world
console.log(undefined || "hello"); // 거짓 || 참 hello
console.log(0 || 100); // 거짓 || 참 100
console.log("" || "hello"); // 거짓 || 참 hello

// 앞의 값이 거짓이면 뒤의 값을 반환
console.log();

// let userName = undefined; 널핑
// let userName = null; 널핑
// let userName = ''; 널핑
let userName = "체리핑"; //체리핑

let userAge = null;

console.log(userName || "널핑"); // 결과는 체리핑
console.log(userAge || "나이미상"); //

/*
논리곱(and) :
피연산자 둘다 true일 경우 true가됨.
둘중 하나라도 false면 false가됨
*/
console.log(true && true); // 참
console.log(true && false); // 거짓
console.log(false && true); // 거짓
console.log(false && false); // 거짓

// 앞의 값이 참이면 뒤의값을 반환
// 앞의 값이 거짓이면 앞의값을 반환
id = null; // 타입이 오브젝트라서 length함수를 사용못함. lenth함수는 string 타입에만 사용가능
console.log("글자수", id?.length); //점앞에 물음표하나 붙여주면 null인지 undefind인지 확인할수있음. 이건 옵셔널체이닝 이라고함.

/*
부정(!) :
참이면 거짓, 거짓이면 참을 반환함
*/
