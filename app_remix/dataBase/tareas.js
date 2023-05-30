const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient()

export function GetTareas () {
        return prisma.tarea.findMany().then(tareas => { //le decimos a prisma que desde mongoDB lea todas las tareas
      })
}

export function GetUniqueTarea () {

}