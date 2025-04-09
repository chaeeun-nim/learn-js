/*
배열 생성, 읽기, 쓰기
*/

// const arr = new Array(1, 2, 3);
const arr = [1, 2, 3];
arr.push(10); // 지정한 데이터를 배열의 마지막 요소로 추가한다.
arr[4] = 20; // [1, 2, 3, 20]
arr[5] = 30; // [1, 2, 3, 20, 30]
arr[1] = 100; // [1, 100, 3, 20, 30]
arr[9] = 200; // [1, 100, 3, 20, 30, 빈칸, 빈칸, 빈칸, 200]
arr[arr.length] = 88888;

console.log("배열의 길이", arr.length); // 배열의 전체 갯수(길이)
console.log("배열이 마지막 값", arr[arr.length - 1]);
console.log(typeof arr, arr);
