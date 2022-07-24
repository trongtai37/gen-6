<!-- TODO: Take this test -->

> **1. What is the output?**

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

- A: Lydia and undefined
- B: Lydia and ReferenceError
- C: ReferenceError and 21
- D: undefined and ReferenceError

> Answer \_\_

> **2. What is the output?**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: 0 1 2 and 0 1 2
- B: 0 1 2 and 3 3 3
- C: 3 3 3 and 0 1 2

> Answer \_\_

> **3. What is the output?**

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

> Answer \_\_

> **4. What is the output?**

```js
+true;
!'Lydia';
```

- A: 1 and false
- B: false and NaN
- C: false and false

> Answer \_\_

> **5. What is the output?**

```js
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
```

- A: mouse.bird.size is not valid
- B: mouse[bird.size] is not valid
- C: mouse[bird["size"]] is not valid
- D: All of them are valid

> Answer \_\_

> **6. What is the output?**

```js
let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```

- A: Hello
- B: Hey!
- C: undefined
- D: ReferenceError
- E: TypeError

> Answer \_\_

> **7. What is the output?**

```js
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- A: true false true
- B: false false true
- C: true false false
- D: false true true

> Answer \_\_

> **8. What is the output?**

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
```

- A: orange
- B: purple
- C: green
- D: TypeError

> Answer \_\_

> **9. What is the output?**

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

> Answer \_\_

> **10. What happens when we do this?**

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
```

- A: Nothing, this is totally fine!
- B: SyntaxError. You cannot add properties to a function this way.
- C: "Woof" gets logged.
- D: ReferenceError

> Answer \_\_
