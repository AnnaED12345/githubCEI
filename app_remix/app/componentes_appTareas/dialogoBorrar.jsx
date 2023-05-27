import { useState } from "react"


export default function DialogoBorrar ({ mostrarDialogo, setMostrarDialogo }) {
 
    // Podemos usar booleanos para gestionar la visibilidad del elemento: por defecto no aparecerá. 
    const [mostrarDialogo, setMostrarDialogo] = useState(true); 

    //1 opción: crear 2 funciones, una para abrir dialogo y otra para cerrar dialog
    /* const abrirDialogo = () => { //creamos una función para abrir el diálogo
        setMostrarDialogo(true);
      };

    const cerrarDialogo = () => { 
        setMostrarDialogo(false);
    } */

    //2 opción: crear una función con un condicional: si el diálogo está abierto se establece el valor contrario. Si es true pasa a !false y viceversa
    /* const cambiarDialogo = () => {
        setMostrarDialogo(!mostrarDialogo)
    } */

    const cerrarDialogo = () => {
        setMostrarDialogo(false);
      };

    

    return(
    <div>
           <dialog id="borrar_dialogo">
                <p>¿Estás seguro de que deseas borrar esta tarea?</p>
                <button id="confirmar_borrar">Borrar</button>
                <button onClick={cerrarDialogo} id="cancelar_borrar">Cancelar</button>
              </dialog>
        </div>
        )
}