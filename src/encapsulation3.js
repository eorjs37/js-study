var person = function (personInfo) {
  var o = personInfo;

  return {
    getPersonInfo: function () {
      return o;
    },
  };
};

var me = person({ name: "choi", gender: "male" });
var myInfo = me.getPersonInfo();
console.log(myInfo);
myInfo.name = "kim";
console.log(myInfo);
