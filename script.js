console.log("This is the Rock Paper Scissors Game");

function getComputerChoice() {
    if (Math.random() < 0.34) {
        return "rock";
    } else if (Math.random() <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Do you choose rock, paper or scissors?");
    return input.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(ComputerChoice, humanChoice) {
    if (ComputerChoice === humanChoice) {
        return "It's a tie!";
    } else if (ComputerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (ComputerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return "You win! Scissors beats paper";
    } else if (ComputerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return "You win! Rock beats scissors";
    } else if (ComputerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "Oh no! You lose! Rock beats scissors";
    } else if (ComputerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "Oh no! You lose! Paper beats rock";
    } else if (ComputerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "Oh no! You lose! Scissors beats paper";
    } else {
        return "Invalid input ! Please choose rock, paper or scissors.";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, humanSelection));