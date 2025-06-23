alert("Unidades de Medida");


let cantidadPies = parseInt(prompt('Ingrese cantidad en Pies:'));
let cantidadMetros = parseInt(prompt('Ingrese cantidad en Metros:'))

// Equivalencias
const pieaMetros = 0.3048;
const pulgaMetros = 0.0254;
const yardaPies = 3;
const metroaMillas = 1 / 1609;

let piesEnMetros = cantidadPies * pieaMetros;
let totalMetros = piesEnMetros + cantidadMetros;


let totalPulgadas = totalMetros / pulgaMetros;
let totalYardas = (totalMetros / pieaMetros) / yardaPies;
let totalMillas = totalMetros * metroaMillas;


console.log("Total metros:", totalMetros.toFixed(2));
console.log("Total en pulgadas:", totalPulgadas.toFixed(2));
console.log("Total en yardas:", totalYardas.toFixed(2));
console.log("Total en millas:", totalMillas.toFixed(6));
