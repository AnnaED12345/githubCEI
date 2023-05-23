export default function Formulario () {

    return (
        <div>
            <div>
                <h1>To-Do List</h1>
            </div>

             <form id="formulario" action="">
                <label id="cajaIngresar" htmlFor="tarea"></label>
                <input className="texto" type="text" placeholder="Agregar tarea..." name="tarea" id="tareaID" />
            
                <input id="btnAnadir" type="submit" value=" + " />
            </form>
    </div>
    )
}