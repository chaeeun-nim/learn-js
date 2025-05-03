(() => {
  /*
2차원 배열
FEBC 수강생의 이름을 저장하는 배열을 작성해 보자.
각 캠프별(FEBC, BEBC, AOSBC) 수강생을 2차원 배열로 관리
*/

  // 각 캠프별 수강생 배열을 개별적으로 선언한 경우 (참고용)
  // const febcStudents = ['십이기핑', '몰라핑', '안가르쳤어핑', '임한길', '이호정', '김현지', '이도울', '박선영', '김하영'];
  // const bebcStudents = ['하츄핑', '키키핑', '주르핑', '아잉핑', '바로핑', '라라핑', '아자핑'];
  // const aosbcStudents = ['부투핑', '무셔핑', '차나핑', '안드핑', '로이핑', '애플핑', '스티브핑', '잡스핑'];

  // 2차원 배열로 모든 캠프의 수강생을 관리
  // lionStudents[0] : FEBC 수강생
  // lionStudents[1] : BEBC 수강생
  // lionStudents[2] : AOSBC 수강생
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
    ], // febc
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

  // 전체 수강생 수를 저장할 변수
  let sum = 0;
  // '바로핑' 학생의 존재 여부를 체크할 변수
  let isInStudent = false;
  for (let i = 0; i < lionStudents.length; i++) {
    let ban = lionStudents[i];
    for (let k = 0; k < ban.length; k++) {
      sum++;
    }
  }
  console.log("총몇명" + sum);

  // 각 캠프를 순회하면서 처리
  // 현재 처리중인 캠프의 수강생 배열
  // 각 캠프의 수강생이 몇명인가?
  for (let i = 0; i < lionStudents.length; i++) {
    let ban = lionStudents[i];
    let num = 0;
    for (let k = 0; k < ban.length; k++) {
      num++;
    }
    console.log(`${i}반에는 ${num}명있음`);
  }
  // 전체 수강생 수 누적
  // 바로핑이라는 수강생이 있는가?
  // febc 모든 수강생 이름 출력
  for (let i = 0; i < lionStudents.length; i++) {
    let ban = lionStudents[i];
    for (let name of ban) {
      console.log(name);
    }
  }
  // '바로핑' 학생 존재 여부 출력
  for (let i = 0; i < lionStudents.length; i++) {
    let ban = lionStudents[i];
    for (let name of ban) {
      if (name === "바로핑") {
        console.log("바로핑 있음");
        break;
      }
    }
  }
  // 전체 수강생이 몇명인가?
})();
