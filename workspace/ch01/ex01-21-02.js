/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */
let lines = 5;
// for(let i=0; i <lines; i++){
//   let star = '';
//   for(let k = 0; k<=i; k++){
//     star += '*'
//   }
//   console.log(star);
// }

// for(let i = lines; i >= 1; i--){
//   let star = '';
//   for(let k = 1; k <= i; k++){
//     star += '⭐ '
//   }
//   console.log(star);
// }


/*
    *
   **
  ***
 ****
*****
*/

// for(let i=0; i <lines; i++){
//   let star ='';
//   let space ='';
//   for(let k = 0; k<lines-i-1; k++){
//     space += ' ';
//   }
//   for(let k = 0; k<=i; k++){
//     star += '*';
//   }
//   console.log(space+star);
// }

/*
    *
   ***
  *****
 *******
*********
*/
// for (let i = 0; i<lines; i++){
//   let star = '';
//   let space = '';
//   for(let k = 0; k<lines-i-1; k++){
//     space += " ";
//   }
//   for (let k = 0; k < i*2+1; k++){
//     star += '*';
//   }
//   console.log(space+star);
// }


/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
// for (let i = 0; i <= lines ; i++){
//   let star=''
//   let space=''
//   for(let k = 0; k<i*2-1; k++){
//     star += '*';
//   }
//   for(let k =0; k<=lines-i-1 ; k++){
//     space +=" "
//   }
//   console.log(space+star);
// }

/*
 *******
  *****
   ***
    *
*/
// for(let i = 1; i <= lines-1; i++){
//   let star='';
//   let space='';
//   for( let k = 0; k < i; k++){
//     space +=" "
//   }
//   for( let k = 0; k <= (lines-1)*2-i*2; k++){
//     star += '*';
//   }
//   console.log(space+star);
// }

// *       *7
// **     **5
// ***   ***3
// **** ****1
// *********
for(let i = 0; i <= lines-1; i++){
  let star='';
  let space='';

  if(i == lines-1){
    for(let k = 0; k <= i*2; k++){
      star += '*';
    }
    console.log(star);
  }else{
    for(let k = 0; k <= i; k++){
      star += '*';
    }
    for(let k = 0; k<lines*2-(i*2+3); k++){
      space +=" "
    }
    console.log(star+space+star);
  }
}


// **** ****
// ***   ***
// **     **
// *       *
for(let i = 0; i < lines-1;i++){
  let star='';
  let space=''; 
  for(let k = 0; k<lines-i-1;k++){
    star += '*';
  }
  for(let k = 0; k <=i*2;k++){
    space +=" "
  }
  console.log(star+space+star);
}




lines = 8;
let rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k <= i) rst += "*";
    else rst += " ";
  }
  if (i == lines - 1) rst += "*";
  else rst += " ";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 >= lines) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}

rst = "";
for (let i = 0; i < lines; i++) {
  rst = "";
  for (let k = 0; k < lines; k++) {
    if (k + i + 1 >= lines) rst += "*";
    else rst += " ";
  }
  if (i == 0) rst += "*";
  else rst += " ";
  for (let k = 0; k < lines; k++) {
    if (k <= i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}

// 마름모
let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();
let n = parseInt(input);
let rst = "";
for (let i = 0; i < n; i++) {
  rst = "";
  for (let j = 1; j <= n + i; j++) {
    if (j >= n - i && j <= n + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}
for (let i = n - 2; i >= 0; i--) {
  rst = "";
  for (let j = 1; j <= n + i; j++) {
    if (j >= n - i && j <= n + i) rst += "*";
    else rst += " ";
  }
  console.log(rst);
}