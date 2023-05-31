const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function obtenerTareas() {
  return prisma.tarea.findMany();
}

function obtenerTarea(id) {
  return prisma.tarea
    .findUnique({
      where: {
        id, // es lo mismo que id: id
      },
    })
    .then((tarea) => {
      if (tarea) {
        return tarea;
      }

      throw new Error("Tarea no encontrada");
    });
}

function crearTarea(descripcion) {
  return prisma.tarea.create({
    data: {
      descripcion,
    },
  });
}

function actualizarTarea(id, descripcion) {
  return prisma.tarea.update({
    where: {
      id,
    },
    data: {
      descripcion,
    },
  });
}

function borrarTarea(id) {
  return prisma.tarea.delete({
    where: {
      id,
    },
  });
}

module.exports = {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  borrarTarea,
};
