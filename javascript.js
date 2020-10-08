console.log("doe tie t?");

var menu = document.querySelector(".lala");
var paginas = document.querySelector(".hehe");

menu.addEventListener("click", laatZien);

function laatZien() {

  paginas.classList.toggle("go");

}

var logo = document.querySelector("header nav img");
var fotos = document.querySelector("main div figure img")

logo.addEventListener("click", rollerCoaster);

function rollerCoaster() {

  fotos.classList.toggle("draai");

}

// help!
var sortering = document.querySelector(".sortering");
var alleFigures =
// ik kan die fotos niet ophalen=, geen idee how!
["foto 1",
  ""
]

sortering.addEventListener("click", verspringen);

function verspringen() {
  alleFigures.classList.toggle("verspringen")
}
