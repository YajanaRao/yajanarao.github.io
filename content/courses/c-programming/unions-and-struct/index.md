---
title: "Structure and Unions"
categories: c-programming
---

## Define structures

A struct (or structure) is a collection of variables (can be of different types) under a single name.

### Syntax of struct

```c
struct structureName
{
    dataType member1;
    dataType member2;
};
```

### Example

```c
struct Person
{
    char name[50];
    int citNo;
    float salary;
};
```

## Create struct variables

Creating struct variables allocates the memory

```c
struct Person
{
    char name[50];
    int citNo;
    float salary;
};

int main()
{
    struct Person person1, person2, p[20];
    return 0;
}
```

Another way is

```c
struct Person
{
    char name[50];
    int citNo;
    float salary;
} person1, person2, p[20];
```

## Access members of a structure

1. `.` - Member operator
2. `->` - Structure pointer operator

Example

```c
person2.salary;
person2->salary;
```

## Keyword typedef

`typedef` keyword is used to create an alias name for data types.

```c
struct Distance{
    int feet;
    float inch;
};

int main() {
    struct Distance d1, d2;
}
```

is equivalent to

```c
typedef struct Distance{
    int feet;
    float inch;
} distances;

int main() {
    distances d1, d2;
}
```

## Nested Structures

Structures within a structure

```c
struct complex
{
 int image;
 float real;
};

struct number
{
   struct complex comp;
   int integers;
} num1, num2;


```

```c
num2.comp.image = 11;
```

## Example

```c
// Program to add two distances (feet-inch)
#include <stdio.h>
struct Distance
{
    int feet;
    float inch;
} dist1, dist2, sum;

int main()
{
    printf("1st distance\n");
    printf("Enter feet: ");
    scanf("%d", &dist1.feet);

    printf("Enter inch: ");
    scanf("%f", &dist1.inch);
    printf("2nd distance\n");

    printf("Enter feet: ");
    scanf("%d", &dist2.feet);

    printf("Enter inch: ");
    scanf("%f", &dist2.inch);

    // adding feet
    sum.feet = dist1.feet + dist2.feet;
    // adding inches
    sum.inch = dist1.inch + dist2.inch;

    // changing to feet if inch is greater than 12
    while (sum.inch >= 12)
    {
        ++sum.feet;
        sum.inch = sum.inch - 12;
    }

    printf("Sum of distances = %d\'-%.1f\"", sum.feet, sum.inch);
    return 0;
}
```
