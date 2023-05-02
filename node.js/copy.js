
const fs = require ('fs');
const path = require ("path");

/* 3. Utiliza el método fs.createReadStream() para crear un stream de lectura para el archivo 'original.txt'.
 */
    
const readStream3 = fs.createReadStream("./original.txt", "utf-8");

/* 4. Utiliza el método fs.createWriteStream() para crear un stream de escritura para un nuevo archivo
llamado 'copia.txt'.
 */

const writeStream3 = fs.WriteStream("./copia.txt", "utf-8");

/* 5. Utiliza el método .pipe() para copiar el contenido de 'original.txt' a 'copia.txt'.
6. Ejecuta el archivo 'copy.js' con Node.js y verifica que se haya creado correctamente el archivo
'copia.txt' con el mismo contenido que 'original.txt'.
 */

readStream3.pipe(writeStream3);
console.log("Se ha copiado correctamente");


