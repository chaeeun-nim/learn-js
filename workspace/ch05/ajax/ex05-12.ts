// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용

import { Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");

btn?.addEventListener("click", getImages);

function getImages(): void {
  // Ajax 프로그래밍 순서
  // 1. XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();
  // 2. 요청준비(open)
  xhr.open("GET", url, true);
  // 4. 응답 데이터 처리
  xhr.addEventListener("load", function () {
    const result = this.responseText;
    const data: Cat[] = JSON.parse(result);
    appendImages(data);
    console.log(data);
  });
  // 3. 서버에 요청(send)
  xhr.send();
}
