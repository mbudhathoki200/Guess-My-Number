'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent='No Number';
        //when player wins
    }else if(guess==secretNumber){
        document.querySelector('.message').textContent='Correct number!!';
        console.log(document.querySelector('.number').textContent=secretNumber);
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }else if(guess>secretNumber){
        if(score>0){
            document.querySelector('.message').textContent='Too high!!';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game!!';
        }
        
    }else if(guess<secretNumber){
        if(score>0){
            document.querySelector('.message').textContent='Too Low!!';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game!!';
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent='start guessing';
    document.querySelector('.guess').value='';
});
 