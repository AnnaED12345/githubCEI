
import "../../../public/style_tareas.css";
import Formulario from "../../componentes_appTareas/formulario";

import { useState } from "react";
import { useEffect } from "react";
import ListaTareas2 from "../../componentes_appTareas/listaTareas2";
import { useParams } from "@remix-run/react";


export default function AppTares () {
    const {user_id} = useParams(); //sacamos la varible en ruta. Esto nos sirve para saber que usuario está seleccionado
    const [usuario, setUsuario] = useState();


    const [listaTareas, setlistaTareas] = useState([]); //vacío hasta que recibamos los datos del fetch 
   /* otra opción es en useState añadir como valor inicial un [] vacío por que asi no hace falta hacer el condicional en .map 
    por que en el primer render detectara un array y podrá actualizarl, si no, el valor es undefined y no detecta ningun
    array de primeras que poder actualizar. */ 


    //sacamos la función del useEffect ya que la necesitaremos en otros componentes para los demás métodos --> la pasaremos con las props
    async function cargarTareas () { 
        const respuesta = await fetch (`/users/${user_id}`); //la respuesta que recibimos de /tareas
        const datos = await respuesta.json(); //la almacenamos en js
        setlistaTareas(datos.tareas); //los datos que queremos recibir del usuario son sus tareas y accedemos a ellas con .tareas
    }

    //usamos use effect para hacer un fetch para optimizar la aplicación y que no se haga una petición cada vez que se renderiza
    useEffect (() => {
        cargarTareas ();
        
    }, []); //no agregamos dependencias ya que queremos que se haga el fetch únicamente una vez

    async function cargarUsuario () { 
        const respuesta = await fetch (`/users/${user_id}`); 
        const datos = await respuesta.json(); 
        setUsuario(datos); 
    }

    useEffect (() => {
        cargarUsuario ();
        
    }, []);


    async function submitLogout (event) { //cuando se haga un submit // el usuario haga login:
        event.preventDefault();

        const response = await fetch(`/logout`)
        if (response.ok) {
            window.location.href = "/app_tareas/login";
        } else {
            console.error("Error en el logout");
        }
    }


    return (
        <div>
            { usuario ? 
            <div>
            <button id="btnLogout" onClick={submitLogout}>Logout</button>
    
            <h1>Bienvenido {usuario.nombre} </h1> 
            <Formulario cargarTareas={cargarTareas} user_id={user_id}/> {/*pasamos la función con las props*/}
            <ListaTareas2 tareas = {listaTareas} cargarTareas={cargarTareas} /> {/* trabajamos la creación de elementos li en ListaTareasss */}
            </div>
            : <h1>Cargando...</h1>}
        </div>
    )
}