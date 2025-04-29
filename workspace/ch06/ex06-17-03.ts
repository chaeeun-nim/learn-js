// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  function echo<T extends string | number>(msg: T): T {
    //extends로 타입제어가능
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true)); //타입에러

  const str = echo<string>("hello");
  const num = echo<number>(123.456);

  console.log(str.toUpperCase(), num.toFixed(2));

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }
  // echo2<number>(100); length속성이 없어서 안됨
  const str2 = echo2<string>("hamsger");
  const num2 = echo2<number[]>([10, 20]);
})();
