/*
ARRAYS Y SUBARRAYS
ARROW FUNCTIONS
DESESTRUCTURACIÓN DE ARRAYS
TIMERS */


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



/* Ejercicio Crea una función que busque un elemento específico en un Array y muestre su índice si está
presente. Si no se encuentra, muestra un mensaje indicando que el elemento no está en el Array.:*/
function encontrarElemento(array, elemento) {
    const index = array.indexOf(elemento);

    if (index === -1) {
        console.log("El elemento no está en el Array");
    } else {
        console.log("El índice del elemento es:", index);
    }
}
encontrarElemento("esto")



/*Ejercico 4: Escribe una función que una dos Arrays en uno solo.*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayFusionado = array1.concat(array2);
console.log(arrayFusionado)



/*Ejercicio 5: Escribe una función que cuente la cantidad de palabras en una cadena de texto.*/
const texto = "Hola cuenta cuantas palabras hay";
const palabras = texto.split(" ");
console.log("El texto introducido tiene", palabras.lenght, "palabras.");




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
const frutasEliminadas = words1.splice(1, 2);
console.log(frutasEliminadas);
console.log(words1);


/* Arrays.2 (diapo 26)
Ejercicio 1: Utiliza el método .map() para elevar al cubo cada 
elemento de un array de números. */

const numeros4 = [2, 3, 4];
function elevado(elemento) {
    return elemento ** 3;
}
const alCubo = numeros4.map(elevado);
console.log("Números elevados al cubo", alCubo);



/*Arrays.2 
Ejercicio 2: Escribe una función que utilice el método .filter()
para encontrar todos los números pares en unarray de números.
 */

const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sacarPar(elemento) {
    return elemento % 2 === 0;
}
const numerosPares = numeros5.filter(sacarPar);
console.log("Estos son los números pares", numerosPares);



/*Array.2
Ejercicio 3: Utiliza el método .some() para verificar si hay 
algún número negativo en un array de números. */

const numeros6 = [1, 2, 3];

function verificar(elemento) {
    return elemento < 0;
}
const numeroNegativo = numeros6.some(verificar);
console.log("¿Hay número negativos?", numeroNegativo);



/*Array.2
Ejercicio 4: Escribe una función que utilice el método .every()
para comprobar si todos los elementos de un array de cadenas de 
texto tienen una longitud mínima de 3 caracteres.
 */

const elementosTexto = ["no", "si"];

function comprobarLongitud(elemento){
    return elemento.length >= 3;
}

const cumpleLongitudMin = elementosTexto.every(comprobarLongitud);
console.log("¿Tienen los elementos una longitud mín de 3?", cumpleLongitudMin);



/*Array.2
Ejercicio 5: Utiliza el método .find() para buscar el primer 
objeto en un array de objetos que tenga un valor específico para 
una propiedad determinada. Por ejemplo, los objetos pueden ser 
personas y la condición puede ser tener más de 30 años.
*/

const personas = [
    {Name:"Joaquín", age:22},
    {name:"Alba", age: 33},
    {name:"Martín", age: 46}
];

function edadX(elemento) {
    return elemento.age > 30; 
}

const unaPersona = personas.find(edadX);
console.log(unaPersona);


/*Array.2
Ejercicio 6: Repite el ej anterior pero con findIndex() 
*/
const personas1 = [
    {Name:"Joaquín", age:22},
    {name:"Alba", age: 33},
    {name:"Martín", age: 46}
];

function edadX(elemento) {
    return elemento.age > 30; 
}

const unaPersona1 = personas1.findIndex(edadX);
console.log(unaPersona1);

/*Array.2
Ejercicio 7: Utiliza el método .reduce() para calcular la suma 
de todos los elementos de un array de números.
*/



/*Arrow functions
Transforma las siguientes funciones en arrow functions
*/

/*Funcion 1: 
function square(x) {
    return x * x;
    }
*/

const square = (x) => x * x;

console.log(square(3)); 


/* F2:
function greet(name) {
    return `Hello, ${name}!`;
    }
 */

const greet = name => "Hello, ${name}";


/* F3:
function sum(a, b, c) {
    return a + b + c;
    }
 */

const sum = (a, b, c) => {a + b + c}; 


/* Arrow Functions
Ejercicio 2: Dado el siguiente array de objetos, utiliza una 
arrow function para ordenarlos alfabéticamente por nombre. 
*/

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Eve', age: 35 },
    { name: 'Charlie', age: 28 }
    ];

    const ordenar = (a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name){
            return -1;
        } else {
            return 0;
        }
    };

    people.sort(ordenar);
    console.log(people);

/* Arrow Functions
Ejercicio 5: Dado el siguiente array de objetos, que 
representa un carrito de compras, utiliza una arrow function
para calcular el total del carrito. 
*/

const cart = [
    { product: 'Apple', price: 1, quantity: 3 },
    { product: 'Banana', price: 2, quantity: 2 },
    { product: 'Orange', price: 1.5, quantity: 4 }
    ];
    
    const sumar = (acumulador, elemento) => {
        const costeProducto = elemento.price * elemento.quantity;
        return acumulador + costeProducto;
        };

    const total = cart.reduce(sumar, 0);
    console.log("El precio total del carrito es ${tota}");

/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejericio 1: Desestructura el array para obtener las tres primeras frutas 
y guardarlas en variables individuales.
*/
const fruits = ["apple", "banana", "cherry", "orange", "grape"];
const [fruta1, fruta2, fruta3] = fruits;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejericio 1: Desestructura el objeto para obtener el firstName, lastName 
y age. Crea una variable llamada name que contenga el nombre completo.
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    };

const {firstName, lastName, age} = person;
console.log(firstName);
console.log(lastName);
console.log(age);

const nameFruits = (firstName + " " + lastName);
console.log(nameFruits);

/*También se puede hacer con:
const name = "Me llamo: ${fisrtName} ${lastName} ${age}" */



/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejercicio 3: Desestructura el objeto data para obtener el nombre y el 
precio del primer producto. 
*/

const data = {
    results: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
        },
    ],
};

const { results } = data;
const [product1] = results; 
const {name, price} = product1; /* no hace falta coma, por que en un objeto
no hay posición*/

console.log("El precio del " + name + " es " + price);



/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejercicio 4: Utiliza el Spread Operator para crear un nuevo array que 
combine los elementos de array1 y array2.
*/

const array01 = [1, 2, 3];
const array02 = [4, 5, 6];

const arrayCombinado = [...array01, ...array02]; //-> [ARRAY] // {OBJETOS}
console.log("Array con spread operator " + arrayCombinado);

/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejercicio 5: Utiliza el Spread Operator para crear un nuevo objeto que 
combine las propiedades de obj1 y obj2.
*/

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const objCombinado = {...obj1, ...obj2}; //-> [ARRAY] // {OBJETOS}
console.log("Objeto con spread operator", objCombinado);
/*Atención con  el console.log --> se inserta con , por que con + o con ${}
 nos puede dar error al convertir un objeto por que lo que hace es
 convertirlo en una cadena de texto
 */


/* DESESTRUCTURACIÓN DE ARRAYS Y OBJETOS
Ejercicio 6: Utiliza el Spread Operator para clonar el objeto user y 
actualizar la propiedad location a "Londres".
*/

const user = {
    name: "Alice",
    age: 25,
    location: "París",
};

const updObject = {...user, location:"Londres"};
console.log(updObject);
console.log(user);
