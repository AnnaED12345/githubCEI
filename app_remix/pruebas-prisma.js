const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const bcrypt = require('bcrypt');


// //código para encriptar la contraseña: 
// async function crearUsuarios (nombre, password) {
//     //1. Definimos el salt
//     //salt: cadena de caracteres aleatorios que se añade a la contraseña antes de hacer el hash.
//     const salt = await bcrypt.genSalt(10); //generamos la salt
//     /* console.log("#SALT", salt); */
//     const hashedPassword = await bcrypt.hash(password, salt); //generamos hash
//     console.log("#PASSWORD", password, "#HASH", hashedPassword);

//     prisma.usuario.createMany ({
//         data:{ 
//             nombre: nombre,
//             password: hashedPassword
//         },
        
//             }). then(usuario => {
//             console.log(usuario);
//         }) 
// }

// crearUsuarios("Lucas", "111");
// crearUsuarios("Juan", "222");
// crearUsuarios("María", "333");


   

//----------- CREATE


//crear usuario
/* prisma.usuario.createMany ({
    data:[ 
        { nombre: "Lucas",
        password: "12345" },

        { nombre: "María",
        password: "12345"},

        { nombre: "Juan",
        password: "12345"}
    ]
    
        }). then(usuario => {
        console.log(usuario);
    })  */



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




//----------- GET

//Get todos los usuarios
//ruta /users para ver todos los usuarios
prisma.usuario.findMany({
    include: {
        tareas:false,
        }
    }).then(usuarios => {
    console.log(usuarios);
})



// Get 1 usuario 
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





//----------- DELETE


//Eliminar 1 tarea: 
/* prisma.tarea.delete({
    where: {
      id: '64773b797918b8d9e2006a94' //id de la tarea
    }
}).then(tarea => {
        console.log('Tarea eliminada', tarea);
    });  */


//Eliminar 1 usuario:
    /* prisma.usuario.delete({
        where: {
          id: '648ad09f9fe0289d32342d02' //id de la tarea
        }
    }).then(tarea => {
            console.log('usuario eliminado', tarea);
        });  */


//Eliminar todos los usuarios:
/* prisma.usuario.deleteMany({
    }).then(user => {
        console.log(user);
    });  */


//Eliminar todas las tareas: 
/*prisma.tarea.deleteMany({
    }).then(user => {
            console.log(user);
    });  */
    



//----------- UPDATE

//actualizar tarea de usuario : /users/:user_id/tasks/:tasks_id
/* prisma.tarea.update({
    where: {
        id: '64787992a3253fa6915450cd' //id de la tarea
        },
        data: {
             descripcion: 'tarea 01 modificada - Lucas'
        }
    }).then(tarea => {
   console.log('Tarea modificada', tarea);
}); */








// --------------------------------------------------------------------------


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