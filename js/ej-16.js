alert("Atletas");

// Tiempo del Atleta 1
let minutos1 = 45;
let segundos1 = 30;

// Tiempo del Atleta 2
let minutos2 = 38;
let segundos2 = 50;


let totalSegundos = (minutos1 * 60 + segundos1) + (minutos2 * 60 + segundos2);

// Conversión a segundos
let horas = Math.floor(totalSegundos / 3600);
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;

document.querySelector('.content-ej')
.innerHTML = (`Tiempo total: ${horas} horas, ${minutos} minutos, ${segundos} segundos`);