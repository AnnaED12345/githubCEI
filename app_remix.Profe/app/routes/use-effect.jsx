import { useEffect, useState } from "react";

export default function UseEffect() {
  const [contador, setContador] = useState(0);
  const [contadorSecundario, setContadorSecundario] = useState(100);

  useEffect(() => {
    console.log(document.querySelector("h1"));
    console.log("Ejecutando useEffect, []");
  }, []);

  return (
    <div>
      <h1>Probando useEffect</h1>
      <button onClick={() => setContador(contador + 1)}>
        Contador {contador}+1
      </button>
      <button onClick={() => setContadorSecundario(contadorSecundario + 1)}>
        contadorSecundario {contadorSecundario}+1
      </button>
    </div>
  );
}
