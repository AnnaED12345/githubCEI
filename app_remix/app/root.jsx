import { cssBundleHref } from "@remix-run/css-bundle";

import styles from "./tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LangContext, useLangCookie } from "./hooks/useLangCookie";
import { useContext } from "react";

export const links = () => [
  /* ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []), */
  { rel: "stylesheet", href: styles }, // (tailwindcss)
 ];


export default function App() {

  const [lang, setLang] = useLangCookie();
  const langFromContext = useContext(LangContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <LangContext.Provider value={lang}>

      <select 
      onInput={(event) => setLang(event.target.value)}>
          <option value="es">{lang === "es"? 'Español' : 'Spanish'}</option>
          <option value="en">{lang === "en"? 'English' : 'Inglés'}</option>
        </select>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </LangContext.Provider>
      </body>
    </html>
  );
}
