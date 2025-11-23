let counter = document.getElementById('counter');
let button = document.getElementById('check');
let red = document.getElementById('r-score');
let blue = document.getElementById('b-score');
let rscore = 0;
let bscore = 0;
let round = 1;
const totalRounds = 10;

let result = document.getElementById('result');


button.addEventListener('click' , ()=>{
    let r = document.getElementById('r-num');
    let b = document.getElementById('b-num');
    let rVal = Number(r.value);
    let bVal = Number(b.value);

    if(rVal<1||rVal>10 || bVal<1 || bVal>10 || !Number.isInteger(rVal) || !Number.isInteger(bVal)){
        alert("Please Enter the whole number between 1-10 only");
        return;
    }
    else{
        
        if((rVal+ bVal)%2 == 0){
            rscore++;
            red.innerHTML = rscore;
        }else{
            bscore++;
            blue.innerHTML = bscore;
        }
        r.value = '';
        b.value = '';
    }

    if(round === totalRounds){
        if(rscore<bscore){
            result.style.color = "#00f"
            result.textContent = "Blue Team Won";
        }else if(rscore==bscore){
            result.textContent = "its a Tie";
        }
        else{
            result.style.color = "#f00"
            result.textContent = "Red Team Won"
        }
        r.disabled = true;
        b.disabled = true;
        button.disabled = true;
    }
    else{
        round++;
        counter.innerHTML = round;
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();   
    }
});


