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
   app.get("/users/:user_id/tasks", (req, res) => {
    prisma.usuario.findUnique({
        where: {
            id: "64772a930616bfd75c9fce2f" //id del usuario
        },
        include: {
            tareas: true //incluye las tareas
        }
    }).then((user) => {
       res.send(user);
    })
})

    /* app.post("/users/:user_id/tasks", (req, res) => {
        //aplicar create tarea para un usuario
    });

    app.put("/users/:user_id/tasks/:task_id", (req, res) => {
        //aplicare update tarea para un usuario
    });*/

    app.delete("/users/:user_id/tasks/:task_id", (req, res) => {
        prisma.tarea.delete({
            where: {
            id: '64773b271098e7febc0aff67' //id de la tarea
        }
        }).then(tarea => {
            res.send('Tarea eliminada', tarea);
        }).catch(error =>{
            res.send(error)
        })  
    }); 
}

module.exports = rutasUsuarios;