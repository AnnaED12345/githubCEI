import { Link } from "@remix-run/react";
import { useState } from "react";

export default function ListaTareas({ tareas, cargarTareas }) {
  const [error, setError] = useState();

  async function borrarTarea(tareaId) {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(`/tareas/${tareaId}`, options);

    if (response.ok) {
      cargarTareas();
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
          <button onClick={() => borrarTarea(tarea.id)}>X</button>
          <Link to={`/editar-tarea/${tarea.id}`}>Editar</Link>
        </li>
      ))}
    </ol>
  );
}
