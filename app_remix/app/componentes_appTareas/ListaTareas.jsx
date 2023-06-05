

import { useState } from "react"
import DialogoBorrar from "./dialogoBorrar"

export default function ListaTareas ({ tareas }) { //creamos un componente Lista tareas que recibira como prop las tareas
    
    // Podemos usar booleanos para gestionar la visibilidad del elemento: por defecto no aparecerá. 
    const [mostrarModal, setMostrarModal] = useState(false); 

    //1 opción: crear 2 funciones, una para abrir dialogo y otra para cerrar dialog
    /* const abrirDialogo = () => { //creamos una función para abrir el diálogo
        setMostrarDialogo(true);
      };

    const cerrarDialogo = () => { 
        setMostrarDialogo(false);
    } */

    //2 opción: crear una función con un condicional: si el diálogo está abierto se establece el valor contrario. Si es true pasa a !false y viceversa
    const cambiarModal = () => {
        setMostrarModal(!mostrarModal)
    }

    return (
        <div >
            <p>Tareas añadidas:</p>

            {/* para mostrar la lista de tareas, trabajaremos con un condicional: (explicado abajo) */}
            {/* <ol> 
                {tareas ? ( //hemos recibido ya los datos de la lista de tareas? 
                tareas.map((tarea, index) => ( //si es true, responde con un array de lista de tareas
                    <li key={index}> {tarea} </li> //que cuente con un elemento li con el primer elemento del array y la key también será la propia tarea ya que no tenemos identificador y el nombre de la tarea en si es única 
                ))) : (<p>Cargando tareas...</p> //si es false, devolvemos "cargando tareas"
            )} 
            </ol> */}

            <div id="cajaTareas">
                {/* Opción 2: determinamos el valor por defecto como un array vacío --> explicado en index.js (componente padre) */}
                <ol>
                {tareas.map((tarea, index) => ( //si es true, responde con un array de lista de tareas
                        <li key={index}> {tarea}

                        <button className="btnBorrar" onClick = {cambiarModal}>Eliminar</button> {/* creamos un boton para abrir el modal */}

                        { mostrarModal && <ModalBorrar/>} {/* e indicamos con el operador &&: 
                        Si la expresión antes del && es verdadera, se renderizará el elemento que le sigue. 
                        Si la expresión es falsa, no se renderizará nada. */}
                        

                        </li> ))}
                </ol>
            </div>
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





// ---------------------- COPIA LISTA TAREAS 2

import { useState } from "react";

export default function ListaTareas2 ({ tareas, cargarTareas}) { //creamos un componente Lista tareas que recibira como prop las tareas
    
    const mostrarDialogoBorrar = () => {
        const dialogoBorrar = document.getElementById("borrar_dialogo");
        dialogoBorrar.showModal();
    }

    const mostrarDialogoEditar = (id) => {
        const editarDialogo = document.getElementById(`editar_dialogo_${id}`);
        editarDialogo.showModal();
    }


    const onCancelarBorrar = () => {
        const dialogoBorrar = document.getElementById("borrar_dialogo");
        dialogoBorrar.close();
    }

    const onCancelarEditar = () => {
        const editarDialogo = document.getElementById("editar_dialogo");
        editarDialogo.close();
    }

    const onConfirmarBorrar = ((id) => {
        const options = {
            method: 'DELETE'
        }

        const borrar = fetch (`/tareas/${id}`, options)
        .then((res) => {  
          if (res.ok) { 
            cargarTareas()
            const dialogoBorrar = document.getElementById("borrar_dialogo");
            dialogoBorrar.close();
    
          } else {
              console.log ("No existe esta tarea");
          }
    })
});


const [tareaActualizada, setTareaActualizada] = useState(" ")//Guardamos la nueva actualizada para acutalizarla posteriormente con useState


    const onSubmitTarea = (id) => {
        const body = {tarea: tareaActualizada};
        const options = {
           method: 'PUT',
           body: JSON.stringify(body),
           headers: {
               "Content-Type": "application/json" 
         }
       }
     
         const actualizar = fetch (`/tareas/${id}`, options)
         .then((res) => {  
            if (res.ok) { 
              cargarTareas();
      
          } else {
              console.log("Error: Tienes que añadir una tarea");
          }
      })
      
    } 

   
    return (
        <div >
            <p>Tus tareas:</p>

            <div id="cajaTareas">
                {/* Opción 2: determinamos el valor por defecto como un array vacío --> explicado en index.js (componente padre) */}
                <ol>
                {tareas.map((tarea) => ( //si es true, responde con un array de lista de tareas
                        <li key={tarea.id}> {tarea.descripcion}

                         <button className="btnBorrar"
                        onClick={() => borrarTarea(index)}>Eliminar</button>  {/* creamos un boton para abrir el modal */} 

                       <button className="btnBorrar"
                        onClick={mostrarDialogoBorrar}>Eliminar</button>

                        <dialog id="borrar_dialogo">
                            <p>¿Estás seguro de que deseas borrar esta tarea?</p>
                            <button id="confirmar_borrar"
                            onClick= {() => onConfirmarBorrar(tarea.index)}
                            >Borrar</button>
                            <button id="cancelar_borrar"
                            onClick={onCancelarBorrar}
                            >Cancelar</button>
                        </dialog> 


                        <button className="btnEditar"
                        onClick={() => mostrarDialogoEditar(tarea.index)}>Editar</button>

                        <dialog id={`editar_dialogo_${index}`}>
                            <form action=""
                            onSubmit={() => onSubmitTarea(index)}>
                                <input 
                                className="editar_texto" 
                                type="text" 
                                placeholder="Actualiza tu tarea..." 
                                name="tarea_actualizada" 
                                id="tarea_actualizadaID"
                                onChange={(event) => setTareaActualizada(event.target.value)}>
                                </input>
                            
                            
                            <input 
                            id="btnOk" 
                            type="submit" 
                            value="Aceptar">
                            </input>
                            
                            <input 
                            id="btnCancelar" 
                            type="submit" 
                            value="Cancelar"
                            onClick={onCancelarEditar}>
                            </input>
                            </form>
                        </dialog> 


                        </li> ))}
                </ol>
            </div>
        </div>
    )
}