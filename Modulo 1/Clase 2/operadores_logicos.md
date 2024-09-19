# Operadores Lógicos: AND, OR, NOT

Los operadores lógicos son herramientas esenciales en la programación que permiten evaluar múltiples condiciones a la vez. A continuación, se explica el comportamiento de los operadores lógicos más comunes (AND, OR, NOT) tanto en Python como en JavaScript.


## 1. Operador AND

El operador AND evalúa si todas las condiciones son verdaderas. Si alguna condición es falsa, el resultado será False (en Python) o false (en JavaScript).


##### Python

```python
# Ambos son verdaderos
a = True
b = True
resultado = a and b  # True

# Uno es falso
a = True
b = False
resultado = a and b  # False
```

##### Javascript

```javascript
// Ambos son verdaderos
let a = true;
let b = true;
let resultado = a && b;  // true

// Uno es falso
a = true;
b = false;
resultado = a && b;  // false
```
En ambos lenguajes, si el primer valor es False o false, el resultado es False o false sin evaluar las otras condiciones (corto circuito).

## 2. Operador OR

El operador OR evalúa si al menos una de las condiciones es verdadera. Si ambas son falsas, el resultado será False o false.

##### Python

```python
# Al menos una es verdadera
a = True
b = False
resultado = a or b  # True

# Ambas son falsas
a = False
b = False
resultado = a or b  # False
```

##### Javascript

```javascript
// Al menos una es verdadera
let a = true;
let b = false;
let resultado = a || b;  // true

// Ambas son falsas
a = false;
b = false;
resultado = a || b;  // false
```

En ambos lenguajes, si el primer valor es True o true, el resultado será True o true sin evaluar las demás condiciones (corto circuito).

## 3. Operador NOT

El operador NOT invierte el valor lógico. Si el valor es True, se convierte en False, y viceversa.


##### Python

```python
a = True
resultado = not a  # False
```

##### Javascript

```javascript
let a = true;
let resultado = !a;  // false
```

## 4. Operador Módulo (%)

El operador módulo (%) devuelve el resto de una división entera. Es muy útil para saber si un número es divisible por otro o para hacer operaciones con secuencias cíclicas.

### 1. Uso básico

El módulo de dos números a % b da el resto de la división de a entre b.

##### Python

```python
# Ejemplo: 10 % 3
resultado = 10 % 3  # 1, ya que 10 dividido por 3 es 3 con un resto de 1
```

##### Javascript

```javascript
// Ejemplo: 10 % 3
let resultado = 10 % 3;  // 1
```
