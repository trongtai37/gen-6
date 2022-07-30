# Javascript excercises

**1. Choose the correct answer and explain your choice. What's the output?**

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError

> **Answer: D**
> Explain: variable defined with `var` was hoisted the `declaration part` into the begining of the function, but the value did not. Therefore, it returned `undefined` with `name`
> While with variable defined with `let`, a ES6 syntax, it wasn't hoisted by default. Therefore, it returned a ReferenceError here.

**2. What's the output?**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
A: 0 1 2 and 0 1 2
B: 0 1 2 and 3 3 3
C: 3 3 3 and 0 1 2
```

> **Answer: C**
> For the first code block, the iterator variable `i` is defined with `var`, it got hoisted to the begining of the application,  JS treat it like a `global variable`. Therefore, after going through the first for loop, `i = 3`. After that, `setTimeout` function was executed, reference to the global variable `i`, meaning the results is `3 3 3`.
> For the second code block, the iterator variable `i` is defined with `let`, it have block scope. Therefore, when `setTimeout` function reference to variable `i`, due to `closure` in JS, the value of `i` is wrap to the execution context of each `setTimeout` function. Result: `0 1 2`


**3. What's the output?**

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

> **Answer: 20, NaN**
> The main point is the value `this` in function declaration (`diameter`) vs arrow function (`perimeter`)
> `this` in function declaration is `dynamic`, depend on the context => In this case: `this` is shape object
> `this` in arrow function is `bound lexically`, it is equal to `this` value of the nearest outer scope, which is `global` object in this case. `global` have no radius attribute => `global.radius = undefined`, and `number * undefined = NaN`

**4. What's the output?**

```js
+true;
!'Lydia';
```

A: 1 and false
B: false and NaN
C: false and false
 
> Answer: A
> By default, JS will try to convert the input to its expected type.
> `+true` return 1. After `+` operator, JS expect a number, true is converted to 1
> `!'Lydia'` return `false`. After `!` operator, JS expect a boolean, it compare `Lydia === true`, therefore `Lydia` is treated as `true` and `!true = false`

**5. Which one is true?**

```js
const bird = {
  size: 'small',
};
 
const mouse = {
  name: 'Mickey',
  small: true,
};
```

A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid

> **Answer: A**
> Option A: `mouse.bird` return `undefined`, then access `size` of `undefined` return error
> Option B, C: are almost similar, just different syntax. First JS will evaluate `bird.size` (`bird["size"]`), then return `small`, `mouse.small` return `true`.

**6. What's the output?**

```js
let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

A: Hello
B: Hey!
C: undefined
D: ReferenceError
E: TypeError
 
> **Answer: A**
> Object is reference type, meaning that when we assign `d=c`, `d` is the pointer to the area where c value is store. Therefore, `d.greeting` is equal to `c.greeting`

**7. What's the output?**

```js
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
```

A: true false true
B: false false true
C: true false false
D: false true true

> **Answer: C**
> Reference here: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
> In short, `Number('123') === 123`
> When Number is called as a constructor (with new), it creates a `Number object`, which is not a primitive. `typeof new Number(42) === "object"`, and `new Number(42) !== 42`

**8. What's the output?**

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

A: orange
B: purple
C: green
D: TypeError

> **Answer: D**
> `colorChange` is a static method, it can't be called with instance of a class, it is a class method `Chameleon.colorChange`

**9. What's the output?**

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

A: {}
B: ReferenceError: greetign is not defined
C: undefined

> **Answer: A**
> `greetign = {};` this line will not throw any error, JS will understand it like it is defined with `var greetign`, and create a new global variable name `greetign` with initial value is `{}`

**10. What happens when we do this?**

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
```

A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: "Woof" gets logged.
D: ReferenceError

> Answer: A
> A method is a function that is a property of an object, we can set other keys of the object also
> Reference [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## BigFrontend.dev problems

- https://bigfrontend.dev/problem/implement-basic-debounce

```js
/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let timeout = null;

  return (args) => {
    clearTimeout(timeout);
    timeout = setTimeout( () => {
      func(args);
    } , wait);
  }
}
```

- https://bigfrontend.dev/problem/implement-basic-throttle

```js
/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let timer = null, lastArgs = null;

  return function throttled(...args) {
    if(!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        if(lastArgs) {
          func.apply(this, lastArgs);
          lastArgs = null;
        }
        timer = null;
      }, wait)
    } else {
      lastArgs = args;
    }
  }
}

```