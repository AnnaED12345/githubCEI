/* Instrucciones:
Backend (ExpressJS):
- a. Inicializar un proyecto de Node.js e instalar ExpressJS.
- b. Crear un archivo de servidor (app.js) y configurar ExpressJS.
- c. Definir las rutas para la API (GET, POST, PUT, DELETE) para gestionar las tareas.
- d. Utilizar un array para almacenar las tareas en la memoria del servidor.
 */

const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");
const tareas = ["Estudiar", "Limpiar", "Comprar"];

app.use(bodyParser.json()); //middleware que pasa el body a req.body 

app.get("/", (req, res) => { //con el metodo get leemos los recursos
    res.send(tareas); //respondemos enviando el array de tareas
});

app.post("/", (req, res) => { //post para añadir tareas 
    if (req.body.tarea === undefined){ //si no se añade ninguna tarea, da error
        res.status(400).send("Tienes que añadir una tarea") 
    }
    else{ //si se añade 
        tareas.push(req.body.tarea); //push actualiza el array
        res.status(201).send("Se ha añadido correctamente");
    };
});

app.put("/tareas/:id", (req, res) => { //put para actualizar las tareas
    //id es para identificar la tarea --> id es la posicion en el array
    res.status(201).send(tareas[id]);
});

app.delete("/", (req, res) => {
    res.send("Esta funcionando método DELETE")
});


app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
    });