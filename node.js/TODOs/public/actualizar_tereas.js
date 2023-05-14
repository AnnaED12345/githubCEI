/* //
Instrucciones: 

*/

const abrirDialogoActalizar = (event, id) => {
    event.preventDefault();

    const dialogoEditar = document.getElementById('editar_dialogo'); 
    dialogoEditar.showModal(); // mostramos el diálogo

    //boton confirmar
    const btnOk = document.getElementById("btnOk");
    console.log(btnOk);
    btnOk.addEventListener("click", function () {
        ;//llamar función actualizar
        return dialogoEditar.close();
    });


    //boton cancelar
  const btnCancelar = document.getElementById('btnCancelar');
  btnCancelar.addEventListener("click", function () {
      dialogoEditar.close();
    })

}


// función para actualizar las tareas

const actualizarTareas = ((event, id) => {

    const tareaActualizada = document.getElementById('tarea_actualizadaID').value; // campo de entrada para la tarea actualizada
    tareaActualizada.value = tarea; // asignamos el texto de la tarea seleccionada al campo de entrada
    console.log(tareaActualizada);

});


 /* const tareaActualizada = document.getElementById('tarea_actualizadaID'); // campo de entrada para la tarea actualizada
    const dialogo = document.getElementById('editar_dialogo'); // diálogo
    tareaActualizada.value = tarea; // asignamos el texto de la tarea seleccionada al campo de entrada
    dialogo.showModal(); // mostramos el diálogo */