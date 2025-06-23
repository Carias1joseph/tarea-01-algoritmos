alert("Solicite dos números al usuario y muestra el resultado de la multiplicación y división de los mismos.");

const num1 = Number(prompt("Ingrese el 1er Numero"));
const num2 = Number(prompt("Ingrese el 2do Numero"));


document.querySelector('.Contenido')
.innerHTML = `La multiplicación de ${num1} x ${num2} es: ${num1 * num2} <br>La División de ${num1} ÷ ${num2} es: ${num1 / num2}`;
 