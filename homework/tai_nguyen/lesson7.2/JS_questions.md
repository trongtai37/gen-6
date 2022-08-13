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
function flatten(array: any[][]) {
  return array.reduce<any[]>((acc, item) => acc.concat(item), []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
```

**Question 3:** Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function

```typescript
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
