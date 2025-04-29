// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
    // getAge(): number; //메서드 정의
  }

  const u1 = {
    name: "haru",
    age: 5,
  };
  const u2: User = {
    name: "namu",
    age: 8,
  };

  const createUser = function (name: string, age: number): User {
    return { name, age };
  };

  const u3: User = createUser("유저핑", 7);

  console.log(u1.age, u2.name.toUpperCase());
  console.log(u3);

  function getAge(user: User): number {
    return user.age;
  }

  console.log(getAge(u1));
})();
