---
title: "Looping"
categories: c-programming
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

> Example for infinite loops are `while(true)` or `for(;;)`

## Do While loop

Condition is executed after the body of the loop. Also called as exist controlled loop.

### Syntax:

```c

do{
    <instructions>
} while(<condition>)
```

### Example:

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

- Initialization of the for loop is performed only once
- Condition check is done on every start of every iteration. If the test expression is evaluated to false, the for loop is terminated.
- Incrementation/ Decrementation happens at the end of each iteration

Example:

```c
int i;
for(i =0; i< 13; i++ ){
    printf(9*1);
}

```

![For Loop](/images/for-flowchart.png)

### Various forms of for loop in C

1. Initialization part can be skipped from the loop

```c
int num=10;
for (;num<20;num++)
```

Note: Even though we can skip initialization part but semicolon (;) before condition is must, without which you will get compilation error.

2. You can also skip the increment. Semicolon (;) is must after condition logic.

```c
for (num=10; num<20; )
{
      //Statements
      num++;
}
```

3. The counter variable is initialized before the loop and incremented inside the loop.

```c
int num=10;
for (;num<20;)
{
      //Statements
      num++;
}
```

4. `for(;;)` is valid infinite loop

## Nested Loops

Allows us to repeat along two dimensions

```c
 int i, j;
 for(i=0;i<10: i++){
     for(j=1;j<10;j++){
         printf(i * j);
     }
 }

```

## Break Statement

Used to exist the loop

## Continue statement

Skip to next iteration without existing out of the loop

## Example

```c

#include<stdio.h>

int main(){
    int on = 1;
    int a, b;
    while(on){
        printf("Enter two number a and b: ");
        scanf("%d %d", &a, &b);
        if(a == 0 || b ==0){
            break;
        }

        if(a == 1 || b == 1){
            continue;
        }

        printf("The output of %d and %d is %d\n", a, b, a+b);
        printf("enter 0 to turn of the calculator: ");
        scanf("%d", &on);
    }

    printf("\nThank you!!");
}

```
