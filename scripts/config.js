/** Logic for player configurations */

function openPlayerConfig() {
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
}

// Handling player config form submission
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername');
    console.log(enteredPlayerName);
}