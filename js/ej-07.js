alert("Verificación de Par o Impar");

//Pedir Valores al usuario
const num = Number(prompt("Ingrese un número:"));

if(num % 2 === 0){
document.querySelector('.content-ej')
.innerHTML = (`El numero ${num} es par`);
}else{
    document.querySelector('.content-ej')
.innerHTML = (`El numero ${num} es impar`);
}
