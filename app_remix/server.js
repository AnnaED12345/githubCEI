const path = require("path");

const { createRequestHandler } = require("@remix-run/express");
const { installGlobals } = require("@remix-run/node");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser"); //añadimos body-parser
const rutasTareas = require ("./server/tareas");
const rutasUsuarios = require ("./server/usuarios");
const cookieParser = require('cookie-parser'); //modulo para el middleware de cookies
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

app.use(cookieParser());//middleware cookies

app.use(
  session({ //middleware para modulo express-session
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
  }));


app.use(passport.initialize()); //middleware passport
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log("passport.serializeUser", user);
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  // Aquí debes buscar al usuario por su id en tu base de datos:
  prisma.usuario.findUnique({ //utilizamos el método findUnique de Prisma para buscar al usuario por su ID en la base de datos
      where: {
        id: id,
      },
    })
    .then((user) => { 
      console.log("passport.deserializeUser", user);
      done(null, user); //pasamos los datos del usuario a través de la función done. El primer null es para que, en caso de que haya error sea null
    })
    .catch((error) => {
      done(error);
    });
});



passport.use( //middleware passport-local
  new LocalStrategy(function (nombre, password, done) {
  prisma.usuario
  .findUnique({ where: { nombre } })
  .then((user) => {
  if (!user || user.password !== password) return done(true); //devuelve un error si no hay usuario o si la contraseña no es correcta
  return done(null, user);
  })
  .catch((err) => {
    done(err)});
  })
  );


// ---------------------- SERVIDOR TAREAS -----------------------------

//Primero revisar si todos los módulos que necesitamos están importados (en este caso hace falta importar body-parser)
/* const express = require("express");  */
/* const app = express(); */ // const app ya está definido

/* const bodyParser = require("body-parser"); */


app.use(bodyParser.json()); //middleware que pasa el body a req.body --> en req.body se recoge la información que envia el usuario
/* app.use(express.static('public')); // */ //ya esta definido

app.post("/login", passport.authenticate("local")
//Aquí en el ejemplo redirigimos, en este caso, lo simplificamos para gestionar el error de autenticación desde el frontend enviando un mensaje simplemente sin redirigir al usuario a ninguna ruta externa
); 


/* rutasTareas(app); */
rutasUsuarios(app);


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
