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

//funcion recoger tarea:
const recogerTarea = function (event) {
    event.preventDefault();

    //El fetch debe de estar dentro de la función ya que queremos que cada vez que se recoja una tarea se haga una petición al servidor y que este la pinte en la lista de tareas.
    
    const body = {tarea: tarea} //en el body pasamos la estructura: pedimos un objeto que pide la propiedad tarea que recoge el valor de tarea tareaID.value
    
    //fetch al servidor - método post
    const options = {
        method: 'POST', //por defecto método GET --> cambiamos a POST
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json" //
        }
    }

    const post = fetch("/tareas", options); //guardamos la petición en una variable 
    console.log(post); //la imprimimos por pantalla para ver que recibimos de la petición
    
    const listaTareas = document.getElementById("listaTareas"); //guardamos en una variable el elemento html dónde queremos meter las tareas

    post.then ((responseDatos) => { //devuelve promesa
        return responseDatos.json(); //responde como fichero json y lo pasamos a js
    }) .then ((responseDatos2) => {
        responseDatos2(tareaAgregada => { //función para guardar la tarea que recogemos: 
            let tareaNueva = document.getElementById("tareaID").value; //guardamos en una variable el valor de tareaID
            console.log(`Se ha añadido la tarea ${tarea}`);

            tareaNueva = document.createElement('li'); //creamos un li por cada tareaNueva
            tareaNueva.textContent = tareaAgregada; //se asigna el valor de los datos recogidos = tareaAgregada
            listaTareas.appendChild(tareaNueva); //metemos tarea nueva en la lista de tareas (li dentro de ul)
    })
})

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





