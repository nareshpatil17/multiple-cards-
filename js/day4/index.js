// iife 
// (function fun(){
//     console.log("hello harsh bhaiya");
// })();

// we can it for private variable 

// arrow function 

// let fun = ()=>{
//     console.log("hello");
// }

// fun();

// fat arrow 

// let fun = ()=>{
//     console.log("this is the fat arrow");
// }

// fun();

// arrow and fat arrow function are same 

// anonymous function 

// this function not have a any kind of name 

// this is the give us error thats why we store this function on any variable 

// function(){
//     console.log();
// }


// let ano = function(){
//     console.log("this is the anonymous function");
// }

// ano();

// higher order function 

// the function is return another function other wise its accept another function as a parameter thats type of function call a higher order function 

// function abcd(){
//     let a =20;
//     return function(){
//        console.log(a);
//     }
// }

// we need to use this return function then store on another function 

// abcd()();

// let fn = abcd();

// fn();
// other wise its accept the another fuction as a arugment 

// function abcd(fn){
//     return fn;
// }

// let fn =  abcd(function (){
//     console.log("this is the higher order function");
// });

// fn();


// call back function accept the another as parameter function and called letter inside  


// function name(){
//     console.log("my name");
// }

// function mycall(x){
//     x();
// }

// mycall(name);

// first class function is store the another variable and we call its 

// let fn = function (){
//     console.log("i am first class");
// }

// fn();
//  there is the function behave a like this value 

// its treat like variable 

// function fn(a,b){
//     console.log(a,b);
// }

// fn(function(){
//     console.log("i am function argument and treat as a variable in this first class function");
// },2);

// fn();

// pure function 

// function is take a same input and give the same output 

// thats call a pure function 

// let a = 10;

// function pure(value){
//     console.log(value + 2);
// }

// pure(10);
// pure(10);
// pure(10);
// pure(10);



// impure function  

// function is take same input and give the different output 

// let a = 12;

// function impure(val){
//     // console.log(Math.random());
//     val = Math.random()+a;
//     console.log(val);
// }   

// impure(12);
// impure(12);
// impure(12);
// impure(12);


// scoping in javascript 

// there is the different type of  scoping in javascript 

// global , functional (local) and block 

// global 

// agar Hamne openly code mai koi variable create kiya hai to us ham code mai kahi bhi use kar sakte hai uska scope global hota hai 

// let a = 10;

// functional (local) 

// aisa varibale jise ham sirf function ke andar hi create karte hai and usse ham function ke andar hi use kar sakte hai  usse ham functional scope variable kehte hai 

// ham function ke bahar use variable ko use nahi kar sakte hai 

// function fun(){
//     let a = 10;
//     console.log(a);
// }

// fun();

// console.log(a);

// block scope 

// block scope matkab ham jis variable ko {} currly braces ke andar create karte hai to unka scope in braces ke andar hi hota hai 

// ham block ke bahar us variable ko use nahi kar sakte hai 

// if(){}
// loop(){}

// if(true){
//     let a = 10;
//     console.log(a);
// }

// console.log(a);

// closur 

// closur ek aisa function hai jo return karta hai ek  function ko but wo use karta hai parent function ke variable ko 

// function fun(){
//     let a = 10;
//     return function(){
//         console.log(a);
        
//     }
// }

// let ab = fun();

// ab();


// closur == higher order function (hof)

// every closur is the higher order function (hof)

// arrays in javascript 

// arrays is storing the multiple values on single variable 

// let arr = [10,20,30,40];

// console.log(arr);

// create the array 
// let arr = [10,20,30,40];

// let arr2 = new Array([10,20,30,40]);

// console.log(arr);
// console.log(arr2);

// accessing the array values 

// let arr = [10,20,30,40];

// console.log(arr[2]);

// functions on array 

// there are different type of function in array  

// push() 

// push is use for add in values in array end of the array 

// let arr = [10,20,30,40];

// arr.push(50);

// console.log(arr);


// pop() 

// pop is use for remove or delete the value from the array and its from the end of the array 

// arr.pop();

// console.log(arr);


// unshift() 

// unshift is use for adding the values in array from the starting of the array 

// arr.unshift(10);

// console.log(arr);

// shift() 

// shift is use for removing and delete the value from the array 
// its remove from starting the array 
// arr.shift();

// console.log(arr);

// indexof() 

// indexof is use for return the values index number 

// let bh = arr.indexOf(90);

// let boo = Boolean(bh);

// console.log(boo);

// console.log(arr.indexOf(90));

// array desrtructuring 

// we can access the perticular value from the array using the array desrtructuring 


// let arr = [10,20,30,40];

// let [a,b] = arr;

// console.log(a,b);

// let [a,,b] = arr;

// console.log(a,b);

// agar hame koi value chod ke dusri value acess karni ho to ham us value ko comma saperate karke us kar sakte hai 


// filter 

// filter ka use hota hai arr mai se kuch values ko filter karke us values ko another array par add kar ke ham une access kar sakte hai 

// filter 

// let arr = [10,20,30,40,50];

// let bhhh = arr.filter(function(val){
//     return val < 40;
// })


// // ko values true hoti hai fuilter unhi ko return karta hai 


// console.log(bhhh);


// spread operator 

// spread opoerator use for spread the arrays multiple values 

// let arr = [10,20,30,40,50];

// let arr2 = [...arr];

// console.log(arr);

// console.log(arr2);

// iterating over array using the loop 

// let arr = [10,20,30,40,50];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// // forEach loop 

// let arr = [20,30,10,40,50];
// arr.forEach(function(val){
//     console.log(val);
// });

// object in javascript 

// object is storing differnt type of values on single variable 

// let obj = {
//     name : "harsh",
//     age : 27
// };

// console.log(obj);

// creating a object 

// let obj = {
//     name : "harsh",
//     age : 27
// };

// console.log(obj);


// accessing the object values 

// using dot . operator 

// console.log(obj.name);

// // usnig [] square bracket 

// console.log(obj['name']);


// delete the object and object values 

// delete obj.name;

// console.log(obj);


// nested object 

// nested object is object inside another object 

// let user = {
//     name : "harsh",
//     age : 27,
//     soical : {
//         instagram : "harsh01",
//         facebook : "harsh01"
//     }
// }

// console.log(user);

// console.log(user.name);

// console.log(user.soical.instagram);




