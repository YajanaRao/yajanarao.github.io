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

AHA stands for "Avoid Hasty Abstractions", described by Kent C. Dodds as optimizing for change first, and avoiding premature optimization.  AHA programming assumes that both WET and DRY solutions inevitably create software that is rigid and difficult to maintain. Instead of starting with an abstraction, or abstracting at a specific number of duplications, software can be more flexible and robust if abstraction is done when it is needed, or, when the duplication itself has become the barrier and it is known how the abstraction needs to function.

## DRY ( Don't repeat yourself )

The DRY Principle states that “Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.” This is also sometimes known as DIE: Duplication Is Evil. 

Simply stated, the same piece of code should never be repeated over and over. 

## WET ( Write everything twice )

WET solutions are common in multi-tiered architectures where a developer may be tasked with, for example, adding a comment field on a form in a web application. The text string "comment" might be repeated in the label, the HTML tag, in a read function name, a private variable, database DDL, queries, and so on. A DRY approach eliminates that redundancy by using frameworks that reduce or eliminate all those editing tasks except the most important ones, leaving the extensibility of adding new knowledge variables in one place.[5] Kevin Greer named and described this programming principle.

### More declarative code with built-in functions

> You can ask yourself "Haven't I written this before?" two times, but never three.

## KISS (Keep It Simple, Stupid or Keep It Short and Simple)

The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided.

Just as one of the coding best practices is to keep your code readable, you should also strive to keep it simple. Complex code means the likelihood of more bugs and more mistakes. 

## YAGNI
“You Aren’t Gonna Need It” – Sometimes, as developers, we try to think way ahead, into the future of the project, coding some extra features “just in case we need them” or thinking“we will eventually need them”. Just one word: Wrong! You didn’t need it, you don’t need it and in most of the cases… “You Aren’t Gonna Need It”.

YAGNI is a principle behind the extreme programming (XP) practice of “Do the Simplest Thing That Could Possibly Work”. Even when this principle is part of XP, it is applicable in all kinds of methodologies and processes of development. By implementing the ideals of “You Aren’t Gonna Need It” programming, you will save yourself time and be able to move forward with projects efficiently.

When you feel an unexplained anxiety to code some extra features that in the moment are not necessary, but you think they will be useful in the future, just calm down and see all the pending work you have at this moment. You can’t waste time coding those features that you may end up needing to correct, change, or remove because they do not fit the needs of the product.

 
**References**:
- https://web.archive.org/web/20150906155800/http:/www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf
- https://youtu.be/agkWYPUcLpg
- https://kentcdodds.com/blog/aha-programming
- https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction
- https://en.wikipedia.org/wiki/KISS_principle
