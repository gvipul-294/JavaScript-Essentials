//Default parameters

// value of default param gets add
//default param gets executed at runtime

function add6(num1=9 , num2=num1+7 ){
  var res = num1 + num2;
  return res;
}

//num2= koo()
//function koo(){
//    return 9; 
//}

var a6 = add6(7);
//console.log(a6);


//Arrow function, this object
// Arrow supports defaul, rest params but no arguments object

var add7 = (num1, num2) =>  num1+num2;

var a7= new add7(7, 2);
//console.log(a7);


/*
Create object using object
like mother object in C#

Js can create an object in 4 ways
literal
fnction constructor using new
object.Create method
using class concept in es6
*/


function foo(who){
  this.me = who;
}

var a8= new foo ('dj');
var a81= new foo ('India');

// When you create a function, js makes associated object for that known as prototype object

console.log(foo.prototype);
// foo.prototype.identify = function (){
  
// }

foo.prototype.age = 9;
console.log(foo.prototype);

//arrow function has not object associated with it, so can't use new with it
