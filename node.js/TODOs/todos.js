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
    const tareasID = (req.params.id); //en este caso params por que estas accediendo al parametro y no al body
    if (tareasID < 0 || tareasID > tareas.length) { //si el id es menor a 0 no existe - error
        res.status(400).send("No existe esta tarea")
    }
    else { //aquí debemos actualizar la tarea
        tareas[tareasID] = req.body.tarea; //buscamos en el array "tareas" la posición de la tarea "tareaID" y lo actualizamos en el body
        res.status(201).send(`Se ha actualizado la tarea ${tareasID}`);
        }
});

app.delete("/tareas/:id", (req, res) => { //elimina tareas
    //parseInt() --> convierte una cadena de caracteres a un número entero. 
    //En este caso, se utiliza para convertir el valor del parámetro id que se obtiene de la URL a un número entero, que se utiliza para identificar la tarea que se desea eliminar del array.
    const tareasID = parseInt(req.params.id); //identificamos tarea
    if (tareasID < 0 || tareasID > tareas.length) { //si no la identifica - error
        res.status(400).send("No existe esta tarea") 
    } 
    else {//destructuración de array - splice
        tareas.splice(tareasID, 1); //sintaxis: slice(start, end) --> es necesario poner en cuál empieza y en cuál termina, para determinar cuántas quieres borrar.
        res.send(`Se ha eliminado la tarea ${tareasID}`);
    }
});


app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
    });