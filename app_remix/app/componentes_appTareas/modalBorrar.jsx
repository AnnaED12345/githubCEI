export default function ModalBorrar ({mostrarDialogo, setMostrarDialogo, cargarTareas}) {

    const borrarTareas = (id) => {
        console.log("haces click al boton eliminar");

         //fetch method DELETE
    
    const options = {
        method: 'DELETE',

    }

    const borrar = fetch (`/tareas/${id}`, options)
    .then((res) => {  //cuando la promesa se cumple: 
      if (res.ok) { 
        cargarTareas(); 
      } else {
          console.log ("No existe esta tarea");
      }
    })

    }


    return(
    <div>
           <div id="borrar_dialogo">
                <p>¿Estás seguro de que deseas borrar esta tarea?</p>

                <button id ="confirmar_borrar"
                onClick={borrarTareas(index)}>Borrar</button>

                {/* <button id="cancelar_borrar"
                onClick={cancelarBorrar}>Cancelar</button> */}
            </div> 
        </div>
        )
}