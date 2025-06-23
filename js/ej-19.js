alert("La Compra");

// Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que calcule el precio total a pagar por la compra.

let precioProducto = 100; 
let porcentajeIVA = 15; 

let iva = (precioProducto * porcentajeIVA) / 100;
let totalPagar = precioProducto + iva;

document.querySelector('.content-ej')
.innerHTML = `Precio del producto: ${precioProducto}<br>IVA ${porcentajeIVA}%: ${iva} lps<br>Total a pagar: ${totalPagar}`;
