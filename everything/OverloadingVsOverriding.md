-Method Overloading is an example of Compile time polymorphism. 
In this, **more than one method of the same class shares the same method name having different signatures**
```python
class A:
    def add(self,a,b):
        return a + b
    def add(self,a,b,c):
        return a+b+c

```
or we can use:
```python
class A:
    def add(self,*args):
        s = 0
        for x in args:
            s+=x
        return s
```
- Method Overriding is an example of Runtime polymorphism
In this, the method is already provided by the base class, but the **child class re-implement this method with same name, same parameters input** 

```python
class Base:
    def say(self):
        print("Base class")

class Child(Base):
    # Method overriding
    def say(self):
        super().say() # call say() from base
        print("Child class")
```
Different between Overriding and Overloading
             Overloading                                 \t                    Overriding

1. Compile time Polymorphism                             \t               Run time Polymorphism
2. Same name but different signatures                     \t              Same name, same signatures(input,return type...)
3. No need at least two classes                             \t            Need at least two classes

