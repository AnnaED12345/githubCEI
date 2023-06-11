import { useEffect, useState } from "react"

export default function EjercicioCookie () {
    const [cookies, setCookies] = useState([])

    useEffect(() => {
       const arrayCookies = document.cookie.split("; ");
       setCookies(arrayCookies);
    }, []) 

    return (
    <div>
        <h1>Ejercicios cookies</h1>
        <ol>
            {cookies.map(cookie => <li key={cookie}> {cookie}</li>)}
        </ol>
    </div>
    )
}