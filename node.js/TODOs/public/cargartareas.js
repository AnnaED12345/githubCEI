//Usamos Fetch para enviar una solicitud a un servidor y obtener datos de respuesta en formato JSON.


/* Instrucciones: 
1.Solicitud al servidor /tareas //por defecto fetch hace una peticion GET al servidor. 
2.Devuelve una promesa que resolvemos con .then --> then/cuando se recibe la respuesta del servidor se ejecuta la siguiente function: 
3.Que hacemos en la funcion? Llamar al metodo json que se encarga de pasar el archivo json a js.
4.Nos devuelve otra promesa. Aquí se pasa el objeto JS como argumento y lo imprimimos por consola.
 */


//1.
const request = fetch("/tareas"); //guardamos la petición en una variable 
console.log(request); //la imprimimos por pantalla para ver que recibimos de la petición

//2.
//fetch nos devuelve una promesa, por lo tanto resolvemos con .then
request.then ((response) => {
    return response.json(); //responde como fichero json y lo pasamos a js
}).then ((datos) => { //datos = respuesta JS anterior
    console.log(datos)
});

const listaTareas = document.getElementById("listaTareas");

