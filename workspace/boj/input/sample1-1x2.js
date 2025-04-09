main();

function main() {
  const data = getData();
  //Data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
}

/**
 * 한줄에 입력된 입력값을 추출하는 함수, 두 건의 데이터를 읽어서 순자를 변환후
 * 객체에 a,b 속성으로 저장하여 반환한다.
 * @return {object} - a,b 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  // 입력값 예시 : 10 20
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();
  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]); // result.a = 10
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]); // result.b = 20

  return result;
}
