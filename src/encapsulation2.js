var person = function (arg) {
  var name = arg ? arg : "";

  return {
    getName: function () {
      return name;
    },
    setName: function (arg) {
      name = arg;
    },
  };
};

var me = person("Lee");

var name1 = me.getName();

console.log(name1);

me.setName("Kim");

name1 = me.getName();

console.log(name1);
