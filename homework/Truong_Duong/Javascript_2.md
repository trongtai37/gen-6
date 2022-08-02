# Javascript Excercise 2

**1. Write a curry function that can do the following:**

```js
// Modify the below function
function curry(f) {
// do something
    const argsList = [];
    const fn =  function(a) {
        if(argsList.length === f.length - 1) {
            return f(...argsList, a);
        }
        argsList.push(a);
        return fn;
    }
    return fn;
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
// Modify the below function
function memoize(func) {
    const cache = {};

    const memorizeFn = function (a, b) {
        if (cache[a] && cache[a][b]) {
            return cache[a][b];
        }
        const result = func(a, b);
        cache[a] = { ...cache[a] };
        cache[a][b] = result;
        return result;
    };

    return memorizeFn;
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

Javascript is single-thread language because it have only one callstack, it execute code in order and must finish executing before moving to the next task.

But thanks to Javascript Runtime Environment (Javascript Engine (Callstack, Heap), WEB API, Event Queue, Event Loop), we can execute asynchronous task. This runtime environment help asynchronous code to be schedule by WEB API, then move to Event Queue and Event Loop will transfer these tasks to the main Callstack when ever it is empty. I will explain in detail in question 4.

**4. Explain Event Loop in detail.**

First, let understand about JRE (Javascript Runtime Environment). It includes these main components:

- CallStack
- Web API
- Event Queue
- Event Loop

![JRE](https://images.ctfassets.net/tk7dn5bsmtgs/1DfkwhLXpuvsapwTArFqgM/91797af8f589e6578e071de15d7964d9/js-engine.webp)

- **CallStack**: is a stack, synchronous code will be added to this stack and execute in order. When the execution of the function is completed, JS engine itself removes it from the Callstack and starts executing the function on the top of the stack.
- **Web API**: is provided by browser. This is where asynchronous codes like setTimeout, ajax call, ... will be sent to
  - In case of timer function like setTimeout, it waits until the timer count becomes zero, and then move it to Event Queue
  - AJAX call will wait in the WEB API until the response from the AJAX call is returned. Then move the callback function to Event Queue
- **Message Queue** all the tasks after waiting in Web API will be sent to this queue, and will be added to CallStack later in FIFO order
- **Event Loop** Event loop continuously checks if the execution context stack is empty and if there are any messages in the event queue. It will move the method from the callback queue to ECS only when the execution context stack is empty.

Let's go through an example to understand how Event Loop work

```js
console.log('start');
setTimeout(() => {console.log('timeout')}, 2000);
Promise.resolve('promise').then(res => console.log(res));
console.log('end';
```

1. Line 1: added to callstack => execute, and pop out => print 'start'
2. Line 2: Asynchronous code, sent to WEB API, waiting there for 2s and then move to Event Queue
3. Line 3: Asynchronous code, sent to WEB API, and immediately added to Event Queue, it added to the Event Queue ealier that Line 2
4. Line 4: added to callstack => execute, and pop out => Print 'end'
5. Event Loop find that callstack is empty, it move the callback from Line 3 to the callstack => Print 'promise'
6. Continue to add the callback of line 2 to the Callstack => Print 'timeout'

In general, Event Loop is a mechanism that help JS run asynchronous code without blocking the main Callstack, make it able to **almost** doing multiple things at the same time.

- Reference: [Javascript Runtime Environment](https://iamcoding.vercel.app/javascript-event-loop) - My blog

**5. What's the output?**

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
 
> **Answer: A**
> `getFullName` is not a instance method, it is a class method, we can call it like `Person.getFullName()`.
> The instance `member` have no method `getFullName`, therefore it return `undefined`, and calling `undefined()` will throw TypeError (is not a function)

**6. What's the output?**

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

A: NaN
B: TypeError
C: "12"
D: 3

> **Answer: C**
> JS will convert data type dynamically to make the operation make sense. In this case, `1` is converted to `'1'` string

**7. All object have prototypes?**
A: true
B: false

> TODO
> **Answer: B**
> Except the object create by `new` keyword

**8.**

```js
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

A: NaN
B: TypeError
C: "12"
D: 3

> **Answer: C** Duplicate with question 6.

**9.**

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess

> **Answer: C**
> we are checking 2 pointers pointing object value, and it completely different

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

> **Answer: C**
> args is an array and `typeof array` is `object`

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

> **Answer: C**
> In `strict mode` variable declaration without `var`, `let`, `const` will throw `ReferenceError`
> If not in strict mode, `age` will be treated like `var age = ...`, and have global scope.

**12.**

How long is cool_secret accessible?
`sessionStorage.setItem('cool_secret', 123);`

A: Forever, the data doesn't get lost.
B: When the user closes the tab.
C: When the user closes the entire browser, not only the tab.
D: When the user shuts off their computer.

> **Answer: B**
> data inside `sessionStorage` is cleared after closing tab