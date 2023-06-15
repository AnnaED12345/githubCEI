import { useRef, useState } from "react";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch("/login", {
          method: "POST",
          body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status === 200) {
              res.json().then(({ id }) => {
                window.location.href = `/app-tareas/${id}`;
              });
            } else setError("Usuario o contraseña incorrectos.");
          })
          .catch((err) => {
            setError(err);
          });
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          ref={usernameRef}
          className="border"
          id="username"
          name="username"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="current-password">Password</label>
        <input
          className="border"
          ref={passwordRef}
          id="current-password"
          name="password"
          type="password"
          required
        />
      </div>
      <div>
        <button type="submit">Identificarse</button>
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
