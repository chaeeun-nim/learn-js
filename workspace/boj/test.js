function main() {
  const data = getData();
  const h = data[0][0];
  const m = data[0][1];
  const c = data[1][0];

  let totlaMin = h * 60 + m + c;
  if (totlaMin > 60 * 24) {
    totlaMin -= 60 * 24;
  }

  const result = {
    h: Math.floor(totlaMin / 60),
    m: totlaMin % 60,
  };

  console.log(result.h, result.m);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {object} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const rowArr = row.split(" ");

    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }

    result.push(rowArr);
  }

  return result;
}
