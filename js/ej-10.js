alert("Calcular Aréa de un Circulo");

//Pedir Valores al usuario
let radio = Number(prompt('Ingrese el radio del circulo:'));

area = Math.PI * (Math.pow(radio, 2));

document.querySelector('.content-ej')
.innerHTML = (`Aréa de el circulo: ${area}`);
