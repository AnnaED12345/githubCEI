const {sum, validateEmail, countChars, sortNumbers, validatePassword} = require("./ejercicios")

//Crea una prueba para verificar que la función sum devuelve el resultado correcto al sumar dos números.
test ("should return the correct value for positive numbers", () => {
    const result = sum(3,7);
    expect(result).toEqual(10);
});

test ("should return the correct value for negative numbers", () => {
    const result = sum(-3,-7);
    expect(result).toEqual(-10);
});

test ("should return the correct value for positive and positive numbers", () => {
    const result = sum(-3,7);
    expect(result).toEqual(4);
});



//Crea una prueba para comprobar que la función validateEmail devuelve true cuando se le pasa un
//email válido y false cuando se le pasa uno no válido.

test ("Correo correcto", () => {
    const isValid = validateEmail("prueba@gmail.com");
    expect(isValid).toBeTruthy();
});

test ("Correo incorrecto. Falta .", () => {
    const isValid = validateEmail("prueba@gmailcom");
    expect(isValid).toBeFalsy();
});

test ("Correo incorrecto. Falta @", () => {
    const isValid = validateEmail("pruebagmail.com");
    expect(isValid).toBeFalsy();
});


//Crea una prueba para asegurarte de que la función countChars devuelve el recuento correcto de
//caracteres para diferentes cadenas de entrada.

test ("devuelve recuento correcto", () => {
    const count = countChars("hola");
    expect(count).toBe(4);
})

test ("devuelve recuento incorrecto", () => {
    const count = countChars("hola");
    expect(count).not.toBe(7);
})


// Crea una prueba para verificar que la función sortNumbers devuelve el array de números ordenado
// correctamente.

test ("Devuelve el array de numero ordenador correctamente", () => {
    const count = sortNumbers([1,2, 3, 4, 5]);
    expect(count).toEqual([1, 2, 3, 4, 5]);
})

test ("Devuelve el array de numero ordenador incorrectamente", () => {
    const count = sortNumbers([3, 2, 1, 4, 5]);
    expect(count).not.toBe([1, 2, 3, 4, 5]);
})

test ("No recibe un array", () => {
    const count = sortNumbers(3, 2, 1, 4, 5);

})

// Crea una prueba para asegurarte de que la función validatePassword devuelve true cuando se le pasa
// una contraseña segura y false cuando se le pasa una que no lo es.

test ("Contraseña segura", () => {
    const count = validatePassword("Contraseña123");
    expect(count).toBeTruthy();;
})

test ("Contraseña no segura. Tiene que ser en mayúsula", () => {
    const count = validatePassword("contraseña123");
    expect(count).not.toBeTruthy();
})

test ("Contraseña no segura. No contiene número", () => {
    const count = validatePassword("Contraseña");
    expect(count).not.toBeTruthy();
})

test ("Contraseña no segura. No contiene número", () => {
    const count = validatePassword("Contraseña");
    expect(count).toBeFalsy();
})

test ("Contraseña no segura. Debe contener al menos 8 carácteres", () => {
    const count = validatePassword("Abcd12");
    expect(count).toBeFalsy();
})

