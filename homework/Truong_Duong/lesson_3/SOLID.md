# SOLID

In general, SOLID are principles that help developers write code easier and cleaner, make it easy to maintain and modify when the scale of the application getting bigger and more complex.

## S - Single responsibility principle

> Each class should focus on one reponsibility

Bad example:

```php
class Book {
  protected $Author;

  public getAuthor($Author) {
    return $this->Author;
  }

  public function formatJson() {
    return json_encode($this->getAuthor());
  }
}
```

Here is some problems with the current code:

- Class `Book` is doing mulitple task for now, it return the Author information and display JSON format
- What if we want to display in another format, not just JSON ? We have to write more code to Book class or modify the existing function => Things get complicated when we also want to have these type of formats for another class

Here is a suggestion to make it better:

```php
class Book {
  protected $Author;
  public getAuthor($Author){
    return $this->Author;
  }
}

class JsonBookForm {
    public function format(Book $Author) {
        return json_encode($Author->getAuthor());
    }
}
```

## O - Open/closed principle

> Open for extension but close for modification

In general, this principle saying that we should design our program so that whenever we add a new function, we do it by adding new code without modify the existing one too much.

Bad example:

```php
class Triangle{
  public $width;
  public $height;
}

class Board {
  public $triangles= [];
  public function calculateArea() {
    $area = 0;
    foreach ($this->triangles as $triangle) {
      $area += $triangle->width * $triangle->height* 1/2;
    }
  }
}
```

Comments: This code block is fine until now, but when it come to calculate area, we should make it able to calculate any shape, not just triangle in this case. We can use the polymorphism characteristic of OOP to make it better.

```php
interface Shape {
   public function area();
}

class Triangle implements Shape {
  public function area() {
    return $this->width * $this->height *1/2;
  }
}
class Circle implements Shape {
  public function area() {
    return $this->radius * $this->radius * pi();
  }
}

class Board {
  public $shapes;

  public function calculateArea() {
    $area = 0;
    foreach ($this->shapes as $shape) {
      $area+= $shape->area();
    }
    return $area;
  }
}
```

If we want to add a feature that allow to calculate area of a Square, we just need to define a new `Square` class that implemnt its own `area` function.

## L - Liskov substitution principle

> a superclass should be replaceable with objects of its subclasses without breaking the application.

Example:

```java
class Rectangle {
    public void setWidth(int width) {
        this.width = width;
    };
    public void setHeight(int height) {
        this.height = height;
    };
    public void area() {return height * width;}
}

class Square extends Rectangle {
    public void setWidth(int width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    public void setHeight(int height) {
        super.setWidth(height);
        super.setHeight(height);
    }
}
```

And we have this assert function

```java
    void test(Rectangle rec) {
        rec.setWidth(5);
        rec.setHeight(4);
        assert(rec.area() == 20);
    }
```

This code block working fine, but the parent class `Rectangle` can not be substituted with the child class `Square`, if we pass a Square object to the test function, the area() will be `16`, and the the assertion false.

## I - Interface segregation principle

> Instead of using a big interface, split it into multiple small interface with its own purpose

This principle is pretty easy to understand. Imagin that we have 1 big interface with over 100 methods. Implement it will be arduous, and sometime not necessary since a class may not need that function. When we split it into smaller interfaces, contain relevant functions, it will be easier for us to implement and manage our interfaces.

## D - Dependency inversion principle

> High-level modules should not depend on low-level modules; 
> Both should depend on abstractions. 
> Abstractions should not depend on details. Details should depend upon abstractions.

Bad example:

```php
class Getuserlists {
    private $dbConn;

    public function __construct(MySQLConn, $dbConn) {
        $this->dbConn= $dbConn;
    }
}
```

Class `Getuserlists` is higher level module and `MySQLConn` is lower-level module, it infringe the `Dependency inversion principle`, what if we want to use different database not just MySQL. Instead we should define a new interface (abstraction) and we should depend on this abstraction.

```php
interface DbConnectionInterface {
    public function connect();
} 

class MySqlConn implements DbConnectionInterface {
    public function connect() {}
}

class Getuserlists {
    private $dbConn;
    public function __construct(DbConnectionInterface $dbConn) {
        $this->dbConn= $dbConn;
    }
}
```

If we want to connect with a different database, we just need to define a new class that implement `DbConnectionInterface`, class `Getuserlists` can stay intact.

## Reference

- [SOLID - Toidicodedao](https://toidicodedao.com/2015/03/24/solid-la-gi-ap-dung-cac-nguyen-ly-solid-de-tro-thanh-lap-trinh-vien-code-cung/)
- [Liskow substitution principle](https://blog.knoldus.com/what-is-liskov-substitution-principle-lsp-with-real-world-examples/#:~:text=Simply%20put%2C%20the%20Liskov%20Substitution,the%20objects%20of%20our%20superclass.)
- I documented this content before, gather the information from different sources and I don't remember exactly all the sources.