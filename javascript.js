console.log("doe tie t?");

// hamburgermenu
var menu = document.querySelector(".menu");
var paginas = document.querySelector(".paginas");

menu.addEventListener("click", laatZien);

function laatZien() {

  paginas.classList.toggle("go");

}

// stofzuiger laten draaien
var logo = document.querySelector("header nav img");
var fotos = document.querySelector("main div figure img")

logo.addEventListener("click", rollerCoaster);

function rollerCoaster() {

  fotos.classList.toggle("draai");

}
// sortering omdraaien
var sortering = document.querySelector(".sortering");
var alleFigures = document.querySelector(".stofzuigers")


    sortering.addEventListener("click", verspringen);


function verspringen() {
  alleFigures.classList.toggle("verspringen")
}
