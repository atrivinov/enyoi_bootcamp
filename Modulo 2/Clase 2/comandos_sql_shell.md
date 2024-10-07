## COMANDOS SQL SHELL

- ENTRAR A LA CONSOLA DE POSTGRES ***psql -U postgres -W***
- VER LOS COMANDOS \ DE POSTGRES ***\?***
- LISTAR TODAS LAS BASES DE DATOS ***\l***
- VER LAS TABLAS DE UNA BASE DE DATOS **\dt**
- CAMBIAR A OTRA BD ***\c nombre_BD***
- DESCRIBIR UNA TABLA ***\d nombre_tabla***
- VER TODOS LOS COMANDOS SQL ***\h***
- VER COMO SE EJECTUA UN COMANDO SQL ***\h nombre_de_la_funcion***
- CANCELAR TODO LO QUE HAY EN PANTALLA ***Ctrl + C***
- VER LA VERSION DE POSTGRES INSTALADA, IMPORTANTE PONER EL ';' ***SELECT version();***
- VOLVER A EJECUTAR LA FUNCION REALIADA ANTERIORMENTE ***\g***
- INICIALIZAR EL CONTADOR DE TIEMPO PARA QUE LA CONSOLA TE DIGA EN CADA EJECUCION ¿CUANTO DEMORO EN EJECUTAR ESA FUNCION? ***\timing***
- LIMPIAR PANTALLA DE LA CONSOLA PSQL ***Ctrl + L***

## SENTENCIAS SQL

### CREAR UNA BASE DE DATOS

```sql

```

### CREAR UNA TABLA

```sql
CREATE TABLE empleados (
    id_empleado INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    cargo VARCHAR(50)
);
```

### INSERTAR DATOS A UNA TABLA

```sql
INSERT INTO empleados (id_empleado, nombre, edad, cargo)
VALUES (1, 'Ana Pérez', 28, 'Desarrolladora');
```

la sala de abordaje
```sql

```

```sql

```

```sql

```

```sql

```

```sql

```