var Person = function (arg) {
  var name = arg ? arg : "";

  this.getName = function () {
    return name;
  };

  this.setName = function (arg) {
    name = arg;
  };
};

var me = new Person("choi");
var name = me.getName();

console.log(name);

me.setName("kim");
name = me.getName();

console.log(name);
