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
  computerchoise='Rock'
} else if (rand < 2/3) {
  computerchoise='Paper'
} else if (rand < 1) {
  computerchoise='Scissors'
}
return computerchoise;
}
function game(playerMove) {
const computerchoise=compchoise();
let result;
if (playerMove==='Rock') {
    if (computerchoise==='Rock') {
    result='tie.'
  } else if (computerchoise==='Paper') {
    result='you lost.'
  } else if (computerchoise==='Scissors') {
    result='you won.'
  }
} else if (playerMove==='Paper') {
    if (computerchoise==='Rock') {
      result='you won.'
    } else if (computerchoise==='Paper') {
      result='tie.'
    } else if (computerchoise==='Scissors') {
      result='you lost.'
    }
    
} else if (playerMove==='Scissors') {
  if (computerchoise==='Rock') {
    result='you lost.'
  } else if (computerchoise==='Paper') {
    result='you won.'
  } else if (computerchoise==='Scissors') {
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