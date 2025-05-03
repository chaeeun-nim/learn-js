(() => {
  /*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
이 예제는 배열을 순회하는 다양한 방법을 보여줍니다.
*/

  // 테스트용 배열 정의
  // 배열은 순서가 있는 값들의 집합으로, 각 값은 인덱스로 접근 가능합니다.
  const arr: number[] = [10, 20, 30];
  // const arr = [4,5,2,5,6,6];

  // 배열의 모든 요소 출력(for)
  console.log(arr);
  // 기본 for 루프를 사용한 배열 순회
  // i는 인덱스(0부터 시작), elem은 해당 인덱스의 값
  // arr.length는 배열의 길이를 반환합니다 (이 경우 3)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // 배열의 합계, 홀수 합계, 짝수 합계를 계산하는 코드
  // sum: 전체 합계를 저장할 변수
  // oddSum: 홀수 값들의 합계를 저장할 변수
  // evenSum: 짝수 값들의 합계를 저장할 변수
  let sum = 0;
  let oddSum = 0;
  let evenSum = 0;

  // 배열의 각 요소를 순회하면서 합계 계산
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  // 계산된 결과 출력
  console.log("합계", sum); // 전체 합계 출력
  console.log("홀수 합계", oddSum); // 홀수 값들의 합계 출력
  console.log("짝수 합계", evenSum); // 짝수 값들의 합계 출력

  // 인덱스가 필요없고 값만 필요한 경우의 for...of 루프 사용 예시
  // 배열의 값만 순회할 때 사용하면 코드가 더 간결해짐
  for (let elem of arr) {
    console.log(elem);
  }

  // for...in 루프를 사용한 배열 순회 (배열의 속성들을 순회)
  // 주의: 배열에서는 일반적으로 for...in 대신 for...of를 사용하는 것이 좋습니다
  // for...in은 배열의 모든 열거 가능한 속성을 순회하므로 예상치 못한 결과가 발생할 수 있음
  for (let i in arr) {
    console.log(i, arr[i]);
  }
})();
