// para el id debemos: 
/* const tareaid = (guardar la id de tarea)
fetch (/tareas/${tareaid}) -- metodo delete */

/* Instrucciones: 
1. Añadir event listener a ese botón/IntersectionObserver
2. fetch Delete /tareas/:IdleDeadline
3. eliminar tareas del DOM
4. cargarTareas() -> me refresca la lista de tareas.Añadir */


//const btnBorrar = document.getElementsByClassName("btnBorrar"); //devuelve un elemento HTMLCollection que resolvermos con un bucle forEach ya que tenemos varios botones y queremos que por cada boton creado, ocurra x
const btnBorrar = document.querySelectorAll("button");
/* console.log (btnBorrar); */

// función borrar tareas
// const borrarTareas = (event, id) => {
//     event.preventDefault();
//       console.log("haces click al boton eliminar");
//       //fetch method DELETE
      
//       const options = {
//         method: 'DELETE',
//         // body:  no es necesario ya que no se envian datos. 
//         headers: {
//             "Content-Type": "application/json"
//       }
//     }

//       const borrar = fetch (`/tareas/${id}`, options)
//       .then((res) => {  //cuando la promesa se cumple: 
//         if (res.ok) { //si es correcta:
//             /* const tareaLista = document.querySelectorAll('li'); */
//             /* Debemos aplicar event.target.parentElement sobre el evento y no sobre la variable del boton por que de 
//             esta forma, el event listener sabrá a qué botón se ha hecho clic y qué tarea debe ser eliminada. */
//           cargarTareas();          
//           const tareaSeleccionada = event.target.parentElement; // el padre del botón es el elemento li.
//           console.log(tareaSeleccionada);
//           tareaSeleccionada.remove(); //se borra el elemento
//           /* console.log(`La tarea ${tareaID} ha sido eliminada`) */

//         } else {
//             console.log ("No existe esta tarea");
//         }
//     }) 
//   }

  //addeventlistener: botones: 
  

// AÑADIR EVENTO A CADA ELEMENTO (BOTON) DE LA COLECCIÓN
/* forEach no es una opción válida para recorrer elementos HTMLCollection.
Por lo que se puede resolver de dos maneras:

 1. El método forEach() es una función que pertenece a la interfaz Array, por lo que no está disponible en la colección de 
 elementos HTML que devuelve getElementsByClassName(). En su lugar, puedes convertir la colección en un arreglo usando el 
 método Array.from() y luego usar forEach() en ese arreglo: */

 /* Array.from(btnBorrar).forEach((btn) => {
    btn.addEventListener("click", borrarTareas);
  }); */


 //2. O usar un bucle for que es una opción válida para recorrer los elementos del objeto HTMLCollection.

/* const bucleBtn = () => { 
    for (let i = 0; i < btnBorrar.length; i++) { */
        /* btnBorrar[i].addEventListener("click", borrarTareas); */
   /*      console.log(btnBorrar[i]);
    }
} */


const abrirDialogo = (event, id) => {
  event.preventDefault();

  const eventoConfirmar = function () { //Callback de la función ...*
    borrarTareas(event, id); //se llama a la función borrar tareas
    //es importante entender: la función ejecuta borrar tareas y BORRA el event listener
    confirmar_borrar.removeEventListener("click", eventoConfirmar); //...* y posteriormente se borra el listener para no acumularlo
    return borrarDialogo.close();
  };
  
  const borrarDialogo = document.getElementById('borrar_dialogo');
  borrarDialogo.showModal();

  //boton confirmar
  const confirmar_borrar = document.getElementById('confirmar_borrar');
  //aquí CREMOS un event listener haciendo referencia a eventoConfirmar dónde BORRAMOS el eventlistener
  confirmar_borrar.addEventListener("click", eventoConfirmar); //en el boton de confirmar llamamos a la función Confirmar
  

  //boton cancelar
  const cancelar_borrar = document.getElementById('cancelar_borrar');
  cancelar_borrar.addEventListener("click", function () {
      borrarDialogo.close();
      confirmar_borrar.removeEventListener("click", eventoConfirmar);
    })

     //al hacer click en entre se recarga la pagina: ¿cómo solucionamos esto?
    //al pulsar enter no queremos que pase nada
    borrarDialogo.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
}
 

const borrarTareas = (event, id) => {
  event.preventDefault();
    console.log("haces click al boton eliminar");
    
    //fetch method DELETE
    
    const options = {
      method: 'DELETE',
      // body:  no es necesario ya que no se envian datos. 
      headers: {
          "Content-Type": "application/json"
    }
  }

    const borrar = fetch (`/tareas/${id}`, options)
    .then((res) => {  //cuando la promesa se cumple: 
      if (res.ok) { //si es correcta:
          /* const tareaLista = document.querySelectorAll('li'); */
          /* Debemos aplicar event.target.parentElement sobre el evento y no sobre la variable del boton por que de 
          esta forma, el event listener sabrá a qué botón se ha hecho clic y qué tarea debe ser eliminada. */
        cargarTareas();
        const tareaSeleccionada = event.target.parentElement; // el padre del botón es el elemento li.
        console.log(tareaSeleccionada);
        tareaSeleccionada.remove(); //se borra el elemento
        /* console.log(`La tarea ${tareaID} ha sido eliminada`) */

      } else {
          console.log ("No existe esta tarea");
      }
  }) 
  };