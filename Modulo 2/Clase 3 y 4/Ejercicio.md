# PRACTICA SQL DESDE CONSOLA SQL

En esta sesión practicaremos los comandos básicos vistos hasta ahora para realizar la siguiente actividad:

## PRIMERA PARTE: DESDE CONSOLA SQL

1- Crear una base de datos llamada ***transporte***

```sql
CREATE DATABASE transporte;
```

2- Conectarse desde la consola a dicha base de datos

```shell
\c transporte
```

3- Crear una tabla llamada ***tren***

```sql
CREATE TABLE tren ( id serial NOT NULL,
                    modelo character varying,
                    capacidad integer,
                    CONSTRAINT tren_pkey PRIMARY KEY (id) );
```

4- Ver la tabla creada

```shell
\d tren
```

5- Ver el id creado con la asociación ***tren_id_seq***

```shell
\d tren_id_seq
```

6- Insertar 10 datos a la tabla desde la consola

```sql
INSERT INTO tren( modelo, capacidad ) VALUES (‘Volvo 1’, 100);
```

7-  Listar todos los elementos de la tabla tren

```sql
SELECT * FROM tren;
```

8- Modificar el modelo del elemento con id = 1

```sql
UPDATE tren SET modelo = 'Honda 0726' Where id = 1;
```

9-  Listar todos los elementos de la tabla tren nuevamente para ver el cambio

```sql
SELECT * FROM tren;
```

10-  Eliminar el elemento con id = 5

```sql
DELETE FROM tren WHERE id = 5;
```

11-  Listar todos los elementos de la tabla tren nuevamente para ver el cambio

```sql
SELECT * FROM tren;
```

## SEGUNDA PARTE: PG ADMIN - INTERFAZ VISUAL

Crear las siguientes tablas, con 10 datos todas

- Estación
- Pasajero
- Tren

Y las tablas de relaciones entre cada uno de los elementos anteriores son:

- Trayecto
- Viaje


## Estación

Contiene la información de las estaciones de nuestro sistema, incluye datos de nombre con tipo de dato texto y dirección con tipo de dato texto, junto con un número de identificación único por estación.

## Tren

Almacena la información de los trenes de nuestro sistema, cada tren tiene un modelo con tipo de dato texto y una capacidad con tipo de dato numérico que representa la cantidad de personas que puede llevar ese tren, también tiene un ID único por tren.

## Trayecto

Relaciona los trenes con las estaciones, simula ser las rutas que cada uno de los trenes pueden desarrollar entre las estaciones

## Pasajero

Es la tabla que contiene la información de las personas que viajan en nuestro sistema de transporte masivo, sus columnas son nombre tipo de dato texto con el nombre completo de la persona, direccion_residencia con tipo de dato texto que indica dónde vive la persona, fecha_nacimiento tipo de dato texto y un ID único tipo de dato numérico para identificar a cada persona.

## Viaje

Relaciona Trayecto con Pasajero ilustrando la dinámica entre los viajes que realizan las personas, los cuales parten de una estación y se hacen usando un tren.

## TERCERA PARTE: PARTICIÓN DE MODELO VOLVO

Crear una partición de todos los modelos volvo que se inserten en la BD

## CUARTA PARTE: ROLES

Crear cuatro roles de la BD, uno superadmin, otro un user con permisos CRUD (Create, Read, Update, Delete), uno con permisos solo de lectura y escritura y otro con permisos de lectura, escritura y actualización de información.

## QUINTA PARTE: LLAVES FORÁNEAS

Crear las llaves foráneas de las tablas creadas previamente.

## SEXTA PARTE: JOINS

```sql
SELECT * FROM pasajero
JOIN viaje ON (viaje.id_pasajero = pasajero.id)
ORDER BY nombre ASC;
```

```sql
SELECT * FROM pasajero
LEFT JOIN viaje ON (viaje.id_pasajero = pasajero.id)
WHERE viaje.id IS null;
```

## SEPTIMA PARTE: PROCEDIMIENTOS ALMACENADOS

```sql
DO $$
BEGIN
	RAISE NOTICE 'ALGO ESTA PASANDO';
END
$$
```

```sql
PROCEDIMIENTO ALMACENADO CON UN ITERADOR
DO $$
DECLARE
	rec record;
BEGIN
	FOR rec IN SELECT * FROM pasajero LOOP
	RAISE NOTICE 'Un pasajero se llama %', rec.nombre;
	END LOOP;
END
$$
```

```sql
DO $$
DECLARE
	rec record;
	contador integer := 0;
BEGIN
	FOR rec IN SELECT * FROM pasajero LOOP
	RAISE NOTICE 'Un pasajero se llama %', rec.nombre;
	contador := contador + 1;
	END LOOP;
	RAISE NOTICE 'Conteo es %', contador;
END
$$
```

### CREATE FUNCTION

```sql
CREATE FUNCTION importantFunction()
	RETURNS void
AS $$
DECLARE
	rec record;
	contador integer := 0;
BEGIN
	FOR rec IN SELECT * FROM pasajero LOOP
	RAISE NOTICE 'Un pasajero se llama %', rec.nombre;
	contador := contador + 1;
	END LOOP;
	RAISE NOTICE 'Conteo es %', contador;
END
$$
LANGUAGE PLPGSQL;
```

### LLAMADO DE LA FUNCION

```sql
SELECT importantFunction();
```

### RETORNANDO UN VALOR INTEGER

```sql
CREATE FUNCTION importantFunction2()
	RETURNS integer
AS $$
DECLARE
	rec record;
	contador integer := 0;
BEGIN
	FOR rec IN SELECT * FROM pasajero LOOP
	RAISE NOTICE 'Un pasajero se llama %', rec.nombre;
	contador := contador + 1;
	END LOOP;
	RAISE NOTICE 'Conteo es %', contador;
	RETURN contador;
END
$$
LANGUAGE python;
```

```sql
SELECT importantFunction2();
```

## TRIGGERS

```sql
CREATE FUNCTION importantFunction3()
	RETURNS TRIGGER
AS $BODY$
DECLARE
	rec record;
	contador integer := 0;
BEGIN
	FOR rec IN SELECT * FROM pasajero LOOP
	RAISE NOTICE 'Un pasajero se llama %', rec.nombre;
	contador := contador + 1;
	END LOOP;
	INSERT INTO conteo_pasajeros (total, tiempo)
	VALUES (contador, now());
END
$BODY$
LANGUAGE PLPGSQL;
```
