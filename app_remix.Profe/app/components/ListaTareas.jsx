import { Link } from "@remix-run/react";
import { useState } from "react";

export default function ListaTareas({ usuarioId, tareas, cargarDatosUsuario }) {
  const [error, setError] = useState();

  async function borrarTarea(tareaId) {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(
      `/usuarios/${usuarioId}/tareas/${tareaId}`,
      options
    );

    if (response.ok) {
      cargarDatosUsuario();
    } else {
      setError(tareaId);
    }
  }

  const style = {
    border: "red 3px solid",
    borderRadius: "3px",
  };

  return (
    <ol>
      {tareas.map((tarea) => (
        <li key={tarea.id} style={error === tarea.id ? style : {}}>
          {tarea.descripcion}
          <button
            className="pl-4 text-red-700 font-bold"
            onClick={() => borrarTarea(tarea.id)}
          >
            X
          </button>
          <Link to={`/app-tareas/${usuarioId}/editar-tarea/${tarea.id}`}>
            Editar
          </Link>
        </li>
      ))}
    </ol>
  );
}
