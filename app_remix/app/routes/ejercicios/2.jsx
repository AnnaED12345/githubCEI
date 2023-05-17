/* Ejercicio 2: Cambiador de color de fondo
Crea un componente que cambie el color de fondo de la página cada vez que se haga clic en un
botón. Usa useState para almacenar y actualizar el color actual. Puedes usar una array de colores y
seleccionar un color al azar cuando se haga clic en el botón. */

import { useState } from "react";

export default function ColorFondo () {
    const style = {
        backgroundColor : "red",
    };

    const colores = ["red", "green", "yellow", "purple"]; //colores disponibles
    const randomColor = (colorArray) => {
        //math.floor redondea //math.random 
        const randomIndex = Math.floor(Math.random() * colores.length); //en una varible almacenamos un indice random ded colores 
        return colorArray[randomIndex]; //devuelve un array de colores que hace refenrencia a la función que establecemos para sacar un color random 
    }

    let [colorActual, setColorActual] = useState ("red");

    return <div>
            <h1 style={style} >Ejericio 1</h1>
            <button onClick = {() => setColorActual (colorActual = "green")}>Haz click aquí para cambiar el color</button>
        </div>
}