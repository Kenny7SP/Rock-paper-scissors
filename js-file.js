function getComputerchoice() {
    const chance = Math.random();
    if (0 < chance && chance <= 0.33) {
        return("paper");
    } else if (0.33 < chance && chance <= 0.66) {
        return("rock");
    } else if (0.66 < chance && chance <= 1) {
        return("scissors");
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const winner = document.querySelector('#winner');
  const score = document.querySelector('#score');
  const computerChoice = document.querySelector('#computerChoice');
  const playerChoice = document.querySelector('#playerChoice');
  const buttons = document.querySelector('#buttons');
  let = playerScore = 0;
  buttons.addEventListener('click', event => {
        let target = event.target;
    switch(target.id) {
        case 'rock':
            choice = 'rock';
            break;
        case 'paper':
            choice = 'paper';
            break;
        case 'scissors':
            choice ='scissors';
            break;
    }

    let pc = getComputerchoice();
    if (pc == choice) result = "Draw";
    else if (choice == "scissors" & pc == "paper") result = "You won!";
    else if (choice == "paper" & pc == "rock") result = "You won!";
    else if (choice == "rock" & pc == "scissors") result = "You won!";
    else result = "You lose!";
    if (result == "You won!") {
        playerScore += 1;
    }
    winner.textContent = result;
    score.textContent = `Your score = ${playerScore}`;
    computerChoice.textContent = `Computer choiced: ${pc}`;
    playerChoice.textContent = `You choiced: ${choice}`;

    
    console.log(pc, 'pc choice');
    console.log(choice);
    
  });
});

function playRound() {
    let computerChoice = getComputerchoice();
    let userChoice = getUserchoice()
    if (computerChoice == userChoice) result = "Draw";
    else if (userChoice == "scissors" & computerChoice == "paper") result = "You won!";
    else if (userChoice == "paper" & computerChoice == "rock") result = "You won!";
    else if (userChoice == "rock" & computerChoice == "scissors") result = "You won!";
    else result = "You lose!";
    if (result == "You won!") {
        userScore += 5;
    }
    return result;
}
