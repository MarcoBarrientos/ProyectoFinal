// Obtener elementos del DOM
const myElement = document.getElementById("myElement");
const myTitle = document.getElementById("myTitle");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// Colores para los estilos
const titleColors = ["red", "blue", "green", "orange", "purple"];
const textColors = ["yellow", "black", "white", "purple", "teal"];
const pageColors = ["aqua", "gray", "green", "white", "blue"];

let currentTitleColorIndex = 0;
let currentTextColorIndex = 0;
let currentPageColorIndex = 0;

// Asignar eventos a los botones
button1.addEventListener("click", cambiarEstilo1);
button2.addEventListener("click", cambiarEstilo2);
button3.addEventListener("click", cambiarEstilo3);

// Funciones para cambiar estilos
function cambiarEstilo1() {
  myTitle.style.color = titleColors[currentTitleColorIndex];
  currentTitleColorIndex = (currentTitleColorIndex + 1) % titleColors.length;
}

function cambiarEstilo2() {
  myElement.style.color = textColors[currentTextColorIndex];
  currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
}

function cambiarEstilo3() {
  myElement.style.backgroundColor = pageColors[currentPageColorIndex];
  currentPageColorIndex = (currentPageColorIndex + 1) % pageColors.length;
}
