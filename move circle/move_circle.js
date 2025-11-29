let button = document.querySelector('.trg-btn');
let circle = document.querySelector('.circle');

let moved = false;

button.addEventListener('click' , ()=>{
    if(!moved){
        circle.style.transform = "translatey(240px)";
        moved= true;
    }
    else{
        circle.style.transform = "translatey(0px)";
        moved = false;
    }
});