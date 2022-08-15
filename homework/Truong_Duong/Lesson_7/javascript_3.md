# Javascript 3

**Question 1**: Write a function `printNumbers(from, to)` that outputs a number every second, starting from from and ending with to. Make two variants of the solution.

- Using setInterval.

```js
function printNumbers(from, to) {
  let current = from;
  const intervalId = setInterval(() => {
    console.log(current);
    current += 1;

    if (current === to + 1) clearInterval(intervalId);
  }, 1000);
}
printNumbers(1, 5);
```

- Using nested setTimeout.

```js
// Solution 1
function printNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * (i - from + 1))
  }
}

printNumbers(1, 5);

// Solution 2: 
function printNumbers(from, to) {
  let chain = Promise.resolve();

  for (let i = from; i <= to; i++) {
    chain = chain.then(() => {
      return new Promise(res => {
        setTimeout(() => {
          console.log(i);
          res();
        }, 1000);
      })
    });
  }
}

printNumbers(1, 5);
```

**Question 2**: Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

```js
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

const flatten = (array) => {
  return array.reduce((previousResult, current) => {
    let temp = current;
    if (typeof current === 'object') {
      temp = flatten(current);
    }
    return previousResult.concat(temp);
  }, []);
}

console.log(flatten([arrays]))
```

**Question 3**: Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. When defining the function, you can use a regular loop to do the actual looping.

```js
// Your code here.
function loop(initialValue, testFn, updateFn, bodyFn) {
  let current = initialValue;

  while(testFn(current)) {
    bodyFn(current);
    current = updateFn(current);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

**Question 4**: Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

```js
function deepEqual(param1, param2) {
  if (param1 === param2) return true;

  if (param1 === null || param2 === null || typeof param1 !== 'object' || typeof param2 !== 'object') return false;

  const param1Keys = Object.keys(param1);
  const param2Keys = Object.keys(param2);

  if (param1Keys.length !== param2Keys.length) return false;

  for (const key of param1Keys) {
    if (!(key in param2) || !deepEqual(param1[key], param2[key])) return false;
  }

  return true;
}


const param1 = {
  a: '1',
  b: { c: 1 }
}
const param2 = {
  a: '1',
  b: { d: 1 }
}
console.log(deepEqual(param1, param2));
```

- Reference: [Link](https://medium.com/analytics-vidhya/javascript-deep-comparison-of-objects-with-a-recursive-call-f67a8f37a343#:~:text=The%20function%20deepEqual%20takes%20in,object%20and%20are%20not%20null%20.)


**Question 5**: What's the output?

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

A: false true false true
B: false true true true
C: true true false true
D: true true true true

> **Answer: C** Object keys in JS are strings by default, while `Set` have type differentiation, 1 is different with '1' in Set.

**Question 6**: When you click the paragraph, what's the logged output?

```js
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
A: p div
B: div p
C: p
D: div

> **Answer: A** Event handler are executed in the bubbling phase, it go from deepest element to outer element.

**Question 7**: What's the output?

```js
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function

> **Answer: D**
> `call` will be executed immediately, bind `this` and arguments to the function
> `bind` is not executed immedately, it just binding the value of `this` and arguments to the function and return a function

**Question 8**: What does this return?

```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

A: "one"
B: "two"
C: "two" "one"
D: "one" "two"

> **Answer: B**
> `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

**Question 9**: What's the output?

```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

A: 20, 40, 80, 160
B: 20, 40, 20, 40
C: 20, 20, 20, 40
D: NaN, NaN, 20, 40

> **Answer: C**
> **Explain:** With the first and second call of multiply, since no param was passed, the default value was evaluate again each time, create a **copy** object of value `{...value}`, therefore the original value was not updated, and print out `20` each time
> With the third and fourth call, we are now passing by reference to object value each time, then the original value was updated.

> > If we didn't create a copy version of `value`, in case of no default value like this `const multiply = (x = value) => {}`, the value of the original object would be updated each time and print out `20 40 80 160`

**Question 10**: With which constructor can we successfully extend the Dog class?

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```

A: 1
B: 2
C: 3
D: 4

**Answer: B**