# OPERADORES LÓGICOS Y DE COMPARACIÓN

| Tipo de Operador    | Operador        | Python                           | JavaScript                            | Descripción                                                                                                                                 |
|---------------------|-----------------|----------------------------------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **Comparación**      | `==`            | `a == b`                         | `a == b`                              | Evalúa si dos valores son iguales (en valor, no en tipo en JS).                                                                              |
|                     | `!=`            | `a != b`                         | `a != b`                              | Evalúa si dos valores son diferentes.                                                                                                        |
|                     | `>`             | `a > b`                          | `a > b`                               | Evalúa si el valor de la izquierda es mayor que el de la derecha.                                                                            |
|                     | `<`             | `a < b`                          | `a < b`                               | Evalúa si el valor de la izquierda es menor que el de la derecha.                                                                            |
|                     | `>=`            | `a >= b`                         | `a >= b`                              | Evalúa si el valor de la izquierda es mayor o igual que el de la derecha.                                                                   |
|                     | `<=`            | `a <= b`                         | `a <= b`                              | Evalúa si el valor de la izquierda es menor o igual que el de la derecha.                                                                   |
| **Igualdad estricta**| `===`           | *No existe*                      | `a === b`                             | Evalúa si dos valores son **estrictamente iguales** (en valor y tipo) en JavaScript.                                                         |
| **Desigualdad estricta** | `!==`       | *No existe*                      | `a !== b`                             | Evalúa si dos valores son **estrictamente diferentes** en valor o tipo en JavaScript.                                                        |
| **Lógicos**          | `and`           | `a and b`                        | `a && b`                              | Devuelve `True` si ambos operandos son verdaderos. En JS devuelve `true` si ambas expresiones son verdaderas.                                |
|                     | `or`            | `a or b`                         | `a \|\| b`                              | Devuelve `True` si alguno de los operandos es verdadero. En JS devuelve `true` si alguna expresión es verdadera.                             |
|                     | `not`           | `not a`                          | `!a`                                  | Invierte el valor de verdad. Devuelve `True` si `a` es `False` y viceversa.                                                                  |
| **Operador de módulo**| `%`            | `a % b`                          | `a % b`                               | Devuelve el **resto** de la división de `a` entre `b`.                                                                                       |
| **Asignación**       | `=`             | `a = b`                          | `a = b`                               | Asigna el valor de la derecha a la variable de la izquierda.                                                                                 |
| **Asignación con suma**| `+=`          | `a += b`                         | `a += b`                              | Suma el valor de la derecha al de la izquierda y lo asigna.                                                                                  |
| **Asignación con resta**| `-=`         | `a -= b`                         | `a -= b`                              | Resta el valor de la derecha al de la izquierda y lo asigna.                                                                                 |
| **Asignación con multiplicación**| `*=`| `a *= b`                         | `a *= b`                              | Multiplica el valor de la derecha por el de la izquierda y lo asigna.                                                                        |
| **Asignación con división**| `/=`      | `a /= b`                         | `a /= b`                              | Divide el valor de la izquierda por el de la derecha y lo asigna.                                                                            |
| **Asignación con módulo**| `%=`        | `a %= b`                         | `a %= b`                              | Realiza el módulo entre `a` y `b` y asigna el resultado.                                                                                     |


## Descripción de los Operadores

***Operadores de comparación (==, !=, >, <, >=, <=):*** Comparan dos valores.
***Operadores de igualdad estricta (===, !==):*** En JavaScript, verifican si dos valores son iguales o diferentes en valor y tipo.
***Operadores lógicos (and, or, not, &&, ||, !):*** Permiten combinar condiciones lógicas.
***Operador de módulo (%):*** Devuelve el resto de la división entre dos números.
***Operadores de asignación (=, +=, -=, *=, /=, %=):*** Usados para asignar valores a variables y realizar operaciones combinadas con la asignación.
