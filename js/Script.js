// Decrease header when scroll down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let headerMod = document.getElementById("header-mod");
  let headerLogo = document.getElementById("header-logo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerMod.style.height = "50px";
    headerLogo.style.height = "35px";
  } else {
    headerMod.style.height = "75px";
    headerLogo.style.height = "41px";
  }
}

// Tirar gap do menu dropdown
window.onscroll = function () {
  scrollFunction2();
};

function scrollFunction2() {
  let headerMobile = document.getElementById("menu");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerMobile.style.top = "75px";
  } else {
    headerMobile.style.top = "75px";
  }
}

// Dropdown Menu
const butao = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const classNameActive = "active";

function chanceClasses() {
  nav.classList.toggle(classNameActive);
}

butao.addEventListener("click", chanceClasses);

// function para fechar o menu quando clicar em uma das options
const btn1 = document.getElementById("item1");
const btn2 = document.getElementById("item2");
const btn3 = document.getElementById("item3");
const btn4 = document.getElementById("item4");

function backToNormal() {
  nav.classList.toggle(classNameActive);
}

btn1.addEventListener("click", backToNormal);
btn2.addEventListener("click", backToNormal);
btn3.addEventListener("click", backToNormal);
btn4.addEventListener("click", backToNormal);

// Trigger button to switch Cards
const cardsConsult = document.querySelector(".cards");
const cardPersonalContainer = document.querySelector(".cards-personal");

const consultoriaButton = document.querySelector(".button-consultoria");
const personalButton = document.querySelector(".button-personal");

personalButton.addEventListener("click", triggerButtonToPersonal);
consultoriaButton.addEventListener("click", triggerButtonToCasultoria);


// adicionar classe no css onde de toggle p/ ficar com o código mais clean
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