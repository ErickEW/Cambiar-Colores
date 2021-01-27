var elements = document.getElementsByTagName("body");
console.log("elements", elements);

var body = elements[0];

var colorClasses = ["background-red", "background-green", "background-blue", "background-yellow", "background-purple"];

var cambiarColor = function(){
var selectedColorIndex = Math.floor(Math.random() * colorClasses.length);
var selectedColorClass = colorClasses[selectedColorIndex];

body.className = selectedColorClass;
};

cambiarColor();

var botonCambiar = document.getElementById("boton_cambiar");

botonCambiar.onclick = cambiarColor;

setInterval(cambiarColor, 500);