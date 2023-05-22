/* Ejercicio 2: Cambiador de color de fondo
Crea un componente que cambie el color de fondo de la página cada vez que se haga clic en un
botón. Usa useState para almacenar y actualizar el color actual. Puedes usar una array de colores y
seleccionar un color al azar cuando se haga clic en el botón. */



        //REPASAR: 
/* 
import { useState } from "react";

export default function ColorFondo () {
    const colores = ["red", "green", "yellow", "purple"]; //colores disponibles
    const [colorActual, setColorActual] = useState (colores[0]);

    const style = {
        backgroundColor : colorActual,
    }; */


    /* const randomColor = (colorArray) => {
        //math.floor redondea //math.random 
        const randomIndex = Math.floor(Math.random() * colores.length); //en una varible almacenamos un indice random ded colores 
        return colorArray[randomIndex]; //devuelve un array de colores que hace refenrencia a la función que establecemos para sacar un color random 
    } */

    

  /*   return <div>
            <h1 style={style} >Ejericio 2</h1>
            <button onClick = {() => { 
            const nuevoColor = Math.floor(Math.random() * colores.lentgh () 
            )}> Haz click aquí para cambiar el color</button>
        </div>
    }
 */



    //SOLUCIÓN

import { useState } from "react";

export default function Ejercicio2 () {
    const colores = ["red", "green", "yellow", "purple"]; //array de colores disponibles
    const [colorActual, setColorActual] = useState (colores[0]); //usamos useState para almacenar el color incial
    
    const style = { //guardamos en una variable el estilo que le queramos dar
        backgroundColor: colorActual //queremos que el backgroundcolor sea el color actual
    };
    
    return (
        <div>
            <h1 style={style}>Ejercicio 2</h1> {/*  aplicamos el style */}
            <button onClick = {() => {
                const randomColor = Math.floor(Math.random() * colores.length); //función para sacar un color random del array
                const nuevoColor = colores[randomColor] //guardamos en una variable la función randomColor aplicada a colores
                setColorActual(nuevoColor); //pasamos el nuevo valor para actualizar el componente
            }}>Cambiar color</button>
        </div>
    );
}
