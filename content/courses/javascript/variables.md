---
title: 02. Variables
categories: javascript

---

### Data types

Javascript provides eight different data types which are 
1. `undefined`
2. `null`
3. `boolean`
4. `string` 

Example "12", "Hello world", "123 Cats"

5. `symbol`
6. `bigint` 
7. `number`

Example 12, 1, 100
8. `object`.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

### Creating variables

```js
var myVariable;
```

### Assigning values
you can store a value in a variable with the assignment operator (=).
```js
myVariable = 5;
```

### Initializing varialbes with value

```js
var myVariable = 5;
```

### Understanding Uninitialized Variables

When variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of undefined.


>> Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

`const` and `let` are block scoped and `var` is global scoped.

when we create a variable using var we see it in global context and for let and scope it is not

closes function along with lexical scope


## Reference:

https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

https://github.com/lydiahallie/javascript-questions
