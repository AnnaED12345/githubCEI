import { useState } from "react";

export default function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    console.log(username, password)

    async function submitLogin (event) { //cuando se haga un submit // el usuario haga login:
        event.preventDefault();

        const post = await fetch(`/login`, { //realizamos un fetch a la ruta /login 
            method: "POST",
            body: JSON.stringify(
                { username: username,
                  password : password}), //body: aquí introducimos los datos que el usuario inserta
            headers: {
              "Content-Type": "application/json",
            }
        })
    }

    return (
        <div>
            <div>
            <form /* onSubmit={submitLogin} */>
            <label htmlFor="username">Usuario:</label>
            <input 
                className="texto" 
                type="text" 
                name="username"
                required
                onChange={(event) => setUsername(event.target.value)} /> 
            </form>
            </div>
            
            <div>
            <form>
            <label htmlFor="password">Contraseña:</label>
                <input 
                    className="texto" 
                    type="password" 
                    name="password"
                    required
                    onChange={(event) => setPassword(event.target.value)} /> 
            </form>
            <div>
                <button onSubmit={submitLogin} >Login</button>
            </div>
            </div>
        </div>
    )
}