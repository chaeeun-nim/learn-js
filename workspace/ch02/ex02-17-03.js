/*
카운터 예제
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++;

    var visit2 = () => {
      this.count++;
    };
    visit2();
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log("총 방문자수 :", myObj.count); // 2라는 값이 나오길 기대합니다.
console.log("총 방문자수 :", count); // 2라는 값이 나오길 기대합니다.
