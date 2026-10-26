// all the variable & function declaration is moved to the top of its scope during the compilation phase 
// as per hoisting bheaviour 
//var a 
//let & const ---> temporal dead zone
// function add(a,b) {

//     console.log(a+b);
    
    
// }
//var a1 


// add(5,5)
// console.log(a1);

a1()
// variables hoisting
// console.log(b); // ---> utlization  then it 

var a = 10 //--> declaration  

const b = 20

// console.log(b);


//scope here is global

//function hoisting

//standard function

function add(a,b) {

    console.log(a+b);
    
    
}


// function expression
   
//partial hoisted
var a1= function(a) {
    console.log(a);
    
    
}

//arrow functions 

//partial hoisting

var b1 = ()=>{}

//IIFE (function)() is also treated as function expression