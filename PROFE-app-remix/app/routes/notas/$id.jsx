import { useParams } from "@remix-run/react";

export default function NotasId() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h1>/notas/{id}</h1>
      <p>Estás leyendo la nota {id}</p>
    </div>
  );
}
