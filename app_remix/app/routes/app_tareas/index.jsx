import ListaTareas from "../../componentes_appTareas/ListaTareas";
import Formulario from "../../componentes_appTareas/formulario";

export default function AppTares () {

    return (
        <div>
            <Formulario />
            <ListaTareas /* tareas = {ListaTareas} *//>
        </div>
    )
}