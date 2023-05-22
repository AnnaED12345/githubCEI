import { useEffect, useState } from "react";

export default function UseEffect () {
    const [contador, setContador] = useState(0);
    const [contadorSecundario, setContadorSecundario] = useState(0);


    useEffect(() => {
        console.log("Ejecuntado  useEffect, []")
    }, []);
    //[]; si dejamos el array vacío solo se va a ejecutar en el estado inicial.
    //Esto se usa por ejemplo si desde un primer momento queremos cargar unos datos.

    useEffect(() => {
        console.log("Contador actualizado, nuevo valor", contador)
    }, [contador]); 
    //se ejecutará en la dependencia marcada: contador

    //recordatorio:
    /* si queremos trabajar con el DOM (document.getElementById), debemos hacerlo dentro del useEffect por que lo que ocurre
    es lo siguiente: 
    1. Render
    2. Actualiza el DOM
    3. UseEffect 
    Siguiendo este orden no encontraría un elemnto h1 en el DOM por que el DOM en su primer render esta vacío 
    (explicado en sesión clase 24) */

    return (
        <div>
            <h1>Probando useEffect</h1>
            <button onClick = {() => {setContador (contador + 1) }} > Contador +1 = {contador}</button>
            <button onClick = {() => {setContadorSecundario (contadorSecundario + 1) }} > Contador Secundario +1 = {contadorSecundario}</button>
        </div>
    )
}