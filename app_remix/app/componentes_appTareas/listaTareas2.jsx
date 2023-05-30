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
            <p>Tareas añadidas:</p>

            <div id="cajaTareas">
                {/* Opción 2: determinamos el valor por defecto como un array vacío --> explicado en index.js (componente padre) */}
                <ol>
                {tareas.map((tarea, index) => ( //si es true, responde con un array de lista de tareas
                        <li key={index}> {tarea}{index}

                        {/* <button className="btnBorrar"
                        onClick={() => borrarTarea(index)}>Eliminar</button>  */}{/* creamos un boton para abrir el modal */} 

                        <button className="btnBorrar"
                        onClick={mostrarDialogoBorrar}>Eliminar</button>

                        <dialog id="borrar_dialogo">
                            <p>¿Estás seguro de que deseas borrar esta tarea?</p>
                            <button id="confirmar_borrar"
                            onClick= {() => onConfirmarBorrar(index)}
                            >Borrar</button>
                            <button id="cancelar_borrar"
                            onClick={onCancelarBorrar}
                            >Cancelar</button>
                        </dialog> 


                        <button className="btnEditar"
                        onClick={() => mostrarDialogoEditar(index)}>Editar</button>

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