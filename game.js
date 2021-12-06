const buttons = document.querySelectorAll('.button');
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

const enterLink = document.querySelector('.enter_link');
const splashScreen = document.querySelector('.splashscreen');

enterLink.addEventListener('click', () => {
    splashScreen.style.transition = '1.5s';
    splashScreen.style.opacity = '0';
    splashScreen.style.visibility = 'hidden';
});

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
            result.textContent = 'Good job, you have won! Christmas is saved :)';
            result.setAttribute('style', 'color:red; font-size:30px');
        } else if (pc === 5) {
            result.textContent = 'Grinch won! Grinch stole Christmas :(';
            result.setAttribute('style', 'color:red; font-size:30px');
        }
    }
}

function playRound() {
    if (playerSelection == computerSelection) {
        return 'Its a tie! Try harder!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        pc += 1;
        return 'Grinch picked paper, you lost!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        pc += 1;
        return 'Grinch picked scissors, you lost!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        pc += 1;
        return 'Grinch picked rock, you lost!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        player += 1;
        return 'Grinch picked paper, you won!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        player += 1;
        return 'Grinch picked rock, you won!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        player += 1;
        return 'Grinch picked scissors, you won!';
    } else {
        return 'Invalid input.';
    }
}
