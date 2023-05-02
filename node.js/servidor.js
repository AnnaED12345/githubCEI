
/* MODULO HTTP:
Ejericio 1: 
Objetivo: Crear un servidor HTTP simple usando el módulo HTTP de Node.js que responda "¡Hola
Mundo!".

Instrucciones:
1. Importa el módulo 'http' de Node.js.
2. Utiliza el método http.createServer() para crear un nuevo servidor HTTP.
3. Configura el servidor para que escuche en el puerto 3000.
4. Añade un listener para el evento 'request' que envíe una respuesta "¡Hola Mundo!".
5. Prueba tu servidor visitando 'http://localhost:3000' en tu navegador. 
*/

/* const http = require ("http");

const servidor = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1>Holaaa! Soy Anna. Estás en la ruta raíz</h1>');

    } else if (req.url === "/registro"){
        if(req.method === "GET") {
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.end('<h1>Estás en la ruta registro</h1>');
        } 
        if (req.method === "POST") {
            res.writeHead(201, {'Content-Type': 'text/html; charset=UTF-8'});
            res.end('<h1>Estás en la ruta registro. Se ha creado usuario nuevo con éxito</h1>');
        }
        
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('Esta página no existe!');
    }
    
    }); 

    servidor.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
        }); */


/* MODULO HTTP:
Ejericio 2: 
Objetivo: Crear un servidor HTTP que responda a diferentes rutas y métodos HTTP.

Instrucciones:
1. Importa el módulo 'http' de Node.js.
2. Crea un nuevo servidor HTTP utilizando http.createServer().
3. Añade un listener para el evento 'request' que maneje las siguientes rutas y métodos:
4. Ruta: '/', Método: 'GET' - Responder con "¡Bienvenido al servidor!".
5. Ruta: '/about', Método: 'GET' - Responder con "Acerca de nosotros".
6. Ruta: '/contact', Método: 'GET' - Responder con "Información de contacto".
7. Ruta: '/search', Método: 'POST' - Responder con "Estás buscando información"
8. Cualquier otra ruta o método - Responder con "Error 404: Página no encontrada".
9. Configura el servidor para que escuche en el puerto 3000.
10. Prueba tu servidor visitando las diferentes rutas en tu navegador. 
*/

/* const http = require ("http");

const servidor2 = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('¡Bienvenido al servidor!');
    } else if (req.url === "/about" && req.method === "GET") { //manera distinta para escribir el método de la petición
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Acerca de nosotros');
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Información de contacto');
    } else if (req.url === "/search") {
        if(req.method === "POST") {
            res.writeHead(201, {'Content-Type': 'text/html; charset=UTF-8'});
            res.end('<h1>Estás buscando información</h1>');
        } 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Error 404: Página no encontrada');
    }
});

servidor2.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
    }); */


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

fs.mkdir('public', (error) => {
    if (error) {
    console.error('Error al crear el directorio:', error);
    } else {
    console.log('Directorio creado exitosamente');
    }
    });


    

