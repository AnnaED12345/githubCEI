import { useState } from "react"


export default function DialogoBorrar ({mostrarDialogo, setMostrarDialogo}) {

    return(
    <div>
           <dialog id="borrar_dialogo">
                <p>¿Estás seguro de que deseas borrar esta tarea?</p>
                <button id="confirmar_borrar"
                >Borrar</button>
                <button id="cancelar_borrar
                ">Cancelar</button>
            </dialog> 
        </div>
        )
}