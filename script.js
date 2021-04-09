let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function getAbsoluteDistance(user, computer, secret) {

  if(user < 0 || user > 9) {
    alert('Number is out of range');
  }

  if (Math.abs(secret-user) === Math.abs(secret-computer)) {
    return true;
  } else if (Math.abs(secret-user) < Math.abs(secret-computer)) {
    return true;
  } else {
    return false;
  }
}

function compareGuesses(user, computer, secret) {
  return getAbsoluteDistance(user, computer, secret);
}

function updateScore(winner) {
  if (winner === 'human') {
    return humanScore++;
  } else {
    return computerScore++;
  }
}

function advanceRound() {
  return currentRoundNumber++;
}












