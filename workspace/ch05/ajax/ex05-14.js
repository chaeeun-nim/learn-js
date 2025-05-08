// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사
import { appendImages } from "./utils.js";
const url = "https://api.thecatapi.com/v1/images/search"; // 정상 작동 링크
// const url = "https://apiee.thecatapi.commm/v1/imaages/search"; // catch 코드 발생
// const url = "https://api.thecatapi.com/v1/imags/search"; // else 코드 출력 404 띄우는 코드
const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);
async function getImages() {
    try {
        const response = await axios.get(url);
        const data = response.data;
        appendImages(data);
    }
    catch (err) {
        alert("대박에러!!!!!!!!!!!!!!");
        console.error("에러발생", err);
    }
}
