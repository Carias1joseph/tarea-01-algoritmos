alert("Calculo de °Celsius a °Fahrenheit");

//Pedir Valores al usuario
let celsius = Number(prompt('Ingresa la temperatura en Grados Celsius:'));

calculo = ( celsius * 9/5) +32;

document.querySelector('.content-ej')
.innerHTML = (`Temperatura en Grados Fahrenheit: ${calculo} °F`);
