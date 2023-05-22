
import { useEffect, useState } from "react";


/* Ejercicio 2: Llamada a una API
- Crea un componente que haga una llamada a una API (por ejemplo, a
https://jsonplaceholder.typicode.com/posts) cuando se monte el componente. Utiliza useEffect para
hacer la llamada a la API y muestra los datos en el componente. */


/* export default function LlamadaApi () {

    const[datos, setDatos] = useState(); //su valor incial estará vacío hasta que se complete el fetch

    useEffect(() => {
       const peticion = fetch("https://jsonplaceholder.typicode.com/posts"); //guardamos la petición en una variable
       peticion.then ((res) => {return res.json()}) //Devuelve los datos como json
       .then((datos) => () => console.log(datos[0]));/* {setDatos = (datos = resJson(0))}); */

      /*  peticion.then((res) => {
        setDatos(res);
       });
    }, []);

    

    return (
        <div>
            <h1>Ejercicio 2 useEffect</h1>
            <p>{datos}</p>
        </div>
    )
} */ 


    // SOLUCIÓN PROFE:


    export default function LlamadaApi () {

        const[post, setDatos] = useState(); //su valor incial estará vacío hasta que se complete el fetch
    
        useEffect(() => {
           async function FetchData () {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const datos = await response.json();
            setDatos(datos[0]);
           }

           FetchData();
        }, []);
    
        
    
        return (
            <div>
                <h1>Ejercicio 2 useEffect</h1>
                <p>Title: {post ? post.title : "..." } </p>
                <p>Body: {post ? post.body : "..."} </p>
            </div>
        )
    }