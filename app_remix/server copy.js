// ---------------------- SERVIDOR TAREAS -----------------------------

//Primero revisar si todos los módulos que necesitamos están importados (en este caso hace falta importar body-parser)
/* const express = require("express");  */
/* const app = express(); */ // const app ya está definido

/* const bodyParser = require("body-parser"); */

const tareas = ["comprar", "limpiar", "correr"];


app.use(bodyParser.json()); //middleware que pasa el body a req.body --> en req.body se recoge la información que envia el usuario
/* app.use(express.static('public')); // */ //ya esta definido


//----------- METODO GET --------------
app.get("/tareas", (req, res) => { //con el metodo get leemos los recursos
  res.send(tareas); //respondemos enviando el array de tareas
});


//----------- METODO GET PARA UNA URL CONCRETA --------------
app.get('/tareas/:id', (req, res) => { //get una tarea en concreto
  const tareaId = parseInt(req.params.id); //guardamos en una variable el paramentro.id de la ruta para la tarea especifica
  if (tareaId < 0 || tareas[tareaId] === "") { //si el id es menor a 0 no existe - error
  //** usamos tarea[tareaId] para acceder a un elemento dentro del array de tareas*/
      res.status(400).send("No existe esta tarea") 
  } else {
      const tarea = tareas[tareaId];
      res.status(200).send(tarea); //si existe, devolvemos el id de latarea
  }  
})

//----------- METODO POST --------------
app.post("/tareas", (req, res) => { //post para añadir tareas 
  if (req.body.tarea === ""){ //si no se añade ninguna tarea, da error
      res.status(400).send("Tienes que añadir una tarea") 
  }
  else{ //si se añade 
      tareas.push(req.body.tarea); //push actualiza el array
      let nuevaTarea = req.body.tarea; //actualizamos el array = 
      res.status(201).send(`Se ha añadido correctamente la tarea ${nuevaTarea}`);
  };
});



//----------- METODO PUT --------------
app.put("/tareas/:id", (req, res) => { //put para actualizar las tareas
  //id es para identificar una tarea concreta --> id = posicion en el array
  const tareasID = (req.params.id); //en este caso params por que estas accediendo al parametro y no al body
  if (tareasID < 0 || tareas[tareasID] === undefined) { //si el id es menor a 0 no existe - error
      res.status(400).send("No existe esta tarea")
  }
  else { //aquí debemos actualizar la tarea
      if (!req.body.tarea) { //! --> no hay tarea = Error
          res.status(400).send("No se ha especificado una tarea")
      }
      else{
          tareas[tareasID] = req.body.tarea; //buscamos en el array "tareas" la posición de la tarea "tareaID" y lo actualizamos en el body
          res.status(201).send(`Se ha actualizado la tarea ${tareasID}`);
          }
      }  
});


//----------- METODO DELETE --------------
app.delete("/tareas/:id", (req, res) => { //elimina tareas
  //parseInt() --> convierte una cadena de caracteres a un número entero. 
  //En este caso, se utiliza para convertir el valor del parámetro id que se obtiene de la URL a un número entero, que se utiliza para identificar la tarea que se desea eliminar del array.
  const tareasID = parseInt(req.params.id); //identificamos tarea
  if (tareasID < 0) { //si no la identifica - error
      res.status(400).send("No existe esta tarea") 
  } 
  else {//destructuración de array - splice
      tareas.splice(tareasID, 1); //sintaxis: slice(start, end) --> es necesario poner en cuál empieza y en cuál termina, para determinar cuántas quieres borrar.
      res.send(`Se ha eliminado la tarea ${tareasID}`);
  }
});

