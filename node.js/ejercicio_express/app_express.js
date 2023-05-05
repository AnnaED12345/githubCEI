const express = require ("express");

const app = express();

app.get ('/', (req, res) => {
    res.send("¡Hola mundo!");
});

app.post ('/productos', (req, res) => {
    res.status(201).send("¡Producto creado!");
});

app.put ('/productos', (req, res) => {
    res.status(201).send("¡Producto actualizado!");
});

app.delete ('/productos', (req, res) => {
    res.send("¡Producto eliminado!");    
});


app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
    });

