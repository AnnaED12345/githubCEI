import { useEffect, useState } from "react"; 

/* - Ejercicio 1: Actualizar el DOM
- Crea un componente de contador que incrementa un contador cada vez que haces clic en un
botón. Utiliza useEffect para actualizar el título del documento para mostrar el número de veces
que se ha hecho clic. */

export default function Contador () { //creamos componente contador

    const [contador, setContador] = useState(0); 

    useEffect(() => { //con useEffect actualizaremos el componente DOM h1 tras su primer render
       const h1 = document.querySelector('h1'); //seleccionamos el h1 del DOM: Ejercicio 1 useEffect
       h1.textContent = `Se ha hecho click un total de: ${contador} veces` //cambiamos su textContent
       console.log(h1);
    }, [contador]); //lo ejecutamos cada vez que se ejecute contador

    return ( 
        <div>
            <h1>Ejericio 1 useEffect</h1>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador (contador +1)}> +1 </button>
        </div>
    )
}

