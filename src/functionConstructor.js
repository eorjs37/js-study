//생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("choi");
console.log(me.name);

//객체 리터럴 방식
const foo = {
  name: "choi",
  gender: "men",
};
console.dir(foo);
