import { useEffect, useLayoutEffect, useState } from "react";

export default function Ejercicio1() {
  const [contador, setContador] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (isLoading) return;

    document.querySelector("h1").textContent = `Contador: ${contador}`;
  }, [contador, isLoading]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
    </div>
  );
}
