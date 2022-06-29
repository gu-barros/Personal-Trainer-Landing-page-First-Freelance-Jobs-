
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

// Dropdown Menu 
const butao = document.getElementById("btn-mobile")
const nav = document.getElementById("nav")
const classNameActive = "active"

function chanceClasses(){
    nav.classList.toggle(classNameActive)
}

butao.addEventListener('click', chanceClasses)

        
// mudar a propriedade top do menu quando der scroll down caso isso interfira na versao mobile