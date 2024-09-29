# PRACTICA SQL DESDE CONSOLA SQL

En esta sesión practicaremos los comandos básicos vistos hasta ahora para realizar la siguiente actividad:

## DESDE CONSOLA SQL

1- Crear una base de datos llamada ***transporte***

```sql
CREATE DATABASE transporte;
```

2- Conectarse desde la consola a dicha base de datos

```shell
\c transporte
```

3- Crear una tabla llamada ***auto***

```sql
CREATE TABLE auto ( id serial NOT NULL,
                    modelo character varying,
                    capacidad integer,
                    CONSTRAINT tren_pkey PRIMARY KEY (id) );
```

4- Ver la tabla creada

```shell
\d auto
```

5- Ver el id creado con la asociación ***tren_id_seq***

```shell
\d tren_id_seq
```

6- Insertar 10 datos a la tabla desde la consola

```sql
INSERT INTO auto( modelo, capacidad ) VALUES (‘Volvo 1’, 100);
```

7-  Listar todos los elementos de la tabla auto

```sql
SELECT * FROM auto;
```

8- Modificar el modelo del elemento con id = 1

```sql
UPDATE auto SET modelo = 'Honda 0726' Where id = 1;
```

9-  Listar todos los elementos de la tabla auto nuevamente para ver el cambio

```sql
SELECT * FROM auto;
```

10-  Eliminar el elemento con id = 5

```sql
DELETE FROM auto WHERE id = 5;
```

11-  Listar todos los elementos de la tabla auto nuevamente para ver el cambio

```sql
SELECT * FROM auto;
```
