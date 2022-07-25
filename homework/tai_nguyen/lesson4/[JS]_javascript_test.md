<!-- TODO: Take this test -->

> **1. What is the output?**

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: Lydia and undefined
- B: Lydia and ReferenceError
- C: ReferenceError and 21
- D: undefined and ReferenceError

> Answer

```js
function sayHi() {
  // Hoisting
  var name;
  let age;

  console.log(name); // name = undefined
  console.log(age); // Reference error because of TDZ
  // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting?retiredLocale=vi#let_and_const_hoisting
  name = 'Lydia';
  age = 21;
}

sayHi();
```

> **2. What is the output?**

```js
// Loop 1:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// Loop 2:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: 0 1 2 and 0 1 2
- B: 0 1 2 and 3 3 3
- C: 3 3 3 and 0 1 2

> Answer: C: 3 3 3 and 0 1 2
> <br> **Loop 1:** variable `i` is declared using `var` which is function scope, in this case global scope.
> <br> `console.log(i)` will retrieve `i` from closure which is `i` on global scope.
> <br> Because `console.log(i)` is call by `setTimeout` => async task => it will be called when the loop ended and `i` = 3;

> <br> **Loop 2:** variable `i` is declared using `let` which is block scope.
> <br> `console.log(i)` will retrieve `i` from closure which is `i` on each `for`'s block scope (0,1,2).

> **3. What is the output?**

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

> Answer
> <br> // 20
> <br> `this` in `function` will retrieve `this` from execution context (`shape`).
> <br> // NaN
> <br> `this` in arrow function will retrieve `this` from lexical context (`global this`).

> **4. What is the output?**

```js
+true;
!'Lydia';
```

- A: 1 and false
- B: false and NaN
- C: false and false

> Answer A: 1 and false

> **5. What is the output?**

```js
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: mouse.bird.size is not valid
- B: mouse[bird.size] is not valid
- C: mouse[bird["size"]] is not valid
- D: All of them are valid

> Answer A: mouse.bird.size is not valid // Can not read property of undefined (read size)

> **6. What is the output?**

```js
let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: Hello
- B: Hey!
- C: undefined
- D: ReferenceError
- E: TypeError

> Answer A: Hello

```js
let c = { greeting: 'Hey!' };
let d;
d = c;
// c, d --> { greeting: 'Hey!' }
c.greeting = 'Hello';
// c, d --> { greeting: 'Hello' }
console.log(d.greeting);
```

> **7. What is the output?**

```js
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: true false true
- B: false false true
- C: true false false
- D: false true true

> Answer C: true false false

```js
let a = 3; // --> literal number 3
let b = new Number(3); // --> object Number
let c = 3; // --> literal number 3
```

> **8. What is the output?**

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
```

- A: orange
- B: purple
- C: green
- D: TypeError

> Answer D: TypeError
> <br> static method can not be called from an instance of class

> **9. What is the output?**

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

> Answer A: {}

```js
let greeting;
greetign = {}; // create a new property on global this
console.log(greetign);
```

> **10. What happens when we do this?**

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
```

- A: Nothing, this is totally fine!
- B: SyntaxError. You cannot add properties to a function this way.
- C: "Woof" gets logged.
- D: ReferenceError

> Answer A: Nothing, this is totally fine!

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog'; // bark is a function and also an object, this statement makes sense
```
