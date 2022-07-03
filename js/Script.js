
// Decrease header when scroll down
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let headerMod = document.getElementById("header-mod")
    let headerLogo = document.getElementById("header-logo")

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerMod.style.height = "50px";
        headerLogo.style.height = "35px";
    } else {
        headerMod.style.height = "75px";
        headerLogo.style.height = "41px";
    }
}

// Tirar gap do menu dropdown
window.onscroll = function () { scrollFunction2() };

function scrollFunction2() {
    let headerMobile = document.getElementById("menu")
    

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerMobile.style.top = "75px";
    } else {
        headerMobile.style.top = "75px";
        
    }
}

// Dropdown Menu 
const butao = document.getElementById("btn-mobile")
const nav = document.getElementById("nav")
const classNameActive = "active"

function chanceClasses(){
    nav.classList.toggle(classNameActive)
}

butao.addEventListener('click', chanceClasses)

// function para fechar o menu quando clicar em uma das options
const btn1 = document.getElementById("item1")
const btn2 = document.getElementById("item2")
const btn3 = document.getElementById("item3")
const btn4 = document.getElementById("item4")

function backToNormal (){
    nav.classList.toggle(classNameActive)
}

btn1.addEventListener('click', backToNormal)
btn2.addEventListener('click', backToNormal)
btn3.addEventListener('click', backToNormal)
btn4.addEventListener('click', backToNormal)

// Trigger button to switch Cards
const planosButton = document.getElementById("trigger-btn")
const cardsConsult = document.querySelector(".cards") 
const cardsPerso = document.querySelector(".card-personal") 

function triggerButton() {
    if (cardsConsult.style.display === "flex", cardsPerso.style.display === "none") {
        cardsConsult.style.display = "none";
        cardsPerso.style.display = "block";
    } else {
        cardsConsult.style.display = "flex";
        cardsPerso.style.display = "none";
    }
  }