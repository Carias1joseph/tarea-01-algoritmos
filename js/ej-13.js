alert("Cambío Dolares a Lempiras");

let cantDolares = Number(prompt("Ingrese la cantidad de Dolares"));

cambioLps = cantDolares*26.12;

document.querySelector('.content-ej')
.innerHTML = (`Cambio de Dolares a Lempiras: ${cambioLps}`);


