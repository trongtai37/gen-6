# **SOLID Principles**

> SOLID is a mnemonic for five design principles intended to make software design more understandable, flexible and maintainable.

## 1. Single Responsibility Principle

> A class should have one reason to change.

- Every class is responsible for a single part of the functionality of the software and make that responsibility entirely encapsulated by the class.
- This principle will help reducing complexity of the code and make it easier to navigate.
- If a class does too many things, you have to change it every time something changed. It takes a risk that your change will impact to other part of class.
- If you feel that it's becoming hard to focus on specific aspects of the program one at a time, remember the single responsibility principle and check if it's time to divide some classes into parts.

## 2. Open and Close Principle

> Classes should be open for extension but closed for modification

- The main idea of this principle is to keep existing code from breaking when you implement new features.
- The class is open if you can extend it, produce a subclass and do whatever you want with it (add new methods, fields, behaviors,...).
- At the same time, the class is closed if it's 100% ready to be used by other classes, its interface is clearly defined and will not be changed in the future.
- A class can be both open (for extension) and closed (for modification) ath the same time.
- Instead of changing the code of the class directly, you can create a subclass that you want to behave differently, you will achieve your goal but also will not break any existing clients of the original class. But if you know there is a bug in the class, just go on and fix it :). A child class should not be responsible for the parents's issues.

## 3. Liskov Substitution Principle

> When extending a class, remember that you should be able to pass objects of the subclass in place of objects the parent class without breaking the client code. This means that the subclass should remain compatible with the behavior of the superclass.

- The substitution principle is a set of checks that help predict whether a subclass remains compatible with the code that was able to work with objects of the superclass, a set of formal requirements for subclasses, and specifically for their methods.

* **Parameter types in a method of a subclass should match or be more abstract than parameter types in the methods of the superclass.**

* **The return type in a method of a subclass should match or be a subtype of the return type in the method of the superclass.**

* **A method in a subclass should not throw types of exceptions which the base method is not expected to throw.**

* **A subclass should not strengthen pre-conditions.**

* **A subclass should not weaken post-conditions.**

* **Invariants of a superclass must be preserved**

* **A subclass should not change values of private fields of the superclass.**

## 4. Interface Segregation Principle

## 5. Dependency Inversion Principle
