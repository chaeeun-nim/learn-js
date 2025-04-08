/*
기본 데이터 타입 - BigInt
*/

let maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대수
let maxSafeNum = Number.MAX_SAFE_INTEGER; // 안전한(정확한) 정수의 최대값
console.log("그냥 선언");
console.log(maxNum, maxSafeNum);
console.log("-1");
console.log(maxNum - 1, maxSafeNum - 1);
console.log("+1");
console.log(maxNum + 1, maxSafeNum + 1);
console.log("+2");
console.log(maxNum + 2, maxSafeNum + 2);
console.log("+3");
console.log(maxNum + 3, maxSafeNum + 3);

let b1 = 12345n;
let b2 = BigInt(maxSafeNum);

console.log("그냥 선언");
console.log(b1, b2);
console.log("-1");
console.log(b1 - 1n, b2 - 1n);
console.log("+1");
console.log(b1 + 1n, b2 + 1n);
console.log("+2");
console.log(b1 + 2n, b2 + 2n);
console.log("+3");
console.log(b1 + 3n, b2 + 3n);
