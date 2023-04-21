/*
API DOM
GET ELEMENT
*/

/*API DOM
Ejercicio 1: Crea una página HTML con un párrafo que tenga un ID. 
Escribe un script de JavaScript que utilice getElementById para seleccionar 
el párrafo y cambiar su contenido a "¡Hola, mundo!". 
*/

const parrafoNuevo = document.getElementById("parrafo1");
parrafoNuevo.textContent = "Hola, mundo";


/*API DOM
Ejercicio 2: Crea una página HTML con una lista no ordenada (ul) que 
contenga varios elementos de lista (li). Algunos de estos elementos deben 
tener una clase llamada "destacado". Escribe un script de JavaScript que 
utilice getElementsByClassName para seleccionar todos los elementos con la 
clase "destacado" y cambiar su estilo (por ejemplo, cambiar el color de 
fondo a amarillo).
*/

const destacadosLista = document.getElementsByClassName("destacado");

for (let i = 0; i < destacadosLista.length; i++) {
    destacadosLista[i].style = "color:red;"
}

/* API DOM
Ejercicio 3: Escribe un script de JavaScript que utilice 
getElementsByTagName para contar cuántos elementos de un tipo específico 
(por ejemplo, p, div, li) hay en la página y muestre el resultado en la 
consola.
*/

const contador = document.getElementsByTagName("li");
console.log (contador.length);

/* API DOM
Ejercicio 4: Crea una página HTML con varios elementos de diferentes tipos (por ejemplo, párrafos, 
encabezados, listas). Escribe un script de JavaScript que utilice querySelector para seleccionar un 
elemento específico y modificar sus estilos. A continuación, utiliza querySelectorAll para seleccionar 
un grupo de elementos y modificar sus estilos (por ejemplo, cambiar el tamaño de fuente o el color de 
fondo). 
*/

const unElemento = document.querySelector("form div");
unElemento.style = "background-color: yellow;"


const variosElementos = document.querySelectorAll("a");
for (let contador = 0; contador < variosElementos.length; contador++) {
    variosElementos[contador].style = "color: brown; font-weight: bold;"
}

/* ANOTACIÓN: El método querySelectorAll devuelve una lista (o un NodeList) 
de elementos que cumplen con el selector especificado, no un solo elemento. 
Por lo tanto, para aplicar el estilo a cada uno de los elementos, necesitas 
recorrer la lista usando un bucle.
*/


/* EventListener
Ejercicio de Event Listener: 
Crea una página HTML con un botón "Añadir" y un contenedor vacío (por ejemplo, un div). Escribe un
script de JavaScript que utilice createElement, appendChild y remove para realizar las siguientes
acciones:

- Cuando se haga clic en el botón "Añadir", crea un nuevo párrafo con un texto predefinido y añádelo
al contenedor vacío.
- Al hacer clic en uno de los párrafos añadidos, elimínalo del contenedor.
 */

