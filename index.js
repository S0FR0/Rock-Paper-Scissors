const choices = ['rock', 'paper', 'scissors']

let getComputerChoice = (item) => {
    return item[Math.floor(Math.random() * item.length)];z
}

function playRound(getComputerSelection) {

    let playerSelection = prompt("Chose rock, paper or scissors:")
        playerSelection = playerSelection.toLowerCase();
    
        if (playerSelection === getComputerSelection)
            return("Draw");
        else if 
        (playerSelection === "rock" && getComputerSelection === "scissors" || playerSelection === "paper" && getComputerSelection === "rock" || playerSelection === "scissors" && getComputerSelection === "paper")
            return(1);
        else
            return(-1);
}

function playGame(){
    
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore != 5 && computerScore != 5)
        {let result = playRound(getComputerChoice(choices));

        if (result === -1)
            computerScore += 1;

        if (result === +1)
            playerScore += 1;

        alert('Score: ' + playerScore + ' ' + computerScore)
        }
    
    if (playerScore === 5)
        alert("You win!")
    else
        alert("You lose!")
}

playGame()