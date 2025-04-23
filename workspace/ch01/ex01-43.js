/*
나머지 매개변수(Rest parameters)
*/

function fn(...a) {
  console.log(a);
  for (let i of a) {
    console.log(i);
  }
}

fn();
fn(2);
fn(1, 2);
fn(1, 2, 3);
fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
