**1. Write a curry function that can do the following:**

```js
// Modify the below function
function curry(f) {
  const curriedArgs = [];

  return function curriedFunc(param) {
    curriedArgs.push(param);
    if (curriedArgs.length >= f.length) {
      return f(...curriedArgs);
    }
    return curriedFunc;
  };
}

// Do not modify the below function
function main() {
  const sum = (a, b) => {
    return a + b;
  };
  const curriedSum = curry(sum);
  curriedSum(1)(2); // returns 3
}
```

**2. Write a function that can memoize the result of a function:**

```js
function serializeArgs(args) {
  return JSON.stringify(args);
}

// Modify the below function
function memoize(func) {
  const map = new Map();
  return function (...args) {
    const key = serializeArgs(args);

    if (map.has(key)) return map.get(key);
    const value = func(...args);
    map.set(key, value);

    return value;
  };
}

// Do not modify the below function
function main() {
  const func = (a, b) => {
    console.log('Doing some calculation');
    return a + b;
  };
  const memoized = memoize(func);
  memoized(1, 2); // returns 3
  memoized(1, 2); // returns 3 (from cache)
  memoized(1, 3); // returns 4
  memoized(1, 3); // returns 4 (from cache)
}
```

**3. What does `JavaScript is an asynchronous, single-thread language` mean?**

`single-thread` is that there will be only one thread (process) available for the instructions to be executed.

Javascript runtime is single-threaded. It executes the javascript program. It maintains a single stack where the instructions are pushed to control the order of execution and popped to get executed. And a heap space where the object references are stored and garbage collected.

JS achieve asynchronous task by having Event Loops, Callback queue, and WebAPIs to handle tasks in the background. The call stack recognizes functions of the Web API and hands them off to be handled by the browser. Once those tasks are finished by the browser, they return and are pushed onto the stack as a callback.

**4. Explain Event Loop in detail.**

The event loop concept is very simple. There’s an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

The general algorithm of the engine:

1. While there are tasks:
2. execute them, starting with the oldest task.
   Sleep until a task appears, then go to 1.

It may happen that a task comes while the engine is busy, then it’s enqueued.

Along with macrotasks(tasks), there are microtasks.

Microtasks come solely from our code. They are usually created by promises: an execution of `.then/catch/finally` handler becomes a microtask. Microtasks are used “under the cover” of await as well, as it’s another form of promise handling.

To summary the detailed event loop algorithm:

1. Dequeue and run the oldest task from the macrotask queue.
2. Execute all microtasks:

- While the microtask queue is not empty:
  - Dequeue and run the oldest microtask.

3. Render changes if any.
4. If the macrotask queue is empty, wait till a macrotask appears.
5. Go to step 1.

**5. What's the output?**

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- A: TypeError
- B: SyntaxError
- C: Lydia Hallie
- D: undefined undefined

> **Answer A: TypeError**
>
> `getFullName` is a property of function `Person`, so it is not available in member, which is an instance of Person

**6. What's the output?**

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2'); // '1' + '2' = '12'
```

- A: NaN
- B: TypeError
- C: "12"
- D: 3

> **Answer C: "12"**
>
> When operator `+` have a param is string type, the rest param is casted to string too.

**7. All object have prototypes?**

- A: true
- B: false

> **Answer B: false**
>
> We can create an empty object without `prototype` using `Object.create`
> ex: `const objectWithoutPrototype = Object.create(null)`;

**8.**

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: NaN
- B: TypeError
- C: "12"
- D: 3

> **Answer C: "12"**

**9.**

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    // create a new object with new reference
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: You are an adult!
- B: You are still an adult.
- C: Hmm.. You don't have an age I guess

> **Answer C: Hmm.. You don't have an age I guess**
>
> So using `===` or `==` will check the reference of `data` and `{ age: 18 }`. Every time you make the condition `data == { age: 18 }` or `data === { age: 18 }` the object `{ age: 18 }` is newly created with new reference and the condition is always `false`;

**10.**

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

A: "number"
B: "array"
C: "object"
D: "NaN"

> **Answer C: "object"**
>
> The data structure of `args` is an array. In JS, an array is still an object so the `typeof args === 'object'`

**11.**

```js
function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge();
```

A: 21
B: undefined
C: ReferenceError
D: TypeError

> **Answer C: ReferenceError**
>
> In strict mode, we have to using `let`, `const` or `var` to declare a variable. If you do not, JS will throw ReferenceError at runtime.

**12.**

How long is cool_secret accessible?
`sessionStorage.setItem('cool_secret', 123);`

A: Forever, the data doesn't get lost.
B: When the user closes the tab.
C: When the user closes the entire browser, not only the tab.
D: When the user shuts off their computer.

> **Answer B: When the user closes the tab.**
>
> `sessionStorage` is designed to be accessible in browser tab scope and browser tab lifetime.
