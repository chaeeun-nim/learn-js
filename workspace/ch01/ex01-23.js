/*
TODO Object 생성자 함수
new Object() - 생성자 함수로 객체 생성
객체.속성(key)="속성값(value)";
*/

const foo = new Object();
console.log(typeof foo, foo);

foo.name = "함수핑";
foo["age"] = 6;
foo.job = "마법사";
foo["married"] = false;

console.log(foo["name"], foo.age, foo["job"], foo.married);
console.log(typeof foo, foo);
