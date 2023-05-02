
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

    /*SOLUCIÓN:

const calculadora = require ('./calculadora'); 

console.log(calculadora.suma(10, 5));
console.log(calculadora.resta(10, 5));
console.log(calculadora.multiplicacion(10, 5));
console.log(calculadora.division(10, 5)); */


    /* NodeList.js
SISTEMA DE FICHEROS

1: Crea un archivo llamado "app.js" e importa el módulo 'fs' utilizando require().
 */

// const fs = require ('fs');
 
/* 2. Utiliza el método fs.mkdir() para crear un directorio llamado "prueba".
 */

//"prueba" = te crea la carpeta en el directorio en el que estas, es decir en /nodes.js

// fs.mkdir("prueba", (error) => {
//     if (error) {
//         console.log("Error al crear el directorio", error);
//     } else {
//         console.log("Directorio creado exitosamente");
//     }
// }); 

/*las siguientes carpetas se pueden trabajar dentro del else directamente por que ahí nos aseguramos 
de que el archivo se cree una vez creada la carpeta (en el eslse). Si no, al final también vemos como 
hacerlo con funciones.


/* 3. Utiliza el método fs.writeFile() para crear un archivo llamado "texto.txt" dentro del directorio
"prueba". Escribe "Hello, World!" como contenido del archivo. */

//  fs.writeFile ("./prueba/texto.txt", "Hello, World!", (error) => {
//     if (error) {
//         console.error("Error al escribir el archivo", error);
//     } else {
//         console.log("Archivo creado exitosamente")
//     }
// });  

/* 4. Utiliza el método fs.readdir() para leer el contenido del directorio "prueba" e imprimir en la consola
los nombres de los archivos que contiene. */

//  fs.readdir("prueba", (error, ficheros) => {
//     if (error) {
//         console.error("Error al escribir el archivo", error);
//     } else {
//         console.log(ficheros);
//     }
// }); 

/* 5. Utiliza el método fs.readFile() para leer el contenido del archivo "texto.txt" e imprimirlo en la
consola. */

// fs.readFile ("./prueba/texto.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.error("Error al escribir el archivo", error);
//     } else {
//         console.log(data);
//     }
// });  

/* 6. Utiliza el método fs.rename() para cambiar el nombre del archivo "texto.txt" a
"texto_renombrado.txt". */

// fs.rename("./prueba/texto.txt", "./prueba/texto_renombrado.txt", (error) => {
//     if (error) {
//         console.error(error);
//         } else {
//         console.log('El archivo ha sido renombrado correctamente.');
//         }
// }); 


/* 7. Utiliza el método fs.unlink() para eliminar el archivo "texto_renombrado.txt".
 */

// fs.unlink("./prueba/texto_renombrado.txt", (error) => {
//     if (error) {
//         console.error(error);
//         } else {
//         console.log('Se ha eliminado correctamente el archivo texto_renombrado.txt');
//         }
// }); 

/* 8. Utiliza el método fs.rmdir() para eliminar el directorio "prueba". */

//  fs.rdmir("prueba", (error) => {
//     if (error) {
//         console.error(error);
//         } else {
//         console.log('Se ha eliminado correctamente el directorio');
//         }
// }); 



    //SINTETIZAR EL EJERCICIO ANTERIOR en funciones: 

// function gestionar(error, data) {
//     if (error) {
//         console.log("Error:", error);
//     }
//     else if (data) {
//         console.log("Datos recibidos", data);
//     }
//     else {
//         console.log("Comando ejectuado");
//     }
// }

// fs.mkdir("prueba", gestionar);
// fs.writeFile("prueba/texto.txt", "Hello World!", gestionar);
// fs.readdir("prueba", gestionar);
// fs.readFile("prueba/texto.txt", "utf-8", gestionar);
// fs.rename("prueba/texto.txt", "./prueba/texto_renombrado.txt", gestionar);
// fs.unlink("./prueba/texto_renombrado.txt", gestionar);
// fs.rmdir("./prueba", gestionar);






    /* STREAMS EN Node.JS
Ejercicios

1.Cree un programa en Node.js que lea un archivo de texto llamado "input.txt" usando un Readable
Stream. Procese los datos en fragmentos y cuente el número de fragmentos en el archivo. Al finalizar la
lectura, muestre el total de líneas en la consola. */

// const fs = require("fs"); el modulo fs ya esta almacenado en el primer ejercicio.

/* const readStream = fs.createReadStream('input.txt', 'utf-8'); //lee el archivo
let fragmentos = 0; //crear una variable let (por que va a variar) para contar los fragmentos

readStream.on('data', (chunk) => { 
    console.log('Datos recibidos'); //procesa los datos
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

//.toUpperCase() --> para hacerlo en mayúsculas.

/* const readStream2 = fs.createReadStream('input.txt', 'utf-8'); //guardamos los fragmentos en una variable iniciando un stream de lectura
const writeStream2 = fs.createWriteStream ("output.txt", "utf-8"); //guardamos la variable para el nuevo fichero iniciando un flujo de escritura

let chunks = 0; //contar los fragmentos 1 por 1 para conseguir el total de fragmentos y pasarlos a mayúsculas.


//añadimos un listener en el flujo de lectura para que cada vez que recibimos un fragmento lo escribimos con writeStream2 en mayusculas.
readStream2.on ("data", (chunk) => { 
    writeStream2.write(chunk.toUpperCase());
    // console.log(chunk.toUpperCase()); --> para que te aparezcan en mayúsucla.
    chunks++;
})


//añadimos otro listener para cuando el flujo de lectura haya terminado y cerramos el stream de escritura
readStream2.on ("end", () => {
    console.log("Fragmentos totales: ", chunks)
    writeStream2.end ();
})
 */


/* Ejercicios PIPE
    
1. Crea un archivo llamado 'original.txt' y añade cualquier texto que desees. 
*/
const fs = require ('fs');

fs.writeFile('original.txt', 'Texto deseado', (error) => {
    if (error) {
    console.error('Error al escribir el archivo:', error);
    } else {
    console.log('Archivo creado exitosamente');
    }
    });
    
/* 2. Crea un archivo llamado 'copy.js' e importa los módulos 'fs' y 'path'.
 */

/* 3. Utiliza el método fs.createReadStream() para crear un stream de lectura para el archivo 'original.txt'.
 */
    
const readStream3 = fs.createReadStream("./original.txt", "utf-8");

/* 4. Utiliza el método fs.createWriteStream() para crear un stream de escritura para un nuevo archivo
llamado 'copia.txt'.
 */

const writeStream3 = fs.WriteStream("./copia.txt", "utf-8");

/* 5. Utiliza el método .pipe() para copiar el contenido de 'original.txt' a 'copia.txt'.
6. Ejecuta el archivo 'copy.js' con Node.js y verifica que se haya creado correctamente el archivo
'copia.txt' con el mismo contenido que 'original.txt'.
 */

readStream3.pipe(writeStream3);
console.log("Se ha copiado correctamente");

