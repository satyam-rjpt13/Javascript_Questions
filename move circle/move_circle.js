let button = document.querySelector('.trg-btn');
let circle = document.querySelector('.circle');

let moved = false;

button.addEventListener('click' , ()=>{
    if(!moved){
        circle.style.transform = "translateX(500px)";
        moved= true;
    }
    else{
        circle.style.transform = "translateX(0px)";
        moved = false;
    }
});