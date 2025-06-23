alert("Calculo de promedio");

//Pedir Valores al usuario
let num1 = Number(prompt('Ingresa el primer número:'));
let num2 = Number(prompt('Ingresa el segundo número:'));
let num3= Number(prompt('Ingresa el tercer número:'));

promedio = (num1+num2+num3) / 3;

document.querySelector('.content-ej')
.innerHTML = (`El promedio de los números es: ${promedio}`);
