/* - Ejercicio 1: Contador
Crea un componente de contador que muestre un número y dos botones: uno para incrementar el
contador y otro para disminuirlo. Usa useState para gestionar el estado del contador. */
import { useState } from "react";

export default function Contador () {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h1>Ejericio 1</h1>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador (contador +1)}> +1 </button>
            <button onClick={() => setContador (contador -1)}> -1 </button>
        </div>
    )
}

