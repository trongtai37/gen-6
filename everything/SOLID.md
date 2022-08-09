# What is SOLID
> SOLID is a set of **object oriented design principles** aimed at making code more **readalbe** ,**maintainable** and **flexible**.    

# Kind of buzzy word: SOLId was designed by someone who named Uncle Bob!! LMAO

### SOLID stands for:
- **S**ingle responsibility principle
- **O**pen/Closed princible
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle


## Single Responsibility Principle
This states that **a class should have singe responsibility**, but morever **a class should only have one reason to change**.

```python
class Page:
    def __init__(self,title):
        self._title = title

    def get_title(self):
        return self._title

    def set_title(self, title):
        self._title = title

    def get_page(self):
        return [self._title]

    def format_json(self):
        return json.dumps(self.get_page()
```
to be continue.....