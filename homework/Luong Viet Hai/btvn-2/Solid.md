#1 Solid Principles

#Definition

The SOLID principles is 5 principles of Object-Oriented class design.

This is rule to set developer follow and get the best design data structure solution.

5 principles is 

_ Single responsibility

_ Open - closed

_ Liskov segregation

_ Interface Segregation

_ Dependency inversion

###1 Single responsibility Principle

The Single Responsibility Principle states that a 
class should do one thing and therefore it should
have only a single reason to change.

That mean if you have a class A, for example, that class have do just 1 thing, no more nor less.
If we want to change logic in this class, we have just 1 reason. 

###2 Open-Closed Principle
The Open-Closed Principle requires that classes should
be open for extension and closed to modification.

That mean if you have a new logic, we have to easy to write as a new class, but it's very hard to modified old class.

###3 Liskov Substitution Principle

The Liskov Substitution Principle states that subclasses 
should be substitutable for their base classes.

That mean, if you have class B is a sub-class of class A,
and some logic need class A to handle logic,
we should be able to pass an object of B in this logic without any error.

###4 Interface Segregation Principle

Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces.

That mean all logic we have, should be separated, and the class not need to write logic that they do not handle

###5 Dependency Inversion Principle

The Dependency Inversion principle states that our classes should
depend upon interfaces or abstract classes instead of concrete
classes and functions.


This mean our class should not depend on what specific,
it's should depend on what abstract

#Example
It's hard to explain as text so 
please look at SolidExample.php for more detail of it.