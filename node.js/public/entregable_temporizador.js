
const btnIniciar = document.getElementById("enviar");
let clearID;

//función contador 
let numerosIngresados = function (tiempo) { 
    tiempo.preventDefault(); //para evitar que el comportamiento predeterminado de un evento ocurra: actualizar página
    let minutos = document.getElementById("minutosID").value; //guardamos el valor de minutos
    let segundos = document.getElementById("segundosID").value; //guardamos el valor de segundos

    let totalSegundos = (minutos * 60) + segundos; //para trabajar con el numero entero
    /* console.log (totalSegundos); */

    //cambiar boton inciar - detener. (si es inciar ocurre ... si es detener ocurre...)
    const textoIniciar = btnIniciar.getAttribute('value'); 
    if (textoIniciar === "Iniciar"){
      btnIniciar.setAttribute('value', "Detener"); 
      btnIniciar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

      //empieza el contador (set interval y guardamos ID para clearInterval)
      clearID = setInterval(() => {
      console.log ("Quedan " + totalSegundos + " segundos.");
      const temporizador = document.getElementById("temporizador");

      let minutosMostrados = Math.floor(totalSegundos / 60).toString().padStart(2, "0");;
      //Math.floow redondea hacía abajo: utilizamos Math.floor() para obtener el número entero de minutos a partir de la cantidad total de segundos ingresada.
      let segundosMostrados = (totalSegundos % 60).toString().padStart(2, "0");;
      //Explicación de .toString y .padStart detallada abajo.
      // Resumen: 
      // .tooSrting convierte numeros en cadena de texto
      // .padStar rellena la cadena de texto (número de dígitos que quieres, "con qué lo quieres rellenar")

      temporizador.textContent = minutosMostrados + ":" + segundosMostrados ; //actualizar el contenido del contador
      totalSegundos--

      if (totalSegundos === -1) { // Detener el temporizador cuando llegue a 0
        clearInterval(clearID);
      }
    }, 1000); //queremos que se ejecute cada milisegundo

    } else {
      btnIniciar.setAttribute('value', "Iniciar");   
      btnIniciar.style.backgroundColor = "rgb(67, 104, 117)";
      temporizador.textContent = "00:00" ;

      clearInterval(clearID);
    }
    
};


//Evento INICIAR

btnIniciar.addEventListener("click", numerosIngresados); 
// también podemos meter la función numerosIngresdaos directamente dentro del addEventListener
// ejemplo: 
// btnIniciar.addEventListener("click", function(tiempo) {
//     tiempo.preventDefault(); 
//     let minutos = document.getElementById("minutosID").value;
//     let segundos = document.getElementById("segundosID").value;

//     const totalSegundos = (minutos * 60) + segundos;
//     console.log (totalSegundos);
// }); 





// EXPLICACIÓN:
// 1. toString()
// toString() es un método que está disponible en muchos objetos de JavaScript, incluyendo números y fechas. 
// Este método convierte el objeto actual en una cadena de texto. 

// Cuando se llama a toString() en un número, convierte el número en una cadena de texto que representa el 
// número. Por ejemplo, 5.toString() devolverá una cadena de texto que contiene el número 5.

// Sin embargo, hay una peculiaridad con toString() y los números. Si intentas llamar a toString() en un número 
// directamente, como 5.toString(), obtendrás un error de sintaxis. Esto se debe a que JavaScript interpreta el 
// punto después del número como un punto decimal. Para evitar este error, debes colocar el número entre 
// paréntesis, como (5).toString().

// 2. padStart()
// padStart() es un método de cadena que está disponible en JavaScript a partir de la versión ECMAScript 2017. 
// Este método agrega caracteres al principio de una cadena hasta que la cadena alcanza la longitud deseada.

// padStart() toma dos argumentos: la longitud deseada de la cadena resultante y el carácter con el que se debe 
// rellenar la cadena original.

// Por ejemplo, si tienes la cadena "3" y quieres rellenarla con ceros hasta que tenga una longitud de 4 
// caracteres, puedes usar padStart() de la siguiente manera: "3".padStart(4, "0"). Esto devolverá la cadena 
// "0003", ya que se agregaron tres ceros al principio de la cadena original.