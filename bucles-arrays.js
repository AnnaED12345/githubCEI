
/* bucle multiplicación
const num = prompt ("Introduce un número");
const numero = Number(num);

for (let n=1; n <=10; n++) {
    console.log(numero + "*" + n + "=")
}
*/

/*números impares*/ /*
let numerosImpares = 0;
let numeroActual = 0;

while (numerosImpares < 10) {
    if (numeroActual % 2 === 1); {
        console.log(numeroActual);
        numerosImpares++;
    }
}
*/

/*const elementosDestacados = document.getElementsByClassName('destacado')
for (let i=0; i< elementosDestacados.lenght; i++) {
    elementosDestacados[i].style = "background-color: yellow";
}*/


//* EJERCICIOS ARRAYS
/*1*/
const nombres = ["Juan", "Jose", "María", "Sandra", "Luisa"];

for (let arrayPosition = 0; arrayPosition < nombres.length; arrayPosition++) {
    console.log("Accediendo al elemento en la posición: ", arrayPosition);
    const elementoActual = nombres[arrayPosition];
    console.log(elementoActual);
}

/*Array 2*/
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let suma = 0;
console.log('Array de numeros:', numeros);
console.log('Suma:', suma);

for (let arrayPosition = 0; arrayPosition < numeros.length; arrayPosition++) {
    console.log('Posición actual:', arrayPosition);
    console.log('Elemento que vamos a sumar:', numeros[arrayPosition]);

    console.log('Suma a realizar:', suma, '+', numeros[arrayPosition], '=', suma + numeros[arrayPosition]);

    suma += numeros[arrayPosition];
}

/*Array 3*/

const matriz = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];

for (let punteroFila = 0; punteroFila < matriz.length; punteroFila++) {
    const filaActual = matriz[punteroFila];
    console.log(filaActual);

    for (let punteroColumna = 0; punteroColumna < filaActual.length; punteroColumna++) {
        const valor = filaActual[punteroColumna];
        console.log(filaActual);
    }
}

/*Array 4: encuentra el numero mayor y el menor*/
[20, 5, 34]

function mayorYmenor (numeros2) {
    let mayor = numeros2[0];
    let menor = numeros2[0];

    for (let puntero = 0; puntero < numeros2.length; puntero++) {
        const numeroActual = numeros2[puntero];

        if (numeroActual > mayor) {
            mayor = numeroActual;
        }

        if (numeroActual < menor) {
            menor = numeroActual;
        }
    }

    console.log ("Mayor", mayor);
    console.log ("Menor", menor);
}

mayorYmenor([20, 5, 10, 55, 2]);

/*Array 5: eliman numeros duplicados*/

/*const numeros3 = [1,2,3,4,,2,1];
const unicos = [];

for (let posicion = 0; posicion < numeros3.length; posicion++){
    const elementodelarray = numeros3[posicion];
    if (!unicos.includes(numeros[posicion])){
        unicos.push(elementodelarray);
    }
}

console.log(unicos);*/

function eliminarDuplicados(array) {
    const nuevoArray = [];

    for (let posicion = 0; posicion < nuevoArray.length; posicion++){
        const elementodelarray = nuevoArray[posicion];
        if (!unicos.includes(numeros[posicion])){
            unicos.push(elementodelarray);
        }
    }
}

console.log;

/*SubArray 1: extrae subarray*/
const numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const subarray = numbers4.slice(2,5);
console.log(subarray);

/*SubArray 2: elimina nombres*/
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const eliminados = names.splice(0, 2);
console.log(eliminados);

/*SubArray 3: reemplaza elementos*/
const letters = ["a", "b", "c", "d", "e", "f", "g"];
const reemplazo = letters.splice(3, 2, "x", "y");
console.log(reemplazo); 
console.log(letters);

/*SubArray 4: copia elementos*/
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copia = numbers5.copyWithin(3, 0, 2);
console.log(copia); 
console.log(numbers5);

/*SubArray 5: reemplaza palabras*/
const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
const reemplazoPalabras = words.fill("OK", 1, 4,);
console.log(reemplazoPalabras); 

/*SubArray 6: inserta array sin modificar*/

const numbers6 = [1, 2, 3, 7, 8, 9];
const inicio = numbers6.slice(0,3); //[subarray: 1, 2, 3]
const fin = numbers6.slice (3, 6); // [subarray: 7, 8, 9]

const resultado = inicio.concat(4, 5, 6).concat(fin); 
console.log(resultado);
console.log(numbers6);

/*SubArray 7: Reduce el array*/
const integers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const reducido = integers.slice(0, 5);
console.log(reducido);

/*SubArray 8: Frutas*/
const words1 = ["apple", "banana", "cherry", "date", "fig", "grape"];
const tresFrutas = words1.slice(1,3);
console.log(words1);
console.log(tresFrutas);
const frutasEliminadas = words1.splice(1, 3);
console.log(frutasEliminadas);
console.log(words1);