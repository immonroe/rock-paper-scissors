const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
const buttons = document.querySelectorAll('button')

let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerWinRound = 'Player has won the round!'
let computerWinRound = 'CPU has won the round!'
let draw = `It's a draw!`
let playerWin = 'Congrats, you have won the game!'
let computerWin = 'The CPU has won the game!'
let userError = 'Sorry, you did not select one of the three options. Try again.'

buttons.forEach(button => {
  button.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = `${button.className}`
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
  })
})

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement('p')
  if (playerSelection === computerSelection) {
    draws++;
    p.innerText = draw;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection=== 'rock' ||playerSelection === 'scissors' &&computerSelection === 'paper') {
    playerScore++
    p.innerText = playerWinRound;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection=== 'paper' ||playerSelection === 'paper' &&computerSelection === 'scissors') {
    computerScore++;
    p.innerText = computerWinRound;
  } else {
     p.innerText = userError;
  }
  outcomeDiv.appendChild(p)
}

const checkForWinner = (playerScore, computerScore) => {
  const h2 = document.createElement('h2')
  console.log(playerScore, computerScore)
  if (playerScore === 5) {
    h2.classList.add('player-won')
    h2.innerText = playerWin;
  } 
  if (computerScore === 5) {
    h2.classList.add('computer-won')
    h2.innerText = computerWin;
  }
  outcomeDiv.append(h2) // winner/loser message appears after scoring 5 points
}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}