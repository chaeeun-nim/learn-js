// // 선택적 파라미터(optional parameter)

(() => {
  function user(name: string, age?: number): void {
    console.log(name, age);
  }

  user("하루", 5);
  user("나무");
})();
