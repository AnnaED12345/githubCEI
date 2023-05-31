const {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  borrarTarea,
} = require("../db/tareas");

function rutasTareas(app) {
  app.get("/tareas", (req, res) => {
    obtenerTareas()
      .then((tareas) => {
        res.status(200).send(tareas);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

  app.get("/tareas/:id", (req, res) => {
    const id = req.params.id;
    obtenerTarea(id)
      .then((tarea) => {
        res.send(tarea);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  app.post("/tareas", (req, res) => {
    const tarea = req.body.tarea;
    if (tarea) {
      crearTarea(tarea)
        .then((tarea) => {
          res.status(201).send(tarea);
        })
        .catch((error) => {
          res.status(400).send(error);
        });
    } else {
      res
        .status(400)
        .send("ERROR: La propiedad 'tarea' del body no tiene valor.");
    }
  });

  app.put("/tareas/:id", (req, res) => {
    const id = req.params.id;
    const tarea = req.body.tarea;
    if (!tarea) {
      res
        .status(400)
        .send("ERROR: La propiedad 'tarea' del body no tiene valor.");
      return;
    }

    actualizarTarea(id, tarea)
      .then((tarea) => {
        res.status(200).send(tarea);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  app.delete("/tareas/:id", (req, res) => {
    const id = req.params.id;
    borrarTarea(id)
      .then((tarea) => {
        res.status(200).send(tarea);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
}

module.exports = rutasTareas;
