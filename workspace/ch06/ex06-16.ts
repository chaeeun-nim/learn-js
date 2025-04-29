// 인터페이스 선언 병합
// ex06-15.ts 복사

// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  interface Todo {
    // id: string;
    title: string;
    content: string;
  }

  interface Todo {
    id: number; // 타입이 다르다면 동일한 속성을 지정할 수 없음.
    title: string; // 동일한 속성을 지정하려면, 타입이 같아야함.
    done: boolean;
    creatAt: Date;
  }

  const todo: Todo = {
    id: 1,
    title: "할일",
    content: "할일내용",
    done: false,
    creatAt: new Date(),
  };
  console.log(todo);
})();
