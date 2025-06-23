alert("Pida la base y la altura de un triángulo y calcula su área.");

const base = Number(prompt("Ingrese la base del triangulo:"));
const altura = Number(prompt("Ingrese la altura del triangulo:"));

document.querySelector('.Contenido')
.innerHTML = (`El área del triangulo es de: ${0.5* base * altura}`);