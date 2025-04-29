// 기본 타입

(() => {
  let str: string = "문자열";
  let age: number = 100;
  let done: boolean = true;

  let nullVal: null = null;
  let emptyVal: undefined = undefined;

  let todo: object = { title: "typescript 공부", done: false };
  let todoList: Array<string> = ["점박이 물범", "참물범"];
  let todoList2: string[] = ["햄스터", "강아지", "물범"];

  // tuple : 길이가 고정되고, 각 요소의 타입이 정의된 타입
  let items: [string, number] = ["물범", 5];
  let userName: any = "Typescript";

  let userName2: unknown = "Typescript";

  console.log(userName.toUpperCase());

  if (typeof userName2 === "string") {
    //이렇게 이프문으로 넣어주면 에러없이 더욱 안전하게 사용가능ㅋ
    console.log(userName2.toUpperCase());
  }
})();
