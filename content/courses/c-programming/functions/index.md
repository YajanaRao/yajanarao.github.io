---
title: "Functions"
categories: tutorial
---

## Functions

A function is a block of code that performs a specific task.

A function is a set of statements that take inputs, do some specific computation and produces output.



### Uses of functions

- To improve readability
- Reusability
- Easy to Debug
- Reduce the size of the code


### Parameter and Arguments

**Parameter**: Is a variable in the declaration and definition of the function.

**Arguments**: Is the actual value of the parameter that gets passed to the function. 


### Function prototype or Declaration

Declaration of a function that specifies function's name, parameters and return type. It doesn't contain function body.

**Syntax**

```
returnType functionName(type1 argument1, type2 argument2, ...);
```

### Calling a function

Control of the program is transferred to the user-defined function by calling it.

**Syntax**

```
functionName(argument1, argument2, ...);
```

#### Passing arguments to a function

![Passing arguments to a function](./passing-arguments.png)


**Pass by value**:

values of actual parameters are copied to function’s formal parameters and the two types of parameters are stored in different memory locations.

**Pass by reference**:

 Both actual and formal parameters refer to same locations, so any changes made inside the function are actually reflected in actual parameters of caller.

### Function definition

Function definition contains the block of code to perform a specific task.

#### Return Statement


**Syntax**

```
returnType functionName(type1 argument1, type2 argument2, ...)
{
    //body of the function
    return (expression);
}
```


![Return statement](./return-statement.png)

### Types of functions

- Standard library functions
- User defined functions

### Standard library functions

The standard library functions are built-in functions in C programming.

- `printf()` is a standard library function to send formatted output to the screen. The function is defined in `stdio.h` header file

- The `sqrt()` function calculates the square root of a number. The function is defined in the `math.h` header file.  

#### Advantages of using library functions

1. They work
2. Optimized for performance
3. Saves development time
4. Portable
5. Provides abstraction
### User-defined function

User created functions

### How functions work in C

![How functions work](./how-functions-work.png)

> Every C program has a function called main() that is called by operating system when a user runs the program.

> In C, functions can return any type except arrays and functions.