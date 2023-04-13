/*let nombre = prompt("¿Cómo te llamas?")
console.log ( "Hola, " + nombre)

function operacionesMatematicas (x, y) {
    const suma = x + y;
    const resta = x - y;
    const multiplicacion = x * y;
    const division = x / y; 

    console.log ("La suma es", suma);
    console.log ("La resta es", resta);
    console.log ("La multiplicacion es", multiplicacion);
    console.log ("La división es", division);

}

operacionesMatematicas (2, 3);

function esPar (x) {
    if (x % 2 === 0) {
       console.log (x, "si es par")
    }
    else {
        console.log (x, "no es par")
     }
}

esPar(10);
esPar(7);
esPar(998);

function Calificacion(a) {
    if (a >= 0 && a <= 49) {
        console.log ("suspenso");
    } else if (a >= 50 && a <= 69) {
        console.log ("aprobado");
    } else if (a >= 70 && a <= 89) {
        console.log ("notable");
    } else if (a >= 90 && a <= 100) {
        console.log ("sobresaliente");
    } 
}

Calificacion(30);
Calificacion(75);

let x = prompt("Introducir numero")
let y = prompt("Introducir numero")

let num1= Number(x);
let num2= Number(y);

function comparar (x, y) {
    if (x > y) {
        console.log (x + "es mayor");
    } else if (x < y) {
        console.log (y + "es mayor");
    } else {
        console.log ("Los numeros son iguales");
    }
    console.log(x);
}

comparar(num1, num2);

const password = prompt("Introduce la contraseña");
if (password.lenght >= 8 && password.lenght <= 16) {
    console.log("Tu contraseña es valida")
} else {
    console.log("Tu contraseña no es valida")
}
/* 


/* EJERCICIOS JS GETELEMENT*/

document.getElementById("parrafo1")

