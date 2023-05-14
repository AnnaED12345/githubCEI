/* //
Instrucciones: 

*/

const abrirDialogo = (tarea, id) => {
    const tareaActualizada = document.getElementById('tarea_actualizadaID'); // campo de entrada para la tarea actualizada
    const dialogo = document.getElementById('editar_dialogo'); // diálogo
    tareaActualizada.value = tarea; // asignamos el texto de la tarea seleccionada al campo de entrada
    dialogo.showModal(); // mostramos el diálogo
}
