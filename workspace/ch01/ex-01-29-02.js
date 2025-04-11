/*
2차원 배열
FEBC 수강생의 이름을 저장하는 배열을 작성해 보자.
*/

// const febcStudents = ['십이기핑', '몰라핑', '안가르쳤어핑', '임한길', '이호정', '김현지', '이도울', '박선영', '김하영'];
// const bebcStudents = ['하츄핑', '키키핑', '주르핑', '아잉핑', '바로핑', '라라핑', '아자핑'];
// const aosbcStudents = ['부투핑', '무셔핑', '차나핑', '안드핑', '로이핑', '애플핑', '스티브핑', '잡스핑'];

const lionStudents = [
  [
    "십이기핑",
    "몰라핑",
    "안가르쳤어핑",
    "임한길",
    "이호정",
    "김현지",
    "이도울",
    "박선영",
    "김하영",
  ],
  ["하츄핑", "키키핑", "주르핑", "아잉핑", "바로핑", "라라핑", "아자핑"],
  [
    "부투핑",
    "무셔핑",
    "차나핑",
    "안드핑",
    "로이핑",
    "애플핑",
    "스티브핑",
    "잡스핑",
  ],
];

let sum = 0;

// 각 캠프의 수강생이 몇명인가?
for (let i = 0; i < lionStudents.length; i++) {
  const campStudents = lionStudents[i];
  console.log("각 캠프 수강생", campStudents.length, "명");
  sum += campStudents.length;
}

// 전체 수강생이 몇명인가?
console.log("전체 수강생", sum, "명");

//바로핑이라는 수강생이 있는가?
let flag = false;
let issun = lionStudents[0].includes("박선영");
for (let i = 0; i < lionStudents.length && !flag; i++) {
  const campStudents = lionStudents[i];
  for (let k = 0; k < campStudents.length; k++) {
    if (campStudents[k] == "바로핑") {
      flag = true;
    }
  }
}
// if (flag) {
//   console.log("바로핑 있음");
// } else {
//   console.log("바로핑 없음");
// }

flag ? console.log("바로핑 있음") : console.log("바로핑 없음");
issun ? console.log("선영핑 있음") : console.log("선영핑 없다~~~");

// febc 모든 수강생 이름 출력
