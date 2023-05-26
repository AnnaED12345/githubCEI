import { useEffect, useState } from "react";

export default function Formulario () {

    const [tareaCreada, setTareaCreada] = useState("");
    console.log(tareaCreada);

    useEffect (() => {
    //queremos que la petición se ejecute si hay una tarea creada por lo tanto debemos trabajar con un condicional dentro del useEffect: 

        if (tareaCreada !="") { //SI tareaCrada NO es un " " vacío --> HACEMOS FETCH
            const post = fetch("/tareas", {
                method: "POST",
                body: JSON.stringify({ tarea: tareaCreada }),
                headers: {
                  "Content-Type": "application/json",
                }} 
                
                .then((res) => { //ENTONCES: si la respuesta es Ok... si no...
                    if (res.ok) { 
                      console.log("Tarea creada correctamente");
                    } else { 
                      console.log("Error: Tienes que añadir una tarea");
                    }
                  })
            )};
    }, [tareaCreada]); //añadimos la dependencia tarea creada para que el useEffect se ejecute cada vez que se crea una tarea y no al inicio, por que nos crearía tareas vacías, ni constantemente por que entraría en bucle. 

  
    //FUNCIÓN PARA EL BOTÓN CREAR TAREA
    function crearTarea (event) {
        event.preventDefault();
        setTareaCreada(nuevaTarea);
    }
        //windos.location.reload();
   

    return (
        <div>
            <div>
                <h1>To-Do List</h1>
            </div>

             <form id="formulario" action="">
                <label id="cajaIngresar" htmlFor="tarea"></label>
                
                <input 
                className="texto" 
                type="text" 
                placeholder="Agregar tarea..." 
                name="tarea" id="tareaID"
                onInput = {((event) => {
                    const nuevaTarea = event.target.value
                    console.log(nuevaTarea); //recibo el valor del input
                })} />
            
                <input 
                id="btnAnadir" 
                type="submit" 
                value=" + "
                onClick = {crearTarea}/>
            </form>
    </div>
    )
}