//FETCH + JSON

/* FETCH + JSON
Ejercicios 1
Utiliza fetch para realizar una solicitud GET a la siguiente API:
https://jsonplaceholder.typicode.com/todos/1
2. Procesa la respuesta y convierte los datos recibidos en un objeto JavaScript utilizando el método
.json().
3. Muestra los datos del objeto en la consola. */

/* incompleto: 
const peticionHttp = fetch ("https://jsonplaceholder.typicode.com/todos/1")
peticionHttp
    .then(response => response.json ())
    .then(respuestaJson => {
        console.log("Respuesta Json: ", respuestaJson);
    })
    .catch(error => console.error(error));
 */

    //Lo mismo que arriba pero resolviendo la promesa con async
async function cargarDatosTodo () {
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
    const respuestaJson = await respuesta.json();
    console.log("Respuesta JSON ", respuestaJson);
}

cargarDatosTodo();

/* FETCH + JSON
Ejercicio 2: 
 - Crea un objeto JavaScript con la siguiente estructura:
 - Utiliza fetch para realizar una solicitud POST a la siguiente API:
https://jsonplaceholder.typicode.com/posts
 - 
 */

/* const newPost = {
    title: "Mi nuevo post",
    body: "Este es el contenido de mi nuevo post.",
    userId: 1
    };

const solicitudPost = fetch ("https://jsonplaceholder.typicode.com/posts");
    solicitudPost.then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
    })
    .catch ((error) => {
        console.log(error);
    })  */

/* FETCH + JSON
Ejercicio 2.3. 
Utiliza fetch para realizar una solicitud POST a la siguiente API:
https://jsonplaceholder.typicode.com/posts
 */


//solución: 
const newPost = {
    title: "Mi nuevo post",
    body: "Este es el contenido de mi nuevo post.",
    userId: 1
};

const options = {
    method: "POST",
    body: JSON.stringify(newPost)
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(respuestaHttp => {
        return respuestaHttp.json();
    })
    .then(respuestaJson => {
        console.log(respuestaJson);
    });