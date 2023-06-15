const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function obtenerUsuarios() {
  return prisma.usuario.findMany();
}

function obtenerUsuarioPorNombre(username) {
  return prisma.usuario
    .findUnique({
      where: {
        nombre: username,
      },
    })
    .then((usuario) => {
      if (usuario) {
        return usuario;
      }
    });
}

function obtenerUsuario(id, includeTareas = true) {
  return prisma.usuario
    .findUnique({
      where: {
        id,
      },
      include: {
        tareas: includeTareas,
      },
    })
    .then((usuario) => {
      if (usuario) {
        return usuario;
      }

      throw new Error("Usuario no encontrado");
    });
}

function crearTarea(descripcion, usuarioId) {
  return prisma.tarea.create({
    data: {
      descripcion,
      usuario: {
        connect: {
          id: usuarioId,
        },
      },
    },
  });
}

async function actualizarTarea(tareaId, usuarioId, descripcion) {
  const tarea = await prisma.tarea.findUnique({
    where: {
      id: tareaId,
    },
    include: {
      usuario: true,
    },
  });

  if (tarea === null) {
    throw new Error("La tarea no existe.");
  }

  if (tarea.usuarioId !== usuarioId) {
    throw new Error("La tarea no pertenece al usuario.");
  }

  return prisma.tarea.update({
    where: {
      id: tareaId,
    },
    data: {
      descripcion,
    },
  });
}

async function borrarTarea(tareaId, usuarioId) {
  const tarea = await prisma.tarea.findUnique({
    where: {
      id: tareaId,
    },
    include: {
      usuario: true,
    },
  });

  if (tarea === null) {
    throw new Error("La tarea no existe.");
  }

  if (tarea.usuarioId !== usuarioId) {
    throw new Error("La tarea no pertenece al usuario.");
  }

  return prisma.tarea.delete({
    where: {
      id: tareaId,
    },
  });
}

async function obtenerTarea(tareaId, usuarioId) {
  const tarea = await prisma.tarea.findUnique({
    where: {
      id: tareaId,
    },
    include: {
      usuario: true,
    },
  });

  if (tarea === null) {
    throw new Error("La tarea no existe");
  }

  if (tarea.usuarioId !== usuarioId) {
    throw new Error("La tarea no pertenece al usuario.");
  }

  return tarea;
}

module.exports = {
  obtenerUsuarios,
  obtenerUsuario,
  obtenerUsuarioPorNombre,
  crearTarea,
  borrarTarea,
  actualizarTarea,
  obtenerTarea,
};
