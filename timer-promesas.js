/* TIMER
PROMESAS
*/



/* TIMER
Ejercicio 1: Crea una función llamada simpleTimer que recibe un número de 
segundos como argumento. La función debe imprimir en consola "Tiempo 
cumplido" después de esperar los segundos indicados.
*/

/*function simpleTimer (segundos){
    setTimeout(() => {
        console.log("Tiempo clumplido");
    }, segundos * 1000)
}

simpleTimer(3);*/


/* TIMER
Ejercicio 2: Crea una función llamada stopwatch que recibe un número 
duration en segundos. La función debe imprimir en consola un contador que 
va desde 0 hasta duration.
*/

/*function stopwatch (duration){
    let contador = 0;
    console.log(contador);

    const callback = () => {
        console.log(contador);
       

        if (contador === duration) {
            clearInterval(intervalID);
        }

        contador++;
    };

    const intervalID = setInterval(callback, 1000);
}

stopwatch(10); */

/* TIMER
Ejercicio 3: Crea una función llamada messageInterval que recibe un array 
de strings messages y un número interval en milisegundos. La función debe 
imprimir cada mensaje en consola con un intervalo de tiempo igual a 
interval entre cada mensaje.
*/

/*function messageInterval (messages, interval){
    let puntero = 0;

    const intervalID = setInterval(() => {
        if (puntero >= messages.length) {
            clearInterval (intervalID);
        }

        else {console.log(messages[puntero]);
        puntero++
        }
    }, interval);
}

console.log(["unos", "dos", "tres"], 2000);*/



/* TIMER
Ejercicio 4: Crea una función llamada progressiveDelay que recibe un array de strings 
messages. La función debe imprimir cada mensaje en consola con un retraso progresivo, 
es decir, el primer mensaje se imprime después de 1 segundo, el segundo mensaje después 
de 2 segundos, el tercer mensaje después de 3 segundos y así sucesivamente. 
*/

/*function progressiveDelay (messages) {
    let retraso = 0;

    for (let i = 0; i < messages.length; i++) {
        retraso += (i + 1) * 1000;

        setTimeout(() => {
            console.log(messages[i]);
        }, retraso);
    }
}

progressiveDelay(["hola", "estoy", "esperando"]);


/* TIMER
Ejercicio 5: Crea una función llamada textAnimation que recibe un string text y un 
número speed en milisegundos. La función debe imprimir en consola el texto letra por 
letra, con un intervalo de tiempo igual a speed entre cada letra.
*/

function textAnimation(text, speed) {
    let puntero = 0;

    const intervaloID = setInterval(() => {
        const letra = text[puntero];
        console.log(letra);
        puntero++;

        if (puntero === text.length){
            clearInterval(intervaloID);
        }
    }, speed );
}

textAnimation("hola", 1000);


/* PROMESAS
Ejercicio 1: Crea una función que retorne una promesa que se resuelva después de un 
tiempo aleatorio (entre 1 y 5 segundos). La promesa debe resolver un mensaje que 
indique cuánto tiempo tardó en resolverse. Luego, llama a la función y gestiona la 
promesa resuelta para mostrar el mensaje en la consola.
*/
/*
const promise = nuevaPromesa ((resolve, reject) => {
    setTimeout (() => {
        const segundos = Math.ceil(Math.random() * 5); //con Math.ceil redondeamos hacia arriba

        if (segundos === 5) {
            reject()
        } else {
            resolve("Ha tardado ${segundos}");
        }
    },);
})
*/
/*function completarAleatoriamente() {
    const promise = new Promise ((resolve, reject) => {
        const tiempoEspera = Math.ceil(Math.random() * 5); 

        function callback() {
            resolve("Ha tardado, " + tiempoEspera + " ,segundos");
        }
        setTimeout(callback, tiempoEspera * 1000);
    });

    return promise;
}

const promesa = completarAleatoriamente();

promesa.then((resultado) => {
    console.log(resultado);
});*/



/* PROMESAS
Ejercicio 2: Crea una función que reciba un número entero 'n' y retorne una promesa 
que se resuelva al cuadrado de 'n' si 'n' es par, y se rechace con un mensaje de 
error si 'n' es impar. Utiliza la función con un número par e impar, y maneja la 
promesa resuelta y rechazada en cada caso.
*/

/*function numero (n) {
    console.log(n);
    const promesa2 = new Promise ((resolve, reject) => {
        if (n % 2 === 0) {
            resolve(n ** 2);
        }
        else {
            reject("Error");
        }
    } );

    return promesa2;
}
const funciona = numero(4); 
funciona.then((result) => {
    console.log(result);
}).catch ((error) => {
    console.log(error);
})


/* ASYNC / AWAIT
Ejercicio 1: Crea una función async llamada getUserData que utilice la función 
fetchData para obtener los datos del usuario y mostrarlos en la consola. 
*/

/*function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John Doe', age: 25 });
        }, 1000);
    });
}

/* FUNCIÓN SIN ASYNC:
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe', age: 25 });
    }, 1000);
  });
} 
*/

/*async function getUserData () {
    const result = await fetchData();
    console.log(result);
}

getUserData();


/* ASYNC / AWAIT
Ejercicio 2: Crea una función llamada sleep que reciba un argumento ms 
(milisegundos) y retorne una promesa que se resuelva después de pasar el tiempo 
especificado en ms. Luego, crea una función async llamada delayedMessage que 
muestre un mensaje en la consola, espere 2 segundos usando la función sleep y, 
finalmente, muestre otro mensaje.
*/
/*
    1. Crear función "sleep"
    2. Añadir parámetro "ms"
    3. Retornar promesa
    4. Esperar "ms"
    4. Resolver promesa
    5. Async function delayedMessage
    6.1. Imprimir mensaje "Estoy esperando"
    6.2. sleep(2000);
    6.3. Imprimir mensaje "La espera ha acabado"
*/

/*function sleep (ms) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });

    return promesa; 
}

async function delayedMessage () {
     console.log("Estoy esperando...");
     await sleep(2000);
     console.log("La espera ha acabado!");
}

delayedMessage();

/* /* ASYNC / AWAIT
Ejercicio 3: Dada la siguiente función que devuelve una promesa que puede ser 
rechazada con una probabilidad del 50%: 
Crea una función async llamada tryOperation que intente la operación incierta 
utilizando uncertainOperation y muestre el resultado en la consola. Si la 
operación falla, maneja el error y muestra un mensaje de error en la consola.   
*/

/*function uncertainOperation() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    Math.random() > 0.5 ? resolve('Operación exitosa') : reject('Operación fallida');
    }, 1500);
    });
    }

/*async function tryOperation () {
    const promesa = uncertainOperation();
    promesa.then ((result) => {
        console.log(result);
    }) .catch ((error) => {
        console.log(error);
    });
}
*/

/*async function tryOperation() {
    try{
        const resultado = await uncertainOperation();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
} 

tryOperation();
*/


