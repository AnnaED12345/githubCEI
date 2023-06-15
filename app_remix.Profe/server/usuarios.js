const {
  obtenerUsuarios,
  obtenerUsuario,
  crearTarea,
  borrarTarea,
  actualizarTarea,
  obtenerTarea,
} = require("../db/usuarios");

function parseParamsMiddleware(req, res, next) {
  const { userId, tareaId } = req.params;

  req.params.userId = userId ? parseInt(userId) : null;
  req.params.tareaId = tareaId ? parseInt(tareaId) : null;

  next();
}

function authorized(req, res, next) {
  if (!req.user) {
    res.redirect("/login");
    return;
  }

  if (req.user.id !== req.params.userId) {
    res.status(403).send();
    return;
  }

  next();
}

function rutasUsuarios(app) {
  app.get(
    "/usuarios/:userId",
    parseParamsMiddleware,
    authorized,
    (req, res) => {
      obtenerUsuario(req.params.userId)
        .then((usuario) => {
          res.send(usuario);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  );

  app.post(
    "/usuarios/:userId/tareas",
    parseParamsMiddleware,
    authorized,
    (req, res) => {
      const descripcionTarea = req.body.tarea;
      const usuarioId = req.params.userId;

      crearTarea(descripcionTarea, usuarioId)
        .then((tarea) => {
          res.send(tarea);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    }
  );

  app.get(
    "/usuarios/:userId/tareas/:tareaId",
    parseParamsMiddleware,
    (req, res) => {
      const { userId, tareaId } = req.params;

      obtenerTarea(tareaId, userId)
        .then((tarea) => {
          res.send(tarea);
        })
        .catch((error) => {
          res.status(400).send(error.toString());
        });
    }
  );

  app.delete("/usuarios/:userId", parseParamsMiddleware, (req, res) => {
    const { userId, tareaId } = req.params;

    borrarTarea(tareaId, userId)
      .then((tarea) => {
        res.send(tarea);
      })
      .catch((error) => {
        res.status(400).send(error.toString());
      });
  });

  app.put(
    "/usuarios/:userId/tareas/:tareaId",
    parseParamsMiddleware,
    (req, res) => {
      const { userId, tareaId } = req.params;
      const descripcionTarea = req.body.tarea;

      actualizarTarea(tareaId, userId, descripcionTarea)
        .then((tarea) => {
          res.send(tarea);
        })
        .catch((error) => {
          res.status(400).send(error.toString());
        });
    }
  );
}

module.exports = rutasUsuarios;
