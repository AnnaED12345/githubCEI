import { useParams } from "@remix-run/react"; 

export default function NotasId () {
    const params = useParams(); 
    const notaId = params.id //params.id --> .id es la url de la pagina de la que quieres recoger los parametros

    return <div>
        <h1>Estamos en /notas/{notaId}</h1>
        <p>Estás leyendo la nota {notaId}</p>
    </div>
    
}

