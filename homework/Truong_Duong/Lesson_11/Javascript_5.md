**Question 1**: An HTML table is built with the following tag structure:

```html
<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>v
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>
```

For each row, the `<table>` tag contains a `<tr>` tag. Inside of these `<tr>` tags, we can put cell elements: either heading cells (`<th>`) or regular cells (`<td>`).

Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with `<th>` elements at the top, listing the column names.

Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.
Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

```html
<h1>Mountains</h1>
 
<div id="mountains"></div>
 
<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
 
// Your code here
  const mountains = document.getElementById('mountains');
  const table =  document.createElement('table');
 
// Append heading row
  const headings = Object.keys(MOUNTAINS[0]);
  const headingRow = document.createElement('tr');
  headings.forEach(key => {
    const th = document.createElement('TH');
    th.innerText = key;
    headingRow.appendChild(th);
  }); 
  table.appendChild(headingRow);
  
// Append table data
  MOUNTAINS.forEach(({name, height, place}) => {
    const rowData = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerText = name;
    td2.innerText = height;
    td2.style.textAlign = 'right';
    td3.innerText = place; 
    rowData.appendChild(td1); 
    rowData.appendChild(td2);
    rowData.appendChild(td3);
    table.appendChild(rowData);
  });
  
  mountains.appendChild(table);
</script>
```

**Question 2:** The `document.getElementsByTagName` method returns all child elements with a given tag name. Implement your own version of this as a function that takes a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.

To find the tag name of an element, use its `nodeName` property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.

```html
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>
 
<script>
  function byTagName(node, tagName) {
    // Your code here.
    let results = [];
    const children = node.children;
    
    for(let i = 0; i < children.length; i++) {
      if(children[i].tagName === tagName.toUpperCase()) {
        results.push(children[i]);
      }
      const nested = byTagName(children[i], tagName);
      results = [...results, ...nested];
    }

    return results;
  }
 
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
```
 
**Question 3**: Tabbed panels are widely used in user interfaces. They allow you to select an interface panel by choosing from a number of tabs “sticking out” above an element.
In this exercise you must implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of `<button>` elements at the top of the node, one for each child element, containing text retrieved from the `data-tabname` attribute of the child. All but one of the original children should be hidden (given a display style of none). The currently visible node can be selected by clicking the buttons.
When that works, extend it to style the button for the currently selected tab differently so that it is obvious which tab is selected.

```html
<tab-panel>
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</tab-panel>
<script>
  function asTabs(node) {
    // Your code here.
  }
  asTabs(document.querySelector("tab-panel"));
</script>
```

**My solution:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Question 3</title>
  <style type="text/css">
    tab-panel>button.selected {
      background-color: darkblue;
      color: white;
    }

    tab-panel>div.hidden {
      display: none;
    }
  </style>
</head>


<body>

  <tab-panel>
    <div data-tabname="one">Tab one</div>
    <div data-tabname="two">Tab two</div>
    <div data-tabname="three">Tab three</div>
  </tab-panel>

  <script>
    let currentTab;
    let currentContent;

    function handleSwichTab(event, content) {
      currentTab.classList.remove('selected');
      currentTab = event.target;
      currentTab.classList.add('selected');

      currentContent.classList.toggle('hidden');
      currentContent = content;
      currentContent.classList.toggle('hidden');
    }

    function asTabs(node) {
      const tabs = node.children.length;
      const tabsContent = node.querySelectorAll('div');

      for (let i = 0; i < tabs; i++) {
        tabsContent[i].classList.add('hidden');
        const buttonTab = document.createElement('button');
        buttonTab.innerText = tabsContent[i].getAttribute('data-tabname');
        buttonTab.addEventListener('click', (e) => handleSwichTab(e, tabsContent[i]));
        node.insertBefore(buttonTab, document.querySelector('div'));
      }

      currentTab = document.querySelector('button');
      currentTab.classList.add('selected');
      currentContent = document.querySelector('div');
      currentContent.classList.toggle('hidden');
    }

    asTabs(document.querySelector("tab-panel"));
  </script>
</body>

</html>
```

**Question 4**: https://bigfrontend.dev/css/change-color-of-input-elements

```css
input {
  accent-color: #F44336;
}
```
 
**Question 5**: What's the output?

```js
const myPromise = Promise.resolve(Promise.resolve('Promise'));
 
function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log('Last line 1!');
}
 
async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}
 
funcOne();
funcTwo();
```

A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!

B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!

C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!

D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!

> Answer: C

- Push funcOne to the call Stack
- Line 1 of funcOne: added Timeout to Macro Queue
- Line 2 of funcOne: added Line 2 to Micro Queue
- Line 3: Synchronous code ⇒ execute ⇒ print out 'Last line 1!'
- Push funcTwo to the call Stack
- Since the callstack is not empty yet, the Event Loop didn't push anything into the call stack
- Line 1 of funcTwo:
  - Note that `Promise.resolve(Promise.resolve('Promise'))` is equal to `Promise.resolve('Promise')`
  - The `await` keyword stop the execution until the promise resolve and keep on running any other synchronous code. In this case there is no other synchronous code
- Line 2 of funcTwo: `myPromise` resolve `promise` => Print out 'Promise 2!'
- Line 3 of funcTwo: added to macro queue
- Line 4 ⇒ Print out 'Last line 2!'
- Call stack is now empty, start with task from Micro queue first => Print out 'Promise 1!'
- Back to Macro Queue ⇒ Print out 'Timeout 1!' 'Timeout 2!'

**Question 6**: How can we invoke sum in sum.js from index.js?

```js
// sum.js
export default function sum(x) {
  return x + x;
}
 
// index.js
import * as sum from './sum';
```

A: sum(4)

B: sum.sum(4)

C: sum.default(4)

D: Default aren't imported with *, only named exports

> Answer: C

**Question 7**: What's the output?

```js
const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};
 
const person = new Proxy({}, handler);
 
person.name = 'Lydia';
person.name;
```

A: Added a new property!

B: Accessed a property!

C: Added a new property! Accessed a property!

D: Nothing gets logged

> Answer: C

**Question 8**: Which of the following will modify the person object?

```js
const person = { name: 'Lydia Hallie' };
 
Object.seal(person);
```

A: person.name = "Evan Bacon"

B: person.age = 21 

C: delete person.name 

D: Object.assign(person, { age: 21 }) 

> Answer: A. `Object.seal` prevent adding new property or remove existing one, but we can still modify the value of existing properties.

**Question 9**: What's the output?

```js
const add = x => x + x;
 
function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}
 
myFunc();
myFunc(3);
```

A: 2 4 and 3 6

B: 2 NaN and 3 NaN

C: 2 Error and 3 6

D: 2 4 and 3 Error

> Answer: A

**Question 10**: What's the output?

```js
class Counter {
  #number = 10
 
  increment() {
    this.#number++
  }
 
  getNum() {
    return this.#number
  }
}
 
const counter = new Counter()
counter.increment()
 
console.log(counter.#number)
```

A: 10

B: 11

C: undefined

D: SyntaxError

> Answer: D `#number` is private variable, `console.log(counter.#number)` will throw error, use `console.log(counter.getNum());` instead
