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
console.log (btnBorrar);

// función borrar tareas
const borrarTareas = (event) => {
    event.preventDefault();
    
      console.log("haces click al boton eliminar");
  }





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

 