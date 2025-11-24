let counter = document.getElementById('counter');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let optr = document.getElementById('optr');
let p1score = document.getElementById('p1score');
let p2score = document.getElementById('p2score');
const button = document.getElementById('submit');
const result = document.getElementById('result');
let score1 = 0;
let score2 = 0;
let inp1 = document.getElementById('p1');
let inp2 = document.getElementById('p2');

let currRound = 1;
const total_round = 10;

let currAnswer = null;

function newQuestion(){
    let n1 = Math.floor(Math.random() * 10) + 1;
    let n2 = Math.floor(Math.random() * 10) + 1;
    const ops = ['+','-','*'];
    let operator = ops[Math.floor(Math.random() * ops.length)];

    num1.innerHTML = n1;
    num2.innerHTML = n2;
    optr.innerText = operator;

    // calculations
    if(operator === '+'){
        currAnswer = n1+n2;
    }else if(operator === '-'){
        currAnswer = n1-n2;
    }else{
        currAnswer = n1*n2;
    }
}

newQuestion();
counter.innerHTML = currRound;
p1score.innerHTML = score1;
p2score.innerHTML = score2;

button.addEventListener('click', ()=>{
    let ans1 = Number(inp1.value);
    let ans2 = Number(inp2.value);

    if(ans1 == currAnswer && ans2 == currAnswer){
        score1++;
        score2++;
    }else if(ans1 == currAnswer){
        score1++;
    }else if(ans2 == currAnswer){
        score2++;
    }
    p1score.innerHTML = score1;
    p2score.innerHTML = score2;

    

    // result after round 10
    if(currRound == total_round){
        p1score.disabled = true;
        p2score.disabled = true;
        button.disabled = true;
        if(score1<score2){
            result.innerHTML = "Player 2 is Winner";
        }else if(score1>score2){
            result.innerHTML = "Player 1 is Winner";
        }else{
            result.innerHTML = "Ohh!! it's a tie";
        }
        counter.innerHTML = total_round;
        return;
    }
    // round increment
    currRound++;
    counter.innerHTML = currRound;
    inp1.value = "";
    inp2.value = "";
    newQuestion();
})


