import { useEffect, useState } from "react";

export default function EjercicioCookie() {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    const arrCookies = document.cookie.split("; ");
    setCookies(arrCookies);
  }, []);

  return (
    <div>
      <h1>Ejercicios cookies</h1>
      <ol>
        {cookies.map((cookie) => (
          <li key={cookie}>{cookie}</li>
        ))}
      </ol>
    </div>
  );
}
