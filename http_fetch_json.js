//FETCH + JSON

/* FETCH + JSON
Ejercicios 1
Utiliza fetch para realizar una solicitud GET a la siguiente API:
https://jsonplaceholder.typicode.com/todos/1
2. Procesa la respuesta y convierte los datos recibidos en un objeto JavaScript utilizando el método
.json().
3. Muestra los datos del objeto en la consola. */

//    const peticionHttp1 = fetch("https:jsonplaceholder.typicode.com/todos/1"); //guardamos la petición en una variable
//    console.log(peticionHttp1);
//    //fetch nos devuelve una promesa, por lo tanto resolvemos con .then
//    peticionHttp1.then(respuesta => {
//     //Si se ejecuta vamos a guardar la respuesta en una variable para posteriomente poder trabjar con ella
//     const json = respuesta.json(); 
//     console.log(json); //nos devuelve otra promesa
//     json.then (respuestaJson => {
//         console.log(respuestaJson); //.json ya la transorma en js entonces la respuesta impresa en consola es en js
//     }).catch (errorJson =>{console.log(errorJson)});

//    }).catch (error => {
//     console.log(error);
//    })


//    FORMA MÁS SENCILLA DE RESOLVER: 
   const peticionHttp1 = fetch("https:jsonplaceholder.typicode.com/todos/1"); //guardamos la petición en una variable
      console.log(peticionHttp1);
      //fetch nos devuelve una promesa, por lo tanto resolvemos con .then
      peticionsHttp1.then(respuesta => {
        return respuesta.json();//la función devuelve directamente la respuesta.json
      })
      //pero sigue devolviendo una promesa así que se resuelve nuevamente con .then
      .then((respuestaJson) => {console.log(respuestaJson)})
      .catch (error => {console.log(error);});//el catch se usa en caso de que haya un error en cualquiera de los anteriores pasos


    //Lo mismo que arriba pero resolviendo la promesa con async
// async function cargarDatosToDo () {
//     //con await recibimos la respuesta directamente una vez ejecutada bien y la guardamos en una variable.
//     const respuesta = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
//     //lo mismo con la segunda promesa que se nos devuelve.
//     const respuestaJson = await respuesta.json();//.jason se encarga de hacer el "parsing"
//     console.log("Respuesta JSON ", respuestaJson);
// }

// cargarDatosToDo();

/* FETCH + JSON
Ejercicio 2: 
1. Crea un objeto JavaScript con la siguiente estructura:
2. Utiliza fetch para realizar una solicitud POST a la siguiente API:
https://jsonplaceholder.typicode.com/posts
3. Asegúrate de incluir la información necesaria en el objeto options y el cuerpo de la solicitud en
formato JSON.
4. Procesa la respuesta y convierte los datos recibidos en un objeto JavaScript utilizando el método
.json().
5. Muestra los datos del objeto en la consola, incluyendo el ID del nuevo recurso creado.
 - 
 */

 //1. Estructura del objeto:
const newPost = {
    title: "Mi nuevo post",
    body: "Este es el contenido de mi nuevo post.",
    userId: 1
    };

    const options = {
        method: "POST" ,
        body: JSON.stringify(newPost) 
    }

    async function procesarRespuesta () {
      const solicitud = await fetch("https://jsonplaceholder.typicode.com/posts", options );
      const solicitudJson = await solicitud.json();
      console.log(solicitudJson);
 }

 procesarRespuesta();


//solución sin ASYNC / AWAIT: 
// const newPost = {
//     title: "Mi nuevo post",
//     body: "Este es el contenido de mi nuevo post.",
//     userId: 1
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(newPost)
  //en el body es donde van los datos que le vamos a enviar al servidor
        //este nos los acepta en formato jason por lo que para convertir de js a json usamos .stringfy(el obojeto que queramos trasnformar en json)
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(respuestaHttp => {
//         return respuestaHttp.json(); //nos devuelve una promesa
//     })
//     .then(respuestaJson => {
//         console.log(respuestaJson);
//     });