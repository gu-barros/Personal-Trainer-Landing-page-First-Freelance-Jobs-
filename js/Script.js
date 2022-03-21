// Decrease header when scroll down
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header-mod").style.height = "50px";
        document.getElementById("header-logo").style.height = "35px";
    } else {
        document.getElementById("header-mod").style.height = "75px";
        document.getElementById("header-logo").style.height = "41px";
    }
}