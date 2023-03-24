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
