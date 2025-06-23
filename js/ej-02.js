alert("Escriba un programa que solicite al usuario dos numeros y los reste");

const num1 = Number(prompt("Ingrese el 1er Numero"));
const num2 = Number(prompt("Ingrese el 2do Numero"));


document.querySelector('.contenido').innerHTML = `La resta de ${num1} - ${num2} es: ${num1 - num2}`;

