const userName = prompt("Введіть ваше ім'я:") || "Користувач";
document.getElementById("user").querySelector(".score").textContent = `Рахунок ${userName}: 0`;

const userScoreEl = document.getElementById("userScore");
const userNumberEl = document.getElementById("userNumber");
const computerScoreEl = document.getElementById("computerScore");
const computerNumberEl = document.getElementById("computerNumber");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const winnerMessage = document.getElementById("winnerMessage");

let userScore = 0;
let computerScore = 0;

generateButton.addEventListener("click", () => {
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    userNumberEl.textContent = userNumber;
    computerNumberEl.textContent = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
        userScoreEl.textContent = `Рахунок ${userName}: ${userScore}`;
    } else if (computerNumber > userNumber) {
        computerScore++;
        computerScoreEl.textContent = `Рахунок комп'ютера: ${computerScore}`;
    }

    if (userScore === 3) {
        winnerMessage.textContent = `${userName} виграв(ла)!`;
        endGame();
    } else if (computerScore === 3) {
        winnerMessage.textContent = `Комп'ютер виграв!`;
        endGame();
    }
});

function endGame() {
    generateButton.disabled = true;
    generateButton.style.cursor = "not-allowed";
}

resetButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreEl.textContent = `Рахунок ${userName}: ${userScore}`;
    computerScoreEl.textContent = `Рахунок комп'ютера: ${computerScore}`;
    userNumberEl.textContent = '0';
    computerNumberEl.textContent = '0';
    winnerMessage.textContent = '';
    generateButton.disabled = false;
    generateButton.style.cursor = "pointer";
});
