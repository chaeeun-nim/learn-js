/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언

function add(x, y) {
  const result = x + y;
  console.log(this.name);
  return result;
}

console.log(add(10, 20));
console.log(add.call({ name: "call" }, 30, 40)); // 70, this = {}
console.log(add.apply({ name: "apply" }, [50, 60])); // 70, this = []
