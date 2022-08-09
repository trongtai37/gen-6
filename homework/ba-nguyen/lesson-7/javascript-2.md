1. **Write a curry function that can do the following:**

   // Modify the below function

   ```bash
    function curry(f: any) {
        const numbs: number[] = []
        const helper = (arg: number) => {
            if(numbs.length === f.length - 1) {
                return f(...numbs, arg)
            } else {
                numbs.push(arg)
            }
            return helper
        }

        return helper
    }
   ```

   // Do not modify the below function

   ```bash
   function main() {
       const sum = (a, b) => {
           return a + b;
       };
       const curriedSum = curry(sum);
       curriedSum(1)(2); // returns 3
   }

   ```

2. **Write a function that can memoize the result of a function:**

   // Modify the below function

   ```bash
   type ObjectType = { [key: string]: number };
   function memoize(func: (a: number, b: number) => number) {
       const hashMap: { [key: string]: ObjectType } = {};

       const helper = (a: number, b: number) => {
           if (hashMap[a] && hashMap[a][b]) {
           return hashMap[a][b];
       }

       const res = func(a, b);
       hashMap[a] = { ...hashMap[a], [b]: res };

       return res;
   };

   return helper;
   }
   ```

   // Do not modify the below function

   ```bash
   function main() {
       const func = (a, b) => {
           console.log('Doing some calculation');
           return a + b;
       };

       const memoized = memoize(func);
       memoized(1, 2); // returns 3
       memoized(1, 2); // returns 3 (from cache)
       memoized(1, 3); // returns 4
       memoized(1, 3); // returns 4 (from cache)
   }
   ```

3. **What does "JavaScript is an asynchronous, single-thread language" mean?**

   > Typing

4. **Explain Event Loop in detail**

   > Typing

5. **What's the output?**

   ```bash
   function Person(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
   }

   const member = new Person('Lydia', 'Hallie');
   Person.getFullName = function() {
       return `${this.firstName} ${this.lastName}`;
   };

   console.log(member.getFullName());
   ```

   `A: TypeError` <br />
   B: SyntaxError <br />
   C: Lydia Hallie <br />
   D: undefined undefined <br />
   => A

   > `getFullName` isn't an instance method, it's a class method. `member` is an instance but it doesn't have `getFullName` method so `member.getFullName()` => `undefined()`. Specifically in JS, `undefined` is one of data type so the `undefined()` will return error which call `TypeError`

6. **What's the output?**

   ```bash
   function sum(a, b) {
        return a + b;
   }

   sum(1, '2')
   ```

   A: NaN <br />
   B: TypeError <br />
   `C: "12"` <br />
   D: 3 <br />
   => C

   > In JS, the `+` operator is used for both numeric addition and string concatenation

7. **All object have prototypes?**

   `A: true` <br />
   B: false <br />
   => A

   > All object have internal protoypes.
   > const obj1 = {}, obj1.contructor.prototype => Object
   > funtion obj2() {}, obj2.contructor.prototype => function
   > funtion obj3() {}, (new obj3).contructor.prototype => Object

8. **What's the output?**

   ```bash
   function sum(a, b) {
       return a + b;
   }

   sum(1, '2');
   ```

   => duplicate question 6

9. **What's the output?**

   ```bash
   function checkAge(data) {
       if (data === { age: 18 }) {
           console.log("You are an adult!");
       } else if (data == { age: 18 }) {
           console.log("You are still an adult.");
       } else {
           console.log("Hmm.. You don't have an age I guess");
       }
   }

   checkAge({ age: 18 });
   ```

   A: You are an adult! <br />
   B: You are still an adult. <br />
   `C: Hmm.. You don't have an age I guess` <br />
   => C

   > It's very same value but it's not. When we compare with 2 object, actually we are comparing 2 address of the object so it always different

10. **What happens when we do this?**

    ```bash
    function getAge(...args) {
        console.log(typeof args);
    }
    getAge(21);
    ```

    A: "number" <br />
    B: "array" <br />
    `C: "object"` <br />
    D: "NaN" <br />
    => C

    > JavaScript currently has 8, and only 8 value types:
    > `undefined`, `boolean`, `string`, `number`, `bigint`, `symbol`, `function`, and `object`.
    > Of these, `object` is the type associated with any expression which doesn’t have a type matching any of the other 7 types. For this reason, the typeof operator returns `object` for arrays.
