
const btnIniciar = document.getElementById("boton_enviar");

//función iniciar
function iniciarTemporizador (tiempo) {
    tiempo.preventDefault(); //para evitar que el comportamiento predeterminado de un evento ocurra.
    let minutos = document.getElementById("minutosID").value;
    let segundos = document.getElementById("segundosID").value;

    console.log(minutos, segundos);
}

//crear el evento INICIAR

btnIniciar.addEventListener("click", iniciarTemporizador);

