// 여러 파일에서 사용할 라이브러리 파일

const mylib = {};

Function.prototype.memoize = function () {
  const fn = this; //isPrime
  return function () {
    return fn.memo.apply(fn, arguments); //isPrime.memo(5) 와 같게 바꿔서 호출
  };
};

// 함수에 메모이제이션 기능 추가
Function.prototype.memo = function (key) {
  // this = isPrime
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    //한번이라도 num에 대해서 계산이 끝나고 캐시된경우
    return this._cache[key];
  } else {
    // 캐시를 위한 코드
    return (this._cache[key] = this(key));
  }
};

// Child가 Parent를 상속 받는다.
mylib.inherite = function (Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};
