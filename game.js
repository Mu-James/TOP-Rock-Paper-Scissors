function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let winning = -1;
    if (humanChoice == "rock") {
        if (computerChoice == "paper" ) {
            console.log("You lose! Paper beats Rock.");
            winning = 1;
        }
        else if (computerChoice == "scissors" ){
            console.log("You win! Rock beats scissors.");
            winning = 0;
        }
        else {
            console.log("Tie!")
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "scissors" ) {
            console.log("You lose! Scissors beats Paper.");
            winning = 1;
        }
        else if (computerChoice == "rock" ){
            console.log("You win! Paper beats Rock.");
            winning = 0;
        }
        else {
            console.log("Tie!")
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock" ) {
            console.log("You lose! Rock beats Scissors.");
            winning = 1;
        }
        else if (computerChoice == "paper" ){
            console.log("You win! Scissors beats Paper.");
            winning = 0;
        }
        else {
            console.log("Tie!")
        }
    }
    return winning;
}