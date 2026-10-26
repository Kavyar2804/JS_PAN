


function greet(age) {

  console.log(`Hi i am ${this.name} & my age is ${age} years old`);
  
  
}
greet.call()


const person1 ={ name: 'abc'}
const person2 = { name : 'xyz'}

greet.call(person1,16)
greet.apply(person2,[18])

let some= greet.bind(person1, 20)
some()


const person3 ={ 
  name: 'abcxyz',

  details: function (age) {

    console.log(`Hi i am ${this.name} & my age is ${age} years old`);
    
    
  }

}


person3.details(50)

  const person4 = { name : 'xyz13'}


  person3.details.call(person4,60)
  person3.details.apply()


  let arr = [1,2,3,4,5]


  let val= arr.filter((ele)=>{ return ele>2})
  console.log(val);
  

 let arr1= [{name:'hjhj', age:50}, {name:'fggh', age:10}]
 let val1= arr1.filter((ele)=>{return ele.age>10})
 console.log(val1);
 let val2= arr.reduce((ac,cur)=>{return ac+cur},0) //ac is stored the result of previous ittreation 
 //cur --> curent element
 console.log(val2);
 
 arr.splice()

 let str = 'playwright'
 let str1= str.slice(2,5) //end index it is excluded
 console.log(str1);

 let ar= arr.slice(-5, -2)
 console.log(ar);
 
 
 















// function outer() {
//   let secret = "🍫 Chocolate";

//   function inner() {
//     console.log(secret);
//   }

// }

// outer();
// inner();