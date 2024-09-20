### Ejemplo 1: Contar cuántos números hay entre 1 y 100 divisibles por 3

contador = 0
for i in range(1, 101):
    if i % 3 == 0:
        contador += 1
print(f"Hay {contador} números divisibles por 3")


### Ejemplo 2: Determinar si un número es par o impar

numero = int(input("Introduce un número: "))
if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")

### Ejemplo 3: Imprimir la tabla del 5

for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")
