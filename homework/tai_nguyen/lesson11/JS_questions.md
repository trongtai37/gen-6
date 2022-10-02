**Question 1:** Difference between document load event and document DOMContentLoaded event?
The `DOMContentLoaded` event fires when the initial HTML document has been completely load and parsed, without waiting for stylesheets, images, and subframes to finish loading.

The `load` event fires when when a page is fully loaded. This event will be fired after the `DOMContentLoaded` event.

**Question 2:** How do you monitor your frontend app?
// TODO:

**Question 3:** Implement StoreData class

```js
let store = new StoreData();
store.add('name', 'joe');
store.add('age', 30);
console.log(store.has('age')); // return true
console.log(store.has('animal')); // return false
store.add('name', 'emma');
store.on('change:name', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
store.add('name', 'john');
store.on('age', (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});
store.add('age', 26);
store.on('change:age', (old_val, new_val, key) => {
  console.log(`${old_val > new_val ? 'older now' : ''}`);
});
store.add('age', 28);
store.add('age', 45);
```

> Answer [Store Data](./store.ts)

**Question 4:**
// TODO:

1. On the website of the stock exchange, there will be a list of thousands of stock codes. On the frontend side how to show, how to design it to run without lag?
2. On the website of the stock exchange, there are many stock codes, the backend's socket is constantly updating the price, so how should the frontend handle it to avoid lag?

**Question 5:** What's the output?

```js
class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);
```

- A: "Lydia"
- B: "Sarah"
- C: Error: cannot redeclare Person
- D: SyntaxError

> Answer B

**Question 6:** Which of these methods modifies the original array?

```js
const emojis = ['✨', '🥑', '😍'];

emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- A: All of them
- B: map reduce slice splice
- C: map slice splice
- D: splice

> Answer D

**Question 7:** What's the output?

```js
const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- A: undefined undefined undefined undefined
- B: Mara undefined Lydia Hallie ReferenceError
- C: Mara null Lydia Hallie null
- D: null ReferenceError null ReferenceError

> Answer B

**Question 8:** What's the output?

```js
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
```

- A: I'm pink. 🌸
- B: I'm pink. 🌸 I'm a bird. 🦢
- C: I'm a bird. 🦢 I'm pink. 🌸
- D: Nothing, we didn't call any method

> Answer B

**Question 9:** What's the output?

```js
const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.reject('Third');
const promise4 = Promise.resolve('Fourth');

const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

- A: [['First', 'Second'], ['Fourth']]
- B: [['First', 'Second'], ['Third', 'Fourth']]
- C: [['First', 'Second']]
- D: 'Third'

> Answer D
> **Question 10:** What's the output?

```js
const createMember = ({ email, address = {} }) => {
  const validEmail = /.+\@.+\..+/.test(email);
  if (!validEmail) throw new Error('Valid email pls');

  return {
    email,
    address: address ? address : null,
  };
};

const member = createMember({ email: 'my@email.com' });
console.log(member);
```

- A: { email: "my@email.com", address: null }
- B: { email: "my@email.com" }
- C: { email: "my@email.com", address: {} }
- D: { email: "my@email.com", address: undefined }

> Answer C
