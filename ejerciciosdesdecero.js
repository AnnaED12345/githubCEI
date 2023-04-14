
/*EJERCICIO 1: Cuadro de dialogo personalizado*/

/*prompt= cuadro de dialogo 
promt ('texto que quieras añadir')*/

let nombre = prompt('¿Cómo te llamas?');
/* para que aparezca en pantalla usamos console.log("entre comillas el
texto que queramos que aparezca" + variable)
console.log('Hola,' + nombre)*/
console.log('Hola, ' + nombre);

/*EJERCICIO 2: Operaciones matematicas */
/* Aritméticos: Operadores para realizar operaciones matemáticas.*/
/*function nombredelaFuncion (los paramentros de la función)*/
function operacionesMatematicas (x, y) {
    /* dentro de esta función qué vamos a hacer: 
    const (por que es una variable constante) nombredelaconstante = x + y;*/
    const suma = x + y;
    const resta = x - y;
    const multiplicacion = x * y;
    const division = x / y;

    /*console.log para que aparezca en pantalla 
    console.log ("texto que queremos que aparezca", variable*/
    console.log ("La suma es", suma);
    console.log ("La resta es", resta);
    console.log ("La multiplicacion es", multiplicacion);
    console.log ("La división es", division);
}

/*ejecutar diciendo que x = 2 e y = 3*/
operacionesMatematicas (2, 3);

/*EJERCICIO 2: determina si es par o impar*/




