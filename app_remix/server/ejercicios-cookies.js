/* Ejercicio 1: Creación de cookies
Crea una aplicación Express.js sencilla y usa el método res.cookie para configurar una cookie con un
nombre y valor de tu elección. */

//Dentro del servidor: /usuarios.js

app.get("/users", (req, res) => {

    res.cookie("ejercicio 1", 1) //ya que no indicamos el tiempo de expiración, aquí se trata de una cookie de sesión --> se elimina cuando el usuario cierra la sesion del navegador

    prisma.usuario.findMany({
        include: {
            tareas:false
        }
    }).then(usuarios => {
    res.send(usuarios);
    })
});

/* Ejercicio 2: Lectura de cookies
En la misma aplicación, añade una ruta en el frontend que recupere y muestre en pantalla una lista de
todas las cookies que se han establecido.
 */
//Realizamos la lectura en una ruta aparte en: /ejercicios-cookies/index.jsx

app.get("/users", (req, res) => {

    res.cookie("ejercicio-lectura", 2) //hacemos lo mismo creando una nueva cookie

    prisma.usuario.findMany({
        include: {
            tareas:false
        }
    }).then(usuarios => {
    res.send(usuarios);
    })
});


/* Ejercicio 3: Configuración de opciones de cookies
Modifica la creación de la cookie para que se le asigne la opción maxAge. Comprueba en el navegador
que funciona correctamente. */

app.get("/users", (req, res) => {

    res.cookie("ejercicio-lectura", 2, { maxAge: 60 * 1000}) //se mide en segundos pero el middleware que hemos importados de las cookies nos pide que lo pasemos en milisegundo y por ello * 1000

    prisma.usuario.findMany({
        include: {
            tareas:false
        }
    }).then(usuarios => {
    res.send(usuarios);
    })
});


/* Ejercicio 4: Borrado de cookies
Añade una ruta que borre una cookie específica utilizando el método res.clearCookie. */

app.get("/users", (req, res) => {

    /* res.cookie("ejercicio", 3, { maxAge: 3600 * 1000}) */ //creamos una cookie
    res.clearCookie("ejercicio"); //posteriormente la borramos --> esto hará un fetch con una cookie "caducada"

    prisma.usuario.findMany({
        include: {
            tareas:false
        }
    }).then(usuarios => {
    res.send(usuarios);
    })
});
