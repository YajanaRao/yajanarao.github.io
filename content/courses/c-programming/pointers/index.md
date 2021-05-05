---
title: "C Pointers"
categories: c-programming
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
printf("%d", *pc);  // Output: 1
printf("%d", c);    // Output: 1
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

## Pointer to array

```c
int arr[10];
int *p[10]=&arr; // Variable p of type pointer is pointing to the address of an integer array arr.
```

## Pointer to a function

```c
void displayValue(int value);

// Pointer p is pointing to the address of a function
int *ptr;
void(*p)(int) = &displayValue;
// void(*p)(int) = displayValue;
// returnType (*variableName)(parameters) = &functionName
```

> Unlike normal pointers, a function pointer points to code, not data. Typically a function pointer stores the start of executable code.
> Unlike normal pointers, we do not allocate de-allocate memory using function pointers.
> A function’s name can also be used to get functions’ address.

## Pointer to Pointer

Pointer contains the address of another pointer

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

## Void Pointer

The void pointer in C is a pointer which is not associated with any data types

```c
void *ptr;
```

1. Pointer arithmetic is not possible with void pointer due to its concrete size.

2. It can’t be used as dereferenced.

## Near pointer

Used to store 16 bit addresses.

The limitation is that we can only access 64kb of data at a time.

## Far pointer

Used to store 32 bit addresses.

## Dangling Pointers

A pointer pointing to a memory location that has been deleted (or freed) is called dangling pointer.

1. De-allocation of memory

```c
#include <stdlib.h>
#include <stdio.h>
int main()
{
	int *ptr = (int *)malloc(sizeof(int));
	free(ptr);
  // No ptr is a dangling pointer

	// No more a dangling pointer
	ptr = NULL;
}
```

2. Variable goes out of scope

```c
void main()
{
   int *ptr;
   .....
   .....
   {
       int ch;
       ptr = &ch;
   }
   .....
   // Here ptr is dangling pointer
}
```

## Advantage of pointer

1. Pointer reduces the code and improves the performance

2. We can return multiple values from a function using the pointer.

3. It makes you able to access any memory location in the computer's memory.

## Usage of pointer

There are many applications of pointers in c language.

1. Dynamic memory allocation using malloc() and calloc() functions.

2. Arrays, Functions, and Structures

## Dynamic memory allocation

The concept of dynamic memory allocation in c language enables the C programmer to allocate memory at runtime.

> 4 functions of stdlib.h header file.

1. malloc()
2. calloc()
3. realloc()
4. free()

## malloc() function

The malloc() function allocates single block of requested memory.

Initialize memory at execution time, so it has garbage value initially.

It returns NULL if memory is not sufficient.

```c
ptr=(cast-type*)malloc(byte-size)
```

## calloc() function

The calloc() function allocates multiple block of requested memory.

It initially initialize all bytes to zero.

It returns NULL if memory is not sufficient.

The syntax of calloc() function is given below:

```c
ptr=(cast-type*)calloc(number, byte-size)
```

## Deference between `malloc()` and `calloc()`

**Initialization**:
malloc() - doesn't clear and initialize the allocated memory.
calloc() - initializes the allocated memory by zero.

**Speed**:
malloc() is fast.
calloc() is slower than malloc().

**Arguments & Syntax**:
malloc() takes 1 argument

1. The number of bytes to be allocated

calloc() takes 2 arguments:

1. length
   the number of blocks of memory to be allocated

2. bytes
   the number of bytes to be allocated at each block of memory

```c
   void *malloc(size_t bytes);
   void *calloc(size_t length, size_t bytes);
```

**Meaning on name**:
The name malloc means "memory allocation".
The name calloc means "contiguous allocation".
