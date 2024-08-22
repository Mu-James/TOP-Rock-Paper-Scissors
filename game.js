function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    const resultDiv = document.createElement("div");
    
    let winning = -1;
    if (humanChoice == "rock") {
        if (computerChoice == "paper" ) {
            resultDiv.textContent = "You lose! Paper beats Rock.";
            winning = 1;
        }
        else if (computerChoice == "scissors" ){
            resultDiv.textContent = "You win! Rock beats scissors.";
            winning = 0;
        }
        else {
            resultDiv.textContent = "Tie!";
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors" ) {
            resultDiv.textContent = "You lose! Scissors beats Paper.";
            winning = 1;
        }
        else if (computerChoice == "rock" ){
            resultDiv.textContent = "You win! Paper beats Rock.";
            winning = 0;
        }
        else {
            resultDiv.textContent = "Tie!";
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock" ) {
            resultDiv.textContent = "You lose! Rock beats Scissors.";
            winning = 1;
        }
        else if (computerChoice == "paper" ){
            resultDiv.textContent = "You win! Scissors beats Paper.";
            winning = 0;
        }
        else {
            resultDiv.textContent = "Tie!";
        }
    }
    const resultCont = document.querySelector("#result");
    resultCont.appendChild(resultDiv);
    return winning;
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

const choiceBtns = document.querySelectorAll("button");
rockBtn.addEventListener("click", () => {
    winning = playRound("rock");
    if (winning == 0) {
        humanScore++;
    }
    else if (winning == 1) {
        computerScore++;
    }
    currentRound++;
    if (currentRound == numRounds + 1) {
        const winner = document.createElement("div");
        if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, you have won with a score of ${humanScore}`;
        }
        else if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, the computer has won with a score of ${computerScore}`;
        }
        else {
            winner.textContent = `After ${numRounds} games, both you and the computer have tied with a score of ${humanScore}`;
        }
        const resultCont = document.querySelector("#result");
        resultCont.appendChild(winner);
    }
});
paperBtn.addEventListener("click", () => {
    winning = playRound("rock");
    if (winning == 0) {
        humanScore++;
    }
    else if (winning == 1) {
        computerScore++;
    }
    currentRound++;
    if (currentRound == numRounds + 1) {
        const winner = document.createElement("div");
        if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, you have won with a score of ${humanScore}`;
        }
        else if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, the computer has won with a score of ${computerScore}`;
        }
        else {
            winner.textContent = `After ${numRounds} games, both you and the computer have tied with a score of ${humanScore}`;
        }
        const resultCont = document.querySelector("#result");
        resultCont.appendChild(winner);
    }
});
scissorBtn.addEventListener("click", () => {
    winning = playRound("rock");
    if (winning == 0) {
        humanScore++;
    }
    else if (winning == 1) {
        computerScore++;
    }
    currentRound++;
    if (currentRound == numRounds + 1) {
        const winner = document.createElement("div");
        if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, you have won with a score of ${humanScore}`;
        }
        else if (humanScore > computerScore) {
            winner.textContent = `After ${numRounds} games, the computer has won with a score of ${computerScore}`;
        }
        else {
            winner.textContent = `After ${numRounds} games, both you and the computer have tied with a score of ${humanScore}`;
        }
        const resultCont = document.querySelector("#result");
        resultCont.appendChild(winner);
    }
});