import { Link } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../hooks/useLangCookie";

export default function SeleccionUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const lang = useContext(LangContext);

  useEffect(() => {
    fetch("/usuarios")
      .then((response) => response.json())
      .then((arrayUsuarios) => setUsuarios(arrayUsuarios));
  }, []);

  return (
    <div>
      <h1 className="mb-2">
        {lang === "es" ? "Selecciona tu usuario" : "Choose your user"}
      </h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="mb-4">
          <Link
            className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            to={`/app-tareas/${usuario.id}`}
          >
            {usuario.nombre}
          </Link>
        </div>
      ))}
    </div>
  );
}
