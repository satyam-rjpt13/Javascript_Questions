let inputBox = document.getElementById('input');
let counter = document.getElementById('counter');
let count = counter.innerHTML;
let max = Number(count);
let button = document.getElementById('btn');

inputBox.addEventListener("input", ()=>{
    let currentLength = inputBox.value.length;
    let remainingLimit = max - currentLength;
    counter.innerHTML = Math.max(remainingLimit,0);
    if(remainingLimit <0){
        alert("character limit exceed");
    }
    if(remainingLimit >= 5 && remainingLimit <15){
        counter.style.color = "rgb(255, 196, 0)";
    }else if(remainingLimit<5){
        counter.style.color = "rgb(255, 0, 0)";
    }
    inputBox.value = inputBox.value.slice(0, max);
})

button.addEventListener('click',()=>{
    inputBox.value= "";
})