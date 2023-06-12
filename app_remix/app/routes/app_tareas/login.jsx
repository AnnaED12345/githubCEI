export default function Login () {

    return (
        <div>
            <div>
            <form>
            <label htmlFor="username">Usuario:</label>
            <input 
                className="texto" 
                type="text" 
                name="username"
                required/> 
            </form>
            </div>
            
            <div>
            <form>
            <label htmlFor="password">Contraseña:</label>
                <input 
                    className="texto" 
                    type="password" 
                    name="password"
                    required/> 
            </form>
            <div>
                <button>Login</button>
            </div>
            </div>
        </div>
    )
}