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
const http = require ("http");

const server = http.createServer((req, res) => {
    /* const readStream = fs.createReadStream('./public/entregable_temporizador.html', 'utf-8'); //guardamos el fichero en una variable  
    readStream.on('open', (chunk) => {
        console.log('Nuevo fragmento de datos:', chunk);
        });  */
    /* fs.readdir("public", (error, ficheros) => {
            if (error) {
                console.error("Error al escribir el archivo", error);
            } else {
                console.log(ficheros);
            }
        });  */
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    fs.readFile ("./public/entregable_temporizador.html", "utf-8", (error, data) => {
        if (error) {
            console.error("Error al escribir el archivo", error);
        } else {
            res.write(data);
        }
        res.end();
    }); 

    /* res.statusCode = 200;
    res.setHeader('Content-Type', contentType); */
    /* readStream.pipe(res); */
    
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


/* 
const server = http.createServer((req, res) => {
    const ruta = path.join(__dirname, 'public', req.url);
    ruta.on('request', () => {
    
    } )

    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    res.end("datos");
});

const listener = server.listen(3000) */

/* server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
        var request = http.request({
        port: 3000,
        host: '127.0.0.1',
      });
      request.end();
      request.once('response', (res) => {
        console.log(res.statusCode);
      });
    }); */

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    const filePath = path.join(__dirname, "public", req.url);
    fs.readdir("filePath", (err, files) => {
        if (err) {
        res.writeHead(404);
        res.end("Archivo no encontrado")
        } else {
            res.write(files);
        }
        });
    res.end("hola");
}); */


