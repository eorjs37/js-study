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
