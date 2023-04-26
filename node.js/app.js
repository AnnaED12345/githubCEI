/* Node.js
ejercicio 1. 

Crea un archivo llamado "calculadora.js" y define las siguientes funciones dentro de él: suma, resta,
multiplicación y división de 2 números = ./calculadora.js.
- Exporta las funciones utilizando module.exports.
- En un archivo llamado "app.js", importa el módulo "calculadora.js" utilizando require().
- Utiliza las funciones importadas para realizar las siguientes operaciones:
- suma(10, 5)
- resta(10, 5)
- multiplicacion(10, 5)
- division(10, 5)
- Imprime los resultados en la consola. */

const calculadora = require ('./calculadora'); 

console.log(calculadora.suma(10, 5));
console.log(calculadora.resta(10, 5));
console.log(calculadora.multiplicacion(10, 5));
console.log(calculadora.division(10, 5));



