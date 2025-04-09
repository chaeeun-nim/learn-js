/*
객체의 속성 관리
*/

const foo = {
  name: "포슬핑",
  mainJob: "마법사",
};

// 객체의 프로퍼티 읽기
console.log(foo.name, foo["mainJob"], foo.subJob); // 정의하지않은 프로퍼티는 언디파인드

// 객체 프로퍼티 갱신
foo.mainJob = "요정";
console.log(foo.name, foo["mainJob"]);

foo.subJob = "인플루언서";
console.log(foo.name, foo["mainJob"], foo.subJob);

delete foo.mainJob;

console.log(foo.name, foo["mainJob"], foo.subJob);
console.log(foo);

for (let prop in foo) {
  console.log(prop, foo[prop]);
}
