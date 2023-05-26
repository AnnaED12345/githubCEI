import ListaTareas from "../../componentes_appTareas/ListaTareas";
/* import Formulario from "../../componentes_appTareas/formulario"; */
import "../../../public/style_tareas.css";
import Formulario2 from "../../componentes_appTareas/formulario2";

import { useState } from "react";
import { useEffect } from "react";


export default function AppTares () {

    const [listaTareas, setlistaTareas] = useState([]); //vacío hasta que recibamos los datos del fetch 
   /* otra opción es en useState añadir como valor inicial un [] vacío por que asi no hace falta hacer el condicional en .map 
    por que en el primer render detectara un array y podrá actualizarl, si no, el valor es undefined y no detecta ningun
    array de primeras que poder actualizar. */ 

    /* console.log(listaTareas); */


    //sacamos la función del useEffect ya que la necesitaremos en otros componentes para los demás métodos --> la pasaremos con las props
    async function cargarTareas () { 
        const respuesta = await fetch ("/tareas"); //la respuesta que recibimos de /tareas
        const datos = await respuesta.json(); //la almacenamos en js
        setlistaTareas(datos); //y actualizamos los datos con la respuesta obtenida 
    }

    //usamos use effect para hacer un fetch para optimizar la aplicación y que no se haga una petición cada vez que se renderiza
    useEffect (() => {
        cargarTareas ();
        
    }, []); //no agregamos dependencias ya que queremos que se haga el fetch únicamente una vez

    return (
        <div>
            <Formulario2 cargarTareas={cargarTareas} /> {/*pasamos la función con las props*/}
            <ListaTareas tareas = {listaTareas} cargarTareas={cargarTareas} /> {/* trabajamos la creación de elementos li en ListaTareasss */}
        </div>
    )
}