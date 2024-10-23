// Clase Padre
class Animal {
  constructor(name) { // Método constructor
    this._name = name; // Encapsulamiento (usamos _ para indicar que es una propiedad privada)
  }

  // Método de la clase
  speak() {
    return `${this._name} makes a sound.`; // método con un retorno y ${} para hacer cadenas con logica
  }

  // Getter: Profundizamos la siguiente clase sobre esto de encapsulamiento
  get name() {
    return this._name;
  }

  // Setter: Profundizamos la siguiente clase sobre esto de encapsulamiento
  set name(newName) {
    this._name = newName;
  }
}

// Herencia: la clase Dog hereda de Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Llamada al constructor de la clase base, en este caso lo hacemos con la palabra super, porque el método speak necesitará acceder a nombre
    this.breed = breed;
  }

  // Polimorfismo: sobreescribimos el método speak, speak existe en animal, pero no me sirve lo que retorna, asi que puedo sobreescribir el método y no altero la clase padre
  speak() {
    return `${this._name} barks.`;
  }
}

// Inyección de dependencias
// No es una clase que hereda de animal, pero si es una clase que necesita Animal, por ende la inyecta en su constructor
class Vet {
  constructor(animal) {
    this.animal = animal; // Inyectamos la dependencia (un Animal o derivado)
  }

  checkup() {
    return `${this.animal.name} is healthy.`;
  }
}

// Uso de las clases
const myDog = new Dog('Buddy', 'Golden Retriever'); // instancio la clase Dog creando un objeto myDog
const vet = new Vet(myDog); // Como ya tengo un objeto de clase Dog, denominado myDog, lo inyecto como dependencia al instanciar un objeto vet de la clase Vet

// Analogía: Existen muchos animales que heredan de la clase Animal, pero por ejemplo un veterinario no Hereda de animal, pero si
// revisa animales, por ende necesita que exista una instancia de animal, que pueda ser revisada, y luego se le envia por parametro, o se inyecta como dependencia
// para que el VET pueda ejecutar su labor de veterinario

console.log(myDog.speak()); // Buddy barks.
console.log(vet.checkup()); // Buddy is healthy.
