/* Instrucciones: 
1. Creamos dos eventos:
    1.1 Para recoger los datos cuando hacemos click al btnAnadir
    1.2 Para recoger los datos cuando pulsamos el botón enter.
2. Fetch método POST 
3.Opcional: validar respuesta
4.Añadir tarea
 */

const btnAnadir = document.getElementById("btnAnadir"); 
const arrayInputs = document.getElementsByClassName("texto");
const listaTareas2 = document.getElementById("listaTareas"); //guardamos en una variable el elemento html dónde queremos meter las tareas
const tarea = document.getElementById("tareaID");

//FUNCIÓN PARA RECOGER TAREA: 
const recogerTarea = function (event) {
    event.preventDefault();

    //options (debe estar antes del fetch ya que se usa en el fetch) -- metodo POST
    const body = {tarea: tarea} //en el body pasamos la estructura: pedimos un objeto que pide la propiedad tarea que recoge el valor de tarea tareaID.value

    const options = {
        method: 'POST', //por defecto método GET --> cambiamos a POST
        body: JSON.stringify(body), //lo enviamos en formato json 
        headers: {
            "Content-Type": "application/json" //informamos de que estamos enviando un formato json
        }
    }

    // FETCH AL SERVIDOR
    const post = fetch("/tareas", options); //guardamos la petición en una variable 

    

    post.then((response) => { //devuelve promesa
        post.then((res) => {
            if (res.ok) { // comprobamos que la respuesta sea correcta
              return response.text(); // si es correcta, devolvemos el texto de la respuesta
            } else {
             console.error('Error en la petición'); // si no es correcta, lanzamos un error
            }
        }) .then((tareaAgregada) => { 
            /* console.log(tareaAgregada); */
            //entonces, si la respuesta es correcta: 
            const nuevaTarea = document.createElement('li');  // Creamos un nuevo elemento de lista para la tarea agregada
            nuevaTarea.textContent = tareaAgregada; //asginamos a nueva tarea el texto

            // Agregamos el nuevo elemento de lista al elemento de lista de tareas existente
            listaTareas2.appendChild(nuevaTarea);
        });  
    });

/*     post.then ((responseDatos) => { //devuelve promesa
        return responseDatos.json(); //responde como fichero json y lo pasamos a js
    }) .then ((tareaAgregada) => {
        console.log(tareaAgregada);
            let tareaNueva2 = document.createElement('li'); //creamos un li por cada tareaNueva
            tareaNueva2.textContent = tareaAgregada; //se asigna el valor de los datos recogidos = tareaAgregada
            listaTareas2.appendChild(tareaNueva2);//metemos tarea nueva en la lista de tareas (li dentro de ul) 
        }) */


//listeners que inician la función 
btnAnadir.addEventListener("click", recogerTarea);
//en chrome ocurre por defecto (?) -- asegurate en otros navegadores: 
/* console.log (arrayInputs); */
arrayInputs[0].addEventListener("keydown", (event) => { //input nos envia un array y recogemos el primer elemento = posición 0
    if (event.key === "Enter"){
        return recogerTarea();
    }
});
}





