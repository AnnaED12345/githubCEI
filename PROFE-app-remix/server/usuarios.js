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

   /*  app.get("/users/:user_id/tasks", (req, res) => {
        prisma.usuario.findMany({
            include: {
                tareas:false
            }
        }).then(usuarios => {
        res.send(usuarios);
        })
    }); */

    /* app.post("/users/:user_id/tasks", (req, res) => {
        //...
    });

    app.put("/users/:user_id/tasks/:task_id", (req, res) => {
        //...
    });

    app.delete("/users/:user_id/tasks/:task_id", (req, res) => {
        //...
    }); */
}

module.exports = rutasUsuarios;