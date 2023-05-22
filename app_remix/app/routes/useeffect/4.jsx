
import { useEffect, useState } from "react"


/* Ejercicio 4: Usar una función de limpieza
- Crea un componente que inicia un intervalo de tiempo cuando se monta y lo borra cuando se
desmonta. El intervalo de tiempo debe incrementar un contador cada segundo. Utiliza useEffect
para manejar la creación y la limpieza del intervalo. */


export default function Intervalo () {

    const [intervalo, setIntervalo] = useState();
        
    useEffect (() => {
        const interval = setInterval(() => setCount(count + 1), 1000); //almacenamos intervalo: +1 cada segundo.
        /* setIntervalo (interval);  */

        // Función de limpieza
        return () => {
        clearInterval(interval);
    };
    }, [intervalo]);

    return (
        <div>
            <h1>Ejercicio 3 useEffect</h1>
            <p>{}</p>
        </div>
    )
}