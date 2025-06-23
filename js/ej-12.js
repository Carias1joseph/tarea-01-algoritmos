alert("Calculadora Simple");

let num1 = Number(prompt('Ingrese el primer numero'));
let num2 = Number(prompt('Ingrese el segundo numero'));

//Verificar operación a realizar
let opcion = Number(prompt('Ingrese operación ha realizar:\n 1. Suma\n 2.Resta\n 3.Multiplicación\n 4. Division'));

switch(opcion) {
    case 1 : let suma = num1+num2;
    console.log(`Resultado: ${suma}`);
    
    case 2: let resta = num1-num2;
    console.log(`Resultado: ${resta}`);

    case 3: let multiplicacion = num1*num2;
    console.log(`Resultado: ${multiplicacion}`);
    
    case 4: let division = num1/num2;
    console.log(`Resultado: ${division}`);
}

