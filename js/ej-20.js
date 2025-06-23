alert("El Combustible");

// Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos por su carro y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro

let km = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
let litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

let consumoPorKm = litros / km;

document.querySelector('.content-ej')
.innerHTML = (`Consumo de combustible por km: ${consumoPorKm} litros/km`);