const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// prisma.tarea.create({
//     data: {
//          descripcion: 'tarea 3',
//     }
// }).then(tarea => {
//     console.log(tarea);
// });

// prisma.tarea.findMany().then(tareas => {
//     console.log(tareas);
// });

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
