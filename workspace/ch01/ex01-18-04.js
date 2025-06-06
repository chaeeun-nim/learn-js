/*
if - else if 문을 사용

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
출력 결과:
총점: 303
평균: 60.6
*/

let softwareDesign = 48; // 1. 소프트웨어 설계
let softwareDevelopment = 80; // 2. 소프트웨어 개발
let databaseSetup = 50; // 3. 데이터베이스 구축
let programmingUsage = 70; // 4. 프로그래밍 언어 활용
let systemManagement = 55; // 5. 정보 시스템 구축 관리

let sum =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;

let avg = sum / 5;

console.log(`총점은 ${sum}점 입니다.`);
console.log(`평균은 ${avg}점 입니다.`);

/*
2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
 */
let max = Math.max(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);
let min = Math.min(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);

console.log(`최고점은 ${max}점 입니다.`);
console.log(`최저점은 ${min}점 입니다.`);

/*
3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
축하합니다. 합격입니다.
 */

let pass =
  softwareDesign >= 40 &&
  softwareDevelopment >= 40 &&
  databaseSetup >= 40 &&
  programmingUsage >= 40 &&
  systemManagement >= 40 &&
  avg >= 60;
if (pass) {
  console.log("축하합니다. 합격입니다.");
} else {
  console.log("안타깝네요. 불합격입니다.");
}

/*
4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
출력 결과 1: softwareDesign = 40일 경우
총점: 295
평균: 59
최고점: 80
최저점: 40
아쉽지만 불합격입니다. 사유: 평균 60점 미달
 */
softwareDesign = 40;

sum =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;

avg = sum / 5;

if (avg < 60) {
  console.log("아쉽지만 불합격입니다. 사유 : 평균 60점 미달");
} else {
  console.log("아쉽지만 불합격입니다. 사유 : 과락");
}

/*
출력 결과 2: softwareDesign = 30일 경우;
총점: 285
평균: 57
최고점: 80
최저점: 30
아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
 */

softwareDesign = 30;
sum =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;

avg = sum / 5;

max = Math.max(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);
min = Math.min(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  systemManagement
);

if (avg < 60 && min < 40) {
  console.log(`아쉽지만 불합격입니다. 사유: 평균 60점 미달(${avg})`);
  console.log(`아쉽지만 불합격입니다. 사유: 과락 40점 미달(${min})`);
} else if (avg < 60) {
  console.log(`아쉽지만 불합격입니다. 사유: 평균 60점 미달(${avg})`);
} else if (min < 40) {
  console.log(`아쉽지만 불합격입니다. 사유: 과락 40점 미달(${min})`);
} else {
  console.log(`축하합니다. 합격입니다!`);
}
