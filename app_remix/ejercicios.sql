/* Ejercicio 1: Creación de tablas
Crea una tabla "Personas" con los campos "ID", "Nombre", "Apellido", "Edad" y "Ciudad".
 */

CREATE TABLE Personas (
    ID INT PRIMARY KEY,
    Nombre TEXT NOT NULL,
    Apellido INT NOT NULL,
    Edad INT,
    Ciudad TEXT
    );

/* Ejercicio 2: Inserción de datos
Inserta 5 registros diferentes en la tabla "Personas" que creaste en el Ejercicio 1. */

INSERT INTO Personas (ID, Nombre, Apellido, Edad, Ciudad) /* la edad y la ciudad son opcionales asi que no haría falta añadirlos. */
VALUES
    (1, 'Juan', 33, 'Valencia'),
    (2, 'Lucas', 34, 'Madrid'),
    (3, 'Andrés', 26, 'Madrid'),
    (4, 'Mario', 18, 'Valencia'),
    (5, 'David', 23, 'Valencia');

/* Ejercicio 3: Consulta de datos
Escribe una consulta SQL para seleccionar todas las personas de la tabla "Personas" que viven en la
ciudad "Madrid".
 */

SELECT * FROM Personas WHERE Ciudad = 'Madrid';

/* Ejercicio 4: Actualización de datos
Actualiza la ciudad de una persona en la tabla "Personas" a "Barcelona". */

UPDATE Personas
SET Ciudad = 'Barcelona' (datos nuevos)
WHERE ID = 1;

/* Ejercicio 5: Eliminación de datos
Elimina el registro de una persona de la tabla "Personas" que tiene el ID 3. */

DELETE FROM Personas WHERE ID = 3;

/* Ejercicio 6: Consulta con condiciones
Escribe una consulta SQL para seleccionar todas las personas de la tabla "Personas" que tienen más
de 30 años y viven en "Barcelona". */

SELECT * FROM Personas 
WHERE Edad > 30 AND Ciudad = 'Barcelona'

