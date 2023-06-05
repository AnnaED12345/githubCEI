import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function SeleccionaUsuario () {

    const [usuarios, setUsuarios] = useState([])

    useEffect (() => {
        fetch("/users")
        .then(response => response.json())
        .then(arrayUsuarios => setUsuarios(arrayUsuarios))
    }, [])

    return (
        <div>
            <h1>Selecciona tu usuario</h1>
           { usuarios.map(usuario => 
            <div>
            <Link to={`/app_tareas/${usuario.id}`}>{usuario.nombre}</Link>
            </div>)}
        </div>
    )
}