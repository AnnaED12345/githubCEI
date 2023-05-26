const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* prisma.tarea.create ({
    data: {
        tarea: "tarea 3",
    }
}). then(tarea => {
    console.log(tarea);
}) */

/* prisma.tarea.findMany().then(tareas => { //leer todas las tareas
    console.log(tareas);
}) */

/* prisma.tarea.findUnique ({//cuando usamos un campo único como por ejemplo el id
    where: {
        id: '6470a9c78abd8fd2757fce0a'
    }
}).then (tarea => {
    console.log ('Tarea encontrada', tarea);
}) */

/* prisma.tarea.findFirst ({//cuando buscamos por descripción, findFirst tarea 3
    where: {
       tarea : "tarea 3"
    }
}).then (tarea => {
    console.log ('Tarea encontrada', tarea);
}) */

/* prisma.tarea.update({ //para actualizar tareas
    where: {
        id : '6470a9c78abd8fd2757fce0a'
    },
    data: {
        tarea: 'tarea 2 modificada'
    }
}).then (tarea => {
    console.log('tarea modificada', tarea)
}) */

/* prisma.tarea.delete({//eliminar tareas
    where: {
        id : '6470a9c78abd8fd2757fce0a'
    }
}).then(tarea => {
    console.log('tarea eliminada')
})  */