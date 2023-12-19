let score =JSON.parse(localStorage.getItem('score')) || {
  wins: 0 ,
  losses: 0 , // initialize to zero if there no local storage(null)
  ties: 0
};

score_update();

function score_update() {
  document.querySelector('.score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

// set to the local storge even if null

//if (!score) { null --> var not exist
//score={
  //wins: 0 ,
  //losses: 0 ,  initialize to zero if there no local storage(null)
  //ties: 0
//};
//}

function compchoise() {
const rand=Math.random();
let computerchoise;
if (rand < 1/3) {
  computerchoise='rock'
} else if (rand < 2/3) {
  computerchoise='paper'
} else if (rand < 1) {
  computerchoise='scissors'
}
return computerchoise;
}
function game(playerMove) {
const computerchoise=compchoise();
let result;
if (playerMove==='rock') {
    if (computerchoise==='rock') {
    result='tie.'
  } else if (computerchoise==='paper') {
    result='you lost.'
  } else if (computerchoise==='scissors') {
    result='you won.'
  }
} else if (playerMove==='paper') {
    if (computerchoise==='rock') {
      result='you won.'
    } else if (computerchoise==='paper') {
      result='tie.'
    } else if (computerchoise==='scissors') {
      result='you lost.'
    }
    
} else if (playerMove==='scissors') {
  if (computerchoise==='rock') {
    result='you lost.'
  } else if (computerchoise==='paper') {
    result='you won.'
  } else if (computerchoise==='scissors') {
    result='tie.'
  }
}

if (result==='you won.') {
  score.wins++;
} else if (result==='you lost.') {
  score.losses++;
} else if (result==='tie.') {
  score.ties++;
}
 
score_update();

document.querySelector('.result')
.innerHTML=result;

document.querySelector('.moves')
.innerHTML=`you <img src="images/${playerMove}-emoji.png" class="icon">   VS   <img src="images/${computerchoise}-emoji.png" class="icon"> computer`;

localStorage.setItem('score',JSON.stringify(score));
/*
alert(`your choise was ${playerMove}, computer choise was ${computerchoise}, ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
*/
}