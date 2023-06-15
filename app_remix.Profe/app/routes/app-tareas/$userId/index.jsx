import { useContext, useEffect, useState } from "react";
import ListaTareas from "../../../components/ListaTareas";
import { FormularioNuevaTarea } from "../../../components/FormularioNuevaTarea";
import { useParams } from "@remix-run/react";
import { LangContext } from "../../../hooks/useLangCookie";
import { requestHttp } from "../../../utils/request-http";

export default function AppTareas() {
  const { userId } = useParams();
  const [usuario, setUsuario] = useState();
  const lang = useContext(LangContext);

  function cargarDatosUsuario() {
    requestHttp(`/usuarios/${userId}`).then((datosUsuario) => {
      setUsuario(datosUsuario);
      localStorage.setItem("datos-usuario", JSON.stringify(datosUsuario));
    });
  }

  useEffect(() => {
    const datosGuardados = localStorage
      ? localStorage.getItem("datos-usuario")
      : null;
    if (datosGuardados) {
      setUsuario(JSON.parse(datosGuardados));
    }

    cargarDatosUsuario();
  }, []);

  return usuario ? (
    <div>
      <h2 className="text-xl font-bold">
        {lang === "es" ? "Bienvenid@" : "Welcome"} {usuario.nombre}
      </h2>
      <FormularioNuevaTarea
        cargarDatosUsuario={cargarDatosUsuario}
        usuarioId={userId}
      />
      <ListaTareas
        usuarioId={userId}
        tareas={usuario ? usuario.tareas : []}
        cargarDatosUsuario={cargarDatosUsuario}
      />
    </div>
  ) : (
    <h2>Cargando...</h2>
  );
}
