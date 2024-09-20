// Ejemplo 1: Contar cuántos números hay entre 1 y 100 divisibles por 3

let contador = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        contador++;
    }
}

console.log(`La cantidad de números divisibles por 3 es: ${contador}`);


// Ejemplo 2: Determinar si un número es par o impar

let numero = 5;
if (numero % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

// Ejemplo 3: Imprimir la tabla del 5

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
