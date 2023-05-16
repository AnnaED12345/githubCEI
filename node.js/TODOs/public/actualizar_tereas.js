/* //
Instrucciones: 

*/


const abrirDialogoActalizar = (event, id) => {
    event.preventDefault();

    const tareaActualizadaID = document.getElementById('tarea_actualizadaID');

    const eventoEditar = function () { //Callback de la función ...*
        actualizarTareas(event, id); 
        btnOk.removeEventListener("click", eventoEditar);
        return dialogoEditar.close();
      };

    const dialogoEditar = document.getElementById('editar_dialogo'); 
    dialogoEditar.showModal(); // mostramos el diálogo

    //boton confirmar
    const btnOk = document.getElementById("btnOk");
    btnOk.addEventListener("click", eventoEditar);

    //boton cancelar
  const btnCancelar = document.getElementById('btnCancelar');
  btnCancelar.addEventListener("click", function () {
      dialogoEditar.close();
      btnOk.addEventListener("click", eventoEditar);
    })

    //al hacer click en entre se recarga la pagina: ¿cómo solucionamos esto?
    //al pulsar enter queremos que se actualice
    const campoEditar = document.getElementsByClassName("editar_texto");

    const enterEditar = function () {
      
    };

    campoEditar[0].addEventListener("keydown", (event) => { //input nos envia un array y recogemos el primer elemento = posición 0
        if (event.key === "Enter"){
            event.preventDefault();
            eventoEditar();
            
        }
    });
}

// función para actualizar las tareas

const actualizarTareas = (event, id) => {
    event.preventDefault();
    console.log("haces click al boton aceptar");

     //fetch method DELETE
    
     const tareaActualizada = document.getElementById("tarea_actualizadaID").value;
     const body = {tarea: tareaActualizada};//en el body pasamos como objeto la estructura: pedimos un objeto que pide la propiedad tarea que recoge el valor de tarea tareaID.value

     const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json" 
      }
    }
  
      const actualizar = fetch (`/tareas/${id}`, options)

      .then((res) => {  //cuando la promesa se cumple:
      if (res.ok) { //si es correcta:
        cargarTareas();
        document.getElementById("tarea_actualizadaID").value = ""; // no usamos la variable tarea por que ahí almancenamos el valor pero no lo obtenemos. Explicado detalladamente abajo:
        const tareaAnterior =  event.target.parentElement; // el padre del botón es el elemento li.

        const tareaAgregada = document.getElementById('tarea_actualizadaID').value; // campo de entrada para la tarea actualizada
        tareaAgregada.value = tareaAnterior; // asignamos el texto de la tarea seleccionada al campo de entrada

        const tareaActualizadaID = document.getElementById('tarea_actualizadaID');

    } else {
        console.log("Error: Tienes que añadir una tarea");
    }
})

}
    