alert("Solicite una cadena de texto al usuario y muestra la longitud de la misma.");

const cadena = prompt("Ingrese una cadena de texto:");


document.querySelector('.content-ej')
.innerHTML = (`Tamaño de la cadena es: ${cadena.length}<br><br> Cadena: ${cadena}`);