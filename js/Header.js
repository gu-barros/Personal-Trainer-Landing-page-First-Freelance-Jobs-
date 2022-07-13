function naoBugar() {
    let headerMod = document.getElementById('header-mod');
    if(headerMod.classList.contains("cabecalho")) {
        scrollMudarHeader();
    }else{
        scrollMudarHeaderComMenuAtivado();
    }
}

window.onscroll = function () {
    naoBugar();
    scrollMudarMenuDrop();
    // scrollMudarHeader();     
}
  

function scrollMudarHeaderComMenuAtivado() {
    let headerMod = document.getElementById('header-mod');
    let headerLogo = document.getElementById('header-logo');
    let corDoHeader = "#8DCFB4"

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerMod.style.backgroundColor = corDoHeader;
        headerMod.style.backgroundImage = "none"
        headerMod.style.height = "50px";
        headerLogo.style.height = "35px";
    } else {
        headerMod.style.height = "75px";
        headerLogo.style.height = "41px";
    }
}


// mudar size e cor do header no scroll
function scrollMudarHeader() {
    let headerMod = document.getElementById('header-mod');
    let headerLogo = document.getElementById('header-logo');
    let corDoHeader = "#8DCFB4"

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerMod.style.backgroundColor = corDoHeader;
        headerMod.style.backgroundImage = "none"
        headerMod.style.height = "50px";
        headerLogo.style.height = "35px";
    } else {
        headerMod.style.backgroundColor = "transparent";
        headerMod.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0))";
        headerMod.style.height = "75px";
        headerLogo.style.height = "41px";
    }
}
// Tirar gap do menu dropdown
function scrollMudarMenuDrop() {
  let headerMobile = document.getElementById("menu");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerMobile.style.top = "50px";
  } else {
    headerMobile.style.top = "75px";
  }
}

// Dropdown Menu
const butao = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const menuMobile = document.getElementById("menu");
const classNameActive = "active";
const cabecalhoAtivado = "cabecalhoAtivado";


function chanceClasses() {
    let headerMod = document.getElementById('header-mod');

    headerMod.classList.toggle(cabecalhoAtivado)
    headerMod.classList.toggle("cabecalho")

  nav.classList.toggle(classNameActive);
  menuMobile.classList.toggle("dropAnimation");
  
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
