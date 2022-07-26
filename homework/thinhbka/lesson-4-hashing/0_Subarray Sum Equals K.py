from __future__ import annotations
from abc import ABC,abstractmethod


class Pet(ABC):
    @abstractmethod
    def say():
        pass

class Cat(Pet):
    def say():
        print("Cat goes: meowwww")

class Dog(Pet):
    def say():
        print("Dog goes:Go go!")

class Fish(Pet):
    def say():
        print("Fish is silent")
class Chicken(Pet):
    def say():
        print("O O O")
class PetCreator:
    def __init__(self) -> None:
        self.petMaker = { "Cat":Cat,"Dog":Dog,"Fish":Fish,"Chicken":Chicken }
    
    def create(self,type):
        return self.petMaker[type]

petCreator = PetCreator()
myPet = petCreator.create("Cat")
myPet.say()
animals = ["Dog","Fish","Cat","Chicken"]
for e in animals:
    petCreator.create(e).say()

    