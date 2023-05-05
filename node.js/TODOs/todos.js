/* Instrucciones:
Backend (ExpressJS):
- a. Inicializar un proyecto de Node.js e instalar ExpressJS.
- b. Crear un archivo de servidor (app.js) y configurar ExpressJS.
- c. Definir las rutas para la API (GET, POST, PUT, DELETE) para gestionar las tareas.
- d. Utilizar un array para almacenar las tareas en la memoria del servidor.
 */

const express = require("express"); 
const app = express();
const tareas = [];

app.use(bodyParser.json()); //middleware que pasa el body a req.body 

app.get("/tareas", (req, res) => {
    res.send(tareas);
});

app.post("/tareas", (req, res) => {
    //tareas es el array y push actualiza el array
    tareas.push(req.body.descripcion); 
});

app.put("/tareas/:id", (req, res) => { //id es para identificar la tarea --> id es la posicion en el array
    res.status(201).send(tareas[id]);
});

app.delete("/", (req, res) => {
    res.send("Esta funcionando método DELETE")
});


app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
    });