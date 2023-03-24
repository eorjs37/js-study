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
