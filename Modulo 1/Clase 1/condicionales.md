# CONDICIONALES

| Concepto                   | Python                                        | JavaScript                                  | Descripción                                                                                          |
|----------------------------|-----------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| **Condicional simple**      | `if condition:`                              | `if (condition) { }`                        | Evalúa una condición y ejecuta el bloque de código si la condición es verdadera (True/true).          |
| **Condicional con else**    | `if condition: ... else:`                    | `if (condition) { } else { }`               | Si la condición no es verdadera, ejecuta el bloque `else`.                                            |
| **Condicional con elif**    | `if condition: ... elif condition: ... else:` | `if (condition) { } else if (condition) { }`| En Python se usa `elif` para evaluar varias condiciones, en JavaScript es `else if`.                  |
| **Operador ternario**       | `value_if_true if condition else value_if_false`| `condition ? value_if_true : value_if_false`| Operador condicional en una sola línea que evalúa una expresión y devuelve un valor según el resultado.|
| **Operador lógico AND**     | `if condition1 and condition2:`               | `if (condition1 && condition2) { }`         | Verifica si ambas condiciones son verdaderas.                                                         |
| **Operador lógico OR**      | `if condition1 or condition2:`                | `if (condition1 || condition2) { }`         | Verifica si al menos una de las condiciones es verdadera.                                             |
| **Operador NOT**            | `if not condition:`                           | `if (!condition) { }`                       | Invierte el valor de la condición. Si es `False/false`, la convierte en `True/true`, y viceversa.      |
| **Comparación de igualdad** | `if x == y:`                                  | `if (x == y) { }`                           | Verifica si dos valores son iguales.                                                                 |
| **Comparación estricta**    | *No existe*                                   | `if (x === y) { }`                          | En JavaScript, verifica si dos valores son estrictamente iguales en valor y tipo.                     |
| **Switch (Solo JS)**        | *No existe*                                   | `switch(expression) { case ... }`           | Evalúa una expresión y ejecuta el caso coincidente en JavaScript. No disponible en Python.            |
 ---

## EJEMPLOS

#### PYTHON

```python
if edad >= 18:
    print("Eres mayor de edad")
```

```python
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

```python
if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres niño")
```

```python
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)
```

#### JAVASCRIPT

```javascript
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

```javascript
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

```javascript
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres niño");
}
```

```javascript
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```

```javascript
let dia = 3;
switch(dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}
```
