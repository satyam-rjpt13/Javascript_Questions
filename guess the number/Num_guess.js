const inputBox = document.getElementById('input');
const button = document.getElementById('btn');
let counter = document.getElementById('counter');
let statement = document.getElementById('statement');
let max = Number(counter.innerHTML);

let result = Math.floor(Math.random() * 100) + 1;

button.addEventListener('click', ()=>{
    let guessNum = Number(inputBox.value);
    if(guessNum === result){
        statement.innerHTML = "Congratulations you Guess it Right";
        button.disabled = true;
        inputBox.disabled = true;
        return;
    }

    max--;
    counter.innerHTML = max;
    if(guessNum > result){
        statement.innerHTML = "Your answer is high";
        inputBox.value = "";
    }else if(guessNum < result){
        statement.innerHTML = "Your answer is low";
        inputBox.value = "";
    }

    if(max<= 0 ){
        statement.innerHTML += ` — Game over! The number was ${result}`;
        button.disabled = true;
        inputBox.disabled = true;
    }
})