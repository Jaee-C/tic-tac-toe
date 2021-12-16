let player1EditButton = document.getElementById("edit-player-1");
let player2EditButton = document.getElementById("edit-player-2");
let formElement = document.querySelector("aside");
let backdropElement = document.getElementById("backdrop");
let nameErrorElement = document.getElementById("name-input-error");

function openNameForm(event) {
  formElement.style.display = "block";
  backdropElement.style.display = "block";

  let playerForm = event.target.parentElement.id;

  if (playerForm == "player-1") {
    formElement.id = "1";
  } else {
    formElement.id = "2";
  }

  nameErrorElement.textContent = "";
  document.getElementById("playername").focus();
}

player1EditButton.addEventListener("click", openNameForm);
player2EditButton.addEventListener("click", openNameForm);

let cancelButton = document.querySelector("aside .btn-invert");

cancelButton.addEventListener("click", () => {
  let playerNameInput = document.getElementById("playername");

  playerNameInput.value = '';

  formElement.id = "";

  formElement.style.display = "none";
  backdropElement.style.display = "none";
  
});

let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let playerNameElement = document
    .getElementById("player-" + formElement.id)
    .querySelector(".player-name");
  let playerNameInput = document.getElementById("playername");

  if (playerNameInput.value.replace(/\s+/g, "") === "") {
    nameErrorElement.textContent = "Invalid name";
  } else {
    playerNameElement.textContent = playerNameInput.value;
    formElement.style.display = "none";
    backdropElement.style.display = "none";
  }

  playerNameInput.value = '';
});
