let player1EditButton = document.getElementById('edit-player-1');
let player2EditButton = document.getElementById('edit-player-2');

function openNameForm(event) {
    let formElement = document.querySelector('aside');
    let backdropElement = document.getElementById('backdrop');

    formElement.style.display = 'block';
    backdropElement.style.display = 'block';
    
    let cancelButton = document.querySelector('aside .btn-invert');
    let submitButton = document.getElementById('submit-btn');

    cancelButton.addEventListener('click', () => {
        formElement.style.display = 'none';
        backdropElement.style.display = 'none';
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let playerNameElement = event.target.parentElement.querySelector('.player-name');
        let playerNameInput = document.getElementById('playername').value;
        if (playerNameInput.replace(/\s+/g, '') === '') {
            console.log('got problem');
        } else {
            playerNameElement.textContent = playerNameInput;
            formElement.style.display = 'none';
            backdropElement.style.display = 'none';
        }
    })
}

player1EditButton.addEventListener('click', openNameForm);
player2EditButton.addEventListener('click', openNameForm);

