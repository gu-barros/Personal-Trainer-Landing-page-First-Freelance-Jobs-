
// Trigger button to switch Cards
const cardsConsult = document.querySelector(".cards");
const cardPersonalContainer = document.querySelector(".cards-personal");

const consultoriaButton = document.querySelector(".button-consultoria");
const personalButton = document.querySelector(".button-personal");

personalButton.addEventListener("click", triggerButtonToPersonal);
consultoriaButton.addEventListener("click", triggerButtonToCasultoria);


function triggerButtonToPersonal() {
  if (cardPersonalContainer.classList.contains("no-display")) {
    cardPersonalContainer.classList.remove("no-display");
    cardPersonalContainer.classList.add("animar");

    cardsConsult.classList.add("no-display");
    cardsConsult.classList.remove("animar");
  }
}

function triggerButtonToCasultoria() {
  if (cardsConsult.classList.contains("no-display")) {
    cardsConsult.classList.remove("no-display");
    cardsConsult.classList.add("animar");

    cardPersonalContainer.classList.add("no-display");
    cardPersonalContainer.classList.remove("animar");
  }
}