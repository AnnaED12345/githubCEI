const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


function rutasUsuarios (app) {

    //Queremos recibir todos los usuarios en ruta /users:
    app.get("/users", (req, res) => {
        prisma.usuario.findMany({
            include: {
                tareas:false
            }
        }).then(usuarios => {
        res.send(usuarios);
        })
    });

    //queremos recibir un usuario con sus tareas
   app.get("/users/:user_id", (req, res) => {
    const usuarioId = req.params.user_id

    prisma.usuario.findUnique({
        where: {
            id: usuarioId //id del usuario
        },
        include: {
            tareas: true //incluye las tareas
        }
    }).then((user) => {
       res.send(user);
    })
})

     app.post("/users/:user_id/tasks", (req, res) => {
        const nuevaTarea = req.body.descripcion
        const usuarioID = req.params.user_id

        prisma.tarea.create ({
            data: {
                descripcion: nuevaTarea,
                
                usuario: { //indicamos el campo de usuario
                    connect: { //y conectamos la creación de la tarea
                        id: usuarioID
                    }
              },
            }
                }).then(nuevaTarea => {
                res.status(201).send(nuevaTarea);
            }).catch(error => {
                res.status(400).send(error)
            } )
    });

    app.put("/users/:user_id/tasks/:task_id", (req, res) => {
        const modificarTarea = req.params.task_id;
        const descripcionTarea = req.body.descripcion //lo que recibimos en el body

        prisma.tarea.update({
            where: {
                id: modificarTarea //id de la tarea
                },
                data: {
                     descripcion: descripcionTarea
                }
            }).then(tareaActualizada => {
           res.send(tareaActualizada)
        }).catch(error => {
            res.status(400).send(error)
        })
    });

    app.delete("/users/:user_id/tasks/:task_id", (req, res) => {
        const borrarTarea = req.params.task_id
        prisma.tarea.delete({
            where: {
            id: borrarTarea //id de la tarea
        }
        }).then(tareaEliminada => {
            res.send(tareaEliminada);
        }).catch(error =>{
            res.send(error)
        })  
    }); 
} 


module.exports = rutasUsuarios;