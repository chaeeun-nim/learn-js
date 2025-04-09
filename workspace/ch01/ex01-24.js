/*
JSON 표기법 - 리터럴 방식으로 객체 생성
*/

const ping = {
  name: "제이슨핑",
  age: 7,
  job: "요정",
  married: true,
};
//TODO ajax 단원에서.. 객체를 json 문자열로 변경가능
const strping = JSON.stringify(ping);
// console.log("strping", typeof strping, strping);

// ping.chuga = "추가핑";
// console.log(ping);
console.log(strping.job);

//TODO ajax 단원에서.. json 문자열을 객체로 변경가능
const objPing = JSON.parse(strping);

console.log(objPing);
