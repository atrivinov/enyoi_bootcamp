# Ciclos en Python y JavaScript

Los **ciclos** o **bucles** permiten repetir un bloque de código múltiples veces. Son fundamentales en programación para automatizar tareas repetitivas. Hay varios tipos de ciclos, pero los más comunes son:

1. **Ciclo `for`**: Itera sobre una secuencia de elementos.
2. **Ciclo `while`**: Repite mientras una condición sea verdadera.

## 1. Ciclo `for`

### Python

En Python, el ciclo `for` itera sobre una secuencia (como una lista, tupla, cadena o rango). No necesitas declarar el índice; en su lugar, Python itera sobre los elementos directamente.

#### Sintaxis:

```python
for variable in secuencia:
    # código a ejecutar
```

***Ejemplo 1:*** Iterar sobre una lista

```python
frutas = ["manzana", "plátano", "naranja"]
for fruta in frutas:
    print(fruta)
```

***Ejemplo 2:*** Uso de range() para un rango de números

```python
for i in range(5):  # Itera de 0 a 4
    print(i)
```

***Ejemplo 3***: Rango con pasos

```python
for i in range(0, 10, 2):  # Itera de 0 a 8 con un paso de 2
    print(i)
```

### JavaScript

En JavaScript, el ciclo for es similar al de muchos otros lenguajes y requiere tres partes: una inicialización, una condición, y un incremento o decremento.

#### Sintaxis

```javascript
for (inicialización; condición; incremento) {
    // código a ejecutar
}
```

***Ejemplo 1:*** Iterar sobre un array

```javascript
let frutas = ["manzana", "plátano", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

***Ejemplo 2:*** Usando for para un rango de números

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // Imprime números del 0 al 4
}
```

***Ejemplo 3:*** Ciclo con pasos

```javascript
for (let i = 0; i < 10; i += 2) {
    console.log(i);  // Imprime 0, 2, 4, 6, 8
}
```


## 2. Ciclo `while`

### Python

El ciclo while en Python repite un bloque de código mientras la condición sea True.

#### Sintaxis

```python
while condición:
    # código a ejecutar
```
***Ejemplo 1:*** Ciclo while básico

```python
i = 0
while i < 5:
    print(i)
    i += 1  # Incrementar i
```

***Ejemplo 2:*** Uso de break para salir del ciclo

```python
i = 0
while True:
    print(i)
    i += 1
    if i == 5:
        break  # Rompe el ciclo cuando i es 5
```

### JavaScript
El ciclo while en JavaScript es casi idéntico al de Python y ejecuta el bloque de código mientras la condición sea verdadera.

#### Sintaxis

```Javascript
while (condición) {
    // código a ejecutar
}
```

***Ejemplo 1:*** Ciclo while básico

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // Incrementar i
}
```
***Ejemplo 2:*** Uso de break para salir del ciclo

```javascript
let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i === 5) {
        break;  // Rompe el ciclo cuando i es 5
    }
}
```

## 3. Ciclo `do-while`

El ciclo do...while en JavaScript es similar a while, pero se asegura de que el bloque de código se ejecute al menos una vez antes de evaluar la condición.

#### Sintaxis

```javascript
do {
    // código a ejecutar
} while (condición);
```

***Ejemplo:***

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```


## Control de flujo en bucles

### ***[break]*** (Python y JavaScript)

La sentencia break detiene la ejecución del ciclo actual y salta fuera de él.

***Ejemplo Python***:

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

***Ejemplo Javascript***

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
```

### ***[continue]*** (Python y JavaScript)

La sentencia continue salta a la siguiente iteración del ciclo, sin ejecutar el código restante en la iteración actual.

***Ejemplo Python***:

```python
for i in range(10):
    if i % 2 == 0:
        continue  # Saltar los números pares
    print(i)
```

***Ejemplo Javascript***

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Saltar los números pares
    }
    console.log(i);
}
```
