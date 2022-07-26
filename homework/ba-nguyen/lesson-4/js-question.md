### Choose the correct answer and explain your choice.

1. **What's the output?**

   ```bash
   function sayHi() {
       console.log(name);
       console.log(age);
       var name = 'Lydia';
       let age = 21;
   }
   sayHi();
   ```

   A: Lydia and undefined <br />
   B: Lydia and ReferenceError <br />
   C: ReferenceError and 21 <br />
   `D: undefined and ReferenceError` <br />
   => D

2. **What's the output?**

   ```bash
   for (var i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1);
   }
   for (let i = 0; i < 3; i++) {
       setTimeout(() => console.log(i), 1);
   }
   ```

   A: 0 1 2 and 0 1 2 <br />
   B: 0 1 2 and 3 3 3 <br />
   `C: 3 3 3 and 0 1 2` <br />
   => C

3. **What's the output?**

   ```bash
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

   Output:

   ```bash
   20
   NaN
   ```

4. **What's the output?**

   ```bash
   +true;
   !'Lydia';
   ```

   `A: 1 and false` <br />
   B: false and NaN <br />
   C: false and false <br />
   => A

5. **Which one is true?**

   ```bash
   const bird = {
       size: 'small',
   };

   const mouse = {
       name: 'Mickey',
       small: true,
   };
   ```

   A: mouse.bird.size is not valid <br />
   B: mouse[bird.size] is not valid <br />
   C: mouse[bird["size"]] is not valid <br />
   `D: All of them are valid`
   => D

6. **What's the output?**

   ```bash
   let c = { greeting: 'Hey!' };
   let d;
   d = c;
   c.greeting = 'Hello';
   console.log(d.greeting);
   ```

   `A: Hello` <br />
   B: Hey! <br />
   C: undefined <br />
   D: ReferenceError <br />
   E: TypeError <br />
   => A

7. **What's the output?**

   ```bash
   let a = 3;
   let b = new Number(3);
   let c = 3;
   console.log(a == b);
   console.log(a === b);
   console.log(b === c);
   ```

   A: true false true <br />
   B: false false true <br />
   `C: true false false` <br />
   D: false true true <br />
   => C

8. **What's the output?**

   ```bash
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

   A: orange <br />
   B: purple <br />
   C: green <br />
   `D: TypeError` <br />
   => D

9. **What's the output?**

   ```bash
   let greeting;
   greetign = {}; // Typo!
   console.log(greetign);
   ```

   `A: {}` <br />
   B: ReferenceError: greetign is not defined <br />
   C: undefined <br />
   => A

10. **What happens when we do this?**

    ```bash
    function bark() {
        console.log('Woof!');
    }
    bark.animal = 'dog';
    ```

    `A: Nothing, this is totally fine!` <br />
    B: SyntaxError. You cannot add properties to a function this way. <br />
    C: "Woof" gets logged. <br />
    D: ReferenceError <br />
    => A
