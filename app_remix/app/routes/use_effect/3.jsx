

/* Ejercicio 3: Diferenciando entre mount y rerender
- Crea un componente que muestra un mensaje diferente en función de si es la primera vez que se
renderiza o si se ha actualizado. Utiliza useEffect para diferenciar entre el montaje y la actualización
del componente. */

import { useEffect, useState } from "react"


export default function RenderMensaje () {

    const [primerRenderCompletado, setPrimerRenderCompletado] = useState(false); //el primer render no se ha completado con establecemos su valor como false

    useEffect (() => {
        setTimeout (() => { //el setTimeout es únicamente para poder observar los cambios que ocurren
            //como el valor incial es false, dentro del hook indicamos que si el primer render no es false, el valor se actualice a tru
            //con if indicamos que la función únicamente se ejecutará SI...
            if (!primerRenderCompletado) { //...si el primer render no es false, es decir, es true
                setPrimerRenderCompletado(true); //actualizalo cambiando su valor a true
            }
        }, 1000); 
    });

    return (
        <div>
            <h1>Ejercicio 3 useEffect</h1>
            
            {/* //si es true es que el estado es true por que ya ha ocurrido el hook y ya esta actualizado
            //si es false está en estado de montaje. */}
            <h2>Fase: {primerRenderCompletado ? 'actualizado' : 'montaje'}</h2>
        </div>
    )
}
