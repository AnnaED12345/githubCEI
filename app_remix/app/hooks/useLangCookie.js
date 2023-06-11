import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();


export function useLangCookie(){

    const [lang, _setLang] = useState("es") //Cuando usamos _ significa que es interno. Es decir, fuera de su ambito (es decir, la función), nadie puede usarlo

    const expireDate = new Date(); //Recogemos la fecha actual
    expireDate.setFullYear(expireDate.getFullYear() + 1); //le decimos que al año de la fecha actual se le sume 1 (de esta manera la cookie va a caducar en 1 año)

    function setLang (langChoosed) {
        document.cookie = `lang=${langChoosed}; expires=${expireDate.toUTCString()}; path=/ `;
        _setLang(langChoosed)
    }

    useEffect(() => {
        const arrayCookies = document.cookie.split("; ");
        const langCookie = arrayCookies.find((cookie) => cookie.startsWith('lang') );
        if(!langCookie) return;

        const previousSelectedLang = langCookie.split("=")[1]; //explicado sesion 36

        if (previousSelectedLang){ //si se ha seleccionado un idioma
            _setLang(previousSelectedLang); //actualizame el idioma al idioma seleccionado
        }
    }, []);

    return [lang, setLang]; //devolvemos el idioma seleccionado
}