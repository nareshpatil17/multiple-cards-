// Math.random is use for generating the random number 
// random number in the 0 to 1 
// but its not take a 1 


// let a = Math.random() *10;

// console.log(a);


// math.floor is dicrease the point value 

// and convert this into integer formate value 


// let a = Math.floor(Math.random()*100);

// console.log(a);


// color change project 

// let btn = document.querySelector("button");

// let box = document.querySelector("#box");

// // console.log(c1);


// btn.addEventListener("click",function(){
//     let c1 = Math.floor(Math.random()*256);
//     let c2 = Math.floor(Math.random()*256);
//     let c3 = Math.floor(Math.random()*256);
    
//     box.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3})`;

//     box.textContent = [c1,c2,c3];



// })


// array se value print karna Math.random se 

// let arr = [10,20,30,40];

// let a = Math.floor(Math.random()*arr.length);

// console.log(a);

// console.log(arr[a]);


// string array se value print karna 

// let str = ["harsh","rohit","sarthak","ali","satwik","aditya"];

// let a = Math.floor(Math.random()*str.length);

// console.log(a);

// console.log(str[a]);

let btn = document.querySelector("button");

let h1 = document.querySelector("h1");

let main = document.querySelector("#main");

let display = document.querySelector("#display");


let team = [
    {name : "rcb", primary : "red" , secondary : "pink"},

    {name : "mi", primary : "blue" , secondary : "golden"},

    {name : "csk", primary : "yellow" , secondary : "black"},

    {name : "rr", primary : "pink" , secondary : "green"},

    {name : "srh", primary : "orange" , secondary : "gray"},

]


btn.addEventListener("click",function(){
    // console.log("clicked");

    // console.log(team);

    let num  = Math.floor(Math.random()*team.length);

    // console.log(num);

    h1.textContent = team[num].name;

    main.style.backgroundColor = team[num].primary;

    display.style.backgroundColor = team[num].secondary;

})


