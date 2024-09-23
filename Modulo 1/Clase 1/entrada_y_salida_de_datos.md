# ENTRADA Y SALIDA DE DATOS

***¿Cómo hacemos para introducir un dato por el teclado y que nuestro programa lo entienda?, ¿Cómo hacemos para que nuestro programa nos muestre un dato y nosotros lo entendamos?***. ¿Recuerdas nuestra clase introductoria donde explicamos lo que son los dispositivos de entrada y salida de cualquier dispositivo? Bueno, pues estaremos usando estos dispositivos para poder comunicarnos con el sistema y nuestro programa. Especificamente mouse para hacer clicks eventualmente, teclado para introducir datos y pantalla para poder ver los resultados de nuestros programas.

## SALIDA DE DATOS

Es decir, lo que nos muestra el programa.

#### PYTHON

En Python, la función principal para mostrar datos en la consola es print().

```python
print("Hola, Mundo!")
```

Usando concatenación (Unión de datos como cadenas y variables)

```python
nombre = "Juan"
print("Hola, " + nombre + "!")
```

Usando concatenación con f-strings

```python
edad = 25
print(f"Tengo {edad} años")
```
Usando format

```python
nombre = "Ana"
print("Hola, {}!".format(nombre))
```

Usando separación por comas

```python
nombre = "Carlos"
print("Hola,", nombre, "!")
```


#### JAVASCRIPT

En JavaScript, usamos principalmente console.log() para imprimir mensajes en la consola del navegador o del entorno de ejecución.

```javascript
console.log("Hola, Mundo!");
```

console.warn(): Muestra un mensaje de advertencia en la consola.

```javascript
console.warn("Este es un aviso.");
```

console.error(): Muestra un mensaje de error.

```javascript
console.error("¡Error en el código!");
```

alert(): Muestra un cuadro de diálogo emergente en el navegador.

```javascript
alert("Bienvenido al sitio web");
```

Concatenación de datos

```javascript
let nombre = "Juan";
console.log("Hola, " + nombre + "!");
```

Usando template literals:

```javascript
let edad = 30;
console.log(`Tengo ${edad} años`);
```

Separado por comas

```javascript
let nombre = "Ana";
console.log("Hola,", nombre, "!");
```

## ENTRADA DE DATOS

Es decir, lo que yo como usuario le ingreso al programa.

#### PYTHON

Para recibir datos del usuario en Python, usamos la función input().

```python
nombre = input("¿Cuál es tu nombre? ")
print("Hola, " + nombre + "!")
```
***Nota***: input() siempre devuelve una cadena (string). Si necesitas un número, debes convertirlo:

```python
edad = int(input("¿Cuántos años tienes? "))
print(f"Tienes {edad} años.")
```

#### JAVASCRIPT

Javascript si es ejecutado en el navegador, usa la función ***prompt()*** de lo contrario, javascript recibe los datos del usuario por medio de html y CSS pero eso lo veremos en módulos próximos.

```javascript
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre + "!");
```

***Nota***: Al igual que input() en Python, prompt() siempre devuelve una cadena. Si necesitas un número, puedes convertirlo usando parseInt() o parseFloat().

```javascript
let edad = parseInt(prompt("¿Cuántos años tienes?"));
console.log(`Tienes ${edad} años.`);
```
