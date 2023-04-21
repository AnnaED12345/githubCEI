/*
EJERICIOS INCIALES
BUCLES
 */



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

/*EJERCICIO 3: determina si es par o impar*/
/*queremos hacer una función para determinar si un número es par 
o impar usando un Operador Módulo: 
La funcón se llama esPar (parametro) {
    ¿Qué tenemos dentro de esa función? 
    Pues si (el parametro dividido entre 2 es igual a 0) {
        ¿Qué pasa? --> Es par
    }
    PERO si no lo es {
        ¿Qué pasa? --> Es impar
    }
}*/
function esPar (x) {
    if (x % 2 === 0) {
        console.log ("Es par")
    }
    else {
        console.log ("Es impar")
    }
}

esPar (10);
esPar (7);

/*EJERCICIO 4: calificacion*/
/*hacemos una funcion llamada calificación que contiene la puntuación (x)
entonces, dentro de la función {
    ¿Qué pasa? 
    Si (la nota es mayor o igual a 0 PERO (&&) es menor o igual a 49) {
        ¿Qué se imprime? "suspenso"
        y así repetidamente con el resto... 
    }
}*/
function calificacion (x) {
    if (x >= 00 && x <=49) {
        console.log ("suspenso")
    }
    if (x >=50 && x <=69 ) {
        console.log ("aprobado")
    }
    if (x >=70 && x <=89 ) {
        console.log ("notable")
    }
    if (x >=90 && x <=100 ) {
        console.log ("sobresaliente")
    }
}

calificacion (66);
calificacion (33);
calificacion (97);

/*EJERCICIO 5: Mayor o menor*/
/*en este caso vamos a determinar una variable x y una variable y
con un prompt que permitirá al usuario introducir los números.
Después creamos dos variables diciendo que x e y son de tipo number.
Tras ello generamos una funcion con el nombre comparar (y sus paramentros
    en este caso queremos comprar dos digitos (x, y)){
        ¿Qué ocurre dentro de la función?{
            si (x es mayor que y){se imprime}
            pero si (x es menor que y){se imprime}
            pero en caso de que (x sea igual a y){se imprime}
    }*/

let x = prompt("Introducir numero")
let y = prompt("Introducir numero")

let num1= Number(x);
let num2= Number(y);

function comparar (x, y) {
    if (x > y) {
        console.log (x + " es mayor ");
    } else if (x < y) {
        console.log (y + " es mayor ");
    } else {
        console.log (" Los numeros son iguales ");
    }
    console.log(x);
}

comparar(num1, num2);

/*EJERCICIO 6: Validación de contraseña*/
/*creamos una variable para contraseña con un prompt. 
después hacemos una función llamada validar sin parámentros{
    dentro de esta: 
    si (la longitud de contraseña (.length) es mayor o igual a 8 O si
    es menor o igual a 6) {la contraseña es valida}
    si no ocurre esto {la contraseña es invalida}
}*/
let contraseña = prompt("Introduce tu contraseña")

function validar () {
    if (contraseña.length >= 8 && contraseña.length <= 16 ) {
        console.log ("La constraseña es válida")
    }
    else {
        console.log("La constraseña no es válida")
    }
}

validar(contraseña);

/*EJERCICIO 1 BUCLES: Tabla de multiplicar*/
/*definimos una variable numero con un prompt para el usuario. 
despues creamos la función multiplicar{
    llevamos a cabo un bucle:
    (let i es igual a 1; 1 tiene que ser menor o igual a 10; y ++){
        que se imprima (la variable * i)
    }
}*/
let numero = prompt("Introduce un número")

function multiplicar (numero) {
    for (let i = 1; i <= 10; i++){
        console.log(i * numero)
    }
}

multiplicar (numero);

/*EJERCICIO 2 BUCLES: Números impares*/
    let numerosImpares = 0;

    for (let numeroActual = 0; numerosImpares < 10; numeroActual++) {
            if (numeroActual % 2 === 1) {
                console.log(numeroActual);
                numerosImpares++;
            }
        }

/*EJERCICIO 3 BUCLES: Secuencia Fibonacci */
let penultimo = 0;
let ultimo = 1;

console.log(penultimo);
console.log(ultimo);

for (let numeroSecuencial = 2; numeroSecuencial < 20; numeroSecuencial++) {
    let suma = penultimo + ultimo; {
        console.log (suma);

        penultimo = ultimo; 
        ultimo = suma; 
    }
}

/*EJERCICIO 4 BUCLES: Adivina el numero */
/*const numeroAleatorio = Math.ceil((Math.random() * 100));
let acierta = false;

do {
    const numeroIntroducido = Number (prompt("Adivina el número"));
    if (numeroIntroducido === numeroAleatorio) {
        console.log("¡Has acertado!")
        acierta = true;
    } else if (numeroIntroducido > numeroAleatorio) {
        console.log("Incorrecto. El número que tienes que adivinar es menor");
    } else {
        console.log("Incorrecto. El número que tienes que acertar es mayor");
    }
} while (!acierta);*/

