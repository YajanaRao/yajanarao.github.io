---
title: "Strings and Character array"
categories: tutorial
---

String is a sequence of characters terminated by null character '\0'

```c
char c[] = "c string";
```

Memory allocation

```md
[c][ ][s][t][r][i][n][g][\0]
```

- String is not a data type in C
- A string is one-dimensional array of characters

## Declaring string variables

```c
char s[5];
```

## Initializing a string variables

There are different ways to initialize a character array variable.

```c

char name[13] = "StudyTonight";       // valid character array initialization

char name[10] = {'L','e','s','s','o','n','s','\0'};     // valid initialization

char c[] = "c string";  // Valid initialization

char ch[3] = "hell";    // Illegal

```

## Assigning Values to Strings

```c
char str[4];
str = "hell";   // Illegal
```

> The strcpy() function can be used to copy the string instead.

## String Input and Output

Input function scanf() and gets() can be used with %s format specifier to read a string input from the terminal.

- `scanf()` terminates its input on the first white space it encounters.

```c

#include<stdio.h>
#include<string.h>

int main()
{
    char str[20];
    char text[20];

    // using gets
    gets(text);
    printf("%s\n", text);

    // using scanf
    printf("Enter a string: ");
    scanf("%[^\n]", str);  //scanning the whole string, including the white spaces
    printf("%s\n", str);
}

```

## String Handling Functions

C supports a large number of string handling functions in the standard library "string.h"

| Method   | Description                      |
| -------- | -------------------------------- |
| strcat() | concatenate(combine) two strings |
| strlen() | returns length of a string       |
| strrev() | reverse of a string              |
| strcpy() | Copies one string into another   |
| strcmp() | compare two string               |

## Passing strings to functions

```c

#include <stdio.h>
void displayString(char str[]);

int main()
{
    char str[50];
    printf("Enter string: ");
    gets(str);
    displayString(str);     // Passing string to function.
    return 0;
}
void displayString(char str[])
{
    printf("String Output: ");
    puts(str);
}

```
