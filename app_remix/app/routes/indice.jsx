//el componente link nos ayuda a optimizar el enlace ya que no refresca todo si no que únicamente carga un archivos js
import {Link} from "@remix-run/react" //importamos {Link} desde remix


export default function Indice () { //nombre de la página
    //Aplicamos react
    return <div>
            <h1>¡Bienvenido a la ruta raíz!</h1>
            <ul>
                <li><a href="/notas/indice">Ir a /notas a través de a href</a></li>
                <li><Link to = "/notas/indice">Ir a /notas a través de Link</Link></li>
            </ul>
        </div>
} 

