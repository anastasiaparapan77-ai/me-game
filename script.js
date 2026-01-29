let secretNumber;
let attemptsLeft;

startGame();

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 5;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Осталось попыток: 5";
    document.getElementById("guess").value = "";
}

function checkNumber() {
    let input = document.getElementById("guess");
    let userGuess = Number(input.value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "Введи число 🙂";
        message.style.color = "orange";
        return;
    }
    
    attemptsLeft--;
    attempts.textContent = "Осталось попыток: " + attemptsLeft;
    
    if (userGuess > secretNumber) {
        message.textContent = "Моё число меньше ⬇️";
        message.style.color = "blue";
    } else if (userGuess < secretNumber) {
        message.textContent = "Моё число больше ⬆️";
        message.style.color = "blue";
    } else {
        message.textContent = "🎉 Ты угадал! Я загадал " + secretNumber;
        message.style.color = "green";
    }
   
    if (attemptsLeft === 0) {
        message.textContent = "😢 Ты проиграл. Я загадал " + secretNumber;
        message.style.color = "red";
    }
    
    input.value = "";
}

function restartGame() {
    startGame();
}