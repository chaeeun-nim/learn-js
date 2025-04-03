/*
for문을 이용해서 구구단 작성
*/

const dan = 3;

for(let i = 1; i <= 9; i++){
  let result = i*dan;
  console.log(`${dan}*${i}=${result}`)
}
/*
2단부터 9단까지 출력
*/


// for(let i =2; i <=9; i++){
//   console.log(`${i}단 시작!`)
//   for(let k = 1; k <=9; k++){
//     let result = i * k;
//     console.log(`${i}*${k}=${result}`)
//   }
//   console.log("------------");
// }

/*
2단부터 9단까지 출력
2x1 =2 3x1=3 ----쭈우욱~~~
*/
for(let i = 1; i <= 9; i++){
  let text=''
  for(let k = 2; k <= 9; k++){
    text += `${k} X ${i} = ${k*i}`.padEnd(12) 
  }
  console.log(text)
}