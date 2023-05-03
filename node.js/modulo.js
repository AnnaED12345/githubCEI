const path = require('path');

function getContentType(nombreFichero) {
    const extension = path.extname(nombreFichero); 

    switch(extension) {
        case '.html':
            return 'text/html';
        case '.js':
            return 'aplication/javascript';
        case '.css' :
            return 'text/css'; 
        default: 
            return 'text/plain';
    }
}

function obtenerRutaAbsoluta(nombreFichero) {
    return path.join (__dirname, 'public', nombreFichero);
}

module.exports = {
    getContentType,
    obtenerRutaAbsoluta
}