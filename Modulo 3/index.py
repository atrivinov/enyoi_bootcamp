# Clase Padre
class Animal:
    def __init__(self, name):
        self._name = name  # Encapsulamiento

    # Método genérico
    def speak(self):
        return f"{self._name} makes a sound."

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name


# Herencia: la clase Dog hereda de Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Llamada al constructor de la clase base
        self.breed = breed

    # Polimorfismo: sobreescribimos el método speak
    def speak(self):
        return f"{self._name} barks."


# Inyección de dependencias
class Vet:
    def __init__(self, animal: Animal):  # Injectamos la dependencia
        self.animal = animal

    def checkup(self):
        return f"{self.animal.name} is healthy."


# Uso de las clases
my_dog = Dog("Buddy", "Golden Retriever")
vet = Vet(my_dog)

print(my_dog.speak())  # Buddy barks.
print(vet.checkup())   # Buddy is healthy.
