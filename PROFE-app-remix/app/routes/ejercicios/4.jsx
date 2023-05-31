import { useEffect, useState } from "react";

export default function Ejercicio4() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setContador((contador) => contador + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h1>Ejercicio 4</h1>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}
