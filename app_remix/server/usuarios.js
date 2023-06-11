const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* function parseParamsMiddleware (req, res, next) {
    const {userId, tareaId} = req.params;

    req.params.user_id = userId? parseInt(userId) : null;
    req.params.task_id = tareaId? parseInt(tareaId) : null;

    next();
} */

function rutasUsuarios (app, id) {

    //Queremos recibir todos los usuarios en ruta /users:
    app.get("/users", (req, res) => {

        //explicado en /ejercicios-cookies.js
        /* res.cookie("ejercicio", 1)
        res.cookie("ejercicio-lectura", 2, { maxAge: 60 * 1000}) 
        res.cookie("ejercicio", 3, { maxAge: 3600 * 1000}) 
        res.clearCookie("ejercicio"); */

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
    const usuarioId = parseInt(req.params.user_id) //en posgre añadimos parseInt por que en la bbdd relacional el id no es un string. 
    //sin embargo esto lo podemos hacer con un middleware para que no tengamos que ir ruta por ruta (explicado arriba sesion 34 - min. 2:10.

    prisma.usuario.findUnique({
        where: {
            id: usuarioId //id del usuario
        },
        include: {
            tareas: true //incluye las tareas
        }
    }).then((user) => {
       res.send(user);
    }).catch(error => {
        res.status(400).send(error)
    } )
})

     app.post("/users/:user_id/tasks", (req, res) => {
        const nuevaTarea = req.body.descripcion;
        const usuarioID = parseInt(req.params.user_id);

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
        const modificarTarea = parseInt(req.params.task_id);
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
        const borrarTarea = parseInt(req.params.task_id);
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