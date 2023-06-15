import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { LangContext, useLangCookie } from "./hooks/useLangCookie";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const [lang, setLang] = useLangCookie();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-center mt-4">
        <LangContext.Provider value={lang}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </LangContext.Provider>
        <select
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
          onInput={(event) => setLang(event.target.value)}
          value={lang}
        >
          <option value="es">{lang === "es" ? "Español" : "Spanish"}</option>
          <option value="en">{lang === "es" ? "Inglés" : "English"}</option>
        </select>
      </body>
    </html>
  );
}
