// const btn = document.querySelector("button");
// const sapn = document.querySelector("span");

// btn.addEventListener("click", function () {
//   let num = parseInt(sapn.firstChild.nodeValue);
//   sapn.firstChild.nodeValue = num + 1;
// });

// container 하위의 button요소 찾기
const btn = document.querySelector("#container > button");
const countSpan = document.querySelector("#container > span");

btn.addEventListener("click", function () {
  const count = parseInt(countSpan.firstChild.nodeValue);

  countSpan.firstChild.nodeValue = count + 1;
});
