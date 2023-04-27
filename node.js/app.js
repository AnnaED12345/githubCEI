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

/* const calculadora = require ('./calculadora'); 

console.log(calculadora.suma(10, 5));
console.log(calculadora.resta(10, 5));
console.log(calculadora.multiplicacion(10, 5));
console.log(calculadora.division(10, 5)); */


/* NodeList.js
sistema de ficheros 
//REPASAR CLASE Y RECTIFICAR EJERCICIOS: 

1: Crea un archivo llamado "app.js" e importa el módulo 'fs' utilizando require().
 */

/* const fs = require ('fs');
 */
/* 2. Utiliza el método fs.mkdir() para crear un directorio llamado "prueba".
 */

//"prueba" = te crea la carpeta en el directorio en el que estas, es decir en /nodes.js

/* fs.mkdir("prueba", (error) => {
    if (error) {
        console.error("Error al crear el directorio", error);
    } else {
        console.log("Directorio creado exitosamente");
    }
}); */

/* 3. Utiliza el método fs.writeFile() para crear un archivo llamado "texto.txt" dentro del directorio
"prueba". Escribe "Hello, World!" como contenido del archivo. */

/* fs.writeFile ("./prueba/texto.txt", "Hello, World!", (error) => {
    if (error) {
        console.error("Error al escribir el archivo", error);
    } else {
        console.log("Archivo creado exitosamente")
    }
});  */

/* 4. Utiliza el método fs.readdir() para leer el contenido del directorio "prueba" e imprimir en la consola
los nombres de los archivos que contiene. */

/* fs.readdir("prueba", (error, ficheros) => {
    if (error) {
        console.error("Error al escribir el archivo", error);
    } else {
        console.log(ficheros);
    }
}); */

/* 5. Utiliza el método fs.readFile() para leer el contenido del archivo "texto.txt" e imprimirlo en la
consola. */

/* fs.readFile ("./prueba/texto.txt", "utf-8", (error, data) => {
    if (error) {
        console.error("Error al escribir el archivo", error);
    } else {
        console.log(data);
    }
});  */

/* 6. Utiliza el método fs.rename() para cambiar el nombre del archivo "texto.txt" a
"texto_renombrado.txt". */

/* fs.rename("./prueba/texto.txt", "./prueba/texto_renombrado.txt", (error) => {
    if (error) {
        console.error(error);
        } else {
        console.log('El archivo ha sido renombrado correctamente.');
        }
}); */

/* 7. Utiliza el método fs.unlink() para eliminar el archivo "texto_renombrado.txt".
 */

/* fs.unlink("./prueba/texto_renombrado.txt", (error) => {
    if (error) {
        console.error(error);
        } else {
        console.log('Se ha eliminado correctamente el archivo texto_renombrado.txt');
        }
}); */

/* 8. Utiliza el método fs.rmdir() para eliminar el directorio "prueba". */

/* fs.rdmir("prueba", (error) => {
    if (error) {
        console.error(error);
        } else {
        console.log('Se ha eliminado correctamente el directorio');
        }
}); */

/* STREAMS EN Node.JS
Ejercicios

1.Cree un programa en Node.js que lea un archivo de texto llamado "input.txt" usando un Readable
Stream. Procese los datos en fragmentos y cuente el número de fragmentos en el archivo. Al finalizar la
lectura, muestre el total de líneas en la consola. */

/* const fs = require("fs");
const fragmentos = 0;

const readStream = fs.createReadStream('input.txt', 'utf8'); //lee el archivo

readStream.on('data', (chunk) => { 
    console.log('Datos recibidos', chunk); //procesa los datos
    fragmentos++ //para contar el número de fragmentos
    });

    readStream.on('end', () => {
        console.log('Fragmentos totales: ', fragmentos );
        });  */

/* 2. Cree un programa en Node.js que lea un archivo de texto llamado "input.txt" usando un Readable
Stream. A medida que se procesan los fragmentos de datos, convierta todas las letras a mayúsculas.
Luego, escriba los fragmentos transformados en un nuevo archivo llamado "output.txt" utilizando un
Writable Stream. Al finalizar la escritura, muestre un mensaje en la consola indicando que la copia y
transformación se completaron con éxito. */

//.toUpperCase() 
//REPASAR Y ACTUALIZAR EJERCICIOS

const readStream2 = fs.createReadStream('input.txt', 'utf8');
const writeStream2 = fs.createWriteStream ("output.txt", "utf-8");

let chunk = 0;
readStream2.on ("Data", (chunk) => {
    writeStream2.write(chunk.toUpperCase());
    chunk++;
})

readStream2.on ("end", () => {
    console.log("Fragmentos totales: ", chunk)
})







