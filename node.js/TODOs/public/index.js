const btnAnadir = document.getElementById("btnAnadir");
const listaTareas = document.getElementById("listaTareas");

//funcion recoger tarea:
const recogerTarea = function (event) {
    event.preventDefault();
    let tarea = document.getElementById("tareaID").value;
    console.log(`Se ha añadido la tarea ${tarea}`);
    listaTareas.textContent = tarea;
}

//listener que inicia la función al hacer click
btnAnadir.addEventListener("click", recogerTarea);

