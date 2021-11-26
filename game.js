const play = ["rock", "paper", "scissors"];

game();

function game(){
    for (let i=0; i < 5; i++) {

    const computerSelection = computerPlay(play);
    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

    function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)];
    }

    function playRound() {
       
    if (playerSelection == computerSelection) {
        console.log("Its a tie!");
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        console.log("Paper beats Rock, you lost!");
        
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        console.log("Scissors beats Paper, you lost!");
        
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        console.log("Rock beats Scissors, you lost!");
        
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        console.log("Scissors beats Paper, you won!");
        
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        console.log("Paper beats Rock, you won!");
        
    }
    else if  ((playerSelection == "rock") && (computerSelection == "scissors")) {
        console.log("Rock beats Scissors, you won!");
        
    }
    else {
        console.log("Invalid input.")
        
    }
    }
    console.log(playRound());
    

    }
    
}
