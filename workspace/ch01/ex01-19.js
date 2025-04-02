/*
switch문
*/

const pingName = "눈꽃핑";
let modifier = undefined;

switch (pingName) {
  case "하츄핑":
    modifier = "사랑의";
    break;
  case "포실핑":
    modifier = "순수의";
    break;
  case "눈꽃핑":
    modifier = "반짝반짝한";
    break;
  case "꾸래핑":
    modifier = "행복의";
    break;
  case "빛나핑":
    modifier = "눈부신";
    break;
  case "머핑":
    modifier = "호기심의";
    break;
  default:
    modifier = "모르는";
    break;
}

console.log(`${modifier} ${pingName}`);
