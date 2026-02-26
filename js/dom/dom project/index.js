// add and remove friend card 


let add = document.querySelector("#add");


let h4 = document.querySelector("h4");

let flag = 0

add.addEventListener("click",function(event){
    if(flag == 0){
    h4.innerHTML = "Friends"
    h4.style.color = "green"
    add.innerHTML = "Remove"
    add.style.backgroundColor = "Red"
    flag = 1
    }else{
    h4.innerHTML = "Strangers"
    h4.style.color = "Red"
    add.innerHTML = "Add Friend"
    add.style.backgroundColor = "Green"
    flag = 0
    }
})

