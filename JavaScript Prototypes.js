function foo(who){
  this.me = who;
}

var a8= new foo ('dj');
var a81= new foo ('India');

// When you create a function, js makes associated object for that known as prototype object

//console.log(foo.prototype);
// foo.prototype.identify = function (){
  
// }

foo.prototype.age = 9;
//console.log(foo.prototype);
//console.log(a8.age);
//console.log(a81.age);
//arrow function has not object associated with it, so can't use new with it

// for RHS operation, read, it will check in current obj otherwise check in prototype chain

// for LHS write, no prototype chain so if variable not available then created

// for printing prototypically parent 
// a1.constructor is the function foo
// foo.prototype.constructor is foo

// use dot minimum

//a2.coonstructor.prototype = a2.proto 

// Directly go to prototype object [[P]] or __Proto__



// a1.__proto__.age=1;

console.log(a8.constructor.prototype==a81.__proto__);

//Object also has a prototype but not talked about much

//object as an expression
var cat = {
  name: 'foo',
  age: 9
};

cat.grade=45;
// same as above cat['grade']=45;
// in index can use space like grade my but not in index

//console.log(cat['grade']);

//how to make properies of object readable only and innumerable
// Properties are also like object

//var a11 = Object.getOwnPropertDescriptor(car, 'name');
//console.log(a11);

Object.defineProperty(cat, 'name', {writable : false});
cat.name='koo';

//console.log(cat.name);

//if initialised with writable: false then add value 

//if configurable set to false, then can't change settings but with an exception
// can still change writable true to false but not vice-versa

//Object Property Descriptor
//Object.defineProperty(cat, 'name', {enumerable: false});

/*for (let f in cat){
  console.log(f);
}*/

//console.log(JSON.stringify(cat));

// use object.keys() to make enumerable false for consecutive properties using loop



//  inheritance in jS

var Car = {
  model: 'BMW',
  color: 'red'
}

var eCar = {
  price : 89
}

eCar.__proto__ = Car;



//Another way of creating object

//var e= Object.create(Car, {'mk':9});

//Class

class Student{
  
  
  
}

var s1 = new St

//Imp Ques

// difference between class and function prototype

//Dhananjay Kumar
//debugmode@outlook.com

//ng-ind.com

//@debug_mode
//@geeknineseven
//@sunny_delhi

//https://debugmode.net/

























