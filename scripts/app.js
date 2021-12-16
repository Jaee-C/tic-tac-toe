/** Variable declarations */

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');

const editPlayer1Btn = document.getElementById('edit-player-1');
const editPlayer2Btn = document.getElementById('edit-player-2');
const overlayCancelBtn = document.getElementById('overlay-cancel-btn');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

overlayCancelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);