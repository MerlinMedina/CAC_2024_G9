const btn_menu = document.getElementById("nav_hamburguer");
const btn_login = document.getElementById("btn-login");
const icon_login = document.getElementById("icon-login");

function removeFixed() {
    document.getElementById("header").classList.remove("fixed-top");

}

btn_menu.addEventListener("click", removeFixed);
btn_login.addEventListener("click", removeFixed);
icon_login.addEventListener("click", removeFixed);

