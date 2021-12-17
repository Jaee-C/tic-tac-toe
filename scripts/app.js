/** Variable declarations */
let editedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');

const editPlayer1Btn = document.getElementById('edit-player-1');
const editPlayer2Btn = document.getElementById('edit-player-2');
const overlayCancelBtn = document.getElementById('overlay-cancel-btn');
const startNewGameBtn = document.getElementById('start-game-btn');

// Open config pop up window
editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

// Close config pop up window
overlayCancelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

// Player config form submission
formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);
