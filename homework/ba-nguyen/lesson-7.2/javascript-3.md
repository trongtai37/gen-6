**Question 1**: Write a **function printNumbers(from, to)** that outputs a number every second, starting from from and ending with to. Make two variants of the solution.

- Using setInterval

```typescript
function printNumbers(from: number, to: number) {
  let timeout: any;

  timeout = setInterval(() => {
    if (from <= to) {
      console.log(from);
    }

    if (from === to) {
      clearInterval(timeout);
    }

    from++;
  }, 1000);
}
```

- Using nested setTimeout

```typescript
function printNumbers(from: number, to: number) {
  if (from > to) return;

  setTimeout(() => {
    console.log(from);
    printNumbers(from + 1, to);
  }, 1000);
}
```

**Question 2**: Use the **reduce** method in combination with the **concat** method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

```typescript
const arrays = [[1, 2, 3], [4, 5], [6]];
→ [1, 2, 3, 4, 5, 6]

function flatten(arrays: any[], depth: number = Infinity): any[] {
  if (!Array.isArray(arrays)) {
    return arrays;
  }

  if (depth > 0) {
    return arrays.reduce(
      (prevArr, curVal) => prevArr.concat(flatten(curVal, depth - 1)),
      []
    );
  }

  return arrays.slice();
}
```

**Question 3**: Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. When defining the function, you can use a regular loop to do the actual looping.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

```typescript
type TestFuncType = (n: number) => boolean;
type UpdateFuncType = (n: number) => number;
type BodyFuncType = (n: number) => void;

function loop(
  value: number,
  testFunc: TestFuncType,
  updateFunc: UpdateFuncType,
  bodyFunc: BodyFuncType
) {
  while (testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
}
```

**Question 4**: Write a function, **deepEqual**, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

```typescript
function deepEqual<T1, T2>(value1: T1 | T2, value2: T1 | T2) {
  if (typeof value1 !== typeof value2) return false;

  if (
    typeof value1 === "object" &&
    Array.isArray(value1) &&
    Array.isArray(value2)
  ) {
    const newValue1 = value1.sort();
    const newValue2 = value2.sort();

    return (
      value1.length === value2.length &&
      newValue1.every((item, index) => deepEqual(item, newValue2[index]))
    );
  }

  if (typeof value1 === "object") {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    return (
      keys1.length === keys2.length &&
      keys1.every((item, index) => deepEqual(item, keys2[index]))
    );
  }

  return value1 === value2;
}

console.log(deepEqual([1, 2], [1, 2]));
```

**Question 5**: What's the output?

```js
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

A: false true false true <br />
B: false true true true <br />
`C: true true false true` => Answer <br />
D: true true true true

**Question 6**: When you click the paragraph, what's the logged output?

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

A: p div <br />
B: div p <br />
`C: p` => Answer <br />
D: div

**Explain:** Basically there are two event models in javascript. Event **capturing** and Event **bubbling**. In event bubbling, if you click on inside div, the inside div click event fired first and then the outer div click fired. while in event capturing, first the outer div event fired and than the inner div event fired

**Question 7**: What's the output?

```js
const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

A: undefined is 21 Lydia is 21 <br />
B: function function <br />
C: Lydia is 21 Lydia is 21 <br />
`D: Lydia is 21 function` => Answer

**Explain:**

- Bind(): is a function of function prototype so only function can call it. Bind allows us to set this variable and params of function if has
- Call(): return a copy function and we can use `call` to set this

**Question 8**: What does this return?

```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

A: "one" <br />
`B: "two"` => Answer <br />
C: "two" "one" <br />
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

A: 20, 40, 80, 160 <br />
B: 20, 40, 20, 40 <br />
`C: 20, 20, 20, 40` => Answer <br />
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

A: 1 <br />
`B: 2` => Answer <br />
C: 3 <br />
D: 4
