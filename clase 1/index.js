//// VARIABLES

// TIPOS DE DATOS

let nombre = "Alexandra";
let nombre2 = "Alexandra";
const edad = 45;
const edad2 = 45;
var state = false;

let usuario = {
  nombre: "Alexa",
  edad: 45,
  soltera: false,
}

const frutas = ["Alexa", 45,  ,state]
/// [0,1,2,3,4........infinito]

usuario.nombre = "Francisca";

frutas[0] = "Francisca";

nombre = "Jhon"

console.log("FRUTAS CONTIENE",frutas);
console.log("USUARIO CONTIENE",usuario);


/// Operadores de comparacion

// const comparacion = edad == edad2;
// console.log(comparacion);

// const comparacion2 = edad === edad2;
// console.log(comparacion2);

// const comparacion3 = edad > edad2;
// console.log(comparacion3);

// const comparacion4 = edad < edad2;
// console.log(comparacion4);

// const comparacion5 = edad >= edad2;
// console.log(comparacion5);

// const comparacion6 = edad <= edad2;
// console.log(comparacion6);

// condicionales

const condicion = "Proleche";

// if (condicion === "Colanta") {
//   console.log("Comprar bolsa de leche")
//   if (ingrediente1 === "Tomate") {
//     console.log("Comprar")
//     if (ingrediente1 === "Tomate") {
//       console.log("Comprar")
//       if (ingrediente1 === "Tomate") {
//         console.log("Comprar")
//         if (ingrediente1 === "Tomate") {
//           console.log("Comprar")
//         }
//       }
//     }
//   }
// }

if (condicion === "Colanta") {
  console.log("Comprar bolsa de leche")
} else {
  console.log("Traer cualquiera")
}

const ingrediente1 = "Tomate"
const ingrediente2 = "Cebolla"
const ingrediente3 = "Cilantro"

if (ingrediente1 === "Tomate") {
  console.log("Comprar")
} else if (ingrediente2 === "Cebolla") {
  console.log("Comprar")
} else if (ingrediente3 === "Crema de leche") {
  console.log("Comprar")
} else {
  console.log("No Comprar")
}




const mora = false;

const diaDeHoy = 18;

const diaDePago = 5;



if (diaDeHoy > diaDePago) {
  mora = true
} else {
  mora = false
}

const mensaje = mora ? "Estas en mora" : "No estas en mora" // ternario
