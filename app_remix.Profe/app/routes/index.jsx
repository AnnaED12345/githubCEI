import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-red-700">
        Bienvenid@ a Remix
      </h2>
      <ul>
        <li className="">
          <a href="/notas">Ir a /notas</a>
        </li>
        <li>
          <Link to="/notas">Ir a /notas</Link>
        </li>
        <li>
          <Link to="/use-effect">Ir a /use-effect</Link>
        </li>
        <li>
          <Link to="/ejercicios/3">Ir a /ejercicios/3</Link>
        </li>
      </ul>
    </div>
  );
}
