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

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

**Question 4**: Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

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