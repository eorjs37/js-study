function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (name) {
  this.name = name;
};

const me1 = new Person("lee");
const me2 = new Person("kim");
const me3 = new Person("choi");

console.log(Person.prototype); //{ getName: [Function (anonymous)], setName: [Function (anonymous)] }
console.log(me1); //Person { name: 'lee' }
console.log(me2); //Person { name: 'kim' }
console.log(me3); //Person { name: 'choi' }
