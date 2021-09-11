---
title: 01. Basics of Javascript
categories: javascript
---

> We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity. - Ellen Ullman, Close to the Machine: Technophilia and its Discontents

## What is JavaScript?

JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.

After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.

## A JavaScript engine

A program or interpreter that understands and executes JavaScript code.

**Synonyms:** JavaScript interpreter, JavaScript implementation

JavaScript engines are commonly found in web browsers, including V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge. Each engine is like a language module for its application, allowing it to support a certain subset of the JavaScript language.

A JavaScript engine to a browser is like language comprehension to a person. If we re-visit our example of the actions “walk”, “run”, “jump”, a JavaScript engine is the part of an “entity” that actually understands what these actions mean.

## A JavaScript runtime

The environment in which the JavaScript code runs and is interpreted by a JavaScript engine.The runtime provides the host objects that JavaScript can operate on and work with.

**Synonyms**: Host environment

Have you ever worked with the window or document host objects? The window and document objects are not actually a part of the core JavaScript language. They are Web APIs, objects provided by a browser acting as JavaScript’s host environment. For the server side, the JavaScript runtime is Node.js. Server-related host objects such as the file system, processes, and requests are provided in Node.js.

An interesting point: different JavaScript runtimes can share the same JavaScript engine. V8, for example, is the JavaScript engine used in both Google Chrome and Node.js — two very different environments.

## Comments

Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

`// Single line comment `

`/* for multi line comment */`

Comments are mostly used to document the code for easy understading.

## Reference:

- https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

- https://github.com/lydiahallie/javascript-questions

- https://eloquentjavascript.net/00_intro.html
