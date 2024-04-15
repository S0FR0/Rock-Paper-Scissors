const choices = ['rock', 'paper', 'scissors']

let getComputerChoice = (item) => {
    return item[Math.floor(Math.random() * item.length)];z
}

var playerSc = 0;

var computerSc = 0;

const container = document.getElementById('container');

const playerScore = document.createElement('p')

playerScore.textContent= `Player score: ${playerSc}`;

const computerScore = document.createElement('p');

computerScore.textContent= `Computer score: ${computerSc}`;

container.prepend(computerScore);

container.prepend(playerScore);

const btnRock = document.getElementById('rock');

const btnPaper = document.getElementById('paper');

const btnScissors = document.getElementById('scissors');

btnRock.addEventListener('click', () => {
    let playerChoice = 'rock';
    let computerChoice = getComputerChoice(choices);
    if(playerChoice === computerChoice)
    console.log('Draw!');
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
        {playerSc += 1;
        playerScore.textContent= `Player score: ${playerSc}`;}
    else
        {computerSc += 1;
        computerScore.textContent= `Computer score: ${computerSc}`;}
        if (playerSc === 5){
            playerSc = 0;
            computerSc = 0;
            playerScore.textContent= `Player score: ${playerSc}`;
            computerScore.textContent= `Computer score: ${computerSc}`;
            alert("You win!")
        };
        
        if (computerSc === 5){
            playerSc = 0;
            computerSc = 0;
            playerScore.textContent= `Player score: ${playerSc}`;
            computerScore.textContent= `Computer score: ${computerSc}`;
            alert("You lose!")
        }
});

btnPaper.addEventListener('click', () => {
    let playerChoice = 'paper';
    let computerChoice = getComputerChoice(choices);
    if(playerChoice === computerChoice)
    console.log('Draw!');
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
        {playerSc += 1;
        playerScore.textContent= `Player score: ${playerSc}`;}
    else
        {computerSc += 1;
        computerScore.textContent= `Computer score: ${computerSc}`;}
        if (playerSc === 5){
            playerSc = 0;
            computerSc = 0;
            playerScore.textContent= `Player score: ${playerSc}`;
            computerScore.textContent= `Computer score: ${computerSc}`;
            alert("You win!")
        };
        
        if (computerSc === 5){
            playerSc = 0;
            computerSc = 0;
            playerScore.textContent= `Player score: ${playerSc}`;
            computerScore.textContent= `Computer score: ${computerSc}`;
            alert("You lose!")
        }
});

btnScissors.addEventListener('click', () => {
    let playerChoice = 'scissors';
    let computerChoice = getComputerChoice(choices);
    if(playerChoice === computerChoice)
        console.log('Draw!');
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
        {playerSc += 1;
        playerScore.textContent= `Player score: ${playerSc}`;}
    else
        {computerSc += 1;
            computerScore.textContent= `Computer score: ${computerSc}`;}

            if (playerSc === 5){
                playerSc = 0;
                computerSc = 0;
                playerScore.textContent= `Player score: ${playerSc}`;
                computerScore.textContent= `Computer score: ${computerSc}`;
                alert("You win!")
            };
            
            if (computerSc === 5){
                playerSc = 0;
                computerSc = 0;
                playerScore.textContent= `Player score: ${playerSc}`;
                computerScore.textContent= `Computer score: ${computerSc}`;
                alert("You lose!")
    }
});