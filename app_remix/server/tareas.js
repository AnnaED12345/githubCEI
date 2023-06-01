const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function rutasTareas (app) {

    //----------- METODO GET --------------
app.get("/tareas", (req, res) => {
    prisma.tarea.findMany().then((tareas) => {
        res.send(tareas)
    }).catch(error => {
        res.send(error)
    })
})


  //----------- METODO GET PARA UNA URL CONCRETA --------------
//explicado por que usamos if en este caso: SESION 30 REPASAR
app.get('/tareas/:id', (req, res) => { //get una tarea en concreto
    const tareaID = req.params.id 
  
    prisma.tarea.findUnique({  
      where: {
        id: tareaID
      }
    })
    .then(tarea => {
      if (tarea) { 
        res.send(tarea);
      }else {
        res.status(400).send("ERROR: La tarea no existe")
      } 
    }).catch(error => {
      res.status(400).send(error)
    }) 
  })


  //----------- METODO POST --------------
app.post("/tareas", (req, res) => { //post para añadir tareas 
    const nuevaTarea = req.body.descripcion //almacenamos en una varible los datos del body. 
  
    prisma.tarea.create ({
      data: {
        tarea: nuevaTarea //en el modelo vamos a indicar que el campo a rellenar de tarea se va a completar con la información recibida en el body
      }
    })
      .then(tareaCreada => { //obtenemos la tarea creada
          res.status(201).send(`Se ha añadido correctamente la tarea ${tareaCreada}`);
        })
        .catch(error => {
          res.status(500).send(error) 
        })  
      })

      //----------- METODO PUT --------------
app.put("/tareas/:id", (req, res) => { //put para actualizar las tareas
    const tareaID = req.params.id //nos cargamos el parseInt por que el id no es un número, es un string
    const nuevaTarea = req.body.descripcion
  
    prisma.tarea.update ({
      where: {
        id: tareaID //buscamos el id que recogemos de req.params.id
      }, 
      data: {
        tarea: nuevaTarea //sustituimos por la nueva tarea del body (req.body.descripcion)
      }
    })
    .then (tareaActualizada => { //obtenemos la tarea actualizada
        res.status(201).send(`Se ha actualizado la tarea ${tareaActualizada}`);
      }
    ).catch (error => {
      res.status(500).send(error)
    })
  })

  //----------- METODO DELETE --------------
app.delete("/tareas/:id", (req, res) => { //elimina tareas
    const tareaID = req.params.id
  
    prisma.tarea.delete({
      where: {
        id: tareaID
      }
    }).then(tareaEliminada => {
      res.send(`Se ha eliminado la tarea ${tareaID}`)
    }) .catch (error => {
      res.status(500).send("No se ha podido eliminar la tarea")
    })
  })

}

module.exports = rutasTareas;