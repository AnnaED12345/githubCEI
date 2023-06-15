/*
    Ejercicio 1: Creación de tablas
    Crea una tabla "Personas" con los campos "ID", "Nombre", "Apellido", "Edad" y "Ciudad".
*/

CREATE TABLE Personas (
    ID INT PRIMARY KEY,
    Nombre TEXT NOT NULL,
    Apellido TEXT NOT NULL,
    Edad INT,
    Ciudad TEXT
);

/*
    Ejercicio 2: Inserción de datos
    Inserta 5 registros diferentes en la tabla "Personas" que creaste en el Ejercicio 1.
*/

INSERT INTO Personas (ID, Nombre, Apellido, Ciudad)
VALUES (1, "Juan", "Pérez", "Madrid")

INSERT INTO Personas (ID, Nombre, Apellido, Edad, Ciudad)
VALUES (2, "María", "Pérez", 24, "Valencia")

INSERT INTO Personas (ID, Nombre, Apellido, Edad, Ciudad)
VALUES 
    (3, "Carlos", "Pérez", 16, "Madrid"),
    (4, "Mar", "Pérez", 30, "Madrid"),
    (5, "Fernando", "Pérez", 35, "Madrid");

/* 
    Ejercicio 3: Consulta de datos
    Escribe una consulta SQL para seleccionar todas las personas de la tabla "Personas" que viven en la ciudad "Madrid".
*/

SELECT * FROM Personas 
WHERE Ciudad = "Madrid";

/*
    Ejercicio 4: Actualización de datos
    Actualiza la ciudad de una persona en la tabla "Personas" a "Barcelona".
*/

UPDATE Personas
SET Ciudad = "Barcelona"
WHERE ID = 5;

/*
    Ejercicio 5: Eliminación de datos
    Elimina el registro de una persona de la tabla "Personas" que tiene el ID 3.
*/

DELETE FROM Personas 
WHERE ID = 3;

/*
    Ejercicio 6: Consulta con condiciones
    Escribe una consulta SQL para seleccionar todas las personas de la tabla "Personas" que tienen más de 30 años y viven en "Barcelona".
*/

SELECT * FROM Personas
WHERE Edad > 30 AND Ciudad = "Barcelona";