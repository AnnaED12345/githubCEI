import { useEffect, useState } from "react";
import ListaTareas from "../components/ListaTareas";
import { FormularioNuevaTarea } from "../components/FormularioNuevaTarea";

export default function AppTareas() {
  const [tareas, setTareas] = useState([]);

  function cargarTareas() {
    fetch("/tareas")
      .then((response) => response.json())
      .then((datos) => setTareas(datos));
  }

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div>
      <h1>AppTareas</h1>
      <FormularioNuevaTarea cargarTareas={cargarTareas} />
      <ListaTareas tareas={tareas} cargarTareas={cargarTareas} />
    </div>
  );
}
