'use strict';
var scoreZero = 0;
//Selecting Elements
var score1 = document.querySelector('#score--0') ;
var score2 = document.getElementById('score--1') ;
var currentScore = 0;
var activeplayer = 0;
var dice = document.querySelector('.dice');
var gif = document.querySelector('.gif');
var rolldice = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var btnNewGame = document.querySelector('.btn--new');
var diceArray = ["assets/dice-1.png","assets/dice-2.png","assets/dice-3.png","assets/dice-4.png","assets/dice-5.png","assets/dice-6.png"];
var holdScore = [0,0];

score1.textContent = scoreZero;
score2.textContent = scoreZero;
dice.classList.add('hidden');




const switchPlayer = function(){
    //document.getElementById(`score--${activeplayer}`).textContent = currentScore;
    
    if( Number(document.getElementById(`score--${activeplayer}`).textContent) >= 10) {
        document.getElementById(`name--${activeplayer}`).textContent = `Player ${activeplayer + 1} Win!`;
        rolldice.classList.add('hidden');
        btnHold.classList.add('hidden');
        gif.classList.remove('hidden');
       
        
       
    }
    else {
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    currentScore =0;
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    activeplayer = activeplayer === 0 ? 1 : 0 ;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
    }
}



rolldice.addEventListener('click',function(){
   dice.classList.remove('hidden');  
  
   dice.src = diceArray[Math.floor(Math.random()*diceArray.length)];
   var diceurl = dice.src.substr(dice.src.length-10);
  
   if(diceurl === diceArray[0]){
       
        switchPlayer();
   } 
   else {

        currentScore += Number(diceurl.charAt(5));
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;

   }

         
});
btnHold.addEventListener('click',function(){
    holdScore[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent = holdScore[activeplayer];
    
    switchPlayer();
});

btnNewGame.addEventListener('click',function(){



    document.getElementById(`current--${activeplayer}`).textContent = 0;
    document.getElementById(`name--${activeplayer}`).textContent = `Player ${activeplayer + 1}`;
    dice.classList.add('hidden');
    gif.classList.add('hidden');
    activeplayer = 0;
    rolldice.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    document.querySelector(`.player--${activeplayer +1}`).classList.remove('player--active');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
    holdScore = [0,0];
    document.getElementById(`score--${activeplayer}`).textContent = holdScore[activeplayer];
    document.getElementById(`score--${activeplayer + 1}`).textContent = holdScore[activeplayer + 1];


   

    
});

