---
title: "C Pointers"
categories: tutorial
---

Pointers (pointer variables) are used to store addresses rather than values.

## Address in C

`&` gives the address of the variable in memory

```c
#include <stdio.h>
int main()
{
  int var = 5;
  printf("var: %d\n", var);

  // Notice the use of & before var
  printf("address of var: %p", &var);
  return 0;
}
```

> You will probably get a different address when you run the above code.

## Declaration

```c

int* p;
int *p1;
int * p2;
int* p1, p2;
```

## Assigning addresses to Pointers

```
int* pc, c;
c = 5;
pc = &c;
```

## Get Value of stored in Pointers

```c

int* pc, c;
c = 5;
pc = &c;
printf("%d", *pc);   // Output: 5

```
