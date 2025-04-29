// 변수의 타입 추론

(() => {
  // 기본 데이터 타입의 변수 타입을 추론에 의지(권장)
  let name = "이일구";
  // name = 219;

  const age = 29;
  // age = "열아홉살";

  let name2; //any타입으로 변함
  name2 = "이일구";
  name2 = 219;

  console.log(name, age, name2);
})();
