# this

> 일반적인 언어에서의 this는 생성된 인스턴스를 가르키지만, javascript에서는 기본적으로 global,window를 가르킨다.  
> javascript에서는 함수를 호출하는 시점에 this가 결정된다.

# 함수 호출 하는 방식

- 함수 호출
- 메소드 호출
- 생성자 함수 호출
- apply/call/bind 호출

```javascript
//함수 호출
function method() {
  console.log(this);
}
method();

//메소드 호출
const object = {
  x: 1,
  method1() {
    console.log(this);
  },
};
object.method1();

//생성자 함수 호출
const person = function () {
  this.name = "최대건";
  this.getName = function () {
    console.log(this);
  };
};

const instance = new person();
instance.getName();

//apply/call/bind 호출
function method2() {
  console.log(this);
}
let bar = { name: "bar" };
method2.call(bar);
method2.apply(bar);
method2.bind(bar)();
```

## 객체 메서드에서 함수를 호출할 경우의 this 상태

```javascript
//객체 메서드에서 함수를 호출할 경우의 this 상태
const obj = {
  value: 100,
  method: function () {
    console.log("this : ", this); //obj
    function bar() {
      console.log("this : ", this); //window
    }
    bar();
  },
};
obj.method();
```

## 객체 메서드에서 함수를 호출할 경우의 this를 변경하는법1

```javascript
const obj2 = {
  value: 100,
  method: function () {
    let that = this;
    console.log("this : ", this); //obj
    console.log(this.value); //100
    function bar() {
      console.log("this : ", this); //window
      console.log(that.value); //100
    }
    bar();
  },
};

obj2.method();
```

## 객체 메서드에서 함수를 호출할 경우의 this를 변경하는법2

```javascript
const obj3 = {
  value: 100,
  method: function () {
    console.log("this : ", this); //obj
    console.log(this.value); //100
    function bar() {
      console.log("this : ", this); //window
      console.log(this.value);
    }
    bar.call(this);
    bar.apply(this);
    bar.bind(this)();
  },
};

obj3.method();
```

## 프로토타입 기반 언어

> 자바스크립트는 다른 언어와 달리 클래스라는 개념은 존재하지 않는다.  
> 별도의 객체 생성방법을 제공한다.

### 생성자 함수의 인스턴스 생성

> function을 이용해서 객체를 생성하는 방법이다.  
> 아래와 같이 생성할 경우 getName,setName이 인스턴스 생성시마다, 생성이 되므로 비효율적이다.  
> 그러므로 자바스크립트에서는 프로토타입이라는 것을 이용해야 해결한다.  
> 프로토타입은 객체를 연결할 수 있도록 연결해주는 역할이다. 프로토타입을 이용해서 객체를 상속이 가능하다.

```javascript
// 객체는 프로퍼티+메소드의 조합이다.
//생성자 함수의 객체 생성 방법
function Person(name) {
  //프로퍼티
  this.name = name;
  //메소드
  this.getName = function () {
    return this.name;
  };

  //메소드
  this.setName = function (name) {
    this.name = name;
  };
}

const me1 = new Person("lee");
const me2 = new Person("kim");
const me3 = new Person("choi");

console.log(me1);
console.log(me2);
console.log(me3);
```

## 상속

> 객체 지향 특징 중 하나인 상속이 있다, 상속을 통하여 코드의 재활용성을 높일 수 있다.  
> 자바처럼 상속 기능은 없지만, prototpy을 통해 상속이 가능하다.

### 의사 클래스 패턴 상속 (Pseudo-classical Inheritance)

> 자식 생성자의 prototype 프로퍼티를 부모 생성자 함수의 인스턴스로 교체.  
> 위 방식으로 진행했을 때 Child의 프로토타입 객체가 Parent의 인스턴스이다. 그러므로 child.constructor 출력결과는 Child가 아니라 , Parent가 된다.

```javascript
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
```

### 프로토타입 패턴 상속 (Prototypal Inheritance)

> 프로토타입 패턴 상속은 Object.create 함수를 사용하여 객체에서 다른 객체로 직접 상속을 구현하는 방식이다.
