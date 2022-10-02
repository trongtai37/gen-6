**Question 1:** Describe the difference between `<script>`, `<script async>` and `<script defer>`
The `<script>` HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
When the browser loads HTML and comes across a `<script>...</script>` tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts `<script src="..."></script>`: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

`async` scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded.

**Question 2:** What's the difference between block, inline and inline-block?

- `inline` The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.

- `inline-block` It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.

- `block` The element will start on a new line and occupy the full width available. And you can set width and height values.

**Question 3:** In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.

> Answer [Text Search](./textSearch.ts)

**Question 4:** Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?

- `translate()` is a value of CSS transform. Changing `transform` does not trigger browser reflow or repaint but does trigger compositions, changing the absolute positioning triggers reflow
  => `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU
- When using `translate()`, the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning, it switches to position flow being applied.
- Moving elements with `translate()` is better than absolute positioning properties.

**Question 5:** Prototype

- In programming, we often want to take something and extend it. Prototypal inheritance is a language feature that helps in that.

- In JavaScript, objects have a special hidden property [[Prototype]], that is either null or references another object. That object is called “a prototype”.

- If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.

```js
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
```

- Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).

- If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.

```js
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping);
```
