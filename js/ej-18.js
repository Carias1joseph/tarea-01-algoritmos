alert("Tanque de Agua");

// Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el 25% se dedica al riego. Diseñe un programa que haga lo siguiente:
// Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
// Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
// en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
// 1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
// pies cúbicos.

const litrosaMetros3 = 1 / 1000;
const yardasaPies3 = 27;
const pieaMetro3 = 0.0283;

// Entradas (puedes cambiar estos valores)
let tanqueLitros = Number(prompt('Ingrese cantidad en litros'));
let tanqueYardasCubicas = Number(prompt('Ingrese cantidad en Yardas'));


let volumenLitros = tanqueLitros * litrosaMetros3;
let volumenYardas = tanqueYardasCubicas * yardasaPies3 * pieaMetro3;

let totalMetros3 = volumenLitros + volumenYardas;

let consumoDomesticom3 = totalMetros3 * 0.75;
let riegoMetros3 = totalMetros3 * 0.25;


let consumoDomesticoft3 = consumoDomesticom3 / pieaMetro3;
let riegoPies3 = riegoMetros3 / pieaMetro3;


console.log("Total de agua en metros^3:", totalMetros3);
console.log("Consumo doméstico:", consumoDomesticom3.toFixed(2), "m^3 /", consumoDomesticoft3.toFixed(2), "ft^3");
console.log("Riego: ", riegoMetros3.toFixed(2), "m^3 /", riegoPies3.toFixed(2), "ft^3");
