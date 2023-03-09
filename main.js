const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");

const allGameIcons = document.querySelectorAll(".far");

let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
    rock: { name: "Rock", defeats: ["scissors", "lizard"] },
    paper: { name: "Paper", defeats: ["rock"] },
    scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
    lizard: { name: "Lizard", defeats: ["paper"] },
}

//player choice
select = (playerChoice) => {
    checkResult(playerChoice);
    switch(playerChoice) {
        case "rock":
            playerRock.classList.add("selected");
            playerChoiceEl.textContent = "---Rock";
            break;
            case "paper":
            playerPaper.classList.add("selected");
            playerChoiceEl.textContent = " ---Paper";
            break;
        case "scissors":
            playerScissors.classList.add("selected");
            playerChoiceEl.textContent = " ---Scissors";
            break;
        case "lizard":
            playerLizard.classList.add("selected");
            playerChoiceEl.textContent = " ---Lizard";
            break;
        default:
            break;
    }
    console.log(playerChoice);
}

//random computer choice
computerRandomChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors', 'lizard']
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//add selected styling and computer choice
displayComputerChoice = () => {
    switch (computerChoice) {
        case "rock":
            computerRock.classList.add("selected");
            computerChoiceEl.textContent = " ---Rock";
            break;
        case "paper":
            computerPaper.classList.add("selected");
            computerChoiceEl.textContent = " ---Paper";
            break;
        case "scissors":
            computerScissors.classList.add("selected");
            computerChoiceEl.textContent = " ---Scissors";
            break;
        case "lizard":
            computerLizard.classList.add("selected");
            computerChoiceEl.textContent = " ---Lizard";
            break;
        default:
            break;
    }
}

//check result and update text
updateScore = (playerChoice) => {
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie."
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Won!';
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = "You lost";
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
}

//call function
checkResult = (playerChoice) => {
    resetAllSelectedIcon();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

//reset all selected icons
resetAllSelectedIcon = () => {
    allGameIcons.forEach((icon) => {
        icon.classList.remove("selected");
    })
}

//reset score playerChoice and computerChoice
resetAll = () => {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = ''
    resultText.textContent = ''
}

resetAll();