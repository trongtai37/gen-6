**Question 1:** Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to. Make two variants of the solution.

```typescript
// Using setInterval
function printNumber(from: number, to: number) {
  let intervalId: number;

  intervalId = setInterval(() => {
    if (from <= to) {
      console.log(from);
    }

    if (from === to) {
      clearInterval(intervalId);
    }

    from++;
  }, 1 * 1000);
}

// Using nested setTimeout
function printNumber(from: number, to: number) {
  function schedule(x: number) {
    if (x > to) {
      return;
    }

    setTimeout(() => {
      console.log(x);
      schedule(x + 1);
    }, 1 * 1000);
  }

  schedule(from);
}
```

**Question 2:** Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

```typescript
function flatten(array: any[][]): any[] {
  return array.reduce<any[]>(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(flatten(item)) : acc.concat(item),
    []
  );
}

let arrays = [[1, 2, 3], [4, [5]], [6]];
console.log(flatten(arrays));
```

**Question 3:** Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function

```ts
type TestFunc = (x: number) => boolean;
type UpdaterFunc = (x: number) => number;
type BodyFunc = (x: number) => any;

function loop(
  total: number,
  test: TestFunc,
  updater: UpdaterFunc,
  bodyFunc: BodyFunc
) {
  while (test(total)) {
    bodyFunc(total);
    total = updater(total);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
```

**Question 4:** Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

```typescript
function deepEqual(itemA: any, itemB: any): boolean {
  if (typeof itemA !== typeof itemB) return false;

  if (
    typeof itemA === 'number' ||
    typeof itemA === 'bigint' ||
    typeof itemA === 'boolean' ||
    typeof itemA === 'string' ||
    typeof itemA === 'undefined' ||
    typeof itemA === 'function' ||
    typeof itemA === 'symbol'
  ) {
    return itemA === itemB;
  }

  if (
    typeof itemA === 'object' &&
    Array.isArray(itemA) &&
    Array.isArray(itemB)
  ) {
    return (
      itemA.length === itemB.length &&
      itemA.every((item, index) => deepEqual(item, itemB[index]))
    );
  }

  const keysA = Object.keys(itemA);
  const keysB = Object.keys(itemB);

  return (
    keysA.length === keysB.length &&
    keysA.every((key) => deepEqual(itemA[key], itemB[key]))
  );
}

console.log(deepEqual(1, 1));
console.log(deepEqual(1, '0'));
console.log(deepEqual({ a: [1], b: [2, 1] }, { a: [1], b: [2] }));
```

**Question 5:** What's the output?

```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
```

- A: false true false true
- B: false true true true
- C: true true false true
- D: true true true true

> Answer: C

**Question 6:** When you click the paragraph, what's the logged output?

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

- A: p div
- B: div p
- C: p
- D: div

> Answer: A
> The `click` event from paragraph happen and it's also bubbled to its parents too.

**Question 7:** What's the output?

```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

- A: undefined is 21 Lydia is 21
- B: function function
- C: Lydia is 21 Lydia is 21
- D: Lydia is 21 function

> Answer: D
> The `call()` method calls the function with a given `this` value and arguments provided.
> It returns the result of calling the function with the specified `this` value and arguments.
>
> The `bind()` function returns a copy of the given function with the specified this value, and initial arguments (if provided).

**Question 8:** What does this return?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

- A: "one"
- B: "two"
- C: "two" "one"
- D: "one" "two"

> Answer: B
> The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects.
> `firstPromise` and `secondPromise` are resolved but the second one is faster => `"two"`

**Question 9:** What's the output?

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: 20, 40, 80, 160
- B: 20, 40, 20, 40
- C: 20, 20, 20, 40
- D: NaN, NaN, 20, 40

> Answer: C
> The default parameter is applied when the param of function is not passed or `undefined` is passed.
> The spread operator will shallow copy the object, only copy the reference of object'values to new object.
> When we do not pass param to `multiply` function, `x` variable is referenced to new object `{number: 10}`, `console.log` will print the double of `10`, is `20`
> When we pass an object to `multiply` function, we passed py reference, so the operation `x.number *= 2` will make side effect to the `value` object.

**Question 10:** With which constructor can we successfully extend the Dog class?

```javascript
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

- A: 1
- B: 2
- C: 3
- D: 4

> Answer B:
> To successfully extends class `Dog`, inside the constructor of class `Labrador`, we have to call the `super(...)` (the constructor of the parent class) to construct all the things of the parent class.
> The [3] approach do not pass the name param to constructor so `name` is not declared => Reference Error
