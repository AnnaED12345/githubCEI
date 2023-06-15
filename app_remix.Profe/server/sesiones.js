const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { obtenerUsuario, obtenerUsuarioPorNombre } = require("../db/usuarios");
const bcrypt = require("bcrypt");

function initGestionSesiones(app) {
  app.use(
    session({
      secret: "secret-key",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    console.log("#passport.serializeUser", user);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log("#passport.deserializeUser", id);
    obtenerUsuario(id, false)
      .then((user) => {
        console.log("#passport.deserializeUser obtenerUsuario.then", user);
        done(null, user);
      })
      .catch((err) => {
        console.log("#passport.deserializeUser obtenerUsuario.catch", user);
        done(err);
      });
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("#LocalStrategy", username, password);

      obtenerUsuarioPorNombre(username)
        .then((user) => {
          console.log("#LocalStrategy obtenerUsuarioPorNombre.then", user);
          bcrypt.compare(password, user.password).then((isValid) => {
            console.log("isValid", isValid);
            if (!user || !isValid) return done(true);
            return done(null, user);
          });
        })
        .catch((err) => {
          console.log("#LocalStrategy obtenerUsuarioPorNombre.catch", err);
          done(err);
        });
    })
  );

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.status(200).send({ id: req.user.id });
  });

  app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send();
      } else {
        res.redirect("/login");
      }
    });
  });
}

module.exports = {
  initGestionSesiones,
};
