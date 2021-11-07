---
title: "Coding best practices"
date: "2021-08-01T22:40:32.169Z"
categories: best-practices
---
## Be consistence with your editor

It might be your IDE or code editor, Please don\'92t change them often. Code editors or IDE\'92s has there own keybindings, themes and functionality which takes a while for to get comfortable with

- Make some space for your code

Remove unwanted distractions apart from code from the editor space

- Know your editor well.

Understand the shortcuts for navigation and text input. It improves your performance

## Create a wrapper around external libraries before using

In case if you want to replace the library, You don't need to change every where if you have a wrapper created around it.

## Understand SOLID design principle

SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands for five key design principles: 
- **Single responsibility principle**

    A class should have one, and only one, reason to change.

- **Open-closed principle**

    You should be able to extend a class’s behavior without modifying it. Or simply open for extension and closed for modification.
- **Liskov substitution principle**
- **Interface segregation principle** 
- **Dependency inversion principle** 

    Developer should depend on abstractions, not on concretions.
    high level modules should not depend upon low level modules. Both should depend on abstractions.
    abstractions should not depend on details. Details should depend upon abstractions.

## AHA ( Avoid hasty abstractions )

> prefer duplication over the wrong abstraction

## DRY ( Don't repeat yourself )

The DRY Principle states that “Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.” This is also sometimes known as DIE: Duplication Is Evil. 

Simply stated, the same piece of code should never be repeated over and over. 

## WET ( Write everything twice )

> You can ask yourself "Haven't I written this before?" two times, but never three.

## Keep it simple

Just as one of the coding best practices is to keep your code readable, you should also strive to keep it simple. Complex code means the likelihood of more bugs and more mistakes. 

**References**:
- https://web.archive.org/web/20150906155800/http:/www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf
- https://youtu.be/agkWYPUcLpg
