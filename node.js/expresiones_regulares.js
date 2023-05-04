
/* sintaxis:
 let expresionRegular = new RegExp('/w+@(/w)+/./w+', 'gi');
 */


/* Expresiones Regulares

Ejercicio 1: Validación de correo electrónico
- Crea una función que valide si una cadena de texto es un correo electrónico válido utilizando
expresiones regulares.
*/

/* function isValidEmail(email) {
    const validarEmail = /\w+\.*\w+\@\w+\.[a-z]+,gi/;

    if (validarEmail.test(email)) {
        true;
    } else {
        false;
        }
}

isValidEmail("john.doe@example.com");
isValidEmail("john.doe@example"); */

// SOLUCIÓN

/* function isValidEmail(email) {

    let expresionRegular = /\w+\.*\w+\@\w+\.[a-z]+/gi;  
    let funciona = expresionRegular.test(email); 

    if (funciona === true) {
        console.log('Correcto,', email, 'es un email válido');
    } else {
        console.log('Error:', email, 'no es un email válido');
    }
};

isValidEmail('correo.electronico33@gmail.com');
isValidEmail('correo.electronico33@gmail.c3m'); */

/* Ejercicio 2: Extracción de números de una cadena
Crea una función que extraiga todos los números de una cadena de texto y los devuelva en un array. */


/* function extractNumbers(text) {
    const regex = /[\d(,|.)]+/g; //Revisar la expresion ya que recoge el punto final también
    let result = text.match(regex);
    return result;
  }
  
  console.log(extractNumbers("I have 25 cats and 123 dog.")); */


/* Ejercicio 3: Reemplazar múltiples espacios en blanco
Crea una función que reemplace múltiples espacios en blanco con un solo espacio en una cadena
de texto. */

/* unction removeExtraSpaces(text) { 
    const regex = /\s+/g;
    let resultado = text.replace(regex," ");
    return resultado;
}

console.log(removeExtraSpaces("This   is   a  test.")); */ // "This is a test."


/* Ejercicio 4: Validación de números de teléfono
Crea una función que valide si una cadena de texto es un número de teléfono válido utilizando
expresiones regulares. Considera los siguientes formatos válidos:
- +34 600 000 000
- 600 000 000
- 600000000 */

/* function isValidPhoneNumber(number) {
    const regex = /(\+\d+\s?)?(\d{9}|\d{3}\s?\d{3}\s?\d{3})/g;
    let validado = regex.test(number);

    if (validado === true){
        console.log('Correcto,', number, 'es un número válido');
    } else {
        console.log('Incorrecto,', number, 'no es un número válido');
    }
}

console.log(isValidPhoneNumber("+34 123 123 123")); // true
console.log(isValidPhoneNumber("123 123 123")); // true
console.log(isValidPhoneNumber("123.1231.23")); // false */

/* Ejercicio 5: Extracción de etiquetas HTML
Crea una función que extraiga el nombre de todas las etiquetas HTML en una cadena de texto y
devuelva un array con los nombres de las etiquetas. */

const html = "<div><p>Hello, world!</p></div>";

function extractHTMLTags(html) {
    const regex = /<\w+>/g;
    const extraerHTMLTag = html.match(regex);
    //hasta aquí extrae los tags con los corchetes -> [ '<div>', '<p>' ]
    //asi que vamos a hacer .map y una nueva expresion que recoga solo valores alfanuméricos
    //map() crea un nuevo array con los resultados de la funcion sobre cada elemento del array principal.
    return extraerHTMLTag.map((element) => element.match (/\w+/g)[0]); 
}

console.log(extractHTMLTags(html)); // ['div', 'p']