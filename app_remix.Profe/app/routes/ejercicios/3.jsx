import { useEffect, useState } from "react";

export default function Ejercicio3() {
  const [contador, setContador] = useState(0);
  const [primerRenderCompletado, setPrimerRenderCompletado] = useState(false);

  useEffect(() => {
    if (!primerRenderCompletado) {
      setPrimerRenderCompletado(true);
    }
  });

  return (
    <div>
      <h1>Ejercicio 3</h1>
      <p>Fase: {primerRenderCompletado ? "rerender" : "mount"}</p>
      <Contador valor={contador} />
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

function Contador({ valor }) {
  return <div>{valor}</div>;
}
