/* Instrucciones: 
1. Creamos dos eventos:
    1.1 Para recoger los datos cuando hacemos click al btnAnadir
    1.2 Para recoger los datos cuando pulsamos el botón enter.
2. Fetch método POST 
3.Opcional: validar respuesta
4.Añadir tarea
 */

// VARIABLES
const btnAnadir = document.getElementById("btnAnadir");
const enter = document.getElementsByClassName("texto"); //el input nos devuevle un array. 


const listaTareas3 = document.getElementById("listaTareas"); //guardamos en una variable el elemento html dónde queremos meter las tareas

//FUNCIÓN QUE RECOGE LAS TAREAS

const crearTarea = function (event) { 
    event.preventDefault(); //no actualiza la pagina

    const tarea = document.getElementById("tareaID").value;

    const body = {tarea: tarea}; //en el body pasamos como objeto la estructura:  un objeto que pide la propiedad tarea que recoge el valor de tarea tareaID.value

    const post = fetch ("/tareas", { //options
        method: 'POST', //por defecto método GET --> cambiamos a POST
        body: JSON.stringify(body), //lo enviamos en formato json 
        headers: {
            "Content-Type": "application/json" //informamos de que estamos enviando un formato json
        }
    }) .then((res) => {  //cuando la promesa se cumple: 
        if (res.ok) { //si es correcta:
            cargarTareas();
            document.getElementById("tareaID").value = ""; // no usamos la variable tarea por que ahí almancenamos el valor pero no lo obtenemos. Explicado detalladamente abajo:

            /* const nuevaTarea = document.createElement('li'); //creamos un li
            nuevaTarea.textContent = tarea;

            listaTareas3.appendChild(nuevaTarea); */
        } else {
            console.log("Error: Tienes que añadir una tarea");
        }
    }) 
}


//LISTENERS QUE INCIAN LA FUNCIÓN
btnAnadir.addEventListener("click", crearTarea);
//en chrome ocurre por defecto (?) -- asegurate en otros navegadores: 
/* console.log (arrayInputs); */
enter[0].addEventListener("keydown", (event) => { //input nos envia un array y recogemos el primer elemento = posición 0
    if (event.key === "Enter"){
        return crearTarea(event);
    }
});




// document.getElementbyId ("tareaID").value = "";
/* En el caso de tu código, cuando haces const tarea = document.getElementById("tareaID").value, la variable tarea contiene el
valor de la propiedad value del elemento del DOM con el ID tareaID. Esto es un valor primitivo, por lo que cuando haces 
tarea = "", estás simplemente asignando un nuevo valor a la variable. Esto no afecta al elemento del DOM en sí.
Por lo tanto, para borrar el contenido del input en el DOM, necesitas acceder directamente al elemento del DOM y establecer 
su propiedad value en una cadena vacía. Podrías hacerlo de esta forma: document.getElementbyId ("tareaID").value = ""; */