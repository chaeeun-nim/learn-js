/*
입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요

입력값 예시:
15

출력값:
15는 홀수 입니다.
*/

const fs = require("fs");
const fileBuffer = fs.readFileSync(0);
const data = fileBuffer.toString();
console.log(fileBuffer);
console.log(data);

let num = Number(data);
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(`숫자 ${num}은 ${result}입니다.`);
