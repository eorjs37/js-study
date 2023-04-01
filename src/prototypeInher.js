//생성자 함수 방식
var Parent = (function () {
  function Parent(name) {
    this.name = name;
  }

  //method
  Parent.prototype.sayHi = function () {
    console.log("Hi! " + this.name);
  };
  return Parent;
})();

var child = Object.create(Parent.prototype);
child.name = "chois";
child.sayHi();

console.log(child instanceof Parent); // true

//객체 방식
var parent1 = {
  name: "choi",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};
var child2 = Object.create(parent1);
child2.name = "chii";
child2.sayHi();
console.log(parent1.isPrototypeOf(child2)); // true
