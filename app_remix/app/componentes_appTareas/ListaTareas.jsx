import { useEffect, useState } from "react"

export default function ListaTareas ({tareas}) { //creamos un componente Lista tareas que recibira como prop las tareas

    return (
        <div>
            <p>Tareas añadidas:</p>

            {/* para mostrar la lista de tareas, trabajaremos con un condicional: (explicado abajo) */}
            <ol> 
                {tareas ? ( //hemos recibido ya los datos de la lista de tareas? 
                tareas.map((tarea, index) => ( //si es true, responde con un array de lista de tareas
                    <li key={index}> {tarea} </li> //que cuente con un elemento li con el primer elemento del array y la key también será la propia tarea ya que no tenemos identificador y el nombre de la tarea en si es única 
                ))) : (<p>Cargando tareas...</p> //si es false, devolvemos "cargando tareas"
            )} 
            </ol>
        </div>
    )
}


 /* --------------------  EXPLICACIÓN DE POR QUE USAMOS UN CONDICIONAL PARA GESTIONAR EL .MAP --------------------

Cuando el componente ListaTareas se renderiza por primera vez, listaTareas aún no tiene ningún valor asignado porque la 
petición al servidor aún no ha finalizado. En ese momento, listaTareas es undefined. Si intentas llamar al método map en 
undefined, se producirá un error porque undefined no tiene el método map.

Para evitar este error, utilizamos el condicional listaTareas ? (...) : (...) para verificar si listaTareas tiene un valor 
asignado. Si es así, renderizamos la lista de tareas utilizando el método map. Si listaTareas es undefined, en su lugar,
mostramos un mensaje o un indicador de carga para indicar al usuario que los datos aún se están obteniendo.

Una vez que la petición al servidor se completa y listaTareas se actualiza con los datos, el componente se renderizará 
nuevamente y esta vez listaTareas tendrá los datos correctos, lo que permitirá mostrar la lista de tareas correctamente 
sin errores. */