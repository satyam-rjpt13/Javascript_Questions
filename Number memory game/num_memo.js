let numLine = document.getElementById('num-line');
let numberEl = document.getElementById('number');
let button = document.getElementById('check');
let rounds = document.getElementById('rounds');
let result = document.getElementById('result');
let score = 0;
let newNum=0;
const totalTime = 1;
const totalRounds=10;
let input = document.getElementById('input');
let currRound = 1;
rounds.textContent=currRound;
let countdownInterval= null;


// new question generate
function generateNum(){
    newNum = Math.floor(Math.random() * 1000)+1;
    numberEl.textContent= newNum;
}


function clearCountdown(){
    if(countdownInterval){
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function startTimer(){
    clearCountdown();
    numLine.style.display='';
    input.disabled =true;
    button.disabled = true;

    let timeleft = totalTime;
    const timer = document.getElementById('timer');
    timer.textContent = timeleft;

    countdownInterval =setInterval(()=>{
        timeleft--;
        timer.textContent = timeleft >=0 ? timeleft : 0;

        if(timeleft<0){
        clearCountdown();
        timer.textContent="0";
        numLine.style.display="none";
        input.disabled=false;
        button.disabled=false;
        input.focus();
        result.textContent = `Time Up Type the number and click check`
        }
    },1000)
}

window.addEventListener('load',()=>{
    generateNum();
    startTimer();
});


button.addEventListener('click', ()=>{
    numLine.style.display = ''; 
    input.disabled = true;
    button.disabled = true;
    let raw = input.value.trim(); 
    let ans =  raw === "" ?NaN : Number(raw);
    if(!Number.isNaN(ans) && newNum === ans){
        score++;
        result.innerHTML='Correct! 🎉';
    }
    else{
        result.innerHTML = `Wrong — correct was ${newNum}`;
    }
    
    if(currRound >= totalRounds){
        clearCountdown();
        numLine.textContent="";
        button.disabled=true;
        input.disabled = true;
        rounds.textContent = totalRounds;
        result.innerHTML = ` <b>Game Over!</b> <br> your score is ${score}`;
        return;
    }

    // for next round
    setTimeout(()=>{
        currRound++;
        rounds.textContent = currRound;
        input.value = "";
        result.textContent="";
        generateNum();
        startTimer();
    },1500)
})

input.addEventListener('keydown',e=>{
    if(e.key == 'Enter' && !button.disabled) button.click();
});