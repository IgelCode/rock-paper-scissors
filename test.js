
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));


  function game() {

  }





  function computerPlay() {
    computerPlay = Math.floor(Math.random()*10);
    
if (computerPlay <= 3.3) {
    computerPlay = "rock";
    return;
}
else if (computerPlay > 3.3 && computerPlay <= 6.6) {
    computerPlay = "paper";
    return;
}
else if (computerPlay > 6.6) {
    computerPlay = "scissors";
    return;
}
}
computerPlay();
console.log(computerPlay);






computerSelection = computerPlay(play);

if (playerSelection == computerSelection) {
    console.log("Its a tie!");
}
else if ((playerSelection = "rock") && (computerSelection = "paper")) {
    console.log("Paper beats Rock, you lost!");
}
else if ((playerSelection = "paper") && (computerSelection = "scissors")) {
    console.log("Scissors beats Paper, you lost!");
}
else if ((playerSelection = "scissors") && (computerSelection = "rock")) {
    console.log("Rock beats Scissors, you lost!");
}
else if ((playerSelection = "scissors") && (computerSelection = "paper")) {
    console.log("Scissors beats Paper, you won!");
}
else if ((playerSelection = "paper") && (computerSelection = "rock")) {
    console.log("Paper beats Rock, you won!");
}
else if  ((playerSelection = "rock") && (computerSelection = "scissors")) {
    console.log("Rock beats Scissors, you won!");
}
else {
    console.log("Please input rock, paper or scissors.")
}
}