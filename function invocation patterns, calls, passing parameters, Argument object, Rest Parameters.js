//// function invocation patterns
// constructor invocation pattern
// function invocation pattern
// matter invocation pattern
// direct invocation pattern see 

//function call as a statement/ expression

// Passing parameters

function add1(num1, num2){
 
  let d = num1+num2;
  let e = d+5;
  // nan added to any kind of variable becomes nan
  //console.log(e);
  return d;
  
}

var a = add(3);
//console.log(a);

//console.log(typeof(NaN));
//console.log(typeof(undefined));

/*if (NaN == a){
  console.log("hey");
}
else{
  console.log("ney")

}*/

//use function NaN


// Passing parameters

// js pass extra parameter arguments object when you call a function,
// array like object not array

function add2(num1, num2){
 
  //console.log(arguments.length);
  // arguments.push(13);  doesn't work, onl
  let d = num1+arguments[1];
  let e = d+5;
  // nan added to any kind of variable becomes nan
  //console.log(d);
  return d;
  
}

var a = add(3, 7, 5, 2);
//console.log(a);

function sumValues(){
  var i;
  var sumAns=0;
  ///sumAns=0;
  for (i = 0; i < arguments.length; i++) { 
    sumAns += arguments[i];
  }
  return sumAns;
}

var d =sumValues(1,2,3,4);
//console.log(d);

//what if no argument is passed, can see

function add3(num1, num2){
   //var c = arguments[0] + arguments[1];
    var args = Array.prototype.slice.call(arguments);
    //console.log(args.pop());
  
    var a1= arguments;
    
    function a(){
      
    }
  
  
}

// ...ParamName -> Rest Parameter
//It should be the last parameter

function add4 (...theArgs){
  var sum=0;
  
  for(let i=0; i<theArgs.length; i++){
    sum+=theArgs[i];
  }
  
  return sum;
}

var c = add4(1,2,3);
console.log(c);

// Rest parameter is an aRRay

function add5 (num1, num2,...theArgs){
  theArgs.push(56);
  console.log(theArgs.length);
  var res =  num1 + num2;
  return res;

}

var f = add5(7,5,77);
console.log(f);

//can use [a,b] instead of theArgs





