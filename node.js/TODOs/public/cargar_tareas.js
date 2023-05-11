
//Usamos Fetch para enviar una solicitud a un servidor y obtener datos de respuesta en formato JSON.


/* Instrucciones: 
1.Solicitud al servidor /tareas //por defecto fetch hace una peticion GET al servidor. 
2.Devuelve una promesa que resolvemos con .then --> then/cuando se recibe la respuesta del servidor se ejecuta la siguiente function: 
3.Que hacemos en la funcion? Llamar al metodo json que se encarga de pasar el archivo json a js.
4.Nos devuelve otra promesa. Aquí se pasa el objeto JS como argumento y lo imprimimos por consola.
 */

const cargarTareas = () => { 
const request = fetch("/tareas"); //guardamos la petición en una variable 
console.log(request); //la imprimimos por pantalla para ver que recibimos de la petición

const listaTareas = document.getElementById("listaTareas"); //guardamos en una variable el elemento html dónde queremos meter las tareas

request.then ((response) => { // respondemos a la promesa con .then
    return response.json(); //responde como fichero json y lo pasamos a js
}).then ((datos) => { //datos = respuesta JS anterior
    eliminarTareas(); //llamamos a la función eliminar tareas antes de crear nuevas. 
    datos.forEach(tarea => { //recorremos el array. datos.for each = por cada dato/tarea, ocurre lo siguiente:
        const tareaItem = document.createElement('li'); //se crea un elemento en la lista. 
        tareaItem.textContent = tarea; //se asigna el texto de la tarea en el elemento li

        const botonBorrar = document.createElement("button");
        botonBorrar.setAttribute("class", "btnBorrar");
        botonBorrar.addEventListener("click", borrarTareas);
        /* console.log(botonBorrar); */
        botonBorrar.textContent = "x";

        //se agrega el nuevo elemento li como hijo del elemento listaTareas utilizando el método appendChild().
        listaTareas.appendChild(tareaItem); //al ul le añadimos el li
        tareaItem.appendChild(botonBorrar);
        });
    });
} 

//función para eliminar tareas cada vez que agregamos una nueva . 
const eliminarTareas = () => {
    //debe ser listasTareas.children.length ya que no nos devuelve un array por lo tanto, listastareas.length sería incorrecto.
    //con listaTareas.children.length lo que le decimos es que elimine los hijos del elemento listaTareas
    while (listaTareas.children.length > 0) { //mientras que la lista de tareas sea mayor a 0
        listaTareas.children[0].remove(); //se eliminan los elementos
    }
}










