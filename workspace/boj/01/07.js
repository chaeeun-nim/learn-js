/*
제목: ??!
설명: 입출력을 응용하는 문제??!
제출: https://www.acmicpc.net/submit/10926

문제
준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.

입력
첫째 줄에 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다. 아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.

출력
첫째 줄에 준하의 놀람을 출력한다. 놀람은 아이디 뒤에 ??!를 붙여서 나타낸다.

예제 입력 1
joonas
예제 출력 1
joonas??!

예제 입력 2
baekjoon
예제 출력 2
baekjoon??!
*/
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = fileData[0];

console.log(`${a}??!`);
