---
title: 02. Values, Types, and Operators
categories: javascript
description: "We will look at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values."
---

> Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below. - Master Yuan-Ma, The Book of Programming

Inside the computer’s world, there is only data. You can read data, modify data, create new data. All this data is stored as long sequences of bits and is thus fundamentally same.

Bits are any kind of two-valued things, usually described as zeros and ones.

## Values

Chunks of bits are called values. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.

To create a value, you must merely invoke its name.

## Value Types

### Numbers

Values of the number type are numeric values.

Ex: 13

Use that in a program, and it will cause the bit pattern for the number 13 to come into existence inside the computer’s memory.

JavaScript uses a fixed number of bits, 64 of them, to store a single number value.

Fractional numbers are written by using a dot.

`9.81`

For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number.

`2.998e8`

That is 2.998 × 108 = 299,800,000.

Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. Unfortunately, calculations with fractional numbers are generally not. Just as π (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them

#### Arithmetic

The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them.

Ex:

```js
100 + 4 * 11;
(100 + 4) * 11;
```

The `+` and `*` symbols are called operators. When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators.

#### Special numbers

- **Infinity**

The first two are Infinity and -Infinity, which represent the positive and negative infinities.

- **NaN**

NaN stands for “not a number”, even though it is a value of the number type.

When you try to calculate `0 / 0` (zero divided by zero), `Infinity - Infinity`, or any number of other numeric operations you will be NaN.

## Strings

Strings are used to represent text. They are written by enclosing their content in quotes.

```js
`Down on the sea`;
("Lie on the ocean");
("Float on the ocean");
```

You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.

Newlines (the characters you get when you press enter) can be included without escaping only when the string is quoted with backticks (`).

whenever a backslash (\) is found inside quoted text, it indicates that the character after it has a special meaning. This is called escaping the character.

When an n character occurs after a backslash, it is interpreted as a newline. Similarly, a t after a backslash means a tab character.

```js
"This is the first line\nAnd this is the second";
```

> Many emoji take up two “character positions” in JavaScript strings.

Strings cannot be divided, multiplied, or subtracted, but the + operator can be used on them to concatenate two strings.

Ex:

The following line will produce the string "concatenate"

```js
"con" + "cat" + "e" + "nate";
```

Backtick-quoted strings, usually called template literals, can do a few more tricks.

```js
`half of 100 is ${100 / 2}`;
```

When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position. The example produces “half of 100 is 50”.

### Empty values

There are two special values, written null and undefined, that are used to denote the absence of a meaningful value.

### Short-circuiting of logical operators

The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.

#### Type coercion

`true` and `false` are Boolean values. To coerce a value into a boolean means to take any value that is NOT true or false and try to convert it to either of those. In JavaScript, you can easily check what the outcome of any value is when coerced into a Boolean by typing: `Boolean(value)`.

```js
Boolean("Hello");
// true
Boolean("");
// false
Boolean([]);
// true
Boolean({});
// true
Boolean(undefined);
// false
Boolean(null);
// false
Boolean(42);
// true
Boolean(0);
// false
```

You can see that some values evaluate to true and others to false. These values are usually called **truthy** and **falsy** values.

#### `||` operator:

will return the value to its left when that can be converted to true and will return the value on its right otherwise.

```js
console.log(null || "user");
// user
console.log("Agnes" || "user");
// Agnes
console.log(false || false || true);
// true
```

Practical application:

```js
let userIsLoggedIn = true;
function greet() {
  return "Welcome user!";
}
userIsLoggedIn && greet();
// "Welcome user!"

if (userIsLoggedIn) {
  greet();
}
```

In React application:

```jsx
function App({ name }) {
  return <div>{name && <h1>Hello ${name}</h1>}</div>;
}
```

Examples of expressions that can be converted to false are:

- null;
- NaN;
- 0;
- empty string ("" or '' or ``);
- undefined.

while all the other values count as true.

#### Logical AND (&&) operator:

In a chain of &&s, each value will be evaluated from left to right. If any of these values happen to be falsy, that value will be returned and the chain will not continue.

```js
console.log("user" && "");
// ""
console.log("Agnes" && "user");
// user
console.log("Agnes" && true && "user");
// user
console.log("Agnes" && undefined && "user");
// undefined
console.log("Agnes" && false && "user");
// false
```

## Data types

Javascript provides eight different data types which are

1. `undefined`
2. `null`
3. `boolean`
4. `string`
5. `symbol`
6. `bigint`
7. `number`

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

> > Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

`const` and `let` are block scoped and `var` is global scoped.

when we create a variable using var we see it in global context and for let and scope it is not

closes function along with lexical scope

## Summary

We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.

Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, \*, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.

## Reference:

- https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

- https://github.com/lydiahallie/javascript-questions

- https://eloquentjavascript.net/01_values.html

- https://medium.com/@nicolasmarcora/mastering-javascripts-and-logical-operators-fd619b905c8f
