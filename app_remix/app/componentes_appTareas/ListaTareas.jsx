import { useEffect, useState } from "react"

export default function ListaTareas ({tareas}) { //creamos un componente Lista tareas que recibira como prop las tareas

    const [tarea, setTarea] = useState(); //vacío hasta que recibamos los datos del fetch
    console.log(tarea);

    //usamos use effect para hacer un fetch
    useEffect (() => {
        async function FetchData () {
            const respuesta = await fetch ("/tareas"); //la respuesta que recibimos de /tareas
            const datos = await respuesta.json(); //la almacenamos en js
            setTarea(datos); //actualizamos los datos con la respuesta obtenida 
        }

        FetchData ();
        
    }, []);

    return (
        <div>
            {/* {tareas.map ((LiTarea) => 
            <li> {LiTarea = {tarea}} </li>
            )}  */}
            <h1>{tarea}</h1>
        </div>
    )
}
