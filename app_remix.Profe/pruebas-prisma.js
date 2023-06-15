const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// prisma.usuario
//   .createMany({
//     data: [
//       {
//         nombre: "Ana",
//       },
//       {
//         nombre: "Miguel",
//       },
//       {
//         nombre: "Carlota",
//       },
//       {
//         nombre: "Martín",
//       },
//     ],
//   })
//   .then((user) => {
//     console.log(user);
//   });

prisma.usuario.findMany().then((users) => {
  console.log(users);
});

// prisma.usuario
//   .findUnique({
//     where: {
//       id: 1,
//     },
//     include: {
//       tareas: true,
//     },
//   })
//   .then((user) => {
//     console.log(user);
//   });

// prisma.tarea
//   .findMany({
//     where: {
//       usuarioId: "6477379a0c675a373c133cf5",
//     },
//   })
//   .then((tareas) => {
//     console.log(tareas);
//   });

// prisma.tarea.deleteMany().then((tareas) => {
//   console.log(tareas);

//   prisma.usuario.deleteMany().then((users) => {
//     console.log(users);
//   });
// });

// prisma.usuario
//   .findMany({
//     include: {
//       tareas: true,
//     },
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.nombre);
//       user.tareas.forEach((tarea) => {
//         console.log(tarea.descripcion);
//       });
//     });
//   });

// prisma.tarea
//   .create({
//     data: {
//       descripcion: "tarea 3",
//       usuario: {
//         connect: {
//           id: "6477379a0c675a373c133cf5",
//         },
//       },
//     },
//   })
//   .then((tarea) => {
//     console.log(tarea);
//   });

// prisma.tarea.findMany().then(tareas => {
//     console.log(tareas);
// });

// prisma.tarea
//   .findUnique({
//     where: {
//       id: "6470a7eb26e1034ed14d308b",
//     },
//   })
//   .then((tarea) => {
//     console.log("Tarea encontrada", tarea);
//   });

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
