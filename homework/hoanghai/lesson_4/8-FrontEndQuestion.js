/* Question 1
function sayHi() {
    // console.log(name);
    console.log(age);
    // var name = 'Lydia';
    let age = 21;
}
sayHi();
undefined, reffence err because the console.log is call before the age is assigned
name type is var so it's still get value undefined.  
*/

/* Question 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// The answer is 3 3 3, 0 1 2: Why?
// Explaination: Event Loop is a way browser work, when see setTimeOut funcion, it's not run, but push this into a callback queue,
// When the stack is blank, it get first element from queue (FIFO), push to stack and handler (it's time the code run).
// the tricky here is different betwwen let and var type, if 2 function is use var: value is: 3,3,3,3,3,3
// if both is let: => 0 1 2 0 1 2 => as all of us expect
// why?
// so the first loop: the var i is push to queue 3 time with value of i is 3 because it's global var
// queue => [log var i, log var i, log var i] with i = 3.
// second loop => [log var i (3), log var i (3), log var i (3), log let i (0), log let i (1), log let i (2)]
///  and the 3 3 3 0 1 2 is push to stack => execute => output we see
*/

/* Question 3:
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
   
console.log(shape.diameter()); 20
console.log(shape.perimeter()); NaN

Explain: Arrow function not bind there own this, so it's can't know what this.radius is
*/

/* Question 4
console.log(+true) => 1 
console.log(!'Lydia') => false
String has character return true, so !true is false
Unary plus: trying to convert anything into number
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
*/

/*
Question 5:
const bird = {
  size: 'small',
};
 
const mouse = {
  name: 'Mickey',
  small: true,
};


// console.log(mouse.bird.size) => no properties. mouse class doesn't has bird attributes
// console.log(mouse[bird.size]) => bird.size return 'small' and mouse has 'small' key so it return true
// console.log(mouse[bird["size"]]) ValidityState, like above

*/

/* Question 6:
let c = { greeting: 'Hey!' };
let d;
d = c;
c.greeting = 'Hello';
console.log(d.greeting);

=> Hello
// when you assign "=" d to c, d is not new Object, d and c is both share same memory, so when c change value, d too.
*/

/* Question 7:
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
// == just compare IDBCursorWithValue, not type and address,
// === is strictly type so result is true, false, fasle
*/

/* Question 9:
let greeting;
greetign = {}; // Typo!
console.log(greetign); => {}
// Explain: it still assign value
Why: In a basic coding example you’ll not notice a difference in a development console. Everything still acts as you would expect. Prefer using the let keyword and local scope and ECMAScript 6 strict mode.
score = 500;
let lastScore = 2950;
score // evaluates 500
lastScore //evaluaties 2950
*/

/* Question 10:
function bark() {
    console.log('Woof!');
}
bark.animal = 'dog';
//   Explain: it's still work no matter what
JavaScript functions are a special type of objects, called function objects.
A function object includes a string which holds the actual code -- the function body -- of the function.
The code is literally just a string.
console.log(bark instanceof Object);    // => true
*/