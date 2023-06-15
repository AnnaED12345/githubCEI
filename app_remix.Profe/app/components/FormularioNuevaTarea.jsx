import { useRef, useState } from "react";

export function FormularioNuevaTarea({ cargarDatosUsuario, usuarioId }) {
  const inputRef = useRef();
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify({
        tarea: inputRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`/usuarios/${usuarioId}/tareas`, options);
    if (response.ok) {
      inputRef.current.value = "";
      cargarDatosUsuario();
    } else {
      const error = await response.text();
      setError(error);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="nuevaTarea">Añadir tarea:</label>
          <input
            className="border-2 border-slate-300 ml-2 rounded"
            ref={inputRef}
            type="text"
            id="nuevaTarea"
          />
        </div>
        <input
          className="rounded-full bg-slate-300 p-2 cursor-pointer"
          type="submit"
          value="Crear"
        />
      </form>
      <p id="errores" style={{ color: "red" }}>
        {error}
      </p>
    </div>
  );
}
