/** Game logic */

function startNewGame() {
    if (!players[0].name || !players[1].name) {
        alert('Please set player names for both players!');
        return;
    }

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

    switchPlayer();
}
