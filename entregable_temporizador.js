
const btnIniciar = document.getElementById("boton_enviar");
const contador = document.getElementById("contador");


//prueba 1
// //función para guardar los numeros ingresados 
// let numerosIngresados = function (tiempo) {
//     tiempo.preventDefault(); //para evitar que el comportamiento predeterminado de un evento ocurra.
//     let minutos = document.getElementById("minutosID").value;
//     let segundos = document.getElementById("segundosID").value;

//     console.log(minutos, segundos);
// }


// Evento INICIAR

// btnIniciar.addEventListener("click", numerosIngresados);



//prueba 2
//función para guardar los numeros ingresados
let numerosIngresados = function (tiempo) {
    let minutos = document.getElementById("minutosID").value;
    let segundos = document.getElementById("segundosID").value;
    return(minutos * 60) + segundos;
}

numerosIngresados();

function mostrarTiempo(tiempoRestante) {
    var minutos = Math.floor(tiempoRestante / 60);
    var segundos = tiempoRestante % 60;
    var tiempoMostrado = document.getElementById("contador");
    tiempoMostrado.innerHTML = minutos + ":" + segundos;
  }


// //Función contador
// function temporizador () {
    
    
// }


