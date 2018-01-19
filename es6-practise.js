//Support for constant also known as immutable variables.
const data = 234;
//console.log(data)
const objData = {"count" :  2};
//console.log(objData);
objData.count  =  4;
//console.log(objData);

//Block Scope Implementation
//In below example let keyword is using to achieve
//block scoping, We are not able to excess the d variable out side the block means curly brackets.
function test() {
    var f = 10;
      {
      let d = 20;
      console.log(d);
    }
      console.log(f);
    console.log(d);
}
test();

//ES6 implementation of block scoping
var callBack  = [];
for (var  i = 0 ; i <= 2 ; i++) {
    callBack[i] = function () { return i*2};
}
callBack[0]();
callBack[1]();
callBack[2]();

//ES5 implementation of block scoping
var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}

//Blocked scope function in ES6
{
    function test () { return 1 }
    test() === 1
    {
        function test () { return 2 }
        test() === 2
    }
    test() === 1
}

//Blocked scope function in ES5
(function () {
    var test = function () { return 1; }
    test() === 1;
    (function () {
        var test = function () { return 2; }
        test() === 2;
    })();
    test() === 1;
})();

//Arrow Functions ES6
var array = [1,2,3];
var data  = array.map((item) => {
    return item*2
});

var f = array.map(v => ({ even: v, odd: v + 1 }))

console.log(f);
console.log(data);

//In ES5
var data = array.map(function(item) {
    return item * 2;
})

console.log(data);

var array  = [5,10,15];
this.array.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v)
})
console.log(this.fives);


//Parameter Handling
//Default Parameter Values
//In ES6 we can give value to params when we declare the function.
function f (x, y = 7, z = 42) {
    console.log(x, y, z);
}
f(1);

//Rest Parmeters in ES6
function test (x , y , ...z) {
  console.log(z);
  console.log(x*y*z.length);
}

test(1,2,3,4,5);


//In ES5 we can achieve same functionality
function test1(x, y) {
      console.log(arguments);
    var a = Array.prototype.slice.call(arguments, 2);
  console.log(a);
}

test1(1,2,3,4,5);


//Basically Rest operators are used where we want to send parameters like x,y,z,j where x, y we can recieve directly and extra param like z and j we can recieve as ...arg notation that is actually array.

function restCaseTest(x,...y) {
    console.log(x);
    console.log(y.length);
}

restCaseTest(0,1,2,4);


//While in spread operator we also use ...arg notation but spread operator is used where we can send parameter as ...arg array and we can define the params individually as object.


function spreadCaseTest(x, y, z, k) {
    console.log(k);
}
var data = [1,2,3];
spreadCaseTest(...data, 9);


// Class concept in ES6 for accessing the parent properties using child object
class Test {
    run() {
          console.log("I am parent Class");
    }
}
class Test2 extends Test {
      constructor() { super()};
    run() {
          super.run();
           console.log("I am child Class");
       }
}

var t1 = new Test2();
t1.run();


