//var a
//let a  it ss moved temporal dead zone
//const a

// function add (a,b) {
//     console.log(a+b);
    
    
// }

//var v //undefined

//let s


//hoisting default bheaviour where all the declaration variables or function will be moved to the top of its scope
//during the compilation phase

// console.log(a);

// const a = 10



// add(10,20)


//standard function
// function add (a,b) {    
// //var a
// //let b


//     var a =10
//     let b=40
//     console.log(a+b);
     
// }

//function expression
// v(50,60)  //undefined()

// let v = function(a,b) {

    
//     console.log(a+b);
    
    
// }

// let s = ()=>{}

// (function some(a) {
//     console.log(a);
    
    
// })()





function outer ()
 {    

    var a =10
    let b=40
    console.log(a+b); 

    return function inner ()   // through closure memory 
 {    

    debugger;
  
    console.log(a); 
     
}

  
}

let ar = outer() //ar function
console.log(ar);
ar()


let s='wertyuio'

let arr =[1,2,3,4]
console.log(typeof(arr.toString()));











