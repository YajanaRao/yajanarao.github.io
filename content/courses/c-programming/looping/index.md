---
title: "Looping"
categories: tutorial
---

World is full of repetition

Loops are used to repeat a set of instructions a specific number of times.

## While Loop

A while loop is a way to repeat code until some condition is false
It is a entry controlled or pre checking loop

```c

while(<condition>){
    <instructions>
}

```

Example

```c

int y = 40;

while(y < 400){
    y = y + 20;
}

```

> If condition inside the parenthesis never become false it will lead to **Infinite Loops**

## Do While loop

Condition is executed after the body of the loop. Also called as exist controlled loop.

```c

do {
    // statements
} while (expression)

```

Example :

```c

int y = 40;

do {
    y = y + 20;
} while(y < 200);

```

## For Loop

For loop starts with a 3 part header inside the parenthesis
It is a entry controlled or pre checking loop

```c
for(initialization; condition; increment/decrement)
```

- Initial value of the for loop is performed only once
- Condition check is done on every start of every iteration
- Incrementation/ Decrementation happens at the end of each iteration

Example:

```c
int i;
for(i =0; i< 13; i++ ){
    printf(9*1);
}

```

## Nested Loops

Allows us to repeat along two dimensions

```c
 int i, j;
 for(i=0;i<10: i++){
     for(j=1;j<10;j++){
         printf(i * J);
     }
 }

```

## Break Statement

Used to exist the loop

## Continue statement

Skip to next iteration without existing out of the loop
