---
title: "04. Errors"
categories: c-programming
---

## Core Dump (Segmentation fault) in C

Core Dump/Segmentation fault is a specific kind of error caused by accessing memory that “does not belong to you."

- When a piece of code tries to do read and write operation in a read only location in memory or freed block of memory, it is known as core dump.
- It is an error indicating memory corruption.

1. Modifying a string literal :

```c
int main()
{
char *str;

/* Stored in read only part of data segment */
str = "GfG";

/* Problem: trying to modify read only memory */
*(str+1) = 'n';
return 0;
}
```

2. Accessing an address that is freed :

```c
// C program to illustrate
// Core Dump/Segmentation fault
#include <stdio.h>
#include<alloc.h>
int main(void)
{
	// allocating memory to p
	int* p = malloc(8);
	*p = 100;

	// deallocated the space allocated to p
	free(p);

	// core dump/segmentation fault
	// as now this statement is illegal
	*p = 110;

	return 0;
}
```

3. Accessing out of array index bounds

4. Improper use of scanf()
