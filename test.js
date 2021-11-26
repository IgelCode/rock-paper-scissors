
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
    
if (computerPlay <= 3) {
    computerPlay = "rock";
    return;
}
else if (computerPlay > 3 && computerPlay <= 6) {
    computerPlay = "paper";
    return;
}
else if (computerPlay > 6) {
    computerPlay = "scissors";
    return;
}
}
computerPlay();
console.log(computerPlay);

