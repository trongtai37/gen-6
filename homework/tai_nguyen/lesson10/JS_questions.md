**Question 1:** Complete the table

```html
<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
  ];

  const headerNames = ['name', 'height', 'place'];

  function buildHeader(headerNames) {
    const tr = document.createElement('tr');
    headerNames.forEach((name) => {
      const th = document.createElement('th');
      th.innerText = name;
      tr.appendChild(th);
    });

    return tr;
  }

  function buildRow(row, headerNames) {
    const tr = document.createElement('tr');
    headerNames.forEach((name) => {
      const td = document.createElement('td');
      if (typeof row[name] === 'number') {
        td.style.textAlign = 'right';
      }
      td.innerText = row[name];
      tr.appendChild(td);
    });

    return tr;
  }

  function buildTable(headerNames, rows) {
    const table = document.createElement('table');
    const header = buildHeader(headerNames);
    table.appendChild(header);

    rows.forEach((row) => {
      const rowElement = buildRow(row, headerNames);
      table.appendChild(rowElement);
    });

    return table;
  }

  const mountainDiv = document.getElementById('mountains');
  if (mountainDiv) {
    const table = buildTable(headerNames, MOUNTAINS);
    mountainDiv.appendChild(table);
  }
</script>
```

**Question 2:** Implement your own version of `getElementByTagName`

```typescript
function byTagName<T extends keyof HTMLElementTagNameMap>(
  node: Node,
  tagName: T
) {
  const tagNameUppercase = tagName.toUpperCase();
  const res: HTMLElementTagNameMap[T][] = [];

  function visit(node: Node) {
    if (node.nodeName === tagNameUppercase) {
      res.push(node as HTMLElementTagNameMap[T]);
    }

    if (node.hasChildNodes()) {
      node.childNodes.forEach((child) => {
        visit(child);
      });
    }
  }

  visit(node);

  return res;
}
```

**Question 3:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <tab-panel>
      <div data-tabname="one">Tab one</div>
      <div data-tabname="two">Tab two</div>
      <div data-tabname="three">Tab three</div>
    </tab-panel>
    <script>
      function asTabs(node) {
        const tabPanes = [];
        for (const child of node.childNodes.values()) {
          if (child instanceof HTMLElement) {
            const name = child.getAttribute('data-tabname');
            if (name) {
              tabPanes.unshift(child);
            }
          }
        }

        function showTabPane(name) {
          for (const tabPane of tabPanes) {
            const tabName = tabPane.getAttribute('data-tabname');
            if (tabName === name) {
              tabPane.style.display = 'block';
            } else {
              tabPane.style.display = 'none';
            }
          }
        }

        for (const tabPane of tabPanes) {
          const tabName = tabPane.getAttribute('data-tabname');
          const tabButton = document.createElement('button');
          tabButton.innerText = tabName;
          tabButton.addEventListener('click', () => {
            showTabPane(tabName);
          });
          node.prepend(tabButton);
        }

        const firstTabName = tabPanes
          .reverse()[0]
          ?.getAttribute('data-tabname');
        showTabPane(firstTabName);
      }
      asTabs(document.querySelector('tab-panel'));
    </script>
  </body>
</html>
```

**Question 4:**

```css
input[type='range'] {
  accent-color: #f44336;
}
```

**Question 5:** What's the output?

```javascript
const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(
    // Start: Block1
    () => console.log('Timeout 1!'),
    // End: Block1
    0
  );
  myPromise
    // Start: Block2
    .then((res) => res)
    .then((res) => console.log(`${res} 1!`));
  // End: Block2
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  // Start: Block3
  console.log(`${res} 2!`);
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
  // End: Block3
}

funcOne();
funcTwo();
```

- A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!
- B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!
- C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!
- D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!

> Answer C
> The JS engine automatically optimizes the Promise.resolve Chaining, so we can rewrite
> `const myPromise = Promise.resolve('Promise')`
> On async function, all statements after await can be considered as a then block, async function return a Promise as well.
>
> Code will run line by line, from top to bottom. It obviously log `Last line 1!` first and when it reach and complete the last line,
> Our Macrotask and Microtask will be:
> Macrotask: `Block1`
> Microtask: `Block2`, `Block3`
>
> Our callstack is empty so eventloop will pick the first item from Microtask,
> after `Block2` run, our Macrotask and Microtask will be:
> Macrotask: `Block1`
> Microtask: `Block3`, ` .then((res) => console.log(``${res} 1!``)); `
> after `Block3` run, `Promise 2`, `Last line 2` are logged, `() => console.log('Timeout 2!')` is added to Macrotask , our Macrotask and Microtask will be:
> Macrotask: `() => console.log('Timeout 1!')`, `() => console.log('Timeout 2!')`
> Microtask: ` .then((res) => console.log(``${res} 1!``)); `
> When Microtask run and emmpty, Macrotask will be run as a queue.

> Output: Last line 1! -> Promise 2! -> Last line 2! -> Promise 1! -> Timeout 1! -> Timeout 2!

**Question 6:** How can we invoke sum in sum.js from index.js?

```javascript
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
```

- A: sum(4)
- B: sum.sum(4)
- C: sum.default(4)
- D: Default aren't imported with \*, only named exports

> Answer C
> The `import *` syntax will import the `namespace` of the file (module), which includes `default`

**Question 7:** What's the output?

```javascript
const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia'; // get a property
person.name; // set a property
```

- A: Added a new property!
- B: Accessed a property!
- C: Added a new property! Accessed a property!
- D: Nothing gets logged

> Answer: C

**Question 8:** Which of the following will modify the person object?

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- A: person.name = "Evan Bacon" -> change value of property name
- B: person.age = 21 -> add a new property age
- C: delete person.name -> delete a property
- D: Object.assign(person, { age: 21 }) -> Object.assign mutate person object, not allowed

> Answer A
> `Object.seal()` seals an object that prevents object from extending and makes existing properties no-configurable.
>
> - Can not add new property
> - Can not delete a property
> - Can not config property
> - Can change value of the property as long as it is writable

**Question 9:** What's the output?

```javascript
const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: 2 4 and 3 6
- B: 2 NaN and 3 NaN
- C: 2 Error and 3 6
- D: 2 4 and 3 Error

> Answer A

**Question 10:** What's the output?

```javascript
class Counter {
  #number = 10;

  increment() {
    this.#number++;
  }

  getNum() {
    return this.#number;
  }
}

const counter = new Counter();
counter.increment();

console.log(counter.#number);
```

- A: 10
- B: 11
- C: undefined
- D: SyntaxError

> Answer D
> The convention `#variable` indicates the `variable` is private and it can only be accessed by class's method.
> It also affects at runtime as well, so program return Syntax Error.
