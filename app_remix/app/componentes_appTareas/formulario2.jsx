import { useRef, useState } from "react";

export default function Formulario2 (cargarTareas) { 
    
    const [tareaCreada, setTareaCreada] = useState(""); //definimos una variable que actualizaremos con los datos recibidos del fetch

    async function submitTarea (event) { //cuando se haga un submit en el input::
        event.preventDefault();

        const post = await fetch("/tareas", { //se realizará un fetch con el método post
            method: "POST",
            body: JSON.stringify({ tarea: tareaCreada }), //body: tarea recibirá el valor de tarea creada
            headers: {
              "Content-Type": "application/json",
            }})

            if (post.ok) { 
                setTareaCreada(post);
                cargarTareas();
              } else { 
                console.log("Error: Tienes que añadir una tarea");
              }
    };

    return (
        <div>
            <div>
                <h1>To-Do List</h1>
            </div>

             <form id="formulario" onSubmit={submitTarea}>
                <label id="cajaIngresar" htmlFor="tarea"></label>
                
                <input 
                className="texto" 
                type="text" 
                placeholder="Agregar tarea..." 
                name="tarea" id="tareaID" />
            
                <input 
                id="btnAnadir" 
                type="submit" 
                value=" + " />
            </form>
        </div>
    )

    return 

}