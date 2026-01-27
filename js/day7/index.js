// now we learn about the dom manupultion 
// dom - document object model 

// frontend ki javascript bhi bolte hai 

// dom have a 4 pillar in javascript 

// 1) selection of Element 
// 2) changeing html 
// 3) changeing css 
// 4) event and listner 

// 1) selection of element 

// there we can select element different different way from a html 
// tag selector (element selector)
// id , class selector 

// // console.log("hello");


// var h1 = document.querySelector('h1');

// // console.log(h1);

// // 2) change html 

// h1.innerHTML = 'i am changed';


// // 3) change css 

// h1.style.backgroundColor = 'crimson';

// // 4) event and listner 

// // we can perform multiple event on html tag or element 

// h1.addEventListener('click',function(){
//     alert("cliked");
// });



// context text and inner text 

// var h1 = document.querySelector('h1');

// h1.innerHTML = "hello html";

// h1.innerText = "hello harsh bhai";

// h1.textContent = "how are you";



// var h1 = document.querySelector('h1');

// h1.addEventListener('click',function(){
//     h1.innerHTML = "hello i am change";
//     h1.style.color = "red";
// });


// var h1 = document.querySelector('h1');
// var btn = document.getElementById('btn');

// btn.addEventListener('click' , function(){
//     // console.log("btn click");
//     h1.innerHTML = "i am changed";
//     h1.style.color = "crimson";

// });


// get element by id 

// var first = document.getElementById('first');

// first.addEventListener("click",function(){
//     first.style.color = "crimson";
// });

// get element by class name 

// class retrun collection of array 

// var second = document.getElementsByClassName('second')[0];

// second.addEventListener('click',function(){
//     second.style.color = "red";
// });

// query selector all 

// we  can select multiple elements at the time 

// var h2 = document.querySelectorAll('h2');

// h2.forEach(function(el){
//     el.addEventListener('click',function(){
//         el.style.color = "red";
//     });
// });

// now we create the one counter 

// increament and decreament 

var h5 = document.querySelector('h5');

var inc = document.querySelector('#inc');

var dec = document.querySelector('#dec');

let count=0;

inc.addEventListener('click', function(){
    count++;
    h5.innerHTML = count;
});

dec.addEventListener('click',function(){
    count--;
    h5.innerHTML = count;
});