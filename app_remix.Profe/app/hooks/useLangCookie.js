import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export function useLangCookie() {
  const [lang, _setLang] = useState("es");

  function setLang(langChoosed) {
    const expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1);
    document.cookie = `lang=${langChoosed}; expires=${expireDate.toUTCString()}; path=/`;
    _setLang(langChoosed);
  }

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const langCookie = cookies.find((cookie) => cookie.startsWith("lang"));
    if (!langCookie) return;

    const previousSelectedLang = langCookie.split("=")[1];
    if (previousSelectedLang) {
      _setLang(previousSelectedLang);
    }
  }, []);

  return [lang, setLang];
}
