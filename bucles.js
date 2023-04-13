
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

const elementosDestacados = document.getElementsByClassName('destacado')
for (let i=0; i< elementosDestacados.lenght; i++) {
    elementosDestacados[i].style = "background-color: yellow";
}

