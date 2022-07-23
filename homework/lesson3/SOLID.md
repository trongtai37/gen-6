# Solid Principle

## Background

The Solid principle that all these concepts of clean coding, object-oriented architecture, and design patterns are some how connected and complementary to each other.

Following the SOLID acronym, they are:
- The Single Responsibility Principle
- The Open-Closed Principle
- The Liskov Substitution Principle
- The Interface Segregation Principle
- The Dependency Inversion Principle

### The Single Responsibility Principle

The Single Responsibility Principle states that a class should do one thing and therefore it should have only a single reason to change.

To state this principle more technically: Only one potential change (database logic, logging logic, etc.) in the software's specification should be able to affect the specification of the class.

This means that the entity of class should change only when we change the data model.

Following the Single Responsibility Principle is important.
- Because many different teams can work on the same project and edit the same class for different reasons, thi could lead to incompatible modules.
- It makes version control easier.
- Easier to resolve merge conflicts.

### Open-Closed Principle

The Open-Closed Principle requires that classes should be open for extension and closed to modification.

Modification means changing the code of an existing class, and extension means adding new functionality.

We should be able to add new functionality without touching the existing code for the class. This is cause whenever we modify the existing code, we are taking the risk of creating potential bugs. So we should avoid touching the tested and reliable (mostly) production code if possible.

It is usually done with the help of interfaces and abstract classes.

### Liskov Substitution Principle

The Liskov Substitution Principle states that subclasses should be substitutable for their base classes.

This means that, given that class B is a subclass of class A, we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.

This is the expected behavior, cause when we use inheritance we assume that the child class inherits everything that the superclass has. The child class extends the behavior but never narrows it down.

Therefore, when a class does not obey this principle, it leads to some nasty bugs that are hard to detect.

### Interface Segregation Principle

Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces.

The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do no need.

### Dependency Inversion Principle

The Dependency Inversion principle states that our classes should depend upon interfaces or abstract classes instead of concrete classes and functions.

These two principles are indeed related and we have applied this pattern before while we were discussing the Open-Closed Principle.

We want our classes to be open to extension, so we have reorganized our dependencies to depend on interfaces instead of concrete classes. Our PersistenceManager class depends on InvoicePersistence instead of the classes that implement that interface.

Reference source: [Solid Principle](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)