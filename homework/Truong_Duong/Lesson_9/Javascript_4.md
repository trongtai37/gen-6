# Javascript 4

**Question 1**: The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called `Group` (since Set is already taken). Like Set, it has `add`, `delete`, and `has` methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

```js
class Group {
  _map = {};

  static from(arrays) {
    const group = new Group();

    for (const ele of arrays) {
      if (!(ele in group._map)) {
        group._map[ele] = 1;
      }
    }
    return group;
  }

  has(val) {
    return val in this._map;
  }

  add(val) {
    if (val in this._map) return;
    this._map[val] = 1;
  }

  delete(val) {
    if (!(val in this._map)) return;
    delete this._map[val];
  }

}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false
```

**Question 2**: Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but alone dot isn’t.

```js
// Fill in this regular expression.
let number = /^[+-]?((\d+[.]?\d*)|(\d*[.]?\d+))(e|e-|e\+|E|E-|E\+)?\d*$/;
 
// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
```

**Question 3**: Given an array of promises, `Promise.all` returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. **If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise.**
Implement something like this yourself as a regular function called Promise_all.

Remember that after a promise has succeeded or failed, it can’t succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise.

```js
function Promise_all(promises) {
  const results = Array(promises.length);
  let resolveCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([]);

    promises.map((promise, index) => {
      promise
        .then(res => {
          results[index] = res;
          resolveCount += 1;
          if (resolveCount === promises.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err))
    });
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
```

**Question 4**: How can we log the values that are commented out after the console.log statement?

```js
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

A: `game.next("Yes").value` and `game.next().value`
B: `game.next.value("Yes")` and `game.next.value()`
C: `game.next().value` and `game.next("Yes").value`
D: `game.next.value()` and `game.next.value("Yes")`

> **Answer: C**

**Question 5**: What's the output?

```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}
 
getItems(["banana", "apple"], "pear", "orange")
```

A: ["banana", "apple", "pear", "orange"]
B: [["banana", "apple"], "pear", "orange"]
C: ["banana", "apple", ["pear"], "orange"]
D: SyntaxError

> **Answer: D** the rest operartor `...args` must be placed last in function prototype

**Question 6**: What's the output ?

```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }
 
const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }
 
console.log(getList(list))
console.log(getUser(user))
```

> `console.log(getList(list))` ⇒ [[1, [2, 3, 4]]]
> `console.log(getUser(user))` ⇒ SyntaxError, update it to  `const getUser = user => ({ name: user.name, age: user.age })`

**Question 7**: What's the output?

```js
console.log(`${(x => x)('I love')} to program`);
```

A: I love to program
B: undefined to program
C: ${(x => x)('I love') to program
D: TypeError

**Answer: A**

**Question 8**: What's the output?

```js
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

A: {name: "Sarah", age: 22}
B: {name: "Sarah", age: 23}
C: {name: "Lydia", age: 22}
D: {name: "Lydia", age: 23}

**Answer: C**
**Explain** If we pass a object to `changeAge` or `changeAgeAndName`, the value of object will be updated because it is reference type, if not, a copy version of person `{ ...person }` will be pass to the function and the original value of `person` is not updated since we are updating on copy of person.

**Question 9**: What's the output?

```js
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

A: Promise {1} Promise {2} Promise {3}
B: Promise {`<pending>`} Promise {`<pending>`} Promise {`<pending>`}
C: 1 2 3
D: undefined undefined undefined

**Answer: C**

**Question 10**: What's the output?

```js
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

A: Woah some cool data
B: Oh finally!
C: Woah some cool data Oh finally!
D: Oops didn't work Oh finally!

**Answer: C**

> Explain
> `[rv] = await expression` ⇒ rv: Returns the fulfilled value of the promise, or the value itself if it's not a Promise.
> `finally` always run