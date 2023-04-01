//의사 클래스 패턴 상속 (Pseudo-classical Inheritance)
//의사 클래스 패턴은 자식 생성자 함수의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체하여 상속을 구현하는 방법이다. 부모와 자식 모두 생성자 함수를 정의하여야 한다.

//부모 생성자
var Parent = (function () {
  function Parent(name) {
    this.name = name;
  }

  //method
  Parent.prototype.sayHi = function () {
    console.log(`Hi ${this.name}`);
  };

  return Parent;
})();

var Child = (function () {
  function Child(name) {
    this.name = name;
  }

  //자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체.
  Child.prototype = new Parent();

  // 메소드 오버라이드
  Child.prototype.sayHi = function () {
    console.log("안녕하세요! " + this.name);
  };

  // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
  Child.prototype.sayBye = function () {
    console.log("안녕히가세요! " + this.name);
  };

  // return constructor
  return Child;
})();

var child = new Child("child");
console.dir(child);
console.log(child); //Parent { name: 'child' }

console.log(Child.prototype);

child.sayHi(); // 안녕하세요! child
child.sayBye(); // 안녕히가세요! child

console.log(child instanceof Parent); // true
console.log(child instanceof Child); // true
