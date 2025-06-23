alert("Comparación de Cadenas");

let cadena1 = prompt("Ingrese la primer Cadena");
let cadena2 = prompt("Ingrese la segunda Cadena");


if(cadena1 === cadena2) {
    document.querySelector('.content-ej')
.innerHTML = (`Las cadenas son iguales`);
} else { 
    document.querySelector('.content-ej')
.innerHTML = (`Las cadenas son diferentes`);
}


