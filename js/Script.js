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



