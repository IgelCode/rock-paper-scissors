const buttons = document.querySelectorAll('.buttons');
const play = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#player-score');
const PCScore = document.querySelector('#pc-score');
let computerSelection = computerPlay(play);
let pc = 0;
let player = 0;

let playerSelection;

buttons.forEach((button) => {
    button.addEventListener('click', getResult);
});

function computerPlay(play) {
    return play[Math.floor(Math.random() * play.length)];
}

function getResult(e) {
    if (e.target.id == 'rock') {
        playerSelection = 'rock';
    } else if (e.target.id == 'paper') {
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }
    computerSelection = computerPlay(play);
    const resultText = playRound();
    result.textContent = resultText;
    PCScore.textContent = pc;
    playerScore.textContent = player;
    winner();
}

function winner() {
    if (player === 5 || pc === 5) {
        rockBtn.setAttribute('disabled', 'disabled');
        paperBtn.setAttribute('disabled', 'disabled');
        scissorsBtn.setAttribute('disabled', 'disabled');
        if (player === 5) {
            result.textContent = 'You have won!';
        } else if (pc === 5) {
            result.textContent = 'PC has won!';
        }
    }
}

function playRound() {
    if (playerSelection == computerSelection) {
        return 'Its a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        pc += 1;
        return 'Paper beats Rock, you lost!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        pc += 1;
        return 'Scissors beats Paper, you lost!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        pc += 1;
        return 'Rock beats Scissors, you lost!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        player += 1;
        return 'Scissors beats Paper, you won!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        player += 1;
        return 'Paper beats Rock, you won!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        player += 1;
        return 'Rock beats Scissors, you won!';
    } else {
        return 'Invalid input.';
    }
}
