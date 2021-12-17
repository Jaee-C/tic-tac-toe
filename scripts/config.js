/** Logic for player configurations */

function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // saves playerid as int
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent = '';
    document.getElementById('playername').value = '';
}

// Handling player config form submission
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    // Form validation
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent = 'Please enter a valid name';
        return;
    }

    const updatedPlayerDataElement = document.getElementById(
        'player-' + editedPlayer + '-data'
    );
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
