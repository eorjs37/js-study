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

//객체 메서드에서 함수를 호출할 경우의 this를 변경하는법1
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

//객체 메서드에서 함수를 호출할 경우의 this를 변경하는법2
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
