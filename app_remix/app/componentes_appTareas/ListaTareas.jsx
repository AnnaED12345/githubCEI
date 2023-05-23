import { useEffect, useState } from "react"

export default function ListaTareas ({tareas}) { //creamos un componente Lista tareas que recibira como prop las tareas

    const [listaTareas, setlistaTareas] = useState(); //vacío hasta que recibamos los datos del fetch
    console.log(listaTareas);

    //usamos use effect para hacer un fetch para optimizar la aplicación y que no se haga una petición cada vez que se renderiza
    useEffect (() => {
        async function FetchData () {
            const respuesta = await fetch ("/tareas"); //la respuesta que recibimos de /tareas
            const datos = await respuesta.json(); //la almacenamos en js
            setlistaTareas(datos); //y actualizamos los datos con la respuesta obtenida 
        }

        
        FetchData ();
        
    }, []); //no agregamos dependencias ya que queremos que se haga el fetch únicamente una vez

    return (
        <div>
            <p>Tareas añadidas:</p>
            {tareas.map (() => 
            <li> {listaTareas ? listaTareas.tarea : "..."}</li>
            )} 
            <h1>{listaTareas}</h1>
        </div>
    )
}
