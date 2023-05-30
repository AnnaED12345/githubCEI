const path = require("path");

const { createRequestHandler } = require("@remix-run/express");
const { installGlobals } = require("@remix-run/node");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser"); //añadimos body-parser
const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient()

//también podemos introducir el backend desde otro fichero con import: ver inicio de la sesion 25

installGlobals();

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

// ---------------------- SERVIDOR TAREAS -----------------------------

//Primero revisar si todos los módulos que necesitamos están importados (en este caso hace falta importar body-parser)
/* const express = require("express");  */
/* const app = express(); */ // const app ya está definido

/* const bodyParser = require("body-parser"); */


app.use(bodyParser.json()); //middleware que pasa el body a req.body --> en req.body se recoge la información que envia el usuario
/* app.use(express.static('public')); // */ //ya esta definido

//Importante: recuerda importar los módulos: en este caso PrismaClient


//----------- METODO GET --------------
app.get("/tareas", (req, res) => { //con el metodo get leemos los recursos
  prisma.tarea.findMany().then(tareas => { //le decimos a prisma que desde mongoDB lea todas las tareas
  console.log(tareas);
  res.send(tareas); //respondemos enviando el array de tareas
})
});


//----------- METODO GET PARA UNA URL CONCRETA --------------
//explicado por que usamos if en este caso: SESION 30 REPASAR
app.get('/tareas/:id', (req, res) => { //get una tarea en concreto
  const tareaID = req.params.id 

  prisma.tarea.findUnique({  
    where: {
      id: tareaID
    }
  })
  .then(tarea => {
    if (tarea) { 
      res.send(tarea);
    }else {
      res.status(400).send("ERROR: La tarea no existe")
    } 
  }).catch(error => {
    res.status(400).send(error)
  }) 
})


//----------- METODO POST --------------
app.post("/tareas", (req, res) => { //post para añadir tareas 
  const nuevaTarea = req.body.tarea; //almacenamos en una varible los datos del body. 

  prisma.tarea.create ({
    data: {
      tarea: nuevaTarea //en el modelo vamos a indicar que el campo a rellenar de tarea se va a completar con la información recibida en el body
    }
  })
    .then(tareaCreada => { //obtenemos la tarea creada
        res.status(201).send(`Se ha añadido correctamente la tarea ${nuevaTarea}`);
      })
      .catch(error => {
        res.status(500).send("Tienes que añadir una tarea") 
      })  
    })
 

//----------- METODO PUT --------------
app.put("/tareas/:id", (req, res) => { //put para actualizar las tareas
  const tareaID = req.params.id //nos cargamos el parseInt por que el id no es un número, es un string
  const nuevaTarea = req.body.tarea

  prisma.tarea.update ({
    where: {
      id: tareaID //buscamos el id que recogemos de req.params.id
    }, 
    data: {
      tarea: nuevaTarea //sustituimos por la nueva tarea del body (req.body.tarea)
    }
  })
  .then (tareaActualizada => { //obtenemos la tarea actualizada
      res.status(201).send(`Se ha actualizado la tarea ${nuevaTarea}`);
    }
  ).catch (error => {
    res.status(500).send(error)
  })
})

//----------- METODO DELETE --------------
app.delete("/tareas/:id", (req, res) => { //elimina tareas
  const tareaID = req.params.id

  prisma.tarea.delete({
    where: {
      id: tareaID
    }
  }).then(tareaEliminada => {
    res.send(`Se ha eliminado la tarea ${tareaID}`)
  }) .catch (error => {
    res.status(500).send("No se ha podido eliminar la tarea")
  })
})


app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
        purgeRequireCache();

        return createRequestHandler({
          build: require(BUILD_DIR),
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
      })
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, but then you'll have to reconnect to databases/etc on each
  // change. We prefer the DX of this, so we've included it for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}
