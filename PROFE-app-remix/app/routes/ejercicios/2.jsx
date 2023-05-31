import { useEffect, useState } from "react";

export default function Ejercicio2() {
  const [contador, setContador] = useState(1);
  const [post, setPost] = useState();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${contador}`,
        {
          signal: controller.signal,
        }
      );
      const datos = await response.json();
      setPost(datos);
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [contador]);

  return (
    <div>
      <h1>Ejercicio 2</h1>
      <p>Title: {post ? post.title : "..."}</p>
      <p>Body: {post ? post.body : "..."}</p>

      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}
