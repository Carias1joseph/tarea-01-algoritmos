alert("Verificación de Contraseña");

contraseña = 'Carias11'

let intento = prompt("Ingrese su contraseña:");


if(contraseña === intento) {
    document.querySelector('.content-ej')
.innerHTML = (`Contraseña Correcta`);
} else { 
    document.querySelector('.content-ej')
.innerHTML = (`Contraseña Incorrecta`);
}

