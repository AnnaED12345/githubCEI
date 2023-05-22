

/* Ejercicio 3: Diferenciando entre mount y rerender
- Crea un componente que muestra un mensaje diferente en función de si es la primera vez que se
renderiza o si se ha actualizado. Utiliza useEffect para diferenciar entre el montaje y la actualización
del componente. */

import { useEffect, useState } from "react"


export default function RenderMensaje () {

    const [contador, setContador] = useState(0);
    const [primerRenderCompletado, setPrimerRenderCompletado] = useState(false);

    useEffect (() => {
        setTimeout (() => { //el setTimeout es únicamente para poder observar los cambios que ocurren
            if (!primerRenderCompletado) {
                setPrimerRenderCompletado(true);
            }
        }, 1000); 
    });

    return (
        <div>
            <h1>Ejercicio 3 useEffect</h1>
            <p>Fase: {primerRenderCompletado ? 'actualizado' : 'montaje'}</p>

            <p>Contador: {contador}</p>
            <button onClick={() => setContador (contador +1)}> +1 </button>
        </div>
    )
}
