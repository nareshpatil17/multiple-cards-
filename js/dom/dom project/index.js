let container = document.querySelector("#container");

let love = document.querySelector("i");

container.addEventListener("dblclick",function(){
    
    love.style.transform =  "translate(-50%,-50%) scale(1)"
    love.style.translate = "transform 0.5s"
    love.style.opacity = 1

    setTimeout(() => {
        love.style.scale = 2
        love.style.opacity = 0
    }, 3000);

})
