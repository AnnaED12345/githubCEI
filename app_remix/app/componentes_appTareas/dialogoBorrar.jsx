export default function DialogoBorrar({ onConfirmarBorrar, onCancelarBorrar }) {
    
    return (
      <dialog id="borrar_dialogo">
        <p>¿Estás seguro de que deseas borrar esta tarea?</p>

        <button id="confirmar_borrar" 
        onClick={onConfirmarBorrar}>
          Borrar
        </button>

        <button id="cancelar_borrar" 
        onClick={onCancelarBorrar}>
          Cancelar
        </button>
      </dialog>
    );
  }