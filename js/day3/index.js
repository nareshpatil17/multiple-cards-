// function in javascript 

// console.log("hello");

// function is use for resue your code 

// function is reduce a repetation of code 

// function is not run immedeatly  

// jab tak ham function ko call nahi karte tab tak function call nahi hoga 


// function alloParatha(){
//     console.log("muje paratha bohat pasand hai");
// }

// // alloParatha();

// javscript mai different type se ham function create kar sakte hai 


// parameter 

// function abc(a,b){
//     console.log(a,b);
// }

// abc(10,20);

// agar mai argument mai kuch bhi value nahi dunga to wo undefined value pass kar lega apne parameter mai 

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// abcd();

// // to waha par undefined values ko accept karega 

// argument 

// function abcd(a,b){
//     console.log(a,b);
// }

// abcd(10,20); // argument


// hoisting 

// hositing wo chij hoti jisme hamara javascript ka code two parts mai divide hokar declaration part topof the code chala jata hai  
// and 
// initialization part vahi par rehta hai 
// usko hoisting bolte hai 

// hoisting mai two type ki hoti hai 
// variable hoisting 
// functional hoisting 

// variable hoisting 
// declaration part 
// var a;

// console.log(a);

// // initialization part 
// a = 10;
// let b;
// let c;

// console.log(b);
// console.log(c);
// b = 20;
// c = 30; 

// hoisting sirf ek concept hai programmers ko samajne ke liye but kisiko pata nahi hai ki hoisting reality mai aise hoti hogi 

// functional hoisting 

// before the creating the function we can access the function 

// fun: function (){
//     console.log("hello");
// } 




// fun();
// function fun(){
//     console.log("hello");
// }

// when we trying to hoisting with variable function then its return us error this is not function 

// abc();

// var abc = function(){
//     console.log("hello");
// }

// parameters in javascript 

// parameters different types ke hote hai 

// required , destructured , rest , default  

// requierd parameter 

// required parameter ek aisa parameter hota hai jisme us parameter ke liye argument required hoti hai  

// function func(a,b,c,d){
//     console.log(a,b,c,d);
// }

// // func(10,20,null,50);
// func(10,20,50);


// destrutured parameter 

// destructred ek aisi functionality hoti hai jisme hame kuch values ki hi jarurat hoti hai utni hi values ham nikal sakte hai 


// function fun({name , age}){
//     console.log(name , age);
// }

// fun({name : "harsh" , age : 30});

// rest parameter 

// rest parameter mai kya hota hai jisme ham values ko rest kara sakte hai 

// rest parameter hame array ke form mai rest values return karega 

// function abcsd(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }

// abcsd(1,2,3,4,5,6);

// we use rest parameter 

// function abcd(a,b,...c){
//     console.log(a,b,c);
//     // console.log(c.length);
// }
// abcd(1,2,3,4,5,6);


// default parameter 

// default parameter wo parameter hota hai jab ham argument mai koi parameter ki value deba bhul jate hai tab vaha default parameter as a parameter le leta hai 

// function abcd(a=0,b=0,c=0){
//     console.log(a,b,c);
// }

// abcd(1,2,);


// arguments in javascript 

// positional , default , spread  

// arugument wo hoti hai jab ham function ko call karte hai tab ham usme pass karte hai 

// positional 

// positional argument mai jis order mai values di hai usi order mai ati hai 

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// abcd(1,2,3,4);
// abcd(1,2,null,4);



// default 

// default argument wo hoti hai jaha par hamne kisi parameter ke liye koi argumenet pass nahi bhi ki ho tab bhi default ragument us parameter ke liye access ho jati hai 

// function abcd(a=0,b=0,c=0,d=0){
//     console.log(a,b,c,d);
// }

// abcd(1,2,undefined,4);


// spread 

// ham argument ko spread bhi kar sakte hai 

// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// let arr = [1,2,3,4];

// abcd(...arr);

// abhi ham jaan lete hai function ke bare mai 

// javscript mai different types ke function hote hai 

// classic function 

// function hello(){
//     console.log("hi");
// }

// hello();


// nested function 

// function within function thats call nested function 

// function outer(){
//     function inner(){
//         console.log("hello i am inner function");
//     }
//     inner();
// }

// outer();

// scope chain in javscript 

// agar variable function ke bahar code mai create kiya hai to ham code mai kahi bhi use kar sakte hai 

// use global scope kehte hai 

// aur 

// agar variable function ke andar create kiya hai to ham use sirf function ke andar hi use kar sakte hai 

// this variable have a global scope 

let a = 10;

// function abcd(){
//     // this variable have a functional scope 
//     let b = 20;

//     function xyz(){
//         console.log(a);
//         console.log(b);
//     }
//     xyz();
// }

// abcd();

// console.log(a);

// // when we trying to access functional variable then its return error because b have block scope 
// console.log(b);


// iife (immedeately invoked function expression) 

// ek esa function jisko create karte samay se hi run ho jaye use iife kaha jata hai 


// is function ko ek () round bracket mai wrap karte hai 

// and 

// use vahi par call karte hai 

// (function abcd(){
//     console.log("hello i am iife");
// })();

// real life exmaple 

// ham iske use private varibale create karne ke liye karte hai 

// ek aisa variable jo console se change na ho 

// let balance = 1000;

// console.log(balance);

// yaha ek loo fall hai jisse koi bhi console se balance change kar sakta hai 

// is loo fall ko dur karne ke liye ham private varibale banane ke liye use karte hai iife ka 

// (function private(){
//     let balance = 1000;
//     console.log(balance);
// })();



// more functions in javascript 

// arrow function , fat arrow function , anonymous , higher order , call back , first class , pure , impure 

// arrow function 

// ham iska use bohat karte hai 

// isko ham arrow ki help create karte hai 

// let fun = ()=>{
//     console.log("hello");
// }

// fun();



// fat arrow function 

// let fat = ()=> {
//     console.log("helo i am fat arrow");
// }
// fat();



// anonymous function 

// ek aisa function jiska koi naam nahi hota hai 

// anonymous = benami 

// this is the invalid expression but 

// function(){
    
// }

// we can store this on the variable 

// let greet = function(){
//     console.log("hello");
// }

// greet();

// there function has no name nut its store on the variable 


// higher order function 

// higher order function ek aisa function hota hai jo return kar de ek aur function 


// function abcd(fun){
//     return fun();
// }

// function fun(){
//     console.log("hello");
// }

// abcd(fun);

// abcd(function(){
//     console.log("hello");
// })


// function multiplyBy(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiplyBy(2);
// console.log(double(5)); // 10

// call back function 

// function fun(ab){
//     return ab();
// }

// fun(function(){
//     console.log("hello");
// })

// fisrt class function 

// first class function ek concept hai jis bhi language mai likhe jate hai us language mai variable ki tarha trat hote hai 

// let fun = function(){
//     console.log("hello i am first class");
// }

//  fun();

// function fun(abc){
//     return abc();
// }

// fun(function(){
//     console.log("hello i am first class");
// })