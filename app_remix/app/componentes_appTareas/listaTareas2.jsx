import { useState } from "react";
import DialogoBorrar from "./dialogoBorrar";
import DialogoEditar from "./dialogoEditar";
import { useParams } from "@remix-run/react";


export default function ListaTareas2 ({ tareas, cargarTareas}) { //creamos un componente Lista tareas que recibira como prop las tareas
   
    const mostrarDialogoBorrar = () => {
        const dialogoBorrar = document.getElementById("borrar_dialogo");
        dialogoBorrar.showModal();
    }

    const mostrarDialogoEditar = (id) => {
        const editarDialogo = document.getElementById("editar_dialogo");
        editarDialogo.showModal();
    }


    const onCancelarBorrar = () => {
        const dialogoBorrar = document.getElementById("borrar_dialogo");
        dialogoBorrar.close();
    }

    const onCancelarEditar = (event) => {
        event.preventDefault()
        const editarDialogo = document.getElementById("editar_dialogo");
        editarDialogo.close();
    }

    const onConfirmarBorrar = (() => {
        const {user_id} = useParams();
        const {task_id} = useParams();

        const options = {
            method: 'DELETE'
        }

        const borrar = fetch (`/users/${user_id}/tasks/${task_id}`, options)
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
                {tareas.map((tarea, index) => ( //si es true, responde con un array de lista de tareas
                        <li key={tarea.id}> {tarea.descripcion}

                        <button className="btnBorrar"
                        onClick={() => mostrarDialogoBorrar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            </button> 
                            
                        <button className="btnEditar"
                        onClick={() => mostrarDialogoEditar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                            </button> 

                        </li> ))}

                        <DialogoBorrar onConfirmarBorrar={onConfirmarBorrar} onCancelarBorrar={onCancelarBorrar}/>
                        <DialogoEditar onSubmitTarea={onSubmitTarea} onCancelarEditar={onCancelarEditar}/>
                </ol>

                
            </div>
        </div>
    )
}