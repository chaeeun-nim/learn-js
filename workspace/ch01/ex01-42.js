/*
기본값 매개변수(Default parameters)
*/

function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  if (b === undefined) {
    return a;
  } else {
    return a + b;
  }
}

function sum(a, b) {
  if (b === undefined) {
    b = 0;
  }
}

function sum(a, b = 0) {
  return a + b;
}

console.log(sum(10, 20));
console.log(sum(10));
