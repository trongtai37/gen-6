**Question 1:** Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

```typescript
class Group<T> {
  static from<T>(array: T[]): Group<T> {
    return new Group(array);
  }

  private _internalArray: T[];
  constructor(array: T[]) {
    this._internalArray = [] as T[];
    array.forEach((item) => {
      this.add(item);
    });
  }

  has(value: T): boolean {
    return this._internalArray.indexOf(value) > -1;
  }

  add(value: T) {
    if (!this.has(value)) {
      this._internalArray.push(value);
    }
  }

  delete(value: T) {
    if (this.has(value)) {
      this._internalArray = this._internalArray.filter(
        (item) => item !== value
      );
    }
  }
}
```

**Question 2:** Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.

```javascript
let number = /^[\-+]?(\d(\.?\d*)?|(\.\d+))(([eE][\-+]?)?\d*)?$/;

for (let str of [
  '1',
  '-1',
  '+15',
  '1.55',
  '.5',
  '5.',
  '1.3e2',
  '1E-4',
  '1e+12',
]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.']) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
```

Explanation:

- The `[\-+]?` indicates that number can be positive (with and without `+`) and negative
- The `(\d(\.?\d*)?|(\.\d+))` indicates that number can be `1.` or `.1` format.
- The `(([eE][\-+]?)?\d*)?` indicates that number can be presented in format `...e+1` or `E-2`

**Question 3:** Given an array of promises, Promise.all returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise.

```typescript
type InferPromiseValue<T> = T extends Promise<infer V> ? V : never;
type PromiseAll<TPromises extends Promise<any>[]> = InferPromiseValue<
  TPromises[number]
>[];

function Promise_all<T extends Promise<any>[]>(promises: T) {
  return new Promise<PromiseAll<T>>((resolve, reject) => {
    let resolvedCount = 0;
    const promiseResults: PromiseAll<T> = [];

    if (promises.length === 0) {
      resolve(promiseResults);
    }

    promises.forEach((p, index) => {
      p.then(
        function onFullFilled(value) {
          resolvedCount++;
          promiseResults[index] = value;

          if (resolvedCount === promises.length) {
            resolve(promiseResults);
          }
        },
        function onRejected(reason) {
          reject(reason);
        }
      );
    });
  });
}
```

**Question 4:** How can we log the values that are commented out after the console.log statement?

```javascript
function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

> Answer: C
> `game` variable is a generator, to log the value of the first `yield` statement, we use `game.next([param]).value`
> The `answer` variable will be the param of the `next()` call;
> The next `next()` call will execute the next line after yield statement. To return `JavaScript loves you back ❤️`,
> `answer` must be != `Yes`

**Question 5:** What's the output?

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: ["banana", "apple", "pear", "orange"]
- B: [["banana", "apple"], "pear", "orange"]
- C: ["banana", "apple", ["pear"], "orange"]
- D: SyntaxError

> Answer: D
> The rest operator can only be used at the end of parameters slot of a function

**Question 6:** What's the output?

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age } // Syntax Error

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

> Answer: Syntax Error

**Question 7:** What's the output?

```javascript
console.log(`${((x) => x)('I love')} to program`);
```

- A: I love to program
- B: undefined to program
- C: ${(x => x)('I love') to program
- D: TypeError

> Answer A, the syntax used is IIFE (Immediately Invoke Function Expression)

**Question 8:** What's the output?

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- A: {name: "Sarah", age: 22}
- B: {name: "Sarah", age: 23}
- C: {name: "Lydia", age: 22}
- D: {name: "Lydia", age: 23}

> Answer C: {name: "Lydia", age: 22}

**Question 9:** What's the output?

```javascript
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();
```

- A: Promise {1} Promise {2} Promise {3}
- B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
- C: 1 2 3
- D: undefined undefined undefined

> Answer C: 1 2 3
> `range` function is a generator function and it return a iterator that generate promises
> `for ... of` will iterate all values of `gen` generator, using `await` will get the value resolved by promise.

**Question 10:** What's the output?

```javascript
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Oh finally!');
  }
})();
```

- A: Woah some cool data
- B: Oh finally!
- C: Woah some cool data
  Oh finally!
- D: Oops didn't work
  Oh finally!

> Answer - C: Woah some cool data, Oh finally!
> `myPromise` is always resolved so it will not throw any error.
> `finally` block is executed regarding of the promise is resolved or rejected
