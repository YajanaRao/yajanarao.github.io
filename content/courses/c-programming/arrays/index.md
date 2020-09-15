Arrays a kind of data structure that can store a fixed-size sequential collection of elements of the same type.

Collection of variables of the same type.

> size and type of an array cannot be changed once it is declared.

> Array values are stored in contiguous memory locations

## Declaring Arrays

Syntax

```md
type arrayName [ arraySize ];
```

Example

```c
double balance[10];
```

## Initializing Arrays

```c
double type0[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};
double type1[] = {1000.0, 2.0, 3.4, 7.0, 50.0};

```

## Multi-dimensional Arrays

```md
type name[size1][size2]...[sizeN];
```

Example

```c
int threedim[5][10][4];
```

### Two-dimensional Arrays

A two-dimensional array is, in essence, a list of one-dimensional arrays

#### Initializing

```c

int a[3][4] = {  
   {0, 1, 2, 3} ,   /*  initializers for row indexed by 0 */
   {4, 5, 6, 7} ,   /*  initializers for row indexed by 1 */
   {8, 9, 10, 11}   /*  initializers for row indexed by 2 */
};

```


#### Accessing Two-Dimensional Array Elements

```c
int val = a[2][3];
```

#### Change Value of Array elements

```c
a[2][3] = 5;
```

## Passing Arrays as Function Arguments

1.  Parameters as a pointer 

```c

void myFunction(int *param) {
    // body of the function
}

```

2. parameters as a sized array 

```c
void myFunction(int param[10]) {
    // function body
}
```

3. parameters as an unsized array

```c
void myFunction(int param[]) {
    // body of the function
}
```

## Return array from function

Return a pointer to an array by specifying the array's name without an index.

```c

int * myFunction() {
    // function body
}

```


## Example

```c
#include <stdio.h>

/* function to generate and return random numbers */
int * getRandom( ) {

   static int  r[10];
   int i;
  
   for ( i = 0; i < 10; ++i) {
      scanf("%d", &r[i]);
      printf( "r[%d] = %d\n", i, r[i]);
   }

   return r;
}

/* main function to call above defined function */
int main () {

   /* a pointer to an int */
   int *p;
   int i;

   p = getRandom();
	
   for ( i = 0; i < 10; i++ ) {
      printf( "*(p + %d) : %d\n", i, *(p + i));
   }

   return 0;
}
```