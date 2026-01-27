// var let and const its use for variable creation 
// but generaly we let  and const for variable creation 

// var a =10;
// console.log(a);
// let b = 20;
// console.log(b);
// const c = 30;
// console.log(c);



// now we see here data types in javascript 
// there are two types of datatypes 
// 1 premative datatypes 
// 2 non - premative datatypes / reference datatypes 

// 1 premative datatypes 

// number , string , boolean , bigint , null , undefined , symbol 

// number datatypes 

let num = 20;
console.log(num);

// when we want to check the datatypes type then we use there typeof function its help us to understanding about values data types 

console.log(typeof num);

// string datatypes 
// string is collection of charecter or combination of charecter 


let str = "hello world";
console.log(str);
console.log(typeof str);

// boolean datatypes 
// its return true and false value when we want to show true or false value then we use there Boolean datatypes 

let a = true;
let b = false;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

// bigint datatype is use for store the big number 
// when we want to store big number then we puts on last value small n 
// its indicate this is the bigint number  


let bignum = 1223545456747878744574n;
console.log(bignum);
console.log(typeof bignum);


// null 
// null id also one type of datatype its use for store the null values in variable 

let x = null;
console.log(x);
console.log(typeof x);


// undefined 
// undefined its like when we just create the variable and not initialized any value on  this variable its undefined 

// allways null is equivalent to undefined 
// null == undefined 
// not other data types are equivalent to null and undefined 

let y;
console.log(y);
console.log(typeof y);


// now we see here about non - premative datatypes 
// there are generaly three types of datatypes 
// array , object , function 

// array 
// we can store multiple values on single variable its call the array 

let arr = [10,20,30];

console.log(arr);

// we can store multiple type of values in array 

let arr1 = [10,20,"hello" , "world" , true];
console.log(arr1);

// we can also create the array from another way 
// this is the new way to create the array 

let arr2 = Array(10,20,"hello", "guys",false);

console.log(arr2);

// we can check the typeof the array 

console.log(typeof arr1);
console.log(typeof arr2);

// array type is object 

// object 

// object its like collection unsimilar typeof data  

let obj = {
    name : "harshavardhan",
    city : "bhopal",
    acc_num : 1535123522555
}

console.log(obj);
console.log(typeof obj);

// object typeof is object 

// there is also another way to create the object 

let obj1 = Object({name:"rohit" , city : "kotdwar"});
console.log(obj1);
console.log(typeof obj1);


// now we about the function 

let fun = function(){
    // console.log("hello world")
    return 10
}

fun();

// we can also print the function 

// console.log(fun);



