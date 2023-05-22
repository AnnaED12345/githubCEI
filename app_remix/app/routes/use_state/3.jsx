/* Ejercicio 3: Interruptor
Crea un componente que actúe como un interruptor de luz. Debe mostrar un mensaje que diga si
la luz está encendida o apagada y un botón para cambiar el estado. Usa useState para gestionar el
estado de la luz. */
import {useState} from "react";

export default function Interruptor () {

    const [encendida, setEncendida] = useState(true); //la luz está encendida por defecto

    const style = { 
        backgroundColor: encendida? "white" : "red", //aplicamos un style con un condicional, si esta encendida, será blanco, si no, negro
    };

    return (
        <div style={style}>
            <h1>Luz {encendida ? "encendida" : "apagada"}</h1> {/* //aplicamos un condicional para el texto*/}
            <button onClick={() => { setEncendida(!encendida) //usamos un operador ternario ! que significa : si no está encendida, ocurre lo siguiente
            }}>{encendida ? "Apagar" : "Encender"}</button> {/*botón: si la luz está encendida que el botón esté en Off, si está apagada, en On*/}
        </div>
    )
}