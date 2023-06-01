const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


//crear usuario
/* prisma.usuario.create ({
    data: {
        nombre: "Lucas",
    }
        }). then(usuario => {
        console.log(usuario);
    })  */

//ruta /users para ver todos los usuarios
/* prisma.usuario.findMany({
    include: {
        tareas:false
        }
    }).then(usuarios => {
    console.log(usuarios);
}) */

//Crear tarea para usuario
/* prisma.tarea.create ({
    data: {
        descripcion: "tarea 02 - Julián",
        
        usuario: { //indicamos el campo de usuario
            connect: { //y conectamos la creación de la tarea
                id: "64772a930616bfd75c9fce2f"
            }
      },
    }
        }).then(tarea => {
        console.log(tarea);
    }) */

//ruta /users/:user_id para encontrar un id
/* prisma.usuario.findUnique({
    where: {
        id: "64772a930616bfd75c9fce2f" //id del usuario
    },
    include: {
        tareas: true //incluye las tareas
    }
}).then((user) => {
    console.log(user);
}) */


//eliminar tarea: 
/* prisma.tarea.delete({
    where: {
      id: '64773b797918b8d9e2006a94' //id de la tarea
    }
}).then(tarea => {
        console.log('Tarea eliminada', tarea);
    });  */


//actualizar tarea de usuario : /users/:user_id/tasks/:tasks_id
prisma.tarea.update({
    where: {
        id: '64787992a3253fa6915450cd' //id de la tarea
        },
        data: {
             descripcion: 'tarea 01 modificada - Lucas'
        }
    }).then(tarea => {
   console.log('Tarea modificada', tarea);
});








// prisma.tarea.findUnique({
//     where: {
//         id: '6470a7eb26e1034ed14d308b'
//     }
// }).then(tarea => {
//     console.log('Tarea encontrada', tarea);
// })

// prisma.tarea.find({
//     where: {
//         descripcion: 'tarea 2'
//     }
// }).then(tarea => {
//     console.log('Tarea encontrada', tarea);
// })

// prisma.tarea.update({
//     where: {
//         id: '6470a7eb26e1034ed14d308b'
//     },
//     data: {
//         descripcion: 'tarea 2 modificada'
//     }
// }).then(tarea => {
//     console.log('Tarea modificada', tarea);
// });

// prisma.tarea.delete({
//     where: {
//         id: '6470a7eb26e1034ed14d308b'
//     }
// }).then(tarea => {
//     console.log('Tarea eliminada', tarea);
// });
