import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LangContext, useLangCookie } from "../../hooks/useLangCookie";//importamos el custom hook


export default function SeleccionaUsuario () {

    const lang = useContext(LangContext);


    const [usuarios, setUsuarios] = useState([]);
    

    useEffect (() => {
        fetch("/users")
        .then(response => response.json())
        .then(arrayUsuarios => setUsuarios(arrayUsuarios))
    }, [])

    return (
        <div>
            <h1>{lang ==="es"? 'Selecciona tu usuario' : 'Select your user'}</h1>
            {usuarios.map(usuario => 
            <div id="selecciona-usuario">
            <Link to={`/app_tareas/${usuario.id}`}>{usuario.nombre}</Link>
            </div>)}
        </div>
    )
}