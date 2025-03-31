/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

console.log(a > b); // 크다 거짓
console.log(a < b); // 작다 참
console.log(a >= d); // 크거나 같다 참
console.log(a <= d); // 작거나 같다 참

// 문자열 비교
console.log(a == c); // 동등 참
console.log(a === c); // 일치 거짓
console.log(a != c); // 다르다 거짓
console.log(a !== c); // 다르다 참

console.log("ch05" > "ch01"); // 참
console.log("ch12" > "ch2"); // 거짓
// 오름차순 정렬순서는 ch01 ch05 ch12 ch2
