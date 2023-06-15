
import { useRef, useState } from "react";

export default function Formulario ({cargarTareas, user_id}) { 
    
    const [tareaCreada, setTareaCreada] = useState(""); //definimos una variable que actualizaremos con los datos recibidos del fetch
    const [error, setError] = useState(""); //para actualizar el valor del error

    async function submitTarea (event) { //cuando se haga un submit en el input::
        event.preventDefault();

        const post = await fetch(`/users/${user_id}/tasks`, { //se realizará un fetch con el método post
            method: "POST",
            body: JSON.stringify({ descripcion: tareaCreada }), //body: tarea recibirá el valor de tarea creada
            headers: {
              "Content-Type": "application/json",
            }})

            if (post.ok) { 
                setTareaCreada("");
                cargarTareas();
                
                console.log(tareaCreada);
                
              } else { 

                    const error = await post.text(); //gestionamos el error
                    setError(error);
              }
    };

    return (
        <div>
            <div>
                <h1>To-Do List</h1>
            </div>

            {/* colocar el evento onSubmit en el formulario en lugar de en otro elemento, como el botón o el input, porque el
            evento submit se dispara cuando se envía el formulario en su totalidad. Al colocar el evento onSubmit en el 
            formulario, puedes manejar tanto el envío del formulario al presionar el botón "Submit" como el envío del 
            formulario al presionar la tecla "Enter" mientras el foco está en un campo de entrada. */}

             <form id="formulario" onSubmit={submitTarea}>
                <label id="cajaIngresar" htmlFor="tarea"></label>
                
                <input 
                className="texto" 
                type="text" 
                placeholder="Agregar tarea..." 
                name="tarea" 
                id="tareaID"
                onChange={(event) => setTareaCreada(event.target.value)} /> 
                {/* //event.target.value --> Al acceder a event.target.value, se obtiene el valor actual del elemento en el 
                momento en que se produce el evento. */}
                {/* //difernecia entre onInput/onChange explicado abajo */}
            
                <input 
                id="btnAnadir" 
                type="submit" 
                value=" + " />
            </form>

            {error && ( //explicado el operador && abajo
                <p id="errores" style={{ color: "red" }}>
                    {error}
                </p>
            )}
        </div>
    ) 
}


/* ---------------- DIFERENCIA ON INPUT Y ON CHANGE

- onChange se activa cuando el valor del campo de entrada ha cambiado y se ha perdido el enfoque del campo (por ejemplo, 
    cuando el usuario presiona Enter o hace clic fuera del campo).

- onInput se activa cada vez que se produce un cambio en el contenido del campo de entrada, incluso mientras el usuario 
    está escribiendo. */




/*  ------------- OPERADOR && 

El operador && es un operador lógico en JavaScript que se conoce como el operador "AND" lógico. En el contexto de la renderización 
condicional, se utiliza para evaluar una condición y mostrar un elemento o ejecutar un código solo si esa condición es verdadera.

Si la condición es verdadera, la expresión se evaluará y se mostrará o ejecutará. Si la condición es falsa, la evaluación se detendrá y 
la expresión no se mostrará ni se ejecutará.

En el caso del código que te proporcioné, la condición es {error}. Esto significa que la expresión {error && ...} se evaluará si la 
variable error tiene un valor distinto de false, null, undefined, 0 o una cadena vacía. Si error tiene un valor válido (es decir, ha 
ocurrido un error), entonces la expresión se evaluará y el elemento <p> se mostrará con el mensaje de error. Si error es una cadena 
vacía o nula, la expresión no se evaluará y el elemento <p> no se mostrará.

Es una forma concisa de realizar una renderización condicional en React para mostrar o ejecutar código basado en una condición. */