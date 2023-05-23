
import { useEffect, useState } from "react"


/* Ejercicio 4: Usar una función de limpieza
- Crea un componente que inicia un intervalo de tiempo cuando se monta y lo borra cuando se
desmonta. El intervalo de tiempo debe incrementar un contador cada segundo. Utiliza useEffect
para manejar la creación y la limpieza del intervalo. */


export default function Intervalo () {

    const [intervalo, setIntervalo] = useState(0); 

    useEffect (() => {
        /* const contador = setInterval(() => setIntervalo(intervalo + 1), 1000); */ //almacenamos intervalo: +1 cada segundo.
        /* console.log("Montando"); */
       const intervalID = setInterval(() => {
            setIntervalo(intervalo + 1);
        }, 1000);

        // Función de limpieza: se ejecuta antes del useEffect y a continuación el callback
        return () => {
            console.log("Limpiando");
            clearInterval(intervalID);
        };
    }); 

    return (
        <div>
            <h1>Ejercicio 3 useEffect</h1>
            <button onClick = {() => setIntervalo (intervalo + 1)}> + 1 </button>
            <p>{intervalo}</p> 
        </div>
    )
}

