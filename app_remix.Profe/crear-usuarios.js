const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function crearUsuarios() {
  prisma.usuario
    .createMany({
      data: [
        {
          nombre: "Ana",
          password: await hashPassword("1234"),
        },
        {
          nombre: "Miguel",
          password: await hashPassword("abcd"),
        },
        {
          nombre: "Carlota",
          password: await hashPassword("1111"),
        },
        {
          nombre: "Martín",
          password: await hashPassword("2222"),
        },
      ],
    })
    .then((user) => {
      console.log(user);
    });
}

crearUsuarios();
