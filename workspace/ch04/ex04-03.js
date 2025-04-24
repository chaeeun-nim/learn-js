function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));

console.log(currySum(10)(20)(30));

function currySum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

currySum = (a) => (b) => (c) => a + b + c;
