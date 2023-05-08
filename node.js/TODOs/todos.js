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

app.use(bodyParser.json()); //middleware que pasa el body a req.body --> en req.body se recoge la información que envia el usuario

app.get("/", (req, res) => { //con el metodo get leemos los recursos
    res.send(tareas); //respondemos enviando el array de tareas
});

app.post("/", (req, res) => { //post para añadir tareas 
    if (req.body.tarea === undefined){ //si no se añade ninguna tarea, da error
        res.status(400).send("Tienes que añadir una tarea") 
    }
    else{ //si se añade 
        tareas.push(req.body.tarea); //push actualiza el array
        let nuevaTarea = req.body.tarea; //almacenamos el array actualizado
        res.status(201).send(`Se ha añadido correctamente la tarea ${nuevaTarea}`);
    };
});

app.put("/tareas/:id", (req, res) => { //put para actualizar las tareas
    //id es para identificar una tarea concreta --> id = posicion en el array
    //si nuestro id son números deberiamos pasarlo a string con paresInt
    const tareasID = parseInt(req.params.id); //en este caso params por que estas accediendo al parametro y no al body
    if (tareasID < 0) { //si el id es menor a 0 no existe
        res.status(404).send("No existe esta tarea")
    }
    else { //aquí debemos actualizar la tarea
            tareas[tareasID] = req.body.tarea;
            res.status(201).send(`Se ha actualizado la tarea ${tareasID}`);
        }
});

app.delete("/", (req, res) => {
    res.send("Esta funcionando método DELETE")
});


app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
    });