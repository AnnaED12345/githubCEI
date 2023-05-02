/* MODULO HTTP:
Ejericio 3: 
Objetivo: Crear un servidor HTTP que sirva archivos estáticos desde un directorio 'public'.

Instrucciones:
1. Crea un directorio 'public' en tu proyecto y añade algunos archivos HTML, CSS y JS.
2. Importa los módulos 'http', 'fs' y 'path' de Node.js.
3. Crea un nuevo servidor HTTP utilizando http.createServer().
4. Añade un listener para el evento 'request' que lea y sirva archivos estáticos desde el directorio
'public'.
5. Utiliza el módulo 'path' para determinar la ruta del archivo solicitado.
6. Utiliza el módulo 'fs' para leer el archivo solicitado.
7. Envía el contenido del archivo como respuesta al cliente.
8. Si el archivo no se encuentra o hay un error, responde con un mensaje de error 404 o 500.
9. Configura el servidor para que escuche en el puerto 3000.
10. Prueba tu servidor visitando diferentes rutas de archivos en tu navegador.
*/

const fs = require("fs");
const path = require ("path");

fs.readdir('./public', (err, files) => {
    if (err) {
    console.error(err);
    } else {
    console.log('Contenido del directorio:', files);
    }
    });

const servidor = http.createServer((req, res) => {
    req.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end();
});

