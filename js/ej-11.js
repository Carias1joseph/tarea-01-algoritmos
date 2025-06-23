alert("Verificar un numero si es primo");

//Pedir Valores al usuario
let number = Number(prompt('Ingrese el numero a comprobar:'));


if(number % i == 0) {
    document.querySelector('.content-ej')
.innerHTML = (`${number} es primo`);
} else{
    document.querySelector('.content-ej')
.innerHTML = (`${number} no es primo`);
}
