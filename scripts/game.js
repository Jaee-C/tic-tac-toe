/** Game logic */

function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOver.firstElementChild.innerHTML =
        'You won, <strong id="winner-name">PLAYER NAME</strong>!';
    gameOver.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            gameFieldElements[gameBoardIndex].textContent = '';
            gameFieldElements[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (!players[0].name || !players[1].name) {
        alert('Please set player names for both players!');
        return;
    }

    resetGameStatus();

    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer == 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (gameIsOver) {
        return;
    }
    
    const selectedField = event.target;
    const selectedCol = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    // Prevent user from overriding a previously selected field
    if (gameData[selectedRow][selectedCol] > 0) {
        return;
    }

    // Display user input in front end
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    // Store game state in a 2D array
    gameData[selectedRow][selectedCol] = activePlayer + 1;

    const winnerId = gameOverCheck();
    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function gameOverCheck() {
    // Checking rows
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] == gameData[i][1] &&
            gameData[i][0] == gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    // Checking columns
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] == gameData[1][i] &&
            gameData[0][i] == gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    // Diagonal: top left - bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] == gameData[1][1] &&
        gameData[0][0] == gameData[2][2]
    ) {
        return gameData[0][0];
    }

    // Diagonal: bottom left - top right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] == gameData[1][1] &&
        gameData[1][1] == gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound == 9) {
        return -1;
    }
    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    if (winnerId > 0) {
        gameOver.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
    } else {
        gameOver.firstElementChild.textContent = "It's a draw!";
    }
    gameOver.style.display = 'block';
}
