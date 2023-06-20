const axios = require('axios'); //descarga modulo axios para ejercicio 2

/* Ejercicio 1: Simulación de una función externa
Escribe una función llamada getRandomNumber que genere un número aleatorio entre 1 y 100. Utiliza
un mock manual para simular el comportamiento de la función Math.random() y devolver un número
predefinido en su lugar.
 */

function getRandomNumber() {
return Math.floor(Math.random() * 100) + 1;
}


/* Ejercicio 2: Prueba de interacciones
Utiliza un mock manual para simular la respuesta del servidor y verificar que la función sendRequest maneja
correctamente la respuesta. */

function sendRequest(url) {
try {
const response = axios.get(url); 
return response.data;
} catch (error) {
console.error("Error:", error);
return null;
}
}


module.exports = {
    getRandomNumber,
    sendRequest
}
