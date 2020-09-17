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

A pointer points to either no address or a random address. where as, A variable has an address but contains random garbage value.

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

> `*` is called the dereference operator (when working with pointers). It operates on a pointer and gives the value stored in that pointer.

## Changing Value Pointed by Pointers

```c
int* pc, c;
c = 5;
pc = &c;
c = 1;
printf("%d", c);    // Output: 1
printf("%d", *pc);  // Ouptut: 1
```

or

```c
int* pc, c;
c = 5;
pc = &c;
*pc = 1;
printf("%d", *pc);  // Ouptut: 1
printf("%d", c);    // Output: 1
```

## NULL Pointers

A pointer that is assigned NULL is called a null pointer.

```c
#include <stdio.h>

int main () {
   int  *ptr = NULL;
   printf("The value of ptr is : %x\n", ptr  );
   return 0;
}
```

## Pointer arithmetic

1. Incrementing a Pointer

```c
ptr++;
```

2. Decrementing a Pointer

```c
ptr--;
```
