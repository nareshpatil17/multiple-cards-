let btn = document.querySelector("button");

let h1 = document.querySelector("h1");

let inner = document.querySelector(".inner");
let grow = 0;

btn.addEventListener("click" , function(){

    let num = 50 + Math.floor(Math.random()*50);
    // console.log(grow);
    btn.style.pointerEvents = "none"
    let int = setInterval(function(){
        grow++;
        
        h1.innerHTML = grow+"%"
        inner.style.width = grow+"%"
        
    },num);
    
    
    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = "downloaded"
        btn.style.opacity = "0.5";
        console.log('downloading in',num/10,'second')
    },num*100)
    
    
})