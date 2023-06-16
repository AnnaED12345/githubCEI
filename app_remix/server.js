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
const bcrypt = require('bcrypt');
const phpExpress = require('php-express');

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

app.use(bodyParser.json()); //middleware que pasa el body a req.body --> en req.body se recoge la información que envia el usuario
/* app.use(express.static('public')); // */ //ya esta definido

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
  console.log("#passport.serializeUser", user);
  done(null, user.id); //a la función done le pasamos el id del usuario
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
      done(null, user); //pasamos los datos del usuario a través de la función done. null --> para indicar que no hay error 
    })
    //Si se produce un error durante la deserialización, se captura en el bloque catch y se pasa como argumento a done(error) para indicar que ocurrió un error.
    .catch((error) => { 
      done(error);
    });
  });




passport.use( //middleware passport-local
  new LocalStrategy(function (nombre, password, done) {
  prisma.usuario
    .findUnique(
      { where: { nombre } }) //buscamos en la bbdd al usuario utilizando el nombre de usuario proporcionado:
  
    .then((user) => {
      const valid = bcrypt.compare(password, user.password).then((valid) => {
      if (!user || !valid) return done(true); //si no coincide el usuario o la contraseña no es válida: 
      return done(null, user);
    });//con bcrypt.compare, comparamos las contraseñas para validar si coinciden --> devuelve una promesa
  })
  .catch((err) => {
    done(err)});
  })
);


app.set('views', './views');

app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.all(/\.php$/, phpExpress.router);

// ---------------------- SERVIDOR TAREAS -----------------------------

//Primero revisar si todos los módulos que necesitamos están importados (en este caso hace falta importar body-parser)
/* const express = require("express");  */
/* const app = express(); */ // const app ya está definido

/* const bodyParser = require("body-parser"); */


//rutas /login /logout:
//se utiliza el método passport.authenticate("local") para autenticar las credenciales del usuario
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send({id: req.user.id})
  //si es existosa se devuelve respuesta 200 ok.
  });

//se utiliza el método req.logout() proporcionado por Passport para cerrar la sesión del usuario.
app.get("/logout", function (req, res) {
  //destroy: 
  req.session.destroy((err) => {//si el cierre de sesion da error
    if (err) { //send 400.
      res.status(400).send();
    } else { //si el cierre de sesión es correcto
      res.redirect("/app_tareas/login"); //se redirige al usuario a la ruta deseada
    }
  })
  });


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
