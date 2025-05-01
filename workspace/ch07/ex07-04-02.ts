// // 내장 객체 - Math

(() => {
  //   // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    // 0 이상 1 미만 사이의 난수를 생성하고, 6을 곱한 후, 소수점 이하를 버림
    // 그 후 1을 더하여 1부터 6까지의 숫자를 반환
    return Math.floor(Math.random() * 6) + 1;
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력

  // 로또 번호를 생성하는 함수
  function generateLottoNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤한 숫자 출력
  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤한 숫자 출력
  console.log(generateLottoNumbers()); // 1부터 45까지의 숫자 중 6개의 랜덤한 숫자 출력
})();
